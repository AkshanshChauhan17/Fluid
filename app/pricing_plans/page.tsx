"use client";

import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import PricingBottom from "@/Components/page/pricing_plans/PricingBottom";
import PricingOptionCardLeft from "@/Components/page/pricing_plans/PricingOptionCardLeft";
import PricingOptionCardRight from "@/Components/page/pricing_plans/PricingOptionCardRight";

export default function pricing_plans() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <HeadHero
        tab="Pricing Plans"
        heading="Simple, Transparent Pricing"
        sub_heading="Choose the right processing model for your business. Whether you want to eliminate fees entirely or prefer a traditional predictable rate, we have you covered."
        maxWidth="600px"
        maxWidthSub="650px"
      />
      <div className="max-w-7xl mx-auto justify-between sm:flex gap-[100px] bg-white items-center"></div>
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto justify-between sm:flex gap-[24px]">
        <PricingOptionCardLeft />
        <PricingOptionCardRight />
      </div>
      <BR px={"60px"} color="white" />
      <BR px={"60px"} color="#F8FAFD" />
      <PricingBottom />
      <BR px={"60px"} color="#F8FAFD" />
      <BR px={"100px"} color="white" />
    </div>
  );
}
