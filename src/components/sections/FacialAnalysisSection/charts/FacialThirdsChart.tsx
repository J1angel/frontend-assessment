"use client";

import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { FACIAL_THIRDS } from "@/lib/charts/facialAnalysisData";
import { ChartCard } from "./ChartCard";
import { chartLabel } from "./chartTheme";
import { CHART_ANIMATION, hiddenAxis, RoundedHBar } from "./rechartsShared";

function toData(hovered: boolean) {
  return FACIAL_THIRDS.map((seg) => ({
    name: seg.label,
    value: Math.round((hovered ? seg.hover : seg.rest) * 100),
    fill: seg.fill,
    display: (hovered ? seg.hover : seg.rest).toFixed(2),
  }));
}

export function FacialThirdsChart({ className = "" }: { className?: string }) {
  return (
    <ChartCard
      className={className}
      header={<span className={`${chartLabel} mb-2 block`}>Facial thirds</span>}
    >
      {(hovered) => {
        const data = toData(hovered);
        return (
          <div className="flex h-full flex-col justify-end gap-4">
            {data.map((seg) => (
              <div key={seg.name}>
                <div className="mb-1 flex items-center justify-between">
                  <span className={`${chartLabel} normal-case`}>{seg.name}</span>
                  <span className="font-zagma text-[11px] text-white/90">{seg.display}</span>
                </div>
                <ResponsiveContainer width="100%" height={12}>
                  <BarChart data={[seg]} layout="vertical" margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                    <XAxis type="number" domain={[0, 44]} hide />
                    <YAxis type="category" dataKey="name" hide />
                    <Bar dataKey="value" shape={RoundedHBar} barSize={6} {...CHART_ANIMATION}>
                      <Cell fill={seg.fill} />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        );
      }}
    </ChartCard>
  );
}
