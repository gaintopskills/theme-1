import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Embroidery",
    description:
      "High-quality digital embroidery for polo shirts, jackets, caps, workwear, and business shirts. Perfect for personalization and prestige.",
    image: "/embroidery-services.webp",
    link: "https://theprinthq.com.au/embroidery-services/",
  },
  {
    title: "Screen Printing",
    description:
      "Cost-effective printing for orders over 25 garments. Experts in color matching and quality to ensure excellent results every time.",
    image: "/bulk-screen-printing-services.webp",
    link: "https://theprinthq.com.au/screen-printing-sydney/",
  },
  {
    title: "DTG - Direct To Garment",
    description:
      "Perfect for promotional companies, fashion events, and clothing labels. DTG allows printing vibrant images onto garments with a smooth, light feel.",
    image: "/direct-to-garment-services.webp",
    link: "https://theprinthq.com.au/dtg-printing-sydney/",
  },
  {
    title: "Digital Sublimation",
    description:
      "High-quality, durable prints for fabrics using DTF. Vibrant, full-color designs perfect for custom apparel and promotional items.",
    image: "/digital-sublimation-services.webp",
    link: "https://theprinthq.com.au/dtf-printing/",
  },
  {
    title: "Cut & Sew",
    description:
      "Perfect for custom logos, team player names, numbers, or swimwear. Heat transfers ensure durable and high-quality applications.",
    image: "/cut-and-sew.webp",
    link: "https://theprinthq.com.au/vinyl-heat-transfers/",
  },
  {
    title: "Blank Apparel",
    description:
      "Access high-quality blank apparel for printing or embroidery. We partner with the best wholesale brands, offering styles for every need.",
    image: "/blank-apparel-provider.webp",
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
      <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-6 p-4 rounded-md transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform"
          >
            <figure className="flex-shrink-0 overflow-hidden rounded-md mb-4 md:mb-0">
              <a href={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-24 h-24 object-cover transition duration-300 transform hover:scale-105"
                />
              </a>
            </figure>
            <div className="text-center md:text-left">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white hover:text-gray-400 transition-colors"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                <a href={service.link}>{service.title}</a>
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <a
                href={service.link}
                className="mt-4 inline-block px-4 py-2 border-gray-700 bg-gray-700 text-white rounded-md hover:bg-gray-500 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};
