"use client";

import ConstructionSitePestControlHero from "@/components/hero/ConstructionSitePestControlHero";
import ConstructionSitePestControlBanner from "@/components/banner/ConstructionSitePestControlBanner";
import ConstructionSitePestControlContent from "@/components/content/ConstructionSitePestControlContent";
import ConstructionSitePestControlProcedure from "@/components/procedure/ConstructionSitePestControlProcedure";
import ConstructionSitePestGallery from "@/components/species/ConstructionSitePestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import ConstructionSitePestControlFAQ from "@/components/faq/ConstructionSitePestControlFAQ";

export default function ConstructionSitesPage() {
  return (
    <main className="min-h-screen">
      <ConstructionSitePestControlHero />
      <ConstructionSitePestControlBanner />
      <ConstructionSitePestControlContent />
      <ConstructionSitePestControlProcedure />
      <ConstructionSitePestGallery />
      <ServiceForm />
      <ConstructionSitePestControlFAQ />
    </main>
  );
}
