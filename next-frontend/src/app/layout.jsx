"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import "./../assets/fontawesome-free-6.4.2-web/css/all.min.css";
import "./globals.css";
import HeaderLoading from "./headerLoading";

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
