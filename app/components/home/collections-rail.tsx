"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Swatch from "../swatch";
import { collections } from "../../lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

import Image from "next/image";

export default function CollectionsRail() {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = track.current;
      const wrap = section.current;
      if (!el || !wrap) return;

      // Pin + scrub the horizontal track on every screen size (mobile too):
      // scrolling moves the rail sideways before the page continues down.
      // Reduced-motion users keep the native horizontal swipe fallback instead.
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // While pinned, clip the wrapper so touch scroll drives the page
        // (and the scrub) rather than a competing native sideways scroll.
        if (scroller.current) scroller.current.style.overflowX = "clip";

        const distance = () => el.scrollWidth - window.innerWidth + 32;
        const tween = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => "+=" + distance(),
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.kill();
          if (scroller.current) scroller.current.style.overflowX = "";
        };
      });
    },
    { scope: section }
  );

  return (
    <section
      ref={section}
      className="relative overflow-hidden border-y border-hairline bg-bone"
      aria-label="Collections"
    >
      <div className="flex h-[100svh] flex-col justify-center py-10">
        <div className="mx-auto mb-6 flex w-full max-w-[1600px] items-end justify-between px-5 sm:px-8">
          <div>
            <p className="label">Index</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">Collections</h2>
          </div>
          <Link
            href="/collections"
            className="link-underline label text-ink hidden sm:block"
          >
            View all →
          </Link>
        </div>

        {/* Horizontal track — pinned + scrubbed on all sizes; the wrapper is
            overflow-x:auto so reduced-motion users can still swipe through. */}
        <div ref={scroller} className="overflow-x-auto">
          <div
            ref={track}
            className="flex w-max gap-5 px-5 will-change-transform sm:px-8"
          >
            {collections.map((c, i) => (
              <Link
                key={c.slug}
                href={`/collections#${c.slug}`}
                className="group relative block w-[78vw] max-w-[460px] shrink-0 sm:w-[58vw] md:w-[42vw]"
              >
                <div className="relative h-[clamp(260px,calc(100svh-20rem),640px)] overflow-hidden">
                  {c.image ? (
                    <Image
                      src={c.image}
                      alt={c.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 78vw, (max-width: 1200px) 58vw, 42vw"
                    />
                  ) : (
                    <Swatch tone={c.tone} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                  )}
                  <span className="label absolute left-4 top-4 bg-paper px-2 py-1 text-ink">
                    {String(i + 1).padStart(2, "0")} / {c.season}
                  </span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-4">
                  <h3 className="display text-2xl sm:text-3xl">{c.title}</h3>
                  <span className="label shrink-0">{c.count} pieces</span>
                </div>
                <p className="mt-2 max-w-sm text-sm text-muted">{c.blurb}</p>
              </Link>
            ))}

            {/* Tail card → all collections */}
            <Link
              href="/collections"
              className="flex w-[60vw] max-w-[320px] shrink-0 flex-col justify-center border border-ink p-8 md:w-[28vw]"
            >
              <span className="display text-3xl">All collections</span>
              <span className="label mt-3">Browse the full index →</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
