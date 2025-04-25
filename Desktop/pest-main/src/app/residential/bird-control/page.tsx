import BirdControlHero from "@/components/hero/BirdControlHero";
import BirdControlBanner from "@/components/banner/BirdControlBanner";
import BirdControlContent from "@/components/content/BirdControlContent";
import BirdControlSolutions from "@/components/solutions/BirdControlSolutions";
import BirdSpeciesGuide from "@/components/species/BirdSpeciesGuide";
import BirdControlFAQ from "@/components/faq/BirdControlFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Bird Control Services | Humane Bird Management | T47 Pest Control",
  description: "Effective, humane bird control solutions to protect your property from damage. Our bird management services use environmentally responsible methods that comply with wildlife regulations.",
  keywords: "bird control, bird management, pigeon control, bird deterrents, bird netting, bird spikes, humane bird removal, bird droppings cleanup, pest control, T47 Pest Control",
};

export default function BirdControlPage() {
  return (
    <main className="min-h-screen">
      <BirdControlHero />
      <BirdControlBanner />
      <BirdControlContent />
      <BirdControlSolutions />
      <BirdSpeciesGuide />
      <BirdControlFAQ />
    </main>
  );
}
