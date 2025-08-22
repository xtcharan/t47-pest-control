import { Metadata } from 'next';
import TermiteBaitingHero from "@/components/hero/TermiteBaitingHero";
import TermiteBaitingBanner from "@/components/banner/TermiteBaitingBanner";
import TermiteBaitingContent from "@/components/content/TermiteBaitingContent";
import TermiteBaitingProcedure from "@/components/procedure/TermiteBaitingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteBaitingFAQ from "@/components/faq/TermiteBaitingFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Baiting Systems | T47 Pest Control - Strategic Elimination',
  description: 'Advanced termite baiting systems in Australia. Strategic placement, colony elimination, and ongoing protection. Same-day service, 7-day availability.',
};

export default function TermiteBaitingPage() {
  return (
    <main className="min-h-screen">
      <TermiteBaitingHero />
      <TermiteBaitingBanner />
      <TermiteBaitingContent />
      <TermiteBaitingProcedure />
      <ClientReviews />
      <ServiceForm />
      <TermiteBaitingFAQ />
    </main>
  );
}
