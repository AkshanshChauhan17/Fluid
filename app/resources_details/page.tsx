"use client";

import { useEffect, useState } from "react";

import BR from "@/Components/global/br";

import HeadHero from "@/Components/global/head_hero";

import BlogDetailsPage from "@/Components/page/resources_details/BlogDetailsPage";

import RelatedBlogsSection from "@/Components/page/resources_details/RelatedBlogsSection";

export default function ResourcesDetails() {

  const [id, setId] = useState(1);

  useEffect(() => {

    const hash = window.location.hash.replace(
      "#",
      ""
    );

    if (hash) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setId(Number(hash));
    }

  }, []);

  return (
    <div className="bg-white">

      <BR
        px={"100px"}
        color="white"
      />

      <BlogDetailsPage id={id} />

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