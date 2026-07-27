import BR from "@/Components/global/br";
import AboutGrid from "@/Components/page/about/about_grid";
import HeadHero from "@/Components/global/head_hero";

export default function About() {
    return <div className="about">
        <BR px={"100px"} color="white" /> 
        <HeadHero tab="ABOUT US" heading="Financial Technology Built for Healthcare" maxWidth="500px" btn="Book a Demo" btn_link="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3rxDps9Nx_xdzB2LnAioUNWDlv1Oqpfv_HLOVYLUaDwafau7KZhskSvLsuCAk1vvPxLiGcKtYj" />
        <BR px={"30px"} color="white" /> 
        <AboutGrid />
        <BR px={"100px"} color="white" />
    </div>
}