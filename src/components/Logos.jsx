import React from 'react';

const logos = [
  { src: '/30-seconds-to-mars.png', alt: 'Logo 1' },
  { src: '/frame-denim.png', alt: 'Logo 2' },
  { src: '/joes.png', alt: 'Logo 3' },
  { src: '/levis.png', alt: 'Logo 4' },
  { src: '/NTWRK.png', alt: 'Logo 5' },
];

export const Logos = () => {
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
