"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/products/product-card";
import type { Product } from "@/lib/products";

const categories = [
  "All",
  "T-Shirts",
  "Shirts",
  "Tops",
  "Trousers",
  "Denim",
  "Footwear",
  "Bags",
];

const genders = ["All", "men", "women"];

const priceRanges = [
  { label: "All prices", value: "all" },
  { label: "Under ₹1,000", value: "under-1000" },
  { label: "₹1,000 – ₹2,000", value: "1000-2000" },
  { label: "Above ₹2,000", value: "above-2000" },
];

const collectionNames: Record<string, string> = {
  minimal: "Minimal Everyday",
  casual: "Casual Edit",
  sneakers: "Sneaker Edit",
  "smart-casual": "Smart Casual",
};

type SearchPageClientProps = {
  products: Product[];
};

export default function SearchPageClient({
  products,
}: SearchPageClientProps) {
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("All");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("all");
  const [collection, setCollection] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setCollection(params.get("collection") || "");
  }, []);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        product.gender,
        ...product.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !search || searchableText.includes(search);

      const matchesGender =
        gender === "All" || product.gender === gender;

      const matchesCategory =
        category === "All" || product.category === category;

      let matchesPrice = true;

      if (priceRange === "under-1000") {
        matchesPrice = product.price < 1000;
      }

      if (priceRange === "1000-2000") {
        matchesPrice =
          product.price >= 1000 &&
          product.price <= 2000;
      }

      if (priceRange === "above-2000") {
        matchesPrice = product.price > 2000;
      }

      const matchesCollection =
        !collection ||
        (collection === "minimal" &&
          product.tags.includes("minimal")) ||
        (collection === "casual" &&
          product.tags.includes("casual")) ||
        (collection === "sneakers" &&
          product.tags.includes("sneakers")) ||
        (collection === "smart-casual" &&
          product.tags.includes("smart-casual"));

      return (
        matchesSearch &&
        matchesGender &&
        matchesCategory &&
        matchesPrice &&
        matchesCollection
      );
    });
  }, [
    products,
    query,
    gender,
    category,
    priceRange,
    collection,
  ]);

  const clearFilters = () => {
    setQuery("");
    setGender("All");
    setCategory("All");
    setPriceRange("all");
    setCollection("");
  };

  const filtersActive =
    query !== "" ||
    gender !== "All" ||
    category !== "All" ||
    priceRange !== "all" ||
    collection !== "";

  const collectionTitle = collection
    ? collectionNames[collection] || "Collection"
    : "";

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Search Hero */}
      <section className="border-b border-black/10 bg-[#f4f2ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Fashion Edit
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {collection
              ? collectionTitle
              : "Find your next piece."}
          </h1>

          {/* Search Input */}
          <div className="relative mt-10 max-w-3xl">
            <Search
              size={20}
              strokeWidth={1.6}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-neutral-400"
            />

            <input
              type="search"
              value={query}
              onChange={(event) =>
                setQuery(event.target.value)
              }
              placeholder="Search products, brands, categories..."
              className="w-full border-b border-black/30 bg-transparent py-5 pl-9 pr-10 text-base outline-none placeholder:text-neutral-400 focus:border-black"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center justify-center"
              >
                <X size={18} strokeWidth={1.6} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-4 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
              {results.length}{" "}
              {results.length === 1 ? "piece" : "pieces"}
            </p>

            <button
              type="button"
              onClick={() =>
                setFiltersOpen((value) => !value)
              }
              className="flex items-center gap-2 rounded-full border border-black/10 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition hover:border-black"
            >
              <SlidersHorizontal
                size={14}
                strokeWidth={1.6}
              />

              Filters
            </button>
          </div>

          {filtersOpen && (
            <div className="mt-5 grid gap-3 border-t border-black/10 pt-5 sm:grid-cols-3">
              <select
                value={gender}
                onChange={(event) =>
                  setGender(event.target.value)
                }
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] outline-none focus:border-black"
              >
                {genders.map((item) => (
                  <option key={item} value={item}>
                    {item === "All"
                      ? "Gender: All"
                      : item}
                  </option>
                ))}
              </select>

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] outline-none focus:border-black"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "All"
                      ? "Category: All"
                      : item}
                  </option>
                ))}
              </select>

              <select
                value={priceRange}
                onChange={(event) =>
                  setPriceRange(event.target.value)
                }
                className="rounded-full border border-black/10 bg-white px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] outline-none focus:border-black"
              >
                {priceRanges.map((item) => (
                  <option
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Active Filters */}
      {filtersActive && (
        <div className="border-b border-black/10">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center gap-2 px-5 py-4 sm:px-8 lg:px-12">
            {query && (
              <span className="rounded-full bg-black px-4 py-2 text-[9px] font-medium uppercase tracking-[0.15em] text-white">
                Search: {query}
              </span>
            )}

            {gender !== "All" && (
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.15em]">
                {gender}
              </span>
            )}

            {category !== "All" && (
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.15em]">
                {category}
              </span>
            )}

            {priceRange !== "all" && (
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.15em]">
                {
                  priceRanges.find(
                    (item) => item.value === priceRange
                  )?.label
                }
              </span>
            )}

            {collection && (
              <span className="rounded-full bg-neutral-100 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.15em]">
                {collectionTitle}
              </span>
            )}

            <button
              type="button"
              onClick={clearFilters}
              className="ml-auto text-[9px] font-semibold uppercase tracking-[0.15em] underline underline-offset-4"
            >
              Clear all
            </button>
          </div>
        </div>
      )}

      {/* Results */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            {query
              ? `Results for "${query}"`
              : collection
                ? "Curated collection"
                : "The edit"}
          </p>

          <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
            Discover your style.
          </h2>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4 lg:gap-x-6">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                brand={product.brand}
                price={`₹${product.price.toLocaleString(
                  "en-IN"
                )}`}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
            <p className="text-xl font-medium tracking-[-0.02em]">
              Nothing found.
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">
              Try another search term or remove some
              filters to discover more pieces.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-7 rounded-full bg-black px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              Reset search
            </button>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}