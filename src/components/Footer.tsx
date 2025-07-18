import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-light dark:bg-dark border-t border-muted/30 dark:border-muted/50 py-12 text-sm text-muted/80 transition-colors"
    >
      <div className="container grid md:grid-cols-3 gap-8 items-start">
        <div>
          <h3 className="text-base font-semibold text-dark dark:text-light mb-2">
            LUMINA
          </h3>
          <p>
            Digital interfaces with soul. Crafted design, code, and clarity.
          </p>
        </div>

        <div>
          <h4
            id="footer-nav"
            className="font-medium text-dark dark:text-light mb-2"
          >
            Navigation
          </h4>
          <nav aria-labelledby="footer-nav">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="hover:underline focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#products"
                  className="hover:underline focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:underline focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4 className="font-medium text-dark dark:text-light mb-2">
            Freelance
          </h4>
          <p>
            Looking for frontend help?{" "}
            <Link
              to="/contact"
              className="underline decoration-brand decoration-2 underline-offset-2 focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2 rounded"
            >
              Get in touch →
            </Link>
          </p>
        </div>
      </div>

      <div className="container mt-10 pt-6 border-t border-muted/30 dark:border-muted/50 text-center text-xs">
        <p>© {year} Quim Romero. Built with care and purpose.</p>
      </div>
    </footer>
  );
}
