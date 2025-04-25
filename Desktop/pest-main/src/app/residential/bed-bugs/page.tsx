import BedBugControlContent from "@/components/content/BedBugControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Bed Bug Control Services | T47 Pest Control",
  description: "Effective bed bug control services for your home. Our professional treatments eliminate bed bugs and prevent future infestations.",
};

export default function BedBugControlPage() {
  return (
    <ResidentialLayout>
      <BedBugControlContent />
    </ResidentialLayout>
  );
}
