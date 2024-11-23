import { motion } from "framer-motion";

import { QuoteIcon } from "../assets/icons/QuoteIcon";
import testimonial1 from "../assets/images/high-end-embroidery-patches-los-angeles.webp";
import testimonial2 from "../assets/images/high-volume-patches-los-angeles.webp";
import testimonial3 from "../assets/images/high-end-embroidery-patches-los-angeles.webp";

const testimonialsData = [
  {
    heading: "Outstanding Analytics",
    customerName: "John Watkins",
    customerTitle: "Founder of Dashflow",
    content:
      "The powerful analytic tools have helped us streamline our processes and make data-driven decisions that positively impact our efficiency. Tailcast has been a game-changer for our business. The platform is easy to use, and the insights we've gained have driven significant improvements.",
    image: testimonial1,
  },
  {
    heading: "Incredible Support",
    customerName: "Jane Doe",
    customerTitle: "CEO of BrightTech",
    content:
      "The team at Tailcast has provided exceptional support. Their timely responses and expert advice have ensured our business runs smoothly. It's a pleasure working with such a dedicated team.",
    image: testimonial2,
  },
  {
    heading: "Streamlined Processes",
    customerName: "Alex Smith",
    customerTitle: "COO of TechFlow",
    content:
      "Tailcast's platform has streamlined our workflows, allowing us to focus more on growth. The ease of use and practical features make it a valuable asset for any organization.",
    image: testimonial3,
  },
];

export const Testimonials = () => (
  <section className="w-full flex justify-center pt-16 mb-16 lg:mb-32 bg-black relative">
    <div className="absolute -top-16" id="feedback" />
    <div className="flex flex-col w-full lg:w-[1150px] justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="block-subtitle text-center mb-6">3 features</div>
        <div className="block-big-title text-center mb-20 px-8 sm:px-24 md:px-48">
          People like you love Tailcast
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-bgDark3 flex flex-col px-6 py-4"
              key={`${testimonial.customerName}-${index}`}
            >
              {/* Render image above heading */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image.src}
                  alt="Customer avatar"
                  className="w-24 h-24 rounded-full"
                  aria-label={testimonial.customerName}
                />
              </div>

              {/* Render dynamic heading */}
              <h1 className="text-white text-2xl font-bold mb-4">
                {testimonial.heading}
              </h1>

              <div className="flex mb-2">
                <QuoteIcon />
              </div>
              <div className="content-text-white">"{testimonial.content}"</div>
              <div className="flex mt-4 mb-2 xl:mt-8 xl:mb-4">
                <div className="flex flex-col ml-4">
                  <div className="content-text-white font-medium">
                    {testimonial.customerName}
                  </div>
                  <div className="content-text-gray">
                    {testimonial.customerTitle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
