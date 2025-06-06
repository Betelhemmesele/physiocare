import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // assuming you're using react-router-dom for navigation
import {FaPhoneAlt} from 'react-icons/fa'; // import a phone icon from react-icons
import image from '../assets/phsiocare.webp';

const Header = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto my-0 px-4 md:px-2 lg:px-8 flex items-center justify-between">
      <div className="items-center hidden md:flex">
  <Link to="/">
    <img src={image} alt="Royal Care Logo" class="h-24 w-auto"  />
  </Link>
</div>


        {/* Desktop Navigation Links (Only for md and above) */}
<nav className="hidden md:flex space-x-4 md:space-x-2 lg:space-x-4">
      <Link
        to="/"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-1 lg:px-4 rounded-sm transition duration-300"
      >
        Home
      </Link>
      <Link
        to="/services"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
        Services
      </Link>
      <Link to="/patient-info" className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
  Patient Info
</Link>
      <Link
        to="/contact-us"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
        Contact Us
      </Link>
      <Link
        to="/about-us"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
        About Us
      </Link>
      <Link
        to="/testimonials"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
        Testimonials
      </Link>
      <Link
        to="/faqs"
        className="text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 md:px-2 lg:px-4 rounded-sm transition duration-300"
      >
        FAQs
      </Link>
    </nav>
        {/* Mobile Header (Only for small screens) */}
        <div className="md:hidden flex items-center my-1 justify-between w-full">
          {/* Mobile Menu Toggle (left side) */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Conditionally render Hamburger or X icon */}
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* Logo and Title (center for small screens) */}
          <div className="flex items-center mx-auto">
          <Link to="/">

            <img src={image} alt="Royal Care Logo" class="max-h-24 w-60"  />
            </Link>
          </div>

          {/* Call Icon (right side) */}
          <a href="tel:(516)379-0000" className="text-blue-700 hover:text-blue-500 transition duration-300" aria-label="Follow us on Twitter">
            <FaPhoneAlt className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Semi-transparent overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleMenu}></div>

          {/* Slide-in menu (half of the screen) */}
          <div className="fixed top-0 left-0 w-2/3 h-full bg-white shadow-md z-50 transition-transform transform duration-500 ease-in-out">
            <div className="flex flex-col items-start space-y-2 py-4 px-4">
              {/* Menu Items */}
              <button
                className="text-gray-700 hover:text-blue-600 focus:outline-none mb-4"
                onClick={toggleMenu}
              >
                {/* X icon inside menu */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>

              <Link
                to="/"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link to="/patient-info" className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu} >
  Patient Info
</Link>
              <Link
                to="/contact-us"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <Link
                to="/about-us"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/testimonials"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
              
              <Link
                to="/faqs"
                className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-sm transition duration-300 w-full"
                onClick={toggleMenu}
              >
                FAQs
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
