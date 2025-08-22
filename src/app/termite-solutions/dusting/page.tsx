import { Metadata } from 'next';
import TermiteDustingHero from "@/components/hero/TermiteDustingHero";
import TermiteDustingBanner from "@/components/banner/TermiteDustingBanner";
import TermiteDustingContent from "@/components/content/TermiteDustingContent";
import TermiteDustingProcedure from "@/components/procedure/TermiteDustingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteDustingFAQ from "@/components/faq/TermiteDustingFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Dusting Treatment Services | T47 Pest Control - Targeted Protection',
  description: 'Advanced termite dusting treatment in Australia. Targeted application, effective elimination, and long-lasting protection. Same-day service, 7-day availability.',
};

export default function TermiteDustingPage() {
  return (
    <main className="min-h-screen">
      <TermiteDustingHero />
      <TermiteDustingBanner />
      <TermiteDustingContent />
      <TermiteDustingProcedure />
      <ClientReviews />
      <ServiceForm />
      <TermiteDustingFAQ />
    </main>
  );
}
