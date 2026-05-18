import type { ScatterChartData } from "@/types/facialCharts";

export function buildScatterGrid(
  config: ScatterChartData,
  centerCol: number,
  centerRow: number,
) {
  const cells: { col: number; row: number; opacity: number }[] = [];

  for (let row = 0; row < config.gridSize; row++) {
    for (let col = 0; col < config.gridSize; col++) {
      let opacity: number;

      if (col === config.secondary.col && row === config.secondary.row) {
        opacity = config.secondary.opacity;
      } else {
        const dist = Math.abs(col - centerCol) + Math.abs(row - centerRow);
        opacity = config.opacityByDistance.get(dist) ?? config.defaultOpacity;
      }

      cells.push({ col, row, opacity });
    }
  }

  return cells;
}
