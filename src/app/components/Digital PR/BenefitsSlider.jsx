"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const benefits = [
  {
    title: "Enhanced Online Visibility ",
    desc: "Secure high-quality placements in top media outlets, driving brand discovery and recall.",
  },
  {
    title: "Authority Building ",
    desc: "Position your brand as an industry thought leader through expert features, interviews, and guest articles.",
  },
  {
    title: "SEO Advantage ",
    desc: "Earn authoritative backlinks from trusted publications, boosting search engine rankings and organic traffic.",
  },
  {
    title: "Stronger Reputation ",
    desc: "Manage brand sentiment and shape positive narratives in competitive industries.",
  },
  {
    title: "Lead Generation & Sales Impact ",
    desc: "Reach decision-makers through targeted media, fueling inbound interest and conversions.",
  },
  {
    title: "Influencer Amplification ",
    desc: "Partner with credible voices who extend your brand story to new audiences.",
  },
  {
    title: "Long-Term Trust ",
    desc: "Build consistent credibility that translates into customer loyalty and stakeholder confidence.",
  },
 
];

export default function BenefitsSlider() {
  const [index, setIndex] = useState(0);

  // ✅ Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // ✅ Variants for animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <section className="bg-white py-12 section">
      {/* ✅ Section Header */}
      <div className="section-container mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title "
        >
          Benefits of Digital PR to a Business
        </motion.h2>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="bg-blue-600 h-1 w-40 mx-auto mt-3 origin-left rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-black/80 font-medium font-secondary mt-6 mx-auto text-base md:text-lg"
        >
          Digital PR is more than just getting your brand in the news, it’s about building long-term authority and credibility in the digital space. For businesses in Chennai and across India, here’s how Digital PR makes a difference:
        </motion.p>
      </div>

      {/* ✅ Slider Content */}
      <div className="relative mx-auto h-60 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 w-full text-center"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-medium text-primary font-primary mb-3"
            >
              {benefits[index].title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/80 font-medium font-secondary mt-6 mx-auto text-base md:text-lg"
            >
              {benefits[index].desc}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ✅ Dots Indicator with Animation */}
      <div className="flex justify-center gap-2 mt-6">
        {benefits.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            animate={{ scale: i === index ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* ✅ Extra Note for Chennai */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className=" mx-auto mt-10 text-center"
      >
        <p className="text-black/80 font-medium font-secondary mt-6 mx-auto text-base md:text-lg">
          Digital PR ensures your business isn’t just seen, it’s remembered, respected, and trusted.
        </p>
      </motion.div>
    </section>
  );
}
