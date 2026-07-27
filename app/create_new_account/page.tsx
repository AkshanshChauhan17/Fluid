"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, Eye, EyeOff, ArrowLeft, Check } from "lucide-react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const GoogleLoginButton = dynamic(
  () => import("@/Components/global/GoogleLoginButton"),
  {
    ssr: false,
  },
);

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CreateNewAccount() {
  const router = useRouter();

  // Step 1: Register, Step 2: Verify OTP
  const [step, setStep] = useState(1);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ============================================
  // STEP 1: REQUEST OTP
  // ============================================
  const handleCreateAccount = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.fluid.financial/ca.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "register_request",
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStep(2); // Move to OTP verification step
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // STEP 2: VERIFY OTP
  // ============================================
  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.fluid.financial/ca.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "verify_otp",
          email,
          otp,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        // Notify all components in the same tab
        window.dispatchEvent(new Event("userAuthChange"));
        router.push("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
      setError("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white px-5 sm:px-8 lg:px-0 py-[50px] sm:py-[100px] flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-[40px] sm:gap-[60px]"
      >
        {/* LEFT SIDE */}

        <motion.div
          variants={fadeUpVariants}
          className="w-full max-w-[500px] flex flex-col items-start"
        >
          <AnimatePresence mode="wait">
            {step === 1 ? (
              // ============================================
              // REGISTRATION FORM
              // ============================================
              <motion.div
                key="register-step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-start gap-[28px] sm:gap-[32px]"
              >
                {/* HEADER */}
                <div className="w-full flex flex-col items-start gap-[14px]">
                  <div className="w-full flex flex-col items-start gap-[8px]">
                    <h1 className="text-[#0F2133] text-[28px] sm:text-[32px] leading-[110%] sm:leading-[32px] tracking-[-0.03em] font-medium">
                      Create an Account
                    </h1>

                    <p className="text-[#73797B] text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.03em] font-normal max-w-[540px]">
                      By creating an account, you may receive newsletters or
                      promotions
                    </p>
                  </div>
                </div>

                {/* FORM AREA */}
                <div className="w-full flex flex-col items-start gap-[20px]">
                  <div className="w-full flex flex-col items-end gap-[24px]">
                    {/* INPUTS */}
                    <div className="w-full flex flex-col items-center gap-[24px]">
                      <div className="w-full flex flex-col items-start gap-[8px]">
                        {/* FULL NAME */}
                        <div className="w-full flex flex-col items-start gap-[4px]">
                          <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                            Full Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your full name"
                            className="w-full h-[48px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none focus:border-[#3B747F] transition-all duration-300"
                          />
                        </div>

                        {/* EMAIL */}
                        <div className="w-full flex flex-col items-start gap-[4px]">
                          <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                            Email
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full h-[48px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none focus:border-[#3B747F] transition-all duration-300"
                          />
                        </div>

                        {/* PASSWORD */}
                        <div className="w-full flex flex-col items-start gap-[4px]">
                          <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                            Password
                          </label>
                          <div className="w-full h-[48px] border border-[#D0D5DD] rounded-[8px] px-[16px] flex items-center gap-[8px] transition-all duration-300 focus-within:border-[#3B747F]">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter your password"
                              className="flex-1 bg-transparent text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="shrink-0"
                            >
                              {showPassword ? (
                                <Eye size={16} className="text-[#73797B]" />
                              ) : (
                                <EyeOff size={16} className="text-[#73797B]" />
                              )}
                            </button>
                          </div>
                        </div>

                        {/* ERROR */}
                        {error && (
                          <div className="w-full rounded-[8px] bg-red-50 border border-red-200 px-[14px] py-[12px] mt-[10px]">
                            <p className="text-red-600 text-[14px]">{error}</p>
                          </div>
                        )}
                      </div>

                      {/* CREATE ACCOUNT BUTTON */}
                      <motion.button
                        whileHover={{ opacity: 0.92, y: -2 }}
                        whileTap={{ scale: 0.995 }}
                        disabled={loading}
                        onClick={handleCreateAccount}
                        className="w-full h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] transition-all duration-300 disabled:opacity-60"
                      >
                        <span className="text-white text-[16px] leading-[24px] font-semibold">
                          {loading ? "Processing..." : "Create an Account"}
                        </span>
                        {!loading && (
                          <ChevronRight size={16} className="text-white" strokeWidth={2} />
                        )}
                      </motion.button>
                    </div>

                    {/* DIVIDER */}
                    <div className="w-full flex items-center gap-[8px]">
                      <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
                      <span className="text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] whitespace-nowrap">
                        or sign in with
                      </span>
                      <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
                    </div>

                    {/* SOCIALS */}
                    <div className="w-full flex items-center gap-[8px]">
                      <GoogleLoginButton />
                    </div>
                  </div>

                  {/* SIGN IN LINK */}
                  <p className="w-full text-center text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] mt-[10px]">
                    Already have an account?{" "}
                    <Link href={"/signin"}>
                      <button className="text-[#3B747F] underline cursor-pointer">
                        Sign In
                      </button>
                    </Link>
                  </p>
                </div>
              </motion.div>
            ) : (
              // ============================================
              // OTP VERIFICATION VIEW
              // ============================================
              <motion.div
                key="otp-step"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full flex flex-col items-start gap-[28px]"
              >
                {/* BACK BUTTON */}
                <button
                  onClick={() => {
                    setStep(1);
                    setError("");
                    setOtp("");
                  }}
                  className="flex items-center gap-2 text-[#73797B] hover:text-[#0F2133] transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span className="text-[14px] font-medium">Change Email</span>
                </button>

                {/* HEADER */}
                <div className="w-full flex flex-col items-start gap-[8px]">
                  <h1 className="text-[#0F2133] text-[28px] sm:text-[32px] leading-[110%] sm:leading-[32px] tracking-[-0.03em] font-medium">
                    Verify Your Email
                  </h1>
                  <p className="text-[#73797B] text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.03em] font-normal max-w-[540px]">
                    We have sent a 6-digit code to <strong className="text-[#1D3855]">{email}</strong>. 
                    Please enter it below to complete your registration.
                  </p>
                </div>

                <div className="w-full flex flex-col gap-[20px]">
                  {/* OTP INPUT */}
                  <div className="w-full flex flex-col gap-[4px]">
                    <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} // Numeric only
                      placeholder="Enter 6-digit code"
                      className="w-full h-[52px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[20px] tracking-[0.2em] text-[#0F2133] text-center placeholder:text-[#73797B] placeholder:tracking-normal outline-none focus:border-[#3B747F] transition-all duration-300"
                    />
                  </div>

                  {/* ERROR */}
                  {error && (
                    <div className="w-full rounded-[8px] bg-red-50 border border-red-200 px-[14px] py-[12px]">
                      <p className="text-red-600 text-[14px] text-center">{error}</p>
                    </div>
                  )}

                  {/* VERIFY BUTTON */}
                  <motion.button
                    whileHover={{ opacity: 0.92, y: -2 }}
                    whileTap={{ scale: 0.995 }}
                    disabled={loading || otp.length < 6}
                    onClick={handleVerifyOTP}
                    className="w-full h-[48px] bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] transition-all duration-300 disabled:opacity-60 mt-[8px]"
                  >
                    <span className="text-white text-[16px] leading-[24px] font-semibold">
                      {loading ? "Verifying..." : "Verify Account"}
                    </span>
                    {!loading && (
                      <Check size={16} className="text-white" strokeWidth={2.5} />
                    )}
                  </motion.button>
                  
                  {/* RESEND LINK */}
                  <p className="w-full text-center text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] mt-[4px]">
                    Did not receive the code?{" "}
                    <button 
                      onClick={handleCreateAccount} 
                      disabled={loading}
                      className="text-[#3B747F] underline cursor-pointer disabled:opacity-50"
                    >
                      Resend
                    </button>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          variants={fadeUpVariants}
          className="relative w-full max-w-[680px] h-[420px] sm:h-[560px] lg:h-[707px] rounded-[20px] overflow-hidden flex items-end p-[24px] sm:p-[40px]"
        >
          {/* IMAGE */}
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          >
            <Image
              src="/signin-banner.png"
              alt="Partner Portal"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(201.94deg,rgba(119,105,96,0)_46.07%,#79685C_85.4%)]" />

          {/* CONTENT */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 w-full max-w-[436px] flex flex-col items-start gap-[8px]"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="text-white text-[30px] sm:text-[36px] leading-[115%] sm:leading-[44px] tracking-[-0.03em] font-medium"
            >
              Partner &amp; Client Portal
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-[#D0D5DD] text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.03em] font-normal"
            >
              Access your Fluid Financial account dashboard to manage payment
              services, review reports, and access partner tools.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}