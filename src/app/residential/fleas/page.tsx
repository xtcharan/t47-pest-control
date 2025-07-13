"use client";

import FleaControlHero from "@/components/hero/FleaControlHero";
import FleaControlBanner from "@/components/banner/FleaControlBanner";
import FleaControlContent from "@/components/content/FleaControlContent";
import FleaControlProcedure from "@/components/procedure/FleaControlProcedure";
import FleaSpeciesGallery from "@/components/species/FleaSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import FleaControlFAQ from "@/components/faq/FleaControlFAQ";

export default function FleasPage() {
  return (
    <main className="min-h-screen">
      <FleaControlHero />
      <FleaControlBanner />
      <FleaControlContent />
      <FleaControlProcedure />
      <FleaSpeciesGallery />
      <ServiceForm />
      <FleaControlFAQ />
    </main>
  );
}
