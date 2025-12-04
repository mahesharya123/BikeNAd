"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Clients from "@/components/OurClients";
import Footer from "@/components/Footer";

const aboutImages = [
  "/images/2.gif",
  "/images/one-slide.gif",
  "/images/TWO-slide.gif",
];

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* --------------------------- */}
      {/* HERO / INTRO SECTION */}
      {/* --------------------------- */}
      <section className="w-full h-[300px] md:h-[400px] relative overflow-hidden mb-10">
        <img
          src="/images/banner.gif"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            About BikeNAds
          </h1>
        </div>
      </section>

      {/* --------------------------- */}
      {/* ABOUT DETAILS */}
      {/* --------------------------- */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          BikeNAds is India’s first **mobile digital advertising company** using electric bikes
          equipped with LED ad boxes. We offer a unique combination of EV bike rentals and 
          on-bike advertising services for businesses. Our team of digital marketing experts 
          ensures maximum visibility and engagement for your brand across the city.
        </p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you are a startup, a local business, or an established enterprise, we provide
          tailored ad solutions — hourly, weekly, or customized plans — all while promoting 
          eco-friendly mobility. Rent our EV bikes or advertise with us to reach thousands of
          daily travelers in high-traffic areas.
        </p>
      </section>

      {/* --------------------------- */}
      {/* IMAGE GALLERY */}
      {/* --------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutImages.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src={img}
              alt={`About ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </section>

      {/* --------------------------- */}
      {/* ADDITIONAL INFO */}
      {/* --------------------------- */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <ul className="list-disc pl-5 text-left mx-auto max-w-2xl space-y-2 text-gray-700">
          <li>Rent electric bikes easily with simple documents and refundable security deposit.</li>
          <li>Advertise your brand on our LED-equipped EV bikes for maximum city-wide visibility.</li>
          <li>Flexible ad plans: hourly, weekly, or customized campaigns.</li>
          <li>Eco-friendly and safe EV mobility solutions with real-time tracking.</li>
          <li>Our in-house digital marketing team ensures your advertisement is seen by the right audience.</li>
          <li>First in India to combine mobile EV rentals with high-impact digital advertising.</li>
        </ul>
      </section>

      {/* --------------------------- */}
      {/* CLIENTS SECTION */}
      {/* --------------------------- */}
      <section className="max-w-6xl mx-auto px-4 mb-20">
        <Clients />
      </section>

      {/* --------------------------- */}
      {/* FOOTER */}
      {/* --------------------------- */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
