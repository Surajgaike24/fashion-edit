import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

export default async function NewInPage() {
  // Get latest products from Supabase
  const allProducts = await getProducts();

  // Show products from the current Supabase collection
  const newProducts = allProducts;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/10 bg-[#f4f2ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Fashion Edit
          </p>

          <h1 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            New
            <br />
            <span className="italic font-normal">In.</span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-500">
            Fresh styles and new discoveries curated for the modern wardrobe.
          </p>
        </div>
      </section>

      {/* New Products */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Latest edit
            </p>

            <h2 className="text-3xl font-medium tracking-[-0.04em]">
              Freshly curated.
            </h2>
          </div>

          <span className="text-xs text-neutral-400">
            {newProducts.length}{" "}
            {newProducts.length === 1 ? "piece" : "pieces"}
          </span>
        </div>

        {newProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {newProducts.map((product) => (
              <ProductCard
                key={product.id}
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
            ))}
          </div>
        ) : (
          <div className="flex min-h-[350px] items-center justify-center text-center">
            <div>
              <p className="text-xl font-medium tracking-[-0.02em]">
                No new pieces yet.
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Add products to Supabase to see them here.
              </p>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}