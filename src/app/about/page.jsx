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
    <div className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="w-full h-[300px] md:h-[400px] relative overflow-hidden mb-10">
        <img
          src="/images/banner.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            About BikeNAds
          </h1>
        </div>
      </section>

      {/* ABOUT DETAILS */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          BikeNAds is India’s first{" "}
          <strong>mobile digital advertising company</strong> using electric
          bikes equipped with LED ad boxes. We offer a unique combination of EV
          bike rentals and on-bike advertising services for businesses.
        </p>

        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you are a startup, a local business, or an established
          enterprise, we provide tailored ad solutions — hourly, weekly, or
          customized plans — all while promoting eco-friendly mobility.
        </p>
      </section>

      {/* IMAGE GALLERY */}
      <section className="max-w-6xl mx-auto px-4 mb-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {aboutImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg w-full"
          >
            <img
              src={img}
              alt={`About ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section className="max-w-5xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>

        <ul className="list-disc pl-5 text-left mx-auto max-w-2xl space-y-2 text-gray-700">
          <li>Easy EV bike rentals with Aadhaar verification.</li>
          <li>LED display advertising for maximum brand visibility.</li>
          <li>Flexible ad plans: hourly, weekly & customized.</li>
          <li>Eco-friendly EV solutions with LED safety box.</li>
          <li>Digital marketing support for better brand engagement.</li>
          <li>First in India to combine EV rental + LED advertising.</li>
        </ul>
      </section>

      {/* CLIENTS SECTION */}
       <section className="w-full max-w-6xl mx-auto px-4 mt-10 mb-20 border border-gray-300 rounded-xl py-8">
       <Clients />
     </section>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
