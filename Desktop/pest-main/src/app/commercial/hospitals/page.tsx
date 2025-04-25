"use client";

import HospitalPestControlHero from "@/components/hero/HospitalPestControlHero";
import HospitalPestControlBanner from "@/components/banner/HospitalPestControlBanner";
import HospitalPestControlContent from "@/components/content/HospitalPestControlContent";
import HospitalPestControlProcedure from "@/components/procedure/HospitalPestControlProcedure";
import HospitalPestGallery from "@/components/species/HospitalPestGallery";
import HospitalPestControlFAQ from "@/components/faq/HospitalPestControlFAQ";

export default function HospitalsPage() {
  return (
    <main className="min-h-screen">
      <HospitalPestControlHero />
      <HospitalPestControlBanner />
      <HospitalPestControlContent />
      <HospitalPestControlProcedure />
      <HospitalPestGallery />
      <HospitalPestControlFAQ />
    </main>
  );
}
