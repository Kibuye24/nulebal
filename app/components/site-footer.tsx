import Link from "next/link";

const SHOP = [
  { label: "All products", href: "/shop" },
  { label: "Outer", href: "/shop?category=Outer" },
  { label: "Top", href: "/shop?category=Top" },
  { label: "Bottom", href: "/shop?category=Bottom" },
  { label: "Accessories", href: "/shop?category=Accessories" },
];

const ABOUT = [
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Community", href: "/community" },
  { label: "Stockists", href: "/community" },
];

const INFO = [
  { label: "Shipping & returns", href: "/community" },
  { label: "Size guide", href: "/community" },
  { label: "Privacy policy", href: "/community" },
  { label: "Terms", href: "/community" },
];

function Column({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="label mb-4">{heading}</h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="link-underline text-sm">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-[1600px] px-5 pb-8 pt-16 sm:px-8">
        {/* Newsletter + contact */}
        <div className="grid gap-12 border-b border-hairline pb-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="label">Newsletter</p>
            <p className="display mt-3 max-w-xl text-3xl sm:text-4xl">
              Drops, restocks, nothing else.
            </p>
            <form
              className="mt-6 flex max-w-md items-center border-b border-ink"
              // Wire to your ESP later.
              action="#"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                className="label text-ink shrink-0 pl-4 hover:text-accent"
              >
                Subscribe →
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-2">
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <h3 className="label mb-4">Contact</h3>
              <a
                href="mailto:help@nulebal.com"
                className="display block text-2xl sm:text-3xl link-underline"
              >
                help@nulebal.com
              </a>
              <address className="mt-4 not-italic text-sm leading-6 text-muted">
                Studio 04, Riverside Drive
                <br />
                Nairobi, Kenya
              </address>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-14 sm:grid-cols-4">
          <Column heading="Shop" links={SHOP} />
          <Column heading="About" links={ABOUT} />
          <Column heading="Info" links={INFO} />
          <div>
            <h3 className="label mb-4">Social</h3>
            <ul className="space-y-2.5">
              {["Instagram", "TikTok", "Pinterest"].map((s) => (
                <li key={s}>
                  <a href="#" className="link-underline text-sm">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Oversized wordmark, à la "MAHAGRID INC." */}
      <div className="overflow-hidden px-5 sm:px-8">
        <p className="display select-none text-[18vw] leading-[0.8] text-ink/90">
          nulebal
        </p>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Nulebal. All rights reserved.</span>
        <span className="font-mono">Made for movement — not the mirror.</span>
      </div>
    </footer>
  );
}
