export default function ProductCard({ product }) {
  return (
    <a
      href={product.link}
      className="bg-brand-black/40 border border-brand-white/10 rounded-smooth p-4 hover:border-brand-red transition flex flex-col"
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded-smooth mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-brand-red font-bold">{product.price}</p>
    </a>
  );
}
