import React, { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToService = () => {
    const contactSection = document.getElementById("service");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 shadow-lg z-50 backdrop-blur-md bg-opacity-90">
      {/* Logo */}
      <div className="text-3xl font-extrabold flex items-center space-x-2">
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
          <Link to="/" className="hover:text-blue-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-blue-400 transition duration-300">
            About Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-blue-400 transition duration-300" onClick={scrollToService}>
            Our Services
          </Link>
        </li>
      </ul>

      {/* Call to Action Button */}
      <div className="flex items-center space-x-4">
        <a 
          href="https://wa.me/yourwhatsappnumber" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 text-white p-2 rounded-full hover:bg-green-400 transition duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
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
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition duration-300">
              About Us
            </Link>
          </li>
          <li onClick={scrollToService}>
            <Link onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition duration-300" >
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/career" onClick={() => setIsOpen(false)} className="hover:text-blue-400 transition duration-300">
              Career
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
