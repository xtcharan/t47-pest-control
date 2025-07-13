"use client";

import ITCenterPestControlHero from "@/components/hero/ITCenterPestControlHero";
import ITCenterPestControlBanner from "@/components/banner/ITCenterPestControlBanner";
import ITCenterPestControlContent from "@/components/content/ITCenterPestControlContent";
import ITCenterPestControlProcedure from "@/components/procedure/ITCenterPestControlProcedure";
import ITCenterPestGallery from "@/components/species/ITCenterPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import ITCenterPestControlFAQ from "@/components/faq/ITCenterPestControlFAQ";

export default function ITCentersPage() {
  return (
    <main className="min-h-screen">
      <ITCenterPestControlHero />
      <ITCenterPestControlBanner />
      <ITCenterPestControlContent />
      <ITCenterPestControlProcedure />
      <ITCenterPestGallery />
      <ServiceForm />
      <ITCenterPestControlFAQ />
    </main>
  );
}
