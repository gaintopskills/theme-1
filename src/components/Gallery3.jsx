import React, { useState } from "react";

const images = [
  "../product1.jpg",
  "../product2.jpg",
  "../product3.jpg",
  "../product4.jpg",
  "../product5.jpg",
  "../product6.jpg",
  "../product7.jpg",
  "../product8.jpg",
  "../product9.jpg",
];

export const Gallery3 = () => {
  const [currentIndex, setCurrentIndex] = useState(3); // Start with the middle image

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-80 md:h-96 lg:h-[500px] flex items-center justify-center bg-black overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❮
      </button>

      {/* Images */}
      <div className="relative flex items-center justify-center w-full h-full">
        {images.map((src, index) => {
          // Calculate relative position to the currentIndex
          const relativeIndex =
            (index - currentIndex + images.length) % images.length;

          // Calculate styles dynamically
          let zIndex = 0;
          let scale = 1;
          let opacity = 1;
          let translateX = "translateX(0%)";

          if (relativeIndex === 0) {
            // Center image
            zIndex = 10;
            scale = 1.2;
            opacity = 1;
          } else if (relativeIndex <= 3) {
            // Images on the right
            zIndex = 10 - relativeIndex;
            scale = 1 - relativeIndex * 0.1;
            opacity = 1 - relativeIndex * 0.2;
            translateX = `translateX(${relativeIndex * 50}%)`;
          } else if (relativeIndex >= images.length - 3) {
            // Images on the left
            const distanceFromEnd = images.length - relativeIndex;
            zIndex = 10 - distanceFromEnd;
            scale = 1 - distanceFromEnd * 0.1;
            opacity = 1 - distanceFromEnd * 0.3;
            translateX = `translateX(-${distanceFromEnd * 50}%)`;
          } else {
            // Hide images farther away
            opacity = 0;
          }

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `${translateX} scale(${scale})`,
                zIndex: zIndex,
                opacity: opacity,
              }}
            >
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-32 h-32 md:w-40 md:h-40 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-md"

              />
            </div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default Gallery3;
