"use client";

import ChildcarePestControlHero from "@/components/hero/ChildcarePestControlHero";
import ChildcarePestControlBanner from "@/components/banner/ChildcarePestControlBanner";
import ChildcarePestControlContent from "@/components/content/ChildcarePestControlContent";
import ChildcarePestControlProcedure from "@/components/procedure/ChildcarePestControlProcedure";
import ChildcarePestGallery from "@/components/species/ChildcarePestGallery";
import ChildcarePestControlFAQ from "@/components/faq/ChildcarePestControlFAQ";

export default function ChildcarePage() {
  return (
    <main className="min-h-screen">
      <ChildcarePestControlHero />
      <ChildcarePestControlBanner />
      <ChildcarePestControlContent />
      <ChildcarePestControlProcedure />
      <ChildcarePestGallery />
      <ChildcarePestControlFAQ />
    </main>
  );
}
