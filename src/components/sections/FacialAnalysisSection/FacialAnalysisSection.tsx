"use client";

import Image from "next/image";
import { useRef } from "react";
import { useFacialAnalysisAnimations } from "@/hooks/useFacialAnalysisAnimations";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { AnalysisCards } from "./AnalysisCards";

const FACIAL_ANALYSIS_PORTRAIT = "/images/facial.png";
const ELLIPSE_BACKGROUND = "/images/ellipse.png";

const GRID_FRAME_TOP =
  "mx-auto h-[300px] w-[1360px] border-x border-[#F2F2F2] opacity-10";

const GRID_FRAME_BOTTOM =
  "mx-auto h-[120px] w-[1360px] border-x border-[#F2F2F2] opacity-10";

/** Grid borders: lg (1440px) until below xl (1920px) */
const GRID_OVERLAY = "pointer-events-none absolute inset-0 hidden lg:max-xl:block";

export function FacialAnalysisSection() {
  const reducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useFacialAnalysisAnimations(
    sectionRef,
    cardsContainerRef,
    headerRef,
    portraitRef,
    { disabled: reducedMotion },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[750px] overflow-hidden md:max-lg:h-[1000px] lg:h-[832px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-[15] hidden h-full w-[250px] backdrop-blur-[4px] opacity-50 xl:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-[15] hidden h-full w-[250px] backdrop-blur-[4px] opacity-50 xl:block"
      />
      <div className="relative z-10 mx-auto h-full w-full">
        <div
          className="relative flex h-full flex-col overflow-hidden bg-[#9AAEB5] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${ELLIPSE_BACKGROUND})` }}
        >
          <div aria-hidden className={GRID_OVERLAY}>
            <div className="absolute top-0 left-0 w-full">
              <div className={GRID_FRAME_TOP} />
            </div>
            <div className="absolute bottom-0 left-0 w-full pt-5">
              <div className={GRID_FRAME_BOTTOM} />
            </div>
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-0 hidden w-[736px] -translate-x-1/2 border-x border-[#F2F2F2] opacity-10 md:max-lg:block"
          />

          <header
            ref={headerRef}
            className="relative z-30 flex shrink-0 flex-col items-center gap-1.5 px-6 pb-0 pt-8 text-center md:max-lg:px-12 md:max-lg:pt-10 lg:px-6 lg:pt-8 xl:px-12 xl:pt-14"
          >
            <div className="inline-flex items-center justify-center rounded-full border border-[#F2F2F21A] px-2 py-1">
              <span className="font-zagma text-[10px] font-normal uppercase leading-[14px] tracking-[-0.05px] text-[#FFFFFF] opacity-75">
                PERSONALIZED AESTHETICS
              </span>
            </div>
            <p className="font-pp-neue text-[32px] font-normal leading-[36px] tracking-[-1.5px] text-white md:max-lg:text-[40px] md:max-lg:leading-[48px] lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.072rem]">
              <span>Your complete{" "}</span>
              <span className="opacity-40">facial analysis</span>
            </p>
            <div className="max-w-[490px] xs:w-full">
              <span className="font-pp-neue text-[16px] font-normal leading-[20px] text-[#FFFFFF] opacity-70 hidden lg:max-xl:block md:max-lg:text-[14px] md:max-lg:leading-[20px] lg:text-[16px] lg:leading-[20px]">
                Every face is unique. We assess more than 100 unique facial markers to give you a precise understanding of your aesthetics.
              </span>
              <span className="hidden font-pp-neue text-[14px] leading-[20px] text-[#FFFFFF] opacity-70 xs:block lg:hidden">
                Every face is unique. We analyze 163 aspects of your face to understand your personal facial aesthetics.
              </span>
            </div>
          </header>

          <div
            ref={cardsContainerRef}
            className="relative mx-auto -mt-6 flex min-h-0 w-full max-w-[1565px] flex-1 items-end justify-center md:max-lg:mt-0"
          >
            <AnalysisCards />
            <div ref={portraitRef} className="relative z-20 h-full">
              <Image
                src={FACIAL_ANALYSIS_PORTRAIT}
                alt="Facial analysis portrait"
                width={892}
                height={892}
                className="relative z-10 block h-auto w-[688px] max-w-full -translate-y-[6%] xs:hidden lg:block lg:w-[780px] lg:-translate-y-[8%] xl:w-[780px] xl:-translate-y-[8%]"
                priority={false}
                sizes="(max-width: 374px) 688px, (max-width: 1919px) 780px, 780px"
              />
              <Image
                src={FACIAL_ANALYSIS_PORTRAIT}
                alt=""
                aria-hidden
                width={892}
                height={1214}
                className="relative z-10 hidden h-auto w-[992px] max-w-full xs:block xs:translate-y-[8%] md:max-lg:-translate-y-[4%] lg:hidden"
                priority={false}
                sizes="992px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
