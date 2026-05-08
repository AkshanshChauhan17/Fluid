"use client";

import Image from "next/image";
import {
  ChevronRight,
  EyeOff,
} from "lucide-react";
import {
  FaApple,
  FaGoogle,
} from "react-icons/fa";

export default function SignIn() {
  return (
    <section className="w-full min-h-screen bg-white px-8 sm:px-0 py-[50px] sm:py-[100px] flex items-center justify-center">
      
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-[60px]">
        
        {/* LEFT SIDE */}
        <div className="w-full flex flex-col items-start gap-[32px]">
          
          {/* HEADER */}
          <div className="w-full flex flex-col items-start gap-[14px]">
            
            <div className="w-full flex flex-col items-start gap-[8px]">
              
              <h1 className="text-[#0F2133] text-[32px] leading-[32px] tracking-[-0.03em] font-medium">
                Welcome back to Fluid Financial
              </h1>

              <p className="text-[#73797B] text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
                Sign in to access your profile, history, and private pages
              </p>
            </div>
          </div>

          {/* FORM AREA */}
          <div className="w-full flex flex-col items-start gap-[20px]">
            
            <div className="w-full flex flex-col items-end gap-[24px]">
              
              {/* INPUTS */}
              <div className="w-full flex flex-col items-center gap-[24px]">
                
                <div className="w-full flex flex-col items-start gap-[8px]">
                  
                  {/* EMAIL */}
                  <div className="w-full flex flex-col items-start gap-[4px]">
                    
                    <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[48px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none focus:border-[#3B747F]"
                    />
                  </div>

                  {/* PASSWORD */}
                  <div className="w-full flex flex-col items-start gap-[4px]">
                    
                    <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                      Password
                    </label>

                    <div className="w-full h-[48px] border border-[#D0D5DD] rounded-[8px] px-[16px] flex items-center gap-[8px]">
                      
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="flex-1 bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none"
                      />

                      <EyeOff
                        size={16}
                        className="text-[#73797B]"
                      />
                    </div>
                  </div>

                  {/* REMEMBER */}
                  <div className="w-full flex items-center justify-between">
                    
                    <label className="flex items-center gap-[8px] cursor-pointer">
                      
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] rounded-[4px] border border-[#D0D5DD]"
                      />

                      <span className="text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em]">
                        Remember me
                      </span>
                    </label>

                    <button className="text-[#3B747F] underline text-[14px] leading-[20px] tracking-[-0.03em]">
                      Forgot Password
                    </button>
                  </div>
                </div>

                {/* SIGN IN BUTTON */}
                <button className="w-full h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity">
                  
                  <span className="text-white text-[16px] leading-[24px] font-semibold">
                    Sign In
                  </span>

                  <ChevronRight
                    size={16}
                    className="text-white"
                    strokeWidth={2}
                  />
                </button>
              </div>

              {/* DIVIDER */}
              <div className="w-full flex items-center gap-[8px]">
                
                <div className="flex-1 h-[1px] bg-[#D0D5DD]" />

                <span className="text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] whitespace-nowrap">
                  or signin with
                </span>

                <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
              </div>

              {/* SOCIALS */}
              <div className="w-full flex items-center gap-[8px]">
                
                <button className="flex-1 h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors">
                  
                  <FaGoogle
                    size={16}
                    className="text-[#0F2133]"
                  />

                  <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
                    Google
                  </span>
                </button>

                <button className="flex-1 h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors">
                  
                  <FaApple
                    size={18}
                    className="text-black"
                  />

                  <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
                    Apple
                  </span>
                </button>
              </div>
            </div>

            {/* CREATE ACCOUNT */}
            <p className="w-full text-center text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em]">
              Don’t have an account?{" "}
              <button className="text-[#3B747F] underline">
                Create an Account
              </button>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full max-w-[680px] h-[707px] rounded-[20px] overflow-hidden flex items-end p-[40px]">
          
          {/* IMAGE */}
          <Image
            src="/signin-banner.png"
            alt="Partner Portal"
            fill
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(201.94deg,rgba(119,105,96,0)_46.07%,#79685C_85.4%)]" />

          {/* CONTENT */}
          <div className="relative z-10 w-full max-w-[436px] flex flex-col items-start gap-[8px]">
            
            <h2 className="text-white text-[36px] leading-[44px] tracking-[-0.03em] font-medium">
              Partner &amp; Client Portal
            </h2>

            <p className="text-[#D0D5DD] text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
              Access your Fluid Financial account dashboard to manage
              payment services, review reports, and access partner tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}