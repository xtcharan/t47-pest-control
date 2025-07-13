import FlyControlHero from "@/components/hero/FlyControlHero";
import FlyControlBanner from "@/components/banner/FlyControlBanner";
import FlyControlContent from "@/components/content/FlyControlContent";
import FlyControlProcedure from "@/components/procedure/FlyControlProcedure";
import FlySpeciesGuide from "@/components/species/FlySpeciesGuide";
import ServiceForm from "@/components/forms/ServiceForm";
import FlyControlFAQ from "@/components/faq/FlyControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Fly Control Services | Fly Extermination | T47 Pest Control",
  description: "Expert fly control services for all types of fly infestations. Our comprehensive approach includes source elimination, targeted treatments, and prevention strategies for long-term protection.",
  keywords: "fly control, fly extermination, house flies, fruit flies, drain flies, fly infestation, fly prevention, pest control, T47 Pest Control",
};

export default function FliesPage() {
  return (
    <main className="min-h-screen">
      <FlyControlHero />
      <FlyControlBanner />
      <FlyControlContent />
      <FlyControlProcedure />
      <FlySpeciesGuide />
      <ServiceForm />
      <FlyControlFAQ />
    </main>
  );
}
