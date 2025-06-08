import { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ContactForm from "./components/ContactForm";
import Loader from "./components/Loader";

const ProductPage = lazy(() => import("./pages/ProductPage"));

import CartPage from "./pages/CartPage";
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";

import { useScrollTop } from "./hooks/useScrollTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useScrollTop();

  useEffect(() => {
    if (location.pathname === "/cancel") {
      setIsLoading(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (isLoading) return <Loader />;

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Layout>
                <Hero />
                <ProductGrid />
                <ContactForm />
              </Layout>
            }
          />

          <Route
            path="/product/:slug"
            element={
              <Layout>
                <Suspense
                  fallback={<div className="container py-20">Loading…</div>}
                >
                  <ProductPage />
                </Suspense>
              </Layout>
            }
          />

          <Route
            path="/success"
            element={
              <Layout>
                <SuccessPage />
              </Layout>
            }
          />
          <Route
            path="/cancel"
            element={
              <Layout>
                <CancelPage />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}
