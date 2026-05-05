import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import FeatureGrid from "@/Components/page/resources_or_knowledge_bas/FeatureGrid";

export default function ResourcesOrKnowledgeBas() {
    return <div className="privacy_policy bg-white">
        <BR px={"100px"} color="white" />
        <HeadHero tab="HEALTHCARE PAYMENT INSIGHTS" heading="Explore resources designed to help medical practices better understand payment infrastructure and compliance." sub_heading="Topics include:" maxWidth="900px" />
        <BR px={"30px"} color="white" /> 
        <FeatureGrid />
        <BR px={"100px"} color="white" />
    </div>
}