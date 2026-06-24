import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "../components/product-card";
import { products, categories, type Category } from "../lib/data";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the full Nulebal range — outerwear, tops, bottoms and accessories.",
};

const FILTERS = ["All", ...categories] as const;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = (FILTERS as readonly string[]).includes(category ?? "")
    ? (category as Category | "All")
    : "All";

  const list =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="pt-[var(--header-h)]">
      {/* Page head */}
      <header className="mx-auto max-w-[1600px] px-5 pb-10 pt-14 sm:px-8 sm:pt-20">
        <p className="label">Shop — {list.length} pieces</p>
        <h1 className="display mt-4 text-[clamp(2.75rem,9vw,7rem)]">
          {active === "All" ? "Everything" : active}
        </h1>
      </header>

      {/* Filter bar */}
      <div className="sticky top-[var(--header-h)] z-30 border-y border-hairline bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {FILTERS.map((f) => {
            const isActive = f === active;
            return (
              <Link
                key={f}
                href={f === "All" ? "/shop" : `/shop?category=${f}`}
                className={`label whitespace-nowrap rounded-full border px-4 py-2 transition-colors ${
                  isActive
                    ? "border-ink bg-ink text-paper"
                    : "border-hairline text-ink hover:border-ink"
                }`}
              >
                {f}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-[1600px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}
