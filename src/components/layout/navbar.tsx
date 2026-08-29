"use client";

import Link from "next/link";
import { Heart, Menu, Search, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "New In", href: "/new-in" },
  { label: "Collections", href: "/collections" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Fashion Edit home"
          className="group shrink-0 leading-none"
          onClick={() => setOpen(false)}
        >
          <span className="block text-[18px] font-semibold tracking-[-0.04em] text-black sm:text-[20px]">
            FASHION<span className="font-normal">EDIT</span>
          </span>

          <span className="mt-1 block text-[7px] font-medium uppercase tracking-[0.32em] text-neutral-500">
            Curated style
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative py-2 text-[13px] font-medium tracking-wide text-neutral-700 transition-colors hover:text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-1 lg:flex">

          {/* Search */}
          <Link
            href="/search"
            aria-label="Search Fashion Edit"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
          >
            <Search size={19} strokeWidth={1.7} />
          </Link>

          {/* Saved Items */}
          <button
            type="button"
            aria-label="Saved items"
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
          >
            <Heart size={19} strokeWidth={1.7} />
            <Link
              href="/wishlist"
              aria-label="Saved items"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
            >
              <Heart size={19} strokeWidth={1.7} />
            </Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-neutral-100 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X size={22} strokeWidth={1.7} />
          ) : (
            <Menu size={22} strokeWidth={1.7} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-black/8 bg-white transition-[max-height,opacity] duration-300 lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav
          className="mx-auto max-w-[1440px] px-5 pb-6 pt-3 sm:px-8"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-black/8 py-4 text-sm font-medium text-neutral-800"
            >
              {link.label}
              <span className="text-neutral-400">↗</span>
            </Link>
          ))}

          {/* Mobile Search */}
          <div className="flex items-center gap-2 pt-4">
            <Link
              href="/search"
              onClick={() => setOpen(false)}
              className="flex flex-1 items-center gap-2 rounded-full bg-neutral-100 px-4 py-3 text-left text-sm text-neutral-600"
            >
              <Search size={17} strokeWidth={1.7} />
              Search
            </Link>

            <button
              type="button"
              aria-label="Saved items"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10"
            >
              <Heart size={18} strokeWidth={1.7} />
              <Link
                href="/wishlist"
                aria-label="Saved items"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10"
              >
                <Heart size={18} strokeWidth={1.7} />
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}