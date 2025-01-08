import React from "react";

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
        <div
          key={index}
          className="flex items-center space-x-6 p-4 rounded-md bg-gray-900 transition duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105 transform"
        >
          <figure className="flex-shrink-0 overflow-hidden rounded-md">
            <a href={service.link}>
              <img
                src={service.image}
                alt={service.title}
                className="w-24 h-24 object-cover transition duration-300 transform hover:scale-110"
              />
            </a>
          </figure>
          <div>
            <h3 className="text-lg font-bold text-white hover:text-gray-400 transition-colors">
              <a href={service.link}>{service.title}</a>
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};
