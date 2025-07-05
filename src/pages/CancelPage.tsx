import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CancelPage() {
  return (
    <motion.section
      className="min-h-[80vh] flex flex-col items-center justify-center text-center container"
      role="main"
      aria-labelledby="cancel-title"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        id="cancel-title"
        className="text-4xl font-display font-bold text-red-600 mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Payment Cancelled
      </motion.h1>

      <motion.p
        className="text-muted mb-6 max-w-md"
        role="alert"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Your payment was not completed. You can retry your purchase or return to
        the homepage.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          to="/"
          aria-label="Back to home"
          className="px-6 py-3 bg-brand text-dark rounded-full hover:bg-brand-dark transition focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
        >
          Back to home
        </Link>
      </motion.div>
    </motion.section>
  );
}
