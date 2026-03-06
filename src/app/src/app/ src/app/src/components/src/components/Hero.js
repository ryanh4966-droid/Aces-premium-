export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <h2 className="text-5xl font-extrabold mb-4 text-brand-white">
        Shop Smarter. Live Better.
      </h2>
      <p className="text-lg text-brand-white/70 max-w-xl mb-8">
        Aces Premium brings you cinematic shopping powered by intelligence,
        curated deals, and a premium experience built for speed and clarity.
      </p>
      <button className="bg-brand-red px-8 py-3 rounded-smooth text-lg font-semibold hover:bg-red-700 transition">
        Explore Deals
      </button>
    </section>
  );
}
