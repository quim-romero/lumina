import type { Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe> | null = null;

export async function getStripe(): Promise<Stripe> {
  if (!stripePromise) {
    stripePromise = (async () => {
      const { loadStripe } = await import("@stripe/stripe-js");
      const pk = import.meta.env.VITE_STRIPE_PUBLIC_KEY!;
      const s = await loadStripe(pk);
      if (!s) throw new Error("Stripe failed to initialize");
      return s;
    })();
  }
  return stripePromise;
}

type LineItem = { price: string; quantity: number };

type CheckoutOpts =
  | { lineItems: LineItem[]; successUrl?: string; cancelUrl?: string }
  | { sessionId: string }
  | {};

export async function redirectToCheckout(opts: CheckoutOpts = {}) {
  const paymentLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK_URL as
    | string
    | undefined;
  if (paymentLink) {
    window.location.assign(paymentLink);
    return;
  }

  const stripe = await getStripe();

  if (
    "lineItems" in opts &&
    Array.isArray(opts.lineItems) &&
    opts.lineItems.length
  ) {
    const successUrl =
      ("successUrl" in opts && opts.successUrl) ||
      `${window.location.origin}/success`;
    const cancelUrl =
      ("cancelUrl" in opts && opts.cancelUrl) ||
      `${window.location.origin}/cancel`;

    const { error } = await stripe.redirectToCheckout({
      lineItems: opts.lineItems,
      mode: "payment",
      successUrl,
      cancelUrl,
    } as any);
    if (error) throw error;
    return;
  }

  if ("sessionId" in opts && opts.sessionId) {
    const { error } = await stripe.redirectToCheckout({
      sessionId: opts.sessionId,
    });
    if (error) throw error;
    return;
  }

  throw new Error(
    "No checkout method available. Add VITE_STRIPE_PAYMENT_LINK_URL or call redirectToCheckout({ lineItems }).",
  );
}
