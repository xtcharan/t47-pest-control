import ResidentialControlHero from "@/components/hero/ResidentialControlHero";
import ResidentialControlBanner from "@/components/banner/ResidentialControlBanner";
import ResidentialControlContent from "@/components/content/ResidentialControlContent";
import ResidentialServicesGrid from "@/components/services/ResidentialServicesGrid";
import ServiceForm from "@/components/forms/ServiceForm";
import ResidentialControlFAQ from "@/components/faq/ResidentialControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Pest Control Services Victoria | T47 Pest Control",
  description: "Professional residential pest control services across Victoria. Safe, effective solutions for ants, spiders, cockroaches, termites, rodents & more. Same-day service available. Get your free quote today!",
  keywords: [
    "residential pest control Victoria",
    "home pest control services",
    "ant control residential",
    "spider control home",
    "cockroach extermination",
    "termite control residential",
    "rodent control services",
    "wasp removal home",
    "bed bug treatment",
    "flea control residential",
    "mosquito control home",
    "fly control services",
    "possum removal residential",
    "bird control home",
    "pest control near me",
    "family safe pest control",
    "eco-friendly pest control",
    "same day pest control",
    "licensed pest control Victoria",
    "guaranteed pest control"
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://t47pestcontrol.com.au/residential",
    title: "Residential Pest Control Services Victoria | T47 Pest Control",
    description: "Professional residential pest control services across Victoria. Safe, effective solutions for ants, spiders, cockroaches, termites, rodents & more. Same-day service available.",
    siteName: "T47 Pest Control",
    images: [
      {
        url: "/residential-pest-control.webp",
        width: 1200,
        height: 630,
        alt: "T47 Pest Control - Residential Pest Control Services Victoria",
      },
    ],
  },
  alternates: {
    canonical: "https://t47pestcontrol.com.au/residential",
  },
};

export default function ResidentialPage() {
  return (
    <main className="min-h-screen">
      <ResidentialControlHero />
      <ResidentialControlBanner />
      <ResidentialServicesGrid />
      <ResidentialControlContent />
      <ServiceForm />
      <ResidentialControlFAQ />
    </main>
  );
}
