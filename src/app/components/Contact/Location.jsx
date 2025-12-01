"use client";
import { SlLocationPin } from "react-icons/sl";
import { motion } from "framer-motion";

export default function Location() {
  const locations = [
    {
      city: "Chennai",
      address:
        "18/24, TTK Road, 1st Cross St, Alwarpet, Chennai, Tamil Nadu, India - 600018",
      active: false,
    },
    {
      city: "Gurgaon",
      address:
        "944, 2nd Floor, Sarasvati Vihar, Gurgaon, Haryana, India - 122002",
      active: false,
    },
    {
      city: "Singapore",
      address: "Blk 377 Clementi Avenue 5, #06-312, Singapore - 120377",
      active: false,
    },
    {
      city: "New Zealand",
      address: "11 Awaroa Road, Sunnyvale, Auckland - 0612",
      active: false,
    },
    {
      city: "USA",
      address:
        "Jacob Antony 16, Gramercy Road, Monmouth Junction, New Jersey NJ 0885",
      active: false,
    },
    {
      city: "United Arab Emirates",
      address:
        "BIN SOUGAT PROPERTIES, Flat No. 410, Zulekha Medical Center, Same Building, Near Airport Freezone Metro Station, Dubai",
      active: false,
    },
  ];

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="bg-white section">
      <div className="section-container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((loc, idx) => (
          <motion.div
            key={idx}
            className={`shadow-md p-6 transition-all duration-300 cursor-pointer group ${
              loc.active
                ? "bg-primary  text-white"
                : "bg-white text-gray-800 border hover:bg-primary hover:text-white border-gray-200"
            }`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={idx * 0.2}
            whileHover={{
              y: -6,
              boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
              transition: { duration: 0.3 },
            }}
          >
            {/* Icon + City */}
            <div className="flex items-center gap-3 mb-3">
              <SlLocationPin
                className={`text-3xl transition-colors duration-300 ${
                  loc.active
                    ? "text-white"
                    : "text-primary group-hover:text-white"
                }`}
              />
              <h3 className="font-medium font-primary text-xl sm:text-2xl">
                {loc.city}
              </h3>
            </div>

            {/* Address */}
            <p className="text-base leading-relaxed font-secondary">
              {loc.address}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
