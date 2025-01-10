import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DTG - Direct To Garment",
    description:
      "Perfect for promotional companies, fashion events, and clothing labels. DTG allows printing vibrant images onto garments with a smooth, light feel.",
    image: "/icons/direct-to-garment-services.webp",
    link: "https://theprinthq.com.au/dtg-printing-sydney/",
  },
  {
    title: "Embroidery",
    description:
      "High-quality digital embroidery for polo shirts, jackets, caps, workwear, and business shirts. Perfect for personalization and prestige.",
    image: "/icons/embroidery-services.webp",
    link: "https://theprinthq.com.au/embroidery-services/",
  },
  {
    title: "Blank Apparel",
    description:
      "Access high-quality blank apparel for printing or embroidery. We partner with the best wholesale brands, offering styles for every need.",
    image: "/icons/blank-apparel-provider.webp",
    link: "https://theprinthq.com.au/blank-apparel/",
  },
  {
    title: "Digital Sublimation",
    description:
      "High-quality, durable prints for fabrics using DTF. Vibrant, full-color designs perfect for custom apparel and promotional items.",
    image: "/icons/digital-sublimation-services.webp",
    link: "https://theprinthq.com.au/dtf-printing/",
  },
  {
    title: "Cut and Sew",
    description:
      "Perfect for custom logos, team player names, numbers, or swimwear. Heat transfers ensure durable and high-quality applications.",
    image: "/icons/cut-and-sew.webp",
    link: "https://theprinthq.com.au/vinyl-heat-transfers/",
  },
  {
    title: "Screen Printing",
    description:
      "Cost-effective printing for orders over 25 garments. Experts in color matching and quality to ensure excellent results every time.",
    image: "/icons/bulk-screen-printing-services.webp",
    link: "https://theprinthq.com.au/screen-printing-sydney/",
  },
];

export const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
     <h2>Services</h2>
     {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }} // Start with opacity 0
          whileInView={{ opacity: 1 }} // Fade in when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger once when 20% in view
          transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animations
          className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 p-4 rounded-md transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform"
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
