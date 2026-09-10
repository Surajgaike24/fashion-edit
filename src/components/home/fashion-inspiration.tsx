import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";

const stories = [
  {
    number: "01",
    category: "Style Guide",
    title: "Build a wardrobe that actually works.",
    description:
      "A simpler approach to choosing versatile pieces you'll keep reaching for.",
    href: "/search?collection=minimal",
    action: "Explore the edit",
    tag: "EVERYDAY STYLE",
  },
  {
    number: "02",
    category: "Men's Style",
    title: "Start with the essentials.",
    description:
      "The everyday pieces that make getting dressed easier without making it boring.",
    href: "/men",
    action: "Explore men's style",
    tag: "MEN'S EDIT",
  },
  {
    number: "03",
    category: "Women's Style",
    title: "Make simple styling feel intentional.",
    description:
      "Small choices can change how an entire outfit comes together.",
    href: "/women",
    action: "Explore women's style",
    tag: "WOMEN'S EDIT",
  },
];

export default function FashionInspiration() {
  return (
    <section
      id="inspiration"
      className="bg-[#f5f3ef] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2.5">
              <BookOpen size={12} strokeWidth={1.5} />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                The Fashion Edit Journal
              </span>
            </div>

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Inspiration
            </p>

            <h2 className="max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              Style is easier
              <br />
              when you know
              <br />
              <span className="font-normal italic text-neutral-500">
                what works.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-sm leading-7 text-neutral-500">
              Discover styling ideas, practical wardrobe advice and simple
              directions for dressing with more intention.
            </p>

            <Link
              href="/search"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
            >
              Explore the edit
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Stories */}
        <div className="grid gap-4 pt-8 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.number}
              href={story.href}
              className="group relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[2px] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:min-h-[450px] sm:p-8"
            >
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-black">
                    {story.number}
                  </span>

                  <span className="h-px w-6 bg-black/20" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
                    {story.category}
                  </span>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {/* Main Content */}
              <div>
                <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-300">
                  {story.tag}
                </p>

                <h3 className="max-w-sm text-3xl font-medium leading-[1.02] tracking-[-0.04em] text-black sm:text-4xl">
                  {story.title}
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-500">
                  {story.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 border-b border-black pb-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-black">
                  {story.action}
                  <ArrowUpRight size={12} strokeWidth={1.6} />
                </div>
              </div>

              {/* Decorative number */}
              <span className="pointer-events-none absolute -bottom-8 -right-2 text-[150px] font-medium leading-none tracking-[-0.08em] text-neutral-100 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2">
                {story.number}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-5 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

            <p className="max-w-xl text-xs leading-6 text-neutral-500">
              Good style isn't about following everything. It's about knowing
              what works for you.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex shrink-0 items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
          >
            Find your collection
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}