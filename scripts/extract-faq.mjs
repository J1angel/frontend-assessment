import fs from "fs";
import os from "os";
import path from "path";

const html = fs.readFileSync(path.join(os.tmpdir(), "qoves.html"), "utf8");
const faqStart = html.indexOf('class="FAQ-module-scss-module__xxkhBW__collapsibles"');
const faqEnd = html.indexOf('<section aria-labelledby="w', faqStart);
const faqHtml = html.slice(faqStart, faqEnd > 0 ? faqEnd : faqStart + 500000);

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();
}

function stripHtml(s) {
  return decode(s.replace(/<[^>]+>/g, " "));
}

function parseDefinitionList(html) {
  const items = [];
  const parts = html.split('content_list_item">');
  parts.shift();
  for (const chunk of parts) {
    const titleM = chunk.match(/content_list_title">([^<]+)</);
    const descM = chunk.match(/content_list_content"><p>([\s\S]*?)<\/p>/);
    const exampleM = chunk.match(
      /content_list_example_content"><p>([\s\S]*?)<\/p>/,
    );
    if (!titleM) continue;
    const item = {
      title: stripHtml(titleM[1]),
      description: descM ? stripHtml(descM[1]) : "",
    };
    if (exampleM) item.example = stripHtml(exampleM[1]);
    items.push(item);
  }
  return items.length ? { type: "definition-list", items } : null;
}

function htmlToBlocks(inner) {
  const blocks = [];
  const dl = parseDefinitionList(inner);
  if (dl) {
    const before = inner.split('class="FAQ-module-scss-module__xxkhBW__content_list"')[0];
    if (before.trim()) blocks.push(...htmlToBlocks(before));
    blocks.push(dl);
    return blocks.filter((b) => !isJunk(b));
  }

  for (const m of inner.matchAll(/<p>([\s\S]*?)<\/p>/gi)) {
    const text = stripHtml(m[1]);
    if (text) blocks.push({ type: "paragraph", text });
  }
  for (const m of inner.matchAll(/<ul[^>]*>([\s\S]*?)<\/ul>/gi)) {
    const items = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((li) =>
      stripHtml(li[1]),
    );
    if (items.length) blocks.push({ type: "list", items });
  }
  for (const m of inner.matchAll(/<ol[^>]*>([\s\S]*?)<\/ol>/gi)) {
    const items = [...m[1].matchAll(/<li>([\s\S]*?)<\/li>/gi)].map((li) =>
      stripHtml(li[1]),
    );
    if (items.length) blocks.push({ type: "ordered-list", items });
  }

  if (!blocks.length) {
    const plain = stripHtml(inner);
    if (plain) blocks.push({ type: "paragraph", text: plain });
  }
  return blocks.filter((b) => !isJunk(b));
}

function isJunk(block) {
  if (block.type === "paragraph") {
    return !block.text || block.text.startsWith("<") || block.text.length < 2;
  }
  return false;
}

function extractAnswer(qBlock) {
  const marker = "content_collapsible_content";
  const start = qBlock.indexOf(marker);
  if (start < 0) return [];
  const contentStart = qBlock.indexOf(">", start) + 1;
  const nextQ = qBlock.indexOf("content_collapsible", contentStart + 1);
  const end = nextQ > 0 ? nextQ : qBlock.length;
  return htmlToBlocks(qBlock.slice(contentStart, end));
}

const categories = [];
for (const block of faqHtml.split(
  /class="FAQ-module-scss-module__xxkhBW__collapsible(?:\s|")/,
)) {
  const titleM = block.match(/collapsible_header_title">([^<]+)</);
  if (!titleM || !block.includes("content_collapsible_header_title")) continue;

  const items = [];
  for (const qBlock of block.split(
    /class="FAQ-module-scss-module__xxkhBW__content_collapsible(?:\s|")/,
  )) {
    const qM = qBlock.match(/content_collapsible_header_title">([^<]+)</);
    if (!qM) continue;
    const answer = extractAnswer(qBlock);
    if (answer.length) items.push({ question: decode(qM[1]), answer });
  }

  if (items.length) categories.push({ title: decode(titleM[1]), items });
}

const outPath = path.join(process.cwd(), "src/lib/faqs/faqContentData.ts");
fs.writeFileSync(
  outPath,
  `import type { FaqCategory } from "@/types/faq";

/** FAQ content sourced from qoves.com */
export const faqCategories: FaqCategory[] = ${JSON.stringify(categories, null, 2)};
`,
  "utf8",
);
console.log(
  `Wrote ${categories.length} categories, ${categories.reduce((n, c) => n + c.items.length, 0)} items`,
);
