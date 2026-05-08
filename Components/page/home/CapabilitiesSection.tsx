"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    title: "Secure tokenized transactions",
    desc: "Tokenization replaces card data with secure tokens, reducing fraud.",
    image: "/cdf1.png",
  },
  {
    title: "HIPAA-aligned payment infrastructure",
    desc: "HIPAA-aligned payments protect PHI and ensure secure, compliant transactions.",
    image: "/cdf2.png",
  },
  {
    title: "Merchant onboarding and configuration",
    desc: "Enables businesses to quickly register, verify, and customize their payment setup.",
    image: "/cdf3.png",
  },
  {
    title: "Virtual POS, Mobile & Digital Payment acceptance",
    desc: "Enables merchants to accept digital payments without hardware.",
    image: "/cdf4.png",
  },
];

export default function CapabilitiesSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const cardWidth = 340;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-0 flex flex-col gap-[60px]">
        
        {/* TOP */}
        <div className="flex items-end justify-between gap-10">
          
          <div className="flex flex-col gap-2">
            
            <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6 font-normal">
              Features
            </span>

            <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
              Platform Capabilities
            </h2>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex items-center gap-4">
            
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-lg border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300 hover:border-[#3B747F]"
            >
              <ChevronLeft
                size={24}
                className="text-[#3B747F]"
              />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-lg border border-[#EEEEEE] bg-white flex items-center justify-center transition-all duration-300 hover:border-[#3B747F]"
            >
              <ChevronRight
                size={24}
                className="text-[#3B747F]"
              />
            </button>
          </div>
        </div>

        {/* CARDS */}
        <div
          ref={sliderRef}
          className="
            flex gap-5 overflow-x-auto snap-x snap-mandatory
            scroll-smooth
            [-ms-overflow-style:none]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {features.map((item, index) => (
            <div
              key={index}
              className="
                relative min-w-[320px] h-[400px]
                rounded-2xl overflow-hidden
                group flex-shrink-0
                snap-start
              "
            >
              {/* IMAGE */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/95" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-6">
                
                <div className="px-2 flex flex-col gap-2">
                  
                  <h3 className="text-white text-[16px] leading-[140%] tracking-[-0.3px] font-semibold max-w-[220px]">
                    {item.title}
                  </h3>

                  <p className="text-[#D0D5DD] text-[13px] leading-[170%] tracking-[-0.3px] max-w-[260px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}