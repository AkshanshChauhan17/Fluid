import Image from "next/image";
import { Shield, Lock } from "lucide-react";
import EarningsCard from "./EarningsCard";

export default function InteractiveExample() {
  return (
    <section className="w-full bg-white py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[24px] px-[100px] py-[64px] bg-[linear-gradient(72deg,#081c2d,#0d2940)]">
          {/* LEFT DARK GLOW */}

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-[100px]">
            {/* LEFT SECTION */}
            <EarningsCard />

            {/* RIGHT CONTENT */}
            <div className="flex-1">
              <p className="text-[#5da7cf] text-[16px] leading-[150%] tracking-[10%] font-normal uppercase">
                Commission structure
              </p>
              <h2 className="text-white mt-[8px] text-[44px] leading-[56px] tracking-[-4%] font-normal">
                Agent earns 20% of 1% processing revenue
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
