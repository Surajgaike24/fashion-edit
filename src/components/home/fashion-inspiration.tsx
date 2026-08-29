import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

const stories = [
  {
    number: "01",
    category: "Style Guide",
    title: "Build a wardrobe that actually works.",
    description:
      "A simpler way to choose versatile pieces you'll keep reaching for.",
    href: "/search?collection=minimal",
    action: "Explore the edit",
  },
  {
    number: "02",
    category: "Men's Style",
    title: "Start with the essentials.",
    description:
      "The everyday pieces that make getting dressed easier without making it boring.",
    href: "/men",
    action: "Explore men's style",
  },
  {
    number: "03",
    category: "Women's Style",
    title: "Make simple styling feel intentional.",
    description:
      "Small choices can change how an entire outfit comes together.",
    href: "/women",
    action: "Explore women's style",
  },
];

export default function FashionInspiration() {
  return (
    <section
      id="inspiration"
      className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-7 sm:flex-row sm:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-neutral-50 px-3 py-2">
              <BookOpen size={12} strokeWidth={1.5} />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                The Fashion Edit Journal
              </span>
            </div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Inspiration
            </p>

            <h2 className="max-w-2xl text-3xl font-medium tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
              More than products.
              <br />
              <span className="font-normal italic">It's about the style.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500">
              Discover ideas, styling directions and practical ways to make
              better choices for your wardrobe.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black"
          >
            Explore the edit
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        {/* Stories */}
        <div className="border-t border-black/10">
          {stories.map((story) => (
            <Link
              key={story.number}
              href={story.href}
              className="group grid gap-5 border-b border-black/10 py-8 transition-colors hover:bg-neutral-50 sm:grid-cols-[70px_180px_1fr_auto] sm:items-center sm:gap-8 sm:px-4 lg:py-10"
            >
              {/* Number */}
              <span className="text-[10px] font-medium tracking-[0.2em] text-neutral-400">
                {story.number}
              </span>

              {/* Category */}
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                {story.category}
              </span>

              {/* Story */}
              <div>
                <h3 className="max-w-2xl text-xl font-medium tracking-[-0.02em] text-black transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                  {story.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
                  {story.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400 transition-colors group-hover:text-black">
                  {story.action}
                  <ArrowUpRight size={12} strokeWidth={1.5} />
                </span>
              </div>

              {/* Arrow */}
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                <ArrowUpRight size={16} strokeWidth={1.6} />
              </span>
            </Link>
          ))}
        </div>

        {/* Closing Thought */}
        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-6 text-neutral-400">
            Good style isn't about following everything. It's about knowing
            what works for you.
          </p>

          <Link
            href="/collections"
            className="inline-flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 transition hover:text-black"
          >
            Find your collection
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}