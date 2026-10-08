import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Legal
          </p>

          <h1 className="mt-4 text-4xl font-medium tracking-[-0.055em] sm:text-6xl">
            Terms of Use
          </h1>

          <p className="mt-5 text-xs text-neutral-500 sm:text-sm">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-12 space-y-10 border-t border-black/10 pt-10 text-sm leading-7 text-neutral-600 sm:mt-16">
          <section>
            <h2 className="text-lg font-medium text-black">
              1. About these terms
            </h2>

            <p className="mt-3">
              These Terms of Use describe the general conditions for using
              Fashion Edit. By accessing the website, you agree to use it
              responsibly and in accordance with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              2. Fashion discovery platform
            </h2>

            <p className="mt-3">
              Fashion Edit primarily provides curated fashion discovery,
              editorial content, product information and links to third-party
              retailers. Fashion Edit is not the retailer for products linked
              from external shopping websites unless explicitly stated
              otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              3. Product information
            </h2>

            <p className="mt-3">
              Product prices, availability, descriptions, images and other
              information may change. The retailer's website is the final
              source for current product availability, pricing, sizing,
              shipping, returns and purchase conditions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              4. Third-party links
            </h2>

            <p className="mt-3">
              Fashion Edit may contain links to external websites. Fashion
              Edit does not control those websites and is not responsible for
              their content, policies, transactions or services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              5. Intellectual property
            </h2>

            <p className="mt-3">
              The Fashion Edit brand, website design, original editorial
              content and other original website materials belong to their
              respective owners. Third-party product images, trademarks and
              brand materials remain the property of their respective owners.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              6. Website availability
            </h2>

            <p className="mt-3">
              Fashion Edit may update, modify, suspend or discontinue parts of
              the website as the platform develops.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              7. Changes to these terms
            </h2>

            <p className="mt-3">
              These terms may be updated from time to time. The latest version
              will be published on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}