"use client";


import React, { useState, useEffect } from "react"; // <-- Add React and useEffect
import { motion } from "framer-motion";
import Navbar from '@/components/Navbar';
import Ad from "@/components/Ad";
import Clients from "@/components/OurClients";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import AdvertiserForm from "@/components/AdvertiserForm";


// Sample image carousel images
const carouselImages = [
  "/images/banner.jpg",
  "/images/home-7.gif",
  "/images/2.gif",
];

export default function AdWithUs() {
  const [openModal, setOpenModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);
  return (
  <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* --------------------------- */}
      {/* IMAGE CAROUSEL */}
      {/* --------------------------- */}
      <section className="w-full h-[350px] md:h-[500px] relative overflow-hidden mb-10">
        {carouselImages.map((img, index) => (
         <img
  key={index}
  src={img}
  alt={`Slide ${index + 1}`}
  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
    index === currentSlide ? "opacity-100" : "opacity-0"
  }`}
/>

        ))}

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            Advertise With Us
          </h1>
        </div>
      </section>

      {/* --------------------------- */}
      {/* DETAILS ABOUT ADVERTISING */}
      {/* --------------------------- */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Why Advertise With BikeNAds?</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          BikeNAds is one of the fastest-growing cab LED advertising networks,
          helping brands reach thousands of daily travelers across the city.
          Our LED ad network delivers high visibility, mobility, and strong brand recall.
        </p>

        <ul className="list-disc pl-5 text-left mx-auto max-w-2xl space-y-2 text-gray-700">
          <li>High-visibility LED cab displays across the city</li>
          <li>Targeted advertising based on location & demographics</li>
          <li>Cost-effective plans for startups and enterprises</li>
          <li>Simple onboarding with fast approval & 24/7 support</li>
        </ul>

        {/* BLINKING BUTTON */}
        <motion.button
          onClick={() => setOpenModal(true)}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mt-8 bg-red-600 text-white px-10 py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-red-700"
        >
          AD WITH US
        </motion.button>
      </section>

      {/* --------------------------- */}
      {/* MODAL FORM */}
      {/* --------------------------- */}
      {openModal && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <AdvertiserForm />
        </Modal>
      )}

      {/* --------------------------- */}
      {/* AD COMPONENT */}
      {/* --------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <Ad />
      </section>

      {/* --------------------------- */}
      {/* OUR CLIENTS */}
      {/* --------------------------- */}
    <section className="w-full max-w-6xl mx-auto px-4 mt-10 mb-20 border border-gray-300 rounded-xl py-8">
  <Clients />
</section>




      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
