import RatControlContent from "@/components/content/RatControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Rat Control Services | T47 Pest Control",
  description: "Effective rat control services for your home. Our professional treatments eliminate rats and prevent future infestations.",
};

export default function RatControlPage() {
  return (
    <ResidentialLayout>
      <RatControlContent />
    </ResidentialLayout>
  );
}
