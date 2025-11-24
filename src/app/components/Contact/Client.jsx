"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Client() {
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    { name: "TVS", logo: "/logos/tvs.png" },
    { name: "Hero", logo: "/logos/hero.png" },
    { name: "VGN", logo: "/logos/vgn.png" },
    { name: "Royal Enfield", logo: "/logos/royal-enfield.png" },
    { name: "Ramaniyam", logo: "/logos/ramaniyam.png" },
    { name: "Mi", logo: "/logos/mi.png" },
    { name: "APL", logo: "/logos/apl.png" },
    { name: "Edufin", logo: "/logos/edufin.png" },
    { name: "Herbale", logo: "/logos/herbale.png" },
    { name: "Volvo", logo: "/logos/volvo.png" },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-12 lg:px-20 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-left mb-10"
      >
       <h2 className="text-2xl md:text-3xl  text-center font-medium text-[#17A3DC] mb-8">
        Clients who believed in NEXT IS NOW! 
      </h2>
      </motion.div>

      {/* ✅ Row 1 - Left to Right */}
      <div
        className="relative w-full overflow-hidden mb-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8"
          initial={{ x: "0%" }}
          animate={{ x: isPaused ? undefined : "-100%" }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="bg-white border border-gray-200 shadow-sm rounded-full w-[200px] p-4 flex items-center justify-center hover:shadow-lg transition-all cursor-pointer min-w-[180px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ✅ Row 2 - Right to Left */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-8"
          initial={{ x: "-100%" }}
          animate={{ x: isPaused ? undefined : "0%" }}
          transition={{
            repeat: isPaused ? 0 : Infinity,
            ease: "linear",
            duration: 35,
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="bg-white border border-gray-200 shadow-sm rounded-full w-[200px] p-4 flex items-center justify-center hover:shadow-lg transition-all cursor-pointer min-w-[180px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
     
    </section>
  );
}
