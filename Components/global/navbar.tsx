import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="h-[72px] flex items-center max-w-7xl mx-auto  justify-between">
        <div className="flex items-center">
          <div
            className="flex w-[150px] h-[50px] bg-red-40 items-center bg-contain bg-no-repeat"
            style={{ backgroundImage: "url(./logo_w.png)" }}
          ></div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[16px] font-[400] text-gray-500">
          <Link href="/about" className="text-[#3B747F] font-semibold">
            About Us
          </Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Services</Link>
          <Link href="/">Our Team</Link>
          <Link href="/">Resources</Link>
          <Link href="/">Agent Portal</Link>
          <Link href="/">Application Portal</Link>
        </nav>

        <button className="border-2 border-[#D0D5DD] text-[#101010] px-6 py-3 rounded-lg text-[16px] font-[600] hover:bg-gray-50 transition">
          Book a Demo
        </button>
      </div>
    </header>
  );
}
