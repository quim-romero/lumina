import { motion } from "framer-motion";
import type { Product } from "../lib/products";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <motion.div
      className="bg-surface dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
        decoding="async"
      />

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-muted">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-brand font-semibold">${product.price}</span>
          <Link
            to={`/product/${product.slug}`}
            className="text-sm font-medium underline text-brand hover:text-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded-sm"
          >
            See more
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
