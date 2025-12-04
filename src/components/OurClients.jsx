"use client";
import { motion } from "framer-motion";

const companies = [
  { name: "Zomato", logo: "/logos/zomato.png" },
  { name: "Swiggy", logo: "/logos/swiggy.png" },
  { name: "Rapido", logo: "/logos/rapido.png" },
  { name: "Ola", logo: "/logos/ola.png" },
  { name: "Uber", logo: "/logos/uber.png" },
  { name: "Blinkit", logo: "/logos/blinkit.png" },
];

export default function OurClients() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Clients
      </h2>

      <div className="overflow-hidden relative w-full">
        {/* Infinite Scroll Animation */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* Duplicate for smooth looping */}
          {[...companies, ...companies].map((company, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
