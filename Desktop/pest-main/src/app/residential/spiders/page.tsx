"use client";

import SpiderControlHero from "@/components/hero/SpiderControlHero";
import SpiderControlBanner from "@/components/banner/SpiderControlBanner";
import SpiderControlContent from "@/components/content/SpiderControlContent";
import SpiderInfestationSigns from "@/components/info/SpiderInfestationSigns";
import SpiderExterminationProcedure from "@/components/procedure/SpiderExterminationProcedure";
import SpiderSpeciesGallery from "@/components/species/SpiderSpeciesGallery";
import SpiderControlFAQ from "@/components/faq/SpiderControlFAQ";

export default function SpidersPage() {
  return (
    <main className="min-h-screen">
      <SpiderControlHero />
      <SpiderControlBanner />
      <SpiderControlContent />
      <SpiderInfestationSigns />
      <SpiderExterminationProcedure />
      <SpiderSpeciesGallery />
      <SpiderControlFAQ />
    </main>
  );
}
