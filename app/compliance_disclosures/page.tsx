import BR from "@/Components/global/br";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import LeftText from "@/Components/page/compliance_disclosures/LeftText";
import RightBox from "@/Components/page/compliance_disclosures/RightBox";

export default function ComplianceDisclosures() {
  return (
    <div className="bg-white">
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto justify-between sm:flex gap-[0px] bg-white items-center">
        <div>
          <HeadHeroLeft
            tab="COMPLIANCE DISCLOSURES"
            heading="Fluid Financial operates within applicable financial and payment network regulations."
            sub_heading="Our services are designed to support healthcare organizations with secure payment infrastructure while complying with applicable payment network rules and financial standards."
            maxWidth="700px"
            maxWidthSub="600px"
          />
          <BR px={"20px"} color="white" />
          <LeftText />
        </div>
        <div className="sm:hidden block">
          <BR px={"60px"} color="white" />
        </div>
        <RightBox />
      </div>
      <BR px={"100px"} color="white" />
    </div>
  );
}
