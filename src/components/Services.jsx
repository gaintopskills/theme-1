import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "DTG - Direct To Garment",
    description:
      "Perfect for promotional companies, fashion events, and clothing labels. DTG allows printing vibrant images onto garments with a smooth, light feel.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/tshirt.png",
    link: "https://theprinthq.com.au/dtg-printing-sydney/",
  },
  {
    title: "Embroidery",
    description:
      "High-quality digital embroidery for polo shirts, jackets, caps, workwear, and business shirts. Perfect for personalization and prestige.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/embroidery.png",
    link: "https://theprinthq.com.au/embroidery-services/",
  },
  {
    title: "Blank Apparel",
    description:
      "Access high-quality blank apparel for printing or embroidery. We partner with the best wholesale brands, offering styles for every need.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/cap.png",
    link: "https://theprinthq.com.au/blank-apparel/",
  },
  {
    title: "DTF - Direct To Film",
    description:
      "High-quality, durable prints for fabrics using DTF. Vibrant, full-color designs perfect for custom apparel and promotional items.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/t-shirt.png",
    link: "https://theprinthq.com.au/dtf-printing/",
  },
  {
    title: "Vinyl Transfers",
    description:
      "Perfect for custom logos, team player names, numbers, or swimwear. Heat transfers ensure durable and high-quality applications.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/jersey.png",
    link: "https://theprinthq.com.au/vinyl-heat-transfers/",
  },
  {
    title: "Screen Printing",
    description:
      "Cost-effective printing for orders over 25 garments. Experts in color matching and quality to ensure excellent results every time.",
    image: "https://theprinthq.com.au/wp-content/uploads/2021/03/printing.png",
    link: "https://theprinthq.com.au/screen-printing-sydney/",
  },
];

export const ServicesSection = () => {
  return (
    <section className="container mx-auto px-4 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="flex items-center space-x-6 p-4 rounded-md bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:to-gray-800 transform transition duration-300 hover:scale-105 shadow-lg"
        >
          <figure className="relative">
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
              <p className="text-white text-sm">View More</p>
            </div>
          </figure>
          <div>
            <h3 className="text-lg font-bold text-white hover:text-gray-400 transition-colors">
              <a href={service.link}>{service.title}</a>
            </h3>
            <p className="text-gray-400">{service.description}</p>
            <a
              href={service.link}
              className="mt-3 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-500 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      ))}
    </section>
  );
};
