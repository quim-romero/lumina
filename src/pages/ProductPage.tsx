import { useParams, useNavigate } from "react-router-dom";
import { products } from "../lib/products";
import { motion } from "framer-motion";
import { useCartStore } from "../store/useCartStore";

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <section
        role="main"
        className="min-h-screen flex items-center justify-center container text-center"
        aria-live="polite"
      >
        <p className="text-dark dark:text-light text-lg font-medium">
          Product not found.
        </p>
      </section>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      stripePriceId: product.stripePriceId,
    });
    navigate("/cart");
  };

  return (
    <motion.section
      className="container py-20 grid md:grid-cols-2 gap-12"
      role="main"
      aria-labelledby="product-title"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full shadow-xl object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="(min-width: 768px) 50vw, 100vw"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h1
          id="product-title"
          className="text-4xl font-display font-bold text-dark dark:text-light"
        >
          {product.name}
        </h1>

        <motion.p
          className="text-muted text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          {product.description}
        </motion.p>

        <p className="inline-flex w-fit items-center rounded-full bg-brand px-3 py-1 text-xl md:text-2xl font-semibold text-dark">
          ${product.price}
        </p>

        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-full bg-brand text-dark font-medium hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
            aria-label={`Buy ${product.name} now`}
          >
            Buy now
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-full border border-muted hover:bg-muted/10 transition focus:outline-none focus-visible:ring-2 ring-muted ring-offset-2"
          >
            Back
          </button>
        </div>
      </div>
    </motion.section>
  );
}
