"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { CheckCheck } from "lucide-react";

export default function ThankYou() {
  return (
    <section
      className="
        w-full
        min-h-screen
        bg-[#F8FAFD]
        px-5
        sm:px-6
        py-[60px]
        sm:py-[90px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          w-full
          max-w-[560px]
          bg-white
          border
          border-[#E5ECF3]
          rounded-[28px]
          p-[28px]
          sm:p-[48px]
          shadow-[0px_20px_60px_rgba(0,0,0,0.05)]
          flex
          flex-col
          items-center
          text-center
          overflow-hidden
        "
      >
        {/* GLOW */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.28, 0.18],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[-120px]
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#3B747F]
            blur-[120px]
            opacity-20
          "
        />

        {/* ICON */}
        <motion.div
          initial={{
            scale: 0.4,
            rotate: -12,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            rotate: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            z-10
            w-[82px]
            h-[82px]
            sm:w-[92px]
            sm:h-[92px]
            rounded-full
            bg-[#E8F5EE]
            flex
            items-center
            justify-center
            mb-[26px]
          "
        >
          <CheckCheck
            size={42}
            strokeWidth={2.4}
            className="text-[#1A4D3A]"
          />
        </motion.div>

        {/* TAG */}
        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
          }}
          className="
            relative
            z-10
            text-[#3B747F]
            uppercase
            tracking-[0.16em]
            text-[12px]
            sm:text-[13px]
            font-semibold
          "
        >
          Submission Successful
        </motion.span>

        {/* HEADING */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
          }}
          className="
            relative
            z-10
            mt-[16px]
            text-[#1A4D3A]
            text-[28px]
            sm:text-[38px]
            leading-[115%]
            tracking-[-0.04em]
            font-semibold
          "
        >
          Application Received!
        </motion.h1>

        {/* TEXT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.55,
          }}
          className="
            relative
            z-10
            mt-[20px]
            flex
            flex-col
            gap-[10px]
            max-w-[460px]
          "
        >
          <p
            className="
              text-[#555]
              text-[14px]
              sm:text-[15px]
              leading-[180%]
            "
          >
            Thank you for your interest in the Fluid Financial
            Agent Partner Program.
          </p>

          <p
            className="
              text-[#555]
              text-[14px]
              sm:text-[15px]
              leading-[180%]
            "
          >
            Our team will review your application within{" "}
            <span className="font-semibold text-[#1A4D3A]">
              48 hours
            </span>.
          </p>

          <p
            className="
              text-[#555]
              text-[14px]
              sm:text-[15px]
              leading-[180%]
            "
          >
            You'll receive an email with next steps once approved.
          </p>
        </motion.div>

        {/* CONTACT BOX */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
          }}
          className="
            relative
            z-10
            mt-[28px]
            w-full
            bg-[#F4F7F5]
            border
            border-[#E4ECE7]
            rounded-[18px]
            px-[20px]
            py-[20px]
          "
        >
          <p
            className="
              text-[#444]
              text-[13px]
              sm:text-[14px]
              leading-[180%]
            "
          >
            Questions? Reach us at
          </p>

          <div
            className="
              mt-[10px]
              flex
              flex-col
              items-center
              gap-[6px]
            "
          >
            <a
              href="mailto:complianceteam@fluid.financial"
              className="
                text-[#1A4D3A]
                text-[14px]
                sm:text-[15px]
                font-semibold
                break-all
              "
            >
              complianceteam@fluid.financial
            </a>

            <a
              href="tel:8883236967"
              className="
                text-[#1A4D3A]
                text-[14px]
                sm:text-[15px]
                font-semibold
              "
            >
              888-323-6967
            </a>
          </div>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.85,
          }}
          className="relative z-10"
        >
          <Link href="/">
            <motion.button
              whileHover={{
                y: -2,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-[32px]
                h-[52px]
                px-[26px]
                sm:px-[34px]
                bg-[#1A4D3A]
                rounded-[12px]
                text-white
                text-[14px]
                sm:text-[15px]
                font-semibold
                transition-all
                duration-300
                hover:bg-[#215e48]
                cursor-pointer
              "
            >
              Return To Homepage
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}