import { Shield, GaugeCircle } from "lucide-react";

export default function AnalysisImpactSection() {
  return (
    <section className="w-full py-0">
      <div className="max-w-7xl px-8 sm:px-0 m-auto flex flex-col gap-[24px]">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          
          {/* LEFT CARD */}
          <div className="bg-white border border-[#D0D5DD] rounded-[24px] p-[32px] flex flex-col gap-[24px] min-h-[306px]">
            
            {/* HEADING */}
            <h2 className="text-[#1D3855] text-[24px] leading-[31px] tracking-[-0.3px] font-semibold">
              Analysis Parameters
            </h2>

            {/* SLIDERS */}
            <div className="flex flex-col gap-[32px]">
              
              {/* SLIDER ITEM */}
              <div className="flex flex-col gap-[16px]">
                
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <p className="text-[#73797B] text-[13px] leading-[20px] tracking-[1px] uppercase font-normal">
                    Annual Processing Volume
                  </p>

                  <p className="text-[#3B747F] text-[20px] leading-[24px] tracking-[-1px] font-medium">
                    $1,500,000
                  </p>
                </div>

                {/* RANGE */}
                <div className="relative h-[18px] flex items-center">
                  <div className="w-full h-[4px] rounded-[2px] bg-[#F0F7FF]" />

                  {/* THUMB */}
                  <div className="absolute left-[34%] w-[18px] h-[18px] rounded-full bg-[#5DA7CF]" />
                </div>

                {/* LABELS */}
                <div className="flex items-start justify-between">
                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    $100k
                  </span>

                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    $5M
                  </span>
                </div>
              </div>

              {/* SLIDER ITEM */}
              <div className="flex flex-col gap-[16px]">
                
                {/* TOP */}
                <div className="flex items-center justify-between">
                  <p className="text-[#73797B] text-[13px] leading-[20px] tracking-[1px] uppercase font-normal">
                    Current Processing Rate
                  </p>

                  <p className="text-[#3B747F] text-[20px] leading-[24px] tracking-[-1px] font-medium">
                    3.2%
                  </p>
                </div>

                {/* RANGE */}
                <div className="relative h-[18px] flex items-center">
                  <div className="w-full h-[4px] rounded-[2px] bg-[#F0F7FF]" />

                  {/* THUMB */}
                  <div className="absolute left-[34%] w-[18px] h-[18px] rounded-full bg-[#5DA7CF]" />
                </div>

                {/* LABELS */}
                <div className="flex items-start justify-between">
                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    1.0%
                  </span>

                  <span className="text-[#717786] text-[12px] leading-[16px] font-medium">
                    5.0%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#3B747F] rounded-[24px] px-[32px] py-[32px] flex flex-col justify-between min-h-[306px]">
            
            {/* TOP */}
            <div className="flex flex-col items-center">
              <p className="text-[#EEEEEE] opacity-90 text-[14px] leading-[20px] tracking-[2px] uppercase font-semibold text-center">
                Estimated Annual Impact
              </p>
            </div>

            {/* CENTER */}
            <div className="flex flex-col items-center gap-[20px]">
              
              {/* CURRENT */}
              <div className="flex flex-col items-center gap-[8px]">
                <p className="text-[#EEEEEE] text-[18px] leading-[22px] tracking-[-0.3px] font-medium line-through">
                  $2,775,000
                </p>

                <p className="text-[#EEEEEE] text-[13px] leading-[16px] tracking-[-0.3px] font-normal">
                  Current Projected Revenue
                </p>
              </div>

              {/* DIVIDER */}
              <div className="w-full h-px bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0)_100%)]" />

              {/* SAVINGS */}
              <div className="flex flex-col items-center gap-[8px]">
                <p className="text-[#EEEEEE] text-[28px] leading-[auto] tracking-[-1px] font-semibold">
                  $248,500
                </p>

                <p className="text-[#EEEEEE] text-[13px] leading-[16px] tracking-[-0.3px] font-normal">
                  Potential Annual Savings
                </p>
              </div>
            </div>

            {/* FOOTER */}
            <p className="text-[#EEEEEE] text-[12px] leading-[20px] tracking-[-0.3px] text-center font-normal">
              Calculated based on a 8.9% historical inefficiency rate.
            </p>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
          
          {/* CARD */}
          <div className="bg-[#EEEEEE] border border-[#D0D5DD] rounded-[24px] p-[24px] flex flex-col gap-[16px] min-h-[146px]">
            
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <Shield
                size={18}
                className="text-[#5DA7CF]"
                strokeWidth={1.8}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#1D3855] text-[14px] leading-[20px] tracking-[-0.3px] font-semibold">
                Encrypted Analysis
              </h3>

              <p className="text-[#73797B] text-[12px] leading-[16px] tracking-[-0.3px] font-normal max-w-[260px]">
                Your financial data is protected with bank-grade 256-bit
                encryption.
              </p>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-[#EEEEEE] border border-[#D0D5DD] rounded-[24px] p-[24px] flex flex-col gap-[16px] min-h-[146px]">
            
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <GaugeCircle
                size={18}
                className="text-[#5DA7CF]"
                strokeWidth={1.8}
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <h3 className="text-[#1D3855] text-[14px] leading-[20px] tracking-[-0.3px] font-semibold">
                Real-time Benchmarking
              </h3>

              <p className="text-[#73797B] text-[12px] leading-[16px] tracking-[-0.3px] font-normal max-w-[260px]">
                Compare your rates against 5,000+ similar sized medical
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
