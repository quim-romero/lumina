import type { Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe> | null = null;

export async function getStripe(): Promise<Stripe> {
  if (!stripePromise) {
    stripePromise = (async () => {
      const { loadStripe } = await import("@stripe/stripe-js");
      const pk = import.meta.env.VITE_STRIPE_PK!;
      const s = await loadStripe(pk);
      if (!s) throw new Error("Stripe failed to initialize");
      return s;
    })();
  }
  return stripePromise;
}

export async function redirectToCheckout(sessionId: string) {
  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout({ sessionId });
  if (error) throw error;
}
