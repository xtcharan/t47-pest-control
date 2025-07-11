import { Metadata } from 'next';
import TermiteBusinessInspectionHero from "@/components/hero/TermiteBusinessInspectionHero";
import TermiteBusinessInspectionBanner from "@/components/banner/TermiteBusinessInspectionBanner";
import TermiteBusinessInspectionContent from "@/components/content/TermiteBusinessInspectionContent";
import TermiteBusinessInspectionProcedure from "@/components/procedure/TermiteBusinessInspectionProcedure";
import TermiteBusinessInfoGraphic from "@/components/info/TermiteBusinessInfoGraphic";
import TermiteBusinessInspectionFAQ from "@/components/faq/TermiteBusinessInspectionFAQ";

export const metadata: Metadata = {
  title: 'Commercial Termite Inspection Services | T47 Pest Control - Business Protection',
  description: 'Professional commercial termite inspections in Australia. Minimize business disruption, comprehensive reporting, and compliance assurance. Same-day service, 7-day availability. Protect your business assets with T47\'s commercial termite inspection services.',
  keywords: 'commercial termite inspection, business termite inspection, office termite check, commercial pest control, workplace termite inspection, business protection, Australia',
};

export default function TermiteBusinessInspectionPage() {
  return (
    <main className="min-h-screen">
      <TermiteBusinessInspectionHero />
      <TermiteBusinessInspectionBanner />
      <TermiteBusinessInspectionContent />
      <TermiteBusinessInfoGraphic />
      <TermiteBusinessInspectionProcedure />
      <TermiteBusinessInspectionFAQ />
    </main>
  );
}
