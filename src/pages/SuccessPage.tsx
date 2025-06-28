import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

export default function SuccessPage() {
  const prefersReducedMotion = useReducedMotion();

  const sectionAnim = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
      }
    : {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 },
      };

  const titleAnim = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 0.2 },
      }
    : {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        transition: { delay: 0.2 },
      };

  const textAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.4 },
  };
  const ctaAnim = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.6 },
  };

  return (
    <motion.section
      className="min-h-[80vh] flex flex-col items-center justify-center text-center container"
      role="main"
      aria-labelledby="success-title"
      {...sectionAnim}
    >
      <motion.h1
        id="success-title"
        className="text-4xl font-display font-bold text-dark mb-4"
        {...titleAnim}
      >
        Thank you!
      </motion.h1>

      <motion.p
        className="text-muted mb-6 max-w-md"
        role="status"
        {...textAnim}
      >
        Your purchase was successful. You'll receive your download link shortly.
      </motion.p>

      <motion.div {...ctaAnim}>
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
