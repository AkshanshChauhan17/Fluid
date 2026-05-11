"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

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

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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
};

export default function FeatureCard({ data }: Props) {
  return (
    <section className="w-full px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.1,
        }}
        className={`max-w-7xl mx-auto px-0 sm:px-8 border border-[#EEEEEE] rounded-[24px] bg-white p-[24px] sm:p-[40px] flex flex-col items-center gap-[32px] sm:gap-[40px] ${
          data.rev ? "sm:flex-row-reverse" : "sm:flex-row"
        }`}
      >
        <motion.div
          variants={fadeUpVariants}
          className="w-full lg:max-w-[580px] flex flex-col items-start gap-[24px]"
        >
          <h2
            className="
              max-w-[444px]
              text-[#1D3855]
              text-[28px]
              sm:text-[36px]
              leading-[125%]
              tracking-[-2px]
              font-medium
            "
          >
            {data.title}
          </h2>

          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-full flex flex-col items-start gap-[10px]">
              {data.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  variants={fadeUpVariants}
                  className="text-[#73797B] text-[14px] leading-[170%] tracking-[-0.3px] opacity-[0.84]"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div className="w-full flex flex-col items-start gap-[8px]">
              {data.keyBenefitsTitle && (
                <motion.p
                  variants={fadeUpVariants}
                  className="text-[#73797B] text-[14px] leading-[170%] tracking-[-0.3px] opacity-[0.84]"
                >
                  {data.keyBenefitsTitle}
                </motion.p>
              )}

              <div className="w-full flex flex-col items-start gap-[6px]">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    className="w-full flex items-center gap-[12px]"
                  >
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#3B747F] shrink-0"
                        fill="#3B747F"
                        stroke="white"
                        strokeWidth={2}
                      />
                    </motion.div>

                    <p
                      className="text-[#73797B] text-[13px] leading-[18px]"
                      dangerouslySetInnerHTML={{ __html: benefit }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            w-full
            lg:w-[580px]
            h-[260px]
            sm:h-[468px]
            overflow-hidden
            rounded-[16px]
            border
            border-[#EEEEEE]
            shrink-0
          "
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}