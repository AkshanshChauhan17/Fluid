"use client";

import { ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ResetPassword() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSendOtp = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("https://api.fluid.financial/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "send_otp", email }),
      });
      
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(data.message);
        setStep(2);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    try {
      const res = await fetch("https://api.fluid.financial/email.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: "reset_password", email, otp, password }),
      });
      
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(data.message);
        setStep(3);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white px-5 lg:px-[100px] py-[100px] flex flex-col justify-center items-center">
      <div className="w-full max-w-[500px] flex flex-col items-start gap-[32px]">
        
        <div className="w-[72px] h-[72px] rounded-[12px] bg-[#E7FAFD] flex items-center justify-center">
          {step === 3 ? (
            <CheckCircle2 size={32} strokeWidth={2} className="text-[#3B747F]" />
          ) : (
            <Lock size={32} strokeWidth={2} className="text-[#3B747F]" />
          )}
        </div>

        <div className="w-full flex flex-col items-start gap-[14px]">
          <div className="w-full flex flex-col items-start gap-[8px]">
            <h1 className="w-full text-[#0F2133] text-[32px] leading-[32px] tracking-[-0.03em] font-medium">
              {step === 1 && "Reset Password"}
              {step === 2 && "Enter OTP & New Password"}
              {step === 3 && "Password Reset Complete"}
            </h1>
            <p className="w-full text-[#73797B] text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
              {step === 1 && "Enter your email address, and we’ll send you an OTP to reset your password."}
              {step === 2 && `We sent a 6-digit code to ${email}.`}
              {step === 3 && "Your password has been successfully updated. You can now sign in."}
            </p>
          </div>
        </div>

        {error && (
          <div className="w-full p-4 bg-red-50 border border-red-200 text-red-600 rounded-[8px] text-[14px]">
            {error}
          </div>
        )}

        {successMsg && step === 2 && (
          <div className="w-full p-4 bg-green-50 border border-green-200 text-green-700 rounded-[8px] text-[14px]">
            {successMsg}
          </div>
        )}

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-full flex flex-col items-center gap-[24px]">
              <div className="w-full flex flex-col items-start gap-[4px]">
                <label className="w-full text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[48px] px-[16px] border border-[#D0D5DD] rounded-[8px] bg-white outline-none text-[16px] text-[#0F2133] placeholder:text-[#73797B] focus:border-[#3B747F]"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full cursor-pointer h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                <span className="text-white text-[16px] leading-[24px] font-semibold">
                  {loading ? "Sending..." : "Send Reset Link"}
                </span>
                {!loading && <ChevronRight size={16} strokeWidth={2} className="text-white" />}
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleResetPassword} className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-full flex flex-col items-center gap-[24px]">
              
              <div className="w-full flex flex-col items-start gap-[4px]">
                <label className="w-full text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                  6-Digit OTP
                </label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="w-full h-[48px] px-[16px] border border-[#D0D5DD] rounded-[8px] bg-white outline-none text-[16px] text-[#0F2133] placeholder:text-[#73797B] focus:border-[#3B747F] tracking-widest"
                />
              </div>

              <div className="w-full flex flex-col items-start gap-[4px]">
                <label className="w-full text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                  New Password
                </label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password (min. 6 characters)"
                  className="w-full h-[48px] px-[16px] border border-[#D0D5DD] rounded-[8px] bg-white outline-none text-[16px] text-[#0F2133] placeholder:text-[#73797B] focus:border-[#3B747F]"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full cursor-pointer h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                <span className="text-white text-[16px] leading-[24px] font-semibold">
                  {loading ? "Updating..." : "Reset Password"}
                </span>
                {!loading && <ChevronRight size={16} strokeWidth={2} className="text-white" />}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="w-full flex flex-col items-start gap-[20px]">
            <Link href="/signin" className="w-full">
              <button className="w-full cursor-pointer h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity duration-300">
                <span className="text-white text-[16px] leading-[24px] font-semibold">
                  Go to Sign In
                </span>
                <ChevronRight size={16} strokeWidth={2} className="text-white" />
              </button>
            </Link>
          </div>
        )}

        {step !== 3 && (
          <p className="w-full text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] font-normal mt-4">
            Don't need to reset your password?{" "}
            <Link href="/signin">
              <button type="button" className="text-[#3B747F] underline font-medium cursor-pointer">
                Sign In
              </button>
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}