import React from "react";
import header from "./assets/header.png";

const Section1 = () => {
  return (
    <div className="relative flex justify-center m-auto mt-0 md:w-[1100px] md:h-[600px]">
      {/* Header Image */}
      <img src={header} alt="Header" className="w-full h-auto md:w-[1100px] md:h-[600px]" />

      {/* Order Now Button - Responsive Placement */}
      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 md:bottom-28 md:left-6 md:translate-x-0">
        <button className="bg-[#4b2b1c] text-white font-bold md:py-3 py-2 px-4 md:px-6 rounded-full shadow-lg hover:bg-[#A0522D] transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Section1;
