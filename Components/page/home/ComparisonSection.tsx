"use client";

import {
  Check,
  X,
  CheckCheck,
} from "lucide-react";

export default function ComparisonSection() {
  return (
    <section className="w-full bg-white px-6 lg:px-[100px] py-[100px] flex flex-col items-center gap-[60px]">
      
      {/* HEADER */}
      <div className="max-w-[652px] flex flex-col items-center gap-[8px] text-center">
        
        <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-[24px]">
          Comparision
        </span>

        <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
          The Hidden Cost of Traditional Payment Processing
        </h2>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[60px]">
        
        {/* LEFT CARD */}
        <div className="w-full max-w-[441px] bg-white rounded-[24px] px-8 lg:px-[60px] py-[40px] flex flex-col items-start gap-[32px]">
          
          <h3 className="text-[#3B747F] text-[24px] leading-[32px] tracking-[-1px] font-medium">
            Common Payment Challenges
          </h3>

          <div className="flex flex-col items-start gap-[16px]">
            
            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <X
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Not HIPAA compliant
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <X
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                High Credit Card Processing Fees
              </span>
            </div>

            {/* HIGHLIGHT */}
            <div className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-full border border-[rgba(148,148,148,0.5)] bg-[#F9F9F9]">
              
              <X
                size={24}
                className="text-[#E4000B]"
                strokeWidth={1.7}
              />

              <span className="text-[#101010] text-[16px] leading-[19px] tracking-[-0.3px]">
                Patient Payment Data Exposure
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <X
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Generic Retail Payment Processors
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <X
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Complex Compliance Requirements
              </span>
            </div>
          </div>
        </div>

        {/* VS */}
        <div className="hidden lg:flex flex-col items-center h-[257px]">
          
          <div className="flex-1 border-l border-[#D0D5DD]" />

          <span className="py-[16px] text-[#101010] text-[16px] leading-[19px] uppercase font-bold">
            VS
          </span>

          <div className="flex-1 border-l border-[#D0D5DD]" />
        </div>

        {/* RIGHT CARD */}
        <div className="w-full max-w-[468px] bg-white rounded-[24px] px-8 lg:px-[60px] py-[40px] flex flex-col items-start gap-[32px]">
          
          <h3 className="text-[#3B747F] text-[24px] leading-[32px] tracking-[-1px] font-medium">
            Fluid Financial Solutions
          </h3>

          <div className="flex flex-col items-start gap-[16px]">
            
            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <Check
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Need to add HIPAA Compliant
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <Check
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                MedToken Tokenized Payment Architecture
              </span>
            </div>

            {/* HIGHLIGHT */}
            <div className="flex items-center gap-[6px] px-[16px] py-[8px] rounded-full border border-[rgba(148,148,148,0.5)] bg-[#F9F9F9]">
              
              <CheckCheck
                size={24}
                className="text-[#00C853]"
                strokeWidth={1.7}
              />

              <span className="text-[#101010] text-[16px] leading-[19px] tracking-[-0.3px]">
                Dual Pricing Revenue Recovery
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <Check
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Healthcare-Focused Payment Infrastructure
              </span>
            </div>

            {/* ITEM */}
            <div className="flex items-center gap-[12px]">
              
              <Check
                size={16}
                className="text-[#73797B]"
                strokeWidth={1.5}
              />

              <span className="text-[#73797B] text-[16px] leading-[19px] tracking-[-0.3px]">
                Built-in Compliance Protections
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}