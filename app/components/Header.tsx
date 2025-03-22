"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Header = () => {
  // Dropdown toggle state for mobile
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown state on mouse enter and leave
  const handleMouseEnter = () => setIsDropdownOpen(true);
  const handleMouseLeave = () => setIsDropdownOpen(false);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <motion.img
              src="/Dizit-Solution.webp" // Logo
              className="h-8"
              alt="Dizit Solution Logo"
              whileHover={{ scale: 1.1 }} // Add hover animation
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Keep toggle for mobile dropdown
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Navbar Links for Desktop */}
          <div className={`md:block ${isDropdownOpen ? "block" : "hidden"}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 justify-center">
              {/* Home */}
              <li>
                <Link href="/" className="block py-2 px-3 text-blue-700 hover:text-orange-600 hover:underline md:p-0 md:dark:text-blue-500 dark:hover:text-orange-600 transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 px-3 text-blue-700 hover:text-orange-600 hover:underline md:p-0 md:dark:text-blue-500 dark:hover:text-orange-600 transition duration-200">
                  About
                </Link>
              </li>

              {/* Dropdown Section */}
              <ul className="flex space-x-4">
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave} // Show dropdown on hover
                >
                  <motion.button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex items-center justify-between w-full py-2 px-3 text-blue-700 hover:text-orange-600 md:p-0 md:w-auto md:dark:text-blue-500 dark:hover:text-orange-600 transition duration-200"
                  >
                    Services
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
                    </svg>
                  </motion.button>

                  {/* Dropdown menu with framer-motion slide effect */}
                  {isDropdownOpen && (
                    <motion.div
                      id="dropdownNavbar"
                      className="absolute z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                          <Link href="/acrepair" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            AC Services
                          </Link>
                        </li>
                        <li>
                          <Link href="/washing-machine-services" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                            Washing Machine Services
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </li>
              </ul>

              {/* Other Links */}
              <li>
                <Link href="/contact" className="block py-2 px-3 text-blue-700 hover:text-orange-600 hover:underline md:p-0 md:dark:text-blue-500 dark:hover:text-orange-600 transition duration-200">
                  Contact
                </Link>
              </li>

              {/* Book Service Button */}
              <li>
                <Link href="/contact">
                  <button className="block py-2 px-3 text-white bg-blue-600 hover:bg-orange-600 rounded-md">
                    Book Service
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
