import { create } from "zustand";
import { persist } from "zustand/middleware";
import { redirectToCheckout } from "../lib/checkout";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stripePriceId: string;
};

type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clearCart: () => void;
  checkout: () => Promise<void>;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          } else {
            return { items: [...state.items, { ...item, quantity: 1 }] };
          }
        }),

      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      increase: (id) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
        })),

      decrease: (id) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
            .filter((i) => i.quantity > 0),
        })),

      clearCart: () => set({ items: [] }),

      checkout: async () => {
        const items = get().items;
        if (!items.length) return;

        const lineItems = items.map((i) => ({
          price: i.stripePriceId,
          quantity: i.quantity,
        }));

        const res = await fetch("/api/create-checkout-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lineItems }),
        });

        if (!res.ok) {
          const msg = await res.text().catch(() => "");
          throw new Error(
            `Failed to create checkout session: ${res.status} ${msg}`.trim(),
          );
        }

        const { sessionId } = (await res.json()) as { sessionId: string };
        await redirectToCheckout(sessionId);
      },
    }),
    { name: "cart-storage" },
  ),
);
