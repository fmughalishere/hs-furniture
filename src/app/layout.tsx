import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/layout/Navbar";
import Footer from "../app/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: "HS Furniture | Handcrafted Excellence",
  description: "Luxury furniture store in Pakistan like Kalamkar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <body className={`${inter.variable} ${playfair.variable} font-sans`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
  );
}