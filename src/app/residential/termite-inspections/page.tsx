"use client";

import TermiteInspectionHero from "@/components/hero/TermiteInspectionHero";
import TermiteInspectionBanner from "@/components/banner/TermiteInspectionBanner";
import TermiteInspectionContent from "@/components/content/TermiteInspectionContent";
import TermiteInspectionProcedure from "@/components/procedure/TermiteInspectionProcedure";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteInspectionFAQ from "@/components/faq/TermiteInspectionFAQ";

export default function TermiteInspectionsPage() {
  return (
    <main className="min-h-screen">
      <TermiteInspectionHero />
      <TermiteInspectionBanner />
      <TermiteInspectionContent />
      <TermiteInspectionProcedure />
      <ServiceForm />
      <TermiteInspectionFAQ />
    </main>
  );
}
