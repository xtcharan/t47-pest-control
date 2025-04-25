"use client";

import BedBugControlHero from "@/components/hero/BedBugControlHero";
import BedBugControlBanner from "@/components/banner/BedBugControlBanner";
import BedBugControlContent from "@/components/content/BedBugControlContent";
import BedBugExterminationProcedure from "@/components/procedure/BedBugExterminationProcedure";
import BedBugLifecycleGallery from "@/components/species/BedBugLifecycleGallery";
import BedBugControlFAQ from "@/components/faq/BedBugControlFAQ";

export default function BedBugsPage() {
  return (
    <main className="min-h-screen">
      <BedBugControlHero />
      <BedBugControlBanner />
      <BedBugControlContent />
      <BedBugExterminationProcedure />
      <BedBugLifecycleGallery />
      <BedBugControlFAQ />
    </main>
  );
}
