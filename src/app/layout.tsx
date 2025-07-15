import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./output.css";
import "../styles/performance-optimizations.css";
import dynamic from 'next/dynamic';
import Header from "@/components/layout/Header";

// Lazy load non-critical components for better performance
const Footer = dynamic(() => import("@/components/layout/Footer"), {
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 animate-pulse" />
});
const StickyQuoteButton = dynamic(() => import("@/components/common/StickyQuoteButton"), {
  ssr: false,
  loading: () => null
});
const LazyLoadInit = dynamic(() => import("@/components/LazyLoadInit"), {
  ssr: false,
  loading: () => null
});
const GoogleAnalytics = dynamic(() => import("@/components/analytics/GoogleAnalytics"), {
  ssr: false,
  loading: () => null
});
const PerformanceMonitor = dynamic(() => import("@/components/performance/PerformanceMonitor"), {
  ssr: false,
  loading: () => null
});

import Script from "next/script";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GA_MEASUREMENT_ID, shouldLoadAnalytics } from "@/lib/analytics";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import ErrorBoundary from "@/components/error/ErrorBoundary";
import ServiceWorkerRegistration from "@/components/pwa/ServiceWorkerRegistration";
import UpdateNotification from "@/components/pwa/UpdateNotification";
import AnimationPerformanceMonitor from "@/components/performance/AnimationPerformanceMonitor";

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
        {/* Critical CSS - inline for fastest loading */}
        <style dangerouslySetInnerHTML={{
          __html: `
            *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
            html{-webkit-text-size-adjust:100%}
            body{font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;line-height:1.5;background:#fff;color:#171717;min-height:100vh;-webkit-font-smoothing:antialiased}
            .header-container{position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(26,37,47,0.95);backdrop-filter:blur(10px)}
            .hero-section{position:relative;min-height:100vh;background:linear-gradient(to right,rgba(15,21,25,0.9),rgba(26,37,47,0.9));display:flex;align-items:center;justify-content:center}
            .hero-content{text-align:center;color:white;max-width:1200px;padding:0 1rem}
            .hero-title{font-size:3rem;font-weight:700;margin-bottom:1.5rem;line-height:1.2}
            .btn-primary{background:linear-gradient(to right,#8BC34A,#4CAF50);color:white;padding:0.75rem 2rem;border-radius:0.5rem;font-weight:600;text-decoration:none;display:inline-block;transition:transform 0.2s ease}
            @media (max-width:768px){.hero-title{font-size:2rem}}
          `
        }} />



        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="T47 Pest Control" />

        {/* Resource hints for performance - only essential connections */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Prefetch critical pages */}
        <link rel="prefetch" href="/residential" />
        <link rel="prefetch" href="/commercial" />
        <link rel="prefetch" href="/contact" />

        {/* Performance optimizations */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <meta name="format-detection" content="telephone=no" />

        {/* Schema Markup for SEO */}
        <SchemaMarkup type="organization" />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${roboto.variable} ${nesController.variable} antialiased bg-white text-black`}
      >
        {/* Google Analytics - loaded asynchronously */}
        {shouldLoadAnalytics() && <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />}

        <ErrorBoundary>
          <Header />
          {children}
          <StickyQuoteButton />
          <Footer />
        </ErrorBoundary>
        <ServiceWorkerRegistration />
        <UpdateNotification />
        <AnimationPerformanceMonitor />
        <LazyLoadInit />
        <PerformanceMonitor />

        {/* Load non-critical scripts after interaction */}
        <Script
          src="/lazy-load-polyfill.js"
          strategy="afterInteractive"
        />

        {/* Service Worker Registration */}
        <Script
          id="sw-registration"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `
          }}
        />

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
