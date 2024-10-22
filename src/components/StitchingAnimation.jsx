import React, { useEffect, useState } from 'react';

export const StitchingAnimation = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    // Trigger the subtitle to fade in after a shorter time
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 500); // Reduced the delay to 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <svg viewBox="0 0 1200 300" className="w-full h-auto">
        <text className="banner-text font-dancing text-[10vw] text-white" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          E & R Unlimited Inc.
        </text>
      </svg>

      {showSubtitle && (
        <div className="mt-4 bg-white text-black p-4 text-xl transition-opacity duration-5000 opacity-100 ease-in">
          Where quality and innovation matter.
        </div>
      )}
    </div>
  );
};