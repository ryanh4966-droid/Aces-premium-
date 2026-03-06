export default function Header() {
  return (
    <header className="w-full py-6 px-6 flex justify-between items-center bg-brand-black/80 backdrop-blur-md fixed top-0 left-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide text-brand-red">
        ACES PREMIUM
      </h1>
      <nav className="flex gap-6 text-brand-white/80">
        <a href="#" className="hover:text-brand-white transition">Home</a>
        <a href="#" className="hover:text-brand-white transition">Deals</a>
        <a href="#" className="hover:text-brand-white transition">Categories</a>
      </nav>
    </header>
  );
}
