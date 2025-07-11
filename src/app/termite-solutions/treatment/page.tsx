import { Metadata } from 'next';
import TermiteControlHero from "@/components/hero/TermiteControlHero";
import TermiteControlBanner from "@/components/banner/TermiteControlBanner";
import TermiteControlContent from "@/components/content/TermiteControlContent";
import TermiteExterminationProcedure from "@/components/procedure/TermiteExterminationProcedure";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import TermiteControlFAQ from "@/components/faq/TermiteControlFAQ";

export const metadata: Metadata = {
  title: 'Expert Termite Treatment Services | T47 Pest Control - Complete Elimination',
  description: 'Professional termite treatment and control services in Australia. Advanced elimination methods, eco-friendly solutions, and guaranteed results. Same-day service, 7-day availability.',
};

export default function TermiteTreatmentPage() {
  return (
    <main className="min-h-screen">
      <TermiteControlHero />
      <TermiteControlBanner />
      <TermiteControlContent />
      <TermiteExterminationProcedure />
      <TermiteSpeciesGallery />
      <TermiteControlFAQ />
    </main>
  );
}
