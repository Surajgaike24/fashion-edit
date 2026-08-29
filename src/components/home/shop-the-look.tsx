import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const looks = [
  {
    number: "01",
    title: "The Everyday Edit",
    description:
      "A simple combination of pieces that makes getting dressed easier.",
    tags: ["Minimal", "Everyday", "Easy"],
    href: "/search?collection=minimal",
    background:
      "linear-gradient(135deg, #e4e1dc 0%, #c7c3bc 50%, #99958e 100%)",
  },
  {
    number: "02",
    title: "The Casual Edit",
    description:
      "Relaxed pieces designed to work together without overthinking the outfit.",
    tags: ["Casual", "Relaxed", "Versatile"],
    href: "/search?collection=casual",
    background:
      "linear-gradient(135deg, #ddd9d3 0%, #bdb7ae 50%, #89827a 100%)",
  },
  {
    number: "03",
    title: "The Smart Casual Edit",
    description:
      "A balance between polished and effortless for days that need both.",
    tags: ["Smart", "Clean", "Versatile"],
    href: "/search?collection=smart-casual",
    background:
      "linear-gradient(135deg, #d9d9d6 0%, #b4b3af 50%, #777673 100%)",
  },
];

export default function ShopTheLook() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Style made easier
          </p>

          <h2 className="text-3xl font-medium tracking-[-0.04em] text-black sm:text-4xl lg:text-5xl">
            Don't just shop a piece.
            <br />
            Find the look.
          </h2>

          <p className="mt-5 text-sm leading-7 text-neutral-500">
            We group pieces by the way they work together, so you can spend
            less time wondering what goes with what.
          </p>
        </div>

        {/* Looks */}
        <div className="grid gap-4 md:grid-cols-3">
          {looks.map((look) => (
            <Link
              key={look.number}
              href={look.href}
              className="group relative min-h-[430px] overflow-hidden"
            >
              {/* Background */}
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                style={{ background: look.background }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Number */}
              <div className="absolute left-6 top-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                  Look {look.number}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                  {look.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  {look.description}
                </p>

                {/* Style signals */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {look.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/25 bg-white/10 px-3 py-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                  Explore this look

                  <ArrowUpRight
                    size={13}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Psychology line */}
        <div className="mt-10 border-t border-black/10 pt-6">
          <p className="max-w-2xl text-xs leading-6 text-neutral-400">
            The goal isn't to own more. It's to find pieces that work harder
            with what you already wear.
          </p>
        </div>
      </div>
    </section>
  );
}