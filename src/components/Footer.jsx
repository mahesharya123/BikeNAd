"use client";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-primary">BikeNAds</h2>
          <p className="text-gray-600">
            India’s first mobile digital advertising company delivering impactful ads through our electric Ad-Scooters.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-inter text-accent">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/contact" className="hover:text-blue-500 transition duration-300">Contact</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition duration-300">About</a>
            </li>
            <li>
              <a href="/adwithus" className="hover:text-blue-500 transition duration-300">AdWithUs</a>
            </li>
            <li>
              <a href="/ridewithus" className="hover:text-blue-500 transition duration-300">Rentals</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-accent">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
               className="bg-white text-pink-500 p-3 rounded-full hover:scale-110 transition transform shadow-md">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"
               className="bg-white text-blue-700 p-3 rounded-full hover:scale-110 transition transform shadow-md">
              <FaLinkedin size={24} />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
               className="bg-white text-green-500 p-3 rounded-full hover:scale-110 transition transform shadow-md">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-12 border-t border-gray-600 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BikeNAds Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
