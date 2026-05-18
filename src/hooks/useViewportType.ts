"use client";

import { useEffect, useState } from "react";

export type ViewportType = "mobile" | "desktop";

/** Matches Qoves breakpoint: mobile layout below 1100px */
export function useViewportType(): ViewportType {
  const [type, setType] = useState<ViewportType>("desktop");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1099px)");
    const update = () => setType(mq.matches ? "mobile" : "desktop");
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return type;
}
