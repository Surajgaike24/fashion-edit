"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/products/product-card";
import { getProducts, type Product } from "@/lib/products";

export default function WishlistPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWishlist = async () => {
      try {
        // Get saved product IDs from localStorage
        const saved = localStorage.getItem("fashion-edit-wishlist");

        const ids: string[] = saved ? JSON.parse(saved) : [];

        setSavedIds(ids);

        // Get the latest products from Supabase
        const allProducts = await getProducts();

        // Only keep products that are saved
        const wishlistProducts = allProducts.filter((product) =>
          ids.includes(product.id)
        );

        setProducts(wishlistProducts);
      } catch (error) {
        console.error("WISHLIST ERROR:", error);

        setSavedIds([]);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadWishlist();
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedIds = savedIds.filter((id) => id !== productId);

    setSavedIds(updatedIds);

    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );

    localStorage.setItem(
      "fashion-edit-wishlist",
      JSON.stringify(updatedIds)
    );
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/10 bg-[#f4f2ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Your collection
          </p>

          <h1 className="text-4xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Saved pieces.
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-500">
            Keep the pieces you love in one place and come back to them
            whenever you're ready.
          </p>
        </div>
      </section>

      {/* Wishlist */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[350px] items-center justify-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Loading saved pieces...
            </p>
          </div>
        ) : products.length > 0 ? (
          <>
            {/* Wishlist Header */}
            <div className="mb-10 flex items-end justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Your edit
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
                  Pieces you saved.
                </h2>
              </div>

              <span className="text-xs text-neutral-400">
                {products.length}{" "}
                {products.length === 1 ? "piece" : "pieces"}
              </span>
            </div>

            {/* Products */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
              {products.map((product) => (
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

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(product.id)}
                    className="mt-4 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-400 underline underline-offset-4 transition hover:text-black"
                  >
                    Remove from saved
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty State */
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <p className="text-2xl font-medium tracking-[-0.03em]">
              Nothing saved yet.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
              Tap the heart on a product to save it to your collection.
            </p>

            <Link
              href="/search"
              className="mt-7 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              Explore the edit
            </Link>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}