"use client";

import SchoolPestControlHero from "@/components/hero/SchoolPestControlHero";
import SchoolPestControlBanner from "@/components/banner/SchoolPestControlBanner";
import SchoolPestControlContent from "@/components/content/SchoolPestControlContent";
import SchoolPestControlProcedure from "@/components/procedure/SchoolPestControlProcedure";
import SchoolPestGallery from "@/components/species/SchoolPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import SchoolPestControlFAQ from "@/components/faq/SchoolPestControlFAQ";

export default function SchoolsPage() {
  return (
    <main className="min-h-screen">
      <SchoolPestControlHero />
      <SchoolPestControlBanner />
      <SchoolPestControlContent />
      <SchoolPestControlProcedure />
      <SchoolPestGallery />
      <ServiceForm />
      <SchoolPestControlFAQ />
    </main>
  );
}
