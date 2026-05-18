"use client";

import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type FaqCollapsiblePanelProps = {
  id: string;
  labelledBy: string;
  open: boolean;
  className?: string;
  children: ReactNode;
};

export function FaqCollapsiblePanel({
  id,
  labelledBy,
  open,
  className = "",
  children,
}: FaqCollapsiblePanelProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      aria-hidden={!open}
      className={`grid ${
        reducedMotion
          ? open
            ? "grid-rows-[1fr]"
            : "hidden grid-rows-[0fr]"
          : `grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
              open ? "grid-rows-[1fr]" : ""
            }`
      } ${open ? "" : "pointer-events-none"} ${className}`}
    >
      <div
        className={`min-h-0 overflow-hidden ${
          reducedMotion
            ? ""
            : `transition-opacity duration-300 ease-out motion-reduce:transition-none ${
                open ? "opacity-100" : "opacity-0"
              }`
        }`}
      >
        {children}
      </div>
    </div>
  );
}
