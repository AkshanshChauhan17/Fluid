"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface SuccessMessageProps {
  data?: React.ReactNode;
}

export default function SuccessMessage({ data }: SuccessMessageProps) {
  const handleClick = ()=> {
    window.location.reload();
  }
  return (
    <section
      className="
        w-full
        min-h-screen
        sm:bg-[#F8FAFD]
        px-0
        sm:px-6
        py-[0px]
        sm:py-[80px]
        flex
        items-center
        justify-center
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          w-full
          max-w-[620px]
          bg-white
          sm:border
          border-[#E8EEF3]
          rounded-[22px]
          sm:rounded-[28px]
          p-[0px]
          sm:p-[40px]
          lg:p-[48px]
          sm:shadow-[0px_10px_40px_rgba(0,0,0,0.04)]
          flex
          flex-col
          items-center
          text-center
        "
      >

        {/* ICON */}

        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="
            w-[74px]
            h-[74px]
            sm:w-[92px]
            sm:h-[92px]
            rounded-full
            bg-[#EAF8F0]
            flex
            items-center
            justify-center
            mb-[22px]
            sm:mb-[26px]
          "
        >
          <CheckCircle2
            size={42}
            className="text-[#22C55E] sm:w-[52px] sm:h-[52px]"
            strokeWidth={1.8}
          />
        </motion.div>

        {/* TAG */}

        <span
          className="
            text-[#5DA7CF]
            uppercase
            tracking-[0.12em]
            text-[11px]
            sm:text-[13px]
            font-semibold
          "
        >
          Submission Successful
        </span>

        {/* HEADING */}

        <h2
          className="
            mt-[12px]
            text-[#1D3855]
            text-[28px]
            sm:text-[38px]
            lg:text-[42px]
            leading-[118%]
            tracking-[-0.04em]
            font-medium
          "
        >
          Thank You!
        </h2>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[16px]
            text-[#73797B]
            text-[14px]
            sm:text-[16px]
            leading-[180%]
            max-w-[480px]
          "
        >
          Your custom savings audit request has been submitted successfully.
          Our team is now reviewing your information and preparing your
          personalized report.
        </p>

        {/* INFO BOX */}

        {data ? data : <div
          className="
            mt-[24px]
            sm:mt-[28px]
            w-full
            bg-[#F8FAFD]
            border
            border-[#E6EDF5]
            rounded-[16px]
            sm:rounded-[18px]
            px-[18px]
            sm:px-[22px]
            py-[18px]
            sm:py-[20px]
          "
        >
          <p
            className="
              text-[#1D3855]
              text-[14px]
              sm:text-[15px]
              leading-[170%]
            "
          >
            You can expect a response from our team within
            <span className="font-semibold">
              {" "}24 business hours.
            </span>
          </p>
        </div>}

        {/* BUTTON */}

        <motion.button
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.98,
          }}

          onClick={handleClick}
          className="
            mt-[28px]
            sm:mt-[32px]
            w-full
            sm:w-auto
            min-h-[52px]
            px-[26px]
            sm:px-[34px]
            bg-[#3B747F]
            rounded-[12px]
            text-white
            text-[14px]
            sm:text-[15px]
            font-semibold
            transition-all
            duration-300
            hover:bg-[#477f8a]
          "
        >
          Back To Homepage
        </motion.button>

      </motion.div>
    </section>
  );
}