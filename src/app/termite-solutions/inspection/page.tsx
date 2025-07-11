import { Metadata } from 'next';
import TermiteInspectionHero from "@/components/hero/TermiteInspectionHero";
import TermiteInspectionBanner from "@/components/banner/TermiteInspectionBanner";
import TermiteInspectionContent from "@/components/content/TermiteInspectionContent";
import TermiteInspectionProcedure from "@/components/procedure/TermiteInspectionProcedure";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import TermiteInspectionFAQ from "@/components/faq/TermiteInspectionFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Inspection Services | T47 Pest Control - Expert Detection & Advanced Technology',
  description: 'Comprehensive termite inspection services in Australia. Advanced thermal imaging, certified inspectors, detailed reports with same-day service. 7-day availability including public holidays. Eco-friendly methods with free follow-up appointments.',
  keywords: 'termite inspection, termite detection, thermal imaging, certified inspectors, Australia, same-day service, eco-friendly, free follow-up',
};

export default function TermiteInspectionPage() {
  return (
    <main className="min-h-screen">
      <TermiteInspectionHero />
      <TermiteInspectionBanner />
      <TermiteInspectionContent />
      <TermiteInspectionProcedure />
      <TermiteSpeciesGallery />
      <TermiteInspectionFAQ />
    </main>
  );
}
