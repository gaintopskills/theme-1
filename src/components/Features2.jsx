import { motion } from "framer-motion";

import feature5 from "../assets/images/feature5.jpg";
import feature6 from "../assets/images/feature6.jpg";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

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
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Embroidery
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Monitor and track data issues with ease using our intuitive and
              efficient issue tracking system. Stay ahead of potential problems
              and improve your workflow.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Screen Printing
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Collaborate seamlessly with your team using our integrated tools.
              Share updates, assign tasks, and work together to solve challenges
              with ease.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Direct To Garment
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Collaborate seamlessly with your team using our integrated tools.
              Share updates, assign tasks, and work together to solve challenges
              with ease.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-full flex flex-col">
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Powerful collaboration tools
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Collaborate seamlessly with your team using our integrated tools.
              Share updates, assign tasks, and work together to solve challenges
              with ease.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Powerful collaboration tools
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Collaborate seamlessly with your team using our integrated tools.
              Share updates, assign tasks, and work together to solve challenges
              with ease.
            </p>
            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl block-big-title">
              Powerful collaboration tools
            </h2>
            <p className="mb-12 text-secondaryText leading-loose">
              Collaborate seamlessly with your team using our integrated tools.
              Share updates, assign tasks, and work together to solve challenges
              with ease.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
