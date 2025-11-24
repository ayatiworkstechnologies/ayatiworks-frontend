"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// ✅ Dummy award data (can later come from API or JSON)
const awards = [
  {
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com//assets/awards-5.png",
    title: "Ayatiworks Volvo XC90 Campaign Earns Bronze at Maddys 2025 ",
    description:
      "Ayatiworks proudly won the Bronze Award for Best Performance Marketing Agency at the 43rd Madras Advertising Awards – Dinamalar presents MADDYS 2025 powered by Peps on 20th September 2025. This recognition comes for our impactful performance marketing campaign for Volvo’s premium SUV, the XC90, which successfully drove 500 confirmed bookings. The campaign was a testament to our team’s strategic thinking, creativity, and data-driven execution.",
  },
  {
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/awards-1.png",
    title: "Celebrating Milestones, Honoring Excellence",
    description:
      "At Ayatiworks, every award is more than just a trophy. It’s a reminder of the passion, persistence, and people behind our journey. Over the years, we’ve been recognized by industry leaders for our creativity, innovation, and impact across digital, design, and technology.",
  },
  {
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/awards-2.png",
    title: "Digital Agency of the Year 2022",
    description:
      "Being recognized as the Digital Agency of the Year reflects our commitment to delivering measurable results and innovative campaigns that transform brands in the digital space.",
  },
  {
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/awards-3.png",
    title: "Indian Achievers Award 2021–2022",
    description:
      "This award acknowledges our perseverance and leadership in driving meaningful change through technology and creativity, setting benchmarks for the industry.",
  },
];

export default function AwardsMarqueeSection({ items = awards }) {
  const list = items.concat(items); // duplicate for seamless loop

  return (
    <section className="bg-white section-container">
      <div className="overflow-hidden relative py-10 group">
        {/* marquee container */}
        <div className="flex animate-marquee whitespace-nowrap gap-10 group-hover:[animation-play-state:paused]">
          {list.map((award, idx) => (
            // inside your map(...)
            <article
              key={`${idx}-${award.title}`}
              className="isolate min-w-[90vw] md:min-w-[800px] max-w-3xl bg-white rounded-2xl shadow-lg border border-gray-200 shrink-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
                {/* Left Image (4 cols) */}
                {/* Left Image (4 cols) */}
                <div className="md:col-span-4 overflow-hidden md:rounded-l-2xl">
                  {/* fixed height on mobile; stretch to full column height on md+ */}
                  <div className="h-[260px] sm:h-[320px] md:h-full">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="block w-full h-full object-cover"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                </div>

                {/* Right Content (8 cols) */}
                <div className="md:col-span-8 p-6">
                  <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-left"
                  >
                    <span className="section-title text-2xl sm:text-4xl text-left block whitespace-normal break-words hyphens-auto">
                      {award.title}
                    </span>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 origin-left rounded-full"
                      aria-hidden="true"
                    />
                  </motion.h2>

                  <p className="mt-4 text-gray-700 font-secondary text-base sm:text-lg leading-7 whitespace-normal break-words hyphens-auto">
                    {award.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
