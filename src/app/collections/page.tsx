import Link from "next/link";
import Navbar from "@/components/layout/navbar";

const collections = [
  {
    number: "01",
    name: "Minimal Everyday",
    description:
      "Clean essentials and effortless pieces for everyday dressing.",
    href: "/search?collection=minimal",
  },
  {
    number: "02",
    name: "Casual Edit",
    description:
      "Relaxed silhouettes and easy pieces built for everyday style.",
    href: "/search?collection=casual",
  },
  {
    number: "03",
    name: "Sneaker Edit",
    description:
      "Modern footwear selected to complete your everyday rotation.",
    href: "/search?collection=sneakers",
  },
  {
    number: "04",
    name: "Smart Casual",
    description:
      "Polished essentials that sit perfectly between casual and refined.",
    href: "/search?collection=smart-casual",
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-black/10 bg-[#f4f2ee]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Fashion Edit / Collections
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-8xl">
            Curated
            <br />
            <span className="font-normal italic">collections.</span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-neutral-500">
            Discover carefully selected edits built around different moods,
            styles and moments. Less noise. Better choices.
          </p>
        </div>
      </section>

      {/* Collections */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-6">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </p>

            <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">
              The Edit
            </h2>
          </div>

          <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 sm:block">
            {collections.length} collections
          </span>
        </div>

        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
          {collections.map((collection) => (
            <Link
              key={collection.number}
              href={collection.href}
              className="group min-h-[280px] bg-[#f7f6f3] p-8 transition-colors duration-300 hover:bg-black hover:text-white sm:min-h-[340px] sm:p-10 lg:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400 transition-colors group-hover:text-neutral-500">
                  {collection.number}
                </span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </div>

              <div className="mt-20 sm:mt-28">
                <h3 className="text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
                  {collection.name}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500 transition-colors group-hover:text-neutral-400">
                  {collection.description}
                </p>

                <span className="mt-8 inline-block text-[9px] font-semibold uppercase tracking-[0.2em]">
                  Explore collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bottom statement */}
      <section className="border-t border-black/10">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <p className="max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            Style is not about having more.
            <span className="font-normal text-neutral-400">
              {" "}
              It's about finding what fits.
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}