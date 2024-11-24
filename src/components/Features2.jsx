import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";
import embroidery from "../assets/images/embroidery.webp";

export const Features2 = () => (
  <section className="w-full bg-black mt-12 sm:mt-24 mb-12 lg:my-20 lg:mb-24 pt-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex flex-wrap items-start 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start mb-12 lg:mb-0 lg:pr-8">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-full flex flex-col">
             <img
            src={embroidery}
            alt="Screen Printing Services"
            className="w-1/3 lg:w-1/4 mr-6 rounded-md"
          />
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Embroidery
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            We offer high-end embroidery services that combine sophistication and durability and add a high-quality finish to your garments. Perfect for custom apparel, uniforms, promotional products and more. </p>

<p>We create precise, vibrant designs with high-quality finishes using advanced stitching techniques and premium threads. Whether you need a professional logo, intricate design, or personalized text, our embroidery services deliver lasting results on a variety of fabrics.</p>

<p>Elevate your brand with our exceptional embroidery solutions - designed for style and durability.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Screen Printing
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Elevate your designs with our expert screen printing services, perfect for custom apparel, promotional products, and brand merchandise. Screen printing is ideal for bold, long-lasting designs on t-shirts, hoodies, and other garments.

Our process uses high-quality inks and precise techniques to deliver vibrant, durable prints that stand the test of time. Whether you're outfitting a team, promoting an event, or creating branded clothing, our screen printing ensures professional results on a wide range of fabrics and colors.

            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Direct To Garment
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Our Direct-to-Garment (DTG) printing services deliver exceptional quality and precision, making them perfect for promotional companies, fashion events, and clothing labels.
</p>
<p>Our advanced DTG technology ensures a smooth, high-quality finish, even on dark fabrics. The result? A light, breathable feel that looks and feels amazing.</p>
            
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-full flex flex-col">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              DTG
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Our Direct-to-Garment (DTG) printing services deliver exceptional quality and precision, making them perfect for promotional companies, fashion events, and clothing labels.
</p>
<p>Our advanced DTG technology ensures a smooth, high-quality finish, even on dark fabrics. The result? A light, breathable feel that looks and feels amazing.</p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Cuts & Saw
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Bring your creative vision to life with our professional cut-and-sew services crafted to match your specifications. Ideal for custom clothing brands, promotional apparel, and one-of-a-kind designs, our services offer complete customization to make your garments truly stand out.</p>

<p>From precise fabric cutting to expert stitching, we craft high-quality, tailored pieces that reflect your unique style and brand identity. Whether you're designing custom t-shirts, hoodies, or complex apparel items, our cut-and-sew services ensure impeccable quality and attention to detail.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Blank Apparel
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
            Explore our high-quality blank apparel, perfect for screen printing, embroidery, DTG printing, and more. Whether you're creating custom designs for a clothing brand, promotional merchandise, or team uniforms, our blank garments provide the ideal canvas for your creativity.</p>

<p>We offer a wide range of styles, including t-shirts, hoodies, polos, and more, in various sizes, colors, and fabrics to suit your needs. Designed for comfort and durability, our blank apparel is the perfect foundation for stunning, customized results.

Start your custom project with our versatile blank apparel—crafted to bring your designs to life.

Contact us today to place your order! </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
