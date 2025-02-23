import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "./assets/logoo.webp";

const Footer = () => {
  return (
    <footer className="bg-[#f6dbbf] border-t-[3px] border-t-[#4b2b1c] text-[#4b2b1c] py-10 mt-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Company Logo" className="w-32 h-auto mb-4" />
            <p className="text-sm">&copy; {new Date().getFullYear()} Boba Cafe. All rights reserved.</p>
          </div>

          {/* Address Section */}
          <div className="text-center md:text-center">
            <h3 className="font-bold text-lg">LOCATION  </h3>
            <p><span className="font-semibold">Address:</span> Stanley Square Shopping Center, 7932 W 151st Street, Overland Park, KS 66223</p>
            <p><span className="font-semibold">Store Hours:</span> Open Daily, 11AM-9PM</p>
            <p><span className="font-semibold">Email:</span> <a href="mailto:teamobobacafe@gmail.com" className="underline">teamobobacafe@gmail.com</a></p>
            <p><span className="font-semibold">Tel:</span> <a href="tel:+19132427892" className="underline">(913) 242-7892</a></p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-bold text-lg mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#A0522D] text-white flex justify-center items-center rounded-full hover:bg-[#8B4513] transition-all" 
                 aria-label="Facebook">
                <FaFacebookF className="text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-[#A0522D] text-white flex justify-center items-center rounded-full hover:bg-[#8B4513] transition-all" 
                 aria-label="Instagram">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
