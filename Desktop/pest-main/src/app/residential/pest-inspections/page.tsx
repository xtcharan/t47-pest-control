"use client";

import PestInspectionHero from "@/components/hero/PestInspectionHero";
import PestInspectionBanner from "@/components/banner/PestInspectionBanner";
import PestInspectionContent from "@/components/content/PestInspectionContent";

import PestInspectionFAQ from "@/components/faq/PestInspectionFAQ";

export default function PestInspectionsPage() {
  return (
    <main className="min-h-screen">
      <PestInspectionHero />
      <PestInspectionBanner />
      <PestInspectionContent />
      <PestInspectionFAQ />
    </main>
  );
}
