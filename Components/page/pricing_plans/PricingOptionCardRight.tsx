import BR from "@/Components/global/br";
import {
  SquarePen,
  Clock3,
  Users,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: SquarePen,
    title: "Predictable cost model",
  },
  {
    icon: Clock3,
    title: "Easy to implement",
  },
  {
    icon: Users,
    title: "Familiar structure (no pricing adjustments to customers)",
    full: true,
  },
];

const tags = [
  "No customer fees",
  "Lower average ticket",
  "Retail & Quick Serve",
  "Patient-sensitive perception",
];

export default function PricingOptionCardRight() {
  return (
    <section className="w-full py-0 px-8 flex-1 sm:px-0 flex justify-center">
      <div className="w-full flex flex-col rounded-[32px] border p-[32px] relative overflow-hidden">
        
        {/* OPTION TAG */}
        <div className="inline-flex max-w-fit items-center rounded-full bg-[#1d3855] px-[12px] py-[8px]">
          <span className="text-[#f0f7ff] text-[12px] leading-[12px] font-medium tracking-[0.6px]">
            Option 2: Traditional Processing (Reduced Rate)
          </span>
        </div>

        {/* TITLE */}
        <h2 className="mt-[16px] text-[#1d3855] text-[36px] leading-[43.2px] tracking-[-0.36px] font-medium">
          Simple, transparent pricing
        </h2>

        {/* PRICE */}
        <div className="mt-[16px] flex items-end gap-[8px] flex-wrap">
          <span className="text-[#3B747F] text-[36px] leading-[40px] tracking-[0px] font-semibold">
            2.5%
          </span>

          <span className="text-[#73797B] text-[20px] leading-[28px] tracking-0 font-medium">
            + $0.25
          </span>

          <span className="text-[#73797b] text-[16px] leading-[24px] tracking-0">
            per transaction
          </span>
        </div>

        {/* HOW IT WORKS */}
        <div className="mt-[32px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            How it works
          </h3>

          <div className="mt-[16px] space-y-[16px]">
            {[
              "Standard merchant processing model",
              "Fees are paid by the business (not passed to the patient/customer)",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-[8px]">
                <CheckCircle2
                  size={16}
                  className="text-[#00C853] shrink-0 mt-[2px]"
                  strokeWidth={2}
                />

                <p className="text-[#73797b] text-[14px] leading-[20px] tracking-[0px]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS */}
        <div className="mt-[32px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            Benefits
          </h3>

          <div className="mt-[16px] grid grid-cols-2 gap-[16px]">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`rounded-[8px] bg-[#f0f7ff] p-[12px] border border-[#e6edf5] ${
                    item.full ? "col-span-2 min-h-[64px]" : "min-h-[76px]"
                  }`}
                >
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <Icon
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1}
                    />
                  </div>

                  <p className="mt-[8px] text-[#1D3855] text-[16px] leading-[24px] tracking-[0px] font-medium">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* BEST FOR */}
        <div className="mt-[32px] border-t border-t-[#EEEEEE] pt-[24px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            Best for
          </h3>

          <div className="mt-[16px] flex flex-wrap gap-[8px]">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="px-[12px] py-[4px] rounded-full bg-[#f0f7ff] text-[#1D3855] text-[12px] font-medium leading-[16px] tracking-[0px]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button className="mt-auto w-full h-[48px] rounded-[8px] border border-[#D4D7DC] bg-white hover:bg-[#f8f8f8] transition-colors duration-300 text-[#222222] text-[16px] leading-[24px] font-semibold tracking-[0%]">
          Choose Traditional
        </button>
      </div>
    </section>
  );
}