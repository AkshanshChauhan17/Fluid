import Image from "next/image";
import { Shield, Lock } from "lucide-react";

export default function PricingBottom() {
  return (
    <section className="w-full bg-white py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[24px] px-[64px] py-[64px] bg-[linear-gradient(72deg,#081c2d,#0d2940)]">
          
          {/* LEFT DARK GLOW */}
          <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#081f39] opacity-60 blur-[90px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[48px]">
            
            {/* LEFT IMAGE */}
            <div className="relative w-full max-w-[600px] h-[450px] rounded-[14px] overflow-hidden shrink-0">
              <Image
                src="/pricing.png"
                alt="Security Payment"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
              <h2 className="text-white text-[44px] leading-[56px] tracking-[-4%] font-normal">
                Unrivaled security for every transaction
              </h2>

              <p className="mt-[24px] text-[#d0d5dd] text-[16px] leading-[24px] tracking-[-0.3px] font-light">
                All Velocity Pay processing models include enterprise-grade
                security features and 24/7 dedicated merchant support as
                standard.
              </p>

              {/* FEATURES */}
              <div className="mt-[24px] flex flex-col gap-[16px]">
                
                {/* ITEM 1 */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                    <Lock
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1}
                    />
                  </div>

                  <p className="text-white text-[16px] leading-[24px] tracking-[0px] font-light">
                    Level 1 PCI-DSS Compliant
                  </p>
                </div>

                {/* ITEM 2 */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[24px] h-[24px] flex items-center justify-center">
                    <Shield
                      size={20}
                      className="text-[#5da7cf]"
                      strokeWidth={1}
                    />
                  </div>

                  <p className="text-white text-[16px] leading-[24px] tracking-[0px] font-light">
                    Real-time Fraud Detection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}