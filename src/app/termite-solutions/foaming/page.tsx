import { Metadata } from 'next';
import TermiteFoamingHero from "@/components/hero/TermiteFoamingHero";
import TermiteFoamingBanner from "@/components/banner/TermiteFoamingBanner";
import TermiteFoamingContent from "@/components/content/TermiteFoamingContent";
import TermiteFoamingProcedure from "@/components/procedure/TermiteFoamingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteFoamingFAQ from "@/components/faq/TermiteFoamingFAQ";
import SchemaMarkup, { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termite Foaming Melbourne | Damp‑Area Treatment + Long‑Term Protection',
  description: 'Targeted termite foaming for damp voids and wall cavities in Melbourne and Victoria. Suppress activity fast, then protect with baiting or chemical soil treatments. Book an inspection.',
  keywords: 'termite foaming Melbourne, termite control Victoria, wall cavity treatment, damp area termite control, pest control Melbourne',
  openGraph: {
    title: 'Termite Foaming Melbourne | Damp‑Area Treatment + Long‑Term Protection',
    description: 'Targeted termite foaming for damp voids and wall cavities in Melbourne and Victoria. Suppress activity fast, then protect with baiting or chemical soil treatments.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: '/termite-solutions/foaming'
  }
};

export default function TermiteFoamingPage() {
  const serviceData = {
    name: "Termite Foaming Treatment",
    description: "Targeted foam for damp and concealed areas—fast suppression now, long‑term protection next.",
    areaServed: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Mornington Peninsula", "Victoria"]
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://www.t47pestcontrol.com/" },
    { name: "Termite Solutions", url: "https://www.t47pestcontrol.com/termite-solutions" },
    { name: "Termite Foaming", url: "https://www.t47pestcontrol.com/termite-solutions/foaming" }
  ];

  const faqData = [
    {
      question: "Does foaming eliminate the colony?",
      answer: "On its own, not reliably. It's designed for local suppression. Colony elimination is best achieved with a baiting program."
    },
    {
      question: "Is termite foaming safe indoors?",
      answer: "We use professional, targeted applications in accordance with Australian standards and product labels to minimise exposure and focus treatment inside concealed galleries."
    },
    {
      question: "How long does foam last?",
      answer: "The foam collapses after application, leaving a residual on gallery surfaces that continues to impact termites moving through the area."
    },
    {
      question: "Foaming or dusting—how do you choose?",
      answer: "Foaming excels in damp/void conditions; dusting suits dry, accessible strike points. Both are typically followed by baiting and/or a treated zone for long‑term security."
    },
    {
      question: "Will I still need inspections after foaming?",
      answer: "Yes. Inspections confirm suppression, check for bridging risks, and ensure ongoing protection via baiting or treated zones."
    }
  ];

  return (
    <>
      <SchemaMarkup type="service" data={serviceData} />
      <SchemaMarkup type="faq" data={faqData} />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/termite-solutions" className="text-blue-600 hover:underline">Termite Solutions</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Termite Foaming</span>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        <TermiteFoamingHero />
        <TermiteFoamingBanner />
        <TermiteFoamingContent />
        <TermiteFoamingProcedure />
        <ClientReviews />
        <TermiteSpeciesGallery />
        <ServiceForm />
        <TermiteFoamingFAQ />
      </main>
    </>
  );
}
