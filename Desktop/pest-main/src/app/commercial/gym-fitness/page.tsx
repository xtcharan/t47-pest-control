"use client";

import GymFitnessPestControlHero from "@/components/hero/GymFitnessPestControlHero";
import GymFitnessPestControlBanner from "@/components/banner/GymFitnessPestControlBanner";
import GymFitnessPestControlContent from "@/components/content/GymFitnessPestControlContent";
import GymFitnessPestControlProcedure from "@/components/procedure/GymFitnessPestControlProcedure";
import GymFitnessPestGallery from "@/components/species/GymFitnessPestGallery";
import GymFitnessPestControlFAQ from "@/components/faq/GymFitnessPestControlFAQ";

export default function GymFitnessPage() {
  return (
    <main className="min-h-screen">
      <GymFitnessPestControlHero />
      <GymFitnessPestControlBanner />
      <GymFitnessPestControlContent />
      <GymFitnessPestControlProcedure />
      <GymFitnessPestGallery />
      <GymFitnessPestControlFAQ />
    </main>
  );
}
