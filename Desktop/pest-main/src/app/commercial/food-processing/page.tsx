"use client";

import FoodProcessingPestControlHero from "@/components/hero/FoodProcessingPestControlHero";
import FoodProcessingPestControlBanner from "@/components/banner/FoodProcessingPestControlBanner";
import FoodProcessingPestControlContent from "@/components/content/FoodProcessingPestControlContent";
import FoodProcessingPestControlProcedure from "@/components/procedure/FoodProcessingPestControlProcedure";
import FoodProcessingPestGallery from "@/components/species/FoodProcessingPestGallery";
import FoodProcessingPestControlFAQ from "@/components/faq/FoodProcessingPestControlFAQ";

export default function FoodProcessingPage() {
  return (
    <main className="min-h-screen">
      <FoodProcessingPestControlHero />
      <FoodProcessingPestControlBanner />
      <FoodProcessingPestControlContent />
      <FoodProcessingPestControlProcedure />
      <FoodProcessingPestGallery />
      <FoodProcessingPestControlFAQ />
    </main>
  );
}
