"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Download,
  ChevronRight,
  ArrowLeft,
  Mail,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { motion, Variants, AnimatePresence } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 },
  },
};

export default function DownloadResourceSection() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ============================================
  // STEP 1: REQUEST DOWNLOAD (SEND OTP)
  // ============================================
  const handleRequestDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.fluid.financial/download.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "request_download",
          name,
          email,
          practice_name: practiceName,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStep(2);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  // ============================================
  // STEP 2: VERIFY OTP & GET CHECKLIST
  // ============================================
  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://api.fluid.financial/download.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "verify_otp",
          email,
          otp,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStep(3);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-white py-0 px-5 sm:px-8 lg:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          variants={fadeUpVariants}
          className="
            relative
            overflow-hidden
            rounded-[20px]
            sm:rounded-[24px]
            px-5
            sm:px-8
            lg:px-[100px]
            py-[44px]
            sm:py-[64px]
            bg-[linear-gradient(72deg,#0d2134,#10344b)]
          "
        >
          <motion.div
            animate={{
              opacity: [0.45, 0.7, 0.45],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[-120px]
              top-[-80px]
              w-[320px]
              h-[320px]
              bg-[#081f39]
              opacity-60
              blur-[90px]
            "
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            {/* LEFT SIDE: IMAGE */}
            <motion.div
              variants={fadeUpVariants}
              whileHover={{ y: -4 }}
              className="
                relative
                w-full
                max-w-[450px]
                h-[280px]
                sm:h-[340px]
                rounded-[18px]
                overflow-hidden
                shrink-0
              "
            >
              <motion.div
                animate={{ scale: [1, 1.03, 1] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/Border.png"
                  alt="Healthcare Payment Compliance Checklist"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <div className="absolute inset-0 bg-[#0E213450]" />

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-5
                  left-5
                  w-9
                  h-9
                  rounded-[10px]
                  bg-white/10
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  border
                  border-white/10
                "
              >
                <FileText size={18} className="text-white" strokeWidth={1.8} />
              </motion.div>

              <div className="absolute bottom-5 left-5 pr-5">
                <p className="text-white text-[18px] sm:text-[20px] leading-[130%] tracking-[-1px] font-medium">
                  Healthcare Payment Compliance Checklist
                </p>
              </div>
            </motion.div>

            {/* RIGHT SIDE: FORM */}
            <motion.div variants={containerVariants} className="flex-1 w-full max-w-[500px]">
              <AnimatePresence mode="wait">
                {/* STEP 1: FORM */}
                {step === 1 && (
                  <motion.form
                    key="step-1"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onSubmit={handleRequestDownload}
                    className="flex flex-col w-full"
                  >
                    <h2 className="text-white text-[28px] sm:text-[36px] leading-[115%] tracking-[-0.03em] font-medium mb-2">
                      Get Your Free Checklist
                    </h2>
                    <p className="text-[#d0d5dd] text-[15px] sm:text-[16px] leading-[160%] font-light mb-8">
                      Complete the form below to receive the definitive compliance audit PDF directly to your inbox.
                    </p>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-medium text-[#d0d5dd]">Full Name</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full h-[30px] bg-white/5 border border-white/10 rounded-[10px] px-4 text-[15px] text-white placeholder:text-white/30 outline-none focus:border-[#5DA7CF] focus:bg-white/10 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-medium text-[#d0d5dd]">Practice Name</label>
                        <input
                          type="text"
                          required
                          value={practiceName}
                          onChange={(e) => setPracticeName(e.target.value)}
                          placeholder="Fluid Healthcare LLC"
                          className="w-full h-[30px] bg-white/5 border border-white/10 rounded-[10px] px-4 text-[15px] text-white placeholder:text-white/30 outline-none focus:border-[#5DA7CF] focus:bg-white/10 transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-medium text-[#d0d5dd]">Work Email</label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full h-[30px] bg-white/5 border border-white/10 rounded-[10px] px-4 text-[15px] text-white placeholder:text-white/30 outline-none focus:border-[#5DA7CF] focus:bg-white/10 transition-colors"
                        />
                      </div>

                      {error && <p className="text-red-400 text-[13px] font-medium">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-[48px] bg-[#3b747f] hover:bg-[#5a9ca4] text-white rounded-[10px] font-semibold mt-2 flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
                      >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
                        {loading ? "Processing..." : "Send Me The Checklist"}
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 2: OTP VERIFICATION */}
                {step === 2 && (
                  <motion.form
                    key="step-2"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onSubmit={handleVerifyOTP}
                    className="flex flex-col w-full"
                  >
                    <button
                      type="button"
                      onClick={() => { setStep(1); setError(""); setOtp(""); }}
                      className="flex items-center gap-2 text-[#d0d5dd] hover:text-white transition-colors text-[13px] font-medium mb-6 w-fit"
                    >
                      <ArrowLeft size={14} /> Change Email
                    </button>

                    <h2 className="text-white text-[28px] sm:text-[36px] leading-[115%] tracking-[-0.03em] font-medium mb-2">
                      Verify Your Email
                    </h2>
                    
                    <div className="bg-white/5 border border-white/10 rounded-[12px] p-5 mb-6 mt-4">
                      <Mail size={24} className="text-[#5DA7CF] mb-3" />
                      <p className="text-[#d0d5dd] text-[15px] leading-relaxed">
                        We sent a 6-digit code to <strong className="text-white">{email}</strong>. Enter it below to receive your checklist.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[13px] font-medium text-[#d0d5dd]">Verification Code</label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                          placeholder="000000"
                          className="w-full h-[52px] bg-white/5 border border-white/10 rounded-[10px] px-4 text-[24px] tracking-[0.3em] text-center text-white placeholder:text-white/20 placeholder:tracking-normal outline-none focus:border-[#5DA7CF] focus:bg-white/10 transition-colors"
                        />
                      </div>

                      {error && <p className="text-red-400 text-[13px] font-medium text-center">{error}</p>}

                      <button
                        type="submit"
                        disabled={loading || otp.length < 6}
                        className="w-full h-[48px] bg-[#3b747f] hover:bg-[#5a9ca4] text-white rounded-[10px] font-semibold mt-2 flex items-center justify-center transition-colors disabled:opacity-70"
                      >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : "Verify & Download"}
                      </button>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: SUCCESS */}
                {step === 3 && (
                  <motion.div
                    key="step-3"
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-start w-full py-6"
                  >
                    <div className="w-16 h-16 bg-[#3b747f]/20 border border-[#3b747f]/30 rounded-full flex items-center justify-center text-[#5DA7CF] mb-6">
                      <CheckCircle2 size={32} />
                    </div>
                    <h2 className="text-white text-[28px] sm:text-[36px] leading-[115%] tracking-[-0.03em] font-medium mb-3">
                      You're All Set!
                    </h2>
                    <p className="text-[#d0d5dd] text-[16px] leading-[170%]">
                      Thank you, {name}. The checklist has been successfully sent to <strong className="text-white">{email}</strong>. 
                      <br /><br />
                      Please check your inbox (and spam folder) to download your document.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}