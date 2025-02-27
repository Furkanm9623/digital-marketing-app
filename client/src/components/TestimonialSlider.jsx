// import React, { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//   {
//     name: "Prasenjit Roy",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     rating: 5,
//     text: "Your work is very good. You work with us responsibly. Help us at any time. I am fascinated by your behavior. Stay well. Thank you so much for making this a very beautiful website."
//   },
//   {
//     name: "Nivedha Manoharan",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     rating: 5,
//     text: "Shaan created my website. He is good and provides quality services. Liked the Website. He delivered on time and he is humble and responsive. Thanks, Shaan."
//   }
// ];

// const TestimonialSlider = () => {
//   const [current, setCurrent] = useState(0);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

//   return (
//     <div className="flex flex-col items-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-16 px-8 w-full">
//       <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
//       <p className="text-gray-400 mb-10">What our clients say about us</p>
      
//       <div className="relative w-full max-w-5xl">
//         <AnimatePresence mode="wait">
//           <motion.div 
//             key={current}
//             initial={{ opacity: 0, scale: 0.9, x: 50 }}
//             animate={{ opacity: 1, scale: 1, x: 0 }}
//             exit={{ opacity: 0, scale: 0.9, x: -50 }}
//             transition={{ duration: 0.5 }}
//             className="bg-gradient-to-b from-gray-800 to-gray-900 p-10 rounded-2xl shadow-xl relative flex flex-col items-center text-center"
//           >
//             <img src={testimonials[current].image} alt={testimonials[current].name} 
//               className="w-20 h-20 rounded-full border-4 border-gray-700 absolute -top-10" />
//             <h3 className="text-2xl font-semibold mt-12">{testimonials[current].name}</h3>
//             <div className="text-yellow-400 my-2">{"★".repeat(testimonials[current].rating)}</div>
//             <p className="text-gray-300 px-6">{testimonials[current].text}</p>
//             <FaQuoteRight className="text-gray-600 text-5xl absolute bottom-6 right-6" />
//           </motion.div>
//         </AnimatePresence>

//         {/* Navigation Buttons */}
//         <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition">
//           <FaArrowLeft />
//         </button>
//         <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 p-4 rounded-full text-white shadow-lg hover:scale-110 transition">
//           <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TestimonialSlider;


import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Prasenjit Roy",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Your work is very good. You work with us responsibly. Help us at any time. I am fascinated by your behavior. Stay well. Thank you so much for making this a very beautiful website."
  },
  {
    name: "Nivedha Manoharan",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Shaan created my website. He is good and provides quality services. Liked the Website. He delivered on time and he is humble and responsive. Thanks, Shaan."
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 text-white py-16 px-8 w-full">
      <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
      <p className="text-gray-200 mb-10">What our clients say about us</p>
      
      <div className="relative w-full max-w-4xl">
        {/* Testimonial Card */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400 p-8 rounded-xl shadow-xl relative flex flex-col items-center text-center w-full"
          >
            <img src={testimonials[current].image} alt={testimonials[current].name} 
              className="w-20 h-20 rounded-full border-4 border-gray-300 absolute -top-10" />
            <h3 className="text-2xl font-semibold mt-12">{testimonials[current].name}</h3>
            <div className="text-yellow-400 my-2 text-lg">{"★".repeat(testimonials[current].rating)}</div>
            <p className="text-gray-100 px-6 text-lg">{testimonials[current].text}</p>
            <FaQuoteRight className="text-gray-300 text-5xl absolute bottom-6 right-6" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-400 p-4 rounded-full text-white shadow-lg hover:bg-blue-500 transition">
          <FaArrowLeft />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-400 p-4 rounded-full text-white shadow-lg hover:bg-blue-500 transition">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
