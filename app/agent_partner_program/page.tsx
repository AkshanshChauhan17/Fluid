import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import AgentSteps from "@/Components/page/agent_partner_program/AgentSteps";
import InteractiveExample from "@/Components/page/agent_partner_program/InteractiveExample";
import ReferralFeaturesSection from "@/Components/page/agent_partner_program/ReferralFeaturesSection";
import QandA from "@/Components/page/faqs/QandA";

export default function AgentPartnerProgram() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <HeadHero
        tab="THE ARCHITECTURAL LEDGER"
        heading="Build recurring revenue as a payment infrastructure"
        sub_heading="Experience the intersection of high-end editorial design and robust financial healthcare architecture. Manage wellness, claims, and portfolios in one seamless flow."
        btn="Start Partner Application"
        maxWidth="700px"
        maxWidthSub="700px"
      />
      <BR px={"60px"} color="white" />
      <BR px={"60px"} color="#F8FAFD" />
      <div className="bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto justify-between items-center sm:flex gap-[24px]">
          <HeadHeroLeft
            tab="Agent Workflow"
            heading="A streamlined path from application to processing."
            maxWidth="600px"
            bg="#F8FAFD"
          />
          <AgentSteps />
        </div>
      </div>
      <BR px={"60px"} color="#F8FAFD" />
      <InteractiveExample />
      <BR px={"60px"} color="#F8FAFD" />
      <BR px={"100px"} color="white" />
      <HeadHero
        tab="Enterprise Capabilities"
        heading="Partner Dashboard Features"
        maxWidth="700px"
      />
      <BR px={"60px"} color="white" />
      <ReferralFeaturesSection />
      <BR px={"100px"} color="white" />
    </div>
  );
}
