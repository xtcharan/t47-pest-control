import { Metadata } from 'next';
import TermiteFoamingHero from "@/components/hero/TermiteFoamingHero";
import TermiteFoamingBanner from "@/components/banner/TermiteFoamingBanner";
import TermiteFoamingContent from "@/components/content/TermiteFoamingContent";
import TermiteFoamingProcedure from "@/components/procedure/TermiteFoamingProcedure";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import TermiteFoamingFAQ from "@/components/faq/TermiteFoamingFAQ";

export const metadata: Metadata = {
  title: 'Professional Termite Foaming Solutions | T47 Pest Control - Precision Treatment',
  description: 'Advanced termite foaming solutions in Australia. Precision application, deep penetration, and effective elimination. Same-day service, 7-day availability.',
};

export default function TermiteFoamingPage() {
  return (
    <main className="min-h-screen">
      <TermiteFoamingHero />
      <TermiteFoamingBanner />
      <TermiteFoamingContent />
      <TermiteFoamingProcedure />
      <ClientReviews />
      <ServiceForm />
      <TermiteFoamingFAQ />
    </main>
  );
}
