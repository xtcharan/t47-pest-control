"use client";

import AntControlHero from "@/components/hero/AntControlHero";
import AntControlBanner from "@/components/banner/AntControlBanner";
import AntControlContent from "@/components/content/AntControlContent";
import AntExterminationProcedure from "@/components/procedure/AntExterminationProcedure";
import AntSpeciesGallery from "@/components/species/AntSpeciesGallery";
import AntControlFAQ from "@/components/faq/AntControlFAQ";

export default function AntsPage() {
  return (
    <main className="min-h-screen">
      <AntControlHero />
      <AntControlBanner />
      <AntControlContent />
      <AntExterminationProcedure />
      <AntSpeciesGallery />
      <AntControlFAQ />
    </main>
  );
}
