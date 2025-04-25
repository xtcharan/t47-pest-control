import WaspControlContent from "@/components/content/WaspControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Wasp Control Services | T47 Pest Control",
  description: "Safe and effective wasp control services for your home. Our professional treatments remove wasp nests and prevent future infestations.",
};

export default function WaspControlPage() {
  return (
    <ResidentialLayout>
      <WaspControlContent />
    </ResidentialLayout>
  );
}
