/** Parse simple key,value CSV (no quoted commas). Skips empty lines and # comments. */
export function parseKeyValueCsv(text: string): Record<string, string> {
  const rows: Record<string, string> = {};

  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const comma = trimmed.indexOf(",");
    if (comma === -1) continue;

    const key = trimmed.slice(0, comma).trim();
    const value = trimmed.slice(comma + 1).trim();
    if (key) rows[key] = value;
  }

  return rows;
}

export function csvNumber(rows: Record<string, string>, key: string, fallback: number): number {
  const raw = rows[key];
  if (raw === undefined) return fallback;
  const n = Number(raw);
  return Number.isFinite(n) ? n : fallback;
}

export function csvString(rows: Record<string, string>, key: string, fallback: string): string {
  return rows[key] ?? fallback;
}
