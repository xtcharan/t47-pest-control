"use client";

import MothControlHero from "@/components/hero/MothControlHero";
import MothControlBanner from "@/components/banner/MothControlBanner";
import MothControlContent from "@/components/content/MothControlContent";
import MothExterminationProcedure from "@/components/procedure/MothExterminationProcedure";
import MothSpeciesGallery from "@/components/species/MothSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import MothControlFAQ from "@/components/faq/MothControlFAQ";

export default function MothsPage() {
  return (
    <main className="min-h-screen">
      <MothControlHero />
      <MothControlBanner />
      <MothControlContent />
      <MothExterminationProcedure />
      <MothSpeciesGallery />
      <ServiceForm />
      <MothControlFAQ />
    </main>
  );
}
