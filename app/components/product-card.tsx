import Link from "next/link";
import Swatch from "./swatch";
import { formatPrice, type Product } from "../lib/data";

import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] bg-bone">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          />
        ) : (
          <Swatch tone={product.tone} className="h-full w-full" />
        )}
        {product.isNew ? (
          <span className="label absolute left-3 top-3 bg-paper px-2 py-1 text-ink">
            New
          </span>
        ) : null}
        <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3 text-center text-paper opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="label text-paper">View product</span>
        </span>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <h3 className="text-sm font-medium leading-tight">{product.name}</h3>
        <span className="font-mono text-sm tabular-nums">
          {formatPrice(product.price)}
        </span>
      </div>
      <p className="label mt-1">
        {product.category} · {product.colorway}
      </p>
    </Link>
  );
}
