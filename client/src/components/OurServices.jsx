import React from "react";
import { FaLaptopCode, FaChartLine, FaMobileAlt, FaCogs, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description: "We provide all types of website services with cutting-edge technologies.",
    icon: <FaLaptopCode size={40} />,
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    title: "Digital Marketing",
    description: "SEO, SMM, Google Ads, PPC, and email marketing strategies.",
    icon: <FaChartLine size={40} />,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "App Development",
    description: "We develop applications for Android and iOS with modern features.",
    icon: <FaMobileAlt size={40} />,
    gradient: "from-green-500 to-teal-500"
  },
  {
    title: "Custom ERP Software",
    description: "Improve business efficiency with custom ERP solutions.",
    icon: <FaCogs size={40} />,
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    title: "Graphic Designing",
    description: "Logos, banners, posters, brochures, and creative animations.",
    icon: <FaPaintBrush size={40} />,
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Domain & Hosting",
    description: "Professional domain and hosting services with 24/7 support.",
    icon: <FaServer size={40} />,
    gradient: "from-gray-500 to-black"
  }
];

const OurServices = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-8" id="service">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-300 mt-2">Comprehensive digital solutions for your business growth</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${service.gradient} p-6 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl`}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full text-gray-900">{service.icon}</div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-100 mt-3">{service.description}</p>
            <a href="#" className="text-white font-semibold mt-4 inline-block hover:underline">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
