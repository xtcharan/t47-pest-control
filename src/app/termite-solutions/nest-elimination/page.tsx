import { Metadata } from 'next';
import NestEliminationHero from "@/components/hero/NestEliminationHero";
import NestEliminationBanner from "@/components/banner/NestEliminationBanner";
import NestEliminationContent from "@/components/content/NestEliminationContent";
import NestEliminationProcedure from "@/components/procedure/NestEliminationProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import NestEliminationFAQ from "@/components/faq/NestEliminationFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Nest Elimination Services | T47 Pest Control - Complete Removal',
  description: 'Advanced termite nest elimination in Australia. Complete removal, colony destruction, and comprehensive protection. Same-day service, 7-day availability.',
};

export default function NestEliminationPage() {
  return (
    <main className="min-h-screen">
      <NestEliminationHero />
      <NestEliminationBanner />
      <NestEliminationContent />
      <NestEliminationProcedure />
      <ClientReviews />
      <ServiceForm />
      <NestEliminationFAQ />
    </main>
  );
}
