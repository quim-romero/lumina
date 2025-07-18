import { motion } from "framer-motion";
import type { Product } from "../lib/products";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const titleId = `product-${product.id}-title`;

  return (
    <motion.div
      role="article"
      aria-labelledby={titleId}
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
        <h3
          id={titleId}
          className="font-display text-lg font-semibold text-dark dark:text-light"
        >
          {product.name}
        </h3>

        <p className="text-sm text-muted">{product.description}</p>

        <div className="mt-2 flex justify-between items-center">
          <span className="inline-flex items-center rounded-full bg-brand px-2.5 py-0.5 text-dark font-semibold">
            ${product.price}
          </span>

          <Link
            to={`/product/${product.slug}`}
            aria-label={`See more details about ${product.name}`}
            className={[
              "inline-block rounded-sm px-1",
              "bg-surface dark:bg-zinc-900",
              "text-sm font-medium underline decoration-2 underline-offset-4",
              "text-dark visited:text-dark dark:text-light dark:visited:text-light",
              "hover:text-brand-700 dark:hover:text-brand",
              "focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 ring-offset-surface dark:ring-offset-zinc-900",
              "transition",
            ].join(" ")}
          >
            See more<span className="sr-only"> about {product.name}</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
