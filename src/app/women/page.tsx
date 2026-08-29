import Link from "next/link";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

const categories = [
  "All",
  "Tops",
  "Denim",
  "Dresses",
  "Footwear",
  "Bags",
];

export default async function WomenPage() {
  // Get real products from Supabase
  const allProducts = await getProducts();

  const womenProducts = allProducts.filter(
    (product) => product.gender === "women"
  );

  const trendingWomen = womenProducts.filter(
    (product) => product.trending
  );

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/10 bg-[#f4f2ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Fashion Edit / Women
          </p>

          <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.06em] text-black sm:text-6xl lg:text-8xl">
            Women's
            <br />
            <span className="italic font-normal">Edit.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-neutral-500 sm:text-base">
            Contemporary pieces, everyday essentials and timeless styles
            curated for the modern wardrobe.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-black/10">
        <div className="mx-auto flex max-w-[1440px] items-center gap-6 overflow-x-auto px-5 py-5 sm:px-8 lg:px-12">
          {categories.map((category, index) => (
            <Link
              key={category}
              href="#products"
              className={`shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
                index === 0
                  ? "text-black"
                  : "text-neutral-400 hover:text-black"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="bg-[#f7f6f3] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Women's trending
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              Pieces worth noticing.
            </h2>
          </div>

          {trendingWomen.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
              {trendingWomen.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={`₹${product.price.toLocaleString("en-IN")}`}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="py-16 text-center">
              <p className="text-sm text-neutral-400">
                No trending pieces available right now.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* All Products */}
      <section
        id="products"
        className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                The collection
              </p>

              <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                All women's pieces.
              </h2>
            </div>

            <span className="text-xs text-neutral-400">
              {womenProducts.length} pieces
            </span>
          </div>

          {womenProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
              {womenProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  price={`₹${product.price.toLocaleString("en-IN")}`}
                  category={product.category}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg font-medium text-black">
                No women's products yet.
              </p>

              <p className="mt-2 text-sm text-neutral-400">
                Add women's products to Supabase to see them here.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}