import { Metadata } from 'next';
import SoilTreatmentHero from "@/components/hero/SoilTreatmentHero";
import SoilTreatmentBanner from "@/components/banner/SoilTreatmentBanner";
import SoilTreatmentContent from "@/components/content/SoilTreatmentContent";
import SoilTreatmentProcedure from "@/components/procedure/SoilTreatmentProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import SoilTreatmentFAQ from "@/components/faq/SoilTreatmentFAQ";

export const metadata: Metadata = {
  title: 'Professional Chemical Soil Treatment | T47 Pest Control - Foundation Protection',
  description: 'Advanced chemical soil treatment in Australia. Foundation protection, barrier creation, and long-term prevention. Same-day service, 7-day availability.',
};

export default function SoilTreatmentPage() {
  return (
    <main className="min-h-screen">
      <SoilTreatmentHero />
      <SoilTreatmentBanner />
      <SoilTreatmentContent />
      <SoilTreatmentProcedure />
      <ClientReviews />
      <ServiceForm />
      <SoilTreatmentFAQ />
    </main>
  );
}
