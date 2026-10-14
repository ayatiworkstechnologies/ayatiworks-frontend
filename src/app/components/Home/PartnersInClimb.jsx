
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnersInClimb() {
  // All 53 Partner Logos
  // Client 1-52: WEBP
  // Client 53: PNG

  const partners = Array.from({ length: 53 }, (_, i) => {
    const number = i + 1;

    return {
      id: number,
      name:
        number === 53
          ? "Hari Govinda's"
          : `Client ${number}`,
      logo:
        number === 53
          ? "/logos/Client-53.png"
          : `/logos/Client-${number}.webp`,
    };
  });

  // Distribute 53 logos into 3 rows
  const row1 = partners.slice(0, 17);  // 1-17
  const row2 = partners.slice(17, 34); // 18-34
  const row3 = partners.slice(34);     // 35-53

  // Reusable logo card
  
const renderLogo = (partner, keyPrefix, index) => {
  const isHariGovinda = partner.id === 53;

  return (
    <div
      key={`${keyPrefix}-${index}`}
      className="
        relative shrink-0
        flex items-center justify-center
        w-24 h-16
        sm:w-32 sm:h-20
        md:w-40 md:h-24
        transition-transform duration-300
        hover:scale-110
      "
    >
      {isHariGovinda ? (
        <div className="relative w-full h-[68%] rounded-full border border-gray-300 bg-white overflow-hidden">
          <Image
            src="/logos/Client-53.png"
            alt="Hari Govinda's"
            fill
            unoptimized
            className="object-cover object-center"
            sizes="(max-width: 768px) 100px, 160px"
          />
        </div>
      ) : (
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          unoptimized
          className="object-contain"
          sizes="(max-width: 768px) 100px, 160px"
          loading="lazy"
        />
      )}
    </div>
  );
};


  // Reusable marquee row
  const renderMarquee = (logos, rowIndex, reverse = false) => (
    <div
      key={`marquee-${rowIndex}`}
      className="relative w-full overflow-hidden flex group"
    >
      {[1, 2].map((copy) => (
        <div
          key={`row-${rowIndex}-copy-${copy}`}
          className={`
            flex
            gap-8 md:gap-16
            pr-8 md:pr-16
            shrink-0
            items-center
            ${
              reverse
                ? "animate-marquee-reverse"
                : "animate-marquee"
            }
          `}
        >
          {logos.map((partner) =>
            renderLogo(partner, `row-${rowIndex}-${copy}`)
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white py-12 md:py-20 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container px-4 sm:px-6 mb-12"
      >
        <div className="flex flex-col items-center">
          <h2
            className="
              section-title
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              text-center
              mb-4
            "
          >
            Our Partners in Climb
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className="h-1 bg-secondary rounded-full"
          />
        </div>
      </motion.div>

      {/* Three Scrolling Logo Rows */}
      <div className="space-y-8 md:space-y-12">

        {/* Row 1: Left to Right */}
        {renderMarquee(row1, 1, false)}

        {/* Row 2: Right to Left */}
        {renderMarquee(row2, 2, true)}

        {/* Row 3: Left to Right */}
        {renderMarquee(row3, 3, false)}

      </div>

      {/* Bottom Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="
          max-w-7xl
          mx-auto
          border-b
          border-gray-100
          mt-16
          md:mt-24
          w-11/12
          md:w-full
        "
      />
    </section>
  );
}
