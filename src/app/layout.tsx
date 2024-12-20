import React from "react";
import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <main className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 pt-28">
              <div className="flex flex-col">{children}</div>
            </div>
            <Footer />
          </main>
        </NextUIProvider>
      </body>
    </html>
  );
}
