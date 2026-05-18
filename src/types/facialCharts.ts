export type ScatterChartData = {
  gridSize: number;
  rest: { col: number; row: number };
  hover: { col: number; row: number };
  secondary: { col: number; row: number; opacity: number };
  opacityByDistance: Map<number, number>;
  defaultOpacity: number;
  labels: { top: string; bottom: string; left: string; right: string };
  footer: string;
};

export type FacialChartData = {
  scatter: ScatterChartData;
};

export type ScatterCell = { col: number; row: number; opacity: number };
