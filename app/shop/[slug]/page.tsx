import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Swatch from "../../components/swatch";
import ProductActions from "../../components/product-actions";
import ProductCard from "../../components/product-card";
import { products, getProduct, formatPrice } from "../../lib/data";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found" };
  return {
    title: product.name,
    description: `${product.name} — ${product.material}, ${product.colorway}. ${formatPrice(
      product.price
    )}.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="pt-[var(--header-h)]">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-[1600px] px-5 pt-6 sm:px-8" aria-label="Breadcrumb">
        <ol className="label flex items-center gap-2">
          <li>
            <Link href="/shop" className="link-underline">Shop</Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href={`/shop?category=${product.category}`} className="link-underline">
              {product.category}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-ink">{product.name}</li>
        </ol>
      </nav>

      {/* Product */}
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        {/* Gallery */}
        <div className="grid gap-3 sm:grid-cols-2">
          <Swatch tone={product.tone} className="aspect-[4/5] sm:col-span-2" label={product.name} />
          <Swatch tone={product.tone} className="aspect-square" />
          <Swatch tone={product.tone} className="aspect-square" />
        </div>

        {/* Details — sticky on desktop */}
        <div className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:h-fit">
          {product.isNew ? <span className="label">New in</span> : null}
          <h1 className="display mt-2 text-4xl sm:text-5xl">{product.name}</h1>
          <p className="mt-4 font-mono text-xl">{formatPrice(product.price)}</p>
          <p className="mt-2 text-sm text-muted">
            {product.colorway} · {product.material}
          </p>

          <div className="mt-8">
            <ProductActions />
          </div>

          {/* Detail accordions */}
          <div className="mt-10 border-t border-hairline">
            {[
              {
                t: "Description",
                d: `A studio staple cut from ${product.material.toLowerCase()}. Relaxed through the body with clean, considered finishing. Shown in ${product.colorway}.`,
              },
              {
                t: "Materials & care",
                d: `${product.material}. Machine wash cold, hang to dry, warm iron if needed. Made in limited runs.`,
              },
              {
                t: "Shipping & returns",
                d: "Free shipping on orders over KSh 10,000. 30-day returns on unworn items with tags attached.",
              },
            ].map((row) => (
              <details key={row.t} className="group border-b border-hairline">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-medium">
                  {row.t}
                  <span className="text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="pb-5 text-sm leading-6 text-muted">{row.d}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 ? (
        <section className="mx-auto max-w-[1600px] px-5 py-20 sm:px-8">
          <h2 className="display mb-10 text-3xl sm:text-4xl">You might also like</h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
