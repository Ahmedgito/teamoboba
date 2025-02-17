import React from "react";
import { useInView } from "react-intersection-observer"; // Import Intersection Observer
import s4_1 from "./assets/s4_1.webp";
import s4_2 from "./assets/s4_2.webp";
import s4_3 from "./assets/s4_3.webp";
import NButton from './components/NButton';

const Section4 = () => {
  // Intersection Observer hooks for different parts of Section4
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: descriptionRef, inView: descriptionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: buttonsRef, inView: buttonsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: imagesRef, inView: imagesInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="text-center max-w-5xl mx-auto px-6 py-12">
      {/* Heading Animation */}
      <h2
        ref={headingRef}
        className={`text-3xl md:text-5xl font-bold text-[#4b2b1c] transform transition-all duration-1000 ${
          headingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Drinks & Desserts
      </h2>

      {/* Description Animation */}
      <p
        ref={descriptionRef}
        className={`text-gray-600 mt-4 transform transition-all duration-1000 ${
          descriptionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        Most famous for our chewy, squishy boba and fresh brew tea, we're also well known
        for a variety of milk tea series, slushies, and espresso. Using top-quality
        ingredients, we guarantee the best flavors in every cup.
      </p>

      {/* Buttons Section */}
      <div
        ref={buttonsRef}
        className={`flex flex-col sm:flex-row justify-center gap-4 mt-6 transform transition-all duration-1000 ${
          buttonsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <NButton text="Menu" />
        <NButton text="Order Now" />
      </div>

      {/* Drinks Images Section */}
      <div
        ref={imagesRef}
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 transform transition-all duration-1000 ${
          imagesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px] flex justify-center items-center overflow-hidden">
            <img
              src={s4_1}
              alt="Brown Sugar Boba"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Brown Sugar Boba Series</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px] flex justify-center items-center overflow-hidden">
            <img
              src={s4_2}
              alt="Fruit Tea"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Fruit Tea Series</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px] flex justify-center items-center overflow-hidden">
            <img
              src={s4_3}
              alt="Milk Tea"
              className="w-full h-auto object-cover rounded-[20px]"
            />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Milk Tea Series</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
