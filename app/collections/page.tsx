import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "../components/reveal";
import Swatch from "../components/swatch";
import { collections } from "../lib/data";

export const metadata: Metadata = {
  title: "Collections",
  description: "Every Nulebal collection — seasonal drops and permanent staples.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <header className="mx-auto max-w-[1600px] px-5 pb-16 pt-14 sm:px-8 sm:pt-24">
        <p className="label">The index</p>
        <h1 className="display mt-4 text-[clamp(3rem,12vw,10rem)]">
          Collections
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted">
          Small, deliberate releases. Each collection is a complete wardrobe —
          designed to mix back into the last one.
        </p>
      </header>

      <div className="border-t border-hairline">
        {collections.map((c, i) => (
          <section
            key={c.slug}
            id={c.slug}
            className="scroll-mt-[var(--header-h)] border-b border-hairline"
          >
            <Reveal
              className={`mx-auto grid max-w-[1600px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3]">
                <Swatch
                  tone={c.tone}
                  className="absolute inset-0 h-full w-full"
                  label={`${c.title} — ${c.season}`}
                />
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <span className="display text-2xl text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="label">
                    {c.season} · {c.count} pieces
                  </span>
                </div>
                <h2 className="display mt-4 text-5xl sm:text-7xl">{c.title}</h2>
                <p className="mt-6 max-w-md text-base leading-7 text-muted">
                  {c.blurb}
                </p>
                <Link
                  href="/shop"
                  className="mt-8 inline-block bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  Shop {c.title}
                </Link>
              </div>
            </Reveal>
          </section>
        ))}
      </div>
    </div>
  );
}
