import type { ChartDataPoint, TimeSeriesPoint } from "@/types/chart";

export const barChartData: ChartDataPoint[] = [
  { label: "Jan", value: 420 },
  { label: "Feb", value: 380 },
  { label: "Mar", value: 510 },
  { label: "Apr", value: 470 },
  { label: "May", value: 590 },
  { label: "Jun", value: 620 },
];

export const areaChartData: TimeSeriesPoint[] = [
  { date: "2026-01", value: 120 },
  { date: "2026-02", value: 180 },
  { date: "2026-03", value: 150 },
  { date: "2026-04", value: 220 },
  { date: "2026-05", value: 280 },
  { date: "2026-06", value: 310 },
];
