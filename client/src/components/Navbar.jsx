import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = "918584009623";
  const message = encodeURIComponent(`📌 Hi, Digi Flow Solutions! 
    🚀 I’m excited to learn more about your digital marketing and IT services. 
    💻 Can you share more details about how we can collaborate? 
    Looking forward to connecting! 🌟😊`);

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    window.open(
      isMobile
        ? url
        : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
      "_blank"
    );
  };
  const scrollToService = () => {
    const contactSection = document.getElementById("service");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 shadow-lg z-50 backdrop-blur-md bg-opacity-90">
      {/* Logo */}
      <div
        className="text-3xl font-extrabold flex items-center space-x-2"
        onClick={() => navigate("/digital-marketing-app")}
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-4xl">
          Digi
        </span>
        <span className="text-white text-4xl">Flow</span>
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-xl">
          Solutions
        </span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li>
          <Link
            to="/digital-marketing-app"
            className="hover:text-blue-400 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-400 transition duration-300"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-blue-400 transition duration-300"
            onClick={scrollToService}
          >
            Our Services
          </Link>
        </li>
      </ul>

      {/* Call to Action Button */}
      <div className="flex items-center space-x-4">
      <div
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-400 transition duration-300 md:p-2 p-1"
          onClick={openWhatsApp}
        >
          <FaWhatsapp size={24} className="md:size-6 size-4" />
        </div>

        <button className="bg-blue-400 text-black px-6 py-2 font-semibold rounded-lg hover:bg-blue-300 transition duration-300 hidden md:block">
          Meet With Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-400 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 text-center flex flex-col space-y-6 py-6 text-lg md:hidden">
          <li>
            <Link
              to="/digital-marketing-app"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition duration-300"
            >
              About Us
            </Link>
          </li>
          <li onClick={scrollToService}>
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-400 transition duration-300"
            >
              Our Services
            </Link>
          </li>
          <li>
            <button className="bg-blue-400 text-black px-6 py-2 font-semibold rounded-lg hover:bg-blue-300 transition duration-300">
              Meet With Us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
