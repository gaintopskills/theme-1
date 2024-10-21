import React from 'react';

const logos = [
  { src: '/by-logo.jpg', alt: 'Logo 1' },
  { src: '/by-logo.jpg', alt: 'Logo 2' },
  { src: '/by-logo.jpg', alt: 'Logo 3' },
  { src: '/by-logo.jpg', alt: 'Logo 4' },
  { src: '/by-logo.jpg', alt: 'Logo 5' },
];

export const Logos = () => {
  return (
    <div className="logo-scroll-container">
      <p>Testing</p>
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
