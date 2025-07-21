import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { Product } from "../lib/products";

const FadeInSection = lazy(() => import("./FadeInSection"));
const ProductCard = lazy(() => import("./ProductCard"));

export default function ProductGrid() {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState<Product[] | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (show && !items) {
      import("../lib/products").then((m) => setItems(m.products));
    }
  }, [show, items]);

  const count = items?.length ?? 0;

  return (
    <section
      ref={ref}
      id="products"
      className="content-auto py-24 bg-light dark:bg-dark"
      role="region"
      aria-labelledby="products-heading"
      aria-busy={!items || !show}
    >
      <div className="container">
        <h2
          id="products-heading"
          className="text-3xl font-display font-bold mb-10 text-center"
        >
          Digital Products
        </h2>
        <p id="products-count" className="sr-only">
          {count} items
        </p>

        <Suspense fallback={null}>
          {show && items && (
            <ul
              className="list-none grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              aria-describedby="products-count"
            >
              {items.map((product, i) => (
                <li key={product.id}>
                  <FadeInSection delay={i * 0.1}>
                    <ProductCard product={product} />
                  </FadeInSection>
                </li>
              ))}
            </ul>
          )}
        </Suspense>
      </div>
    </section>
  );
}
