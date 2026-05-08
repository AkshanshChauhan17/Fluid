"use client";

import Image from "next/image";
import {
  Shield,
  Lock,
  CheckCircle2,
  Activity,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] px-8 lg:px-0 py-[100px]">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[86%] z-0">
        <Image
          src="/hero-doctor.png"
          alt="Healthcare Payment"
          fill
          className="object-cover object-right"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(281.46deg,rgba(248,250,253,0)_33.35%,#F8FAFD_62.04%)]" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl m-auto z-10 flex flex-col items-start gap-[60px]">
        
        {/* TEXT AREA */}
        <div className="flex flex-col items-start gap-[32px]">
          
          <div className="flex flex-col items-start gap-[24px]">
            
            <h1 className="max-w-[622px] text-[#1D3855] text-[42px] sm:text-[44px] leading-[125%] tracking-[-3px] font-medium">
              Your practice may{" "}
              <span className="text-[#3B747F]">
                lose 3%+
              </span>{" "}
              of revenue to payment processing.{" "}
              <span className="text-[#3B747F]">
                We help you recover it.
              </span>
            </h1>

            <p className="max-w-[647px] text-[#101010] text-[16px] leading-[160%] font-normal">
              Fluid Financial provides HIPAA-aligned payment infrastructure
              with MedToken, helping medical and wellness businesses secure
              payments and reduce costs.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-start gap-[12px]">
            
            <button className="h-[48px] px-[20px] rounded-[8px] bg-[#3B747F] flex items-center justify-center hover:opacity-90 transition-opacity">
              
              <span className="text-white text-[16px] leading-[24px] font-semibold">
                Calculate Your Savings
              </span>
            </button>

            <button className="h-[48px] px-[20px] rounded-[8px] border border-[#D0D5DD] bg-white flex items-center justify-center hover:bg-[#f8fafc] transition-colors">
              
              <span className="text-[#101010] text-[16px] leading-[24px] font-semibold">
                Upload A Statement For A Free Analysis
              </span>
            </button>
          </div>
        </div>

        {/* TRUST BOX */}
        <div className="w-full max-w-[582px] bg-[#FBFBFB] border border-[#D0D5DD] rounded-[12px] shadow-[-20px_4px_38px_rgba(0,0,0,0.07)] px-[24px] py-[18px]">
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-[24px] sm:gap-[40px]">
            
            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              <Shield
                size={24}
                strokeWidth={2}
                className="text-[#101010]"
              />

              <span className="text-[#73797B] text-[13px] leading-[125%]">
                HIPAA aligned
              </span>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              <Lock
                size={24}
                strokeWidth={2}
                className="text-[#101010]"
              />

              <span className="text-[#73797B] text-[13px] leading-[125%]">
                PCI DSS Level 1
              </span>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              <CheckCircle2
                size={24}
                strokeWidth={2}
                className="text-[#101010]"
              />

              <span className="text-[#73797B] text-[13px] leading-[125%]">
                SOC2 infrastructure
              </span>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              <Activity
                size={24}
                strokeWidth={2}
                className="text-[#101010]"
              />

              <span className="text-[#73797B] text-[13px] leading-[125%]">
                CURES Act ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}