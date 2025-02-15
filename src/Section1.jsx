import React from "react";
import header from "./assets/header.png";
import Button from "./components/Button";

const Section1 = () => {
  return (
    <div className="relative flex justify-center m-auto mt-0 md:w-[1100px] md:h-[600px]">
      {/* Header Image */}
      <img src={header} alt="Header" className="w-full h-auto md:w-[1100px] md:h-[600px]" />

      {/* Order Now Button - Positioned at Bottom Left */}
      <div className="absolute bottom-28 left-6">
      <button className="bg-[#4b2b1c] text-white font-bold py-3 px-6 rounded-4xl shadow-lg hover:bg-[#A0522D] transition-all">
        Order Now
      </button>
      </div>
    </div>
  );
};

export default Section1;
