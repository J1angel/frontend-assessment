"use client";

import Image from "next/image";
import { PathSnakeAnimation } from "./PathSnakeAnimation";
import { useViewportType } from "@/hooks/useViewportType";

const BEFORE_SRC = "/images/before.png";
const AFTER_SRC = "/images/after.png";

type FaceCardProps = {
  label: "BEFORE" | "AFTER";
  src: string;
};

function FaceCard({ label, src }: FaceCardProps) {
  return (
    <article className="relative z-10 w-[437px] shrink-0 m-[12px] bg-[#aec2c9] rounded-xl">
      <p className="pointer-events-none absolute top-2 left-0 right-0 z-20 text-center font-zagma text-[16.15px] font-normal uppercase leading-[14px] tracking-[-0.005rem] text-white md:text-xs h-[52px] flex items-center justify-center leading-[18.84px]">
        {label}
      </p>
      <div className="relative aspect-[146/163] w-full overflow-hidden md:aspect-[343/390] md:rounded-2xl">
        <Image
          src={src}
          alt={label === "BEFORE" ? "Before" : "After"}
          fill
          className="!top-[25px] !h-[calc(100%-25px)] object-cover object-top"
          sizes="(max-width: 1099px) 46vw, 343px"
          loading="eager"
        />
      </div>
    </article>
  );
}

export function BeforeAfterBlock() {
  const viewport = useViewportType();

  return (
    <div className="relative aspect-[359/187] w-full overflow-hidden rounded-xl min-[1100px]:aspect-[1012/414] min-[1100px]:rounded-3xl min-[1100px]:p-[1.2rem]">
      <PathSnakeAnimation key={viewport} type={viewport} />
      <div className="relative z-10 flex h-full w-full items-center justify-between">
        <FaceCard label="BEFORE" src={BEFORE_SRC} />
        <FaceCard label="AFTER" src={AFTER_SRC} />
      </div>
    </div>
  );
}
