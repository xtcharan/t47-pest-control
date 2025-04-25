"use client";

import BeeControlHero from "@/components/hero/BeeControlHero";
import BeeControlBanner from "@/components/banner/BeeControlBanner";
import BeeControlContent from "@/components/content/BeeControlContent";
import BeeManagementProcedure from "@/components/procedure/BeeManagementProcedure";
import BeeSpeciesGallery from "@/components/species/BeeSpeciesGallery";
import BeeControlFAQ from "@/components/faq/BeeControlFAQ";

export default function BeesPage() {
  return (
    <main className="min-h-screen">
      <BeeControlHero />
      <BeeControlBanner />
      <BeeControlContent />
      <BeeManagementProcedure />
      <BeeSpeciesGallery />
      <BeeControlFAQ />
    </main>
  );
}
