import FleaControlContent from "@/components/content/FleaControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Flea Control Services | T47 Pest Control",
  description: "Effective flea control services for your home. Our professional treatments eliminate fleas and prevent future infestations.",
};

export default function FleaControlPage() {
  return (
    <ResidentialLayout>
      <FleaControlContent />
    </ResidentialLayout>
  );
}
