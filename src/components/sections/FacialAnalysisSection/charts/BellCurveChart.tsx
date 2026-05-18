"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { BELL_MARKER, buildBellCurvePoints } from "@/lib/charts/facialAnalysisData";
import { ChartCard } from "./ChartCard";
import { chartFooter, chartLabel } from "./chartTheme";
import { CHART_ANIMATION, hiddenAxis } from "./rechartsShared";

const CURVE = buildBellCurvePoints();

function yAtX(x: number) {
  const nearest = CURVE.reduce((best, p) => (Math.abs(p.x - x) < Math.abs(best.x - x) ? p : best), CURVE[0]);
  return nearest.y;
}

export function BellCurveChart({ className = "" }: { className?: string }) {
  return (
    <ChartCard
      className={className}
      footer={
        <p className={`${chartFooter} mx-3 mb-3 mt-1`}>
          Your eyebrow density is in the <strong>mid 40th percentile</strong>
        </p>
      }
    >
      {(hovered) => {
        const markerX = hovered ? BELL_MARKER.hover : BELL_MARKER.rest;
        const markerY = yAtX(markerX);
        return (
          <>
            <ResponsiveContainer width="100%" height="78%">
              <AreaChart data={CURVE} margin={{ top: 8, right: 8, left: 8, bottom: 0 }}>
                <CartesianGrid vertical stroke="rgba(255,255,255,0.12)" horizontal={false} strokeDasharray="2 4" />
                <XAxis dataKey="x" type="number" domain={[10, 240]} {...hiddenAxis} />
                <YAxis domain={[0, 80]} {...hiddenAxis} />
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={2}
                  fill="transparent"
                  dot={false}
                  activeDot={false}
                  {...CHART_ANIMATION}
                />
                <ReferenceArea
                  x1={markerX}
                  x2={240}
                  y1={0}
                  y2={80}
                  fill="rgba(255,255,255,0.18)"
                  ifOverflow="extendDomain"
                />
                <ReferenceLine x={markerX} stroke="rgba(255,255,255,0.5)" strokeDasharray="3 3" />
                <ReferenceDot
                  x={markerX}
                  y={markerY}
                  r={5}
                  fill="#b8c5cc"
                  stroke="#fff"
                  strokeWidth={1.5}
                  isFront
                />
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-between px-3 text-[8px]">
              <span className={chartLabel}>Low density</span>
              <span className={chartLabel}>Medium density</span>
              <span className={chartLabel}>High density</span>
            </div>
          </>
        );
      }}
    </ChartCard>
  );
}
