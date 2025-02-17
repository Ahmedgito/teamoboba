import React from "react";
import { useInView } from "react-intersection-observer"; // Import the hook
import header from "./assets/header.webp";
import NButton from './components/NButton';

const Section1 = () => {
  // Intersection observer for the image
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  // Intersection observer for the button
  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the button is in view
  });

  return (
    <div className="relative flex justify-center m-auto mt-5 md:w-[1100px] md:h-[600px]">
      {/* Header Image */}
      <img
        ref={imageRef}
        src={header}
        alt="Header"
        className={`w-full h-auto md:w-[1100px] md:h-[600px] transition-opacity duration-1000 transform ${
          imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      />

      {/* Order Now Button - Responsive Placement */}
      <div
        ref={buttonRef}
        className={`absolute bottom-0 left-1/4 transform -translate-x-1/2 md:bottom-28 md:left-6 md:translate-x-0 transition-all duration-1000 ${
          buttonInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <NButton text="Order Now" />
      </div>
    </div>
  );
};

export default Section1;

