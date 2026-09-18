import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Men",
    subtitle: "Essentials, casualwear & everyday style.",
    href: "/men",
    label: "Shop Men",
    image:
      "https://image.hm.com/ffc/share/assets/2023/3088/Smart-look-13--1-v2.png?imwidth=1536",
  },
  {
    title: "Women",
    subtitle: "Contemporary pieces & effortless style.",
    href: "/women",
    label: "Shop Women",
    image:
      "https://dam.elcorteingles.es/producto/www-8431283577910-01.jpg",
  },
];

export default function FeaturedCategories() {
  return (
    <section
      id="featured-categories"
      className="bg-white px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section Header */}
        <div className="mb-7 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
              Shop by category
            </p>

            <h2 className="text-3xl font-medium leading-none tracking-[-0.05em] text-black sm:text-4xl lg:text-5xl">
              Start with your
              <br />
              <span className="font-normal italic text-neutral-400">
                style.
              </span>
            </h2>
          </div>

          <Link
            href="/search"
            className="hidden items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-neutral-500 transition hover:text-black sm:inline-flex"
          >
            View all
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </Link>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-sm bg-neutral-100"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden sm:aspect-[4/5] lg:aspect-[5/6]">
                <img
                  src={category.image}
                  alt={`${category.title} fashion`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Top Label */}
                <div className="absolute left-3 top-3 sm:left-5 sm:top-5">
                  <span className="rounded-full bg-white/95 px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.16em] text-black shadow-sm">
                    Fashion Edit
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-black shadow-sm transition duration-300 group-hover:scale-105 sm:right-5 sm:top-5 sm:h-10 sm:w-10">
                  <ArrowUpRight size={15} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-6 lg:p-7">
                  <p className="mb-2 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/60">
                    Shop the edit
                  </p>

                  <h3 className="text-3xl font-medium tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-[10px] leading-4 text-white/75 sm:text-xs sm:leading-5">
                    {category.subtitle}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[8px] font-bold uppercase tracking-[0.16em] text-black sm:mt-5 sm:px-5 sm:py-3">
                    {category.label}
                    <ArrowUpRight size={12} strokeWidth={1.7} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 sm:hidden">
          <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
            Curated fashion for everyone
          </p>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.16em] text-black"
          >
            View all
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}