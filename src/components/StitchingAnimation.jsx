import React from 'react';

export const StitchingAnimation = () => {
  return (
    <div className="responsive-banner-container">
      <svg viewBox="0 0 1200 300" className="responsive-banner-svg">
        {/* Main company name with handwriting effect */}
        <text className="banner-text" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
          E & R Unlimited Inc.
        </text>
        {/* Fading in second line */}
        <text className="fade-in-text" x="50%" y="70%" dominantBaseline="middle" textAnchor="middle">
          Where quality and innovation matter.
        </text>
        {/* Optional border around the banner */}
        <rect className="lux-border" x="10" y="10" width="1180" height="280" rx="20" ry="20" />
      </svg>
    </div>
  );
};
