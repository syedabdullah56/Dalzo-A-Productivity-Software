"use client"
import { FaFacebook, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bodyColor text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Me</h1>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-6">
        <a href="https://www.facebook.com/syedsohaib.anwer" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/syed-muhammad-abdullah-mahmood-0a88a8266/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.instagram.com/abdullahsyed_56/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
          <FaInstagram size={30} />
        </a>
        <a href="mailto:syedabdullah8750@gmail.com" className="hover:text-red-400 transition">
          <FaEnvelope size={30} />
        </a>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 mt-2 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded text-white font-bold transition">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
