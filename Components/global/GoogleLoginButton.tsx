"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function GoogleLoginButton() {
  const router = useRouter();
  const login = useGoogleLogin({
    flow: "implicit",

    onSuccess: async (tokenResponse) => {
      try {
        const res = await fetch(
          "/Backend/google-login.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(tokenResponse),
          },
        );

        const data = await res.json();

        if (data.success) {
          localStorage.setItem("fluid_token", JSON.stringify(data.user));

          localStorage.setItem("fluid_user", JSON.stringify(data.user));

          router.push("/");
router.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    },

    onError: () => {
      console.log("Login Failed");
    },
  });

  return (
    <button
      onClick={() => login()}
      className="flex-1 cursor-pointer h-[44px] border border-[#D0D5DD] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-[#f8fafc] transition-colors"
    >
      <FaGoogle size={16} className="text-[#0F2133]" />

      <span className="text-[#0F2133] text-[14px] tracking-[-0.02em]">
        Google
      </span>
    </button>
  );
}
