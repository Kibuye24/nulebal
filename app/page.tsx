import Link from "next/link";
import Image from "next/image";
import Hero from "./components/home/hero";
import CollectionsRail from "./components/home/collections-rail";
import Marquee from "./components/marquee";
import Reveal from "./components/reveal";
import ProductCard from "./components/product-card";
import Swatch from "./components/swatch";
import { products } from "./lib/data";

const featured = products.filter((p) => p.isNew).slice(0, 4);

export default function Home() {
  return (
    <>
      <Hero />

      <Marquee
        items={[
          "Made in limited runs",
          "Free shipping over KSh 10,000",
          "Hand-finished",
          "Built for movement",
          "S/S 2026 — Coasto Vibes",
        ]}
        className="border-y border-hairline bg-ink py-4 text-paper [&_*]:font-mono [&_*]:text-xs [&_*]:uppercase [&_*]:tracking-[0.14em]"
      />

      {/* New arrivals */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8 sm:py-28">
        <Reveal
          stagger
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
          as="header"
        >
          <div>
            <p className="label">Just landed</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">New arrivals</h2>
          </div>
          <Link href="/shop" className="link-underline label text-ink">
            Shop all →
          </Link>
        </Reveal>

        <Reveal
          stagger
          className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4"
        >
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </Reveal>
      </section>

      <CollectionsRail />

      {/* Editorial split — lookbook teaser */}
      <section className="mx-auto grid max-w-[1600px] items-stretch gap-px overflow-hidden px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src="/images/seam-knit-crew.png"
            alt="Editorial — Njeve"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="flex flex-col justify-center gap-6 bg-bone p-10 sm:p-16">
          <p className="label">Lookbook</p>
          <h2 className="display text-4xl sm:text-5xl">
            The same five pieces, a hundred ways
          </h2>
          <p className="max-w-md text-base leading-7 text-muted">
            We design small wardrobes that work hard. See how the collection
            layers across a week — on the move, off the grid, and back again.
          </p>
          <Link
            href="/lookbook"
            className="w-fit bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            View the lookbook
          </Link>
        </Reveal>
      </section>

      {/* Brand statement */}
      <section className="border-t border-hairline">
        <Reveal className="mx-auto max-w-[1100px] px-5 py-24 text-center sm:px-8 sm:py-36">
          <p className="label">What we&apos;re about</p>
          <p className="display mt-6 text-[clamp(1.75rem,5vw,3.5rem)] leading-[1.05] text-balance">
            Clothes you forget you&apos;re wearing — until someone asks where
            they&apos;re from.
          </p>
          <Link
            href="/community"
            className="link-underline label text-ink mt-10 inline-block"
          >
            Read our story →
          </Link>
        </Reveal>
      </section>
    </>
  );
}
