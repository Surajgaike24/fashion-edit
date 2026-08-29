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

  return (
    <article className="group relative">
      {/* Product Image */}
      <Link href={href} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300">
              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Fashion Edit
              </span>
            </div>
          )}

          {/* Category */}
          <span className="absolute left-3 top-3 bg-white/95 px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] backdrop-blur-sm">
            {category}
          </span>

          {/* Product Signal */}
          {(trending || featured) && (
            <span className="absolute bottom-3 left-3 bg-black px-2.5 py-1.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-white">
              {trending ? "Trending" : "Editor's Pick"}
            </span>
          )}

          {/* Desktop Hover CTA */}
          <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
            <div className="flex items-center justify-between bg-white/95 px-4 py-3 backdrop-blur-sm">
              <span className="text-[9px] font-semibold uppercase tracking-[0.16em]">
                View piece
              </span>

              <ArrowUpRight size={14} strokeWidth={1.6} />
            </div>
          </div>
        </div>
      </Link>

      {/* Wishlist */}
      <button
        type="button"
        onClick={toggleWishlist}
        aria-label={saved ? "Remove from saved items" : "Save item"}
        className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-sm transition hover:scale-105 hover:bg-white"
      >
        <Heart
          size={16}
          strokeWidth={1.7}
          className={saved ? "fill-black text-black" : "text-black"}
        />
      </button>

      {/* Product Information */}
      <Link href={href} className="block pt-4">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
          {brand}
        </p>

        <h3 className="mt-1 text-sm font-medium tracking-[-0.01em] text-black">
          {name}
        </h3>

        {/* Selling Point */}
        {sellingPoint && (
          <p className="mt-2 text-[11px] leading-5 text-neutral-500">
            {sellingPoint}
          </p>
        )}

        <div className="mt-2 flex items-center justify-between gap-3">
          <p className="text-sm font-medium text-neutral-800">
            {price}
          </p>

          {styleNote && (
            <span className="hidden text-right text-[8px] font-medium uppercase tracking-[0.1em] text-neutral-400 sm:block">
              {styleNote.split("•")[0].trim()}
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}