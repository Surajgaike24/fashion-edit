import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Men",
    eyebrow: "The Men's Edit",
    subtitle:
      "Build a sharper everyday wardrobe with relaxed essentials, clean layers and versatile pieces.",
    href: "/men",
    label: "Explore Men's Edit",
    background:
      "linear-gradient(135deg, #d8d5d0 0%, #aaa7a1 45%, #77746f 100%)",
    signals: ["Essentials", "Minimal", "Everyday"],
    reason: "For a clean, effortless wardrobe",
  },
  {
    title: "Women",
    eyebrow: "The Women's Edit",
    subtitle:
      "Discover contemporary pieces, easy silhouettes and versatile additions that work beyond one outfit.",
    href: "/women",
    label: "Explore Women's Edit",
    background:
      "linear-gradient(135deg, #e5dfd9 0%, #c9bdb3 45%, #91847b 100%)",
    signals: ["Contemporary", "Minimal", "Versatile"],
    reason: "For effortless, considered style",
  },
];

export default function FeaturedCategories() {
  return (
    <section
      id="featured-categories"
      className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-black" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Start here
            </p>
          </div>

          <h2 className="text-3xl font-medium tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">
            Find what feels
            <br />
            <span className="italic font-normal text-neutral-400">
              like you.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Don't start with thousands of products. Start with your style
            direction — we'll help you narrow it down.
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative min-h-[540px] overflow-hidden sm:min-h-[620px]"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ background: category.background }}
              />

              {/* Texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.35),transparent_30%)]" />

              {/* Readability gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Top signal */}
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 backdrop-blur-sm sm:left-8 sm:top-8">
                <Sparkles size={11} strokeWidth={1.5} />

                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black">
                  Curated direction
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/65">
                  {category.eyebrow}
                </p>

                <h3 className="mt-3 text-5xl font-medium tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                  {category.title}
                </h3>

                {/* Psychological positioning */}
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70">
                  {category.reason}
                </p>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/80">
                  {category.subtitle}
                </p>

                {/* Style signals */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.signals.map((signal) => (
                    <span
                      key={signal}
                      className="border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="inline-flex items-center gap-3 border-b border-white/60 pb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                    {category.label}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  <span className="hidden text-[8px] font-medium uppercase tracking-[0.18em] text-white/50 sm:block">
                    Start exploring
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Reassurance */}
        <div className="mt-8 flex flex-col gap-2 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Less scrolling. More relevant choices.
          </p>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black"
          >
            Browse everything
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}