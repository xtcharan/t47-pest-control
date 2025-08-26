import { Metadata } from 'next';
import NestEliminationHero from "@/components/hero/NestEliminationHero";
import NestEliminationBanner from "@/components/banner/NestEliminationBanner";
import NestEliminationContent from "@/components/content/NestEliminationContent";
import NestEliminationProcedure from "@/components/procedure/NestEliminationProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import NestEliminationFAQ from "@/components/faq/NestEliminationFAQ";

export const metadata: Metadata = {
  title: 'Termite Nest Elimination Melbourne | Intrusive Search & Elimination',
  description: 'Intrusive termite nest elimination in Melbourne—drill and temperature probes to confirm true nests. Know when to treat the nest vs run a baiting program. Book an inspection.',
  keywords: 'termite nest elimination Melbourne, termite nest search Victoria, intrusive nest search, termite elimination Melbourne, pest control Melbourne',
  openGraph: {
    title: 'Termite Nest Elimination Melbourne | Intrusive Search & Elimination',
    description: 'Intrusive termite nest elimination in Melbourne—drill and temperature probes to confirm true nests. Know when to treat the nest vs run a baiting program.',
    type: 'website',
    locale: 'en_AU',
  },
  alternates: {
    canonical: '/termite-solutions/nest-elimination'
  }
};

export default function NestEliminationPage() {
  return (
    <main className="min-h-screen">
      <NestEliminationHero />
      <NestEliminationBanner />
      <NestEliminationContent />
      <NestEliminationProcedure />
      <ClientReviews />
      <TermiteSpeciesGallery />
      <ServiceForm />
      <NestEliminationFAQ />
    </main>
  );
}
