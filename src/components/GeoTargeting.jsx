"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Dynamically import leaflet components
const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });
const Circle = dynamic(() => import("react-leaflet").then(m => m.Circle), { ssr: false });

import "leaflet/dist/leaflet.css";

const primeAreas = [
  {
    name: "Rajwada Square",
    desc: "Historic market & massive footfall zone for brand visibility.",
    position: [22.719568, 75.857727],
  },
  {
    name: "Vijay Nagar Square",
    desc: "Corporate hub, malls & busiest traffic junction in Indore.",
    position: [22.7487, 75.8937],
  },
  {
    name: "Sarafa Market",
    desc: "Indore’s famous night market — huge crowd daily.",
    position: [22.7191, 75.8575],
  },
];

export default function GeoTargeting() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ❗ Prevent hydration mismatch completely

  return (
    <section className="w-full pt-20 pb-20 bg-gray-50">
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-3">
        📍 Geo-Targeted Ad Zones
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        We place your ads in the most crowded and high-traffic areas of Indore—ensuring
        maximum visibility, brand recall, and customer engagement.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Map */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-xl z-[1]">
          <MapContainer
            center={[22.7196, 75.8577]} // Indore
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {primeAreas.map((a, i) => (
              <Marker key={i} position={a.position}>
                <Popup>
                  <strong>{a.name}</strong>
                  <br />
                  {a.desc}
                </Popup>
              </Marker>
            ))}

            {primeAreas.map((a, i) => (
              <Circle
                key={i}
                center={a.position}
                radius={250}
                pathOptions={{
                  color: "#C026D3", // purple
                  fillColor: "#DB2777", // pink
                  fillOpacity: 0.3,
                }}
              />
            ))}
          </MapContainer>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6">
          {primeAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="p-6 rounded-2xl text-white shadow-xl
              bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
              hover:scale-[1.02] hover:shadow-2xl transition transform"
            >
              <h3 className="text-xl font-bold mb-2">{area.name}</h3>
              <p className="opacity-90">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
