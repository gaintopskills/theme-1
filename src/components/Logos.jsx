import React from 'react';

const logos = [
  { src: '/logos/logo1.png', alt: 'Logo 1' },
  { src: '/logos/logo2.png', alt: 'Logo 2' },
  { src: '/logos/logo3.png', alt: 'Logo 3' },
  { src: '/logos/logo4.png', alt: 'Logo 4' },
  { src: '/logos/logo5.png', alt: 'Logo 5' },
];

export const InfiniteScrollLogos = () => {
  return (
    <div className="logo-scroll-container">
      <div className="logo-track">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="logo-image"
          />
        ))}
        {/* Repeat the logos to create the seamless scrolling effect */}
        {logos.map((logo, index) => (
          <img
            key={`repeat-${index}`}
            src={logo.src}
            alt={logo.alt}
            className="logo-image"
          />
        ))}
      </div>
    </div>
  );
};