import React from "react";
import s4_1 from "./assets/s4_1.webp";
import s4_2 from "./assets/s4_2.webp";
import s4_3 from "./assets/s4_3.webp";
import NButton from './components/NButton';

const Section4 = () => {
  return (
    <div className="text-center max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-[#4b2b1c]">Drinks & Desserts</h2>
      <p className="text-gray-600 mt-4">
        Most famous for our chewy, squishy boba and fresh brew tea, we're also well known
        for a variety of milk tea series, slushies, and espresso. Using top-quality
        ingredients, we guarantee the best flavors in every cup.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        <NButton text="Menu" />

        <NButton text='Order Now'/>
        
      </div>

      {/* Drinks Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px]   flex justify-center items-center overflow-hidden">
            <img src={s4_1} alt="Brown Sugar Boba" className="w-full h-auto object-cover rounded-[20px]" />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Brown Sugar Boba Series</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px]  flex justify-center items-center overflow-hidden">
            <img src={s4_2} alt="Fruit Tea" className="w-full h-auto object-cover rounded-[20px]" />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Fruit Tea Series</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[220px] h-[320px] rounded-[30px]  flex justify-center items-center overflow-hidden">
            <img src={s4_3} alt="Milk Tea" className="w-full h-auto object-cover rounded-[20px]" />
          </div>
          <p className="font-semibold mt-2 text-[#4b2b1c]">Milk Tea Series</p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
