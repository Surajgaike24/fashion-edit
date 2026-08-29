"use client";

import { ArrowUpRight, Heart, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

type ProductActionsProps = {
  productId: string;
  affiliateUrl?: string;
};

export default function ProductActions({
  productId,
  affiliateUrl,
}: ProductActionsProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("fashion-edit-wishlist");

    if (!stored) return;

    try {
      const savedIds: string[] = JSON.parse(stored);
      setSaved(savedIds.includes(productId));
    } catch {
      setSaved(false);
    }
  }, [productId]);

  const toggleWishlist = () => {
    const stored = localStorage.getItem("fashion-edit-wishlist");

    let savedIds: string[] = [];

    try {
      savedIds = stored ? JSON.parse(stored) : [];
    } catch {
      savedIds = [];
    }

    if (savedIds.includes(productId)) {
      savedIds = savedIds.filter((id) => id !== productId);
      setSaved(false);
    } else {
      savedIds.push(productId);
      setSaved(true);
    }

    localStorage.setItem(
      "fashion-edit-wishlist",
      JSON.stringify(savedIds)
    );
  };

  const canShop = Boolean(affiliateUrl);

  return (
    <div className="mt-10">
      {/* Primary Actions */}
      <div className="flex gap-3">
        <a
          href={affiliateUrl || "#"}
          target={canShop ? "_blank" : undefined}
          rel={canShop ? "noopener noreferrer" : undefined}
          aria-disabled={!canShop}
          onClick={(event) => {
            if (!canShop) {
              event.preventDefault();
            }
          }}
          className={`group flex flex-1 items-center justify-center gap-3 rounded-full px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition ${
            canShop
              ? "bg-black hover:bg-neutral-800"
              : "cursor-not-allowed bg-neutral-300"
          }`}
        >
          {canShop ? "View at retailer" : "Retailer unavailable"}

          {canShop && (
            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </a>

        {/* Save */}
        <button
          type="button"
          onClick={toggleWishlist}
          aria-label={
            saved
              ? "Remove from saved items"
              : "Save product"
          }
          aria-pressed={saved}
          className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border transition ${
            saved
              ? "border-black bg-black text-white"
              : "border-black/10 bg-white text-black hover:border-black hover:bg-neutral-50"
          }`}
        >
          <Heart
            size={19}
            strokeWidth={1.6}
            className={saved ? "fill-white text-white" : "text-black"}
          />
        </button>
      </div>

      {/* Trust / Decision Support */}
      {canShop && (
        <div className="mt-5 flex items-start gap-3">
          <ShieldCheck
            size={15}
            strokeWidth={1.5}
            className="mt-0.5 shrink-0 text-neutral-500"
          />

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-700">
              Shop with confidence
            </p>

            <p className="mt-1 text-[10px] leading-5 text-neutral-400">
              You’ll continue to the retailer to see the latest
              availability, pricing and purchase options.
            </p>
          </div>
        </div>
      )}

      {/* Save Psychology */}
      {saved && (
        <p className="mt-3 text-[10px] font-medium tracking-[0.02em] text-neutral-500">
          Saved to your Fashion Edit wishlist.
        </p>
      )}
    </div>
  );
}