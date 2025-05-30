import FadeInSection from "./FadeInSection";
import { products } from "../lib/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section id="products" className="py-24 bg-light dark:bg-dark">
      <div className="container">
        <FadeInSection>
          <h2 className="text-3xl font-display font-bold mb-10 text-center">
            Digital Products
          </h2>
        </FadeInSection>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeInSection key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
