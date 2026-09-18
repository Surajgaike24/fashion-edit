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
      className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Curated by Fashion Edit
              </p>
            </div>

            <h2 className="text-3xl font-medium leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl">
              Our current
              <br />
              <span className="font-normal italic text-neutral-400">
                favorites.
              </span>
            </h2>
          </div>

          <div className="mt-5 max-w-md lg:mt-0">
            <p className="text-xs leading-6 text-neutral-500 sm:text-sm sm:leading-7">
              A smaller selection of pieces we think deserve your attention.
            </p>

            <Link
              href="/search"
              className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
            >
              See the full edit
              <ArrowUpRight size={13} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Empty State */}
        {editorPicks.length === 0 ? (
          <div className="border border-black/10 bg-[#f7f6f3] px-6 py-20 text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              No editor picks yet
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              New curated pieces will appear here soon.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Product */}
            {featuredPick && (
              <Link
                href={`/products/${featuredPick.id}`}
                className="group block overflow-hidden bg-[#f2f0ec]"
              >
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-auto lg:min-h-[620px]">
                    {featuredPick.image ? (
                      <img
                        src={featuredPick.image}
                        alt={featuredPick.name}
                        className="absolute inset-0 h-full w-full object-contain p-8 transition duration-1000 ease-out group-hover:scale-[1.025] sm:p-12 lg:p-16"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                          Fashion Edit
                        </span>
                      </div>
                    )}

                    {/* Image label */}
                    <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                      <span className="rounded-full bg-white px-3 py-2 text-[7px] font-bold uppercase tracking-[0.16em] text-black shadow-sm">
                        Editor approved
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm sm:right-6 sm:top-6 sm:h-10 sm:w-10">
                      <ArrowUpRight size={16} strokeWidth={1.7} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between bg-[#181818] p-6 text-white sm:p-9 lg:p-12">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <p className="text-[8px] font-semibold uppercase tracking-[0.24em] text-white/50">
                          Featured piece
                        </p>

                        <span className="rounded-full border border-white/15 px-3 py-1.5 text-[7px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          {featuredPick.category}
                        </span>
                      </div>

                      <div className="mt-10 sm:mt-14 lg:mt-20">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/45">
                          {featuredPick.brand}
                        </p>

                        <h3 className="mt-3 max-w-xl text-3xl font-medium leading-[1] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                          {featuredPick.name}
                        </h3>

                        <p className="mt-5 max-w-lg text-xs leading-6 text-white/65 sm:text-sm sm:leading-7">
                          {featuredPick.sellingPoint ||
                            featuredPick.description}
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                          <span className="text-lg font-medium tracking-[-0.02em]">
                            ₹{featuredPick.price.toLocaleString("en-IN")}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-white/30" />

                          <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/45">
                            {featuredPick.store}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-10 sm:mt-14">
                      <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[8px] font-bold uppercase tracking-[0.18em] text-black transition duration-300 group-hover:bg-neutral-200">
                        Discover the pick

                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Secondary Picks */}
            {secondaryPicks.length > 0 && (
              <div className="mt-8">
                <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-4">
                  <div className="flex items-center gap-3">
                    <Check size={13} strokeWidth={1.8} />

                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-black">
                      More from the edit
                    </p>
                  </div>

                  <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    {secondaryPicks.length} pieces
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {secondaryPicks.map((product) => (
                    <div key={product.id} className="bg-[#f7f6f3]">
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

                      <div className="border-t border-black/10 px-4 pb-5 pt-4 sm:px-5 sm:pb-6">
                        <p className="text-[7px] font-bold uppercase tracking-[0.16em] text-neutral-400">
                          Why we picked it
                        </p>

                        <p className="mt-2 line-clamp-2 text-[10px] leading-5 text-neutral-500 sm:text-[11px]">
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
            )}

            {/* Editorial Principle */}
            <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

                <p className="max-w-xl text-[10px] leading-5 text-neutral-400 sm:text-xs sm:leading-6">
                  Less browsing. More considered choices. Fashion Edit brings
                  selected pieces together so discovery feels easier.
                </p>
              </div>

              <Link
                href="/collections"
                className="inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
              >
                Explore collections
                <ArrowUpRight size={13} strokeWidth={1.6} />
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}