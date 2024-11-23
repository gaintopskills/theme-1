import { motion } from "framer-motion";
import testimonial1 from "../assets/images/high-end-embroidery-patches-los-angeles.webp";
import testimonial2 from "../assets/images/high-volume-patches-los-angeles.webp";
import testimonial3 from "../assets/images/high-end-embroidery-patches-los-angeles.webp";

const testimonialsData = [
  {
    heading: "Unlimited Potential",
    content:
      "Our core embellishment techniques, in one house, can be combined to create stunning results!",
    image: testimonial1,
  },
  {
    heading: "High Quality",
    content:
      "With over 30 years of experience in the fashion industry, we are ready to take on any project that you can imagine.",
    image: testimonial2,
  },
  {
    heading: "High Volume",
    content:
      "From simple samples to full-fledged production of 15,000 + units.",
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
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-stretch">
          {testimonialsData.map((testimonial, index) => (
            <div
              className="w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 main-border-gray-darker rounded-xl bg-black flex flex-col px-6 py-4 items-center text-center h-full"
              key={`${testimonial.heading}-${index}`}
            >
              {/* Render image above heading */}
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image.src}
                  alt="Customer avatar"
                  className="w-32 h-32 rounded-full"
                  aria-label={testimonial.heading}
                />
              </div>

              {/* Render dynamic heading */}
              <h1 className="text-white text-2xl font-bold mb-4">{testimonial.heading}</h1>

              {/* Center content */}
              <div
                className="content-text-white"
                dangerouslySetInnerHTML={{
                  __html: testimonial.content,
                }}
              ></div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);
