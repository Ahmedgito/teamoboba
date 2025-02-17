import React from "react";
import { useInView } from "react-intersection-observer"; // Import the hook for Intersection Observer
import ourstory from "./assets/ourstory.webp";
import Card from './components/Boba';  
import NButton from './components/NButton';

const Section3 = () => {
  // Intersection Observer hooks for each section to animate them individually
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto px-6 py-10 md:py-25">
      {/* Image Section */}
      <div
        ref={imageRef}
        className={`w-full md:w-1/2 flex justify-center md:justify-end transform transition-all duration-1000 ${
          imageInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <img
          src={ourstory}
          alt="Our Story"
          className="w-[280px] h-[400px] md:w-[320px] md:h-[450px] rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div
        ref={textRef}
        className={`w-full md:w-1/2 md:pl-8 text-center md:text-left mt-6 md:mt-0 transform transition-all duration-1000 ${
          textInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#4b2b1c] mb-4">
          Our Story
        </h2>

        {/* Card Section - added below the existing text section */}
        <div
          ref={cardRef}
          className={`mt-3 mb-5 flex md:justify-start justify-center transform transition-all duration-1000 ${
            cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <Card />
        </div>

        <p className="text-[#4b2b1c] leading-relaxed">
          Teamoboba is a popular artisan boba cafe in Overland Park that offers
          a variety of delicious desserts, premium coffees, quality teas, milk
          teas, and more!
        </p>
        <p className="text-[#4b2b1c] mt-4">
          We started out as a small local business, but now we are growing into
          a franchise with the help of our customers. The name of the store
          “Te Amo” arose from our saying “BEElieve in happiness.”
        </p>

        <div className="mt-3">
          {/* Button */}
          <NButton text="About us" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
