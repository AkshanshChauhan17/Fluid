"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import BookDemoCalendar from "./bookademocalender";

type PageHeroProps = {
  tab?: string;
  heading?: string;
  sub_heading?: string;
  maxWidth?: string;
  btn?: string;
  btn_link?: string;
  maxWidthSub?: string;
  bg?: string;
  openCalendar?: boolean;
};

export default function HeadHeroLeft({
  tab,
  heading,
  sub_heading,
  maxWidth = "100%",
  btn,
  btn_link,
  maxWidthSub = "460px",
  bg = "white",
  openCalendar = false,
}: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openCd, setOpenCd] = useState(false);

  const splitWords = (text: string) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[4px]">
        {word}
      </span>
    ));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      (gsap.utils.toArray(".reveal-text") as Element[]).forEach((text) => {
        gsap.from(text, {
          opacity: 0,
          y: 24,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 92%",
          },
        });
      });

      (gsap.utils.toArray(".word-group") as Element[]).forEach((group) => {
        const words = group.querySelectorAll(".word");

        gsap.from(words, {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.04,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 92%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleButtonClick = () => {
    setOpenCd(true);
  };

  return (
    <section
      ref={sectionRef}
      className="py-[0px] sm:min-w-[460px]"
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto text-center sm:text-left px-8 sm:px-0">
        <p className="reveal-text text-[#5aa7d9] text-[14px] sm:text-[16px] font-[400] tracking-[2px] uppercase mb-4">
          {tab}
        </p>

        <h1
          className="reveal-text text-[30px] sm:text-[44px] leading-tight font-[500] text-[#1f3b5b] mx-auto sm:mx-0"
          style={{ maxWidth }}
        >
          {heading}
        </h1>

        {sub_heading && (
          <p
            className="word-group text-[14px] sm:text-[16px] font-[400] mt-4 max-w-[90%] mx-auto sm:mx-0 text-[#73797B] leading-[1.7] sm:leading-normal"
            style={{ maxWidth: maxWidthSub }}
          >
            {splitWords(sub_heading)}
          </p>
        )}

        {btn && btn_link && (
          <Link href={btn_link}>
            <button
              className="mt-8 px-6 py-3 bg-[#3B747F] text-white rounded-lg text-[14px] sm:text-[16px] font-[500] hover:bg-[#4f97b6] transition cursor-pointer"
            >
              {btn}
            </button>
          </Link>
        )}

        <BookDemoCalendar open={openCd} onClose={()=>setOpenCd(!openCd)} />

        {btn && !btn_link && openCalendar && (
            <button
              onClick={handleButtonClick}
              className="mt-8 px-6 py-3 bg-[#3B747F] text-white rounded-lg text-[14px] sm:text-[16px] font-[500] hover:bg-[#4f97b6] transition cursor-pointer"
            >
              {btn}
            </button>
        )}
      </div>
    </section>
  );
}