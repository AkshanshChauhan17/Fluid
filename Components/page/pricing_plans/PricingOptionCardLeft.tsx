import {
  BadgeDollarSign,
  TrendingUp,
  ShieldCheck,
  Monitor,
  CheckCircle2,
} from "lucide-react";

const benefits = [
  {
    icon: BadgeDollarSign,
    title: "0% effective cost",
  },
  {
    icon: TrendingUp,
    title: "Margin improvement",
  },
  {
    icon: ShieldCheck,
    title: "Fully compliant",
  },
  {
    icon: Monitor,
    title: "Omnichannel ready",
  },
];

const tags = [
  "Medical practices",
  "Wellness clinics",
  "High-ticket services",
  "Large avg transactions",
];

export default function PricingOptionCardLeft() {
  return (
    <section className="py-0 px-8 sm:px-0 flex-1 flex justify-center">
      <div className="w-full flex flex-col rounded-[32px] border p-[32px] relative overflow-hidden">
        
        {/* TOP LABEL */}
        <div className="absolute top-0 right-0 bg-[#edf5ff] px-5 py-2 rounded-bl-[8px]">
          <span className="text-[10px] font-normal tracking-[0px] leading-[15px] text-[#5da7cf] uppercase">
            Most Popular
          </span>
        </div>

        {/* OPTION TAG */}
        <div className="inline-flex max-w-fit items-center rounded-full bg-[#1d3855] px-[12px] py-[8px]">
          <span className="text-[#f0f7ff] text-[12px] leading-[12px] font-medium tracking-[0.6px]">
            Option 1: Zero-Cost Processing (Cash Discount / Dual Pricing)
          </span>
        </div>

        {/* TITLE */}
        <h2 className="mt-[16px] text-[#1d3855] text-[36px] leading-[43.2px] tracking-[-0.36px] font-medium">
          Eliminate up to 100% of your processing fees
        </h2>

        {/* SUBTEXT */}
        <p className="mt-[16px] text-[#73797b] text-[14px] leading-[21px] tracking-[0px]">
          Merchant receives the full invoice amount for every transaction.
        </p>

        {/* HOW IT WORKS */}
        <div className="mt-[32px]">
          <h3 className="text-[#1D3855] text-[18px] font-medium leading-[27px] tracking-[0px]">
            How it works
          </h3>

          <div className="mt-[16px] space-y-[16px]">
            {[
              "Pricing is adjusted at the point of sale to include a service fee for card payments",
              "Customers can avoid the fee by paying with debit, HSA/FSA, or cash",
              "The merchant receives the full invoice amount with no processing cost",
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
                  className="rounded-[8px] bg-[#f0f7ff] p-[12px] min-h-[76px] border border-[#e6edf5]"
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

          <div className="mt-[16px] mb-[32px] flex flex-wrap gap-[8px]">
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
        <button className="mt-[auto] w-full h-[48px] rounded-[8px] bg-[#3b747f] hover:bg-[#4c8a92] transition-colors duration-300 text-white text-[16px] leading-[24px] font-semibold tracking-[0%]">
          Get Started
        </button>
      </div>
    </section>
  );
}