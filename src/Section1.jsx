import React from "react";
import header from "./assets/header.webp";
import NButton from './components/NButton';

const Section1 = () => {
  return (
    <div className="relative flex justify-center m-auto mt-5 md:w-[1100px] md:h-[600px]">
      {/* Header Image */}
      <img src={header} alt="Header" className="w-full h-auto md:w-[1100px] md:h-[600px]" />

      {/* Order Now Button - Responsive Placement */}
      <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 md:bottom-28 md:left-6 md:translate-x-0">
           <NButton text='Order Now'/>
        
      </div>
    </div>
  );
};

export default Section1;
