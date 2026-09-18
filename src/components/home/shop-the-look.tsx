import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const looks = [
  {
    number: "01",
    label: "SIMPLE / CLEAN / TIMELESS",
    title: "The Everyday Edit",
    description:
      "Effortless pieces for everyday life, selected to make getting dressed easier.",
    tags: ["Minimal", "Everyday", "Easy"],
    href: "/search?collection=minimal",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    label: "RELAXED / COMFORTABLE / VERSATILE",
    title: "The Casual Edit",
    description:
      "Relaxed pieces made for effortless days, weekends and everything in between.",
    tags: ["Casual", "Relaxed", "Versatile"],
    href: "/search?collection=casual",
    image:
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    label: "POLISHED / MODERN / CONFIDENT",
    title: "The Smart Casual Edit",
    description:
      "A balance between polished and effortless for days that need both.",
    tags: ["Smart", "Clean", "Versatile"],
    href: "/search?collection=smart-casual",
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=85",
  },
];

export default function ShopTheLook() {
  return (
    <section className="bg-[#f7f5f1] px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:grid lg:grid-cols-[1fr_320px] lg:items-end lg:gap-10">

          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                Style made easier
              </p>
            </div>

            <h2 className="max-w-3xl text-3xl font-medium leading-[0.98] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl">
              Don't just shop a piece.
              <br />
              <span className="font-normal italic">
                Find the look.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-xs leading-6 text-neutral-500 sm:text-sm sm:leading-7">
              Discover combinations that work together, so you can spend less
              time wondering what goes with what.
            </p>
          </div>

          {/* Desktop Header Link */}
          <div className="mt-6 hidden border-l border-black/15 pl-6 lg:mt-0 lg:block">
            <p className="text-[9px] font-semibold uppercase leading-6 tracking-[0.24em] text-neutral-500">
              Curated outfits.
              <br />
              Real inspiration.
              <br />
              A more personal style.
            </p>

            <Link
              href="/search"
              className="mt-6 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
            >
              Explore all looks
              <ArrowUpRight size={13} strokeWidth={1.7} />
            </Link>
          </div>
        </div>

        {/* Looks */}
        <div className="grid gap-4 md:grid-cols-3">
          {looks.map((look) => (
            <Link
              key={look.number}
              href={look.href}
              className="group relative overflow-hidden bg-black"
            >
              <div className="relative aspect-[0.78] overflow-hidden sm:aspect-[0.82]">

                {/* Editorial Image */}
                <img
                  src={look.image}
                  alt={look.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.04]"
                />

                {/* Image Treatment */}
                <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/10" />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Number */}
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6">
                  <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/80">
                    Look {look.number}
                  </p>

                  <div className="mt-2 h-px w-6 bg-white/60" />
                </div>

                {/* Arrow */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition duration-300 group-hover:scale-105 sm:right-5 sm:top-5 sm:h-11 sm:w-11">
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </div>

                {/* Label */}
                <div className="absolute left-4 top-20 max-w-[140px] sm:left-6 sm:top-24">
                  <p className="text-[8px] font-semibold uppercase leading-4 tracking-[0.2em] text-white/75">
                    {look.label}
                  </p>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <h3 className="max-w-[280px] text-2xl font-normal leading-[1] tracking-[-0.04em] text-white sm:text-3xl">
                    {look.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-[10px] leading-5 text-white/75 sm:text-xs sm:leading-6">
                    {look.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {look.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/35 bg-black/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[8px] font-bold uppercase tracking-[0.17em] text-black transition duration-300 group-hover:bg-neutral-100">
                      Explore this look

                      <ArrowUpRight
                        size={12}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-7 flex flex-col gap-4 border-t border-black/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-black" />

            <p className="text-[8px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Good style works harder.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-50"
          >
            View all looks
            <ArrowUpRight size={13} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  );
}