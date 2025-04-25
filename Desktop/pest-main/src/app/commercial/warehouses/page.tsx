"use client";

import WarehousePestControlHero from "@/components/hero/WarehousePestControlHero";
import WarehousePestControlBanner from "@/components/banner/WarehousePestControlBanner";
import WarehousePestControlContent from "@/components/content/WarehousePestControlContent";
import WarehousePestControlProcedure from "@/components/procedure/WarehousePestControlProcedure";
import WarehousePestGallery from "@/components/species/WarehousePestGallery";
import WarehousePestControlFAQ from "@/components/faq/WarehousePestControlFAQ";

export default function WarehousesPage() {
  return (
    <main className="min-h-screen">
      <WarehousePestControlHero />
      <WarehousePestControlBanner />
      <WarehousePestControlContent />
      <WarehousePestControlProcedure />
      <WarehousePestGallery />
      <WarehousePestControlFAQ />
    </main>
  );
}
