"use client";

import BR from "@/Components/global/br";
import CtaSection from "@/Components/global/CtaSection";
import DarkStrip from "@/Components/global/dark_strip";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import HeadHeroRight from "@/Components/global/head_hero_right";
import InfoGrid from "@/Components/page/healthcare_payment_processing/InfoGrid";
import RightImage from "@/Components/page/healthcare_payment_processing/RightImage";
import DownloadResourceSection from "@/Components/page/hipaa/DownloadResourceSection";
import RiskCardsSection from "@/Components/page/hipaa/RiskCardsSection";
import SecurityCardsSection from "@/Components/page/hipaa/SecurityCardsSection";
import { healthcare_payment_processing } from "@/Data/global_data";

export default function HIPPA() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto justify-between sm:flex gap-[100px] bg-white items-center">
        <div>
          <HeadHeroLeft
            tab="The Fluid Bridge to Health."
            heading="Healthcare payments carry compliance risk. Most processors ignore it."
            sub_heading="Experience the intersection of high-end editorial design and robust financial healthcare architecture. Manage wellness, claims, and portfolios in one seamless flow."
            maxWidth="700px"
            maxWidthSub="430px"
          />
        </div>
        <div className="sm:hidden block">
          <BR px={"60px"} color="white" />
        </div>
        <RightImage image="/ImageWithFallback.png" show_card={false} />
      </div>
      <BR px={"100px"} color="white" />
      <BR px={"100px"} color="#F8FAFD" />
      <div className="bg-[#f8fafd] w-full">
        <div className="max-w-7xl mx-auto justify-between sm:flex bg-[#F8FAFD] items-end">
        <HeadHeroLeft
          tab="Invisible Liabilities"
          heading="Risks and compliance you are exposed to"
          maxWidth="550px"
          maxWidthSub="430px"
          bg="#F8FAFD"
        />
        <HeadHeroRight
          sub_heading="We've stripped away the complexity of traditional insurance to give you a clinical focus with financial precision."
          maxWidth="700px"
          maxWidthSub="460px"
          bg="#F8FAFD"
        />
      </div>
      </div>
      <BR px={"60px"} color="#F8FAFD" />
      <RiskCardsSection />
      <BR px={"100px"} color="#F8FAFD" />
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto justify-between sm:flex items-end">
        <HeadHeroLeft
          tab="Features"
          heading="Fluid Financial Protections"
          maxWidth="1000px"
        />
        <HeadHeroRight
          btn="Request Compliance and Payment Audit"
        />
      </div>
      <BR px={"60px"} color="white" />
      <SecurityCardsSection />
      <BR px={"60px"} color="white" />
      <DownloadResourceSection />
      <BR px={"100px"} color="white" />
    </div>
  );
}
