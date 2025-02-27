import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-800 py-12 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-3xl font-bold text-center text-white mb-6"
      >
        Contact Us
      </motion.h2>
      <div className="max-w-6xl mx-auto bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
        {/* Contact Info */}
        <div className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-gray-600 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-white mb-2">Call Us</h3>
            <p className="text-gray-300">+91 8250912479</p>
            <p className="text-gray-300">+91 7001608179</p>
          </div>
          <div className="p-6 bg-gray-600 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-white mb-2">Email Us</h3>
            <p className="text-gray-300">info@come2digital.com</p>
          </div>
          <div className="p-6 bg-gray-600 rounded-lg shadow-md">
            <h3 className="font-bold text-lg text-white mb-2">Visit Us</h3>
            <p className="text-gray-300">Asansol, Kolkata, India</p>
            <p className="text-gray-300">Muscat, Oman</p>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-2/3 bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get In Touch</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="p-3 border rounded-md w-full bg-gray-600 text-white focus:ring-2 focus:ring-blue-400" />
              <input type="email" placeholder="Your Email" className="p-3 border rounded-md w-full bg-gray-600 text-white focus:ring-2 focus:ring-blue-400" />
            </div>
            <input type="tel" placeholder="Phone Number" className="p-3 border rounded-md w-full bg-gray-600 text-white focus:ring-2 focus:ring-blue-400" />
            <select className="p-3 border rounded-md w-full bg-gray-600 text-white focus:ring-2 focus:ring-blue-400">
              <option>Business Website</option>
              <option>Mobile App</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Your Message" className="p-3 border rounded-md w-full h-32 bg-gray-600 text-white focus:ring-2 focus:ring-blue-400"></textarea>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white p-3 rounded-md w-full font-bold shadow-md hover:bg-blue-700"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
