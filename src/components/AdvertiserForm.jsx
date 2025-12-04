"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function AdvertiserForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    address: "",
    campaign: "",
    phone: "",
    email: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADVERTISER,
        {
          name: formData.name,
          company: formData.company,
          address: formData.address,
          campaign: formData.campaign,
          phone: formData.phone,
          email: formData.email,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Success! Your advertisement request has been sent.");
        setFormData({
          name: "",
          company: "",
          address: "",
          campaign: "",
          phone: "",
          email: "",
        });

        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("Failed! Something went wrong.");
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Advertise With Us</h2>

      {status && (
        <p
          className="text-sm text-center"
          style={{ color: status.includes("Success") ? "green" : "red" }}
        >
          {status}
        </p>
      )}

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="inputBox"
        required
      />

      <input
        name="company"
        value={formData.company}
        onChange={handleChange}
        placeholder="Company Name"
        className="inputBox"
        required
      />

      <input
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Company Address"
        className="inputBox"
        required
      />

      <textarea
        name="campaign"
        value={formData.campaign}
        onChange={handleChange}
        placeholder="Campaign Details"
        className="inputBox h-24"
        required
      ></textarea>

      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone No"
        className="inputBox"
        required
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="inputBox"
        required
      />

      <button type="submit" className="submitBtn">
        Submit
      </button>
    </form>
  );
}
