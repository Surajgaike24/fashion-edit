export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-gray-500">
        Welcome to
      </p>

      <h1 className="text-6xl font-black tracking-tight text-black md:text-8xl">
        FashionEdit
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Discover curated fashion for men and women. Premium outfits,
        accessories, shoes, watches, and timeless style inspiration.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-full bg-black px-8 py-3 text-white hover:bg-neutral-800">
          Explore Collection
        </button>

        <button className="rounded-full border border-black px-8 py-3 hover:bg-black hover:text-white">
          Latest Trends
        </button>
      </div>
    </section>
  );
}