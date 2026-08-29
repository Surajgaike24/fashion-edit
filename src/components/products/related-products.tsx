import ProductCard from "@/components/products/product-card";
import { getProducts } from "@/lib/products";

type RelatedProductsProps = {
  currentProductId: string;
  gender: "men" | "women" | "unisex";
  category: string;
  tags: string[];
};

export default async function RelatedProducts({
  currentProductId,
  gender,
  category,
  tags,
}: RelatedProductsProps) {
  // Get all products from Supabase
  const allProducts = await getProducts();

  // Find products related to the current product
  const relatedProducts = allProducts
    .filter((product) => product.id !== currentProductId)
    .map((product) => {
      let score = 0;

      // Same gender = strong match
      if (product.gender === gender) {
        score += 3;
      }

      // Same category = strongest match
      if (product.category === category) {
        score += 4;
      }

      // Matching style tags
      const matchingTags = product.tags.filter((tag) =>
        tags.includes(tag)
      );

      score += matchingTags.length * 2;

      return {
        product,
        score,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((item) => item.product);

  // Don't render the section if nothing related exists
  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        {/* Heading */}
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
            Continue exploring
          </p>

          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
              You may also like.
            </h2>

            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              More pieces selected around the same style and aesthetic.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
          {relatedProducts.map((product) => (
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
      </div>
    </section>
  );
}