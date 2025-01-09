import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Embroidery",
    description:
      "High-quality digital embroidery for polo shirts, jackets, caps, workwear, and business shirts. Perfect for personalization and prestige.",
    image: "/icons/embroidery-services.webp",
    link: "https://theprinthq.com.au/embroidery-services/",
  },
  {
    title: "Screen Printing",
    description:
      "Cost-effective printing for orders over 25 garments. Experts in color matching and quality to ensure excellent results every time.",
    image: "/icons/bulk-screen-printing-services.webp",
    link: "https://theprinthq.com.au/screen-printing-sydney/",
  },
  {
    title: "DTG - Direct To Garment",
    description:
      "Perfect for promotional companies, fashion events, and clothing labels. DTG allows printing vibrant images onto garments with a smooth, light feel.",
    image: "/icons/direct-to-garment-services.webp",
    link: "https://theprinthq.com.au/dtg-printing-sydney/",
  },
  {
    title: "Digital Sublimation",
    description:
      "High-quality, durable prints for fabrics using DTF. Vibrant, full-color designs perfect for custom apparel and promotional items.",
    image: "/icons/digital-sublimation-services.webp",
    link: "https://theprinthq.com.au/dtf-printing/",
  },
  {
    title: "Cut & Sew",
    description:
      "Perfect for custom logos, team player names, numbers, or swimwear. Heat transfers ensure durable and high-quality applications.",
    image: "/icons/cut-and-sew.webp",
    link: "https://theprinthq.com.au/vinyl-heat-transfers/",
  },
  {
    title: "Blank Apparel",
    description:
      "Access high-quality blank apparel for printing or embroidery. We partner with the best wholesale brands, offering styles for every need.",
    image: "/icons/blank-apparel-provider.webp",
    link: "https://theprinthq.com.au/blank-apparel/",
  },
];

export const ServicesSection = () => {
  return (
    <>
      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8"><h2>Services</h2>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex md:flex-row items-start md:items-center p-4 rounded-md transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform"
          >
            {/* Image Wrapper */}
            <div className="flex items-center justify-center w-24 h-24 flex-shrink-0">
              <a href={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition duration-300 transform hover:scale-105 rounded-md"
                />
              </a>
            </div>
            {/* Text Content */}
            <div className="flex flex-col text-center md:text-left ml-4">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white hover:text-gray-400 transition-colors"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <div className="flex mt-4 space-x-4">
                <a
                  href={service.link}
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-500 transition duration-300 inline-block"
                >
                  Learn More
                </a>
                <a
                  href="#quote"
                  className="px-4 py-2 bg-red-800 text-white rounded-md hover:bg-red-600 transition duration-300 inline-block"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};
