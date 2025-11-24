"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/1.png", title: "Initial Consultation", desc: "We start with a one-on-one consultation to understand your goals, target audience, and content needs." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/2.png", title: "Needs Assessment", desc: "Our team evaluates your current content assets, gaps, and growth opportunities." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/3.png", title: "Content Strategy Blueprint", desc: "We design a roadmap aligned with campaigns, KPIs, and marketing channels." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/4.png", title: "Editorial Calendar Setup", desc: "A flexible content calendar ensures timely delivery for launches and campaigns." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/5.png", title: "Creative Asset Development", desc: "Copy, visuals, and videos are created with a focus on brand voice and impact." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/6.png", title: "Localization & Multilingual", desc: "We adapt messaging into Tamil, Hindi, or other languages for wider reach." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/7.png", title: "Quality Review & Editing", desc: "Every asset undergoes editing, proofreading, and brand consistency checks." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/8.png", title: "Delivery & Deployment", desc: "We integrate assets seamlessly into your digital campaigns and platforms." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/9.png", title: "Performance Tracking", desc: "Analytics and engagement metrics are monitored to measure success." },
  { id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/10.png", title: "Continuous Optimization", desc: "Insights from performance refine and improve future content cycles." },
];

export default function CaaSFramework() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    let isThrottled = false;
    const handleWheel = (e) => {
      if (isThrottled) return;
      if (e.deltaY > 0) setShowSecond(true);
      else if (e.deltaY < 0) setShowSecond(false);
      isThrottled = true;
      setTimeout(() => (isThrottled = false), 800);
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const variants = {
    hiddenDown: { opacity: 0, y: 100 },
    hiddenUp: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exitDown: { opacity: 0, y: -100 },
    exitUp: { opacity: 0, y: 100 },
  };

  return (
    <div className="relative bg-white section overflow-hidden h-screen py-10 flex flex-col justify-center">
      {/* Title */}
      <div className="section-container mx-auto text-center mt-15 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Our 10-Step CaaS Framework
          </span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[320px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
        <p className="mt-5 text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          Delivering content at scale requires a structured approach. Our Content as a Service (CaaS) model <br /> follows a proven 10-step framework to ensure efficiency, creativity, and measurable business impact.
        </p>
      </div>

      {/* Wave Line Placeholder (optional graphic) */}
      {/* <div className="absolute top-[200px] left-0 w-full -translate-y-1/2 z-0">
        <img src="/assets/line-1.png" alt="wave line" className="w-full h-auto object-contain" />
      </div> */}

      {/* Steps (1-5 or 6-10) */}
      <div className="relative z-10 mx-auto px-6">
        <AnimatePresence mode="wait">
          {!showSecond ? (
            <motion.div
              key="first"
              initial="hiddenDown"
              animate="visible"
              exit="exitDown"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="flex justify-between gap-8"
            >
              {steps.slice(0, 5).map((step, index) => (
                <div
                  key={step.id}
                  className={`w-1/5 flex flex-col items-center px-4 ${
                    index % 2 === 0 ? "mb-36" : "mt-36"
                  }`}
                >
                  <div className="w-16 h-16 mb-6">
                    <img src={step.id} alt={step.title} />
                  </div>
                  <h3 className="font-primary text-lg sm:text-xl text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 font-secondary text-sm sm:text-base text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="second"
              initial="hiddenUp"
              animate="visible"
              exit="exitUp"
              variants={variants}
              transition={{ duration: 0.7 }}
              className="flex justify-between gap-8"
            >
              {steps.slice(5, 10).map((step, index) => (
                <div
                  key={step.id}
                  className={`w-1/5 flex flex-col items-center px-4 ${
                    index % 2 === 0 ? "mb-36" : "mt-36"
                  }`}
                >
                  <div className="w-16 h-16 mb-6">
                    <img src={step.id} alt={step.title} />
                  </div>
                  <h3 className="font-primary text-lg sm:text-xl text-center mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-800 font-secondary text-sm sm:text-base text-center leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Text */}
      <div className=" mx-auto text-center mt-20 px-6">
        <p className="text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          This structured 10-step framework ensures that every piece of content we create is strategic, timely, and performance-ready. With Ayatiworks’ CaaS model, you don’t just get content delivery, you get a repeatable system that scales with your business and drives measurable growth.
        </p>
       
      </div>
    </div>
  );
}
