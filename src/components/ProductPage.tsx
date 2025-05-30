import { useParams } from "react-router-dom";
import { products } from "../lib/products";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full shadow-xl"
        />

        <div className="flex flex-col justify-center gap-6">
          <h1 className="text-4xl font-display font-bold">{product.name}</h1>
          <p className="text-muted text-lg">{product.description}</p>
          <p className="text-2xl font-semibold text-brand">${product.price}</p>
        </div>
      </div>
    </section>
  );
}
