import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";
import Swatch from "../components/swatch";
import { products } from "../lib/data";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Coasto Vibes — the S/S 2026 lookbook from Nulebal.",
};

import Image from "next/image";

// Build a varied editorial grid out of the catalogue tones.
const extendedProducts = [...products, ...products.slice(0, 4)];

const looks = extendedProducts.map((p, i) => ({
  ...p,
  // span pattern for a magazine-style masonry feel
  span:
    i % 6 === 0
      ? "sm:col-span-2 sm:row-span-2 aspect-square"
      : i % 5 === 0
        ? "sm:col-span-2 aspect-[2/1]"
        : "aspect-[3/4]",
}));

export default function LookbookPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <header className="mx-auto max-w-[1600px] px-5 pb-12 pt-14 sm:px-8 sm:pt-24">
        <p className="label">Lookbook — S/S 2026</p>
        <h1 className="display mt-4 text-[clamp(3rem,13vw,11rem)]">
          Coasto Vibes
        </h1>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-lg text-base leading-7 text-muted">
            A coast-to-city wardrobe shot over one long weekend. Linen, light
            shells and trousers cut for movement — styled the way they&apos;re
            actually worn.
          </p>
          <Link href="/shop" className="link-underline label text-ink">
            Shop the looks →
          </Link>
        </div>
      </header>

      <Reveal
        stagger
        className="mx-auto grid max-w-[1600px] auto-rows-auto grid-cols-2 gap-3 px-5 py-10 sm:grid-cols-4 sm:px-8"
      >
        {looks.map((look, i) => (
          <figure key={`${look.slug}-${i}`} className={`group relative ${look.span}`}>
            {look.image ? (
              <Image
                src={look.image}
                alt={look.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            ) : (
              <Swatch
                tone={look.tone}
                className="h-full w-full"
                label={`Look ${String(i + 1).padStart(2, "0")}`}
              />
            )}
            <figcaption className="label absolute bottom-3 right-3 bg-paper px-2 py-1 text-ink opacity-0 transition-opacity group-hover:opacity-100">
              <Link href={`/shop/${look.slug}`} className="link-underline">
                {look.name} →
              </Link>
            </figcaption>
          </figure>
        ))}
      </Reveal>

      <section className="border-t border-hairline">
        <Reveal className="mx-auto max-w-[900px] px-5 py-24 text-center sm:px-8">
          <p className="display text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] text-balance">
            “We didn&apos;t want a campaign. We wanted to show the clothes doing
            their job.”
          </p>
          <p className="label mt-6">— Nulebal design studio</p>
        </Reveal>
      </section>
    </div>
  );
}
