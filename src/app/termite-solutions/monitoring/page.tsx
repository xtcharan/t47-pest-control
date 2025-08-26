import { Metadata } from 'next';
import TermiteMonitoringHero from "@/components/hero/TermiteMonitoringHero";
import TermiteMonitoringBanner from "@/components/banner/TermiteMonitoringBanner";
import TermiteMonitoringContent from "@/components/content/TermiteMonitoringContent";
import TermiteMonitoringProcedure from "@/components/procedure/TermiteMonitoringProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteMonitoringFAQ from "@/components/faq/TermiteMonitoringFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Monitoring Services | T47 Pest Control - Continuous Protection',
  description: 'Advanced termite monitoring systems in Australia. 24/7 surveillance, early detection technology, and proactive protection. Same-day service, 7-day availability.',
};

export default function TermiteMonitoringPage() {
  return (
    <main className="min-h-screen">
      <TermiteMonitoringHero />
      <TermiteMonitoringBanner />
      <TermiteMonitoringContent />
      <TermiteMonitoringProcedure />
      <ClientReviews />
      <TermiteSpeciesGallery />
      <ServiceForm />
      <TermiteMonitoringFAQ />
    </main>
  );
}
