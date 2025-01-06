import React from 'react';

const logos = [
  { src: '/30-seconds-to-mars.webp', alt: '30 seconds to mars' },
  { src: '/frame-denim.webp', alt: 'Logo  Frame Demin' },
  { src: '/joes.webp', alt: 'Joes' },
  { src: '/levis.webp', alt: 'Logo Levis logo' },
  { src: '/NTWRK.webp', alt: 'NTWRK' },
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
            style={{
              height: '50px', // Set consistent height
              width: 'auto',  // Adjust width to maintain aspect ratio
            }}
          />
        ))}
      </div>
    </div>
  );
};
