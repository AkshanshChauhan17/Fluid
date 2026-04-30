"use client";

import Image from "next/image";
import { Lock, Database, ShieldCheck, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PrivacyPolicyGrid() {
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
    <section ref={sectionRef} className="bg-white px-8 sm:px-4">
      <div className="max-w-7xl mx-auto space-y-[24px] md:space-y-[32px]">

        <div className="grid grid-cols-1 md:grid-cols-8 gap-[24px] md:gap-[32px]">
          <div className="reveal-card md:col-span-2 rounded-[24px] border border-[#EEEEEE] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[288px]">
            <div className="w-[72px] h-[72px] rounded-[12px] bg-[#F0F7FF] flex items-center justify-center">
              <Lock className="text-[#5DA7CF]" size={32} strokeWidth={2} />
            </div>

            <h3 className="reveal-text text-[20px] md:text-[24px] leading-tight font-[600] text-[#1f3552] max-w-[80%]">
              Encrypted data transmission
            </h3>
          </div>

          <div className="reveal-card md:col-span-6 relative min-h-[220px] md:min-h-[288px] rounded-[24px] overflow-hidden">
            <div className="image-inner absolute inset-0">
              <Image
                src="/ppg1.png"
                alt="Security"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="reveal-card rounded-[24px] border border-[#EEEEEE] px-6 md:px-8 py-6 md:py-8 flex items-center gap-4 md:gap-6 min-h-[120px]">
            <div className="w-[72px] h-[72px] rounded-[12px] bg-[#F0F7FF] flex items-center justify-center">
              <Database className="text-[#5DA7CF]" size={32} strokeWidth={2} />
            </div>

            <h3 className="reveal-text text-[20px] md:text-[24px] font-[600] text-[#1f3552]">
              Tokenized payment processing
            </h3>
          </div>

          <div className="reveal-card rounded-[24px] border border-[#EEEEEE] px-6 md:px-8 py-6 md:py-8 flex items-center gap-4 md:gap-6 min-h-[120px]">
            <div className="w-[72px] h-[72px] rounded-[12px] bg-[#F0F7FF] flex items-center justify-center">
              <ShieldCheck className="text-[#5DA7CF]" size={32} strokeWidth={2} />
            </div>

            <h3 className="reveal-text text-[20px] md:text-[24px] font-[600] text-[#1f3552]">
              Secure infrastructure environments
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="reveal-card md:col-span-3 relative min-h-[220px] md:min-h-[288px] rounded-[24px] overflow-hidden">
            <div className="image-inner absolute inset-0">
              <Image
                src="/ppg2.png"
                alt="Security"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="reveal-card rounded-[24px] border border-[#EEEEEE] p-6 md:p-8 flex flex-col justify-between min-h-[220px] md:min-h-[288px]">
            <div className="w-[72px] h-[72px] rounded-[12px] bg-[#F0F7FF] flex items-center justify-center">
              <FileText className="text-[#5DA7CF]" size={32} strokeWidth={2} />
            </div>

            <h3 className="reveal-text text-[20px] md:text-[24px] leading-tight font-[600] text-[#1f3552]">
              Strict access controls
            </h3>
          </div>
        </div>

        <p className="word-group text-center italic text-[#73797B] text-[13px] md:text-[14px] font-[400]">
          {splitWords(
            "We only collect information necessary to provide payment services and improve our platform functionality."
          )}
        </p>
      </div>
    </section>
  );
}