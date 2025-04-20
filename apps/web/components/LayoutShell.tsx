"use client";

import Footer from "./Footer";
import Header from "./Header";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "175px", minHeight: "calc(100vh - 175px - 422px)" }}>{children}</main>
      <Footer />
    </>
  );
}
