import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./output.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Head from "./head";
import LazyLoadInit from "@/components/LazyLoadInit";
import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "T47 Pest Control | Professional Pest Control Services in Victoria",
  description: "T47 Pest Control offers professional pest management services for residential and commercial properties in Victoria. Fully licensed and insured.",
  keywords: "pest control, Victoria pest control, T47 Pest Control, residential pest control, commercial pest control",
  authors: [{ name: "T47 Pest Control" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body
        className={`${inter.variable} antialiased bg-white text-black`}
      >
        <Header />
        {children}
        <Footer />
        <LazyLoadInit />
        <Script src="/lazy-load-polyfill.js" strategy="lazyOnload" />
        <SpeedInsights />
      </body>
    </html>
  );
}
