import { Metadata } from 'next';
import TermiteBaitingHero from "@/components/hero/TermiteBaitingHero";
import TermiteBaitingBanner from "@/components/banner/TermiteBaitingBanner";
import TermiteBaitingContent from "@/components/content/TermiteBaitingContent";
import TermiteBaitingProcedure from "@/components/procedure/TermiteBaitingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import TermiteSpeciesGallery from "@/components/species/TermiteSpeciesGallery";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteBaitingFAQ from "@/components/faq/TermiteBaitingFAQ";

export const metadata: Metadata = {
  title: 'Termite Baiting Melbourne | Documented Colony Elimination',
  description: 'Termite baiting for Melbourne and Victoria—predictable, documentable colony elimination with minimal disruption. Install monitoring for ongoing protection. Book an inspection.',
  keywords: 'termite baiting Melbourne, termite colony elimination, termite monitoring, termite control Victoria, termite bait stations',
  openGraph: {
    title: 'Termite Baiting Melbourne | Documented Colony Elimination',
    description: 'Termite baiting for Melbourne and Victoria—predictable, documentable colony elimination with minimal disruption. Install monitoring for ongoing protection.',
    url: '/termite-solutions/baiting',
    type: 'website',
  },
};

export default function TermiteBaitingPage() {
  return (
    <main className="min-h-screen">
      <TermiteBaitingHero />
      <TermiteBaitingBanner />
      <TermiteBaitingContent />
      <TermiteBaitingProcedure />
      <ClientReviews />
      <TermiteSpeciesGallery />
      <ServiceForm />
      <TermiteBaitingFAQ />
    </main>
  );
}
