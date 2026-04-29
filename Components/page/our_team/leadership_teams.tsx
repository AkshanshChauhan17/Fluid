"use client";

import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const leaders = [
  {
    name: "Jonathan Lee",
    role: "President & Chief Executive Office",
    desc: "Jon has 20 years in fintech, helped i3 Vertical's IPO, and led Exactouch and Terminal Exchange managing POS until exit.",
    image: "/leader1.jpg",
  },
  {
    name: "Aonghus O'heocha",
    role: "Chief Technology Officer",
    desc: "Aonghus is CEO of Fluid Fintec and lead developer of ICE with 30 years' experience in technology.",
    image: "/leader2.jpg",
  },
  {
    name: "Ronald Prupis",
    role: "Chief Revenue Officer",
    desc: "Ron has 15 years in sales, marketing, and merchant processing, creating affiliate programs for brands like Hilton Hotels.",
    image: "/leader3.jpg",
  },
  {
    name: "Michael Harris",
    role: "Chief Financial Officer",
    desc: "Michael has 15 years in telecom and payments. He manages Fluid's financial systems for compliance.",
    image: "/leader4.jpg",
  },
];

export default function LeadershipTeams() {
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
          y: 45,
          duration: 1.1,
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
          y: 22,
          duration: 0.9,
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
          y: 16,
          duration: 0.5,
          stagger: 0.035,
          ease: "power2.out",
          scrollTrigger: {
            trigger: group,
            start: "top 94%",
          },
        });
      });

      (gsap.utils.toArray(".image-inner") as Element[]).forEach((image) => {
        gsap.from(image, {
          opacity: 0,
          y: 14,
          duration: 1.4,
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
    <section ref={sectionRef} className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">

        {leaders.map((leader, index) => (
          <div key={index} className="reveal-card overflow-hidden">

            <div className="relative h-[340px] rounded-[16px] overflow-hidden">
              <div className="image-inner absolute inset-0">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="p-[16px] py-[20px] min-h-[190px] flex flex-col rounded-[16px] mt-[12px] bg-[#F8FAFD]">
              <div className="flex justify-between items-center mb-2">
                <h3 className="reveal-text text-[20px] font-[600] text-[#1f3552]">
                  {leader.name}
                </h3>
                <FaLinkedin className="reveal-text text-[#0a66c2] text-[32px]" />
              </div>

              <p className="reveal-text text-[16px] font-[400] text-[#73797B] mb-4">
                {leader.role}
              </p>

              <p className="word-group text-[12px] font-[400] text-[#73797B] leading-relaxed">
                {splitWords(leader.desc)}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}