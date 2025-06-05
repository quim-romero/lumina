import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full py-4 border-b border-border sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-white/80 dark:bg-dark/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link
          to="/"
          aria-label="Home"
          className="font-display text-xl font-bold tracking-wide hover:opacity-80 focus:opacity-80 transition"
        >
          LUMINA
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative group" aria-label="Go to cart">
            <FaShoppingCart className="text-xl hover:opacity-80 transition" />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
