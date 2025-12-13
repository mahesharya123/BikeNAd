"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal"; // Reusable modal
import AdvertiserForm from "./AdvertiserForm";
import RiderForm from "./RiderForm";

export default function HeroSection() {
  const [openAd, setOpenAd] = useState(false);
  const [openRide, setOpenRide] = useState(false);

  return (
    <section className="w-full h-[80vh] relative mt-10">
      {/* Hero Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
       
        src="/videos/hero1.mp4"
        className="w-full h-full object-cover"
      />

      {/* Overlay + content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg text-center mb-6 px-4">
          Ads That Move With Your City
        </h2>

        <div className="flex gap-4 z-20 flex-wrap justify-center">
          <motion.button
            onClick={() => setOpenAd(true)}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-lg"
          >
            Ad With Us
          </motion.button>

          <motion.button
            onClick={() => setOpenRide(true)}
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg"
          >
            Ride With Us
          </motion.button>
        </div>
      </div>

      {/* AD Modal */}
      <Modal isOpen={openAd} onClose={() => setOpenAd(false)}>
        <AdvertiserForm />
      </Modal>

      {/* RIDE Modal */}
      <Modal isOpen={openRide} onClose={() => setOpenRide(false)}>
        <RiderForm /> {/* You can replace with a RideWithUsForm if needed */}
      </Modal>
    </section>
  );
}
