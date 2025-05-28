import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const html = document.documentElement;

    if (prefersDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-background dark:bg-dark text-dark dark:text-light flex items-center justify-center z-50 transition-colors"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <motion.h1
        className="text-3xl font-display font-bold text-brand"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Loading LUMINA...
      </motion.h1>
    </motion.div>
  );
}
