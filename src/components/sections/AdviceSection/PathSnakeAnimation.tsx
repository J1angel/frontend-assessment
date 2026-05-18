"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import type { ViewportType } from "@/hooks/useViewportType";

const DESKTOP_PATH =
  "M16.9998 0.498047C7.88706 0.498047 0.499756 7.88536 0.499756 16.9981V374.838C0.499756 383.951 7.88708 391.338 16.9998 391.338H328C337.113 391.338 344.5 383.951 344.5 374.838V274.859V268.474V226.359C344.5 217.799 351.44 210.859 360 210.859H629C637.56 210.859 644.5 217.799 644.5 226.359L644.5 268.474V374.838C644.5 383.951 651.887 391.338 661 391.338H972C981.113 391.338 988.5 383.951 988.5 374.838V16.9981C988.5 7.88536 981.113 0.498047 972 0.498047H661C651.887 0.498047 644.5 7.88535 644.5 16.998V60.1582H644.257V166.158C644.257 174.719 637.317 181.658 628.757 181.658H360C351.44 181.658 344.5 174.719 344.5 166.158V146.111V111.158V16.998C344.5 7.88535 337.113 0.498047 328 0.498047H16.9998Z";

const MOBILE_PATH =
  "M351 170V14.5C351 10.9101 348.09 8 344.5 8H204C199.582 8 196 11.5817 196 16V78C196 82.4183 192.418 86 188 86H171C166.582 86 163 82.4183 163 78V16C163 11.5817 159.418 8 155 8H16C11.5817 8 8 11.5817 8 16V170.003C8 174.42 11.5799 178.001 15.9969 178.003L154.997 178.056C159.416 178.057 163 174.475 163 170.056V107C163 102.582 166.582 99 171 99H188C192.418 99 196 102.582 196 107V170C196 174.418 199.582 178 204 178H343C347.418 178 351 174.418 351 170Z";

function usePathSnakeAnimation(active: boolean, animate: boolean) {
  const pathRef = useRef<SVGPathElement>(null);
  const bodyRef = useRef<SVGRectElement>(null);
  const headRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const body = bodyRef.current;
    const head = headRef.current;
    if (!path || !body || !head || !active || !animate) return;

    const pathLength = path.getTotalLength();
    const trail: SVGRectElement[] = [];

    for (let i = 0; i < 40; i++) {
      const segment = body.cloneNode() as SVGRectElement;
      segment.removeAttribute("id");
      segment.setAttribute("width", "2");
      body.parentNode?.appendChild(segment);
      gsap.set(segment, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: "50% 50%",
        opacity: (i + 1) / 40,
      });
      trail.push(segment);
    }

    body.parentNode?.appendChild(head);
    body.remove();

    gsap.set(head, { xPercent: -50, yPercent: -50 });

    const tween = gsap.to(
      {},
      {
        duration: 16,
        repeat: -1,
        ease: "none",
        onUpdate() {
          const offset = pathLength - this.progress() * pathLength + 80;

          trail.forEach((segment, index) => {
            const distance = (offset - (index + 1) * 2 + pathLength) % pathLength;
            const point = path.getPointAtLength(distance);
            const ahead = path.getPointAtLength(distance + 0.1);
            const angle =
              Math.atan2(ahead.y - point.y, ahead.x - point.x) * (180 / Math.PI);
            gsap.set(segment, { x: point.x, y: point.y, rotation: angle });
          });

          const headPoint = path.getPointAtLength(offset - 80);
          gsap.set(head, { x: headPoint.x, y: headPoint.y });
        },
      },
    );

    return () => {
      tween.kill();
      trail.forEach((el) => el.remove());
    };
  }, [active, animate]);

  return { pathRef, bodyRef, headRef };
}

type PathSnakeAnimationProps = {
  type: ViewportType;
};

export function PathSnakeAnimation({ type }: PathSnakeAnimationProps) {
  const reducedMotion = usePrefersReducedMotion();
  const { pathRef, bodyRef, headRef } = usePathSnakeAnimation(true, !reducedMotion);

  if (type === "mobile") {
    return (
      <svg
        className="pointer-events-none absolute inset-0 z-0 size-full"
        viewBox="0 0 359 187"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path ref={pathRef} d={MOBILE_PATH} stroke="#D7E5EB" strokeWidth="2" />
        <rect ref={bodyRef} width="1" height="2" rx="3" ry="3" fill="#869aa1" />
        <rect ref={headRef} width="5" height="5" rx="1" ry="1" fill="#869AA1" />
      </svg>
    );
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 size-full"
      viewBox="-11.5 -11.5 1012 414"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        ref={pathRef}
        d={DESKTOP_PATH}
        stroke="#D7E5EB"
        strokeWidth="2"
      />
      <rect ref={bodyRef} width="1" height="2" rx="3" ry="3" fill="#869aa1" />
      <rect ref={headRef} width="5" height="5" rx="1" ry="1" fill="#869AA1" />
    </svg>
  );
}
