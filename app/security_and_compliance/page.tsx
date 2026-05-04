import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import CardSection from "@/Components/page/security_and_compliance/CardSection";
import ImageSection from "@/Components/page/security_and_compliance/ImageSection";

export default function SecurityAndCompliance() {
  return (
    <div className="terms-and-conditions bg-white">
        <BR px="100px" />
        <HeadHero tab="SECURITY AND COMPLIANCE INFRASTRUCTURE" heading="Healthcare organizations require payment systems that align with strict security standards" sub_heading="Fluid Financial's MedPay platform incorporates:" maxWidth="800px" />
        <BR px={"60px"} color="white" /> 
        <ImageSection />
        <BR px={"60px"} color="white" /> 
        <CardSection />
        <BR px="100px" />
    </div>
  );
}