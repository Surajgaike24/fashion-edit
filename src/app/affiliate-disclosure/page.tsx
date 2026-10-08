import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-[#f7f6f3] text-black">
      <div className="mx-auto max-w-[900px] px-5 py-10 sm:px-8 sm:py-16 lg:px-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500 transition hover:text-black"
        >
          <ArrowLeft size={13} strokeWidth={1.6} />
          Back to Fashion Edit
        </Link>

        <div className="mt-14 sm:mt-20">
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-neutral-400">
            Transparency
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-6xl">
            Affiliate Disclosure
          </h1>

          <p className="mt-5 text-xs text-neutral-500 sm:text-sm">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-12 space-y-10 border-t border-black/10 pt-10 text-sm leading-7 text-neutral-600 sm:mt-16">
          <section>
            <h2 className="text-lg font-medium text-black">
              Our affiliate relationship
            </h2>

            <p className="mt-3">
              Some links on Fashion Edit are affiliate links. This means that
              Fashion Edit may receive a commission when a user purchases a
              product after following an eligible affiliate link.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              No additional cost to you
            </h2>

            <p className="mt-3">
              When an affiliate link is used, the commission does not normally
              add an additional cost to the shopper. The final price and
              purchase terms are determined by the retailer.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              Product selection
            </h2>

            <p className="mt-3">
              Fashion Edit curates products based on the site's editorial and
              fashion-discovery approach. Affiliate relationships do not mean
              that every product or brand on the platform is an endorsement or
              guarantee of quality.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              Prices and availability
            </h2>

            <p className="mt-3">
              Product prices, discounts, stock, specifications and availability
              can change. Always confirm the current information on the
              retailer's website before purchasing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              Questions
            </h2>

            <p className="mt-3">
              If you have questions about Fashion Edit's affiliate
              relationships, please use the official communication channels
              available on the website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}