"use client";

import ElderlyCarePestControlHero from "@/components/hero/ElderlyCarePestControlHero";
import ElderlyCarePestControlBanner from "@/components/banner/ElderlyCarePestControlBanner";
import ElderlyCarePestControlContent from "@/components/content/ElderlyCarePestControlContent";
import ElderlyCarePestControlProcedure from "@/components/procedure/ElderlyCarePestControlProcedure";
import ElderlyCarePestGallery from "@/components/species/ElderlyCarePestGallery";
import ElderlyCarePestControlFAQ from "@/components/faq/ElderlyCarePestControlFAQ";

export default function ElderlyCarePage() {
  return (
    <main className="min-h-screen">
      <ElderlyCarePestControlHero />
      <ElderlyCarePestControlBanner />
      <ElderlyCarePestControlContent />
      <ElderlyCarePestControlProcedure />
      <ElderlyCarePestGallery />
      <ElderlyCarePestControlFAQ />
    </main>
  );
}
