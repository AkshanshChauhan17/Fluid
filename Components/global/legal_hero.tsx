"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface LegalHeroProps {
  tab: string;
  heading: string;
  description1: string;
  description2: string;
}

export default function LegalHero({
  tab,
  heading,
  description1,
  description2,
}: LegalHeroProps) {
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
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-7xl mx-auto">

        <p className="reveal-text text-[#5DA7CF] text-[16px] font-[400] tracking-[2px] uppercase mb-[20px]">
          {tab}
        </p>

        <h1 className="reveal-text text-[44px] leading-tight font-[500] text-[#1D3855] max-w-[1000px] mb-[32px]">
          {heading}
        </h1>

        <div className="space-y-[12px]">
          <p className="word-group text-[#73797B] font-[400] text-[16px] leading-relaxed">
            {splitWords(description1)}
          </p>

          <p className="word-group text-[#73797B] font-[400] text-[16px] leading-relaxed">
            {splitWords(description2)}
          </p>
        </div>

      </div>
    </section>
  );
}