import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F2133] text-white px-8 md:px-16 lg:px-24 py-14">
      <div className="grid grid-cols-2 md:grid-cols-6 max-w-7xl mx-auto gap-10 pb-10 border-b border-white/10">

        <div className="col-span-1">
          <div className="flex w-[150px] h-[55px] items-center bg-contain bg-no-repeat gap-2 mb-6" style={{backgroundImage: "url(/logo.png)"}}>
            
          </div>

          <div className="flex gap-4 text-white/90 text-lg">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        <div className="col-span-1 hidden sm:block"></div>

        <div>
          <h3 className="font-[500] text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-white/70">
            <Link href="/about"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">About Us</li></Link>
            <Link href="/our_team"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Our Team</li></Link>
            <Link href="/agent_partner_program"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Agent Partner Program</li></Link>
          </ul>
        </div>
        
        <div>
          <h3 className="font-[500] text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-white/70">
            <Link href="/faqs"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">FAQs</li></Link>
            <Link href="/resources_or_knowledge_bas"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Knowledge Base</li></Link>
            <Link href="/healthcare_payment_processing"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Healthcare Payment Processing</li></Link>
          </ul>
        </div>

        <div>
          <h3 className="font-[500] text-lg mb-4">Compliance</h3>
          <ul className="space-y-2 text-white/70">
            <Link href="/hipaa"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">HIPAA</li></Link>
            <Link href="/security_and_compliance"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Security & Compliance</li></Link>
            <Link href="/compliance_disclosures"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Compliance Disclosure</li></Link>
          </ul>
        </div>

         <div>
          <h3 className="font-[500] text-lg mb-4">Account</h3>
          <ul className="space-y-2 text-white/70">
            <Link href="/signin"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Sign In</li></Link>
            <Link href="/create_new_account"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Create Account</li></Link>
            <Link href="/reset_password"><li className="hover:text-white cursor-pointer text-[14px] font-[300]">Reset Password</li></Link>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-white/60 text-sm gap-4 max-w-7xl mx-auto">
        <p>Copyright © Fluid Financial</p>

        <div className="flex gap-3">
          <span>All Rights Reserved</span>
          <span>|</span>
          <Link href="/terms_and_conditions" className="hover:text-white underline">
            Terms and Conditions
          </Link>
          <span>|</span>
          <Link href="/privacy_policy" className="hover:text-white underline">
            Privacy Policy
          </Link>
        </div>
      </div>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6a1342d7c10b3bb0034c4466"
        strategy="afterInteractive"
      />
    </footer>
  );
}