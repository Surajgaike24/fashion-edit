import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-5 text-xs text-neutral-500 sm:text-sm">
            Last updated: September 2026
          </p>
        </div>

        <div className="mt-12 space-y-10 border-t border-black/10 pt-10 text-sm leading-7 text-neutral-600 sm:mt-16">
          <section>
            <h2 className="text-lg font-medium text-black">
              1. About Fashion Edit
            </h2>

            <p className="mt-3">
              Fashion Edit is a fashion discovery platform that helps users
              discover curated fashion products, styling ideas, collections
              and related shopping opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              2. Information we collect
            </h2>

            <p className="mt-3">
              Depending on how you use the website, Fashion Edit may receive
              information such as information you voluntarily provide through
              forms, preferences saved locally in your browser, and basic
              technical information required for the website to operate.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              3. How information is used
            </h2>

            <p className="mt-3">
              Information may be used to operate and improve Fashion Edit,
              provide requested features, understand how the website is used,
              maintain website functionality and communicate with users when
              they voluntarily provide contact information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              4. Third-party websites
            </h2>

            <p className="mt-3">
              Fashion Edit may link to third-party retailers and other
              websites. Once you leave Fashion Edit, the privacy practices of
              the third-party website apply. We recommend reviewing the
              privacy policy of each external website you visit.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              5. Cookies and local storage
            </h2>

            <p className="mt-3">
              Fashion Edit may use browser storage and similar technologies to
              support features such as saved products and website preferences.
              Your browser settings can be used to control or clear locally
              stored information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              6. Data security
            </h2>

            <p className="mt-3">
              We take reasonable steps to protect information used by the
              website. However, no internet transmission or electronic storage
              system can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              7. Changes to this policy
            </h2>

            <p className="mt-3">
              This Privacy Policy may be updated as Fashion Edit develops.
              Updated versions will be published on this page with a revised
              date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-black">
              8. Contact
            </h2>

            <p className="mt-3">
              For privacy-related questions, please contact Fashion Edit
              through the official communication channels provided on the
              website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}