import CommercialControlHero from "@/components/hero/CommercialControlHero";
import CommercialControlBanner from "@/components/banner/CommercialControlBanner";
import CommercialControlContent from "@/components/content/CommercialControlContent";
import CommercialServicesGrid from "@/components/services/CommercialServicesGrid";
import ServiceForm from "@/components/forms/ServiceForm";
import CommercialControlFAQ from "@/components/faq/CommercialControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Pest Control Services Victoria | T47 Pest Control",
  description: "Professional commercial pest control services across Victoria. Specialized solutions for restaurants, offices, hotels, schools, hospitals & more. Compliance-focused treatments with 24/7 service available.",
  keywords: [
    "commercial pest control Victoria",
    "business pest control services",
    "restaurant pest control",
    "office pest control",
    "hotel pest control",
    "school pest control",
    "hospital pest control",
    "warehouse pest control",
    "retail pest control",
    "food processing pest control",
    "childcare pest control",
    "elderly care pest control",
    "gym pest control",
    "IT center pest control",
    "construction site pest control",
    "commercial pest management",
    "business pest prevention",
    "compliance pest control",
    "licensed commercial pest control",
    "24/7 commercial pest service",
    "commercial pest inspection",
    "integrated pest management",
    "commercial pest solutions"
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://t47pestcontrol.com.au/commercial",
    title: "Commercial Pest Control Services Victoria | T47 Pest Control",
    description: "Professional commercial pest control services across Victoria. Specialized solutions for restaurants, offices, hotels, schools, hospitals & more. Compliance-focused treatments with 24/7 service.",
    siteName: "T47 Pest Control",
    images: [
      {
        url: "/commercial-pest-control.webp",
        width: 1200,
        height: 630,
        alt: "T47 Pest Control - Commercial Pest Control Services Victoria",
      },
    ],
  },
  alternates: {
    canonical: "https://t47pestcontrol.com.au/commercial",
  },
};

export default function CommercialPage() {
  return (
    <main className="min-h-screen">
      <CommercialControlHero />
      <CommercialControlBanner />
      <CommercialServicesGrid />
      <CommercialControlContent />
      <ServiceForm />
      <CommercialControlFAQ />
    </main>
  );
}
