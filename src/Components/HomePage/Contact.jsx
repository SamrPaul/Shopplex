import React from "react";
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaPinterest } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-2">
              Working Hours Monday to Saturday <br />
              9:00am to 6:30pm
            </p>
            <p className="text-sm text-gray-800 font-medium">+91-9999999999</p>
          </div>

          {/* Signup Form */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-orange-600 mb-2">
              Let's Get in Touch
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Lorem Ipsum is simply dummy text of the printing.
            </p>
            <form className="flex items-center w-full max-w-md">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-orange-200"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-6 py-2 rounded-r-lg text-sm font-medium hover:bg-orange-700 transition"
              >
                SIGNUP
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              I Accept Privacy Policy and Cookies Policy
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Follow Us On Social Media
            </h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600">
                <FaYoutube size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
