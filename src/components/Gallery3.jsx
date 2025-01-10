<div
  style={{
    marginBottom: "50px",
    paddingBottom: "40px",
    paddingTop: "20px", // General padding
  }}
  className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center bg-black overflow-hidden"
>
  {/* Left Arrow */}
  <button
    onClick={handlePrev}
    className="absolute left-4 bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
  >
    ❮
  </button>

  {/* Images */}
  <div className="relative flex flex-col items-center justify-center w-full h-full">
    {images.map((src, index) => {
      const relativeIndex =
        (index - currentIndex + images.length) % images.length;

      let zIndex = 0;
      let scale = 1;
      let opacity = 1;
      let translateX = "translateX(0%)";
      let translateY = "translateY(0%)";

      if (relativeIndex === 0) {
        // Center image
        zIndex = 10;
        scale = 1.2;
        opacity = 1;
        translateY = "translateY(-10%)"; // Adjust center image vertically
      } else if (relativeIndex <= 3) {
        zIndex = 10 - relativeIndex;
        scale = 1 - relativeIndex * 0.1;
        opacity = 1 - relativeIndex * 0.2;
        translateX = `translateX(${relativeIndex * 50}%)`;
      } else if (relativeIndex >= images.length - 3) {
        const distanceFromEnd = images.length - relativeIndex;
        zIndex = 10 - distanceFromEnd;
        scale = 1 - distanceFromEnd * 0.1;
        opacity = 1 - distanceFromEnd * 0.3;
        translateX = `translateX(-${distanceFromEnd * 50}%)`;
      } else {
        opacity = 0;
      }

      return (
        <div
          key={index}
          className="absolute transition-all duration-500 ease-in-out flex flex-col items-center"
          style={{
            transform: `${translateX} ${translateY} scale(${scale})`,
            zIndex: zIndex,
            opacity: opacity,
          }}
        >
          <img
            src={src}
            alt={captions[index]} // Use custom captions for accessibility
            loading="lazy"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-[400px] lg:h-[400px] object-cover rounded-lg shadow-md mb-4"
          />
          {/* Custom Caption */}
          {relativeIndex === 0 && (
            <div
              className="bg-gray-800 text-white text-sm md:text-lg p-2 rounded-lg shadow-md"
              dangerouslySetInnerHTML={{ __html: captions[index] }}
            ></div>
          )}
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
