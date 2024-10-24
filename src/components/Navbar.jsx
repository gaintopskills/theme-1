import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { TailcastLogo } from '../assets/logos/TailcastLogo';
import { GithubIcon } from '../assets/icons/GithubIcon';

const navbarLinks = [
  { label: 'Home', href: '/#home', ariaLabel: 'Home' },
  {
    label: 'Features',
    href: '/#features',
    ariaLabel: 'Services',
    children: [
      { label: 'Sub-feature 3', href: '/sub-feature3', ariaLabel: 'Sub-feature 3' },
      { label: 'Sub-feature 4', href: '/sub-feature4', ariaLabel: 'Sub-feature 4' },
      { label: 'Sub-feature 5', href: '/sub-feature5', ariaLabel: 'Sub-feature 5' },
      { label: 'Sub-feature 6', href: '/sub-feature6', ariaLabel: 'Sub-feature 6' },
    ],
  },
  { label: 'Pricing', href: '/#pricing', ariaLabel: 'Pricing' },
  { label: 'Feedback', href: '/#feedback', ariaLabel: 'Feedback' },
  { label: 'FAQ', href: '/#FAQ', ariaLabel: 'FAQ' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Submenu open/close state for "Features"

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-black lg:bg-blackTransparent z-40 lg:backdrop-blur-xl bg-opacity-70" aria-label="Main navigation">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <a href="/#home" aria-label="Home">
            <div className="flex justify-start items-center grow basis-0">
              <div className="text-white mr-2 text-6xl">
                <TailcastLogo />
              </div>
              <div className="text-white font-['Inter'] font-bold text-xl"></div>
            </div>
          </a>
        </motion.div>

        {/* Main menu links */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
          <div className="hidden lg:flex h-full pl-12 pb-2">
            {navbarLinks.map(({ href, label, ariaLabel, children }) => (
              <div
                key={label}
                className="relative" // Ensure parent is relatively positioned
                onMouseEnter={() => children && setSubMenuOpen(true)}
                onMouseLeave={() => children && setSubMenuOpen(false)}
              >
                <a
                  className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2"
                  href={href}
                  aria-label={ariaLabel}
                >
                  {label}

                  {/* Arrow Icon */}
                  {children && (
                    <span className="ml-2">
                      {subMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293-3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
                      )}
                    </span>
                  )}
                </a>

                {/* Mega Menu for "Features" */}
                {children && (
                  <AnimatePresence>
                    {subMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute left-0 mt-2 w-full shadow-lg rounded-lg py-4 z-20 flex justify-between" // Flexbox for equal width columns
                        style={{ left: "-380px", right: "auto" }} // Move submenu 200px to the left
                      >
                        {/* Column 1 with image */}
                        <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Embroidery</h3>
                        </div>


                          {/* Column 1 with image */}
                          <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg ">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Screen Printing</h3>
                        </div>


                           {/* Column 1 with image */}
                           <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Digital Sublimation</h3>
                        </div>



                          {/* Column 1 with image */}
                          <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Direct To Garment Printing (DTG)</h3>
                        </div>



                          {/* Column 1 with image */}
                          <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Cut and Saw</h3>
                        </div>



                         {/* Column 1 with image */}
                         <div className="mega-menu-column bg-black flex-1 px-2 rounded-tl-lg rounded-bl-lg">
                          <img
                            src="/list.jpg"
                            alt="List Image"
                            className="mx-auto mb-1"
                            style={{ width: '130px', height: '130px', paddingTop: '10px', objectFit: 'cover' }}
                          />
                          <h3 className="text-white mb-1 text-lg w-36 text-center">Blank Apparel</h3>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Phone Number Link */}
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
  <div className="grow basis-0 justify-end hidden lg:flex">
    <a className="text-white main-border-gray rounded-xl bg-bgDark2 hover:bg-bgDark3 border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex" href="tel:+13235843000" aria-label="call phone number">
      <span className="pt-px">(323) 584-3000</span>
    </a>
  </div>
</motion.div>

        {/* Mobile hamburger menu */}
        <div className="lg:hidden flex flex-col px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500 mb-1"></div>
          <div className="w-5 h-0.5 bg-gray-500"></div>
        </div>
      </div>

      {/* Mobile navbar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} exit={{ opacity: 0 }}>
            <div className="flex flex-col mt-16 lg:hidden absolute top-4 left-0 bg-bgDark1 z-50 w-full items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10">
              {navbarLinks.map(({ label, href, ariaLabel, children }) => (
                <div key={label} className="relative">
                  <a
                    href={href}
                    className="text-white lg:text-base text-2xl leading-6 mr-4 ml-4 2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2"
                    onClick={children && label === '' ? toggleSubMenu : () => setIsOpen(false)} // Toggle submenu on "Features" click
                    aria-label={ariaLabel}
                  >
                    {label}

                    {/* Arrow Icon */}
                    {children && (
                      <span className="ml-2">
                        {subMenuOpen ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293-3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline-block" viewBox="0 0 20 20" fill="currentColor">
                            <path
                              fillRule="evenodd"
                              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            />
                          </svg>
                        )}
                      </span>
                    )}
                  </a>

                  {/* Show submenu when "Features" is clicked */}
                  {children && subMenuOpen && (
                    <ul className="pl-4">
                      {children.map((child) => (
                        <li key={child.label}>
                          <a href={child.href} className="text-white text-lg py-1 block hover:scale-110 transition duration-300" onClick={() => setIsOpen(false)}>
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              <a className="outlined-button pl-6 pr-8 pt-2 pb-2 flex" href="https://github.com/matt765/Tidestream" target="_blank">
                <GithubIcon />
                Source code
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};