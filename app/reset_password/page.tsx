"use client";

import { ChevronRight, Lock } from "lucide-react";

export default function ResetPassword() {
  return (
    <section className="w-full bg-white px-5 lg:px-[100px] py-[100px] flex flex-col justify-end items-center">
      
      <div className="w-full max-w-[500px] flex flex-col items-start gap-[32px]">
        
        {/* ICON */}
        <div className="w-[72px] h-[72px] rounded-[12px] bg-[#E7FAFD] flex items-center justify-center">
          <Lock
            size={32}
            strokeWidth={2}
            className="text-[#3B747F]"
          />
        </div>

        {/* HEADER */}
        <div className="w-full flex flex-col items-start gap-[14px]">
          
          <div className="w-full flex flex-col items-start gap-[8px]">
            
            <h1 className="w-full text-[#0F2133] text-[32px] leading-[32px] tracking-[-0.03em] font-medium">
              Reset Password
            </h1>

            <p className="w-full text-[#73797B] text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
              Enter your email address, and we’ll send you a password reset link
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full flex flex-col items-start gap-[20px]">
          
          <div className="w-full flex flex-col items-center gap-[24px]">
            
            {/* EMAIL */}
            <div className="w-full flex flex-col items-start gap-[4px]">
              
              <label className="w-full text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[48px] px-[16px] border border-[#D0D5DD] rounded-[8px] bg-white outline-none text-[16px] text-[#0F2133] placeholder:text-[#73797B] focus:border-[#3B747F]"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity duration-300">
              
              <span className="text-white text-[16px] leading-[24px] font-semibold">
                Send Reset Link
              </span>

              <ChevronRight
                size={16}
                strokeWidth={2}
                className="text-white"
              />
            </button>
          </div>

          {/* FOOTER */}
          <p className="w-full text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
            Don't need to reset your password?{" "}
            <button className="text-[#3B747F] underline font-medium">
              Sign In
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}