/** Gaussian curve for bell-chart (matches bell-curve.png shape) */
export function buildBellCurvePoints(steps = 48) {
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i <= steps; i++) {
    const x = 10 + (i / steps) * 230;
    const y = Math.exp(-((x - 118) ** 2) / (2 * 38 ** 2)) * 72;
    points.push({ x, y });
  }
  return points;
}

export const BELL_MARKER = { rest: 168, hover: 112 };

export const ASYMMETRY_ROWS = [
  { id: "ideal", label: "Ideal", rest: 88, hover: 92, fill: "rgba(255,255,255,0.85)" },
  { id: "you", label: "You", rest: 52, hover: 74, fill: "rgba(255,255,255,0.55)" },
  { id: "avg", label: "Average", rest: 34, hover: 48, fill: "rgba(255,255,255,0.35)" },
] as const;

export const FACIAL_THIRDS = [
  { id: "lower", label: "Lower third [c]", rest: 0.31, hover: 0.28, fill: "rgba(255,255,255,0.35)" },
  { id: "middle", label: "Middle third [b]", rest: 0.38, hover: 0.44, fill: "rgba(255,255,255,0.55)" },
  { id: "upper", label: "Upper third [a]", rest: 0.31, hover: 0.28, fill: "rgba(255,255,255,0.85)" },
] as const;

export const LIP_SMOOTHNESS = { rest: 56, hover: 72 };

/** Primary cluster position (bold / masculine quadrant in scatter-point.png) */
export const SCATTER_CENTER = { rest: { col: 7, row: 2 }, hover: { col: 6, row: 3 } };

/** Dim highlight on the far-right edge of the grid */
export const SCATTER_SECONDARY = { col: 9, row: 4, opacity: 0.22 };

export function scatterCellOpacity(
  col: number,
  row: number,
  centerCol: number,
  centerRow: number,
): number {
  if (col === SCATTER_SECONDARY.col && row === SCATTER_SECONDARY.row) {
    return SCATTER_SECONDARY.opacity;
  }

  const dist = Math.abs(col - centerCol) + Math.abs(row - centerRow);
  if (dist === 0) return 1;
  if (dist === 1) return 0.58;
  if (dist === 2) return 0.38;
  if (dist === 3) return 0.24;
  return 0.11;
}

export function buildScatterGrid(centerCol: number, centerRow: number) {
  const points: { col: number; row: number; opacity: number }[] = [];
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      points.push({ col, row, opacity: scatterCellOpacity(col, row, centerCol, centerRow) });
    }
  }
  return points;
}

export const EYE_SCALE = [
  "#c5d4e0",
  "#b0c2cf",
  "#9ab0bc",
  "#8fa3b0",
  "#7f9a8a",
  "#6f8f78",
  "#8b7355",
  "#7a6348",
  "#5a4638",
  "#4a3a30",
  "#3a2e26",
  "#2e241c",
] as const;

export const EYE_MARKER = { rest: 8, hover: 5 };
