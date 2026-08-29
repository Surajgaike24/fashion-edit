import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-[#f4f2ee]">
      {/* Background detail */}
      <div className="pointer-events-none absolute right-[-120px] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-black/5 lg:block" />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
        {/* Copy */}
        <div className="max-w-2xl">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Fashion Edit
            </p>
          </div>

          <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-black sm:text-6xl lg:text-8xl">
            Find the pieces
            <br />
            <span className="text-neutral-400">worth wearing.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
            We cut through the noise and curate fashion worth discovering —
            from everyday essentials to pieces that define your style.
          </p>

          {/* Trust / positioning */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            <span>Curated styles</span>
            <span>Men & Women</span>
            <span>Independent discovery</span>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/search"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-black px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-neutral-800"
            >
              Explore the edit

              <ArrowUpRight
                size={15}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            <Link
              href="/collections"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white/60 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition hover:border-black hover:bg-white"
            >
              Browse collections
            </Link>
          </div>
        </div>

        {/* Visual / editorial panel */}
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200">
            {/* Editorial placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-300 via-neutral-100 to-neutral-400" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-neutral-500">
                The Edit
              </p>

              <p className="mt-4 text-7xl font-light tracking-[-0.08em] text-neutral-800 sm:text-8xl">
                FE
              </p>

              <p className="mt-4 max-w-[180px] text-[9px] uppercase leading-5 tracking-[0.18em] text-neutral-500">
                Less noise.
                <br />
                Better choices.
              </p>
            </div>

            {/* Floating label */}
            <div className="absolute bottom-5 left-5 bg-white/95 px-4 py-3 backdrop-blur-sm">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                Curated for you
              </p>

              <p className="mt-1 text-[9px] text-neutral-500">
                Start with what fits your style.
              </p>
            </div>
          </div>

          {/* Vertical editorial text */}
          <p className="absolute -right-7 top-1/2 hidden -translate-y-1/2 rotate-90 text-[8px] font-semibold uppercase tracking-[0.35em] text-neutral-400 lg:block">
            Discover • Refine • Wear
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#featured-categories"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[8px] font-semibold uppercase tracking-[0.25em] text-neutral-400 transition hover:text-black sm:flex"
      >
        Explore

        <ArrowDown size={13} strokeWidth={1.5} />
      </Link>
    </section>
  );
}