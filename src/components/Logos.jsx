import React from 'react';

const logos = [
  { src: '/brands/adcolor.webp', alt: 'NTWRK', width: 259, height: 30 },
  { src: '/brands/veronica-beard.webp', alt: '30 seconds to mars', width: 284, height: 30 },
  { src: '/brands/crate-and-barrel.webp', alt: '30 seconds to mars', width: 205, height: 30 },
  { src: '/brands/tory-burch.webp', alt: '30 seconds to mars', width: 317, height: 30 },
  { src: '/brands/share.webp', alt: '30 seconds to mars', width: 218, height: 30 },
  { src: '/brands/30-seconds-to-mars.webp', alt: '30 seconds to mars', width: 78, height: 30 },
  { src: '/brands/frame-denim.webp', alt: 'Frame Demin logo', width: 263, height: 30 },
  { src: '/brands/joes.webp', alt: 'Joes', width: 130, height: 30 },
  { src: '/brands/levis.webp', alt: 'Logo Levis logo', width: 136, height: 30 },
  { src: '/brands/NTWRK.webp', alt: 'NTWRK', width: 137, height: 30 },
  { src: '/brands/petite-plume.webp', alt: 'NTWRK', width: 421, height: 30 },
  { src: '/brands/todd-snyder.webp', alt: 'NTWRK', width: 135, height: 30 },
  { src: '/brands/ralph-lauren.webp', alt: 'NTWRK', width: 390, height: 30 },
  { src: '/brands/adidas.webp', alt: 'NTWRK', width: 44, height: 30 },
  { src: '/brands/hmdo.webp', alt: 'NTWRK', width: 77, height: 30 },
];

export const Logos = () => {
  const styles = {
    logoScrollContainer: {
      overflow: 'hidden',
      position: 'relative',
      width: '100%',
      height: '50px',
    },
    logoTrack: {
      display: 'flex',
      gap: '20px',
      animation: 'scroll 15s linear infinite',
      whiteSpace: 'nowrap',
    },
    logoImage: {
      display: 'inline-block',
    },
    '@keyframes scroll': {
      from: { transform: 'translateX(0)' },
      to: { transform: 'translateX(-100%)' },
    },
  };

  return (
    <div style={styles.logoScrollContainer}>
      <div style={styles.logoTrack}>
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            loading="lazy" // Add lazy loading attribute
            style={styles.logoImage}
          />
        ))}
      </div>
    </div>
  );
};
