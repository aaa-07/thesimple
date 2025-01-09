import { Urbanist, Allura, Roboto, Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const allura = Allura({ subsets: ["latin"], weight: "400", variable: "--font-allura" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-roboto" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "thesimple | Crafting Premium UX UI and Branding Solutions for Memorable Experiences",
  description:
    "We create digital products, websites, design systems, and brand experiences that drive conversions, adoption, and retention across industries like SaaS, Gen AI, cybersecurity, e-commerce, edtech, BFSI, fintech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${allura.variable} ${roboto.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
