"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronRight, EyeOff, Eye } from "lucide-react";

import { FaApple, FaGoogle } from "react-icons/fa";

import { motion, Variants } from "framer-motion";

import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const GoogleLoginButton = dynamic(
  () =>
    import(
      "@/Components/global/GoogleLoginButton"
    ),
  {
    ssr: false,
  }
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

export default function Signin() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/Backend/si.php", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        router.refresh();
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.log(err);

      setError("Server connection failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-white px-5 sm:px-0 py-[50px] sm:py-[100px] flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-[40px] lg:gap-[60px]"
      >
        <motion.div
          variants={fadeUpVariants}
          className="w-full flex flex-col items-start gap-[32px]"
        >
          <div className="w-full flex flex-col items-start gap-[14px]">
            <div className="w-full flex flex-col items-start gap-[8px]">
              <h1 className="text-[#0F2133] text-[28px] sm:text-[32px] leading-[120%] tracking-[-0.03em] font-medium">
                Welcome back to Fluid Financial
              </h1>

              <p className="text-[#73797B] text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
                Sign in to access your profile, history, and private pages
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="w-full flex flex-col items-end gap-[24px]">
              <div className="w-full flex flex-col items-center gap-[24px]">
                <div className="w-full flex flex-col items-start gap-[8px]">
                  {/* EMAIL */}

                  <motion.div
                    variants={fadeUpVariants}
                    className="w-full flex flex-col items-start gap-[4px]"
                  >
                    <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                      Email
                    </label>

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full h-[48px] bg-white border border-[#D0D5DD] rounded-[8px] px-[16px] text-[16px] text-[#0F2133] placeholder:text-[#73797B] outline-none focus:border-[#3B747F] transition-colors"
                    />
                  </motion.div>

                  {/* PASSWORD */}

                  <motion.div
                    variants={fadeUpVariants}
                    className="w-full flex flex-col items-start gap-[4px]"
                  >
                    <label className="text-[#0F2133] text-[14px] leading-[20px] tracking-[-0.03em] font-normal">
                      Password
                    </label>

                    <div className="w-full h-[48px] border border-[#D0D5DD] rounded-[8px] px-[16px] flex items-center gap-[8px] focus-within:border-[#3B747F] transition-colors">
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
                  </motion.div>

                  {/* ERROR */}

                  {error && (
                    <div className="w-full rounded-[8px] bg-red-50 border border-red-200 px-[14px] py-[12px]">
                      <p className="text-red-600 text-[14px]">{error}</p>
                    </div>
                  )}

                  {/* REMEMBER */}

                  <motion.div
                    variants={fadeUpVariants}
                    className="w-full flex items-center justify-between gap-4"
                  >
                    <label className="flex items-center gap-[8px] cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-[16px] h-[16px] rounded-[4px] border border-[#D0D5DD]"
                      />

                      <span className="text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em]">
                        Remember me
                      </span>
                    </label>

                    <Link href={"/reset_password"}>
                      <button className="text-[#3B747F] underline text-[14px] cursor-pointer leading-[20px] tracking-[-0.03em]">
                        Forgot Password
                      </button>
                    </Link>
                  </motion.div>
                </div>

                {/* LOGIN BUTTON */}

                <motion.button
                  variants={fadeUpVariants}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.99,
                  }}
                  onClick={handleLogin}
                  disabled={loading}
                  className="w-full h-[48px] cursor-pointer bg-[#3B747F] rounded-[8px] flex items-center justify-center gap-[8px] hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <span className="text-white text-[16px] leading-[24px] font-semibold">
                    {loading ? "Signing In..." : "Sign In"}
                  </span>

                  {!loading && (
                    <ChevronRight
                      size={16}
                      className="text-white"
                      strokeWidth={2}
                    />
                  )}
                </motion.button>
              </div>

              {/* DIVIDER */}

              <motion.div
                variants={fadeUpVariants}
                className="w-full flex items-center gap-[8px]"
              >
                <div className="flex-1 h-[1px] bg-[#D0D5DD]" />

                <span className="text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em] whitespace-nowrap">
                  or signin with
                </span>

                <div className="flex-1 h-[1px] bg-[#D0D5DD]" />
              </motion.div>

              {/* SOCIAL */}

              <motion.div
                variants={fadeUpVariants}
                className="w-full flex items-center gap-[8px]"
              >
                <GoogleLoginButton />

                <button className="flex-1 h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors">
                  <FaApple size={18} className="text-black" />

                  <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
                    Apple
                  </span>
                </button>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="w-full text-center text-[#73797B] text-[14px] leading-[20px] tracking-[-0.03em]"
            >
              Don’t have an account?{" "}
              <Link href={"/create_new_account"}>
                <button className="text-[#3B747F] underline cursor-pointer">
                  Create an Account
                </button>
              </Link>
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}

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
            max-w-[680px]
            h-[420px]
            sm:h-[707px]
            rounded-[20px]
            overflow-hidden
            flex
            items-end
            p-[24px]
            sm:p-[40px]
          "
        >
          <Image
            src="/signin-banner.png"
            alt="Partner Portal"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(201.94deg,rgba(119,105,96,0)_46.07%,#79685C_85.4%)]" />

          <motion.div
            animate={{
              opacity: [0.12, 0.22, 0.12],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 7,
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
              bg-white/10
              blur-[100px]
            "
          />

          <div className="relative z-10 w-full max-w-[436px] flex flex-col items-start gap-[8px]">
            <h2 className="text-white text-[28px] sm:text-[36px] leading-[120%] sm:leading-[44px] tracking-[-0.03em] font-medium">
              Partner &amp; Client Portal
            </h2>

            <p className="text-[#D0D5DD] text-[15px] sm:text-[16px] leading-[24px] tracking-[-0.03em] font-normal">
              Access your Fluid Financial account dashboard to manage payment
              services, review reports, and access partner tools.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
