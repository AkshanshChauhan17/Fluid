import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import AgentSteps from "@/Components/page/agent_partner_program/AgentSteps";
import InteractiveExample from "@/Components/page/agent_partner_program/InteractiveExample";
import ReferralFeaturesSection from "@/Components/page/agent_partner_program/ReferralFeaturesSection";
import QandA from "@/Components/page/faqs/QandA";
import AnalysisImpactSection from "@/Components/page/medical_payment_savings_calculator/AnalysisImpactSection";
import ExampleCalculationSection from "@/Components/page/medical_payment_savings_calculator/ExampleCalculationSection";
import BlogDetailsPage from "@/Components/page/resources_details/BlogDetailsPage";
import RelatedBlogsSection from "@/Components/page/resources_details/RelatedBlogsSection";

export default function ResourcesDetails() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <BlogDetailsPage id={1} />
      <BR px={"100px"} color="white" />
      <BR px={"100px"} color="#F8FAFD" />
      <div className="bg-[#F8FAFD]">
        <HeadHero tab="BLOGS" heading="Other Resources" bg="#F8FAFD" />
        <BR px={"60px"} color="#F8FAFD" />
        <RelatedBlogsSection />
        <BR px={"100px"} color="#F8FAFD" />
      </div>
    </div>
  );
}
