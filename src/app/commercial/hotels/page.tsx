"use client";

import HotelPestControlHero from "@/components/hero/HotelPestControlHero";
import HotelPestControlBanner from "@/components/banner/HotelPestControlBanner";
import HotelPestControlContent from "@/components/content/HotelPestControlContent";
import HotelPestControlProcedure from "@/components/procedure/HotelPestControlProcedure";
import HotelPestGallery from "@/components/species/HotelPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import HotelPestControlFAQ from "@/components/faq/HotelPestControlFAQ";

export default function HotelsPage() {
  return (
    <main className="min-h-screen">
      <HotelPestControlHero />
      <HotelPestControlBanner />
      <HotelPestControlContent />
      <HotelPestControlProcedure />
      <HotelPestGallery />
      <ServiceForm />
      <HotelPestControlFAQ />
    </main>
  );
}
