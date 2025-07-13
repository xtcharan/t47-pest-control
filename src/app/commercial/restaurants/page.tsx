"use client";

import RestaurantPestControlHero from "@/components/hero/RestaurantPestControlHero";
import RestaurantPestControlBanner from "@/components/banner/RestaurantPestControlBanner";
import RestaurantPestControlContent from "@/components/content/RestaurantPestControlContent";
import RestaurantPestControlProcedure from "@/components/procedure/RestaurantPestControlProcedure";
import RestaurantPestGallery from "@/components/species/RestaurantPestGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import RestaurantPestControlFAQ from "@/components/faq/RestaurantPestControlFAQ";

export default function RestaurantsPage() {
  return (
    <main className="min-h-screen">
      <RestaurantPestControlHero />
      <RestaurantPestControlBanner />
      <RestaurantPestControlContent />
      <RestaurantPestControlProcedure />
      <RestaurantPestGallery />
      <ServiceForm />
      <RestaurantPestControlFAQ />
    </main>
  );
}
