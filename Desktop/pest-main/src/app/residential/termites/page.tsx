"use client";

import TermiteControlHero from "@/components/hero/TermiteControlHero";
import TermiteControlBanner from "@/components/banner/TermiteControlBanner";
import TermiteControlContent from "@/components/content/TermiteControlContent";
import TermiteExterminationProcedure from "@/components/procedure/TermiteExterminationProcedure";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import TermiteControlFAQ from "@/components/faq/TermiteControlFAQ";

export default function TermitesPage() {
  return (
    <main className="min-h-screen">
      <TermiteControlHero />
      <TermiteControlBanner />
      <TermiteControlContent />
      <TermiteExterminationProcedure />
      <TermiteSpeciesGallery />
      <TermiteControlFAQ />
    </main>
  );
}
