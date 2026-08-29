import { supabase } from "@/lib/supabase";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  gender: "men" | "women" | "unisex";
  image?: string;
  description: string;
  tags: string[];
  sellingPoint?: string;
  styleNote?: string;
  store?: string;
  affiliateUrl?: string;
  featured?: boolean;
  trending?: boolean;
};

type DatabaseProduct = {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  gender: "men" | "women" | "unisex";
  image: string | null;
  description: string;
  tags: string[] | null;
  selling_point: string | null;
  style_note: string | null;
  store: string | null;
  affiliate_url: string | null;
  featured: boolean | null;
  trending: boolean | null;
  created_at: string | null;
  updated_at: string | null;
};

function mapProduct(product: DatabaseProduct): Product {
  return {
    id: product.id,
    name: product.name,
    brand: product.brand,
    price: Number(product.price),
    category: product.category,
    gender: product.gender,
    image: product.image ?? undefined,
    description: product.description,
    tags: product.tags ?? [],
    sellingPoint: product.selling_point ?? undefined,
    styleNote: product.style_note ?? undefined,
    store: product.store ?? undefined,
    affiliateUrl: product.affiliate_url ?? undefined,
    featured: product.featured ?? false,
    trending: product.trending ?? false,
  };
}

export async function getProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*");

    if (error) {
      console.error("SUPABASE ERROR MESSAGE:", error.message);
      console.error("SUPABASE ERROR DETAILS:", error.details);
      console.error("SUPABASE ERROR HINT:", error.hint);
      console.error("SUPABASE ERROR CODE:", error.code);

      return [];
    }

    console.log("SUPABASE PRODUCTS:", data);

    return (data as DatabaseProduct[]).map(mapProduct);
  } catch (error) {
    console.error("SUPABASE UNEXPECTED ERROR:", error);

    return [];
  }
}

export async function getProductById(
  id: string
): Promise<Product | null> {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("SUPABASE PRODUCT ERROR MESSAGE:", error.message);
      console.error("SUPABASE PRODUCT ERROR DETAILS:", error.details);
      console.error("SUPABASE PRODUCT ERROR HINT:", error.hint);
      console.error("SUPABASE PRODUCT ERROR CODE:", error.code);

      return null;
    }

    if (!data) {
      return null;
    }

    return mapProduct(data as DatabaseProduct);
  } catch (error) {
    console.error("SUPABASE PRODUCT UNEXPECTED ERROR:", error);

    return null;
  }
}