"use client";

import BR from "@/Components/global/br";
import CtaSection from "@/Components/global/CtaSection";
import DarkStrip from "@/Components/global/dark_strip";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import InfoGrid from "@/Components/page/healthcare_payment_processing/InfoGrid";
import RightImage from "@/Components/page/healthcare_payment_processing/RightImage";
import { healthcare_payment_processing } from "@/Data/global_data";

export default function HealthcarePaymentProcessing() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto justify-between sm:flex gap-[100px] bg-white items-center">
        <div>
          <HeadHeroLeft
            tab="HIPPA COMPLAINT PROCESSING"
            heading="Healthcare Payment Processing Built for Compliance"
            sub_heading="Elevate your practice with secure medical credit card processing and merchant services designed exclusively for the modern healthcare ecosystem."
            btn="Calculate Your Savings"
            maxWidth="430px"
            maxWidthSub="430px"
          />
        </div>
        <div className="sm:hidden block">
          <BR px={"60px"} color="white" />
        </div>
        <RightImage image="/hpp1.png" />
      </div>
      <BR px={"100px"} color="#F8FAFD" />
      <DarkStrip data={healthcare_payment_processing} />
      <BR px={"100px"} color="white" />
      <InfoGrid />
      <BR px={"100px"} color="#F8FAFD" />
      <BR px={"100px"} color="white" />
      <CtaSection />
      <BR px={"100px"} color="white" />
    </div>
  );
}
