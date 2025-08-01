import Hero from "@/components/hero/Hero";
import TopBanner from "@/components/banner/TopBanner";
import ServiceCategories from "@/components/services/ServiceCategories";
import ServiceTiles from "@/components/services/ServiceTiles";
import PestSolutions from "@/components/solutions/PestSolutions";
import SafetyFeatures from "@/components/safety/SafetyFeatures";
import ClientReviews from "@/components/reviews/ClientReviews";
import ServiceForm from "@/components/forms/ServiceForm";
import FAQ from "@/components/faq/FAQ";
import { WebsiteSchema } from "@/components/seo/SchemaMarkup";
import HeroImagePreload from "@/components/preload/HeroImagePreload";

export default function Home() {
  return (
    <>
      <HeroImagePreload imagePath="/pest-control-hero.webp" priority={true} />
      <WebsiteSchema />
      <main className="min-h-screen">
        <Hero />
        <TopBanner />
        <ServiceTiles />
        <PestSolutions />
        <ServiceCategories />
        <SafetyFeatures />
        <ClientReviews />
        <ServiceForm />
        <FAQ />
      </main>
    </>
  );
}
