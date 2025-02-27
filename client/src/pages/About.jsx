import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-teal-400 to-pink-500 bg-clip-text">
            About Digi Flow Solutions
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            At **Digi Flow Solutions**, we specialize in digital marketing, IT solutions, and business transformation.
            We help businesses thrive in a digital-first world by providing cutting-edge services that drive growth and innovation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Our services range from **SEO optimization**, **branding**, and **web development** to **AI-powered analytics**,
            ensuring that your business stays ahead of the competition.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold shadow-md hover:bg-teal-400 transition duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full lg:w-1/2"
        >
          <img
            src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg"
            alt="About Us"
            className="rounded-xl shadow-xl w-full"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default About;
