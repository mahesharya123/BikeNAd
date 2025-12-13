"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="flex flex-col min-h-screen mt-10 bg-gray-50">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="mb-4">
          Welcome to BikeNAds. By accessing or using our website and services,
          you agree to comply with and be bound by these Terms and Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Services
        </h2>
        <p className="mb-4">
          BikeNAds provides electric bike rentals and mobile LED advertising
          services. We reserve the right to modify or discontinue any service
          without prior notice.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          User Responsibilities
        </h2>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>You must provide accurate information when submitting forms.</li>
          <li>You agree not to misuse our website or services.</li>
          <li>LED advertising units on rental bikes must not be removed or tampered with.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Advertising Policy
        </h2>
        <p className="mb-4">
          Advertisements displayed on BikeNAds, including Google AdSense ads,
          may be personalized based on user interests and browsing behavior.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          BikeNAds shall not be held responsible for any direct or indirect
          damages resulting from the use of our website or services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Changes to Terms
        </h2>
        <p className="mb-4">
          We may update these Terms & Conditions at any time. Continued use of
          the website constitutes acceptance of the updated terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Contact Us
        </h2>
        <p>
          If you have any questions regarding these Terms, please contact us
          through our website.
        </p>
      </section>

      <Footer />
    </div>
  );
}
