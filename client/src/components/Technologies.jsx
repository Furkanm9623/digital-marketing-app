import React, { useEffect, useState } from "react";
import { FaAngular, FaReact, FaLaravel, FaAndroid, FaApple, FaWordpress, FaPhp, FaJsSquare } from "react-icons/fa";
import { SiFlutter, SiAdobephotoshop, SiAdobeillustrator, SiAdobepremierepro } from "react-icons/si";
import { motion } from "framer-motion";

const technologies = [
  { name: "Angular", icon: <FaAngular />, gradient: "from-red-500 to-orange-500" },
  { name: "React", icon: <FaReact />, gradient: "from-blue-400 to-cyan-400" },
  { name: "Laravel", icon: <FaLaravel />, gradient: "from-red-400 to-pink-500" },
  { name: "Android", icon: <FaAndroid />, gradient: "from-green-500 to-teal-400" },
//   { name: "iOS", icon: <FaApple />, gradient: "from-gray-300 to-gray-500" },
  { name: "Flutter", icon: <SiFlutter />, gradient: "from-blue-300 to-indigo-500" },
  { name: "WordPress", icon: <FaWordpress />, gradient: "from-blue-500 to-indigo-600" },
  { name: "PHP", icon: <FaPhp />, gradient: "from-indigo-400 to-purple-500" },
  { name: "JavaScript", icon: <FaJsSquare />, gradient: "from-yellow-400 to-orange-400" },
//   { name: "Photoshop", icon: <SiAdobephotoshop />, gradient: "from-blue-400 to-indigo-500" },
//   { name: "Illustrator", icon: <SiAdobeillustrator />, gradient: "from-orange-500 to-red-500" },
//   { name: "After Effects", icon: <SiAdobepremierepro />, gradient: "from-purple-500 to-blue-500" }
];

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById("tech-section");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="tech-section" className="bg-gray-900 text-white py-16 overflow-hidden">
      {/* Section Header with Fade-in */}
      <motion.div 
        className="max-w-7xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Our Technologies</h2>
        <p className="text-gray-400 mb-8">We specialize in various modern technologies</p>
      </motion.div>

      {/* Tech Cards with Slide-in Animation */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className={`bg-gradient-to-r ${tech.gradient} p-6 rounded-xl shadow-lg flex flex-col items-center justify-center 
                        transition-transform duration-300 transform hover:scale-110 hover:rotate-3 hover:shadow-2xl text-white 
                        relative border border-transparent hover:border-white/20`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="text-5xl mb-3">{tech.icon}</div>
            <p className="text-lg font-semibold">{tech.name}</p>

            {/* Neon Glow Effect */}
            <div className="absolute inset-0 bg-white opacity-10 blur-2xl rounded-xl transition-all duration-300 hover:opacity-20"></div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button with Bounce Animation */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
                           transition-all duration-300 hover:scale-105 hover:shadow-lg animate-bounce">
          Start Your Project →
        </button>
      </motion.div>
    </section>
  );
};

export default Technologies;
