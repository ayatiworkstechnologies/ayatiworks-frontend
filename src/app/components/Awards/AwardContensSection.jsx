"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AwardsContensSection() {
  return (
    <section className="bg-white section-container ">
      {/* Bottom Section */}
      <div className="mx-auto text-center mt-16">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          <span className="mb-2 block">What These Awards Mean to Us</span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 mx-auto origin-center rounded-full"
          />
        </motion.h2>

        <p className="text-black font-secondary text-lg leading-relaxed mt-6">
          For us, awards are not the finish line; they’re milestones in a much
          larger journey. Each recognition fuels our drive to push boundaries,
          explore new possibilities, and create even more value for the clients
          who trust us.
        </p>
      </div>

      <div className=" mx-auto mt-16 rounded-lg bg-primary text-center p-8 md:p-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-white text-center"
        >
          <span className="mb-2 block">The Next Chapter </span>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-white h-1 w-32 sm:w-48 md:w-64 mx-auto mt-3 origin-center rounded-full"
          />
        </motion.h2>

        <p className="text-white font-secondary text-lg leading-relaxed mx-auto mt-6">
          The Next Chapter  Our story doesn’t stop here. With every project,
          every partnership, and every success shared with our clients, we’re
          building towards the next big recognition. Because at Ayatiworks, we
          believe the NEXT IS NOW. 
        </p>
      </div>
    </section>
  );
}
