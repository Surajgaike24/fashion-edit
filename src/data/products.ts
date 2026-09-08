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

  // Customer-facing positioning
  sellingPoint?: string;
  styleNote?: string;

  // Customer decision support
  audience?: string;
  occasion?: string[];
  valueReason?: string;
  confidenceNote?: string;

  store?: string;
  affiliateUrl?: string;

  featured?: boolean;
  trending?: boolean;
};

// Product data is now managed in Supabase.
// Do not add products here.
// Supabase is the single source of truth.
export const products: Product[] = [];