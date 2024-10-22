import React, { useEffect, useState } from 'react';

export const StitchingAnimation = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtitle(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <svg viewBox="0 0 1200 300" className="w-full h-auto px-8">
        <text className="banner-text font-dancing text-[10vw] text-white" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          E & R Unlimited Inc.
        </text>
      </svg>

      {showSubtitle && (
        <div className="fade-in mt-4 text-white p-4 text-3xl transition-opacity opacity-100">
          Where quality and innovation matter.
        </div>
      )}
    </div>
  );
};