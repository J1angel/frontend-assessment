import type { BarShapeProps } from "recharts";

export const CHART_ANIMATION = { isAnimationActive: true, animationDuration: 550, animationEasing: "ease-out" } as const;

export const hiddenAxis = {
  tick: false as const,
  axisLine: false as const,
  tickLine: false as const,
};

export function RoundedHBar({ x = 0, y = 0, width = 0, height = 0, fill }: BarShapeProps) {
  const h = height || 8;
  return <rect x={x} y={y} width={Math.max(width, 0)} height={h} rx={h / 2} fill={fill} />;
}
