import { useCartStore } from "../store/useCartStore";
import { Link } from "react-router-dom";

export default function CartPage() {
  const { items, removeItem, increase, decrease, clearCart } = useCartStore();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <section className="container py-20">
      <h1 className="text-3xl font-display font-bold mb-8">Your Cart</h1>

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
                  className="px-2 py-1 border rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increase(item.id)}
                  className="px-2 py-1 border rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-sm text-red-500 hover:underline ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
          </div>

          <Link
            to="/checkout"
            className="mt-4 inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </section>
  );
}
