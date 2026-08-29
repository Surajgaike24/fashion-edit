import Link from "next/link";
import { ArrowLeft, Check, ShieldCheck } from "lucide-react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductActions from "@/components/products/product-actions";
import RelatedProducts from "@/components/products/related-products";
import { getProductById } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  // Get product from Supabase
  const product = await getProductById(slug);

  // Product not found
  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />

        <section className="flex min-h-[60vh] items-center justify-center px-5">
          <div className="text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Fashion Edit
            </p>

            <h1 className="mt-4 text-4xl font-medium tracking-[-0.04em]">
              Product not found.
            </h1>

            <Link
              href="/"
              className="mt-7 inline-flex rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              Back to Fashion Edit
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    );
  }

  // Back navigation
  const backHref =
    product.gender === "men"
      ? "/men"
      : product.gender === "women"
        ? "/women"
        : "/";

  const backLabel =
    product.gender === "men"
      ? "Men"
      : product.gender === "women"
        ? "Women"
        : "Fashion Edit";

  // Product style tags
  const styleTags = product.tags
    .filter((tag) => tag !== "everyday")
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-5 pt-6 sm:px-8 lg:px-12">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 transition hover:text-black"
        >
          <ArrowLeft size={13} strokeWidth={1.6} />
          Back to {backLabel}
        </Link>
      </div>

      {/* Main Product */}
      <section className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:py-16">
        {/* Product Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f4f2ee]">
          {product.image ? (
            <div className="flex h-full w-full items-center justify-center p-3 sm:p-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-300">
              <div className="text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                  Fashion Edit
                </p>

                <p className="mt-3 text-6xl font-light tracking-[-0.07em] text-neutral-700">
                  EDIT
                </p>
              </div>
            </div>
          )}

          {/* Category */}
          <span className="absolute left-5 top-5 bg-white/95 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] backdrop-blur-sm">
            {product.category}
          </span>

          {/* Product Status */}
          {(product.trending || product.featured) && (
            <span className="absolute bottom-5 left-5 bg-black px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
              {product.trending ? "Trending" : "Editor's Pick"}
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          {/* Brand */}
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {product.brand}
          </p>

          {/* Product Name */}
          <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-[-0.05em] text-black sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
            {product.name}
          </h1>

          {/* Selling Point */}
          {product.sellingPoint && (
            <p className="mt-5 max-w-lg text-base font-medium leading-6 text-neutral-700">
              {product.sellingPoint}
            </p>
          )}

          {/* Price */}
          <p className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-black">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          {/* Style Note */}
          {product.styleNote && (
            <div className="mt-5 w-fit rounded-full bg-neutral-100 px-4 py-2">
              <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-600">
                {product.styleNote}
              </p>
            </div>
          )}

          <div className="my-8 h-px bg-black/10" />

          {/* Why This Piece */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Why this piece
            </p>

            <h2 className="mt-3 text-xl font-medium tracking-[-0.03em] text-black">
              Built around your everyday wardrobe.
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-neutral-500">
              {product.description}
            </p>
          </div>

          {/* Style Signals */}
          {styleTags.length > 0 && (
            <div className="mt-7">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                Style signals
              </p>

              <div className="flex flex-wrap gap-2">
                {styleTags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-2 border border-black/10 px-3 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500"
                  >
                    <Check size={12} strokeWidth={1.7} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Purchase Confidence */}
          <div className="mt-8 grid gap-3 border-y border-black/10 py-5 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-neutral-700"
              />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black">
                  Shop with clarity
                </p>

                <p className="mt-1 text-[10px] leading-5 text-neutral-400">
                  Review the retailer&apos;s product details before purchasing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-neutral-700"
              />

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black">
                  Curated selection
                </p>

                <p className="mt-1 text-[10px] leading-5 text-neutral-400">
                  Selected around a clear style direction.
                </p>
              </div>
            </div>
          </div>

          {/* Shop + Save */}
          <ProductActions
            productId={product.id}
            affiliateUrl={product.affiliateUrl}
          />

          {/* Retailer Information */}
          <div className="mt-7 border-t border-black/10 pt-5">
            <div className="flex items-start gap-3">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black">
                  Shop through the retailer
                </p>

                <p className="mt-2 text-[11px] leading-5 text-neutral-400">
                  {product.store
                    ? `Available through ${product.store}.`
                    : "You'll be redirected to the retailer to complete your purchase."}
                </p>
              </div>
            </div>
          </div>

          {/* Affiliate Disclosure */}
          <p className="mt-5 text-[9px] leading-5 text-neutral-400">
            Fashion Edit may earn a commission when you purchase through
            selected retailer links. This does not change the price you pay.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts
        currentProductId={product.id}
        gender={product.gender}
        category={product.category}
        tags={product.tags}
      />

      <Footer />
    </main>
  );
}