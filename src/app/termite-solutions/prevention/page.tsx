import { Metadata } from 'next';
import TermitePreventionHero from "@/components/hero/TermitePreventionHero";
import TermitePreventionBanner from "@/components/banner/TermitePreventionBanner";
import TermitePreventionContent from "@/components/content/TermitePreventionContent";
import TermitePreventionProcedure from "@/components/procedure/TermitePreventionProcedure";
import TermitePreventionSolutions from "@/components/solutions/TermitePreventionSolutions";
import TermitePreventionFAQ from "@/components/faq/TermitePreventionFAQ";

export const metadata: Metadata = {
  title: 'Advanced Termite Prevention Services | T47 Pest Control - Protect Your Property',
  description: 'Comprehensive termite prevention solutions in Australia. Advanced barrier systems, eco-friendly treatments, and regular inspections. Same-day service, 7-day availability. Protect your investment with T47\'s proven prevention methods.',
};

export default function TermitePreventionPage() {
  return (
    <main className="min-h-screen">
      <TermitePreventionHero />
      <TermitePreventionBanner />
      <TermitePreventionContent />
      <TermitePreventionProcedure />
      <TermitePreventionSolutions />
      <TermitePreventionFAQ />
    </main>
  );
}
