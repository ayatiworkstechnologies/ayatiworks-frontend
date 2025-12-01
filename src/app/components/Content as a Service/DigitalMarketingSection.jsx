"use client";

import React from "react";
import { motion } from "framer-motion";

export default function DigitalMarketingSection() {
  return (
    <section className="bg-white section ">
      {/* Top Title Section */}
      <div className="section-container text-left flex items-start gap-6 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Content as a Service (CaaS),{" "}
          </span>
          <span className="block mb-4">
            On-Demand Content Creation & Marketing Solutions
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
      <div className="section-container text-left flex items-start gap-6 mb-12">
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          Let’s take a quick look at businesses around us, our competitors, and
          our support businesses.
        </p>
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
            <span className="mb-2 flex items-start">
              Can you point a finger at any business sans challenge?{" "}
            </span>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full mb-10"
            />
          </motion.h2>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            <span className="font-medium">
              When it comes to content in any form, it is not as easy as it used
              to be. 
            </span>{" "} <br />
            Every business today faces the same challenge: the demand for
            content keeps growing, but the resources to create it rarely keep
            pace. Social media requires daily updates, websites need regular
            optimization, campaigns call for videos, and new markets demand
            multilingual communication. Traditional setups, whether in-house
            teams or fixed agency retainers, often struggle to deliver speed,
            scale, and consistency.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            <span className="font-medium">
              {" "}
              This is where Content as a Service (CaaS) comes in.
            </span>{" "} <br />
            CaaS is a subscription-style, on-demand content creation model that
            gives businesses instant access to strategy, design, copywriting,
            and video production when they need it. Instead of being tied down
            to rigid retainers or the limitations of a single team, you can
            scale content production up or down based on campaign goals, product
            launches, or seasonal demand.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            For businesses, this approach is very powerful. With diverse,
            multilingual audiences and intense market competition, brands need
            content that is fast, flexible, and always relevant. Whether it’s a
            Tamil-first ad campaign, a high-conversion landing page, or a brand
            film, Ayatiworks delivers{" "}
            <span className="font-medium">
              on-demand content creation and marketing solutions
            </span>{" "}
            designed to meet your objectives.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            With CaaS, content becomes more than output, it becomes a strategic
            growth engine.
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
            Get Started with CaaS
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
