"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ResearchHeading } from "./ResearchHeading";
import { ResearchContent } from "./ResearchContent";
import { ResearchCards } from "./ResearchCards";
import { VainContent } from "./VainContent";

const LANDING_VIDEO = "/video/landing-video.mp4";

export function ResearchSection() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="relative min-h-[1915px] w-full">
      <div className="sticky top-0 z-0 h-[996px] w-full overflow-hidden">
        {!reducedMotion && (
          <video
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[center_40%]"
          >
            <source src={LANDING_VIDEO} type="video/mp4" />
          </video>
        )}

        {reducedMotion && (
          <div aria-hidden className="absolute inset-0 bg-[#1a2428]" />
        )}

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[35%] z-[5] bg-[linear-gradient(360deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0.32)_50%,rgba(0,0,0,0)_100%)] backdrop-blur-[18.41px] opacity-80 [mask-image:linear-gradient(to_top,black_25%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_25%,transparent_100%)]"
        />
      </div>

      <div className="relative z-10 -mt-[996px] flex min-h-[1915px] w-full flex-col justify-end">
        <div className="relative z-10 mx-auto h-[695px] w-full max-w-[1360px] border-x border-[#F2F2F2]/20 max-md:border-x-0 md:max-lg:w-[736px] lg:border-x">
          <ResearchHeading />
          <ResearchContent />
        </div>
        <ResearchCards />
        <VainContent className="w-full bg-[linear-gradient(360deg,rgba(0,0,0,0.56)_0%,rgba(0,0,0,0)_100%)] backdrop-blur-[18.410192489624023px]" />
      </div>
    </section>
  );
}
