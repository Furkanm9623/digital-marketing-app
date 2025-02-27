import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-22 px-6 md:px-16 flex flex-col md:flex-row items-center gap-6 min-h-[70vh]">
      {/* Left Section - Text Content (50%) */}
      <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          EMPOWER YOUR BUSINESS
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400">
          Digital Solutions
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          Excellent IT services for your success. Transform your business with cutting-edge technology solutions.
        </p>
      </div>
      
      {/* Right Section - Swiper Carousel (50%) */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] bg-blue-400 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-full"
          >
            {[ 
              "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&h=800&fit=contain",
              "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=800&h=800&fit=contain",
              "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=800&h=800&fit=contain"
            ].map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <img 
                  src={src} 
                  alt={`Slide ${index}`} 
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Trusted Badge - Adjusted Position */}
      <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-2 shadow-md text-xs sm:text-sm">
        <FaCheckCircle className="text-white text-lg" />
        <span>Trusted by 500+ Clients</span>
      </div>
    </header>
  );
};

export default Header;
