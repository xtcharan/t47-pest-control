import TermiteControlContent from "@/components/content/TermiteControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Termite Control Services | T47 Pest Control",
  description: "Protect your home from termite damage with our professional termite control services. Comprehensive inspections, treatments, and prevention.",
};

export default function TermiteControlPage() {
  return (
    <ResidentialLayout>
      <TermiteControlContent />
    </ResidentialLayout>
  );
}
