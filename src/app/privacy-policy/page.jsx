"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col mt-10 min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="mb-4">
          At BikeNAds, we respect your privacy and are committed to protecting
          your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Google AdSense
        </h2>
        <p className="mb-4">
          We use Google AdSense to display advertisements. Google may use cookies
          and web beacons to show ads to users based on their visits to this and
          other websites.
        </p>

        <p className="mb-4">
          Users may opt out of personalized advertising by visiting:
          <br />
          <a
            href="https://adssettings.google.com"
            target="_blank"
            className="text-blue-600 underline"
          >
            https://adssettings.google.com
          </a>
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Cookies
        </h2>
        <p className="mb-4">
          BikeNAds uses cookies to improve user experience, analyze traffic,
          and serve relevant advertisements.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          Consent
        </h2>
        <p>
          By using our website, you consent to our Privacy Policy.
        </p>
      </section>

      <Footer />
    </div>
  );
}
