import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const shopLinks = [
  { label: "Men", href: "#men" },
  { label: "Women", href: "#women" },
  { label: "Trending", href: "#trending" },
  { label: "Collections", href: "#collections" },
];

const exploreLinks = [
  { label: "New In", href: "#new-in" },
  { label: "Shop the Look", href: "#look" },
  { label: "Editor's Picks", href: "#editors-picks" },
  { label: "Style Journal", href: "#journal" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-block text-xl font-semibold tracking-[-0.04em]"
            >
              FASHION<span className="font-normal">EDIT</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-400">
              A curated destination for discovering modern fashion, timeless
              essentials and pieces worth wearing.
            </p>

            <Link
              href="#explore"
              className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white"
            >
              Explore Fashion Edit
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>

          {/* Shop */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Shop
            </p>

            <nav className="flex flex-col gap-3">
              {shopLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-neutral-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Explore
            </p>

            <nav className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-neutral-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Stay in the edit
            </p>

            <p className="text-sm leading-6 text-neutral-400">
              Get new edits, style inspiration and curated finds in your
              inbox.
            </p>

            <div className="mt-6 flex border-b border-neutral-700 pb-3">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
              />

              <button
                type="button"
                className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition hover:text-neutral-400"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-neutral-800 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] tracking-wide text-neutral-600">
            © {new Date().getFullYear()} Fashion Edit. All rights reserved.
          </p>

          <div className="flex gap-5 text-[10px] text-neutral-500">
            <Link href="#privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="#terms" className="transition hover:text-white">
              Terms
            </Link>

            <Link href="#affiliate" className="transition hover:text-white">
              Affiliate Disclosure
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}