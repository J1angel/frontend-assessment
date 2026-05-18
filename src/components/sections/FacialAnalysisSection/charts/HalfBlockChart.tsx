"use client";

import { Bar, BarChart, Cell, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { LIP_SMOOTHNESS } from "@/lib/charts/facialAnalysisData";
import { ChartCard } from "./ChartCard";
import { chartLabel, chartPill } from "./chartTheme";
import { CHART_ANIMATION, hiddenAxis, RoundedHBar } from "./rechartsShared";

export function HalfBlockChart({ className = "" }: { className?: string }) {
  return (
    <ChartCard
      className={className}
    >
      {(hovered) => {
        const value = hovered ? LIP_SMOOTHNESS.hover : LIP_SMOOTHNESS.rest;
        const data = [{ name: "you", value }];
        return (
          <>
            <div>
              <p className={chartLabel}>Lip smoothness</p>
              <p className="mt-1 font-pp-neue text-[42px] leading-none text-white">{value}%</p>
            </div>
            <div className="space-y-2">
              <ResponsiveContainer width="100%" height={32}>
                <BarChart data={data} layout="vertical" margin={{ top: 8, right: 0, left: 0, bottom: 8 }}>
                  <XAxis type="number" domain={[0, 100]} {...hiddenAxis} />
                  <YAxis type="category" dataKey="name" hide width={0} />
                  <Bar dataKey="value" shape={RoundedHBar} barSize={8} fill="rgba(255,255,255,0.5)" {...CHART_ANIMATION} />
                  <ReferenceLine x={value} stroke="white" strokeDasharray="4 4" />
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-between gap-1">
                <span className={chartLabel}>Rough (0%)</span>
                <span className={chartPill}>{value}% (You)</span>
                <span className={chartLabel}>Smooth (100%)</span>
              </div>
            </div>
          </>
        );
      }}
    </ChartCard>
  );
}
