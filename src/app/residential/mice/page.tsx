import MouseControlContent from "@/components/content/MouseControlContent";
import ResidentialLayout from "@/components/layout/ResidentialLayout";

export const metadata = {
  title: "Professional Mouse Control Services | T47 Pest Control",
  description: "Effective mouse control services for your home. Our professional treatments eliminate mice and prevent future infestations.",
};

export default function MouseControlPage() {
  return (
    <ResidentialLayout>
      <MouseControlContent />
    </ResidentialLayout>
  );
}
