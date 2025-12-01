"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChennai() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rightBlocks = [
    {
      title: "First Impressions Matter",
      text: "Your website is your digital face. A professional, user-friendly design builds trust instantly.",
    },
    {
      title: "Frictionless E-Commerce",
      text: "Customers expect one-click checkouts, mobile-first shopping, and secure transactions.",
    },
    {
      title: "Scalability & Growth",
      text: "From startups to enterprises, your website should grow with you.",
    },
    {
      title: "Search Visibility",
      text: " Websites optimized for SEO rank higher and get discovered faster.",
    },
    {
      title: "AI-Driven Experiences",
      text: "From chatbots to personalized recommendations, AI now drives customer engagement.",
    },
  ];

  // Auto cycle every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 2) % rightBlocks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [rightBlocks.length]);

  // animation variants
  const blockVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section bg-white">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          variants={fadeUp}
          className="flex items-start"
        >
          <h2 className="section-title mb-6">
            Why Businesses Need to Embrace Web & E-Commerce Today
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[250px] mt-2 origin-left"
            ></motion.div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14">
          {/* LEFT COLUMN with animation */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.25 } },
            }}
          >
            <motion.p
              variants={fadeUp}
              className="text-secondary font-primary font-medium text-3xl mb-4"
            >
              From retail stores in Chennai to SaaS platforms serving global
              clients, every business now competes online. Customers search,
              compare, and buy digitally before they ever interact with you
              offline.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black/80 font-secondary leading-7 mb-4"
            >
              Here’s why businesses are investing in it now more than ever:
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black font-semibold font-secondary leading-7"
            >
              This is why a strong website and e-commerce strategy is no longer
              optional; it’s a growth necessity. <br />
              No matter your industry, healthcare, fintech, retail, SaaS, or
              manufacturing, your digital presence defines how customers
              perceive and trust you.
            </motion.p>
          </motion.div>

          {/* CENTER DOTS */}
          <div className="hidden lg:block relative">
            <div className="h-full w-px bg-gray-200 mx-3"></div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {rightBlocks.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-500 ${
                    i === activeIndex ||
                    i === (activeIndex + 1) % rightBlocks.length
                      ? "w-2.5 h-2.5 bg-secondary"
                      : "w-2 h-2 border-2 border-secondary"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN with AnimatePresence */}
          <div className="space-y-10 relative">
            <AnimatePresence mode="wait">
              {[0, 1].map((offset) => {
                const blockIndex = (activeIndex + offset) % rightBlocks.length;
                return (
                  <motion.div
                    key={blockIndex}
                    variants={blockVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                      delay: offset * 0.2, // slight stagger
                    }}
                    className="bg-white/80 backdrop-blur-sm p-4 "
                  >
                    <h3 className="font-medium text-2xl font-primary text-primary inline-block">
                      {rightBlocks[blockIndex].title}
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                      className="bg-secondary h-1 w-[100px] mt-1 mb-2 origin-left"
                    ></motion.div>
                    <p className="text-black/80 font-secondary text-base leading-7">
                      {rightBlocks[blockIndex].text}
                    </p>
                    {/* Divider */}
                    <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
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
