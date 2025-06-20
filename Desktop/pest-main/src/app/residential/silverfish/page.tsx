"use client";

import SilverfishControlHero from "@/components/hero/SilverfishControlHero";
import SilverfishControlBanner from "@/components/banner/SilverfishControlBanner";
import SilverfishControlContent from "@/components/content/SilverfishControlContent";
import SilverfishControlProcedure from "@/components/procedure/SilverfishControlProcedure";
import SilverfishIdentificationGuide from "@/components/info/SilverfishIdentificationGuide";
import SilverfishControlFAQ from "@/components/faq/SilverfishControlFAQ";

export default function SilverfishPage() {
  return (
    <main className="min-h-screen">
      <SilverfishControlHero />
      <SilverfishControlBanner />
      <SilverfishControlContent />
      <SilverfishControlProcedure />
      <SilverfishIdentificationGuide />
      <SilverfishControlFAQ />
    </main>
  );
}
