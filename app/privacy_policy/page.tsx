import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import PrivacyPolicyGrid from "@/Components/page/privacy_policy/privacy_policy_grid";

export default function PrivacyPolicy() {
    return <div className="privacy_policy">
        <BR px={"100px"} color="white" />
        <HeadHero tab="PRIVACY AND DATA PROTECTION" heading="Fluid Financial is committed to protecting the privacy and security of our clients and their customers." sub_heading="Our systems are designed to safeguard personal and financial data through industry best practices including:" maxWidth="800px" />
        <BR px={"30px"} color="white" /> 
        <PrivacyPolicyGrid />
        <BR px={"100px"} color="white" />
    </div>
}