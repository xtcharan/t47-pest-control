import { Metadata } from 'next';
import TermiteDustingHero from "@/components/hero/TermiteDustingHero";
import TermiteDustingBanner from "@/components/banner/TermiteDustingBanner";
import TermiteDustingContent from "@/components/content/TermiteDustingContent";
import TermiteDustingProcedure from "@/components/procedure/TermiteDustingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteDustingFAQ from "@/components/faq/TermiteDustingFAQ";
import SchemaMarkup, { BreadcrumbSchema } from "@/components/seo/SchemaMarkup";
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termite Dusting Melbourne | Targeted Knockdown + Long‑Term Protection',
  description: 'Targeted termite dusting in Melbourne and Victoria for rapid knockdown. Pair with baiting or soil treatments to eliminate colonies and prevent re‑infestation. Book an inspection.',
  keywords: 'termite dusting Melbourne, termite control Victoria, termite treatment, pest control Melbourne, termite elimination',
  openGraph: {
    title: 'Termite Dusting Melbourne | Targeted Knockdown + Long‑Term Protection',
    description: 'Targeted termite dusting in Melbourne and Victoria for rapid knockdown. Pair with baiting or soil treatments to eliminate colonies and prevent re‑infestation.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: '/termite-solutions/dusting'
  }
};

export default function TermiteDustingPage() {
  const serviceData = {
    name: "Termite Dusting Treatment",
    description: "Modern, targeted dusting to suppress active termites fast—then lock in long‑term protection with baiting or soil treatments.",
    areaServed: ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Mornington Peninsula", "Victoria"]
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://www.t47pestcontrol.com/" },
    { name: "Termite Solutions", url: "https://www.t47pestcontrol.com/termite-solutions" },
    { name: "Termite Dusting", url: "https://www.t47pestcontrol.com/termite-solutions/dusting" }
  ];

  const faqData = [
    {
      question: "Is termite dusting enough on its own?",
      answer: "Generally no. It's designed to suppress active termites quickly but usually needs baiting or a chemical soil treatment to achieve elimination or long‑term prevention."
    },
    {
      question: "Does dusting kill the Queen?",
      answer: "Not reliably as a stand‑alone. Non‑repellent dusts spread within workings but a predictable Queen/colony kill is better achieved with a baiting program."
    },
    {
      question: "Is dusting safe inside homes?",
      answer: "We use professional products and targeted application according to Australian standards and product labels to minimise exposure and maximise efficacy."
    },
    {
      question: "Dusting or foaming—how do you choose?",
      answer: "Dusting suits dry, accessible galleries; foaming excels in damp or tight voids. Both are tactical steps ahead of a long‑term management system."
    },
    {
      question: "How soon will termite activity drop?",
      answer: "Often within days to weeks at the treated strike points, followed by installation of baiting or soil treatment for lasting protection."
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
            <span className="text-gray-700">Termite Dusting</span>
          </div>
        </div>
      </nav>

      <main className="min-h-screen">
        <TermiteDustingHero />
        <TermiteDustingBanner />
        <TermiteDustingContent />
        <TermiteDustingProcedure />
        <ClientReviews />
        <TermiteSpeciesGallery />
        <ServiceForm />
        <TermiteDustingFAQ />
      </main>
    </>
  );
}
