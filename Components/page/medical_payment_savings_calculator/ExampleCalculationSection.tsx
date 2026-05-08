import Image from "next/image";
import { CloudUpload } from "lucide-react";

export default function ExampleCalculationSection() {
  return (
    <section className="w-full py-0">
      <div className="max-w-7xl px-8 sm:px-0 m-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        
        {/* LEFT FORM CARD */}
        <div className="bg-[#F8FAFD] rounded-[24px] p-[40px] flex flex-col items-center gap-[24px] min-h-[784px]">
          
          {/* HEADING */}
          <div className="w-full">
            <h2 className="text-[#1D3855] text-[24px] leading-[31px] tracking-[-0.3px] font-semibold">
              Example Calculation
            </h2>
          </div>

          {/* FORM FIELDS */}
          <div className="w-full flex flex-col gap-[32px]">
            
            {[
              {
                label: "Name",
                placeholder: "Enter your name",
              },
              {
                label: "Practice Name",
                placeholder: "Enter your practice name",
              },
              {
                label: "Email",
                placeholder: "Enter your email",
              },
              {
                label: "Phone",
                placeholder: "Enter your phone",
              },
            ].map((field, index) => (
              <div
                key={index}
                className="w-full flex flex-col items-start gap-[4px]"
              >
                
                {/* LABEL */}
                <label className="w-full text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                  {field.label}
                </label>

                {/* INPUT */}
                <input
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full h-[48px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[#0F2133] text-[16px] leading-[24px] tracking-[-0.03em] placeholder:text-[#73797B] outline-none"
                />
              </div>
            ))}
          </div>

          {/* FILE UPLOAD */}
          <div className="w-full h-[168px] bg-[#EEEEEE] border-2 border-dashed border-[#D0D5DD] rounded-[16px] px-[40px] py-[40px] flex flex-col items-center justify-center gap-[16px]">
            
            {/* ICON */}
            <div className="w-[33px] h-[24px] flex items-center justify-center">
              <CloudUpload
                size={33}
                className="text-[#73797B]"
                strokeWidth={1.8}
              />
            </div>

            {/* TEXT */}
            <div className="flex flex-col items-center gap-[8px]">
              <p className="text-[#1D3855] text-[14px] leading-[20px] tracking-[-0.3px] font-semibold text-center">
                Upload processing statement
              </p>

              <p className="text-[#73797B] text-[12px] leading-[16px] tracking-[-0.3px] font-normal text-center">
                PDF, JPG or PNG (Max 10MB)
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="w-[304px] h-[48px] bg-[#3B747F] rounded-[8px] px-[20px] py-[12px] flex items-center justify-center text-white text-[16px] leading-[24px] font-semibold hover:bg-[#477f8a] transition-colors duration-300">
            Request Custom Savings Analysis
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative min-h-[784px] rounded-[24px] overflow-hidden">
          <Image
            src="/ExampleCalculation.png"
            alt="Example Calculation"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}