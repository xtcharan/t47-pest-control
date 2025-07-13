import { Metadata } from 'next';
import TermiteHomesInspectionHero from "@/components/hero/TermiteHomesInspectionHero";
import TermiteHomesInspectionBanner from "@/components/banner/TermiteHomesInspectionBanner";
import TermiteHomesInspectionContent from "@/components/content/TermiteHomesInspectionContent";
import TermiteHomesInspectionProcedure from "@/components/procedure/TermiteHomesInspectionProcedure";
import TermiteHomesInfoGraphic from "@/components/info/TermiteHomesInfoGraphic";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteHomesInspectionFAQ from "@/components/faq/TermiteHomesInspectionFAQ";

export const metadata: Metadata = {
  title: 'Residential Termite Inspection Services | T47 Pest Control - Home Protection',
  description: 'Specialized termite inspections for homes in Australia. Family-safe methods, comprehensive coverage, and detailed reporting. Same-day service, 7-day availability. Protect your family home with T47\'s residential termite inspection services.',
  keywords: 'residential termite inspection, home termite inspection, family home protection, house termite check, domestic termite inspection, home pest control, Australia',
};

export default function TermiteHomesInspectionPage() {
  return (
    <main className="min-h-screen">
      <TermiteHomesInspectionHero />
      <TermiteHomesInspectionBanner />
      <TermiteHomesInspectionContent />
      <TermiteHomesInfoGraphic />
      <TermiteHomesInspectionProcedure />
      <ServiceForm />
      <TermiteHomesInspectionFAQ />
    </main>
  );
}
