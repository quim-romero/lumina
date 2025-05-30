export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  stripePriceId: string;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Surfly",
    slug: "surfly",
    description: "Handcrafted carbon surfboard for ultimate flow.",
    price: 180,
    image: "/assets/surfly.png",
    stripePriceId: "price_1RslsjAH9H97RCvp7izaLKBx",
  },
  {
    id: "2",
    name: "Brewly",
    slug: "brewly",
    description: "Organic small-batch coffee with rich flavor.",
    price: 22,
    image: "/assets/brewly.png",
    stripePriceId: "price_1RsltDAH9H97RCvppm9Ntgqk",
  }
];
