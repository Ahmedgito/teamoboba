import React, { useState } from "react";
import pg1 from "./assets/pg1.jpg";
import pg2 from "./assets/pg2.jpg";
import pg3 from "./assets/pg3.jpg";
import pg4 from "./assets/pg4.jpg";

const menuImages = [
  { id: 1, src: pg1, alt: "Menu 1" },
  { id: 2, src: pg2, alt: "Menu 2" },
  { id: 3, src: pg3, alt: "Menu 3" },
  { id: 4, src: pg4, alt: "Menu 4" },
];

const MenuGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <h1 className="text-center text-[#4b2b1c] text-xl md:text-4xl mt-8 font-bold">
        OUR MENU
      </h1>

      <div className="container mx-auto px-4 md:py-7 py-3">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-1">
          {menuImages.map((image) => (
            <div key={image.id} className="cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full md:h-[30rem] h-72 md:object-contain md:rounded-lg md:shadow-md hover:scale-105 md:transition-transform"
                onClick={() => setSelectedImage(image.src)}
              />
            </div>
          ))}
        </div>

        {/* Modal for Full-Screen Image */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative">
              <img
                src={selectedImage}
                alt="Menu Item"
                className="w-auto h-auto max-w-full max-h-screen rounded-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MenuGrid;

