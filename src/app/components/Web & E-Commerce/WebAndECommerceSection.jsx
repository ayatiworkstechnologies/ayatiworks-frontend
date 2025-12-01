"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WebAndECommerceSection() {
  return (
    <section className="bg-white section ">
      {/* Top Title Section */}
      <div className="section-container text-left flex items-start gap-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Web & E-Commerce Services in Chennai
          </span>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
      </div>

      {/* Content Grid */}
      <div className="section-container mx-auto items-center">
        {/* Left side - TV Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/tv-dm.png"
            alt="The Year of Utsah"
            className="w-200 h-full drop-shadow-xl rounded-xl"
          />
        </motion.div>

        {/* Right side - Text */}
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          When someone Googles your business, what’s the first impression they
          see, a sleek digital storefront or a dated page that fails to tell
          your story?
        </p>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            <span className="mb-2 flex items-start">
              Why Your Website or E-Commerce Platform Matters More Than Ever
            </span>
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 mb-4 origin-left rounded-full"
            />
          </motion.h2>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            “Your website isn’t just a page; it’s the first handshake with your
            customers. Your e-commerce store isn’t just a catalog; it’s your
            cash register.”
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            If you’re searching for a website agency or an e-commerce partner,
            you’re not just looking for pretty designs.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            You want: A website that loads fast, ranks well, and builds trust.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            An e-commerce platform that makes buying effortless and drives
            repeat customers.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            A partner who understands your industry’s pain points and builds for
            measurable growth.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            That’s exactly what we do, design websites and stores that win
            customers and scale businesses.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            At Ayatiworks, we don’t just design websites, we engineer digital
            experiences that connect with your audience, adapt to your industry,
            and scale with your business. Whether you’re a local retailer, a
            SaaS startup, or an enterprise brand, we build platforms that meet
            your unique needs and future-proof your digital growth.
          </p>
          {/* <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8"></p> */}
        </motion.div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left mt-8"
        >
          <motion.button
            className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Book a Free Web Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div>
      
    </section>
  );
}
