import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useCartStore } from "../store/useCartStore";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const count = useCartStore((s) => s.items.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isCart = location.pathname === "/cart";

  return (
    <header
      role="banner"
      data-scrolled={scrolled ? "true" : "false"}
      className={`w-full py-4 border-b border-border sticky top-0 z-50 backdrop-blur-md transition-all ${
        scrolled ? "bg-white/80 dark:bg-dark/80 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex justify-between items-center">
        <nav aria-label="Primary" className="flex items-center gap-6">
          <Link
            to="/"
            aria-label="Home"
            aria-current={isHome ? "page" : undefined}
            className="font-display text-xl font-bold tracking-wide hover:opacity-80 focus:opacity-80 transition"
          >
            LUMINA
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <span className="sr-only" role="status" aria-live="polite">
            Cart: {count} item{count === 1 ? "" : "s"}
          </span>

          <Link
            to="/cart"
            aria-label={`Go to cart (${count} item${count === 1 ? "" : "s"})`}
            aria-current={isCart ? "page" : undefined}
            className="relative group focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
          >
            <FaShoppingCart
              className="text-xl group-hover:opacity-80 transition"
              aria-hidden
            />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1.5 rounded-full bg-brand text-dark text-xs font-semibold flex items-center justify-center shadow">
                {count}
              </span>
            )}
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
