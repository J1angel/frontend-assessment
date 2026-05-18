"use client";

import { useEffect, type RefObject } from "react";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

type Options = {
  disabled?: boolean;
};

export function useVainHeadlineFade(
  headlineRef: RefObject<HTMLElement | null>,
  cardsLayerRef: RefObject<HTMLElement | null>,
  { disabled = false }: Options = {},
) {
  useEffect(() => {
    const headline = headlineRef.current;
    const cardsLayer = cardsLayerRef.current;

    if (!headline || !cardsLayer) return;

    if (disabled) {
      gsap.set(headline, { clearProps: "opacity" });
      return;
    }

    registerGsapPlugins();

    const tween = gsap.fromTo(
      headline,
      { opacity: 1 },
      {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: cardsLayer,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(headline, { clearProps: "opacity" });
    };
  }, [headlineRef, cardsLayerRef, disabled]);
}
