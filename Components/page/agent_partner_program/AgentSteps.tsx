const steps = [
  "Apply to become an agent",
  "Receive approval",
  "Obtain unique referral link",
  "Refer businesses and earn recurring commissions",
];

export default function AgentSteps() {
  return (
    <section className="py-0 px-8 sm:px-0">
      <div className="max-w-fit">
        <div className="flex flex-col gap-[6px]">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-[16px]">
              
              {/* LEFT NUMBER + LINE */}
              <div className="flex flex-col items-center shrink-0">
                <span className="text-[#5DA7CF] text-[24px] leading-[120%] tracking-[0px] font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* LINE */}
                {index !== steps.length - 1 && (
                  <div className="mt-[6px] w-px h-[42px] bg-[#5DA7CF]" />
                )}
              </div>

              {/* TEXT */}
              <div className="flex flex-col items-center shrink-0">
                <p className="text-[#1D3855] text-[20px] leading-[auto] tracking-[-0.3px] font-medium">
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}