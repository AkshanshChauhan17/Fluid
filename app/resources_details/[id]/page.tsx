import BR from "@/Components/global/br";

import HeadHero from "@/Components/global/head_hero";

import BlogDetailsPage from "@/Components/page/resources_details/BlogDetailsPage";

import RelatedBlogsSection from "@/Components/page/resources_details/RelatedBlogsSection";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ResourcesDetails({
  params,
}: PageProps) {

  const { id } = await params;

  return (
    <div className="bg-white">

      <BR
        px={"100px"}
        color="white"
      />

      <BlogDetailsPage
        id={Number(id)}
      />

      <BR
        px={"100px"}
        color="white"
      />

      <BR
        px={"100px"}
        color="#F8FAFD"
      />

      <div className="bg-[#F8FAFD]">

        <HeadHero
          tab="BLOGS"
          heading="Other Resources"
          bg="#F8FAFD"
        />

        <BR
          px={"60px"}
          color="#F8FAFD"
        />

        <RelatedBlogsSection />

        <BR
          px={"100px"}
          color="#F8FAFD"
        />

      </div>
    </div>
  );
}