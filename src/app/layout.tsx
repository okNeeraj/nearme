import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store Near Me",
  description: "Find any stores near you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Intro />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
