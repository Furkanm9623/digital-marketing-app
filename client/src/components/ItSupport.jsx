import { CheckCircle } from "lucide-react";

const ItSupport = () => {
  return (
    <section className="bg-black text-white py-12 px-6 md:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side - Image with Overlays & Text */}
        <div className="relative w-full lg:w-1/2">
          {/* Decorative Elements */}
          <div className="absolute top-[-10px] left-[-10px] bg-indigo-800 w-12 h-12 rounded-lg opacity-50"></div>
          <div className="absolute bottom-[-10px] right-[-10px] bg-purple-800 w-12 h-12 rounded-lg opacity-50"></div>
          
          {/* Image with Adjusted Height and Object Contain */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=800&h=500&fit=contain" 
              alt="IT Support Team"
              className="w-full h-[300px] md:h-[350px] object-contain rounded-lg shadow-lg"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-3 rounded-md">
              <p className="text-sm md:text-base font-semibold">Reliable IT Solutions</p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-5">
          {/* Badge */}
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Who We Are
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            IT Support for Business Growth
          </h2>

          {/* Description with Highlighted Text */}
          <p className="text-gray-400 text-lg">
            <span className="text-white font-semibold">Come2Digital</span> is an IT company for all your digital needs. 
            We provide <span className="text-indigo-400">secure and scalable</span> solutions with 
            a highly professional team.
          </p>

          {/* Features List */}
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <CheckCircle className="text-blue-500" />
              <span>Comprehensive IT services with expert professionals</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="text-blue-500" />
              <span>24/7 customer support & project maintenance</span>
            </li>
            <li className="flex items-center space-x-3">
              <CheckCircle className="text-blue-500" />
              <span>Trusted by businesses across India</span>
            </li>
          </ul>

          {/* Call to Action Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all text-white font-semibold rounded-md shadow-md">
            Get Started →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItSupport;
