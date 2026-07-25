"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnersInClimb() {
  // === Partner Logos (52 total) ===
  const partners = Array.from({ length: 52 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `/logos/Client-${i + 1}.webp`,
  }));

  // Row 1: Client 1–17, Row 2: Client 18–34, Row 3: Client 35–52
  const row1 = partners.slice(0, 17);
  const row2 = partners.slice(17, 34);
  const row3 = partners.slice(34, 52);

  // Reusable logo card renderer
  const renderLogo = (partner, keyPrefix, index) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="relative shrink-0 flex items-center justify-center w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 hover:scale-110 transition-transform duration-300"
    >
      <Image
        src={partner.logo}
        alt={partner.name}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100px, 160px"
        loading="lazy"
      />
    </div>
  );

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container px-4 sm:px-6 mb-12"
      >
        <div className="flex flex-col items-center">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-4">
            Our Partners in Climb
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-secondary rounded-full"
          />
        </div>
      </motion.div>

      {/* ===== Marquee Rows ===== */}
      <div className="space-y-8 md:space-y-12">
        {/* ROW 1: Left to Right */}
        <div className="relative w-full overflow-hidden flex group">
          {[1, 2].map((i) => (
            <div
              key={`row1-${i}`}
              className="flex gap-8 md:gap-16 pr-8 md:pr-16 animate-marquee shrink-0 items-center"
            >
              {row1.map((partner, index) => renderLogo(partner, "r1", index))}
            </div>
          ))}
        </div>

        {/* ROW 2: Right to Left (Reverse) */}
        <div className="relative w-full overflow-hidden flex group">
          {[1, 2].map((i) => (
            <div
              key={`row2-${i}`}
              className="flex gap-8 md:gap-16 pr-8 md:pr-16 animate-marquee-reverse shrink-0 items-center"
            >
              {row2.map((partner, index) => renderLogo(partner, "r2", index))}
            </div>
          ))}
        </div>

        {/* ROW 3: Left to Right */}
        <div className="relative w-full overflow-hidden flex group">
          {[1, 2].map((i) => (
            <div
              key={`row3-${i}`}
              className="flex gap-8 md:gap-16 pr-8 md:pr-16 animate-marquee shrink-0 items-center"
            >
              {row3.map((partner, index) => renderLogo(partner, "r3", index))}
            </div>
          ))}
        </div>
      </div>

      {/* ===== Bottom Divider ===== */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto border-b border-gray-100 mt-16 md:mt-24 w-11/12 md:w-full"
      />
    </section>
  );
}
