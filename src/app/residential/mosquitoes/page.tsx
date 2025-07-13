"use client";

import MosquitoControlHero from "@/components/hero/MosquitoControlHero";
import MosquitoControlBanner from "@/components/banner/MosquitoControlBanner";
import MosquitoControlContent from "@/components/content/MosquitoControlContent";
import MosquitoExterminationProcedure from "@/components/procedure/MosquitoExterminationProcedure";
import MosquitoSpeciesGallery from "@/components/species/MosquitoSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import MosquitoControlFAQ from "@/components/faq/MosquitoControlFAQ";

export default function MosquitoesPage() {
  return (
    <main className="min-h-screen">
      <MosquitoControlHero />
      <MosquitoControlBanner />
      <MosquitoControlContent />
      <MosquitoExterminationProcedure />
      <MosquitoSpeciesGallery />
      <ServiceForm />
      <MosquitoControlFAQ />
    </main>
  );
}
