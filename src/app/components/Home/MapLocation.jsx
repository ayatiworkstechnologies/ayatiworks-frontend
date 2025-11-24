"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function DottedWorldMap() {
  const [hovered, setHovered] = useState(null);

  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 allows re-trigger
    threshold: 0.3, // run when 30% of section is visible
  });

  const locations = [
    { name: "USA", x: "17%", y: "42%", logo: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/logo-left.png" }, // Pencil/Logo
    { name: "DUBAI", x: "60%", y: "48%", logo: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/logo-left.png" },
    { name: "INDIA", x: "68%", y: "58%", logo: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/logo-left.png" },
    { name: "SINGAPORE", x: "75%", y: "62%", logo: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/logo-left.png" },
  ];
  const stats = [
    { icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/business.png", value: "+30", label: "Awards" },
    { icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/users.png", value: "+20", label: "Clients" },
    { icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/locations.png", value: "+05", label: "Cities" },
    { icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/earth.png", value: "+05", label: "Countries" },
  ];

  return (
    <section className="bg-white section">
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container text-left relative mb-12"
      >
        <h2 className="section-title relative inline-block">
          Globally Planted, Digitally Rooted
          <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                    className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
                  />
        </h2>
      </motion.div>
      {/* Map */}
      <div className="relative w-full section-container">
        {/* ✅ Dotted Map Background */}
        <img
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/map.png"
          alt="Dotted World Map"
          className="w-full object-contain"
        />

        {/* ✅ Highlighted Locations with Pencil/Logo */}
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            className="absolute cursor-pointer"
            style={{ top: loc.y, left: loc.x }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            whileHover={{ scale: 1.1 }}
          >
            {/* Pulse Animation */}
            <span className="absolute -inset-3 rounded-full bg-blue-500 opacity-30 animate-ping"></span>

            {/* ✅ Pencil/Logo as Marker */}
            <img
              src={loc.logo}
              alt={loc.name}
              className="relative h-8 w-8 object-contain "
            />

            {/* Tooltip */}
            {hovered === i && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 bg-blue-900 text-white text-xs rounded-md px-2 py-1 shadow">
                {loc.name}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div
        ref={ref}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 sm:gap-10 mt-20 text-center max-w-7xl mx-auto px-4"
      >
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center space-y-3">
            <img
              src={item.icon}
              alt={item.label}
              className="h-16 w-16 sm:h-16 sm:w-16 object-contain mb-2"
            />

            {/* Animated Number */}
            <p className="text-black font-extrabold font-secondary text-2xl sm:text-3xl md:text-4xl">
              {inView ? (
                <CountUp
                  key={i + String(inView)} // 👈 forces re-render when inView changes
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                />
              ) : (
                0
              )}
              +
            </p>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg font-secondary">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
