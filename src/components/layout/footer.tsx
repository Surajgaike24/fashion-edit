import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  Search,
} from "lucide-react";

const shopLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "New In", href: "/new-in" },
  { label: "Collections", href: "/collections" },
];

const exploreLinks = [
  { label: "Shop the Look", href: "/#shop-the-look" },
  { label: "Editor's Picks", href: "/#editors-picks" },
  { label: "Style Inspiration", href: "/#inspiration" },
  { label: "Search Fashion", href: "/search" },
];

const discoverLinks = [
  { label: "Search", href: "/search" },
  { label: "Saved Items", href: "/wishlist" },
  { label: "Curated Collections", href: "/collections" },
];

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  {
    label: "Affiliate Disclosure",
    href: "/affiliate-disclosure",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Main Footer */}
        <div className="border-b border-white/10 py-14 sm:py-20 lg:py-24">

          {/* Brand + Newsletter */}
          <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-20">

            {/* Brand */}
            <div>
              <Link
                href="/"
                aria-label="Fashion Edit home"
                className="inline-block"
              >
                <span className="block text-[24px] font-semibold tracking-[-0.055em]">
                  FASHION<span className="font-normal">EDIT</span>
                </span>

                <span className="mt-1 block text-[7px] font-medium uppercase tracking-[0.34em] text-neutral-500">
                  Curated style
                </span>
              </Link>

              <h2 className="mt-8 max-w-2xl text-3xl font-medium leading-[1.02] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                Discover fashion
                <br />
                <span className="font-normal italic text-neutral-500">
                  worth wearing.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-xs leading-6 text-neutral-400 sm:text-sm sm:leading-7">
                Fashion Edit is a curated destination for discovering modern
                fashion, styling ideas and pieces worth adding to your wardrobe.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Curated fashion",
                  "Men & Women",
                  "Style inspiration",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.16em] text-neutral-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:pt-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Stay in the edit
              </p>

              <h3 className="mt-4 max-w-sm text-xl font-medium leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                New finds.
                <br />
                Style inspiration.
                <br />
                Straight to you.
              </h3>

              <p className="mt-4 max-w-sm text-xs leading-5 text-neutral-500">
                Join the Fashion Edit for new discoveries and curated style
                inspiration.
              </p>

              <div className="mt-7">
                <div className="flex items-center border-b border-white/20 pb-3 transition-colors focus-within:border-white/60">
                  <Mail
                    size={15}
                    strokeWidth={1.5}
                    className="mr-3 shrink-0 text-neutral-600"
                  />

                  <input
                    type="email"
                    placeholder="Your email address"
                    aria-label="Email address"
                    className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-neutral-600"
                  />

                  <button
                    type="button"
                    aria-label="Subscribe to Fashion Edit"
                    className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:bg-neutral-200"
                  >
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.7}
                    />
                  </button>
                </div>
              </div>

              <p className="mt-3 text-[8px] leading-4 text-neutral-600">
                No spam. Just curated fashion and useful inspiration.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/10 pt-10 sm:mt-16 sm:grid-cols-4 sm:gap-8 sm:pt-12">

            {/* Shop */}
            <div>
              <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Shop
              </p>

              <nav className="flex flex-col gap-3.5">
                {shopLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-xs text-neutral-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Explore */}
            <div>
              <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Explore
              </p>

              <nav className="flex flex-col gap-3.5">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-xs text-neutral-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Discover */}
            <div>
              <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Discover
              </p>

              <nav className="flex flex-col gap-3.5">
                {discoverLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-xs text-neutral-300 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Follow + Legal */}
            <div>
              <p className="mb-5 text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Follow the edit
              </p>

              <a
                href="https://www.instagram.com/fashion_edit.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fashion Edit on Instagram"
                className="group flex w-fit items-center gap-3 text-xs text-neutral-300 transition hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[9px] font-semibold uppercase tracking-[0.08em] transition group-hover:border-white/30">
                  IG
                </span>

                <span>Instagram</span>

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.6}
                  className="text-neutral-600 transition group-hover:text-white"
                />
              </a>

              <p className="mt-5 text-[8px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Legal
              </p>

              <nav className="mt-3 flex flex-col gap-2.5">
                {legalLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="w-fit text-[9px] text-neutral-500 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[9px] tracking-wide text-neutral-600">
              © {new Date().getFullYear()} Fashion Edit.
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-neutral-700">
              Discover. Refine. Wear.
            </p>
          </div>

          <p className="text-[8px] uppercase tracking-[0.14em] text-neutral-700">
            Curated fashion discovery
          </p>
        </div>
      </div>
    </footer>
  );
}