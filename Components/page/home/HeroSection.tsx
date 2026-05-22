"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Shield, Lock, CheckCircle2, Activity, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import AnalysisImpactSection from "../medical_payment_savings_calculator/AnalysisImpactSection";
import ExampleCalculationSection from "../medical_payment_savings_calculator/ExampleCalculationSection";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.08,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const wordVariants: Variants = {
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingWords = [
  { text: "Your" },
  { text: "practice" },
  { text: "may" },
  { text: "lose" },
  { text: "3%+", highlight: true },
  { text: "of" },
  { text: "revenue" },
  { text: "to" },
  { text: "payment" },
  { text: "processing." },
  { text: "We", highlight: true },
  { text: "help", highlight: true },
  { text: "you", highlight: true },
  { text: "recover", highlight: true },
  { text: "it.", highlight: true },
];

const trustItems = [
  {
    icon: Shield,
    text: "HIPAA aligned",
  },
  {
    icon: Lock,
    text: "PCI DSS Level 1",
  },
  {
    icon: CheckCircle2,
    text: "SOC2 infrastructure",
  },
  {
    icon: Activity,
    text: "CURES Act ready",
  },
];

export default function HeroSection() {
  const [openOne, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);
  return (
    <section className="relative overflow-hidden bg-[#F8FAFD] px-5 sm:px-8 lg:px-0 py-[72px] sm:py-[90px] lg:py-[100px]">
      {openOne && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="relative w-full max-w-7xl max-h-[100vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setOpen(false)}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
            >
              <X size={20} />
            </button>

            <div className="m-1 sm:m-4">
              <AnalysisImpactSection />
            </div>
          </div>
        </div>
      )}

      {openTwo && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-0 sm:p-4">
          <div className="relative w-full max-w-7xl max-h-[100vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl">
            <button
              onClick={() => setOpenTwo(false)}
              className="sticky top-4 ml-auto mr-4 mt-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black text-white"
            >
              <X size={20} />
            </button>

            <div className="m-1 sm:m-4">
              <ExampleCalculationSection oneSec={true} />
            </div>
          </div>
        </div>
      )}

      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="absolute inset-y-0 right-0 w-full lg:w-[86%] z-0"
      >
        <Image
          src="/hero-doctor.png"
          alt="Healthcare Payment"
          fill
          priority
          className="object-cover object-[72%_center] lg:object-right"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,253,0.92)_0%,rgba(248,250,253,0.78)_28%,rgba(248,250,253,0.98)_100%)] lg:bg-[linear-gradient(281.46deg,rgba(248,250,253,0)_33.35%,#F8FAFD_62.04%)]" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative max-w-7xl m-auto z-10 flex flex-col items-start gap-[44px] sm:gap-[56px] lg:gap-[60px]"
      >
        <div className="flex flex-col items-start gap-[28px] sm:gap-[32px] w-full">
          <div className="flex flex-col items-start gap-[20px] sm:gap-[24px]">
            <motion.h1
              variants={containerVariants}
              className="max-w-[622px] text-[#1D3855] text-[34px] sm:text-[44px] leading-[118%] sm:leading-[125%] tracking-[-2px] sm:tracking-[-3px] font-medium text-balance"
            >
              {headingWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={`inline-block mr-[8px] ${
                    word.highlight ? "text-[#3B747F]" : ""
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="max-w-[647px] text-[#101010] text-[15px] sm:text-[16px] leading-[170%] sm:leading-[160%] font-normal text-pretty"
            >
              Fluid Financial provides HIPAA-aligned payment infrastructure with
              MedToken, helping medical and wellness businesses secure payments
              and reduce costs.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            className="flex w-full flex-col sm:flex-row items-stretch sm:items-start gap-[12px]"
          >
            <motion.button
              variants={cardVariants}
              onClick={() => setOpen(true)}
              whileHover={{
                y: -2,
                opacity: 0.95,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="min-h-[52px] sm:h-[48px] px-[20px] cursor-pointer rounded-[10px] bg-[#3B747F] flex items-center justify-center transition-all duration-300 w-full sm:w-auto will-change-transform"
            >
              <span className="text-white text-[15px] sm:text-[16px] leading-[24px] font-semibold text-center">
                Calculate Your Savings
              </span>
            </motion.button>
            <motion.button
              variants={cardVariants}
              onClick={() => setOpenTwo(true)}
              whileHover={{
                y: -2,
                backgroundColor: "#f8fafc",
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="min-h-[52px] sm:h-[48px] px-[20px] cursor-pointer rounded-[10px] border border-[#D0D5DD] bg-white flex items-center justify-center transition-all duration-300 w-full sm:w-auto will-change-transform"
            >
              <span className="text-[#101010] text-[15px] sm:text-[16px] leading-[24px] font-semibold text-center">
                Upload A Statement For A Free Analysis
              </span>
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUpVariants}
          className="w-full max-w-[582px] bg-[#FBFBFB]/90 backdrop-blur-md border border-[#D0D5DD] rounded-[18px] shadow-[-20px_4px_38px_rgba(0,0,0,0.07)] px-[18px] sm:px-[24px] py-[18px]"
        >
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-y-[24px] gap-x-[14px] sm:gap-[40px]"
          >
            {trustItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    opacity: 0.92,
                  }}
                  className="flex flex-col items-center gap-[10px] sm:gap-[12px] text-center will-change-transform"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon
                      size={22}
                      strokeWidth={2}
                      className="text-[#101010]"
                    />
                  </div>

                  <span className="text-[#73797B] text-[12px] sm:text-[13px] leading-[140%]">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
