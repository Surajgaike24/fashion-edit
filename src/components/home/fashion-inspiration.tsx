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
      className="bg-[#f5f3ef] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="border-b border-black/10 pb-8 lg:grid lg:grid-cols-[1fr_360px] lg:items-end lg:gap-12 lg:pb-12">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
              <BookOpen size={11} strokeWidth={1.5} />

              <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-neutral-600">
                The Fashion Edit Journal
              </span>
            </div>

            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Inspiration
            </p>

            <h2 className="max-w-3xl text-3xl font-medium leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl">
              Style is easier
              <br />
              when you know
              <br />
              <span className="font-normal italic text-neutral-500">
                what works.
              </span>
            </h2>
          </div>

          <div className="mt-6 lg:mt-0">
            <p className="text-xs leading-6 text-neutral-500 sm:text-sm sm:leading-7">
              Styling ideas, practical wardrobe advice and simple directions
              for dressing with more intention.
            </p>

            <Link
              href="/search"
              className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
            >
              Explore the edit
              <ArrowUpRight size={13} strokeWidth={1.6} />
            </Link>
          </div>
        </div>

        {/* Stories */}
        <div className="grid gap-3 pt-6 sm:gap-4 sm:pt-8 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.number}
              href={story.href}
              className="group relative flex min-h-[350px] flex-col justify-between overflow-hidden bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:min-h-[410px] sm:p-7"
            >
              {/* Top */}
              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-[9px] font-bold tracking-[0.18em] text-black">
                    {story.number}
                  </span>

                  <span className="h-px w-5 bg-black/20" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                    {story.category}
                  </span>
                </div>

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white sm:h-10 sm:w-10">
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="mb-4 text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                  {story.tag}
                </p>

                <h3 className="max-w-sm text-2xl font-medium leading-[1.02] tracking-[-0.045em] text-black sm:text-3xl lg:text-[2.1rem]">
                  {story.title}
                </h3>

                <p className="mt-4 max-w-sm text-[11px] leading-5 text-neutral-500 sm:text-xs sm:leading-6">
                  {story.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 border-b border-black pb-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-black">
                  {story.action}

                  <ArrowUpRight size={11} strokeWidth={1.6} />
                </span>
              </div>

              {/* Background Number */}
              <span className="pointer-events-none absolute -bottom-7 -right-1 text-[125px] font-medium leading-none tracking-[-0.08em] text-neutral-100 transition-transform duration-700 group-hover:-translate-x-2 group-hover:-translate-y-2 sm:text-[150px]">
                {story.number}
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-6 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
          <div className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />

            <p className="max-w-xl text-[10px] leading-5 text-neutral-500 sm:text-xs sm:leading-6">
              Good style isn't about following everything. It's about knowing
              what works for you.
            </p>
          </div>

          <Link
            href="/collections"
            className="inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
          >
            Find your collection
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}