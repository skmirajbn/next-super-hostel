"use client";
import { Suspense } from "react";
import "./../assets/fontawesome-free-6.4.2-web/css/all.min.css";
import "./globals.css";
import HeaderLoading from "./headerLoading";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QueryClientProvider, QueryClient } from "react-query";

export default function RootLayout({ children }) {
  const client = new QueryClient();
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={client}>
          <Suspense fallback={<HeaderLoading />}>
            <Header />
          </Suspense>
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
