"use client";

import { useContext } from "react";

import { AppRouterI18nContext } from "../app/AppRouterI18nProvider";
import Footer from "./Footer";
import Header from "./Header";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  // Access the i18n context to ensure it's passed through
  const i18nContext = useContext(AppRouterI18nContext);

  return (
    <>
      <Header />
      <main style={{ paddingTop: "175px", minHeight: "calc(100vh - 175px - 422px)" }}>{children}</main>
      <Footer />
    </>
  );
}
