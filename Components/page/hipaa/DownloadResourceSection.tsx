import Image from "next/image";
import { FileText, Download } from "lucide-react";

export default function DownloadResourceSection() {
  return (
    <section className="w-full bg-white py-0 px-8 sm:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[24px] px-[100px] py-[64px] bg-[linear-gradient(72deg,#0d2134,#10344b)]">
          
          {/* LEFT DARK GLOW */}
          <div className="absolute left-[-120px] top-[-80px] w-[320px] h-[320px] bg-[#081f39] opacity-60 blur-[90px]" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* LEFT IMAGE CARD */}
            <div className="relative w-full max-w-[500px] h-[280px] rounded-[18px] overflow-hidden">
              <Image
                src="/Border.png"
                alt="Healthcare Payment Compliance Checklist"
                fill
                className="object-cover"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-[#0E213450]" />

              {/* ICON */}
              <div className="absolute top-5 left-5 w-9 h-9 rounded-[10px] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                <FileText
                  size={18}
                  className="text-white"
                  strokeWidth={1.8}
                />
              </div>

              {/* LABEL */}
              <div className="absolute bottom-5 left-5">
                <p className="text-white text-[20px] leading-[25px] tracking-[-1px] font-normal">
                  Healthcare Payment Compliance Checklist
                </p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="flex-1">
              <h2 className="text-white text-[44px] leading-[56px] tracking-[-4%] font-normal">
                Downloadable Resource
              </h2>

              <p className="mt-[16px] text-[#d0d5dd] text-[16px] max-w-[480px] font-light tracking-[-0.3px] leading-[170%]">
                Get the definitive 'Healthcare Payment Compliance Checklist'
                to audit your current vendor today.
              </p>

              {/* BUTTON */}
              <button className="mt-[32px] px-[20px] py-[12px] rounded-[8px] bg-[#3b747f] hover:bg-[#5a9ca4] transition-colors duration-300 flex items-center gap-3 text-white text-[16px] tracking-[0%] leading-[24px] font-medium">
                <Download size={16} strokeWidth={2} />
                Download Checklist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}