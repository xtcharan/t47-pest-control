import { Metadata } from 'next';
import PrePurchaseTermiteInspectionHero from "@/components/hero/PrePurchaseTermiteInspectionHero";
import PrePurchaseTermiteInspectionBanner from "@/components/banner/PrePurchaseTermiteInspectionBanner";
import PrePurchaseTermiteInspectionContent from "@/components/content/PrePurchaseTermiteInspectionContent";
import PrePurchaseTermiteInspectionProcedure from "@/components/procedure/PrePurchaseTermiteInspectionProcedure";
import PrePurchaseInspectionInfoGraphic from "@/components/info/PrePurchaseInspectionInfoGraphic";
import PrePurchaseTermiteSpecialists from "@/components/specialists/PrePurchaseTermiteSpecialists";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import PrePurchaseTermiteInspectionFAQ from "@/components/faq/PrePurchaseTermiteInspectionFAQ";

export const metadata: Metadata = {
  title: 'Pre-Purchase Termite Inspection Services | T47 Pest Control - Protect Your Investment',
  description: 'Comprehensive pre-purchase termite inspections in Australia. Expert property assessment, detailed reports, and peace of mind before buying. Same-day service, 7-day availability. Protect your investment with T47\'s thorough pre-purchase inspections.',
  keywords: 'pre-purchase termite inspection, property inspection, termite report, building inspection, pest inspection, property assessment, termite damage, Australia',
};

export default function PrePurchaseTermiteInspectionPage() {
  return (
    <main className="min-h-screen">
      <PrePurchaseTermiteInspectionHero />
      <PrePurchaseTermiteInspectionBanner />
      <PrePurchaseTermiteInspectionContent />
      <PrePurchaseInspectionInfoGraphic />
      <PrePurchaseTermiteInspectionProcedure />
      <PrePurchaseTermiteSpecialists />
      <ClientReviews />
      <ServiceForm />
      <PrePurchaseTermiteInspectionFAQ />
    </main>
  );
}
