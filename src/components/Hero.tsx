import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[100vh] flex flex-col justify-center items-center text-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-br from-brand/10 to-brand-dark/20 opacity-40 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        aria-hidden
      />

      <motion.h1
        className="text-5xl md:text-7xl font-display font-bold leading-tight max-w-4xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Everyday Products <br /> built with{" "}
        <span className="underline decoration-brand decoration-4 underline-offset-4">
          Design
        </span>
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl max-w-xl text-muted z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Crafted visuals for items that feel real, familiar, and timeless.
      </motion.p>

      <motion.a
        href="#products"
        className="mt-10 z-10 px-6 py-3 text-sm font-semibold tracking-wide uppercase bg-brand text-dark rounded-full hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        View products
      </motion.a>
    </section>
  );
}
