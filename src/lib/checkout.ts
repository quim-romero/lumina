import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
);

export type CheckoutItem = {
  stripePriceId: string;
  quantity: number;
};

export async function redirectToCheckout(items: CheckoutItem[]) {
  const stripe = await stripePromise;

  if (!stripe) {
    console.error("Stripe failed to load.");
    return;
  }

  const lineItems = items.map((item) => ({
    price: item.stripePriceId,
    quantity: item.quantity,
  }));

  try {
    await stripe.redirectToCheckout({
      mode: "payment",
      lineItems,
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
    });
  } catch (error) {
    console.error("Stripe redirection error:", error);
  }
}
