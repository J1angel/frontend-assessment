"use client";

import { useRef, useState, type ReactNode } from "react";
import { chartCardClass } from "./chartTheme";
import { useChartHover } from "./useChartHover";

type ChartCardProps = {
  className?: string;
  children: (hovered: boolean) => ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
};

export function ChartCard({ className = "", children, footer, header }: ChartCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useChartHover(ref, () => setHovered(true), () => setHovered(false));

  return (
    <div ref={ref} className={`${chartCardClass} flex h-full w-full flex-col p-4 ${className}`}>
      {header}
      <div className="relative min-h-0 flex-1">{children(hovered)}</div>
      {footer}
    </div>
  );
}
