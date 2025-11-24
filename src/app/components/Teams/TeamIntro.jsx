"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TeamIntro() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full bg-white section ">
      {/* Heading & Intro */}
      <motion.div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 section-container"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        {/* 12-col row: left 4 / right 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 section-container">
          {/* LEFT (4 cols) */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="section-title flex items-start text-primary">
              {" "}
              Teams
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[100px] mt-3 origin-left rounded-full"
              aria-hidden="true"
            />
          </motion.div>

          {/* RIGHT (8 cols) */}
          <div className="lg:col-span-8">
            <motion.p
              className="text-black/80 font-secondary text-base sm:text-lg md:text-lg leading-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              At AyatiWorks, we’re all about unlocking a digital gateway for our
              clients! Whether it's sparking consumer conversations through
              brand marketing, launching online shopping sprees, building cool
              platforms for entertainment and finance, managing enterprise
              networks, or supercharging performance , we’ve got it covered! Our
              secret sauce? Practical, trustworthy, and dependable solutions
              that make your digital dreams a reality!
            </motion.p>
          </div>
        </div>

        
      </motion.div>
    </section>
  );
}
