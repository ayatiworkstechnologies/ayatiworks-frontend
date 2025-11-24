"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CareerSectionPage() {
  // Animation Variants
  
  return (
    <>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Careers at Ayatiworks - Shape the Future With Us
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-black/80 space-y-6"
        >
          <h3 className="text-base/7 sm:text-lg/8 md:text-2xl/9 text-secondary font-primary font-medium">
            What Work with Us ?
          </h3>
          <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
            We don’t just build campaigns, we build careers.  
            <br />
            We believe people grow best when they’re challenged, mentored, and
            trusted to bring bold ideas to the table. 
          </p>
        </motion.div>
      </section>
    </>
  );
}
