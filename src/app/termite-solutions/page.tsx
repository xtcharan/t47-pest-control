import TermiteSolutionsHero from "@/components/hero/TermiteSolutionsHero";
import TermiteSolutionsBanner from "@/components/banner/TermiteSolutionsBanner";
import TermiteSolutionsContent from "@/components/content/TermiteSolutionsContent";
import TermiteSolutionsGrid from "@/components/services/TermiteSolutionsGrid";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteSolutionsFAQ from "@/components/faq/TermiteSolutionsFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Termite Solutions Victoria | T47 Pest Control - Inspection, Treatment & Prevention",
  description: "Comprehensive termite solutions across Victoria. Expert inspection, advanced treatment, prevention systems, and damage repair. 25-year warranties available. Same-day service with certified technicians.",
  keywords: [
    "termite solutions Victoria",
    "termite inspection services",
    "termite treatment solutions",
    "termite prevention systems",
    "termite damage repair",
    "pre-purchase termite inspection",
    "annual termite inspection",
    "business termite inspection",
    "home termite protection",
    "termite barrier installation",
    "termite control specialists",
    "termite management solutions",
    "comprehensive termite services",
    "termite elimination experts",
    "termite protection systems",
    "certified termite inspectors",
    "advanced termite treatment",
    "eco-friendly termite control",
    "termite warranty protection",
    "emergency termite service",
    "professional termite solutions",
    "integrated termite management",
    "termite risk assessment"
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://t47pestcontrol.com.au/termite-solutions",
    title: "Complete Termite Solutions Victoria | T47 Pest Control",
    description: "Comprehensive termite solutions across Victoria. Expert inspection, advanced treatment, prevention systems, and damage repair. 25-year warranties available with certified technicians.",
    siteName: "T47 Pest Control",
    images: [
      {
        url: "/termite-solutions.webp",
        width: 1200,
        height: 630,
        alt: "T47 Pest Control - Complete Termite Solutions Victoria",
      },
    ],
  },
  alternates: {
    canonical: "https://t47pestcontrol.com.au/termite-solutions",
  },
};

export default function TermiteSolutionsPage() {
  return (
    <main className="min-h-screen">
      <TermiteSolutionsHero />
      <TermiteSolutionsBanner />
      <TermiteSolutionsGrid />
      <TermiteSolutionsContent />
      <ServiceForm />
      <TermiteSolutionsFAQ />
    </main>
  );
}
