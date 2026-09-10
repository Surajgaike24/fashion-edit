export default function Loading() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f6f3]">
      {/* Navbar Skeleton */}
      <header className="h-[76px] border-b border-black/5 bg-white">
        <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <div className="skeleton h-7 w-28 rounded-sm" />

          <div className="hidden items-center gap-8 md:flex">
            <div className="skeleton h-3 w-12 rounded-full" />
            <div className="skeleton h-3 w-12 rounded-full" />
            <div className="skeleton h-3 w-16 rounded-full" />
            <div className="skeleton h-3 w-14 rounded-full" />
          </div>

          <div className="flex items-center gap-3">
            <div className="skeleton h-9 w-9 rounded-full" />
            <div className="skeleton h-9 w-9 rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Skeleton */}
      <section className="bg-white px-5 pb-10 pt-6 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="relative min-h-[520px] overflow-hidden rounded-sm bg-[#e9e7e2] sm:min-h-[620px] lg:min-h-[700px]">
            <div className="absolute inset-0 skeleton" />

            <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-10 lg:left-14">
              <div className="skeleton mb-4 h-3 w-24 rounded-full" />
              <div className="skeleton h-10 w-[70%] max-w-xl rounded-sm sm:h-14" />
              <div className="skeleton mt-3 h-10 w-[50%] max-w-md rounded-sm sm:h-14" />

              <div className="skeleton mt-7 h-11 w-32 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="skeleton mb-8 h-8 w-48 rounded-sm" />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="skeleton aspect-[4/5] rounded-sm md:aspect-[4/3]" />
            <div className="skeleton aspect-[4/5] rounded-sm md:aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* Product Selection */}
      <section className="bg-[#f7f6f3] px-5 py-12 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <div className="skeleton mb-4 h-2.5 w-20 rounded-full" />
              <div className="skeleton h-9 w-56 rounded-sm" />
            </div>

            <div className="skeleton h-3 w-20 rounded-full" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="skeleton aspect-[3/4] rounded-sm" />

                <div className="mt-4">
                  <div className="skeleton h-2.5 w-16 rounded-full" />
                  <div className="skeleton mt-2 h-4 w-[80%] rounded-sm" />
                  <div className="skeleton mt-2 h-3 w-20 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop The Look */}
      <section className="bg-[#f5f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <div className="skeleton mb-4 h-2.5 w-24 rounded-full" />
            <div className="skeleton h-10 w-full max-w-xl rounded-sm" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="skeleton aspect-[4/5] rounded-sm md:aspect-[3/4]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Editor's Picks */}
      <section className="bg-white px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <div className="skeleton mb-4 h-2.5 w-32 rounded-full" />
            <div className="skeleton h-10 w-72 rounded-sm" />
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="skeleton aspect-[4/5] min-h-[500px] rounded-sm" />

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="skeleton aspect-[3/4] rounded-sm" />
                <div className="skeleton mt-4 h-3 w-20 rounded-full" />
                <div className="skeleton mt-2 h-4 w-[80%] rounded-sm" />
              </div>

              <div>
                <div className="skeleton aspect-[3/4] rounded-sm" />
                <div className="skeleton mt-4 h-3 w-20 rounded-full" />
                <div className="skeleton mt-2 h-4 w-[80%] rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fashion Inspiration */}
      <section className="bg-[#f5f3ef] px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10">
            <div className="skeleton mb-4 h-8 w-44 rounded-full" />
            <div className="skeleton h-10 w-full max-w-2xl rounded-sm" />
            <div className="skeleton mt-3 h-10 w-3/4 max-w-xl rounded-sm" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="skeleton min-h-[360px] rounded-sm sm:min-h-[420px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-black px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="skeleton-dark h-8 w-36 rounded-sm" />

          <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <div className="skeleton-dark h-2.5 w-20 rounded-full" />
                <div className="skeleton-dark mt-5 h-2.5 w-28 rounded-full" />
                <div className="skeleton-dark mt-3 h-2.5 w-24 rounded-full" />
                <div className="skeleton-dark mt-3 h-2.5 w-20 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}