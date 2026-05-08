"use client";

import {
  Info,
  ShieldCheck,
  ShieldPlus,
  BadgeDollarSign,
} from "lucide-react";

export default function SavingsCalculator() {
  return (
    <section className="w-full bg-[#F8FAFD] px-6 lg:px-[100px] py-[100px] flex flex-col items-center gap-[60px]">
      
      {/* HEADER */}
      <div className="flex flex-col items-center gap-[8px] text-center">
        
        <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-[24px] font-normal">
          Savings Calculator
        </span>

        <h2 className="text-[#1D3855] text-[44px] leading-[56px] tracking-[-0.04em] font-medium max-w-[766px]">
          Instantly See Your Potential Savings
        </h2>
      </div>

      {/* CARD */}
      <div className="w-full max-w-[828px] bg-white border border-[#EEEEEE] rounded-[24px] overflow-hidden flex flex-col items-center">
        
        {/* TOP BAR */}
        <div className="w-full h-[45px] bg-[#F0F7FF] border-b border-[#EEEEEE] px-[32px] flex items-center justify-between">
          
          <span className="text-[#1D3855] text-[12px] leading-[12px] tracking-[-0.3px] font-semibold">
            Step 1 of 2
          </span>

          {/* PROGRESS */}
          <div className="w-[128px] h-[8px] bg-[#EEEEEE] rounded-full overflow-hidden">
            <div className="w-1/2 h-full bg-[#5DA7CF]" />
          </div>
        </div>

        {/* FORM */}
        <div className="w-full flex flex-col items-center gap-[32px] px-6 sm:px-[32px] py-[48px]">
          
          <div className="w-full max-w-[506px] flex flex-col items-start gap-[12px]">
            
            <h3 className="text-[#1D3855] text-[18px] leading-[16px] tracking-[-0.3px] font-semibold">
              See How Much You’re Overpaying in 60 Seconds
            </h3>

            <p className="text-[#1D3855] text-[13px] leading-[16px] tracking-[-0.3px]">
              Free savings and compliance audit for healthcare practices
            </p>
          </div>

          <div className="w-full max-w-[506px] flex flex-col gap-[24px]">
            
            {/* MONTHLY VOLUME */}
            <div className="flex flex-col gap-[4px]">
              
              <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em]">
                Monthly Volume
              </label>

              <div className="flex flex-col gap-[8px]">
                
                <div className="w-full h-[48px] border border-[#D0D5DD] rounded-[8px] px-[16px] flex items-center gap-[8px]">
                  
                  <span className="text-[#1D3855] text-[16px]">$</span>

                  <input
                    type="text"
                    placeholder="0.00"
                    className="flex-1 outline-none bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B]"
                  />
                </div>

                <div className="flex items-center gap-[4px]">
                  
                  <Info
                    size={13}
                    className="text-[#73797B]"
                  />

                  <span className="text-[#73797B] text-[13px] leading-[21px]">
                    Approximate monthly card volume
                  </span>
                </div>
              </div>
            </div>

            {/* LAST FEES */}
            <div className="flex flex-col gap-[4px]">
              
              <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em]">
                Last Statement Fees
              </label>

              <div className="flex flex-col gap-[8px]">
                
                <div className="w-full h-[48px] border border-[#D0D5DD] rounded-[8px] px-[16px] flex items-center gap-[8px]">
                  
                  <span className="text-[#1D3855] text-[16px]">$</span>

                  <input
                    type="text"
                    placeholder="0.00"
                    className="flex-1 outline-none bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B]"
                  />
                </div>

                <div className="flex items-center gap-[4px]">
                  
                  <Info
                    size={13}
                    className="text-[#73797B]"
                  />

                  <span className="text-[#73797B] text-[13px] leading-[21px]">
                    From your most recent statement. Estimate is fine.
                  </span>
                </div>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full h-[48px] bg-[#3B747F] hover:opacity-90 transition-opacity rounded-[8px] flex items-center justify-center">
              
              <span className="text-white text-[16px] leading-[24px] font-semibold">
                Reveal My Savings
              </span>
            </button>

            {/* NOTICE */}
            <div className="w-full flex justify-center">
              
              <div className="bg-[#F8FAFD] rounded-[8px] px-[12px] py-[12px] text-center">
                
                <p className="text-[#73797B] text-[12px] leading-[20px] tracking-[-0.3px]">
                  Audits have identified{" "}
                  <span className="text-[#1D3855] font-semibold">
                    substantial annual savings opportunities
                  </span>{" "}
                  for qualified practices
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="w-full border-t border-[#EEEEEE] px-6 sm:px-[32px] py-[24px]">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[24px]">
            
            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              
              <ShieldCheck
                size={24}
                className="text-[#5DA7CF]"
                strokeWidth={1.5}
              />

              <p className="text-[#1D3855] uppercase text-[10px] leading-[16px] font-semibold tracking-wide">
                HIPAA Aligned Payment Infrastructure
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              
              <ShieldPlus
                size={24}
                className="text-[#5DA7CF]"
                strokeWidth={1.5}
              />

              <p className="text-[#1D3855] uppercase text-[10px] leading-[16px] font-semibold tracking-wide">
                Built For Healthcare Practices
              </p>
            </div>

            {/* ITEM */}
            <div className="flex flex-col items-center gap-[12px] text-center">
              
              <BadgeDollarSign
                size={24}
                className="text-[#5DA7CF]"
                strokeWidth={1.5}
              />

              <p className="text-[#1D3855] uppercase text-[10px] leading-[16px] font-semibold tracking-wide">
                No Cost To Practice Options Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}