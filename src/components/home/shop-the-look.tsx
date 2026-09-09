import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const looks = [
  {
    number: "01",
    label: "SIMPLE / CLEAN / TIMELESS",
    title: "The Everyday Edit",
    description:
      "Effortless pieces for everyday life. A considered combination that makes getting dressed easier.",
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
    <section className="bg-[#f7f5f1] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">

        {/* Header */}
        <div className="mb-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
          <div>
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-black" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-neutral-500">
                Style made easier
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-black sm:text-5xl lg:text-6xl">
              Don't just shop a piece.
              <br />
              <span className="font-normal italic">
                Find the look.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-neutral-500 sm:text-base">
              We group pieces by the way they work together, so you can spend
              less time wondering what goes with what.
            </p>
          </div>

          {/* Header Side */}
          <div className="border-l border-black/20 pl-7">
            <p className="text-[9px] font-semibold uppercase leading-6 tracking-[0.28em] text-neutral-500">
              Curated outfits.
              <br />
              Real inspiration.
              <br />
              A more you.
            </p>

            <Link
              href="/search"
              className="mt-7 inline-flex items-center gap-3 border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-50"
            >
              Explore all looks
              <ArrowUpRight size={14} strokeWidth={1.7} />
            </Link>
          </div>
        </div>

        {/* Looks */}
        <div className="grid gap-5 md:grid-cols-3">
          {looks.map((look) => (
            <Link
              key={look.number}
              href={look.href}
              className="group relative overflow-hidden bg-black"
            >
              {/* Image */}
              <div className="relative aspect-[0.78] overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.045]"
                />

                {/* Image contrast */}
                <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/10" />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                {/* Top number */}
                <div className="absolute left-6 top-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/80">
                    Look {look.number}
                  </p>

                  <div className="mt-3 h-px w-7 bg-white/70" />
                </div>

                {/* Arrow */}
                <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition duration-300 group-hover:scale-105">
                  <ArrowUpRight size={19} strokeWidth={1.6} />
                </div>

                {/* Editorial label */}
                <div className="absolute left-6 top-28 max-w-[150px]">
                  <p className="text-[9px] font-semibold uppercase leading-5 tracking-[0.23em] text-white/80">
                    {look.label}
                  </p>
                </div>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="max-w-[300px] text-3xl font-normal leading-[0.98] tracking-[-0.045em] text-white sm:text-[2.15rem]">
                    {look.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-xs leading-6 text-white/80 sm:text-sm">
                    {look.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {look.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/45 bg-black/10 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-3 rounded-full border border-white bg-transparent px-5 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white transition duration-300 group-hover:bg-white group-hover:text-black">
                      Explore this look

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Editorial Line */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-black/15 pt-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-black" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-neutral-500">
              Good style works harder.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-black transition-opacity hover:opacity-50"
          >
            View all looks
            <ArrowUpRight size={14} strokeWidth={1.7} />
          </Link>
        </div>
      </div>
    </section>
  );
}