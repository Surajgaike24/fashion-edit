import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

const categories = [
  {
    title: "Men",
    eyebrow: "The Men's Edit",
    subtitle:
      "Everyday essentials, relaxed layers and versatile pieces selected for a sharper wardrobe.",
    href: "/men",
    label: "Shop Men's Edit",
    signals: ["Essentials", "Everyday", "Versatile"],

    // Editorial image — NOT from Supabase
   image:
  "https://image.hm.com/ffc/share/assets/2023/3088/Smart-look-13--1-v2.png?imwidth=1536",
  },
  {
    title: "Women",
    eyebrow: "The Women's Edit",
    subtitle:
      "Contemporary pieces, easy silhouettes and versatile additions selected for effortless style.",
    href: "/women",
    label: "Shop Women's Edit",
    signals: ["Contemporary", "Everyday", "Versatile"],

    // Editorial image — NOT from Supabase
    image:
      "https://dam.elcorteingles.es/producto/www-8431283577910-01.jpg",
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
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
                Shop by direction
              </p>
            </div>

            <h2 className="text-3xl font-medium tracking-[-0.045em] text-black sm:text-4xl lg:text-5xl">
              Find your
              <br />
              <span className="font-normal italic text-neutral-400">
                direction.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
              Start with the way you dress. Explore a focused edit instead of
              scrolling through everything.
            </p>
          </div>

          <Link
            href="/search"
            className="hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black sm:inline-flex"
          >
            View all fashion
            <ArrowUpRight size={14} strokeWidth={1.6} />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative min-h-[560px] overflow-hidden rounded-sm bg-neutral-100 sm:min-h-[650px]"
            >
              {/* Editorial Image */}
              <img
                src={category.image}
                alt={`${category.title} fashion editorial`}
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-[1200ms] ease-out group-hover:scale-[1.035]"
              />

              {/* Image treatment */}
              <div className="absolute inset-0 bg-black/5 transition duration-700 group-hover:bg-black/10" />

              {/* Bottom readability */}
              <div className="absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black/80 via-black/35 to-transparent" />

              {/* Top utility */}
              <div className="absolute left-5 right-5 top-5 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-2 shadow-sm backdrop-blur-md">
                  <Sparkles size={11} strokeWidth={1.5} />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black">
                    Curated edit
                  </span>
                </div>

                <span className="rounded-full bg-black/60 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  {category.title}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-9 lg:p-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/65">
                  {category.eyebrow}
                </p>

                <div className="mt-2 flex items-end justify-between gap-5">
                  <h3 className="text-5xl font-medium tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                    {category.title}
                  </h3>

                  <span className="mb-2 hidden text-[9px] font-medium uppercase tracking-[0.16em] text-white/55 sm:block">
                    Explore
                  </span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-6 text-white/80">
                  {category.subtitle}
                </p>

                {/* Style signals */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.signals.map((signal) => (
                    <span
                      key={signal}
                      className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-md"
                    >
                      {signal}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-5">
                  <span className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition duration-300 group-hover:bg-neutral-100">
                    {category.label}

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>

                  <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/45">
                    Fashion Edit
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom reassurance */}
        <div className="mt-8 flex flex-col gap-3 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-400">
              Curated fashion. Less noise. Better choices.
            </p>
          </div>

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