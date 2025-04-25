import SpiderControlContent from "@/components/content/SpiderControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Spider Control Services | T47 Pest Control",
  description: "Safe and effective spider control services for your home. Our professional treatments eliminate dangerous spiders and prevent future infestations.",
};

export default function SpiderControlPage() {
  return (
    <ResidentialLayout>
      <SpiderControlContent />
    </ResidentialLayout>
  );
}
