"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChennai() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rightBlocks = [
    {
      title: "This gap leaves businesses struggling to keep up with the speed and scale the digital landscape demands.",
      text: "Content as a Service (CaaS) solves this challenge by offering a flexible, scalable, and on-demand solution. Instead of being locked into static models, brands can produce exactly what they need, when they need it. ",
    },
    {
      title: "Launching a new product?",
      text: "Scale content output. Running a short campaign? Reduce volume. The model adapts to your business rhythm. For businesses in Chennai and across Tamil Nadu, where competition is fierce and audiences are diverse, CaaS is more than just a convenience, it’s a competitive advantage. It ensures your brand always has the right mix of content, in the right language, across the right platforms, without delay.",
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
            Why Businesses Need CaaS Today
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
              This gap leaves businesses struggling to keep up with the speed
              and scale the digital landscape demands.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black/80 font-secondary leading-7 mb-4"
            >
              The way brands create content has changed dramatically. What
              worked five years ago, a monthly campaign and a few social posts,
              is no longer enough. Today, content is the backbone of marketing,
              driving everything from brand awareness to lead generation and
              customer retention.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black font-medium font-secondary leading-7"
            >
              <span className="font-medium">But here’s the problem:</span>
              <li>In-house teams are often limited by bandwidth.</li>
              <li>Agencies can be too rigid or slow to respond.</li>
              <li>Freelancers may lack consistency and strategic alignment.</li>
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
