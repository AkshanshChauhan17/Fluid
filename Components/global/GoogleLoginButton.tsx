"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function GoogleLoginButton() {
  const router = useRouter();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const login = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (
      tokenResponse
    ) => {
      try {
        const res = await fetch(
          "http://fluid.financial/Backend/google-login.php",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              tokenResponse
            ),
          }
        );

        const data =
          await res.json();

        console.log(data);

        if (data.success) {
          localStorage.setItem(
            "user",
            JSON.stringify(
              data.user
            )
          );

          if (data.token) {
            localStorage.setItem(
              "token",
              data.token
            );
          }

          window.dispatchEvent(
            new Event("storage")
          );

          router.push("/");
          router.refresh();
        }
      } catch (error) {
        console.error(
          "Google Login Error:",
          error
        );
      }
    },

    onError: () => {
      console.log(
        "Login Failed"
      );
    },
  });

  if (!mounted) {
    return (
      <button
        disabled
        className="flex-1 h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] opacity-60"
      >
        <FaGoogle
          size={16}
          className="text-[#0F2133]"
        />

        <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
          Google
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={() => login()}
      className="flex-1 cursor-pointer h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors"
    >
      <FaGoogle
        size={16}
        className="text-[#0F2133]"
      />

      <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
        Google
      </span>
    </button>
  );
}