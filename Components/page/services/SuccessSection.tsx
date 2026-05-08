import Image from "next/image";

export default function SuccessSection() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto bg-[#0F2133] rounded-[24px] px-[64px] py-[64px]">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-[80px]">
          
          {/* IMAGE */}
          <div className="relative w-full max-w-[524px] h-[407px] rounded-[16px] overflow-hidden shrink-0">
            <Image
              src="/success.png"
              alt="Success"
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="w-full max-w-[504px] flex flex-col items-start gap-[60px]">
            
            {/* TOP CONTENT */}
            <div className="flex flex-col items-start gap-[8px]">
              
              <p className="max-w-[394px] text-[#5DA7CF] text-[16px] leading-[150%] tracking-[0.1em] uppercase font-normal">
                Eliminate fees. Strengthen compliance. Scale smarter.
              </p>

              <h2 className="max-w-[368px] text-white text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
                One Platform.
                <br />
                Total Control.
              </h2>
            </div>

            {/* DESCRIPTION */}
            <p className="max-w-[462px] text-[#D0D5DD] text-[16px] leading-[24px] tracking-[-0.3px] font-normal">
              Fluid Financial delivers a HIPAA compliant, Ai-optimized,
              no cost payment processing platform built to protect data,
              reduce expenses, and unlock scalable revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}