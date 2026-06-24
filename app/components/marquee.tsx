"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Marquee({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      if (!el) return;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduced) return;

      // The track holds two identical sequences; scroll the first one's width.
      gsap.to(el, {
        xPercent: -50,
        repeat: -1,
        duration: 24,
        ease: "none",
      });
    },
    { scope: track }
  );

  const Group = ({ hidden }: { hidden?: boolean }) => (
    <span aria-hidden={hidden} className="flex shrink-0 items-center gap-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 whitespace-nowrap">
          <span>{item}</span>
          <span aria-hidden className="text-accent">
            ✳
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`overflow-hidden ${className}`}>
      {/* Two identical groups; animating xPercent -50 loops seamlessly. */}
      <div ref={track} className="flex w-max gap-6">
        <Group />
        <Group hidden />
      </div>
    </div>
  );
}
