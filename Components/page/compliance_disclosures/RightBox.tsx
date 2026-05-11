"use client";

import {
  Shield,
  Lock,
  FileText,
} from "lucide-react";

import {
  motion,
  Variants,
} from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 30,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function RightBox() {
  return (
    <section className="w-full sm:w-fit flex items-center justify-center px-5 sm:px-0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
        }}
        className="
          relative
          w-full
          max-w-[500px]
          aspect-square
          sm:w-[500px]
          sm:h-[500px]
          bg-white
          rounded-[24px]
          sm:rounded-[32px]
          border
          border-gray-200
          shadow-[0px_10px_40px_rgba(15,33,51,0.06)]
        "
      >
        <motion.div
          animate={{
            opacity: [0.18, 0.3, 0.18],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -top-[100px]
            left-1/2
            -translate-x-1/2
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#5DA7CF]/20
            blur-[90px]
          "
        />

        <motion.div
          variants={fadeScaleVariants}
          whileHover={{
            y: -2,
          }}
          className="
            absolute
            top-[-10]
            sm:top-[-20]
            left-4
            sm:left-6
            bg-white/90
            backdrop-blur-xl
            rounded-xl
            px-4
            py-2.5
            shadow-[0px_10px_30px_rgba(15,33,51,0.08)]
            border
            border-gray-200
            flex
            items-center
            gap-3
            z-20
          "
        >
          <motion.span
            animate={{
              opacity: [1, 0.45, 1],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2.5 h-2.5 bg-green-500 rounded-full"
          />

          <div className="leading-tight">
            <p className="text-[13px] sm:text-sm font-semibold text-gray-800">
              Secure Network
            </p>

            <p className="text-[11px] sm:text-xs text-gray-500">
              Active & Compliant
            </p>
          </div>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            variants={fadeScaleVariants}
            className="
              relative
              w-[220px]
              h-[220px]
              sm:w-[300px]
              sm:h-[300px]
              rounded-full
              flex
              items-center
              justify-center
            "
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border
                border-dashed
                border-[#D8E3EF]
              "
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                w-[160px]
                h-[160px]
                sm:w-[220px]
                sm:h-[220px]
                rounded-full
                border
                border-dashed
                border-[#D8E3EF]/70
              "
            />

            <motion.div
              variants={fadeScaleVariants}
              whileHover={{
                scale: 1.03,
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative
                z-10
                w-[92px]
                h-[92px]
                sm:w-[110px]
                sm:h-[110px]
                rounded-[24px]
                bg-[#EEF5FB]
                border
                border-[#D8E3EF]
                shadow-inner
                flex
                items-center
                justify-center
              "
            >
              <motion.div
                animate={{
                  opacity: [1, 0.75, 1],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-[#5DA7CF]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeScaleVariants}
          whileHover={{
            y: -3,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-[72px]
            sm:top-[110px]
            right-[18px]
            sm:right-[80px]
            w-[58px]
            h-[58px]
            sm:w-[70px]
            sm:h-[70px]
            bg-white
            rounded-2xl
            border
            border-[#E8EEF5]
            shadow-[0px_10px_25px_rgba(15,33,51,0.06)]
            flex
            items-center
            justify-center
            backdrop-blur-xl
          "
        >
          <Lock className="w-5 h-5 text-[#7B8794]" />
        </motion.div>

        <motion.div
          variants={fadeScaleVariants}
          whileHover={{
            y: -3,
          }}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            bottom-[72px]
            sm:bottom-[110px]
            left-[18px]
            sm:left-[80px]
            w-[58px]
            h-[58px]
            sm:w-[70px]
            sm:h-[70px]
            bg-white
            rounded-2xl
            border
            border-[#E8EEF5]
            shadow-[0px_10px_25px_rgba(15,33,51,0.06)]
            flex
            items-center
            justify-center
            backdrop-blur-xl
          "
        >
          <FileText className="w-5 h-5 text-[#7B8794]" />
        </motion.div>

        <motion.div
          animate={{
            opacity: [0.14, 0.24, 0.14],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-[120px]
            left-1/2
            -translate-x-1/2
            w-[260px]
            h-[260px]
            rounded-full
            bg-[#5DA7CF]/20
            blur-[100px]
          "
        />
      </motion.div>
    </section>
  );
}