import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./output.css";
import dynamic from 'next/dynamic';
import Header from "@/components/layout/Header";

const Footer = dynamic(() => import("@/components/layout/Footer"), { ssr: false });
const StickyQuoteButton = dynamic(() => import("@/components/common/StickyQuoteButton"), { ssr: false });
// import MobileScrollToTop from "@/components/common/MobileScrollToTop"; // Uncomment if you want mobile scroll-to-top
import LazyLoadInit from "@/components/LazyLoadInit";
import Script from "next/script";
import { trackWebVitals, registerServiceWorker } from "@/lib/performance";
import { SpeedInsights } from '@vercel/speed-insights/next';
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { GA_MEASUREMENT_ID, shouldLoadAnalytics } from "@/lib/analytics";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

// Optimized font loading with Next.js
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const nesController = localFont({
  src: "./fonts/nes_controller_mrshrike.ttf",
  variable: "--font-nes-controller",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://t47pestcontrol.com.au'),
  title: "T47 Pest Control | Professional Pest Control Services in Victoria",
  description: "T47 Pest Control offers professional pest management services for residential and commercial properties in Victoria. Fully licensed and insured.",
  keywords: "pest control, Victoria pest control, T47 Pest Control, residential pest control, commercial pest control",
  authors: [{ name: "T47 Pest Control" }],
  robots: "index, follow",
  openGraph: {
    title: "T47 Pest Control | Professional Pest Control Services in Victoria",
    description: "T47 Pest Control offers professional pest management services for residential and commercial properties in Victoria. Fully licensed and insured.",
    url: "https://t47pestcontrol.com.au",
    siteName: "T47 Pest Control",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "T47 Pest Control Logo",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "T47 Pest Control | Professional Pest Control Services in Victoria",
    description: "T47 Pest Control offers professional pest management services for residential and commercial properties in Victoria. Fully licensed and insured.",
    images: ["/logo.png"],
  },
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
        {/* Critical CSS preload */}
        <link rel="preload" href="/critical.css" as="style" />
        <noscript><link rel="stylesheet" href="/critical.css" /></noscript>

        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Preload critical resources */}
        <link rel="prefetch" href="/residential" />
        <link rel="prefetch" href="/commercial" />
        <link rel="prefetch" href="/contact" />

        {/* Fonts are now optimized with Next.js font loading */}
        <link rel="preload" as="script" href="/lazy-load-polyfill.js" />

        {/* Schema Markup for SEO */}
        <SchemaMarkup type="organization" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${nesController.variable} antialiased bg-white text-black`}
      >
        {/* Google Analytics */}
        {shouldLoadAnalytics() && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}

        <Header />
        {children}
        <StickyQuoteButton />
        {/* <MobileScrollToTop /> */} {/* Uncomment if you want mobile scroll-to-top */}
        <Footer />
        <LazyLoadInit />
        <Script src="/lazy-load-polyfill.js" strategy="afterInteractive" />
        <SpeedInsights />

        {/* Performance monitoring */}
        <Script id="performance-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              // Register service worker
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js');
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
