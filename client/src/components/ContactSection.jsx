import React, { useState } from "react";
import { motion } from "framer-motion";
import { submitContactForm } from "../api/contactus";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Business Website",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitContactForm(formData);
      setStatus({ success: true, message: response.message });
      setFormData({ name: "", email: "", phone: "", service: "Business Website", message: "" });
    } catch (error) {
      setStatus({ success: false, message: error.message || "Something went wrong!" });
    }
  };

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="bg-gray-800 py-12 px-6">
      <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="text-3xl font-bold text-center text-white mb-6">
        Contact Us
      </motion.h2>

      <div className="max-w-6xl mx-auto bg-gray-700 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6">
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.3 }} className="w-full bg-gray-700 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Get In Touch</h2>
          {status && (
            <div className={`p-3 mb-4 rounded-md ${status.success ? "bg-green-600" : "bg-red-600"} text-white`}>{status.message}</div>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-3 border rounded-md w-full bg-gray-600 text-white" required />
              <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-3 border rounded-md w-full bg-gray-600 text-white" required />
            </div>
            <input name="phone" type="tel" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="p-3 border rounded-md w-full bg-gray-600 text-white" />
            <select name="service" value={formData.service} onChange={handleChange} className="p-3 border rounded-md w-full bg-gray-600 text-white">
              <option>Business Website</option>
              <option>Mobile App</option>
              <option>Other</option>
            </select>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-3 border rounded-md w-full h-32 bg-gray-600 text-white" required></textarea>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit" className="bg-blue-600 text-white p-3 rounded-md w-full font-bold shadow-md hover:bg-blue-700">
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactForm;

// Let me know if you want me to adjust anything or add extra features! 🚀
