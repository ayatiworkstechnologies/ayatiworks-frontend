"use client";
import React from "react";
import { motion } from "framer-motion";

export default function FocusSection() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.35 },
  });

  const items = [
    {
      title: "ROI-First Planning",
      desc: "Every dollar spent is tracked for impact.",
      icon: "/assets/graph-5.png",
    },
    
    {
      title: "Creative + Data Synergy",
      desc: "Ideas backed by analytics.",
      icon: "/assets/graph-4.png",
    },
    {
      title: "Speed & Scale",
      desc: "Agile enough for quick campaigns, robust enough for long-term strategy",
      icon: "/assets/graph-3.png",
    },
    
  ];

  return (
    <section className="bg-white section">
      <div className="mx-auto section-container ">
        {/* Heading */}
        <motion.div {...fadeUp(0)}>
          <motion.h2 className="section-title text-left" {...fadeUp(0)}>
            <span className="mb-2 block">We focus on</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <motion.article
              key={it.title}
              {...fadeUp(0.08 * (idx + 1))}
              className="rounded-2xl bg-white p-4 sm:p-5 ring-1 ring-black/5 shadow-lg hover:shadow-2xl"
            >
              {/* Title */}

              <motion.h2
                className="section-title text-left text-2xl"
                {...fadeUp(0)}
              >
                <span className="mb-2 block">{it.title}</span>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                  className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[100px] mt-1 origin-left rounded-full"
                />
              </motion.h2>
              {/* Description */}
              <p className="mt-4 text-lg leading-6 text-black/80 font-secondary">
                {it.desc}
              </p>

              {/* Icon */}
              <div className="mt-4 p-4">
                <img
                  src={it.icon}
                  alt={it.title}
                  className="mx-auto h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
