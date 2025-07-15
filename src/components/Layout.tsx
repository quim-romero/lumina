import type { ReactNode, RefObject } from "react";
import { useEffect, useRef } from "react";
import { useScrollTop } from "../hooks/useScrollTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  useScrollTop();

  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const focusMain = () => {
      if (window.location.hash === "#main") {
        mainRef.current?.focus();
      }
    };
    focusMain();
    window.addEventListener("hashchange", focusMain);
    return () => window.removeEventListener("hashchange", focusMain);
  }, []);

  return (
    <>
      <Navbar />
      <main
        id="main"
        ref={mainRef as RefObject<HTMLElement>}
        tabIndex={-1}
        className="focus:outline-none focus-visible:ring-2 ring-brand ring-offset-2"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
