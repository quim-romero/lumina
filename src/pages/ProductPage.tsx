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
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
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
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <motion.img
          src={product.image}
          alt={product.name}
          className="rounded-xl w-full shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <h1 className="text-4xl font-display font-bold">{product.name}</h1>
        <p className="text-muted text-lg">{product.description}</p>
        <p className="text-2xl font-semibold text-brand">${product.price}</p>

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 rounded-full bg-brand text-white font-medium hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
          >
            Buy now
          </button>

          <button
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
