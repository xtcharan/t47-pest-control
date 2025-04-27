import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./output.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
      <head>
        <link
          rel="preload"
          href="/pest-control-hero.webp"
          as="image"
          imageSrcSet="/pest-control-hero.webp"
          imageSizes="100vw"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/pest-control-hero.jpg"
          as="image"
          imageSrcSet="/pest-control-hero.jpg"
          imageSizes="100vw"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/safe-home-business.jpg"
          as="image"
          imageSrcSet="/safe-home-business.jpg"
          imageSizes="100vw"
          type="image/jpeg"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          as="style"
          precedence="default"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          precedence="default"
        />
        <link rel="preload" as="script" href="/lazy-load-polyfill.js" />
      </head>
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
