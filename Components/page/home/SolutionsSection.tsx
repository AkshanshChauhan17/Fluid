import React from "react";
import {
  Lock,
  Monitor,
  CreditCard,
  Smartphone,
  ArrowRight,
} from "lucide-react";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#0F2133] py-[100px] px-8 lg:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-[60px]">
        {/* TOP CONTENT */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-10">
          {/* LEFT */}
          <div className="max-w-[477px]">
            <p className="text-[#5DA7CF] uppercase tracking-[0.1em] text-[16px] leading-[150%] font-normal mb-2">
              Platform Solutions
            </p>

            <h2 className="text-white text-[44px] leading-[56px] tracking-[-0.04em] font-medium">
              Healthcare <br />
              Payment Solutions
            </h2>
          </div>

          {/* RIGHT */}
          <p className="max-w-[588px] text-right text-[#D0D5DD] text-[16px] leading-[170%]">
            A healthcare payment system uses tokenization to replace
            sensitive data with tokens, protecting patient information and
            reducing breach risks.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#F8FAFD] rounded-[24px] p-[22px] h-[300px] relative overflow-hidden flex flex-col gap-[4px]">
              {/* Blur */}
              <div className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]" />

              {/* Raw Data */}
              <div className="relative z-10 border border-[#FFBFC2] bg-[#FDEFEF] rounded-lg px-4 py-[14px] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-[#FFBFC2] rounded-[4px] px-2 py-1">
                    <div className="w-3 h-2 bg-[#E4000B] rounded-sm" />
                  </div>

                  <span className="text-[#E4000B] font-semibold tracking-[-1px] text-[14px]">
                    4532 •••• •••• 7829
                  </span>
                </div>

                <div className="border border-[#FFBFC2] bg-[#FEDEDE] rounded px-2 py-1 text-[8px] font-medium text-[#E4000B]">
                  Raw data
                </div>
              </div>

              {/* Divider */}
              <div className="relative z-10 flex items-center gap-2">
                <div className="flex-1 h-[1px] bg-[#F0F7FF]" />

                <span className="text-[#3B747F] text-[11px] font-medium">
                  TOKENIZED
                </span>

                <ArrowRight
                  size={10}
                  className="text-[#3B747F]"
                />
              </div>

              {/* Token */}
              <div className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex items-center gap-4 overflow-hidden">
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <div className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex items-center justify-center shadow-md">
                  <Lock className="text-white" size={22} />
                </div>

                <div className="relative z-10">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Secure Token
                  </p>

                  <p className="text-white tracking-[2.8px] text-[11px]">
                    TKN · 1D38 · 55A9 · F2C4
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="relative z-10 grid grid-cols-3 gap-2 mt-auto">
                {[
                  "HIPAA aligned",
                  "Zero raw data stored",
                  "AES-256 encrypted",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-[#F0F7FF] rounded-lg bg-[#F8FAFD] h-10 flex items-center justify-center text-center px-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-1 text-center">
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                MedToken Technology
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Tokenized payment architecture designed for healthcare
                environments to protect sensitive payment information.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#F8FAFD] rounded-[24px] p-[22px] h-[300px] relative overflow-hidden flex flex-col gap-[4px]">
              <div className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]" />

              {/* Top */}
              <div className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex justify-between items-center overflow-hidden">
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <div className="relative z-10">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Annual Recovery
                  </p>

                  <h4 className="text-white text-[13px] font-semibold tracking-[-1px]">
                    $18,000
                  </h4>

                  <p className="text-[#D0D5DD] text-[9px]">
                    on $600K revenue
                  </p>
                </div>

                <div className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex flex-col items-center justify-center text-white">
                  <span className="text-[12px] font-semibold">3%</span>
                  <span className="text-[9px]">saved</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="relative z-10 grid grid-cols-2 gap-2">
                <div className="border border-[#FFBFC2] bg-[#FDEFEF] rounded-lg p-3">
                  <p className="text-[#E4000B] uppercase text-[8px] font-medium mb-1">
                    Card Price
                  </p>

                  <h5 className="text-[#E4000B] text-[12px] font-semibold tracking-[-1px]">
                    $103.00
                  </h5>

                  <p className="text-[#E4000B] text-[7px]">
                    Includes processing fee
                  </p>
                </div>

                <div className="border border-[#F0F7FF] bg-[#F8FAFD] rounded-lg p-3">
                  <p className="text-[#1D3855] uppercase text-[8px] font-medium mb-1">
                    Card Price
                  </p>

                  <h5 className="text-[#1D3855] text-[12px] font-semibold tracking-[-1px]">
                    $100.00
                  </h5>

                  <p className="text-[#73797B] text-[7px]">
                    No fee, you keep it all
                  </p>
                </div>
              </div>

              {/* Bars */}
              <div className="relative z-10 flex flex-col gap-2">
                {[
                  {
                    title: "With card fees",
                    width: "75%",
                    color: "bg-[#E4000B]",
                    value: "3.0%",
                    text: "#C04B4B",
                  },
                  {
                    title: "With dual pricing",
                    width: "5%",
                    color: "bg-[#00C853]",
                    value: "0%",
                    text: "#567185",
                  },
                ].map((bar) => (
                  <div
                    key={bar.title}
                    className="flex items-center gap-3"
                  >
                    <span className="text-[8px] text-[#567185] min-w-[90px]">
                      {bar.title}
                    </span>

                    <div className="flex-1 h-2 bg-[#EEEEEE] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${bar.color}`}
                        style={{ width: bar.width }}
                      />
                    </div>

                    <span
                      className="text-[8px] font-medium"
                      style={{ color: bar.text }}
                    >
                      {bar.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom tags */}
              <div className="relative z-10 grid grid-cols-3 gap-2 mt-auto">
                {[
                  "Zero processing cost",
                  "Customer choice",
                  "Instant savings",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-[#F0F7FF] rounded-lg bg-[#F8FAFD] h-10 flex items-center justify-center text-center px-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-1 text-center">
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                MED Pay Revenue Recovery
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Recover up to 3% or more of annual revenue by eliminating
                unnecessary credit card processing costs.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex flex-col gap-[24px]">
            <div className="bg-[#F8FAFD] rounded-[24px] p-[22px] h-[300px] relative overflow-hidden flex flex-col gap-[4px]">
              <div className="absolute w-[257px] h-[257px] bg-[#94B7DC] blur-[225px] top-[-173px] left-[71px]" />

              {/* Top */}
              <div className="relative z-10 bg-[#0F2133] rounded-lg p-4 flex justify-between items-center overflow-hidden">
                <div className="absolute w-[110px] h-[110px] rounded-full bg-[#1D3855] opacity-80 top-[-55px] right-[-10px]" />

                <div className="relative z-10">
                  <p className="text-[#5DA7CF] uppercase text-[8px] font-medium mb-2">
                    Powered by
                  </p>

                  <h4 className="text-white text-[13px] font-semibold">
                    Payroc
                  </h4>

                  <p className="text-[#D0D5DD] text-[9px]">
                    Enterprise payment network
                  </p>
                </div>

                <div className="relative z-10 w-[57px] h-[57px] rounded-lg bg-[#3B747F] flex flex-col items-center justify-center text-white">
                  <span className="text-[12px] font-semibold">
                    99.9%
                  </span>
                  <span className="text-[9px]">uptime</span>
                </div>
              </div>

              {/* Features */}
              <div className="relative z-10 grid grid-cols-3 gap-1">
                {[
                  {
                    icon: <Monitor size={12} />,
                    title: "POS terminal",
                    sub: "In-person card & NFC",
                  },
                  {
                    icon: <CreditCard size={12} />,
                    title: "Virtual POS",
                    sub: "Browser-based checkout",
                  },
                  {
                    icon: <Smartphone size={12} />,
                    title: "Digital payments",
                    sub: "Mobile & app-based",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] py-1 px-3 flex flex-col items-center text-center gap-2"
                  >
                    <div className="w-5 h-5 rounded bg-[#0F2133] flex items-center justify-center text-[#5DA7CF]">
                      {item.icon}
                    </div>

                    <div>
                      <h5 className="text-[#1D3855] text-[11px] font-semibold">
                        {item.title}
                      </h5>

                      <p className="text-[#73797B] text-[8px] leading-[10px] mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enterprise */}
              <div className="relative z-10 border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] py-1 px-3 flex justify-between items-center">
                <div>
                  <h5 className="text-[#1D3855] text-[12px] font-semibold">
                    Enterprise connectivity
                  </h5>

                  <p className="text-[#73797B] text-[9px]">
                    All channels unified
                  </p>
                </div>

                <div className="flex items-center gap-1 bg-[#E1F1F3] border border-[#B3D3D8] rounded px-2 py-1">
                  <div className="w-1 h-1 rounded-full bg-[#3F7C84]" />

                  <span className="text-[#3F7C84] text-[8px] font-medium">
                    All systems live
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="relative z-10 grid grid-cols-3 gap-1 mt-auto">
                {[
                  "Multi-channel payments",
                  "Real-time processing",
                  "PCI-DSS compliant",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-[#D8E3EF] rounded-lg bg-[#F8FAFD] h-10 flex items-center justify-center text-center px-2"
                  >
                    <span className="text-[#1D3855] text-[8px] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-1 text-center">
              <h3 className="text-white text-[20px] font-semibold leading-6 mb-3">
                Traditional Processing Infrastructure
              </h3>

              <p className="text-[#D0D5DD] text-[14px] leading-6">
                Enterprise payment connectivity powered by Payroc with
                modern POS, virtual POS, and digital payment tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}