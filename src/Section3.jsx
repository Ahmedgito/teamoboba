import React from "react";
import ourstory from "./assets/ourstory.webp";
import Card from './components/Boba';  
import NButton from './components/NButton';

const Section3 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-6 py-10 md:py-25">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={ourstory}
          alt="Our Story"
          className="w-[280px] h-[400px] md:w-[320px] md:h-[450px] rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left mt-6 md:mt-0">
        <h2 className="text-3xl md:text-5xl font-bold text-[#4b2b1c] mb-4">
          Our Story
        </h2>

 {/* Card Section - added below the existing text section */}
 <div className="mt-3 mb-5 flex md:justify-start justify-center">
          <Card />
        </div>

        <p className="text-[#4b2b1c] leading-relaxed">
          Teamoboba is a popular artisan boba cafe in Overland Park that offers
          a variety of delicious desserts, premium coffees, quality teas, milk
          teas, and more!
        </p>
        <p className="text-[#4b2b1c]  mt-4">
          We started out as a small local business, but now we are growing into
          a franchise from the help of our customers. The name of the store
          “Te Amo” arose from our saying “BEElieve in happiness.”
        </p>

        <div className="mt-3">
          {/* Button */}
          <NButton text='About us' />
        </div>

       
      </div>
    </div>
  );
};

export default Section3;
