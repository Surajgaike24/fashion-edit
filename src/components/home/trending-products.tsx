import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

export default async function TrendingProducts() {
  const products = await getProducts();

  // Supabase is the single source of truth.
  // Every product in the database is shown on the Home page.
  const homeProducts = products;

  return (
    <section
      id="trending"
      className="bg-[#f7f6f3] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-7 sm:mb-10">
          <div className="flex items-end justify-between gap-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
                <Sparkles size={11} strokeWidth={1.5} />

                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-600">
                  Fashion Edit
                </span>
              </div>

              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
                Trending now
              </p>

              <h2 className="text-3xl font-medium leading-none tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
                Pieces worth
                <br className="sm:hidden" /> noticing.
              </h2>
            </div>

            <Link
              href="/search"
              className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-black sm:inline-flex"
            >
              View all
              <ArrowUpRight size={13} strokeWidth={1.6} />
            </Link>
          </div>

          <p className="mt-4 max-w-xl text-xs leading-5 text-neutral-500 sm:text-sm sm:leading-6">
            A curated selection of fashion pieces from our latest edit.
          </p>
        </div>

        {/* Product Count */}
        <div className="mb-6 flex items-center justify-between border-y border-black/10 py-3.5">
          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Latest selection
          </p>

          <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            {homeProducts.length} pieces
          </p>
        </div>

        {/* Products */}
        {homeProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-14">
            {homeProducts.map((product) => (
              <div key={product.id}>
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
              </div>
            ))}
          </div>
        ) : (
          <div className="flex min-h-[220px] items-center justify-center text-center">
            <div>
              <p className="text-base font-medium text-black">
                No products found.
              </p>

              <p className="mt-2 text-xs text-neutral-500">
                Add products to Supabase to see them here.
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 border-t border-black/10 pt-6 sm:mt-14 sm:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-black">
                Looking for something specific?
              </p>

              <p className="mt-1 text-xs text-neutral-400">
                Search the complete Fashion Edit.
              </p>
            </div>

            <Link
              href="/search"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-black px-6 py-3.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800 sm:w-auto"
            >
              Explore all pieces
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/search"
            className="inline-flex items-center gap-2 border-b border-black pb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-black"
          >
            View all fashion
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}