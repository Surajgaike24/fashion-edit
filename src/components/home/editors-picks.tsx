import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

const editorPickIds = [
  "men-straight-trousers",
  "women-structured-bag",
  "women-minimal-sneakers",
];

const editorReasons: Record<string, string> = {
  "men-straight-trousers":
    "A dependable piece that moves easily between casual and smarter outfits.",
  "women-structured-bag":
    "A polished everyday accessory that adds structure without overcomplicating the look.",
  "women-minimal-sneakers":
    "An easy sneaker choice when you want comfort and a clean everyday finish.",
};

export default async function EditorsPicks() {
  // Get products from Supabase
  const allProducts = await getProducts();

  // Select editor picks from the real database products
  const editorPicks = editorPickIds
    .map((id) => allProducts.find((product) => product.id === id))
    .filter(
      (product): product is NonNullable<typeof product> =>
        Boolean(product)
    );

  const featuredPick = editorPicks[0];

  return (
    <section
      id="editors-picks"
      className="bg-[#f7f6f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Curated by Fashion Edit
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              Our current
              <br />
              <span className="font-normal italic">favorites.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-neutral-500">
              You don't need to browse everything. We narrow the selection
              down to pieces we think deserve your attention.
            </p>

            <Link
              href="/search"
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 transition hover:text-black"
            >
              See the full edit
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Editorial Feature */}
          <div className="relative min-h-[560px] overflow-hidden bg-neutral-200 sm:min-h-[680px]">
            <div className="absolute inset-0 bg-gradient-to-br from-stone-300 via-neutral-200 to-neutral-500" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            {/* Authority Badge */}
            <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
              <Check size={12} strokeWidth={2} />

              <span className="text-[9px] font-semibold uppercase tracking-[0.18em]">
                Editor approved
              </span>
            </div>

            {/* Feature Content */}
            <div className="absolute bottom-7 left-7 right-7 text-white sm:bottom-10 sm:left-10 sm:right-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65">
                {featuredPick?.category || "Featured piece"}
              </p>

              <h3 className="mt-3 max-w-xl text-4xl font-medium tracking-[-0.05em] sm:text-5xl">
                A piece worth
                <br />
                making room for.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                {featuredPick
                  ? featuredPick.description
                  : "A carefully selected piece from the current Fashion Edit."}
              </p>

              {featuredPick && (
                <Link
                  href={`/products/${featuredPick.id}`}
                  className="mt-7 inline-flex items-center gap-3 border-b border-white/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                >
                  Discover the pick
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </Link>
              )}
            </div>
          </div>

          {/* Product Picks */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
            {editorPicks.map((product) => (
              <div key={product.id}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={`₹${product.price.toLocaleString("en-IN")}`}
                  category={product.category}
                  image={product.image}
                />

                {/* Why We Picked It */}
                <div className="mt-4 border-l border-black/15 pl-3">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    Why we picked it
                  </p>

                  <p className="mt-1 text-[11px] leading-5 text-neutral-500">
                    {editorReasons[product.id] || product.sellingPoint}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curator Principle */}
        <div className="mt-10 border-t border-black/10 pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-6 text-neutral-400">
              Fashion Edit is designed to reduce choice overload. Fewer,
              better-curated options can make finding the right piece easier.
            </p>

            <Link
              href="/collections"
              className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 transition hover:text-black"
            >
              Explore collections
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}