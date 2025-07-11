import { Metadata } from 'next';
import TermiteDamageRepairHero from "@/components/hero/TermiteDamageRepairHero";
import TermiteDamageRepairBanner from "@/components/banner/TermiteDamageRepairBanner";
import TermiteDamageRepairContent from "@/components/content/TermiteDamageRepairContent";
import TermiteDamageRepairProcedure from "@/components/procedure/TermiteDamageRepairProcedure";
import TermiteDamageAssessment from "@/components/info/TermiteDamageAssessment";
import TermiteDamageRepairFAQ from "@/components/faq/TermiteDamageRepairFAQ";

export const metadata: Metadata = {
  title: 'Expert Termite Damage Repair Services | T47 Pest Control - Restore Your Property',
  description: 'Professional termite damage repair and restoration services in Australia. Structural repairs, timber replacement, and complete restoration. Same-day assessment, 7-day availability.',
};

export default function TermiteDamageRepairPage() {
  return (
    <main className="min-h-screen">
      <TermiteDamageRepairHero />
      <TermiteDamageRepairBanner />
      <TermiteDamageRepairContent />
      <TermiteDamageRepairProcedure />
      <TermiteDamageAssessment />
      <TermiteDamageRepairFAQ />
    </main>
  );
}
