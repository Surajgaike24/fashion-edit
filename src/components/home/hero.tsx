import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f4f2ee]">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-20">
        
        {/* Mobile / Tablet Hero */}
        <div className="lg:hidden">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-black" />

            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Fashion discovery
            </p>
          </div>

          <h1 className="max-w-xl text-[42px] font-medium leading-[0.98] tracking-[-0.06em] text-black sm:text-6xl">
            Discover fashion
            <br />
            <span className="text-neutral-400">
              worth wearing.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-sm leading-6 text-neutral-600 sm:text-base sm:leading-7">
            Curated fashion, style inspiration and pieces worth discovering —
            all in one place.
          </p>

          {/* Actions */}
          <div className="mt-7 grid grid-cols-2 gap-3">
            <Link
              href="/search"
              className="group flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-black px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
            >
              Shop fashion

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/collections"
              className="flex min-h-[52px] items-center justify-center rounded-full border border-black/15 bg-white/70 px-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black transition hover:bg-white"
            >
              Collections
            </Link>
          </div>
        </div>

        {/* Desktop Hero */}
        <div className="hidden items-center gap-12 lg:grid lg:grid-cols-[1fr_0.85fr]">

          {/* Copy */}
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-black" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Fashion discovery
              </p>
            </div>

            <h1 className="max-w-3xl text-7xl font-medium leading-[0.98] tracking-[-0.065em] text-black xl:text-8xl">
              Discover fashion
              <br />
              <span className="text-neutral-400">
                worth wearing.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 xl:text-lg">
              Curated fashion, style inspiration and pieces worth discovering —
              all in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
              <span>Curated styles</span>
              <span>Men & Women</span>
              <span>Easy discovery</span>
            </div>

            {/* Desktop Actions */}
            <div className="mt-10 flex gap-3">
              <Link
                href="/search"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
              >
                Explore fashion

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/collections"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white"
              >
                Browse collections
              </Link>
            </div>
          </div>

          {/* Editorial Visual */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">

              <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-400" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                  The Fashion Edit
                </p>

                <p className="mt-4 text-8xl font-light tracking-[-0.08em] text-neutral-800">
                  FE
                </p>

                <p className="mt-4 max-w-[190px] text-[9px] uppercase leading-5 tracking-[0.18em] text-neutral-500">
                  Discover.
                  <br />
                  Refine.
                  <br />
                  Wear.
                </p>
              </div>

              {/* Floating Label */}
              <div className="absolute bottom-5 left-5 bg-white/95 px-4 py-3 backdrop-blur-sm">
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                  Curated for you
                </p>

                <p className="mt-1 text-[9px] text-neutral-500">
                  Start with your style.
                </p>
              </div>
            </div>

            {/* Editorial Text */}
            <p className="absolute -right-7 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] font-semibold uppercase tracking-[0.35em] text-neutral-400 xl:block">
              Discover • Refine • Wear
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
