"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";
import { useEffect, useState } from "react";

type ProductCardProps = {
  id: string;
  name: string;
  brand: string;
  price: string;
  category: string;
  image?: string;
  href?: string;
  sellingPoint?: string;
  styleNote?: string;
  trending?: boolean;
  featured?: boolean;
};

export default function ProductCard({
  id,
  name,
  brand,
  price,
  category,
  image,
  href = `/products/${id}`,
  sellingPoint,
  styleNote,
  trending,
  featured,
}: ProductCardProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("fashion-edit-wishlist");

    if (!stored) return;

    try {
      const savedIds: string[] = JSON.parse(stored);
      setSaved(savedIds.includes(id));
    } catch {
      setSaved(false);
    }
  }, [id]);

  const toggleWishlist = () => {
    const stored = localStorage.getItem("fashion-edit-wishlist");

    let savedIds: string[] = [];

    if (stored) {
      try {
        savedIds = JSON.parse(stored);
      } catch {
        savedIds = [];
      }
    }

    if (savedIds.includes(id)) {
      savedIds = savedIds.filter((savedId) => savedId !== id);
      setSaved(false);
    } else {
      savedIds.push(id);
      setSaved(true);
    }

    localStorage.setItem(
      "fashion-edit-wishlist",
      JSON.stringify(savedIds)
    );
  };

  const badge = featured
    ? "Editor's Pick"
    : trending
      ? "Trending"
      : null;

  return (
    <article className="group min-w-0">
      {/* Product Visual */}
      <div className="relative">
        <Link
          href={href}
          aria-label={`View ${name}`}
          className="block"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f2f1ee]">

            {image ? (
              <img
                src={image}
                alt={name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[#eeece8]">
                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Fashion Edit
                </span>
              </div>
            )}

            {/* Soft image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-black/[0.02] transition duration-500 group-hover:bg-black/0" />

            {/* Category */}
            <span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-full bg-white/95 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-black shadow-sm backdrop-blur-sm">
              {category}
            </span>

            {/* Product Signal */}
            {badge && (
              <span className="absolute bottom-3 left-3 rounded-full bg-black px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-white">
                {badge}
              </span>
            )}

            {/* Desktop View CTA */}
            <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
              <div className="flex items-center justify-between bg-white/95 px-4 py-3 backdrop-blur-md">
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                  View piece
                </span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="text-black"
                />
              </div>
            </div>
          </div>
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={saved ? "Remove from saved items" : "Save item"}
          aria-pressed={saved}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-black shadow-sm backdrop-blur-sm transition duration-200 hover:scale-105 hover:bg-white active:scale-95"
        >
          <Heart
            size={16}
            strokeWidth={1.7}
            className={
              saved
                ? "fill-black text-black"
                : "text-black transition-colors"
            }
          />
        </button>
      </div>

      {/* Product Information */}
      <Link
        href={href}
        className="block pt-4"
      >
        {/* Brand */}
        <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
          {brand}
        </p>

        {/* Product Name */}
        <h3 className="mt-1.5 line-clamp-2 text-[13px] font-medium leading-5 tracking-[-0.015em] text-black sm:text-sm">
          {name}
        </h3>

        {/* Selling Point */}
        {sellingPoint && (
          <p className="mt-2 line-clamp-2 text-[10px] leading-[1.55] text-neutral-500 sm:text-[11px]">
            {sellingPoint}
          </p>
        )}

        {/* Price + Style */}
        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="text-[13px] font-semibold tracking-[-0.01em] text-black sm:text-sm">
            {price}
          </p>

          {styleNote && (
            <span className="hidden max-w-[110px] truncate text-right text-[7px] font-semibold uppercase tracking-[0.12em] text-neutral-400 sm:block">
              {styleNote.split("•")[0].trim()}
            </span>
          )}
        </div>

        {/* Mobile Discover */}
        <div className="mt-3 flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.16em] text-neutral-500 sm:hidden">
          View piece
          <ArrowUpRight size={11} strokeWidth={1.6} />
        </div>
      </Link>
    </article>
  );
}