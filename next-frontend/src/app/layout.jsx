"use client";
import { Suspense } from "react";
import "./../assets/fontawesome-free-6.4.2-web/css/all.min.css";
import "./globals.css";
import HeaderLoading from "./headerLoading";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<HeaderLoading />}>
          <Header />
        </Suspense>
        {children}
        <Footer />
      </body>
    </html>
  );
}
