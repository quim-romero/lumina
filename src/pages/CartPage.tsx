import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { redirectToCheckout } from "../lib/checkout";

export default function CartPage() {
  const { items, removeItem, increase, decrease, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = async () => {
    if (!items.length) return;

    const lineItems = items.map((item) => ({
      price: item.stripePriceId,
      quantity: item.quantity,
    }));

    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems }),
      });

      if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(
          `Failed to create session: ${res.status} ${msg}`.trim(),
        );
      }

      const { sessionId } = (await res.json()) as { sessionId: string };
      await redirectToCheckout(sessionId);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.section
      className="container py-20"
      role="main"
      aria-labelledby="cart-title"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 id="cart-title" className="text-3xl font-display font-bold mb-8">
        Your Cart
      </h1>

      {items.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-sm text-muted">
                    ${item.price} × {item.quantity}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrease(item.id)}
                  className="px-3 py-2 border rounded focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  <span aria-hidden>−</span>
                </button>

                <span className="min-w-6 text-center" aria-live="polite">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increase(item.id)}
                  className="px-3 py-2 border rounded focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  <span aria-hidden>＋</span>
                </button>

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-700 underline ml-4 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={clearCart}
              className="text-sm text-muted underline focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
            >
              Clear cart
            </button>

            <div className="text-xl font-semibold">
              Total:{" "}
              <span className="inline-flex items-center rounded-full bg-brand px-3 py-1 text-dark">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={handleCheckout}
              className="px-6 py-3 bg-brand text-dark rounded-full font-medium hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
            >
              Proceed to Checkout
            </button>
          </div>

          <div className="mt-4">
            <Link
              to="/"
              className="text-sm underline focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
              aria-label="Continue shopping on the home page"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </motion.section>
  );
}
