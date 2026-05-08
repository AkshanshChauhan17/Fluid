import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export interface FeatureSectionData {
  title: string;
  image: string;
  paragraphs: string[];
  keyBenefitsTitle?: string;
  benefits: string[];
  rev?: boolean;
}

interface Props {
  data: FeatureSectionData;
}

export default function FeatureCard({ data }: Props) {
  return (
    <section className="w-full">
      <div className={`max-w-7xl mx-auto px-0 sm:px-8 border border-[#EEEEEE] rounded-[24px] bg-white p-[40px] flex flex-col items-center gap-[40px] ${data.rev ? "sm:flex-row-reverse" : "sm:flex-row"}`}>
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:max-w-[580px] flex flex-col items-start gap-[24px]">
          
          {/* TITLE */}
          <h2 className="max-w-[444px] text-[#1D3855] text-[36px] leading-[125%] tracking-[-2px] font-medium">
            {data.title}
          </h2>

          {/* CONTENT */}
          <div className="w-full flex flex-col items-start gap-[20px]">
            
            {/* PARAGRAPHS */}
            <div className="w-full flex flex-col items-start gap-[10px]">
              {data.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#73797B] text-[14px] leading-[170%] tracking-[-0.3px] opacity-[0.84]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            {/* BENEFITS */}
            <div className="w-full flex flex-col items-start gap-[8px]">
              
              {data.keyBenefitsTitle && (
                <p className="text-[#73797B] text-[14px] leading-[170%] tracking-[-0.3px] opacity-[0.84]">
                  {data.keyBenefitsTitle}
                </p>
              )}

              {/* BENEFIT ITEMS */}
              <div className="w-full flex flex-col items-start gap-[6px]">
                {data.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="w-full flex items-center gap-[12px]"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-[#3B747F] shrink-0"
                      fill="#3B747F"
                      stroke="white"
                      strokeWidth={2}
                    />

                    <p
                      className="text-[#73797B] text-[13px] leading-[18px]"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full lg:w-[580px] h-[468px] overflow-hidden rounded-[16px] border border-[#EEEEEE] shrink-0">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}