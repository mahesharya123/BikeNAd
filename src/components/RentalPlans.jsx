"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal"; // Make sure this accepts children properly
import RiderForm from './RiderForm'
// Rider Form Component


const rentalPlans = [
  {
    title: "EV Bike - Weekly Plan",
    price: "₹1,499 / week",
    desc: "High-quality electric scooter with LED ad box, charger included. Perfect for short-term rentals.",
    img: "/images/home-7.gif",
  },
  {
    title: "EV Scooter - Monthly Plan",
    price: "₹4,499 / month",
    desc: "Reliable electric scooter with LED ad box and charger. Ideal for long-term campaigns with minimal cost.",
    img: "/images/home-7.gif",
  },
  {
    title: "EV Scooter - 3 Monthly Plan",
    price: "₹12,999 / month",
    desc: "Top-of-the-line electric scooter with robust build, LED ad display, and full service included.",
    img: "/images/home-7.gif",
  },
];

export default function RentalPlans() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="w-full py-20 bg-gray-50">
      <h2 className="text-center font-sora text-4xl font-bold mb-12">
        Rental Plans <span className="text-green-600">for Riders</span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {rentalPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative bg-gradient-to-br from-white to-green-100 rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform"
          >
            <img
              src={plan.img}
              alt={plan.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2 text-center">{plan.title}</h3>
              <p className="text-gray-700 mb-4 text-center">{plan.desc}</p>
              <p className="text-xl font-semibold mb-4">{plan.price}</p>

              <motion.button
                type="button"
                className="px-6 py-3 bg-green-600 text-white rounded-full font-semibold shadow-lg z-10"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 1 }}
                onClick={() => setShowModal(true)}
              >
                Ride With Us
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Ride Form */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <RiderForm />
      </Modal>
    </section>
  );
}
