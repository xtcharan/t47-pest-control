"use client";

import WaspControlHero from "@/components/hero/WaspControlHero";
import WaspControlBanner from "@/components/banner/WaspControlBanner";
import WaspControlContent from "@/components/content/WaspControlContent";
import WaspExterminationProcedure from "@/components/procedure/WaspExterminationProcedure";
import WaspSpeciesGallery from "@/components/species/WaspSpeciesGallery";
import WaspControlFAQ from "@/components/faq/WaspControlFAQ";

export default function WaspsPage() {
  return (
    <main className="min-h-screen">
      <WaspControlHero />
      <WaspControlBanner />
      <WaspControlContent />
      <WaspExterminationProcedure />
      <WaspSpeciesGallery />
      <WaspControlFAQ />
    </main>
  );
}
