"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import RentalPlans from "@/components/RentalPlans";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import RiderForm from "@/components/RiderForm"; // can reuse for ride form

// Sample image carousel for rental page
const carouselImages = [
  "/images/home-7.gif",
  "/images/2.gif",
  "/images/banner.jpg",
];

export default function RentWithUs() {
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
    <div className="flex flex-col min-h-screen bg-gray-50">
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
            Rent With Us
          </h1>
        </div>
      </section>

      {/* --------------------------- */}
      {/* DETAILS ABOUT RENTAL */}
      {/* --------------------------- */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Rent Our EV Bikes Easily</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Anyone can rent our eco-friendly electric bikes with LED ad boxes.
          Please note that the LED box is a permanent safety feature and must remain active at all times.
          Our team will continue to display advertisements on the LED box for promotions.
        </p>

        <ul className="list-disc pl-5 text-left mx-auto max-w-2xl space-y-2 text-gray-700">
          <li>Documents required: Aadhaar Card only</li>
          <li>Security Deposit: ₹500 (refundable after bike return)</li>
          <li>You cannot remove or turn off the LED advertisement box</li>
          <li>Maintain bike safety and LED box integrity at all times</li>
          <li>Quick and easy rental process for anyone</li>
        </ul>

        {/* BLINKING BUTTON */}
        <motion.button
          onClick={() => setOpenModal(true)}
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="mt-8 bg-green-600 text-white px-10 py-3 rounded-xl text-xl font-bold shadow-lg hover:bg-green-700"
        >
          Rent Now
        </motion.button>
      </section>

      {/* --------------------------- */}
      {/* MODAL FORM */}
      {/* --------------------------- */}
      {openModal && (
        <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
          <RiderForm />
        </Modal>
      )}

      {/* --------------------------- */}
      {/* RENTAL PLANS COMPONENT */}
      {/* --------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <RentalPlans />
      </section>

      {/* --------------------------- */}
      {/* OUR CLIENTS */}
      {/* --------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mt-10 mb-20">
        {/* If you want, you can show clients here too */}
      </section>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
