import type { Metadata } from "next";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Community",
  description: "The story behind Nulebal, our practices, and where to find us.",
};

const VALUES = [
  {
    n: "01",
    t: "Small runs",
    d: "We make limited quantities and restock the pieces that earn it. Less waste, less noise.",
  },
  {
    n: "02",
    t: "Honest materials",
    d: "Natural and recycled fabrics chosen for how they wear in — not how they photograph.",
  },
  {
    n: "03",
    t: "Built to last",
    d: "Reinforced seams, real hardware, and a repair-first approach. Buy it once.",
  },
];

const STOCKISTS = [
  ["Nairobi", "Vivo, Sarit Centre"],
  ["Kisumu", "Mega City, Nyerere Rd"],
  ["Dar es Salaam", "Slipway, Msasani"],
  ["Cape Town", "Mungo, Woodstock"],
];

export default function CommunityPage() {
  return (
    <div className="pt-[var(--header-h)]">
      <header className="mx-auto max-w-[1600px] px-5 pb-12 pt-14 sm:px-8 sm:pt-24">
        <p className="label">Community &amp; story</p>
        <h1 className="display mt-4 text-[clamp(2.75rem,10vw,8rem)]">
          Made by people who wear it
        </h1>
      </header>

      <Reveal className="mx-auto grid max-w-[1100px] gap-8 px-5 py-10 sm:px-8 lg:grid-cols-2">
        <p className="text-lg leading-8">
          Nulebal started in a shared studio in Nairobi — a small group
          frustrated that the clothes they liked never seemed to last.
        </p>
        <p className="text-base leading-7 text-muted">
          So we started making our own: a tight wardrobe of essentials, produced
          in small runs with makers we know by name. No seasons-for-the-sake-of
          it, no logos doing the talking. Just well-made clothes you reach for
          on the way out the door.
        </p>
      </Reveal>

      {/* Values */}
      <section className="border-y border-hairline bg-bone">
        <Reveal stagger className="mx-auto grid max-w-[1600px] gap-px px-5 py-16 sm:grid-cols-3 sm:px-8">
          {VALUES.map((v) => (
            <div key={v.n} className="p-2 sm:p-6">
              <span className="display text-4xl text-accent">{v.n}</span>
              <h2 className="display mt-4 text-2xl">{v.t}</h2>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{v.d}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Stockists */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
        <Reveal className="mb-10">
          <p className="label">Find us in store</p>
          <h2 className="display mt-3 text-4xl sm:text-5xl">Stockists</h2>
        </Reveal>
        <Reveal stagger className="border-t border-hairline">
          {STOCKISTS.map(([city, shop]) => (
            <div
              key={city}
              className="flex items-baseline justify-between border-b border-hairline py-5"
            >
              <span className="display text-2xl sm:text-3xl">{city}</span>
              <span className="text-sm text-muted">{shop}</span>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="border-t border-hairline">
        <Reveal className="mx-auto max-w-[700px] px-5 py-20 text-center sm:px-8">
          <p className="label">Stay in the loop</p>
          <h2 className="display mt-4 text-3xl sm:text-4xl">
            Join the community
          </h2>
          <p className="mt-4 text-sm text-muted">
            Get first access to drops, studio notes, and invites to local
            events.
          </p>
          <form className="mx-auto mt-8 flex max-w-md items-center border-b border-ink" action="#">
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@email.com"
              className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
            />
            <button className="label text-ink shrink-0 pl-4 hover:text-accent">
              Join →
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
