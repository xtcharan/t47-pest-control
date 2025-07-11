"use client";

import ResidentialComplexPestControlHero from "@/components/hero/ResidentialComplexPestControlHero";
import ResidentialComplexPestControlBanner from "@/components/banner/ResidentialComplexPestControlBanner";
import ResidentialComplexPestControlContent from "@/components/content/ResidentialComplexPestControlContent";
import ResidentialComplexPestControlProcedure from "@/components/procedure/ResidentialComplexPestControlProcedure";
import ResidentialComplexPestGallery from "@/components/species/ResidentialComplexPestGallery";
import ResidentialComplexPestControlFAQ from "@/components/faq/ResidentialComplexPestControlFAQ";

export default function ResidentialComplexPage() {
  return (
    <main className="min-h-screen">
      <ResidentialComplexPestControlHero />
      <ResidentialComplexPestControlBanner />
      <ResidentialComplexPestControlContent />
      <ResidentialComplexPestControlProcedure />
      <ResidentialComplexPestGallery />
      <ResidentialComplexPestControlFAQ />
    </main>
  );
}
