import type { ReactNode } from "react";
import { useScrollTop } from "../hooks/useScrollTop";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  useScrollTop();

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
