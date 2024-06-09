import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from "components/header/Header";
import MobNavbar from "components/MobNavbar";
import { Footer } from "components/Footer";
import { CartProvider } from "app/context/CartContext"; // Import CartProvider

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfaro",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider> {/* Wrap your application with CartProvider */}
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-red-100 flex flex-col">
            <Header />
            <MobNavbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
