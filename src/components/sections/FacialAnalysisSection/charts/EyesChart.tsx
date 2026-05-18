"use client";

import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { EYE_MARKER, EYE_SCALE } from "@/lib/charts/facialAnalysisData";
import { ChartCard } from "./ChartCard";
import { chartFooter, chartLabel, chartPill } from "./chartTheme";
import { CHART_ANIMATION, hiddenAxis } from "./rechartsShared";

const SCALE_DATA = EYE_SCALE.map((color, index) => ({ index, color, v: 1 }));

export function EyesChart({ className = "" }: { className?: string }) {
  return (
    <ChartCard
      className={className}
      footer={
        <p className={`${chartFooter} mt-3`}>
          Your eyes have a <strong>medium melanin</strong> concentration.
        </p>
      }
    >
      {(hovered) => {
        const markerIndex = hovered ? EYE_MARKER.hover : EYE_MARKER.rest;
        return (
          <div className="relative flex h-full justify-center">
            <span className={`${chartLabel} absolute left-0 top-0`}>Blue</span>
            <span className={`${chartLabel} absolute left-0 top-[26%]`}>Green</span>
            <span className={`${chartLabel} absolute left-0 top-[54%]`}>Brown</span>
            <span className={`${chartLabel} absolute bottom-20 left-0`}>Deep</span>

            <ResponsiveContainer width={48} height="100%">
              <BarChart data={SCALE_DATA} margin={{ top: 4, right: 0, left: 0, bottom: 4 }}>
                <XAxis dataKey="index" hide />
                <YAxis hide domain={[0, 1]} />
                <Bar dataKey="v" barSize={14} radius={[2, 2, 2, 2]} {...CHART_ANIMATION}>
                  {SCALE_DATA.map((entry) => (
                    <Cell key={entry.index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div
              className="pointer-events-none absolute left-1/2 w-[210px] -translate-x-1/2 border-t border-dotted border-white/70"
              style={{ top: `${12 + markerIndex * 7.2}%` }}
            >
              <span className={`${chartPill} absolute -left-1 top-1/2 -translate-x-full -translate-y-1/2 whitespace-nowrap`}>
                ■ Dark brown
              </span>
              <span className={`${chartPill} absolute -right-1 top-1/2 translate-x-full -translate-y-1/2`}>You</span>
            </div>
          </div>
        );
      }}
    </ChartCard>
  );
}
