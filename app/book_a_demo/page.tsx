import BR from "@/Components/global/br";
import HeadHero from "@/Components/global/head_hero";
import HeadHeroLeft from "@/Components/global/head_hero_left";
import BookADemoGrid from "@/Components/page/book_a_demo/BookADemoGrid";

export default function BookADemo() {
  return (
    <div className="our-team bg-white">
      <BR px={"100px"} color="white" />
      <div className="max-w-7xl mx-auto sm:flex gap-[40px] bg-white items-center">
        <HeadHeroLeft
          tab="BOOK A DEMO"
          heading="Schedule a MedPay Platform Demo"
          sub_heading="Our specialists will walk you through the MedPay platform and provide a customer savings analysis for your practice."
          maxWidth="600px"
          btn="Receive a Free Analysis"
        />
        <div className="sm:hidden block">
            <BR px={"60px"} color="white" />
        </div>
        <BookADemoGrid />
      </div>
      <BR px={"100px"} color="white" />
    </div>
  );
}
