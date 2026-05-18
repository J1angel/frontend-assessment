"use client";

import { useEffect, type RefObject } from "react";
import { gsap, registerGsapPlugins, ScrollTrigger } from "@/lib/gsap";

type Options = {
  disabled?: boolean;
};

export function useFacialAnalysisAnimations(
  sectionRef: RefObject<HTMLElement | null>,
  cardsContainerRef: RefObject<HTMLElement | null>,
  headerRef: RefObject<HTMLElement | null>,
  portraitRef: RefObject<HTMLElement | null>,
  { disabled = false }: Options = {},
) {
  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    const header = headerRef.current;
    const portrait = portraitRef.current;

    if (!section || !cardsContainer) return;

    if (disabled) {
      if (header) gsap.set(header, { scale: 1 });
      if (portrait) gsap.set(portrait, { scale: 1 });
      return;
    }

    if (header) gsap.set(header, { transformOrigin: "center top" });
    if (portrait) gsap.set(portrait, { transformOrigin: "center bottom" });

    registerGsapPlugins();

    const scrollTriggers: ScrollTrigger[] = [];

    const track = (tween: gsap.core.Tween) => {
      if (tween.scrollTrigger) scrollTriggers.push(tween.scrollTrigger);
    };

    if (header) {
      track(
        gsap.fromTo(
          header,
          { scale: 0.94 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "top 35%",
              scrub: 1,
            },
          },
        ),
      );
    }

    if (portrait) {
      track(
        gsap.fromTo(
          portrait,
          { scale: 0.9 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
            },
          },
        ),
      );
    }

    return () => {
      scrollTriggers.forEach((st) => st.kill());
    };
  }, [sectionRef, cardsContainerRef, headerRef, portraitRef, disabled]);
}
