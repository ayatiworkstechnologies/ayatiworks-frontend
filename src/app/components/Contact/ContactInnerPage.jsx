"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ContactInnerPage() {
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
    <section className="w-full bg-white section">
      <div className="section-container mx-auto">
        {/* Heading & Intro */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          {/* 12-col row: left 4 / right 8 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
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
                Contact Us
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
              <motion.h3
                className="text-3xl md:text-3xl font-primary font-medium text-secondary mb-3"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                Ready to Build Something Forward?
              </motion.h3>

              <motion.p
                className="text-black/80 font-secondary text-base sm:text-lg md:text-lg leading-8"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Whether you’re refining your digital presence or starting from
                scratch, we're here to make it happen. Drop us a line—let’s
                craft an unforgettable experience.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
