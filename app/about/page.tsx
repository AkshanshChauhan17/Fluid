import BR from "@/Components/global/br";
import AboutGrid from "@/Components/page/about/about_grid";
import HeadHero from "@/Components/global/head_hero";

export default function About() {
    return <div className="about">
        <BR px={"100px"} color="white" /> 
        <HeadHero tab="ABOUT US" heading="Financial Technology Built for Healthcare" maxWidth="500px" />
        <BR px={"30px"} color="white" /> 
        <AboutGrid />
        <BR px={"100px"} color="white" />
    </div>
}