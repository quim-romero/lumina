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
  },
  {
    id: "3",
    name: "FlowPen",
    slug: "flowpen",
    description: "Minimalist gel pen designed for everyday creators.",
    price: 12,
    image: "/assets/flowpen.png",
    stripePriceId: "price_1RsltnAH9H97RCvpxT28OaXf",
  },
  {
    id: "4",
    name: "AirZen",
    slug: "airzen",
    description: "Soft-touch wireless earbuds with clear sound.",
    price: 98,
    image: "/assets/airzen.png",
    stripePriceId: "price_1RslvTAH9H97RCvp91bS0zuP",
  },
  {
    id: "5",
    name: "Printsy",
    slug: "printsy",
    description: "Bold digital posters for modern creative spaces.",
    price: 16,
    image: "/assets/printsy.png",
    stripePriceId: "price_1RslvvAH9H97RCvpNnkDVPw4",
  },
  {
    id: "6",
    name: "MoodMat",
    slug: "moodmat",
    description: "Eco yoga mat with texture optimized for grounding.",
    price: 45,
    image: "/assets/moodmat.png",
    stripePriceId: "price_1RslxaAH9H97RCvpxKnVzbKj",
  },
];
