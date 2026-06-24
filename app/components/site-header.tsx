"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "Community", href: "/community" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-b border-hairline bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[var(--header-h)] max-w-[1600px] items-center justify-between px-5 sm:px-8">
        {/* Wordmark */}
        <Link href="/" className="display text-xl leading-none tracking-tight">
          nulebal
          <span className="align-super text-[0.5em] text-accent">®</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link-underline label text-ink ${
                isActive(item.href) ? "text-accent" : ""
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center gap-5">
          <button className="label text-ink hidden sm:inline" aria-label="Search">
            Search
          </button>
          <Link href="/login" className="label text-ink hidden sm:inline">
            Login
          </Link>
          <Link href="/shop" className="label text-ink">
            Cart&nbsp;(0)
          </Link>
          <button
            className="flex h-8 w-8 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-px w-5 bg-ink transition-transform ${
                  menuOpen ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-5 bg-ink transition-transform ${
                  menuOpen ? "bottom-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-hairline bg-paper md:hidden ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        } transition-[max-height] duration-400 ease-in-out`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {[...NAV, { label: "Login", href: "/login" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="display border-b border-hairline py-4 text-3xl last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
