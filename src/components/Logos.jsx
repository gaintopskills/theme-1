import React from 'react';

const logos = [
  { src: '/adcolor.webp', alt: 'NTWRK', width: 259, height: 30 },
  { src: '/veronica-beard.webp', alt: '30 seconds to mars', width: 284, height: 30 },
  { src: '/crate-and-barrel.webp', alt: '30 seconds to mars', width: 205, height: 30 },
  { src: '/tory-burch.webp', alt: '30 seconds to mars', width: 317, height: 30 },
  { src: '/share.webp', alt: '30 seconds to mars', width: 218, height: 30 },
  { src: '/30-seconds-to-mars.webp', alt: '30 seconds to mars', width: 78, height: 30 },
  { src: '/frame-denim.webp', alt: 'Frame Demin logo', width: 263, height: 30 },
  { src: '/joes.webp', alt: 'Joes', width: 130, height: 30 },
  { src: '/levis.webp', alt: 'Logo Levis logo', width: 136, height: 30 },
  { src: '/NTWRK.webp', alt: 'NTWRK', width: 137, height: 30 },
  { src: '/petite-plume.webp', alt: 'NTWRK', width: 421, height: 30 },
  { src: '/todd-snyder.webp', alt: 'NTWRK', width: 135, height: 30 },
  { src: '/ralph-lauren.webp', alt: 'NTWRK', width: 390, height: 30 },
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
      animation: 'scroll 20s linear infinite',
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
            style={styles.logoImage}
          />
        ))}
      </div>
    </div>
  );
};
