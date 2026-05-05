"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Building2, AlertTriangle, Shield, PlusSquare } from "lucide-react";

export default function InfoGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="w-full bg-[#F8FAFD] py-0 px-8 md:px-0">
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto"
      >

        {/* Card 1 */}
        <div
          className={`bg-white border border-gray-200 rounded-[16px] p-[24px] md:p-[32px] 
          flex flex-col md:flex-row justify-between items-start md:items-center gap-6 col-span-1 md:col-span-4
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <Building2 className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] text-[#5DA7CF] mb-[20px] md:mb-[24px]" />
            <h3 className="text-[16px] md:text-[18px] font-[500] mb-[16px] md:mb-[24px] text-[#1D3855]">
              Why healthcare requires specialized payment infrastructure
            </h3>
            <p className="text-[13px] md:text-[12px] font-[400] text-[#73797B] leading-relaxed">
              General payment gateways lack the semantic layers needed to process medical codes (CPT/ICD-10) while maintaining patient privacy compliance at the transaction level.
            </p>
          </div>

          <div className="w-full md:min-w-[245px] h-[200px] md:min-h-[240px] relative rounded-xl overflow-hidden">
            <Image src="/hpp2.png" alt="payment" fill className="object-cover" />
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`bg-[#F0F7FF] border rounded-[16px] p-[24px] md:p-[32px] col-span-1 md:col-span-2 flex flex-col justify-center
          transition-all duration-700 delay-150
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <AlertTriangle className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] text-[#E4000B] mb-[20px] md:mb-[24px]" />
          <h3 className="text-[16px] md:text-[18px] font-[500] mb-[16px] md:mb-[24px] text-[#1D3855]">
            Risks of retail payment processors in healthcare
          </h3>
          <p className="text-[13px] md:text-[12px] font-[400] text-[#73797B] leading-relaxed">
            Non-compliant hardware can lead to massive HIPAA fines and data vulnerabilities that jeopardize both your practice and patient trust.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`bg-[#5DA7CF] text-white rounded-[16px] p-[24px] md:p-[32px] col-span-1 md:col-span-2 flex flex-col justify-center
          transition-all duration-700 delay-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Shield className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] mb-[20px] md:mb-[24px]" />
          <h3 className="text-[16px] md:text-[18px] font-[500] mb-[16px] md:mb-[24px]">
            How MedToken secures healthcare payments
          </h3>
          <p className="text-[13px] md:text-[12px] font-[400] leading-relaxed">
            Our proprietary vaulting technology decouples patient identity from financial data, ensuring zero PHI exposure during routing.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className={`bg-white border border-gray-200 rounded-[16px] p-[24px] md:p-[32px] 
          flex flex-col md:flex-row justify-between items-start md:items-center gap-6 col-span-1 md:col-span-4
          transition-all duration-700 delay-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div>
            <PlusSquare className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] text-[#5DA7CF] mb-[20px] md:mb-[24px]" />
            <h3 className="text-[16px] md:text-[18px] font-[500] mb-[16px] md:mb-[24px] text-[#1D3855]">
              Benefits for medical, dental, and wellness practices
            </h3>
            <p className="text-[13px] md:text-[12px] font-[400] text-[#73797B] leading-relaxed">
              From high-volume dental clinics to private wellness practices, our unified platform scales to your specific billing workflow.
            </p>
          </div>

          <div className="w-full md:min-w-[245px] h-[200px] md:min-h-[240px] relative rounded-xl overflow-hidden">
            <Image src="/hpp3.png" alt="doctor" fill className="object-cover" />
          </div>
        </div>

      </div>
    </section>
  );
}