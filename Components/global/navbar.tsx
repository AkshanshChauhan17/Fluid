"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full border-b border-gray-200 bg-white px-8 z-50">
        <div className="h-[72px] flex items-center max-w-7xl mx-auto justify-between">
          <div
            className="w-[130px] sm:w-[150px] h-[45px] sm:h-[50px] bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: "url(./logo_w.png)" }}
          ></div>

          <nav className="hidden lg:flex items-center gap-8 text-[16px] font-[400] text-gray-500">
            <Link href="/about" className="text-[#3B747F] font-semibold">
              About Us
            </Link>
            <Link href="/">Pricing</Link>
            <Link href="/">Services</Link>
            <Link href="/our_team">Our Team</Link>
            <Link href="/">Resources</Link>
            <Link href="/">Agent Portal</Link>
            <Link href="/">Application Portal</Link>
          </nav>

          <button className="hidden lg:block border-2 border-[#D0D5DD] text-[#101010] px-5 py-3 rounded-lg text-[16px] font-[600] hover:bg-gray-50 transition">
            Book a Demo
          </button>

          <button
            className="lg:hidden w-[44px] h-[44px] rounded-full border border-[#E5E7EB] flex items-center justify-center bg-white shadow-sm"
            onClick={() => setOpen(!open)}
          >
            <div className={`transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}>
              {open ? <X size={22} /> : <Menu size={22} />}
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
              "About Us",
              "Pricing",
              "Services",
              "Our Team",
              "Resources",
              "Agent Portal",
              "Application Portal",
            ].map((item, index) => (
              <Link
                key={index}
                href={index === 0 ? "/about" : index === 3 ? "/our_team" : "/"}
                onClick={closeMenu}
                className={`py-4 text-[18px] font-[500] border-b border-[#F1F3F5] ${
                  index === 0 ? "text-[#3B747F]" : "text-[#1F2937]"
                }`}
              >
                {item}
              </Link>
            ))}

            <button
              onClick={closeMenu}
              className="mt-8 bg-[#1D3855] text-white px-4 py-4 rounded-xl text-[16px] font-[600] w-full"
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </header>

      <div className="h-[72px]" />
    </>
  );
}