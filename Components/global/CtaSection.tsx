"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle, CreditCard } from "lucide-react";
import HeadHero from "./head_hero";

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="w-full px-8 md:px-0 py-0 bg-[#f5f7fa]">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto bg-gradient-to-tr from-[#0D2134] to-[#10355B] rounded-[28px]
        py-10 md:py-14 px-5 md:px-16 text-center text-white relative overflow-hidden
        transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >

        {/* Top Icon */}
        <div className="w-12 h-12 mx-auto mb-[20px] md:mb-[24px] rounded-[8px] bg-[#1D3855] flex items-center justify-center">
          <CreditCard strokeWidth={1} className="min-w-[28px] min-h-[28px] text-[#5DA7CF]" />
        </div>

        {/* Hero Content */}
        <div
          className={`transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <HeadHero
            tab="SOCIAL PROOF"
            heading="Stop overpaying for unsecure processing"
            sub_heading="MediPay users save an average of 18% on annual processing fees while eliminating the risk of compliance-related penalties."
            bg=""
            light
            btn="Calculate Your Savings"
            maxWidth="100%"
          />
        </div>

        {/* Bottom Trust Points */}
        <div
          className={`flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-[32px] mt-[30px] md:mt-[40px] text-sm text-white/80
          transition-all duration-700 delay-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >
          <div className="flex items-center justify-center gap-[10px] md:gap-[12px]">
            <CheckCircle className="min-w-[18px] min-h-[18px] md:min-w-[20px] md:min-h-[20px] text-[#5DA7CF]" />
            HIPAA Compliant
          </div>
          <div className="flex items-center justify-center gap-[10px] md:gap-[12px]">
            <CheckCircle className="min-w-[18px] min-h-[18px] md:min-w-[20px] md:min-h-[20px] text-[#5DA7CF]" />
            PCI Level 1 Certified
          </div>
          <div className="flex items-center justify-center gap-[10px] md:gap-[12px]">
            <CheckCircle className="min-w-[18px] min-h-[18px] md:min-w-[20px] md:min-h-[20px] text-[#5DA7CF]" />
            SOC2 Type II
          </div>
        </div>

      </div>
    </section>
  );
}