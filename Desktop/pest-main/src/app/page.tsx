import Hero from "@/components/hero/Hero";
import TopBanner from "@/components/banner/TopBanner";
import ServiceTiles from "@/components/services/ServiceTiles";
import PestSolutions from "@/components/solutions/PestSolutions";
import PestControlLeaders from "@/components/leaders/PestControlLeaders";
import SafetyFeatures from "@/components/safety/SafetyFeatures";
import ClientReviews from "@/components/reviews/ClientReviews";
import FAQ from "@/components/faq/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopBanner />
      <ServiceTiles />
      <PestSolutions />
      <PestControlLeaders />
      <SafetyFeatures />
      <ClientReviews />
      <FAQ />
    </main>
  );
}
