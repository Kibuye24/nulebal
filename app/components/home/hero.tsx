"use client";

import Link from "next/link";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Swatch from "../swatch";

gsap.registerPlugin(useGSAP);

const HEADLINE = ["Built", "to", "be", "worn"];

import Image from "next/image";

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      const fades = gsap.utils.toArray<HTMLElement>("[data-fade]");

      if (reduced) {
        gsap.set([words, fades], { y: 0, opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        words,
        { yPercent: 110 },
        { yPercent: 0, duration: 1, stagger: 0.09 }
      )
        .fromTo(
          fades,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          "-=0.6"
        )
        .fromTo(
          "[data-hero-visual]",
          { clipPath: "inset(100% 0 0 0)" },
          { clipPath: "inset(0% 0 0 0)", duration: 1.1, ease: "power3.inOut" },
          0.2
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 items-end gap-10 px-5 pb-12 pt-[calc(var(--header-h)+3rem)] sm:px-8 lg:grid-cols-[1.5fr_1fr] lg:items-stretch"
    >
      {/* Left — thesis */}
      <div className="flex flex-col justify-between">
        <p className="label" data-fade>
          Nulebal — Spring / Summer 2026
        </p>

        <h1 className="display mt-8 text-[clamp(3.5rem,15vw,13rem)]">
          {HEADLINE.map((word, i) => (
            <span key={i} className="mr-[0.18em] inline-block overflow-hidden align-bottom">
              <span data-word className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-sm text-base leading-7 text-muted" data-fade>
            Considered essentials in a restrained palette — cut for movement,
            finished by hand, and made to outlast the season.
          </p>
          <div className="flex shrink-0 items-center gap-4" data-fade>
            <Link
              href="/shop"
              className="bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              Shop the collection
            </Link>
            <Link href="/lookbook" className="link-underline text-sm font-medium">
              Lookbook
            </Link>
          </div>
        </div>
      </div>

      {/* Right — hero visual */}
      <div className="relative min-h-[50svh] lg:min-h-0" data-hero-visual>
        <Image
          src="/images/field-overshirt.png"
          alt="Look 01 — Coasto Vibes"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        <span className="label absolute right-3 top-3 bg-paper px-2 py-1 text-ink">
          S/S 26
        </span>
      </div>
    </section>
  );
}
