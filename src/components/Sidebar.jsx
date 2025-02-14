import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

const SocialSidebar = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-1/3 transform -translate-y-1/2  flex-col space-y-4 bg-white p-5 rounded-l-2xl shadow-lg">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-[#ffc1c6] rounded-full shadow-md hover:bg-[#e6b5b8] transition-all"
      >
        <FaInstagram className="w-6 h-6 text-[#fff]" />
      </a>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-[#ffc1c6] rounded-full shadow-md hover:bg-[#e6b5b8] transition-all"
      >
        <FaFacebookF className="w-6 h-6 text-[#fff]" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-[#ffc1c6] rounded-full shadow-md hover:bg-[#e6b5b8] transition-all"
      >
        <FaTwitter className="w-6 h-6 text-[#fff]" />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-[#ffc1c6] rounded-full shadow-md hover:bg-[#e6b5b8] transition-all"
      >
        <FaTiktok className="w-6 h-6 text-[#fff]" />
      </a>
    </div>
  );
};

export default SocialSidebar;
