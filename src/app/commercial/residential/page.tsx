"use client";

import ResidentialComplexPestControlHero from "@/components/hero/ResidentialComplexPestControlHero";
import ResidentialComplexPestControlBanner from "@/components/banner/ResidentialComplexPestControlBanner";
import ResidentialComplexPestControlContent from "@/components/content/ResidentialComplexPestControlContent";
import ResidentialComplexPestControlProcedure from "@/components/procedure/ResidentialComplexPestControlProcedure";
import ResidentialComplexPestGallery from "@/components/species/ResidentialComplexPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import ResidentialComplexPestControlFAQ from "@/components/faq/ResidentialComplexPestControlFAQ";

export default function ResidentialComplexPage() {
  return (
    <main className="min-h-screen">
      <ResidentialComplexPestControlHero />
      <ResidentialComplexPestControlBanner />
      <ResidentialComplexPestControlContent />
      <ResidentialComplexPestControlProcedure />
      <ResidentialComplexPestGallery />
      <ServiceForm />
      <ResidentialComplexPestControlFAQ />
    </main>
  );
}
