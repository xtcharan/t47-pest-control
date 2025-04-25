import PossumControlHero from "@/components/hero/PossumControlHero";
import PossumControlBanner from "@/components/banner/PossumControlBanner";
import PossumControlContent from "@/components/content/PossumControlContent";
import PossumControlProcedure from "@/components/procedure/PossumControlProcedure";
import PossumBehaviorGuide from "@/components/info/PossumBehaviorGuide";
import PossumControlFAQ from "@/components/faq/PossumControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Possum Control Services | Humane Possum Removal | T47 Pest Control",
  description: "Humane possum control and removal services. Our wildlife specialists use ethical, non-lethal methods to safely remove possums and prevent their return to your property.",
  keywords: "possum control, possum removal, humane wildlife management, possum in roof, possum damage, wildlife control, possum prevention, pest control, T47 Pest Control",
};

export default function PossumsPage() {
  return (
    <main className="min-h-screen">
      <PossumControlHero />
      <PossumControlBanner />
      <PossumControlContent />
      <PossumControlProcedure />
      <PossumBehaviorGuide />
      <PossumControlFAQ />
    </main>
  );
}
