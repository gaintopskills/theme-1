import React from 'react';

const logos = [
  { src: '/30-seconds-to-mars.webp', alt: '30 seconds to mars', width: 78, height: 30  },
  { src: '/frame-denim.webp', alt: 'Frame Demin logo', width: 268, height: 30  },
  { src: '/joes.webp', alt: 'Joes', width: 189, height: 50  },
  { src: '/levis.webp', alt: 'Logo Levis logo', width: 226, height: 50  },
  { src: '/NTWRK.webp', alt: 'NTWRK', width: 299, height: 50  },
  { src: '/petite-plume.webp', alt: 'NTWRK', width: 421, height: 30  },
  { src: '/todd-snyder.webp', alt: 'NTWRK', width: 224, height: 50  },
  { src: '/ralph-lauren.webp', alt: 'NTWRK', width: 650, height: 50  },
  { src: '/adcolor.webp', alt: 'NTWRK', width: 432, height: 50  },
];
export const Logos = () => {
  return (
    <div className="logo-scroll-container">
     
      <div className="logo-track">
        {logos.map((logo, index) => (
          <img
          key={`repeat-${index}`}
          src={logo.src}
          alt={logo.alt}
          width={logo.width} // Use exact width from the array
          height={logo.height} // Use exact height from the array
          style={{ display: 'inline-block' }} // Ensure inline-block for spacing
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
