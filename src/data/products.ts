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

export const products: Product[] = [
  {
    id: "men-relaxed-tshirt",
    name: "Relaxed Essential T-Shirt",
    brand: "The Edit",
    price: 899,
    category: "T-Shirts",
    gender: "men",

    description:
      "A clean everyday essential with a relaxed silhouette and versatile styling.",

    tags: ["minimal", "casual", "everyday"],

    sellingPoint: "Easy everyday essential",
    styleNote: "Minimal look • Easy to style",

    audience: "For everyday minimalists",
    occasion: ["College", "Casual days", "Weekend"],
    valueReason:
      "A versatile basic you can build multiple outfits around.",
    confidenceNote:
      "Easy to pair with jeans, trousers or sneakers.",

    store: "Fashion Edit Store",

    featured: true,
    trending: true,
  },

  {
    id: "men-oversized-shirt",
    name: "Minimal Oversized Shirt",
    brand: "Studio Edit",
    price: 1499,
    category: "Shirts",
    gender: "men",

    description:
      "A relaxed shirt designed for effortless everyday outfits.",

    tags: ["oversized", "casual", "minimal"],

    sellingPoint: "Relaxed modern silhouette",
    styleNote: "Oversized • Casual • Minimal",

    audience: "For relaxed everyday style",
    occasion: ["College", "Casual outings", "Weekend"],
    valueReason:
      "The relaxed shape adds personality without making styling complicated.",
    confidenceNote:
      "Works well with straight trousers, denim and everyday sneakers.",

    store: "Fashion Edit Store",

    trending: true,
  },

  {
    id: "men-straight-trousers",
    name: "Classic Straight Trousers",
    brand: "Modern Form",
    price: 1799,
    category: "Trousers",
    gender: "men",

    description:
      "A timeless straight-fit trouser that works across casual and smart looks.",

    tags: ["classic", "smart-casual", "everyday"],

    sellingPoint: "Works beyond one occasion",
    styleNote: "Classic • Smart-casual • Everyday",

    audience: "For versatile wardrobes",
    occasion: ["College", "Work", "Dinner"],
    valueReason:
      "One dependable silhouette that can move between casual and polished outfits.",
    confidenceNote:
      "Pairs naturally with shirts, T-shirts and clean sneakers.",

    store: "Fashion Edit Store",

    featured: true,
  },

  {
    id: "men-everyday-sneakers",
    name: "Everyday Leather Sneakers",
    brand: "The Edit",
    price: 2299,
    category: "Footwear",
    gender: "men",

    description:
      "Minimal everyday sneakers designed to pair easily with modern outfits.",

    tags: ["sneakers", "minimal", "everyday"],

    sellingPoint: "A clean everyday pair",
    styleNote: "Minimal • Versatile • Everyday",

    audience: "For clean everyday looks",
    occasion: ["College", "Casual outings", "Weekend"],
    valueReason:
      "A simple sneaker silhouette that works across multiple everyday outfits.",
    confidenceNote:
      "Easy to wear with denim, trousers and relaxed fits.",

    store: "Fashion Edit Store",

    trending: true,
  },

  {
    id: "women-relaxed-top",
    name: "Relaxed Everyday Top",
    brand: "Studio Edit",
    price: 999,
    category: "Tops",
    gender: "women",

    description:
      "An easy everyday top with a clean silhouette and effortless styling.",

    tags: ["casual", "minimal", "everyday"],

    sellingPoint: "Simple piece, easy styling",
    styleNote: "Casual • Minimal • Everyday",

    audience: "For effortless everyday style",
    occasion: ["College", "Casual days", "Weekend"],
    valueReason:
      "A simple foundation piece that can work across different everyday looks.",
    confidenceNote:
      "Easy to combine with denim, trousers and everyday accessories.",

    store: "Fashion Edit Store",

    featured: true,
  },

  {
    id: "women-structured-bag",
    name: "Structured Everyday Bag",
    brand: "Modern Form",
    price: 2199,
    category: "Bags",
    gender: "women",

    description:
      "A structured everyday bag designed to complement modern looks.",

    tags: ["bag", "minimal", "everyday"],

    sellingPoint: "Polished everyday accessory",
    styleNote: "Structured • Minimal • Everyday",

    audience: "For polished everyday looks",
    occasion: ["College", "Work", "Casual outings"],
    valueReason:
      "Adds structure to simple outfits while remaining easy to use every day.",
    confidenceNote:
      "Works naturally with both casual and smart-casual outfits.",

    store: "Fashion Edit Store",

    trending: true,
  },

  {
    id: "women-minimal-sneakers",
    name: "Minimal Court Sneakers",
    brand: "The Edit",
    price: 2499,
    category: "Footwear",
    gender: "women",

    description:
      "Clean court-inspired sneakers for everyday outfits.",

    tags: ["sneakers", "casual", "minimal"],

    sellingPoint: "Clean sneaker staple",
    styleNote: "Casual • Minimal • Easy to pair",

    audience: "For minimal everyday wardrobes",
    occasion: ["College", "Casual outings", "Weekend"],
    valueReason:
      "A clean sneaker shape that can anchor many different casual outfits.",
    confidenceNote:
      "Easy to pair with denim, trousers and relaxed everyday pieces.",

    store: "Fashion Edit Store",

    featured: true,
  },

  {
    id: "women-relaxed-denim",
    name: "Relaxed Straight Denim",
    brand: "Studio Edit",
    price: 1899,
    category: "Denim",
    gender: "women",

    description:
      "A versatile straight denim silhouette designed for everyday styling.",

    tags: ["denim", "casual", "everyday"],

    sellingPoint: "A reliable everyday fit",
    styleNote: "Relaxed • Casual • Everyday",

    audience: "For effortless everyday dressing",
    occasion: ["College", "Casual outings", "Weekend"],
    valueReason:
      "A dependable denim silhouette that gives you more outfit combinations.",
    confidenceNote:
      "Pairs easily with simple tops, shirts and everyday sneakers.",

    store: "Fashion Edit Store",

    trending: true,
  },
];