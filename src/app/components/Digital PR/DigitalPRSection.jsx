"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitalPRSection() {
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
          <span className="mb-2 flex items-start">Digital PR Agency in Chennai,</span>
          <span className="block mb-4">Elevating Brand Authority Online</span>
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
          <span className="mb-2 flex items-start">Introduction to Digital PR</span>
          {/* Decorative line */}
          <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 mb-4 origin-left rounded-full"
            />
        </motion.h2>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            When people search for your brand online, what do they find? <br />
Positive articles and features that build trust, or silence that makes you invisible? <br />
That’s where Digital PR makes the difference.

          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            Digital PR is the modern evolution of public relations. Instead of relying on press releases in print, it focuses on building your brand’s presence through online media, digital publications, influencers, and search-optimized content. 
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            The goal is simple: make your business more visible, more credible, and more relevant in the digital space.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            Customers today don’t just buy products, they look for reviews, media mentions, and expert opinions before they decide. If your competitors are being featured online while you’re not, you risk being overlooked no matter how good your service is.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            At Ayatiworks, we use Digital PR to create the kind of visibility that earns attention and builds authority. It’s about making sure your brand appears in the right conversations, on the right platforms, and in front of the right audience.
          </p>
          <p className="text-black/80 font-secondary italic font-semibold mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            With a strong Digital PR strategy, you don’t just show up online, you stand out !
          </p>
        
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
            Book a Free PR Consultation
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
