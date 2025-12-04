"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setSuccess("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      alert("Something went wrong! Try again.");
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-3xl mx-auto px-4 mt-20 mb-16">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

        <p className="text-center text-gray-600 mb-10">
          Have questions about renting EV bikes or advertising with us?
          Fill out the form below and our team will contact you shortly.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 space-y-5"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full p-3 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border rounded-lg"
            required
          ></textarea>

          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-semibold">{success}</p>
          )}
        </form>
      </section>

      <Footer />
    </div>
  );
}
