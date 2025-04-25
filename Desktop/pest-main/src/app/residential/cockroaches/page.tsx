import CockroachControlContent from "@/components/content/CockroachControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Cockroach Control Services | T47 Pest Control",
  description: "Effective cockroach control services for your home. Our professional treatments eliminate cockroaches and prevent future infestations.",
};

export default function CockroachControlPage() {
  return (
    <ResidentialLayout>
      <CockroachControlContent />
    </ResidentialLayout>
  );
}
