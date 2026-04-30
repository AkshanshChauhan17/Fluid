"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type PageHeroProps = {
  tab: string;
  heading: string;
  sub_heading?: string;
  maxWidth?: string;
};

export default function HeadHero({
  tab,
  heading,
  sub_heading,
  maxWidth = "100%",
}: PageHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="bg-white py-[0px]">
      <div className="max-w-5xl mx-auto text-center px-8 sm:px-4">
        <p className="reveal-text text-[#5aa7d9] text-[14px] sm:text-[16px] font-[400] tracking-[2px] uppercase mb-4">
          {tab}
        </p>

        <h1
          className="reveal-text text-[30px] sm:text-[44px] leading-tight font-[500] text-[#1f3b5b] mx-auto"
          style={{ maxWidth }}
        >
          {heading}
        </h1>

        {sub_heading && (
          <p className="word-group text-[14px] sm:text-[16px] font-[400] mt-4 max-w-[90%] sm:max-w-[500px] m-auto text-[#73797B] leading-[1.7] sm:leading-normal">
            {splitWords(sub_heading)}
          </p>
        )}
      </div>
    </section>
  );
}