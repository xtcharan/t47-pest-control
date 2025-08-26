import Link from 'next/link';
import { COMPANY_INFO } from '@/components/lib/constants';
import ClientReviews from '@/components/reviews/ClientReviews';
import ServiceForm from '@/components/forms/ServiceForm';
import ServiceCategories from '@/components/services/ServiceCategories';
import SafetyFeatures from '@/components/safety/SafetyFeatures';
import FAQ from '@/components/faq/FAQ';
import SchemaMarkup, { BreadcrumbSchema, WebsiteSchema } from '@/components/seo/SchemaMarkup';
import HeroImagePreload from '@/components/preload/HeroImagePreload';
import GoogleReviewPrompt from '@/components/reviews/GoogleReviewPrompt';
import AlburyHeroClient from './AlburyHeroClient';
import AlburyServiceTiles from './AlburyServiceTiles';
import AlburyPestSolutions from './AlburyPestSolutions';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pest Control Albury | T47 Pest Control | 24/7 Service NSW",
  description: "Professional pest control services in Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith. Expert termite inspections, general pest control, and emergency services. Call T47 Pest Control for immediate assistance.",
  keywords: "pest control Albury, termite inspection Albury, pest control Wodonga, pest control Wagga Wagga, pest control Orange NSW, pest control Shepparton, pest control Dubbo, pest control Griffith, emergency pest control Albury, commercial pest control Albury",
  openGraph: {
    title: "Pest Control Albury | T47 Pest Control | 24/7 Service NSW",
    description: "Professional pest control services in Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith. Expert termite inspections, general pest control, and emergency services.",
    url: "https://t47pestcontrol.com.au/local-branches/albury",
    siteName: "T47 Pest Control",
    images: [
      {
        url: "/albury-pest-control-og.jpg",
        width: 1200,
        height: 630,
        alt: "T47 Pest Control Albury - Professional Pest Control Services"
      }
    ],
    locale: "en_AU",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Albury | T47 Pest Control | 24/7 Service NSW",
    description: "Professional pest control services in Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith.",
    images: ["/albury-pest-control-og.jpg"]
  },
  alternates: {
    canonical: "https://t47pestcontrol.com.au/local-branches/albury"
  }
};


export default function AlburyBranchPage() {
  const serviceAreas = [
    'Albury', 'Wodonga', 'Wagga Wagga', 'Orange', 'Shepparton',
    'Dubbo', 'Griffith', 'Lavington', 'Thurgoona', 'West Albury',
    'East Albury', 'North Albury', 'South Albury', 'Jindera', 'Howlong',
    'Corowa', 'Culcairn', 'Holbrook', 'Tumbarumba', 'Beechworth'
  ];

  // Albury Top Banner Component
  function AlburyTopBanner() {
    return (
      <section className="bg-[linear-gradient(135deg,_#8BC34A_50%,_#4CAF50_50%)] pt-6 pb-10 relative overflow-hidden z-20 -mt-2">
        <div className="absolute inset-0 z-10 opacity-15 bg-[url('/subtle-dots.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 to-transparent z-20"></div>

        <div className="container mx-auto px-4 relative z-30">
          {/* Title section */}
          <div className="flex flex-col items-center justify-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide text-center drop-shadow-md">
              We are the Best Pest Control in Albury
            </h2>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto text-center font-light">
              We offer a range of services to keep your home and business pest-free across Albury and surrounding regions
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="text-lg font-bold text-white mb-2">Residential Services</h3>
              <p className="text-white/90 text-sm">Complete home protection for Albury families</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="text-lg font-bold text-white mb-2">Commercial Solutions</h3>
              <p className="text-white/90 text-sm">Professional pest management for Albury businesses</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🐛</div>
              <h3 className="text-lg font-bold text-white mb-2">Termite Specialists</h3>
              <p className="text-white/90 text-sm">Advanced termite detection and treatment</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">24/7 Emergency</h3>
              <p className="text-white/90 text-sm">Round-the-clock pest control services</p>
            </div>
          </div>

          {/* Service areas */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Serving Albury & Surrounding Areas</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {serviceAreas.map((area, index) => (
                <span
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/30 hover:bg-white/30 transition-colors duration-200"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <HeroImagePreload imagePath="/pest-control-hero.webp" priority={true} />
      <WebsiteSchema />

      {/* Schema Markup for SEO */}
      <SchemaMarkup
        type="localBusiness"
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "T47 Pest Control Albury",
          "description": "Professional pest control services in Albury, Wodonga, Wagga Wagga, Orange, Shepparton, Dubbo, and Griffith. Expert termite inspections, general pest control, and emergency services.",
          "url": "https://t47pestcontrol.com.au/local-branches/albury",
          "telephone": COMPANY_INFO.phone,
          "email": "albury@t47pestcontrol.com.au",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Albury",
            "addressRegion": "NSW",
            "addressCountry": "AU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-36.0737",
            "longitude": "146.9135"
          },
          "areaServed": [
            "Albury", "Wodonga", "Wagga Wagga", "Orange", "Shepparton", "Dubbo", "Griffith"
          ],
          "serviceType": [
            "Pest Control", "Termite Inspection", "Commercial Pest Control", "Residential Pest Control", "Emergency Pest Control"
          ],
          "priceRange": "$$",
          "openingHours": "Mo-Su 00:00-23:59"
        }}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://t47pestcontrol.com.au" },
          { name: "Local Branches", url: "https://t47pestcontrol.com.au/local-branches" },
          { name: "Albury", url: "https://t47pestcontrol.com.au/local-branches/albury" }
        ]}
      />

      <main className="min-h-screen">
        {/* Breadcrumb */}
        <nav className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-green-light hover:underline">Home</Link>
              <span className="text-gray-500">/</span>
              <Link href="/local-branches" className="text-green-light hover:underline">Local Branches</Link>
              <span className="text-gray-500">/</span>
              <span className="text-gray-700 font-medium">Pest control Albury</span>
            </div>
          </div>
        </nav>

        <AlburyHeroClient />
        <AlburyTopBanner />
        <AlburyServiceTiles />
        <AlburyPestSolutions />
        <ServiceCategories />
        <SafetyFeatures />
        <ClientReviews />
        <ServiceForm />
        <FAQ />
        <GoogleReviewPrompt googleReviewUrl="https://g.page/r/CRZvQXt4QzBREAE/review" />
      </main>
    </>
  );
}
