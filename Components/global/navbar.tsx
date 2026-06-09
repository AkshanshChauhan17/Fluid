"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email?: string } | null>(() => {
    if (typeof window === "undefined") return null;

    const storedUser = localStorage.getItem("user");
    if (!storedUser) return null;

    try {
      const parsed = JSON.parse(storedUser);
      if (
        parsed &&
        typeof parsed === "object" &&
        Object.keys(parsed).length > 0
      ) {
        return parsed;
      }
    } catch {
      return null;
    }

    return null;
  });

  const closeMenu = () => setOpen(false);

  const colors = useMemo(
    () => [
      "bg-[#1D3855]",
    ],
    []
  );

  const [avatarColor] = useState<string>(
    () => colors[Math.floor(Math.random() * colors.length)]
  );

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word: string) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <>
      <header className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white px-5 z-50">
        <div className="h-[72px] flex items-center max-w-7xl mx-auto justify-between">
          <Link
            href={"/"}
            className="w-[130px] sm:w-[150px] h-[45px] sm:h-[50px] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url(/logo_w.png)" }}
          />

          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-[400] text-gray-500">
            {[
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing_plans" },
              { name: "Saving Calculator", href: "/security_and_compliance" },
              { name: "Agent Portal", href: "/agent_partner_program" },
              { name: "Application Portal", href: "/agent_application" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/book_a_demo">
              <button className="border-2 border-[#D0D5DD] text-[#101010] px-5 py-3 rounded-lg text-[16px] font-[600] hover:bg-gray-50 transition">
                Book a Demo
              </button>
            </Link>

            {!user ? (
              <Link href="/signin">
                <button className="bg-[#1D3855] text-white px-5 py-3 rounded-lg text-[16px] font-[600] hover:opacity-90 transition">
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-3 border border-[#E5E7EB] rounded-full px-3 py-2">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${avatarColor}`}
                >
                  {initials}
                </div>

                <p className="text-[15px] font-[600] text-[#111827] max-w-[120px] truncate">
                  {user.name}
                </p>
              </div>
            )}
          </div>

          <button
            className="lg:hidden w-[44px] h-[44px] rounded-full border border-[#E5E7EB] flex items-center justify-center bg-white shadow-sm"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            >
              {open ? (
                <X size={22} className="text-black" />
              ) : (
                <Menu size={22} className="text-black" />
              )}
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden fixed top-[72px] left-0 w-full bg-white transition-all duration-500 ease-in-out ${
            open
              ? "opacity-100 translate-y-0 pointer-events-auto min-h-[calc(100vh-72px)]"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-8 py-8">
            {[
              { name: "About Us", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Pricing", href: "/pricing_plans" },
              { name: "Saving Calculator", href: "/security_and_compliance" },
              { name: "Agent Portal", href: "/agent_partner_program" },
              { name: "Application Portal", href: "/agent_application" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={closeMenu}
                className={`py-4 text-[18px] font-[500] border-b border-[#F1F3F5] ${
                  item.name === "About Us"
                    ? "text-[#3B747F]"
                    : "text-[#1F2937]"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link href="/book_a_demo">
              <button
                onClick={closeMenu}
                className="mt-8 bg-[#1D3855] text-white px-4 py-4 rounded-xl text-[16px] font-[600] w-full"
              >
                Book a Demo
              </button>
            </Link>

            {!user ? (
              <Link href="/signin">
                <button
                  onClick={closeMenu}
                  className="mt-4 border border-[#D0D5DD] text-[#111827] px-4 py-4 rounded-xl text-[16px] font-[600] w-full"
                >
                  Login
                </button>
              </Link>
            ) : (
              <div className="mt-4 flex items-center gap-3 border border-[#E5E7EB] rounded-xl px-4 py-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-white font-semibold ${avatarColor}`}
                >
                  {initials}
                </div>

                <div>
                  <p className="text-[15px] font-[700] text-[#111827]">
                    {user.name}
                  </p>

                  <p className="text-[13px] text-gray-500">
                    {user.email}
                  </p>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
}