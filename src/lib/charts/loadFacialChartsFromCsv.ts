import { readFileSync } from "fs";
import path from "path";
import { csvNumber, csvString, parseKeyValueCsv } from "./parseCsv";
import type { FacialChartData, ScatterChartData } from "@/types/facialCharts";

function readCsvFile(filename: string): string {
  const filePath = path.join(process.cwd(), "data/facial-analysis", filename);
  return readFileSync(filePath, "utf-8");
}

function parseScatterCsv(text: string): ScatterChartData {
  const rows = parseKeyValueCsv(text);

  const opacityByDistance = new Map<number, number>();
  for (const [key, value] of Object.entries(rows)) {
    if (!key.startsWith("opacity_") || key === "opacity_default") continue;
    const dist = Number(key.replace("opacity_", ""));
    if (Number.isFinite(dist)) opacityByDistance.set(dist, Number(value));
  }

  return {
    gridSize: csvNumber(rows, "grid_size", 10),
    rest: {
      col: csvNumber(rows, "rest_col", 7),
      row: csvNumber(rows, "rest_row", 2),
    },
    hover: {
      col: csvNumber(rows, "hover_col", 6),
      row: csvNumber(rows, "hover_row", 3),
    },
    secondary: {
      col: csvNumber(rows, "secondary_col", 9),
      row: csvNumber(rows, "secondary_row", 4),
      opacity: csvNumber(rows, "secondary_opacity", 0.22),
    },
    opacityByDistance,
    defaultOpacity: csvNumber(rows, "opacity_default", 0.11),
    labels: {
      top: csvString(rows, "label_top", "Bold"),
      bottom: csvString(rows, "label_bottom", "Subtle"),
      left: csvString(rows, "label_left", "Feminine"),
      right: csvString(rows, "label_right", "Masculine"),
    },
    footer: csvString(rows, "footer", "Brows fall in the top 20% for natural fullness."),
  };
}

export function loadFacialChartsFromCsv(): FacialChartData {
  const scatterText = readCsvFile("scatter-point.csv");
  return { scatter: parseScatterCsv(scatterText) };
}
