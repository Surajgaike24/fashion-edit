import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

export default async function EditorsPicks() {
  const allProducts = await getProducts();

  const editorPicks = allProducts
    .filter((product) => product.featured)
    .slice(0, 3);

  const featuredPick = editorPicks[0];
  const secondaryPicks = editorPicks.slice(1, 3);

  return (
    <section
      id="editors-picks"
      className="bg-[#f7f6f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Curated by Fashion Edit
              </p>
            </div>

            <h2 className="text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              Our current
              <br />
              <span className="font-normal italic text-neutral-400">
                favorites.
              </span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-7 text-neutral-500">
              You don't need to browse everything. We narrow the selection
              down to pieces we think deserve your attention.
            </p>

            <Link
              href="/search"
              className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
            >
              See the full edit
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Empty state */}
        {editorPicks.length === 0 ? (
          <div className="border border-black/10 bg-white px-6 py-20 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              No editor picks yet
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              New curated pieces will appear here soon.
            </p>
          </div>
        ) : (
          <>
            {/* Main editorial layout */}
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Featured Product */}
              {featuredPick && (
                <Link
                  href={`/products/${featuredPick.id}`}
                  className="group relative overflow-hidden bg-white"
                >
                  <div className="relative min-h-[560px] overflow-hidden sm:min-h-[680px]">
                    {/* Product image */}
                    <div className="absolute inset-0 bg-[#ece9e4]">
                      {featuredPick.image ? (
                        <img
                          src={featuredPick.image}
                          alt={featuredPick.name}
                          className="h-full w-full object-contain p-8 transition duration-1000 ease-out group-hover:scale-[1.025] sm:p-12"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                            Fashion Edit
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Very subtle image overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Badge */}
                    <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-sm">
                        <Check size={12} strokeWidth={2} />

                        <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                          Editor approved
                        </span>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                      <span className="rounded-full bg-black/65 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {featuredPick.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-10">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/60">
                        Featured piece
                      </p>

                      <h3 className="mt-3 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                        A piece worth
                        <br />
                        making room for.
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
                        {featuredPick.description}
                      </p>

                      <div className="mt-5 flex items-center gap-4">
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em]">
                          {featuredPick.brand}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-white/40" />

                        <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/65">
                          ₹
                          {featuredPick.price.toLocaleString("en-IN")}
                        </span>
                      </div>

                      {/* CTA */}
                      <div className="mt-7">
                        <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-black transition duration-300 group-hover:bg-neutral-100">
                          Discover the pick

                          <ArrowUpRight
                            size={14}
                            strokeWidth={1.7}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Two secondary products */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {secondaryPicks.map((product) => (
                  <div
                    key={product.id}
                    className="flex flex-col bg-white"
                  >
                    <ProductCard
                      id={product.id}
                      name={product.name}
                      brand={product.brand}
                      price={`₹${product.price.toLocaleString("en-IN")}`}
                      category={product.category}
                      image={product.image}
                      sellingPoint={product.sellingPoint}
                      styleNote={product.styleNote}
                      trending={product.trending}
                      featured={product.featured}
                    />

                    <div className="border-t border-black/10 px-4 pb-5 pt-4 sm:px-5">
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                        Why we picked it
                      </p>

                      <p className="mt-2 text-[11px] leading-5 text-neutral-500">
                        {product.sellingPoint ||
                          "A considered piece selected for the current Fashion Edit."}
                      </p>

                      <Link
                        href={`/products/${product.id}`}
                        className="mt-4 inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
                      >
                        View piece
                        <ArrowUpRight size={12} strokeWidth={1.6} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curator principle */}
            <div className="mt-10 flex flex-col justify-between gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                <p className="max-w-xl text-xs leading-6 text-neutral-400">
                  Fashion Edit is designed to reduce choice overload. Fewer,
                  better-curated options can make finding the right piece
                  easier.
                </p>
              </div>

              <Link
                href="/collections"
                className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
              >
                Explore collections
                <ArrowUpRight size={14} strokeWidth={1.6} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}