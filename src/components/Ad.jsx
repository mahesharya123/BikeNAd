"use client"; // <-- Required for client-side interactivity

import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import AdvertiserForm from "./AdvertiserForm";

const adData = [
  {
    title: "High Impact Mobile Screens",
    desc: "Your ads run on full-motion dual-side LED screens placed at perfect eye-level.",
    gif: "/images/2.gif",
  },
  {
    title: "Prime Spot Visibility",
    desc: "Our fleet covers Indore’s busiest zones — Rajwada, Palasia, Vijay Nagar, C21 Mall and more.",
    gif: "/images/TWO-slide.gif",
  },
  {
    title: "Real-Time Analytics Dashboard",
    desc: "Track plays, impressions, heatmaps, and routes with 100% transparency.",
    gif: "/images/home-4.gif",
  },
  {
    title: "100% Electric Ad-Scooter Fleet",
    desc: "Eco-friendly scooters with daily cleaning, charging, and GPS tracking.",
    gif: "/images/home-7.gif",
  },
  {
    title: "3.5M Daily Impressions",
    desc: "Your ads get massive exposure across Indore with our constantly moving fleet.",
    gif: "/images/2.gif",
  },
  {
    title: "Dynamic Content Delivery",
    desc: "Weather-based, time-based, and location-based ad switching powered by AI.",
    gif: "/images/one-slide.gif",
  },
];

export default function Ad() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <h2 className="text-center text-gray-800 font-sora text-4xl font-bold mb-12">
        Why Brands Choose <span className="text-blue-600">BikenAds</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {adData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-white to-blue-100 rounded-3xl p-6 shadow-2xl hover:scale-105 transition-transform"
          >
            <motion.img
              src={item.gif}
              alt={item.title}
              className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover"
              whileHover={{ scale: 1.05 }}
            />

            <div className="md:ml-6 mt-4 md:mt-0 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.desc}</p>

              {/* Ad With Us Button */}
              <motion.button
                className="px-6 py-3 bg-red-600 text-white rounded-full font-semibold shadow-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1 }}
                onClick={() => setShowModal(true)}
              >
                Ad With Us
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Advertiser Form */}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <AdvertiserForm />
        </Modal>
      )}
    </section>
  );
}
