import RodentControlHero from "@/components/hero/RodentControlHero";
import RodentControlBanner from "@/components/banner/RodentControlBanner";
import RodentControlContent from "@/components/content/RodentControlContent";
import RodentControlProcedure from "@/components/procedure/RodentControlProcedure";
import RodentComparisonGuide from "@/components/comparison/RodentComparisonGuide";
import RodentControlFAQ from "@/components/faq/RodentControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Rodent Control Services | Mice & Rat Removal | T47 Pest Control",
  description: "Expert rodent control services for mice and rat infestations. Our comprehensive approach includes inspection, exclusion, elimination, and prevention to keep your home rodent-free.",
  keywords: "rodent control, rat removal, mice extermination, rodent exclusion, rat infestation, mouse control, rodent prevention, pest control, T47 Pest Control",
};

export default function RodentsPage() {
  return (
    <main className="min-h-screen">
      <RodentControlHero />
      <RodentControlBanner />
      <RodentControlContent />
      <RodentControlProcedure />
      <RodentComparisonGuide />
      <RodentControlFAQ />
    </main>
  );
}
