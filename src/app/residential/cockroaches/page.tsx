"use client";

import CockroachControlHero from "@/components/hero/CockroachControlHero";
import CockroachControlBanner from "@/components/banner/CockroachControlBanner";
import CockroachControlContent from "@/components/content/CockroachControlContent";
import CockroachExterminationProcedure from "@/components/procedure/CockroachExterminationProcedure";
import CockroachSpeciesGuide from "@/components/species/CockroachSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import CockroachControlFAQ from "@/components/faq/CockroachControlFAQ";

export default function CockroachesPage() {
  return (
    <main className="min-h-screen">
      <CockroachControlHero />
      <CockroachControlBanner />
      <CockroachControlContent />
      <CockroachExterminationProcedure />
      <CockroachSpeciesGuide />
      <ServiceForm />
      <CockroachControlFAQ />
    </main>
  );
}
