"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function WhyChennai() {
  const [activeIndex, setActiveIndex] = useState(0);

  const rightBlocks = [
    {
      title: "Local Search Dominance",
      text: "With over 80% of consumers using Google before making a purchase decision, being visible in local search results is crucial. Our local SEO strategies in Chennai ensure your brand is found where it matters most.",
    },
    {
      title: "Targeted Online Advertising in Tamil Nadu",
      text: "Instead of wasting ad budgets, we design ROI-driven campaigns that reach the right audience , whether it’s B2B decision-makers, millennials in Chennai, or D2C buyers across Tamil Nadu.",
    },
    {
      title: "Content That Converts",
      text: "Our team crafts engaging blogs, social posts, and ad creatives tailored to the Chennai audience , ensuring maximum reach and conversion.",
    },
    {
      title: "Social Media Influence",
      text: "From Instagram to LinkedIn, we build a consistent brand voice that connects with your Chennai audience, driving both engagement and loyalty.",
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
            Why Businesses in Chennai Need Digital Marketing
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[250px] mt-2 origin-left"
            ></motion.div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-14">
          {/* LEFT COLUMN */}
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
              Here’s why digital marketing has become a business necessity for
              companies in Chennai, not just a marketing choice.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black/80 font-secondary leading-7 mb-4"
            >
              Chennai is no longer defined only by culture and traditional
              commerce. It is one of India’s fastest-growing digital business
              hubs. From startups in T-Nagar and SaaS companies operating out of
              OMR to established retail and manufacturing brands across Tamil
              Nadu, buying behaviour has fundamentally changed. Decision-makers
              today search, compare, and validate online long before they speak
              to a vendor.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black/80 font-secondary leading-7 mb-4"
            >
              This shift means visibility alone is not enough. Businesses need
              digital marketing strategies that align with how customers
              actually discover, evaluate, and choose brands, across search,
              content, and social platforms. Companies that invest in
              structured, data-led digital marketing are not reacting to change;
              they are staying ahead of it.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-black font-semibold font-secondary leading-7"
            >
              For Chennai-based businesses, the advantage lies in combining
              local market understanding with measurable digital execution. When
              strategy, data, and performance come together, digital marketing
              stops being an expense and starts becoming a growth lever tied to
              real business outcomes.
            </motion.p>

            <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  viewport={{ once: true }}
  className="text-left mt-8"
>
  <Link href="#client-success" passHref>
    <motion.a
      className="inline-block relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
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
      Know More About Our Clients and Case Studies
    </motion.a>
  </Link>
</motion.div>
          </motion.div>

          {/* CENTER DOTS */}
          <div className="hidden lg:block relative">
            <div className="h-full w-px bg-gray-200 mx-3"></div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-3">
              {rightBlocks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`block rounded-full transition-all duration-500 ${
                    i === activeIndex ||
                    i === (activeIndex + 1) % rightBlocks.length
                      ? "w-3 h-3 bg-secondary"
                      : "w-2 h-2 border-2 border-secondary"
                  }`}
                  aria-label={`Show block ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
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
                      delay: offset * 0.2,
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
