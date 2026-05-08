const features = [
  {
    number: "01",
    title: "Referral Tracking",
    description:
      "End-to-end visibility of every business onboarding step.",
  },
  {
    number: "02",
    title: "Conversion Analytics",
    description:
      "Data-driven insights on referral performance and funnel health.",
  },
  {
    number: "03",
    title: "Commission Reporting",
    description:
      "Detailed ledger breakdown of every dollar earned and processed.",
  },
  {
    number: "04",
    title: "Marketing Resources",
    description:
      "Pre-approved assets, whitepapers, and brand guidelines for scaling.",
  },
];

export default function ReferralFeaturesSection() {
  return (
    <section className="w-full py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {features.map((item, index) => (
            <div
              key={index}
              className="min-h-[228px] pl-[24px] pt-[24px] border-l border-[#eeeeee] flex flex-col"
            >
              
              {/* NUMBER */}
              <span className="text-[#d0d5dd] opacity-[30%] text-[60px] leading-[60px] tracking-[0px] font-medium">
                {item.number}
              </span>

              {/* TITLE */}
              <h3 className="mt-[16px] text-[#1D3855] text-[20px] leading-[150%] tracking-[-0.3px] font-medium">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-[60px] text-[#73797b] text-[13px] leading-[140%] tracking-[0px] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}