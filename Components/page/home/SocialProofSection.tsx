import Image from "next/image";
import { DollarSign } from "lucide-react";

const stats = [
  {
    value: "$650M+",
    label: "annual payment processing volume",
  },
  {
    value: "99.97%",
    label: "platform uptime",
  },
  {
    value: "3%+",
    label: "Average revenue recovery for clients",
  },
  {
    value: "19,000+",
    label: "of healthcare transactions processed daily",
  },
];

export default function SocialProofSection() {
  return (
    <section className="w-full bg-white py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 lg:px-0">
        
        {/* MAIN CARD */}
        <div className="bg-[#0F2133] rounded-[24px] px-[40px] py-[64px] relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center sm:gap-[80px]">
            
            {/* LEFT IMAGE */}
            <div className="relative w-full lg:w-[544px] h-[420px] lg:h-[578px] rounded-[24px] shrink-0">
              
              <Image
                src="/healthcare-proof.png"
                alt="Healthcare payment"
                fill
                className="object-cover"
              />

              {/* FLOATING PAYMENT CARD */}
              <div className="absolute right-[-10%] bottom-[110px] bg-white border border-[#0F2133] rounded-xl p-3 w-[170px] h-fit shadow-lg">
                
                {/* GREEN BOX */}
                <div className="w-full h-20 bg-[#E7FFE8] rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center">
                    <DollarSign
                      size={24}
                      className="text-[#00C853]"
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* TEXT */}
                <div className="mt-3 flex flex-col gap-1">
                  <span className="text-[8px] leading-2 text-center text-[#73797B] tracking-[-0.3px]">
                    Transaction Processed Successfully
                  </span>

                  <span className="text-[#1D3855] text-center text-[24px] leading-[29px] tracking-[-1px] font-semibold">
                    $250.12
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="w-full max-w-[504px] flex flex-col gap-20">
              
              {/* HEADING */}
              <div className="flex flex-col gap-2">
                <span className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-6 font-normal">
                  Social Proof
                </span>

                <h2 className="text-white text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
                  Trusted by Healthcare Organizations Nationwide
                </h2>
              </div>

              {/* STATS */}
              <div className="flex flex-col gap-8">
                
                {/* ROW 1 */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(0, 2).map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 pr-5"
                    >
                      <h3 className="text-white text-[36px] leading-[125%] tracking-[-1px] font-medium">
                        {item.value}
                      </h3>

                      <p className="text-[#D0D5DD] text-[16px] leading-[170%] tracking-[-0.3px]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.slice(2, 4).map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 pr-5"
                    >
                      <h3 className="text-white text-[36px] leading-[125%] tracking-[-1px] font-medium">
                        {item.value}
                      </h3>

                      <p className="text-[#D0D5DD] text-[16px] leading-[170%] tracking-[-0.3px]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}