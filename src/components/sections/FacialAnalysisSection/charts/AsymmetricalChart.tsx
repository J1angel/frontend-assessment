"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { ASYMMETRY_ROWS } from "@/lib/charts/facialAnalysisData";
import { ChartCard } from "./ChartCard";
import { chartLabel, chartPill } from "./chartTheme";
import { CHART_ANIMATION, hiddenAxis, RoundedHBar } from "./rechartsShared";

function toBarData(hovered: boolean) {
  return ASYMMETRY_ROWS.map((row) => ({
    name: row.label,
    value: hovered ? row.hover : row.rest,
    fill: row.fill,
  }));
}

export function AsymmetricalChart({ className = "" }: { className?: string }) {
  return (
    <ChartCard
      className={className}
    >
      {(hovered) => (
        <div className="relative h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={toBarData(hovered)}
              layout="vertical"
              margin={{ top: 8, right: 72, left: 4, bottom: 20 }}
              barCategoryGap="28%"
            >
              <CartesianGrid horizontal={false} stroke="rgba(255,255,255,0.12)" strokeDasharray="2 4" />
              <XAxis type="number" domain={[0, 100]} {...hiddenAxis} />
              <YAxis type="category" dataKey="name" {...hiddenAxis} width={0} />
              <Bar dataKey="value" shape={RoundedHBar} barSize={8} {...CHART_ANIMATION}>
                {toBarData(hovered).map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="pointer-events-none absolute inset-x-4 top-[18%] flex flex-col justify-around gap-5">
            {ASYMMETRY_ROWS.map((row) => (
              <span key={row.id} className={`${chartPill} ml-auto`}>
                {row.label}
              </span>
            ))}
          </div>
          <div className="absolute inset-x-4 bottom-2 flex justify-between">
            <span className={chartLabel}>Asymmetrical</span>
            <span className={chartLabel}>Symmetrical</span>
          </div>
        </div>
      )}
    </ChartCard>
  );
}
