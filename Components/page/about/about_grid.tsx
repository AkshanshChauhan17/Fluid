"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AboutGrid() {
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
      (gsap.utils.toArray(".reveal-card") as Element[]).forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
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

      (gsap.utils.toArray(".image-inner") as Element[]).forEach((image) => {
        gsap.from(image, {
          opacity: 0,
          y: 16,
          duration: 1.5,
          ease: "power1.out",
          scrollTrigger: {
            trigger: image,
            start: "top 90%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white px-8 md:px-8 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-7 gap-4">

        <div className="reveal-card bg-[#4b8792] rounded-[16px] p-6 md:p-8 py-8 md:py-10 md:row-span-2 flex flex-col">
          <h2 className="reveal-text text-white text-[26px] md:text-[32px] leading-tight font-[500] mb-[24px]">
            Healthcare - focused fintech
          </h2>
          <p className="word-group text-[#EEEEEE] text-[15px] md:text-[16px] font-[400] leading-relaxed">
            {splitWords("Fluid Financial is a healthcare-focused fintech company delivering secure payment infrastructure for medical, dental, and wellness providers.")}
          </p>
        </div>

        <div className="reveal-card bg-[#061d36] rounded-[16px] p-6 md:p-8 py-8 md:py-10 md:row-span-4 flex flex-col">
          <h2 className="reveal-text text-white text-[26px] md:text-[32px] leading-tight font-[500] mb-[24px]">
            Traditional payment processors were designed for retail commerce.
          </h2>

          <p className="reveal-text text-[#D0D5DD] text-[20px] md:text-[24px] font-[500] leading-snug mb-[24px]">
            Healthcare requires a different level of security,
            compliance, and operational alignment.
          </p>

          <p className="word-group text-[#D0D5DD] text-[15px] md:text-[16px] font-[400] leading-relaxed mb-[24px]">
            {splitWords("Fluid Financial developed MedToken technology, a patent-pending payment architecture designed to protect sensitive payment data while helping practices retain more revenue.")}
          </p>

          <button className="reveal-text text-[#5DA7CF] text-[16px] font-[500] flex items-center gap-2">
            Book a Demo →
          </button>
        </div>

        <div className="reveal-card rounded-[16px] overflow-hidden relative min-h-[260px] md:min-h-[320px] md:row-span-3">
          <div className="image-inner absolute inset-0">
            <Image
              src="/about_grid1.png"
              alt="Healthcare"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal-card rounded-[16px] overflow-hidden relative min-h-[260px] md:min-h-[320px] md:row-span-3">
          <div className="image-inner absolute inset-0">
            <Image
              src="/about_grid2.png"
              alt="Healthcare"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="reveal-card bg-[#f3f3f3] rounded-[16px] p-6 md:p-8 py-8 md:py-10 md:row-span-2 flex flex-col">
          <h2 className="reveal-text text-[#1f3b5b] text-[26px] md:text-[32px] leading-tight font-[500] mb-[24px]">
            Our mission is simple
          </h2>

          <p className="word-group text-[#73797B] text-[15px] md:text-[16px] font-[400] leading-relaxed">
            {splitWords("Help healthcare providers modernize their payment systems, improve compliance posture, and strengthen financial performance.")}
          </p>
        </div>

      </div>
    </section>
  );
}