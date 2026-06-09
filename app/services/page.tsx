import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import BlogDetailsPage from "@/Components/page/resources_details/BlogDetailsPage";
import FeatureCard from "@/Components/page/services/FeatureCard";
import SuccessSection from "@/Components/page/services/SuccessSection";
import { featureData1 } from "@/Data/global_data";

export default function Services() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <HeadHero
        tab="Our Services"
        heading="Payment Solutions Built for Compliance, Control and Growth"
        sub_heading="Fluid Financial delivers a fully integrated, Ai-optimized payment ecosystem designed to power HIPAA compliant payment processing, secure payment processing, and scalable revenue growth."
        bg="white"
        maxWidth="900px"
        maxWidthSub="740px"
      />
      <HeadHero
        sub_heading="Our platform replaces outdated retail-based systems with a modern, compliant, healthcare-ready payment solution, built to protect sensitive data, reduce processing costs, and unlock new revenue opportunities for today’s businesses."
        btn="Start Partner Application"
        bg="white"
        maxWidthSub="740px"
        btn_link="https://copilot.cardconnect.com/copilot"
      />
      <BR px={"100px"} color="white" />
      <BR px={"100px"} color="#F8FAFD" />
      <div className="bg-[#F8FAFD]">
        <HeadHero
          tab="MODERN PAYMENT INFRASTRUCTURE"
          heading="Replace Legacy Systems with Secure, Healthcare-Ready Payments"
          sub_heading="Our platform replaces outdated retail-based systems with a modern, compliant, healthcare-ready payment solution, built to protect sensitive data, reduce processing costs, and unlock new revenue opportunities for today’s businesses."
          bg="#F8FAFD"
          maxWidth="900px"
          maxWidthSub="740px"
        />
        <BR px={"60px"} color="#F8FAFD" />
        <div className="space-y-[24px]">
          {featureData1.map((data, index) => {
            return <FeatureCard key={index} data={data} />;
          })}
        </div>
      </div>
      <BR px={"100px"} color="#F8FAFD" />
      <BR px={"100px"} color="white" />
      <SuccessSection />
      <BR px={"100px"} color="white" />
    </div>
  );
}
