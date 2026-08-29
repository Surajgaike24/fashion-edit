import SearchPageClient from "@/components/search/search-page-client";
import { getProducts } from "@/lib/products";

export default async function SearchPage() {
  const products = await getProducts();

  return <SearchPageClient products={products} />;
}
