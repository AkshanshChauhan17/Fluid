import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BlogDetailsPage() {
  return (
    <section className="max-w-7xl m-auto px-8 sm:px-0 flex flex-col items-start gap-[40px]">
      
      {/* BREADCRUMB */}
      <div className="flex items-center gap-[10px]">
        <span className="text-[#73797B] text-[14px] leading-[17px] tracking-[-0.3px] font-normal">
          Blogs
        </span>

        <span className="text-[#737373] text-[14px] leading-[17px]">
          &gt;
        </span>

        <span className="text-[#3B747F] text-[14px] leading-[17px] tracking-[-0.3px] font-medium">
          You are here
        </span>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-7xl flex flex-col items-start gap-[40px]">
        
        {/* HERO */}
        <div className="w-full flex flex-col items-start gap-[32px]">
          
          {/* IMAGE */}
          <div className="relative w-full h-[400px] rounded-[20px] overflow-hidden">
            <Image
              src="/blog1.png"
              alt="Healthcare Fintech"
              fill
              className="object-cover"
            />
          </div>

          {/* TITLE CONTENT */}
          <div className="w-full px-[12px] flex flex-col items-start gap-[12px]">
            
            <p className="text-[#737373] text-[16px] leading-[28px] tracking-[-0.3px] font-normal">
              By <b className="text-black font-medium">James West</b> &nbsp;|&nbsp; Feb 28, 2025
            </p>

            <h1 className="max-w-[1216px] text-[#4C4477] text-[36px] leading-[140%] tracking-[-0.04em] font-semibold">
              Healthcare Fintech Innovation: How MedToken and ICX Are
              Redefining Payment Security and Compliance
            </h1>
          </div>
        </div>

        {/* INTRO CONTENT */}
        <div className="w-full flex flex-col items-start gap-[16px]">
          
          <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px] font-normal">
            Healthcare payments are undergoing a fundamental shift.
          </p>

          <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px] font-normal">
            Legacy payment systems, largely built for retail, were never
            designed to handle the complexity of protected health information,
            regulatory oversight and rising cybersecurity threats. As
            enforcement around the HIPAA Security Rule tightens, healthcare
            organizations are being forced to rethink how payments intersect
            with patient data.
          </p>

          <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px] font-normal">
            At Fluid Financial, that rethink has already happened
          </p>

          <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px] font-normal">
            MedToken and ICX represent a new class of healthcare fintech
            infrastructure, built from the ground up to separate sensitive
            data, reduce risk and modernize how transactions are processed in
            clinical environments.
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="w-full flex flex-col items-start gap-[20px]">
          
          <h2 className="text-[#1D3855] text-[20px] leading-[160%] tracking-[-0.3px] font-medium">
            The problem: Payments were never built for healthcare
          </h2>

          <div className="w-full flex flex-col items-start gap-[16px]">
            
            <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
              Most payment processors were designed for retail transactions,
              not regulated healthcare environments.
            </p>

            <div className="flex flex-col items-start gap-[12px]">
              
              <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                That creates three persistent challenges:
              </p>

              <ul className="list-disc pl-[28px] flex flex-col gap-[2px]">
                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  Patient data and payment data are often intertwined
                </li>

                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  Many processors will not sign Business Associate Agreements,
                  or BAAs
                </li>

                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  Compliance risk increases as data flows across multiple
                  systems
                </li>
              </ul>
            </div>

            <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
              As regulators increase scrutiny, these gaps are no longer
              theoretical. They are operational and financial risks.
            </p>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="w-full flex flex-col items-start gap-[20px]">
          
          <h2 className="text-[#1D3855] text-[20px] leading-[160%] tracking-[-0.3px] font-medium">
            MedToken: Removing PHI from the payment stream
          </h2>

          <div className="w-full flex flex-col items-start gap-[16px]">
            
            <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
              MedToken is Fluid Financial’s patent-pending architecture
              designed to eliminate protected health information from payment
              workflows.
            </p>

            <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
              Instead of passing sensitive patient data through payment
              systems, MedToken restructures the transaction flow so that
              payments occur without exposing PHI.
            </p>

            <div className="flex flex-col items-start gap-[12px]">
              
              <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                What that means in practice:
              </p>

              <ul className="list-disc pl-[28px] flex flex-col gap-[2px]">
                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  Payment data is separated from patient records
                </li>

                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  The payment environment is no longer a repository for ePHI
                </li>

                <li className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
                  Compliance exposure is significantly reduced
                </li>
              </ul>
            </div>

            <p className="text-[#73797B] text-[18px] leading-[160%] tracking-[-0.3px]">
              This approach aligns with the direction of modern healthcare
              regulation: minimize where sensitive data exists and reduce the
              number of systems that touch it.
            </p>
          </div>
        </div>

        {/* FOOTER NAV */}
        <div className="w-full border-t border-[#EEEEEE] pt-[40px] flex items-start justify-between">
          
          {/* PREV */}
          <button className="h-[48px] px-[20px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors duration-300">
            <ChevronLeft
              size={16}
              className="text-[#1D3855]"
              strokeWidth={2}
            />

            <span className="text-[#1D3855] text-[16px] leading-[24px] font-semibold capitalize">
              Previous Blog
            </span>
          </button>

          {/* NEXT */}
          <button className="h-[48px] px-[20px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors duration-300">
            <span className="text-[#1D3855] text-[16px] leading-[24px] font-semibold capitalize">
              Next Blog
            </span>

            <ChevronRight
              size={16}
              className="text-[#1D3855]"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </section>
  );
}