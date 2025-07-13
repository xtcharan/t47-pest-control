"use client";

import RatsMiceControlHero from "@/components/hero/RatsMiceControlHero";
import RatsMiceControlBanner from "@/components/banner/RatsMiceControlBanner";
import RatsMiceControlContent from "@/components/content/RatsMiceControlContent";
import RatsMiceExterminationProcedure from "@/components/procedure/RatsMiceExterminationProcedure";
import RatsMiceSpeciesGallery from "@/components/species/RatsMiceSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import RatsMiceControlFAQ from "@/components/faq/RatsMiceControlFAQ";

export default function RatsMicePage() {
  return (
    <main className="min-h-screen">
      <RatsMiceControlHero />
      <RatsMiceControlBanner />
      <RatsMiceControlContent />
      <RatsMiceExterminationProcedure />
      <RatsMiceSpeciesGallery />
      <ServiceForm />
      <RatsMiceControlFAQ />
    </main>
  );
}
