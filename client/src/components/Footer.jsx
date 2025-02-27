import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
           <div className="text-3xl font-extrabold flex items-center space-x-2">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-4xl">
          Digi
        </span>
        <span className="text-white text-4xl">Flow</span>
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text text-xl">
          Solutions
        </span>
      </div>
          <p className="text-gray-400 mt-2">
            DigiFlow Solutions works with you to provide top-tier technology & design solutions for Web, App, and much more.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
            <FaTwitter className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
            <FaLinkedinIn className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
            <FaGlobe className="text-gray-400 hover:text-green-400 cursor-pointer transition duration-300" />
          </div>
        </motion.div>

        {/* Our Services */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="font-bold text-lg text-green-400">Our Services</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Website Development</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Digital Marketing</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">App Development</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">ERP Software</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Graphic Designing</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Domain & Hosting</li>
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="font-bold text-lg text-green-400">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">About Us</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Our Products</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Career</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Clientele</li>
            <li className="hover:text-green-300 transition duration-300 cursor-pointer">Support Desk</li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-bold text-lg text-green-400">Contact Us</h3>
          <p className="mt-4 text-gray-400">Asansol, Kolkata, West Bengal, India</p>
          <p className="mt-2 text-green-400 cursor-pointer hover:text-green-300 transition duration-300">
            +91 8250912479
          </p>
          <p className="mt-2 text-green-400 cursor-pointer hover:text-green-300 transition duration-300">
            info@digiflowsolutions.com
          </p>
        </motion.div>
      </div>
      
      {/* Footer Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-8 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} DigiFlow Solutions. All Rights Reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
