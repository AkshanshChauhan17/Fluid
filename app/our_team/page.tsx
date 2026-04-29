import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import LeadershipAreas from "@/Components/page/our_team/leadership_areas";
import LeadershipTeams from "@/Components/page/our_team/leadership_teams";

export default function OurTeam() {
    return <div className="our-team">
        <BR px={"100px"} color="white" />
        <HeadHero tab="OUR TEAM" heading="Leadership Driving Healthcare Payment Innovation" sub_heading="Fluid Financial’s leadership team brings experience across:" maxWidth="700px" />
        <BR px={"30px"} color="white" />        
        <LeadershipAreas />
        <BR px={"60px"} color="white" />
        <LeadershipTeams />
        <BR px={"100px"} color="white" />
    </div>
}