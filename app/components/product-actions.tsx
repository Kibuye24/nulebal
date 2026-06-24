"use client";

import { useState } from "react";

const SIZES = ["XS", "S", "M", "L", "XL"] as const;

export default function ProductActions() {
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (!size) return;
    // Wire to cart state / commerce backend later.
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <span className="label">Select size</span>
        <button className="label text-ink underline-offset-2 hover:underline">
          Size guide
        </button>
      </div>

      <div className="grid grid-cols-5 gap-2" role="group" aria-label="Size">
        {SIZES.map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            aria-pressed={size === s}
            className={`border py-3 text-sm transition-colors ${
              size === s
                ? "border-ink bg-ink text-paper"
                : "border-hairline hover:border-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-5 flex gap-3">
        <button
          onClick={addToCart}
          disabled={!size}
          className="flex-1 bg-ink py-4 text-sm font-medium text-paper transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
        >
          {added ? "Added ✓" : size ? "Add to cart" : "Select a size"}
        </button>
        <button
          aria-label="Add to wishlist"
          className="grid w-14 shrink-0 place-items-center border border-hairline transition-colors hover:border-ink"
        >
          ♡
        </button>
      </div>

      <p className="label mt-4 text-center">
        Free shipping over KSh 10,000 · 30-day returns
      </p>
    </div>
  );
}
