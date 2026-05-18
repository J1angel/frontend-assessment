"use client";

import { useId, useState } from "react";
import { faqCategories } from "@/lib/faqs/faqContentData";
import { faqHeadingData } from "@/lib/faqs/faqHeadingData";
import { FaqAnswer } from "./FaqAnswer";
import { FaqCollapsiblePanel } from "./FaqCollapsiblePanel";
import { FaqIcon } from "./FaqIcon";

const ELLIPSE_BACKGROUND = "/images/ellipse.png";

export function FaqAccordion() {
  const baseId = useId();
  const [openCategory, setOpenCategory] = useState(0);
  const [openItems, setOpenItems] = useState<Record<number, number | null>>({
    0: 0,
  });

  const toggleCategory = (index: number) => {
    setOpenCategory((prev) => (prev === index ? -1 : index));
  };

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [categoryIndex]:
        prev[categoryIndex] === itemIndex ? null : itemIndex,
    }));
  };

  return (
    <div
      role="region"
      aria-label={faqHeadingData.ariaLabel}
      className="flex w-full flex-col"
    >
      {faqCategories.map((category, categoryIndex) => {
        const categoryOpen = openCategory === categoryIndex;
        const categoryPanelId = `${baseId}-cat-${categoryIndex}`;
        const categoryButtonId = `${baseId}-cat-btn-${categoryIndex}`;

        return (
          <div
            key={category.title}
            className={`relative w-full border-t border-[#F2F2F2] first:border-t-0 md:max-lg:mx-auto md:max-lg:w-[688px] lg:w-full ${
              categoryOpen
                ? "overflow-hidden rounded-[8px] p-[8px] bg-[#9AAEB5] shadow-[0px_14px_17.5px_0px_#9AAEB51A]"
                : ""
            }`}
          >
            {categoryOpen && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 bg-cover bg-top bg-no-repeat top-[-200px] left-10 md:max-lg:left-50 md:max-xl:top-[-400px] md:max-xl:blur-[300px] blur-[200px]"
                style={{ backgroundImage: `url(${ELLIPSE_BACKGROUND})` }}
              />
            )}
            <button
              type="button"
              id={categoryButtonId}
              aria-expanded={categoryOpen}
              aria-controls={categoryPanelId}
              onClick={() => toggleCategory(categoryIndex)}
              className={`relative z-10 flex h-[56px] w-full shrink-0 cursor-pointer items-center justify-between gap-4 px-4 text-left ${
                categoryOpen ? "" : "bg-[#F9FBFB]"
              }`}
            >
              <h3 className={`font-pp-neue text-[20px] font-medium leading-[24px] tracking-[-0.02em] md:leading-[28px] ${categoryOpen ? "text-white" : "text-[#233137]"}`}>
                {category.title}
              </h3>
              <FaqIcon
                expanded={categoryOpen}
                variant="plus-x"
                size={16}
                stroke={"#FFFFFF"}
              />
            </button>

            <FaqCollapsiblePanel
              id={categoryPanelId}
              labelledBy={categoryButtonId}
              open={categoryOpen}
              className="relative z-10"
            >
              <div className="flex flex-col gap-2 rounded-[8px] bg-white/20 p-2 backdrop-blur-[4px]">
                {category.items.map((item, itemIndex) => {
                  const itemOpen = openItems[categoryIndex] === itemIndex;
                  const itemPanelId = `${baseId}-item-${categoryIndex}-${itemIndex}`;
                  const itemButtonId = `${baseId}-item-btn-${categoryIndex}-${itemIndex}`;

                  return (
                    <div
                      key={item.question}
                      className={` ${
                          itemOpen
                            ? "bg-white/20 rounded-[8px] backdrop-blur-[4px] flex flex-col gap-2 gap-[12px] p-[8px]"
                            : "h-[56px] border-b border-[#F2F2F2]/10 px-[8px]"
                        }`}
                    >
                      <button
                        type="button"
                        id={itemButtonId}
                        aria-expanded={itemOpen}
                        aria-controls={itemPanelId}
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="relative z-10 flex h-full min-h-[24px] w-full cursor-pointer items-center justify-between gap-4 text-left "
                      >
                        <h4 className="font-pp-neue text-[14px] font-[500] text-white leading-[20px] md:text-[16px] md:leading-[20px]">
                          {item.question}
                        </h4>
                        <FaqIcon 
                         expanded={itemOpen}    
                         size={16}
                         stroke={"#FFFFFF"}/>
                      </button>

                      <FaqCollapsiblePanel
                        id={itemPanelId}
                        labelledBy={itemButtonId}
                        open={itemOpen}
                      >
                        <FaqAnswer blocks={item.answer} />
                      </FaqCollapsiblePanel>
                    </div>
                  );
                })}
              </div>
            </FaqCollapsiblePanel>
          </div>
        );
      })}
    </div>
  );
}
