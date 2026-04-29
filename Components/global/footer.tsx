import { Mail, Phone, MapPin } from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-6 max-w-7xl mx-auto gap-10 pb-10 border-b border-white/10">

        <div className="col-span-1">
          <div className="flex w-[150px] h-[55px] items-center bg-contain bg-no-repeat gap-2 mb-6" style={{backgroundImage: "url(./logo.png)"}}>
            
          </div>

          <div className="flex gap-4 text-white/90 text-lg">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-blue-400 cursor-pointer" />
          </div>
        </div>

        <div className="col-span-1"></div>

        <div>
          <h3 className="font-[500] text-lg mb-4">Product</h3>
          <ul className="space-y-2 text-white/70">
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Features</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Pricing</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Case studies</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Reviews</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Updates</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-[500] text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-white/70">
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">About</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Contact us</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Careers</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Culture</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-[500] text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-white/70">
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Getting started</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Help center</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Server status</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Report a bug</li>
            <li className="hover:text-white cursor-pointer text-[14px] font-[300]">Chat support</li>
          </ul>
        </div>

        <div>
          <h3 className="font-[500] text-lg mb-4">Contacts us</h3>

          <div className="space-y-4 text-white/70">
            <div className="flex gap-3">
              <Mail size={18} className="mt-1 min-w-5" />
              <span className="text-[14px]">complianceteam@fluid.financial</span>
            </div>

            <div className="flex gap-3">
              <Phone size={18} className="mt-1 min-w-5" />
              <span className="text-[14px]">8883236967</span>
            </div>

            <div className="flex gap-3">
              <MapPin size={18} className="mt-1 min-w-5" />
              <span className="text-[14px]">
                7 Giralda Farms <br />
                Suite 100 <br />
                Madison NJ 07940
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-white/60 text-sm gap-4 max-w-7xl mx-auto">
        <p>Copyright © Fluid Financial</p>

        <div className="flex gap-3">
          <span>All Rights Reserved</span>
          <span>|</span>
          <a href="#" className="hover:text-white underline">
            Terms and Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-white underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}