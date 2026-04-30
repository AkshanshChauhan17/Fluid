"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const items = [
  {
    title: "Healthcare Technology",
    bg: "bg-[#D8E7F6]",
    text: "text-[#0F2133]",
  },
  {
    title: "Fintech Innovation",
    bg: "bg-[#EBF1F2]",
    text: "text-[#377B80]",
  },
  {
    title: "Compliance Architecture",
    bg: "bg-[#D8F6FB]",
    text: "text-[#3B747F]",
  },
  {
    title: "Healthcare Technology",
    bg: "bg-[#D3F0FF]",
    text: "text-[#5DA7CF]",
  },
  {
    title: "Healthcare Operations",
    bg: "bg-[#EDF5FF] col-span-2 sm:col-span-1",
    text: "text-[#1D3855]",
  },
];

export default function LeadershipAreas() {
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
      gsap.from(".reveal-card", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-8 sm:px-4">
      <div className="max-w-7xl mx-auto text-center">

        <div className="grid grid-cols-2 md:flex justify-center gap-[16px] mb-[40px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`reveal-card ${item.bg} rounded-[24px] w-full md:min-w-[200px] md:max-w-[200px] min-h-[150px] md:min-h-[200px] max-h-[150px] md:max-h-[200px] flex items-center justify-center p-[16px]`}
            >
              <h3
                className={`${item.text} text-[18px] md:text-[20px] font-[600] max-w-[120px] md:max-w-[140px] leading-tight text-center`}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="word-group max-w-[750px] mx-auto text-[14px] md:text-[16px] leading-relaxed text-[#1D3855] mb-[16px]">
          {splitWords(
            "Our team works closely with healthcare organizations, medical associations, and technology partners to deliver secure payment solutions designed for the evolving regulatory landscape."
          )}
        </p>

        <h3 className="reveal-text text-[18px] md:text-[20px] font-[600] text-[#3B747F] leading-snug">
          Together we are building the next generation of healthcare payment infrastructure
        </h3>
      </div>
    </section>
  );
}