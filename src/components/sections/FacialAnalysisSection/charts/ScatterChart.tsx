"use client";

import { buildScatterGrid } from "@/lib/charts/scatterGrid";
import type { ScatterChartData } from "@/types/facialCharts";
import { ChartCard } from "./ChartCard";
import { chartFooter, chartLabel } from "./chartTheme";

const CELL = "size-[14px] rounded-[3px] bg-white transition-opacity duration-500 ease-out";

function AxisLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <line x1="50" y1="6" x2="50" y2="94" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="2 3" />
      <polygon points="50,4 48,8 52,8" fill="rgba(255,255,255,0.5)" />
      <polygon points="50,96 48,92 52,92" fill="rgba(255,255,255,0.5)" />
      <line x1="6" y1="50" x2="94" y2="50" stroke="rgba(255,255,255,0.35)" strokeWidth="0.5" strokeDasharray="2 3" />
      <polygon points="4,50 8,48 8,52" fill="rgba(255,255,255,0.5)" />
      <polygon points="96,50 92,48 92,52" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
}

type ScatterChartProps = {
  data: ScatterChartData;
  className?: string;
};

export function ScatterChart({ data, className = "" }: ScatterChartProps) {
  const { labels, footer, gridSize } = data;

  return (
    <ChartCard
      className={className}
      footer={<p className={`${chartFooter} mt-auto shrink-0 text-center`}>{footer}</p>}
    >
      {(hovered) => {
        const center = hovered ? data.hover : data.rest;
        const cells = buildScatterGrid(data, center.col, center.row);

        return (
          <div className="relative flex h-full min-h-[280px] w-full flex-col">
            <span className={`${chartLabel} absolute left-1/2 top-0 z-10 -translate-x-1/2`}>{labels.top}</span>
            <span className={`${chartLabel} absolute bottom-[72px] left-0 z-10`}>{labels.left}</span>
            <span className={`${chartLabel} absolute bottom-[72px] right-0 z-10`}>{labels.right}</span>
            <span className={`${chartLabel} absolute bottom-[52px] left-1/2 z-10 -translate-x-1/2`}>
              {labels.bottom}
            </span>

            <div className="relative mx-auto mt-7 flex flex-1 items-center justify-center px-6 pb-2">
              <AxisLines />
              <div
                className="relative grid gap-[3px]"
                style={{
                  gridTemplateColumns: `repeat(${gridSize}, 14px)`,
                  gridTemplateRows: `repeat(${gridSize}, 14px)`,
                }}
              >
                {cells.map((cell) => (
                  <span
                    key={`${cell.col}-${cell.row}`}
                    className={CELL}
                    style={{ opacity: cell.opacity }}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      }}
    </ChartCard>
  );
}
