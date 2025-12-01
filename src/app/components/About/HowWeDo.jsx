"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HowWeDoIt() {
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

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <section className="section">
      {/* Heading & Intro */}
      <motion.div
        className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 section-container"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
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
              {" "}
              How do we do it?
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
          <motion.p
            className="lg:col-span-8 text-black/80 font-secondary text-base sm:text-lg md:text-lg leading-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            At AyatiWorks, we’re all about unlocking a digital gateway for our
            clients! Whether it’s sparking consumer conversations through brand
            marketing, launching online shopping sprees, building cool platforms
            for entertainment and finance, managing enterprise networks, or
            supercharging performance , we’ve got it covered! Our secret sauce?
            Practical, trustworthy, and dependable solutions that make your
            digital dreams a reality!
          </motion.p>
        </div>
      </motion.div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 section-container">
        {/* Card 1 */}
        <motion.div
          className="p-6 shadow-md 
               transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white
               flex flex-col min-h-[320px] md:min-h-[360px] bg-white"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="text-3xl font-primary font-medium mb-10">
            Customized Social Media <br />
            and Web Interactions
          </h3>
          <p className="text-lg/9 font-secondary leading-relaxed flex-1">
            Our squad of social media strategists is here to whip up captivating
            content that speaks to your audience's heart! Need a campaign? We
            can take it from spark to spotlight in less than 24 hours , faster
            than you can say ‘viral sensation!’
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="p-6 shadow-md 
               transition-all duration-300 cursor-pointer  hover:bg-primary hover:text-white
               flex flex-col min-h-[320px] md:min-h-[360px] bg-white"
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="text-3xl font-primary font-medium mb-10">
            Using Influencer Marketing to <br /> Build Credibility
          </h3>
          <p className="text-lg/9 font-secondary leading-relaxed flex-1">
            Did you know a whopping 88% of consumers trust online reviews? Our
            Influencer tool connects you with trendsetting mavens across various
            industries, helping you build trust and reputation faster than you
            can say ‘#influencer power!’
          </p>
        </motion.div>
      </div>
    </section>
  );
}
