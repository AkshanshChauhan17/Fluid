"use client";

import Script from "next/script";

import { motion } from "framer-motion";

export default function AgentApplication() {
  return (
    <section
      className="
        w-full
        min-h-screen
        bg-[#F8FAFD]
        px-4
        sm:px-6
        lg:px-[60px]
        py-[50px]
        sm:py-[70px]
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          gap-[32px]
        "
      >
        {/* TOP CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            flex
            flex-col
            items-center
            text-center
            gap-[14px]
          "
        >
          <span
            className="
              text-[#5DA7CF]
              uppercase
              tracking-[0.14em]
              text-[12px]
              sm:text-[13px]
              font-semibold
            "
          >
            Fluid Financial
          </span>

          <h1
            className="
              text-[#0F2133]
              text-[32px]
              sm:text-[46px]
              leading-[115%]
              tracking-[-0.04em]
              font-medium
              max-w-[820px]
            "
          >
            Agent Partner Application
          </h1>

          <p
            className="
              text-[#73797B]
              text-[15px]
              sm:text-[17px]
              leading-[180%]
              max-w-[760px]
            "
          >
            Complete the application form below to join the
            Fluid Financial Agent Partner Program.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            rounded-[24px]
            overflow-hidden
            p-[10px]
            sm:p-[18px]
          "
        >
          <div
            className="
              w-full
              h-[920px]
              sm:h-[900px]
              lg:h-[860px]
              rounded-[18px]
              overflow-hidden
              bg-[#F8FAFD]
            "
          >
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/OGhbbNaSKCiVHS5FzkRG"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
              }}
              id="inline-OGhbbNaSKCiVHS5FzkRG"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Agent Application Form"
              data-height="1000"
              data-layout-iframe-id="inline-OGhbbNaSKCiVHS5FzkRG"
              data-form-id="OGhbbNaSKCiVHS5FzkRG"
              title="Agent Application Form"
            />
          </div>
        </motion.div>
      </div>

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </section>
  );
}