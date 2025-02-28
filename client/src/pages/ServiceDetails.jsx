import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

// Service Data
const services = {
  "website-development": {
    title: "Website Development",
    description:
      "Your website is the gateway to your business. We build stunning, user-friendly, and highly functional websites that captivate visitors and turn them into customers.",
    image: "https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg",
    categories: [
      "Informative Website",
      "Business Website",
      "E-Commerce Website",
      "Blogging Website",
      "Mini Website",
      "Google My Business",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    description:
      "Grow your brand online with SEO, SMM, PPC, and strategic digital campaigns that boost visibility and conversions.",
    image: "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
    categories: ["SEO", "Social Media Marketing", "Google Ads", "Email Marketing", "PPC"],
  },
  "custom-erp-software": {
    title: "Custom ERP Software",
    description:
      "Optimize your business with tailored ERP solutions for automation, data management, and seamless operations.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKlL-4njEovp64woqJR06ehdq5ZDNobHB7w&s",
    categories: ["Inventory Management", "HRMS", "Accounting", "Sales & CRM"],
  },
  "app-development": {
    title: "App Development",
    description:
      "We develop Android and iOS applications with cutting-edge technologies for seamless user experiences.",
    image: "https://www.wisestamp.com/wp-content/uploads/2022/12/mobile-app-development-companies.jpeg",
    categories: ["iOS Apps", "Android Apps", "Cross-Platform Apps"],
  },
  "graphic-designing": {
    title: "Graphic Designing",
    description:
      "From logos to brand identity, we create visually appealing designs that make an impact.",
    image: "https://5.imimg.com/data5/XZ/OM/CK/SELLER-52248764/graphic-design-services.png",
    categories: ["Logos", "Banners", "Brochures", "Animations"],
  },
  "domain-hosting-services": {
    title: "Domain & Hosting Services",
    description:
      "Secure, reliable, and fast domain & hosting solutions with 24/7 support.",
    image: "https://media.istockphoto.com/id/2150800876/photo/web-hosting-ai-privacy-platform-service-website-provider-support-business-icon-ai-technology.jpg?s=612x612&w=0&k=20&c=BnRWNvK68oB8mI-2mEgHwzJIV04UjBjq-_zVoa2AF-0=",
    categories: ["Domain Registration", "Cloud Hosting", "Dedicated Servers"],
  },
};

const ServiceDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(
    services[title] || services["website-development"]
  );

  // Handle Sidebar Click
  const handleServiceClick = (serviceKey) => {
    setSelectedService(services[serviceKey]);
    navigate(`/service-details/${serviceKey}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row min-h-screen"
    >
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/4 bg-gradient-to-b from-purple-700 to-blue-700 p-6 mt-16 rounded-xl shadow-lg"
      >
        <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
        <ul className="space-y-3">
          {Object.keys(services).map((key, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`p-4 rounded-lg text-center font-semibold cursor-pointer transition duration-300 text-white ${
                selectedService.title === services[key].title
                  ? "bg-purple-500"
                  : "bg-purple-600 hover:bg-purple-500"
              }`}
              onClick={() => handleServiceClick(key)}
            >
              {services[key].title}
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 flex flex-col gap-6 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 p-8 mt-16">
  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1 }}
    className="relative w-full max-w-5xl mx-auto h-[400px]" // Restrict width & set height
  >
    <img
      src={selectedService.image}
      alt={selectedService.title}
      className="rounded-xl shadow-lg w-full h-full object-cover border-4 border-purple-500"
    />
    <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center text-white text-xl font-bold animate-pulse">
      {/* Optional Text Overlay */}
    </div>
  </motion.div>

  <h2 className="text-3xl font-extrabold text-white">{selectedService.title}</h2>
  <p>{selectedService.description}</p>

  {/* Service Categories */}
  <h3 className="text-2xl font-semibold text-white">Our {selectedService.title} Services</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    {selectedService.categories.map((service, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-blue-600 p-6 rounded-xl text-center font-bold cursor-pointer hover:bg-blue-500 transition duration-300 shadow-lg text-white"
      >
        {service}
      </motion.div>
    ))}
  </div>
</div>

      {/* Contact Section */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/4 bg-gradient-to-b from-purple-700 to-blue-700 text-gray-300 p-6 rounded-xl shadow-lg flex flex-col items-center text-center mt-16"
      >
        <h3 className="text-xl font-bold text-white">Let's Connect</h3>
        <p className="mt-2 text-sm text-gray-200">
          Partner with us for cutting-edge solutions that drive success.
        </p>
        <div className="mt-6 space-y-4 text-lg">
          <motion.p whileHover={{ scale: 1.05 }} className="flex items-center gap-2 justify-center text-white">
            <FaPhone /> +91-9333229060
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="flex items-center gap-2 justify-center text-white">
            <FaEnvelope /> info@comz.digital.com
          </motion.p>
          <motion.p whileHover={{ scale: 1.05 }} className="flex items-center gap-2 justify-center text-white">
            <FaClock /> Mon-Sat: 10:00am - 7:00pm
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetails;
