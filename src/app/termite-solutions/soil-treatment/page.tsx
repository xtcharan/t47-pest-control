import { Metadata } from 'next';
import SoilTreatmentHero from "@/components/hero/SoilTreatmentHero";
import SoilTreatmentBanner from "@/components/banner/SoilTreatmentBanner";
import SoilTreatmentContent from "@/components/content/SoilTreatmentContent";
import SoilTreatmentProcedure from "@/components/procedure/SoilTreatmentProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import SoilTreatmentFAQ from "@/components/faq/SoilTreatmentFAQ";

export const metadata: Metadata = {
  title: 'Chemical Soil Treatments Melbourne | Continuous Treated Zones',
  description: 'Create a continuous termite treated zone around your Melbourne home to block concealed entry. Repellent and non‑repellent options. Book an inspection.',
};

export default function SoilTreatmentPage() {
  return (
    <main className="min-h-screen">
      <SoilTreatmentHero />
      <SoilTreatmentBanner />
      <SoilTreatmentContent />
      <SoilTreatmentProcedure />
      <ClientReviews />
      <TermiteSpeciesGallery />
      <ServiceForm />
      <SoilTreatmentFAQ />
    </main>
  );
}
