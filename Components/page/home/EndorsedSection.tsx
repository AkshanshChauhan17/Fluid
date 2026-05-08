"use client";

import Image from "next/image";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
];

export default function EndorsedSection() {
  return (
    <section className="w-full max-w-7xl m-auto bg-white rounded-[8px] px-8 lg:px-[100px] py-[80px] flex flex-col items-center justify-center gap-[40px] overflow-hidden">
      
      {/* TITLE */}
      <p className="text-center text-[#73797B] text-[16px] leading-[22px] tracking-[1px] font-medium">
        Fluid Financials Endorsed by
      </p>

      {/* LOGO STRIP */}
      <div className="relative w-full overflow-hidden">
        
        {/* LEFT GRADIENT */}
        <div className="absolute left-0 top-0 z-10 h-full w-[120px] bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />

        {/* RIGHT GRADIENT */}
        <div className="absolute right-0 top-0 z-10 h-full w-[120px] bg-[linear-gradient(270deg,#FFFFFF_0%,rgba(255,255,255,0)_100%)]" />

        {/* LOGOS */}
        <div className="flex items-center gap-[40px] min-w-max animate-[scroll_25s_linear_infinite]">
          
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="relative h-[50px] flex-shrink-0"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={180}
                height={50}
                className="h-[50px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}