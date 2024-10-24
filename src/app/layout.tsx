import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header name="Nazim" />
        <main className="flex-1 pt-28">
          <div className="flex flex-col">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
