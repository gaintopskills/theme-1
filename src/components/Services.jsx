import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Embroidery",
    description:
      "We offer high-quality embroidery from custom patches to intricate applications for polo shirts, jackets, caps, workwear, and business shirts.",
    image: "/icons/embroidery-services.webp",
    link: "https://theprinthq.com.au/embroidery-services/",
  },
  {
    title: "Screen Printing",
    description:
      "We deliver best and competative screen printing products. We are always in the process of collaborating between our sales team and clients to acieve the best color matching and quality ensuring excellent results every time.",
    image: "/icons/bulk-screen-printing-services.webp",
    link: "https://theprinthq.com.au/screen-printing-sydney/",
  },
  {
    title: "DTG - Direct To Garment",
    description:
      "We specialize in delivering high-quality DTG (Direct To Garment) printing, offering vibrant and durable designs with a smooth finish. Perfect for promotional products, fashion events, or custom clothing lines, we ensure exceptional detail and color accuracy on every garment.",
    image: "/icons/direct-to-garment-services.webp",
    link: "https://theprinthq.com.au/dtg-printing-sydney/",
  },
  {
    title: "Digital Sublimation",
    description:
      "We utilize state-of-the-art Mimaki and Italian Monti Antonio machines to deliver top-quality digital sublimation services. All production is done in-house, ensuring exceptional results with speed and precision!",
    link: "https://theprinthq.com.au/dtf-printing/",
  },
  {
    title: "Cut and Sew",
    description:
      "Our Cut and Sew services provide complete customization, from pattern creation to finished products. Whether it's unique apparel, uniforms, or tailored designs, we ensure precision, quality, and attention to detail in every stitch.",
    image: "/icons/cut-and-sew.webp",
    link: "https://theprinthq.com.au/vinyl-heat-transfers/",
  },
  {
    title: "Blank Apparel",
    description:
      "Our Blank Apparel services offer a wide range of high-quality, versatile garments ready for customization. From t-shirts to hoodies, we partner with top wholesale brands to provide styles and fabrics that meet your printing, embroidery, or branding needs.",
    image: "/icons/blank-apparel-provider.webp",
    link: "https://theprinthq.com.au/blank-apparel/",
  },
];
export const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 overflow-hidden min-h-screen">
    {services.map((service, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0 }} // Start with opacity 0
        whileInView={{ opacity: 1 }} // Fade in when in view
        viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
        transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animations
        className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4 rounded-md transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-102 transform"
      >
        <figure className="w-full md:w-auto flex-shrink-0 overflow-hidden rounded-md">
          <a href={service.link}>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-24 h-24 object-cover mx-auto transition duration-300 transform hover:scale-110"
            />
          </a>
        </figure>
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white hover:text-gray-400 transition-colors">
            <a href={service.link}>{service.title}</a>
          </h3>
          <p className="text-gray-400">{service.description}</p>
          <div className="flex flex-wrap justify-center mt-4 space-x-4">
            <a
              href={service.link}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition duration-300"
            >
              Learn More
            </a>
            <a
              href="#quote"
              className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-700 transition duration-300"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </motion.div>
    ))}
  </section>
  
  );
};
