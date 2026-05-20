import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import AgentSteps from "@/Components/page/agent_partner_program/AgentSteps";
import InteractiveExample from "@/Components/page/agent_partner_program/InteractiveExample";
import ReferralFeaturesSection from "@/Components/page/agent_partner_program/ReferralFeaturesSection";
import QandA from "@/Components/page/faqs/QandA";
import AnalysisImpactSection from "@/Components/page/medical_payment_savings_calculator/AnalysisImpactSection";
import ExampleCalculationSection from "@/Components/page/medical_payment_savings_calculator/ExampleCalculationSection";

export default function MedicalPaymentSavingsCalculator() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <HeadHero
        tab="Saving Calculator"
        heading="How much revenue is your practice losing to payment processing?"
        sub_heading="Discover hidden inefficiencies in your billing cycle. Our precision calculator identifies exactly where capital leaks from your workflow."
        maxWidth="700px"
        maxWidthSub="700px"
      />
      <BR px={"32px"} color="white" />
      <AnalysisImpactSection />
      <BR px={"32px"} color="white" />
      <ExampleCalculationSection />
      <BR px={"100px"} color="white" />
    </div>
  );
}
