import FadeInSection from "./FadeInSection";
import { products } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const count = products.length;

  return (
    <section
      id="products"
      className="py-24 bg-light dark:bg-dark"
      role="region"
      aria-labelledby="products-heading"
    >
      <div className="container">
        <FadeInSection>
          <h2
            id="products-heading"
            className="text-3xl font-display font-bold mb-10 text-center"
          >
            Digital Products
          </h2>
          <p id="products-count" className="sr-only">
            {count} items
          </p>
        </FadeInSection>

        <ul
          className="list-none grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          aria-describedby="products-count"
        >
          {products.map((product, i) => (
            <li key={product.id}>
              <FadeInSection delay={i * 0.1}>
                <ProductCard product={product} />
              </FadeInSection>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
