"use client";

import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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

export default function BlogDetailsPage() {
  return (
    <section className="max-w-7xl m-auto px-5 sm:px-0 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.06,
        }}
        className="flex flex-col items-start gap-[32px] sm:gap-[40px]"
      >
        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap items-center gap-[10px]"
        >
          <span className="text-[#73797B] text-[13px] sm:text-[14px] leading-[17px] tracking-[-0.3px] font-normal">
            Blogs
          </span>

          <span className="text-[#737373] text-[13px] sm:text-[14px] leading-[17px]">
            &gt;
          </span>

          <span className="text-[#3B747F] text-[13px] sm:text-[14px] leading-[17px] tracking-[-0.3px] font-medium">
            You are here
          </span>
        </motion.div>

        <div className="w-full max-w-7xl flex flex-col items-start gap-[32px] sm:gap-[40px]">
          <motion.div
            variants={containerVariants}
            className="w-full flex flex-col items-start gap-[24px] sm:gap-[32px]"
          >
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                scale: 1.01,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                w-full
                h-[240px]
                sm:h-[320px]
                lg:h-[400px]
                rounded-[20px]
                overflow-hidden
              "
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0"
              >
                <Image
                  src="/blog1.png"
                  alt="Healthcare Fintech"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="
                w-full
                px-0
                sm:px-[12px]
                flex
                flex-col
                items-start
                gap-[10px]
                sm:gap-[12px]
              "
            >
              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#737373]
                  text-[14px]
                  sm:text-[16px]
                  leading-[28px]
                  tracking-[-0.3px]
                  font-normal
                "
              >
                By{" "}
                <b className="text-black font-medium">
                  James West
                </b>{" "}
                &nbsp;|&nbsp; Feb 28, 2025
              </motion.p>

              <motion.h1
                variants={fadeUpVariants}
                className="
                  max-w-[1216px]
                  text-[#4C4477]
                  text-[28px]
                  sm:text-[32px]
                  lg:text-[36px]
                  leading-[140%]
                  tracking-[-0.04em]
                  font-semibold
                "
              >
                Healthcare Fintech Innovation: How MedToken and ICX Are
                Redefining Payment Security and Compliance
              </motion.h1>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full flex flex-col items-start gap-[16px]"
          >
            {[
              "Healthcare payments are undergoing a fundamental shift.",
              "Legacy payment systems, largely built for retail, were never designed to handle the complexity of protected health information, regulatory oversight and rising cybersecurity threats. As enforcement around the HIPAA Security Rule tightens, healthcare organizations are being forced to rethink how payments intersect with patient data.",
              "At Fluid Financial, that rethink has already happened",
              "MedToken and ICX represent a new class of healthcare fintech infrastructure, built from the ground up to separate sensitive data, reduce risk and modernize how transactions are processed in clinical environments.",
            ].map((text, index) => (
              <motion.p
                key={index}
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                  font-normal
                "
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full flex flex-col items-start gap-[20px]"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="
                text-[#1D3855]
                text-[20px]
                leading-[160%]
                tracking-[-0.3px]
                font-medium
              "
            >
              The problem: Payments were never built for healthcare
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="w-full flex flex-col items-start gap-[16px]"
            >
              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                "
              >
                Most payment processors were designed for retail transactions,
                not regulated healthcare environments.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col items-start gap-[12px]"
              >
                <motion.p
                  variants={fadeUpVariants}
                  className="
                    text-[#73797B]
                    text-[16px]
                    sm:text-[18px]
                    leading-[170%]
                    tracking-[-0.3px]
                  "
                >
                  That creates three persistent challenges:
                </motion.p>

                <motion.ul
                  variants={containerVariants}
                  className="
                    list-disc
                    pl-[24px]
                    sm:pl-[28px]
                    flex
                    flex-col
                    gap-[6px]
                  "
                >
                  {[
                    "Patient data and payment data are often intertwined",
                    "Many processors will not sign Business Associate Agreements, or BAAs",
                    "Compliance risk increases as data flows across multiple systems",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeUpVariants}
                      className="
                        text-[#73797B]
                        text-[16px]
                        sm:text-[18px]
                        leading-[170%]
                        tracking-[-0.3px]
                      "
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                "
              >
                As regulators increase scrutiny, these gaps are no longer
                theoretical. They are operational and financial risks.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="w-full flex flex-col items-start gap-[20px]"
          >
            <motion.h2
              variants={fadeUpVariants}
              className="
                text-[#1D3855]
                text-[20px]
                leading-[160%]
                tracking-[-0.3px]
                font-medium
              "
            >
              MedToken: Removing PHI from the payment stream
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="w-full flex flex-col items-start gap-[16px]"
            >
              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                "
              >
                MedToken is Fluid Financial’s patent-pending architecture
                designed to eliminate protected health information from payment
                workflows.
              </motion.p>

              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                "
              >
                Instead of passing sensitive patient data through payment
                systems, MedToken restructures the transaction flow so that
                payments occur without exposing PHI.
              </motion.p>

              <motion.div
                variants={containerVariants}
                className="flex flex-col items-start gap-[12px]"
              >
                <motion.p
                  variants={fadeUpVariants}
                  className="
                    text-[#73797B]
                    text-[16px]
                    sm:text-[18px]
                    leading-[170%]
                    tracking-[-0.3px]
                  "
                >
                  What that means in practice:
                </motion.p>

                <motion.ul
                  variants={containerVariants}
                  className="
                    list-disc
                    pl-[24px]
                    sm:pl-[28px]
                    flex
                    flex-col
                    gap-[6px]
                  "
                >
                  {[
                    "Payment data is separated from patient records",
                    "The payment environment is no longer a repository for ePHI",
                    "Compliance exposure is significantly reduced",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      variants={fadeUpVariants}
                      className="
                        text-[#73797B]
                        text-[16px]
                        sm:text-[18px]
                        leading-[170%]
                        tracking-[-0.3px]
                      "
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.p
                variants={fadeUpVariants}
                className="
                  text-[#73797B]
                  text-[16px]
                  sm:text-[18px]
                  leading-[170%]
                  tracking-[-0.3px]
                "
              >
                This approach aligns with the direction of modern healthcare
                regulation: minimize where sensitive data exists and reduce the
                number of systems that touch it.
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="
              w-full
              border-t
              border-[#EEEEEE]
              pt-[32px]
              sm:pt-[40px]
              flex
              flex-row
              sm:flex-row
              items-start
              sm:items-center
              justify-between
              gap-[16px]
            "
          >
            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                h-[48px]
                px-[20px]
                border
                border-[#D0D5DD]
                rounded-[8px]
                bg-white
                flex
                items-center
                justify-center
                gap-[8px]
                hover:bg-[#f8fafc]
                transition-colors
                duration-300
              "
            >
              <ChevronLeft
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2}
              />

              <span className="text-[#1D3855] text-[15px] sm:text-[16px] leading-[24px] font-semibold capitalize">
                Previous Blog
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                h-[48px]
                px-[20px]
                border
                border-[#D0D5DD]
                rounded-[8px]
                bg-white
                flex
                items-center
                justify-center
                gap-[8px]
                hover:bg-[#f8fafc]
                transition-colors
                duration-300
              "
            >
              <span className="text-[#1D3855] text-[15px] sm:text-[16px] leading-[24px] font-semibold capitalize">
                Next Blog
              </span>

              <ChevronRight
                size={16}
                className="text-[#1D3855]"
                strokeWidth={2}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}