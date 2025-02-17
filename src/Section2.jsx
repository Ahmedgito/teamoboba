import React, { useState } from "react";
import { useInView } from "react-intersection-observer"; // Import the hook for Intersection Observer
import pg1 from "./assets/pg1.webp";
import pg2 from "./assets/pg2.webp";
import pg3 from "./assets/pg3.webp";
import pg4 from "./assets/pg4.webp";

const menuImages = [
  { id: 1, src: pg1, alt: "Menu 1" },
  { id: 2, src: pg2, alt: "Menu 2" },
  { id: 3, src: pg3, alt: "Menu 3" },
  { id: 4, src: pg4, alt: "Menu 4" },
];

const MenuGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Intersection observer hook to animate images when they come into the viewport
  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true, // Trigger once
    threshold: 0.1, // 50% of the element should be in view
  });

  return (
    <>
      <h1 className="text-center text-[#4b2b1c] text-xl md:text-4xl mt-8 font-bold">
        OUR MENU
      </h1>

      <div className="container mx-auto px-4 md:py-7 py-3 max-w-[850px]">
        {/* Grid Layout */}
        <div
          ref={gridRef}
          className={`grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 transition-opacity duration-1000 ${
            gridInView ? "opacity-100" : "opacity-0"
          }`}
        >
          {menuImages.map((image) => (
            <div key={image.id} className="cursor-pointer">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain rounded-lg shadow-md transition-transform hover:scale-105"
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
