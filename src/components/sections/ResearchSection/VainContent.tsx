"use client";

import { useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useVainHeadlineFade } from "@/hooks/useVainHeadlineFade";
import { vainCards } from "@/lib/research/vainCardsData";
import { VainHeadlineCopy } from "./VainHeadlineCopy";

const CARD_POSITIONS = [
  "absolute top-8 left-8",
  "absolute bottom-8 right-8",
] as const;

type VainContentProps = {
  className?: string;
};

export function VainContent({ className = "w-full" }: VainContentProps) {
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsLayerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();

  useVainHeadlineFade(headlineRef, cardsLayerRef, { disabled: reducedMotion });

  return (
    <div className={`relative h-[2880px] ${className}`}>
      <div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col md:max-lg:w-[736px]">
        <div className="w-full ml-auto border-t border-l border-[#F2F2F2]/20 md:max-lg:border-r lg:max-xl:border-r xl:border-r">
          <div className="sticky top-0 z-[1] flex h-[957px] w-full flex-col items-center justify-center max-lg:overflow-x-auto lg:overflow-visible">
            <div
              ref={headlineRef}
              className="relative flex w-full flex-col items-center justify-center"
            >
              <VainHeadlineCopy />
            </div>
          </div>

          <div className="relative z-10">
            <div
              ref={cardsLayerRef}
              className="relative hidden h-[957px] w-full lg:block"
            >
              {vainCards.map((card, index) => (
                <div
                  key={card.title}
                  className={`${CARD_POSITIONS[index] ?? CARD_POSITIONS[0]} flex h-[400px] w-[443px] flex-col justify-between rounded-[12px] border border-[#F2F2F2]/20 bg-white/10 p-[16px]`}
                >
                  <div>
                    <span className="font-pp-neue text-[32px] font-normal leading-[36px] tracking-[-1.5%] text-white">
                      {card.title}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-col gap-[10px]">
                    {card.subtitle.map((line) => (
                      <div
                        key={line}
                        className="rounded-[8px] bg-white/10 p-[12px]"
                      >
                        <span className="font-pp-neue text-[14px] font-normal leading-[20px] text-white/70">
                          {line}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="relative h-[957px] w-full lg:hidden">
              <div className="absolute inset-x-8 bottom-8 w-full overflow-x-auto pr-0">
                <div className="flex w-max gap-[16px]">
                  {vainCards.map((card) => (
                    <div
                      key={`${card.title}-mobile`}
                      className="flex h-[320px] w-[275px] shrink-0 flex-col justify-between rounded-[12px] border border-[#F2F2F2]/20 bg-white/10 p-[16px] md:h-[400px] md:w-[443px]"
                    >
                      <div>
                        <span className="font-pp-neue text-[24px] font-normal leading-[28px] tracking-[-1.5%] text-white md:text-[32px] md:leading-[36px]">
                          {card.title}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-col gap-[10px]">
                        {card.subtitle.map((line) => (
                          <div
                            key={line}
                            className="rounded-[8px] bg-white/10 p-[12px]"
                          >
                            <span className="font-pp-neue text-[12px] font-normal leading-[16px] text-white/70 md:text-[14px] md:leading-[20px]">
                              {line}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="h-[957px]" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
