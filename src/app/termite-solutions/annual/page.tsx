import { Metadata } from 'next';
import AnnualTermiteInspectionHero from "@/components/hero/AnnualTermiteInspectionHero";
import AnnualTermiteInspectionBanner from "@/components/banner/AnnualTermiteInspectionBanner";
import AnnualTermiteInspectionContent from "@/components/content/AnnualTermiteInspectionContent";
import AnnualTermiteInspectionProcedure from "@/components/procedure/AnnualTermiteInspectionProcedure";
import AnnualInspectionInfoGraphic from "@/components/info/AnnualInspectionInfoGraphic";
import AnnualTermiteInspectionFAQ from "@/components/faq/AnnualTermiteInspectionFAQ";

export const metadata: Metadata = {
  title: 'Annual Termite Inspection Services | T47 Pest Control - Ongoing Protection',
  description: 'Regular annual termite inspections in Australia. Comprehensive monitoring, early detection, and preventive care. Same-day service, 7-day availability. Maintain your property\'s protection with T47\'s annual inspection program.',
  keywords: 'annual termite inspection, yearly termite check, regular termite inspection, termite monitoring, preventative inspection, ongoing protection, Australia',
};

export default function AnnualTermiteInspectionPage() {
  return (
    <main className="min-h-screen">
      <AnnualTermiteInspectionHero />
      <AnnualTermiteInspectionBanner />
      <AnnualTermiteInspectionContent />
      <AnnualInspectionInfoGraphic />
      <AnnualTermiteInspectionProcedure />
      <AnnualTermiteInspectionFAQ />
    </main>
  );
}
