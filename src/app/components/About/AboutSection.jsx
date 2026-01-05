"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section className="bg-white section py-12 sm:py-16 md:py-20">
      {/* Top Title Section */}
      <div className="section-container text-center flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="section-title flex items-start text-primary">About Us</h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[100px] mt-3 origin-left rounded-full"
          />
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug"
        >
          Innovating with A Dash of Madness Since 2017!
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className="section-container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left side - TV Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/tv-2026.png"
            alt="Ayatiworks TV illustration"
            className="w-full  drop-shadow-xl rounded-xl"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-black/80 font-secondary mb-6 text-base sm:text-lg md:text-xl leading-8">
            The Year of Vallam marks a defining phase in Ayatiworks’ journey, where power emerges from unity, clarity, and execution. Rooted in collective strength, Vallam represents our ability to move as one organisation with a shared purpose. In {" "}
            <span className="font-primary text-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              2026
            </span>
            , every department works in tandem, every strategy is intentional, and every action is aligned toward delivering measurable value for our clients.
          </p>

          <p className="font-primary text-secondary font-medium text-2xl md:text-3xl my-2"> Vallam is not force, it is focused capability! </p>
          <p className="font-secondary text-secondary font-medium text-lg md:text-xl">

            It is the power of disciplined planning, timely execution, and accountability at every level. As we step into this year, Ayatiworks stands strengthened by unity, driven by purpose, and committed to growth that truly matters.
          </p>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      />
    </section>
  );
}
