import CapabilitiesSection from "@/Components/page/home/CapabilitiesSection";
import ComparisonSection from "@/Components/page/home/ComparisonSection";
import ComplianceSection from "@/Components/page/home/ComplianceSection";
import EndorsedSection from "@/Components/page/home/EndorsedSection";
import FaqSection from "@/Components/page/home/FaqSection";
import HeroSection from "@/Components/page/home/HeroSection";
import SavingsCalculator from "@/Components/page/home/SavingsCalculator";
import SocialProofSection from "@/Components/page/home/SocialProofSection";
import SolutionsSection from "@/Components/page/home/SolutionsSection";
import TestimonialsSection from "@/Components/page/home/TestimonialsSection";
import ThreeStepSection from "@/Components/page/home/ThreeStepSection";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <EndorsedSection />
      <SavingsCalculator />
      <ComparisonSection />
      <SolutionsSection />
      <CapabilitiesSection />
      <ComplianceSection />
      <SocialProofSection />
      <ThreeStepSection />
      <TestimonialsSection />
      <FaqSection />
    </div>
  );
}
