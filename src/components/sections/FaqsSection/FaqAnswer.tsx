import type { FaqAnswerBlock } from "@/types/faq";

const BODY =
  "font-pp-neue text-[14px] font-[400] leading-[20px] text-white opacity-80";
const LIST = `${BODY} list-disc pl-5`;
const ORDERED = `${BODY} list-decimal pl-5`;

type FaqAnswerProps = {
  blocks: FaqAnswerBlock[];
};

export function FaqAnswer({ blocks }: FaqAnswerProps) {
  return (
    <div className="flex flex-col gap-4 pl-[4px]">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p key={index} className={BODY}>
              {block.text}
            </p>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className={`${LIST} flex flex-col gap-2`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ordered-list") {
          return (
            <ol key={index} className={`${ORDERED} flex flex-col gap-2`}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        return (
          <div key={index} className="flex flex-col gap-6">
            {block.items.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="font-pp-neue text-[14px] font-medium leading-[20px] text-white opacity-80">
                    {item.title}
                  </p>
                  {item.description ? (
                    <p className={BODY}>{item.description}</p>
                  ) : null}
                </div>
                {item.example ? (
                  <div className="flex flex-col gap-1 border-l border-qoves-border pl-4">
                    <p className="font-pp-neue text-[14px] font-medium leading-[20px] text-white opacity-80">
                      Example:
                    </p>
                    <p className={BODY}>{item.example}</p>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
