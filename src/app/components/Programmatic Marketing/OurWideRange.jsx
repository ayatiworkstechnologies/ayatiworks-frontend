"use client";

import React from "react";
import { motion } from "framer-motion";

function OurWideRange() {
  return (
    <section className="section-container py-12">
      {/* Title */}
      <div className="mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="section-title text-left"
        >
          <span className="mb-2 block"> Our Wide Range Of Expertise</span>
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
      </div>

      {/* Full Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <img
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/group-logo.png"
          alt="Our Clients & Partners"
          className="w-full max-w-6xl"
        />
      </motion.div>
    </section>
  );
}

export default OurWideRange;
