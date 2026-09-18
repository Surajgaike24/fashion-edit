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
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="flex h-[72px] items-center justify-between">

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
                className="relative py-2 text-[13px] font-medium tracking-wide text-neutral-700 transition-colors hover:text-black"
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

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Saved items"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
            >
              <Heart size={19} strokeWidth={1.7} />
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-1 lg:hidden">

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Saved items"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
            >
              <Heart size={20} strokeWidth={1.7} />
            </Link>

            {/* Search Icon */}
            <Link
              href="/search"
              aria-label="Search Fashion Edit"
              className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 transition hover:bg-neutral-100 hover:text-black"
            >
              <Search size={20} strokeWidth={1.7} />
            </Link>

            {/* Menu */}
            <button
              type="button"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-black transition hover:bg-neutral-100"
            >
              {open ? (
                <X size={22} strokeWidth={1.7} />
              ) : (
                <Menu size={22} strokeWidth={1.7} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="pb-3 lg:hidden">
          <Link
            href="/search"
            aria-label="Search Fashion Edit"
            className="flex h-[48px] w-full items-center gap-3 rounded-xl bg-neutral-100 px-4 text-neutral-500 transition hover:bg-neutral-200"
          >
            <Search size={18} strokeWidth={1.7} />

            <span className="text-sm">
              Search styles, products & brands...
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-black/8 bg-white lg:hidden">
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
                <span>{link.label}</span>
                <span className="text-neutral-400">↗</span>
              </Link>
            ))}

            <div className="flex items-center justify-between pt-5">
              <Link
                href="/wishlist"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm font-medium text-neutral-800"
              >
                <Heart size={17} strokeWidth={1.7} />
                Saved items
              </Link>

              <Link
                href="/search"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-500"
              >
                Explore all →
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}