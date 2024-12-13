import React, { useState, useEffect } from "react";

export const StitchingAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // 100ms delay to ensure smooth fade-in

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div className="image-container">
      <img
        src="/1-2b.png" // Assuming the image is placed in the "public" folder
        alt="Fading Image"
        className={`fade-in-image ${isVisible ? "visible" : ""}`}
      />
    </div>
  );
};