import { useState } from 'react';
import { motion } from 'framer-motion';

const Samples = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="animation-showcase">
      {/* 1. Stitching Animation */}
      <motion.div
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 2 }}
        className="embroidery-stitch"
      >
        <svg width="200" height="100">
          <text x="10" y="50" fontSize="30" fill="none" stroke="black" strokeWidth="2">
            Embroidery
          </text>
        </svg>
      </motion.div>

      {/* 2. Sewing Machine Hover Animation */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="sewing-machine"
        style={{ marginTop: '20px' }}
      >
        <img src="/sewing-machine-icon.png" alt="Sewing Machine" style={{ width: '100px' }} />
      </motion.div>

      {/* 3. Spool and Thread Scroll Animation */}
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: '100%' }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="spool-thread"
        style={{ marginTop: '20px' }}
      >
        <img src="/thread-spool.png" alt="Thread Spool" style={{ width: '50px' }} />
      </motion.div>

      {/* 4. Embroidery Product Showcase */}
      <motion.div
        whileHover={{ opacity: 0.8 }}
        className="product-showcase"
        style={{ marginTop: '20px', border: '1px solid black', padding: '10px' }}
      >
        <img src="/product.jpg" alt="Embroidery Product" className="product-image" />
        <div className="product-hover-text">View Design Details</div>
      </motion.div>

      {/* 5. Needle and Thread Cursor Animation */}
      <div
        style={{ cursor: 'url("/needle-cursor.png"), auto', marginTop: '20px' }}
        className="needle-cursor"
      >
        {/* Your page content */}
        <p>Hover around to see the needle cursor!</p>
      </div>

      {/* 6. Embroidery Frame Zoom Effect */}
      <motion.div
        whileHover={{ scale: 1.2, zIndex: 2 }}
        className="embroidery-frame"
        style={{ marginTop: '20px', border: '1px solid black', padding: '10px', display: 'inline-block' }}
      >
        <img src="/embroidery-design.jpg" alt="Embroidery Design" style={{ width: '150px' }} />
      </motion.div>

      {/* 7. Button Hover with Thread Animation */}
      <motion.button
        whileHover={{ border: '2px solid #000', boxShadow: '0 0 5px #000' }}
        className="sewing-button"
        style={{ marginTop: '20px', padding: '10px', backgroundColor: '#111', color: '#fff' }}
      >
        Get Quote
      </motion.button>

      {/* 8. Stitch Path Line Drawing */}
      <svg width="200" height="100" style={{ marginTop: '20px' }}>
        <motion.path
          d="M10 10 Q 50 50 90 10"
          fill="transparent"
          stroke="black"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />
      </svg>

      {/* 9. Color Thread Unravel Effect */}
      <motion.div
        className="thread-unravel"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 2 }}
        style={{ backgroundColor: 'red', height: '10px', marginTop: '20px' }}
      ></motion.div>

      {/* 10. Testimonials Fade-In */}
      <motion.div
        className="testimonial"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ marginTop: '20px', backgroundColor: '#333', color: '#fff', padding: '20px', borderRadius: '10px' }}
      >
        <p>"Best embroidery service! Great quality!"</p>
      </motion.div>
    </div>
  );
};

export default Samples;