"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WhyChennai() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rightBlocks = [
    {
      title: "Trust at Scale",
      text: "Media mentions, expert features, and influencer collaborations build instant credibility with audiences across India.",
    },
    {
      title: "Better Discoverability",
      text: "High-quality backlinks and features on reputable sites strengthen SEO, making sure your business ranks higher when customers search.",
    },
    {
      title: "Shaping Brand Perception",
      text: "Consistent digital storytelling helps position you as a leader in your industry whether you’re serving local, regional, or national markets.",
    },
    {
      title: "Reputation Control",
      text: "Online reputation management ensures one negative review doesn’t overshadow your brand’s strengths.",
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
            Why Businesses Need to Embrace Digital PR{" "}
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
              Whether you’re a startup in Bangalore, an automotive brand in
              Chennai, or a healthcare provider in Delhi, one reality is the
              same: your customers are searching for you online long before they
              ever speak to you. What they find or don’t find shapes their
              decision.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black/80 font-secondary leading-7 mb-4"
            >
              This is why Digital PR has become a non-negotiable part of modern
              business growth. It goes beyond visibility to influence how people
              perceive, trust, and engage with your brand.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black font-semibold font-secondary leading-7"
            >
              In India’s dynamic business landscape, with multilingual
              audiences, regional preferences, and fast-changing markets,
              Digital PR adapts your brand message for different contexts.
              Whether it’s a Tamil-first campaign, a thought leadership feature
              in a national publication, or an influencer-led launch, Digital PR
              ensures your brand is always part of the right conversations.
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
