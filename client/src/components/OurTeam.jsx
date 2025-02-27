import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

// Team Data
const teamMembers = [
  { name: "Zahid Farhan", role: "Manager", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Md Furkan", role: "Developer", image: "https://randomuser.me/api/portraits/men/52.jpg" },
  { name: "Md Imamuddin", role: "Tester", image: "https://randomuser.me/api/portraits/men/33.jpg" },
  { name: "Nivedha", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/women/44.jpg" },
];

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TeamCarousel = () => {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white py-12 px-6"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-6"
      >
        Meet Our Team
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-gray-400 text-center mb-10"
      >
        The talented people behind our success
      </motion.p>

      {/* Carousel Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <Swiper
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          modules={[Pagination, Autoplay]}
          className="pb-10"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-2xl text-center shadow-lg transition-all duration-300 hover:bg-gray-700"
              >
                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full border-4 border-gray-600 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black opacity-30"></div>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default TeamCarousel;
