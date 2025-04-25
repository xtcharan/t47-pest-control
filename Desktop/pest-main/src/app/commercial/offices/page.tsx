"use client";

import OfficePestControlHero from "@/components/hero/OfficePestControlHero";
import OfficePestControlBanner from "@/components/banner/OfficePestControlBanner";
import OfficePestControlContent from "@/components/content/OfficePestControlContent";
import OfficePestControlProcedure from "@/components/procedure/OfficePestControlProcedure";
import OfficePestGallery from "@/components/species/OfficePestGallery";
import OfficePestControlFAQ from "@/components/faq/OfficePestControlFAQ";

export default function OfficesPage() {
  return (
    <main className="min-h-screen">
      <OfficePestControlHero />
      <OfficePestControlBanner />
      <OfficePestControlContent />
      <OfficePestControlProcedure />
      <OfficePestGallery />
      <OfficePestControlFAQ />
    </main>
  );
}
