"use client";

import RetailPestControlHero from "@/components/hero/RetailPestControlHero";
import RetailPestControlBanner from "@/components/banner/RetailPestControlBanner";
import RetailPestControlContent from "@/components/content/RetailPestControlContent";
import RetailPestControlProcedure from "@/components/procedure/RetailPestControlProcedure";
import RetailPestGallery from "@/components/species/RetailPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import RetailPestControlFAQ from "@/components/faq/RetailPestControlFAQ";

export default function RetailPage() {
  return (
    <main className="min-h-screen">
      <RetailPestControlHero />
      <RetailPestControlBanner />
      <RetailPestControlContent />
      <RetailPestControlProcedure />
      <RetailPestGallery />
      <ServiceForm />
      <RetailPestControlFAQ />
    </main>
  );
}
