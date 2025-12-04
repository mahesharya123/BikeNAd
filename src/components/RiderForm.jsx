"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function RiderForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
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
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_RIDER,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          plan: formData.plan,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Successfully Sent!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          plan: "",
        });

        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("Failed! Please try again.");
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Ride With Us</h2>

      {status && (
        <p className="text-sm text-center" style={{ color: "green" }}>
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

      <div>
        <p className="font-medium mb-1">Choose Plan:</p>

        <label className="flex gap-2 items-center">
          <input
            type="radio"
            name="plan"
            value="Weekly"
            checked={formData.plan === "Weekly"}
            onChange={handleChange}
          />
          Weekly
        </label>

        <label className="flex gap-2 items-center">
          <input
            type="radio"
            name="plan"
            value="Monthly"
            checked={formData.plan === "Monthly"}
            onChange={handleChange}
          />
          Monthly
        </label>
      </div>

      <button type="submit" className="submitBtn">
        Submit
      </button>
    </form>
  );
}
