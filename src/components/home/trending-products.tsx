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
      className="bg-[#f7f6f3] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2">
              <Sparkles size={12} strokeWidth={1.5} />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                Curated for you
              </span>
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Trending now
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              Pieces worth noticing.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">
              Not everything deserves your attention. We highlight pieces
              that fit the edit and are worth a closer look.
            </p>
          </div>

          <Link
            href="/search"
            className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black sm:inline-flex"
          >
            Explore the edit
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        {/* Product Count */}
        <div className="mb-8 flex items-center justify-between border-y border-black/10 py-4">
          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-400">
            Selected pieces
          </p>

          <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            {homeProducts.length} products
          </p>
        </div>

        {/* Products */}
        {homeProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {homeProducts.map((product) => (
              <div key={product.id} className="group">
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
          <div className="flex min-h-[250px] items-center justify-center text-center">
            <div>
              <p className="text-lg font-medium text-black">
                No products found.
              </p>

              <p className="mt-2 text-sm text-neutral-500">
                Add products to Supabase to see them here.
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-black">
              Still deciding?
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              Explore the full edit and find something that feels right.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-3 rounded-full bg-black px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
          >
            Explore all pieces
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}