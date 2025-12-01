"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/1.png", 
    title: "Initial Consultation", 
    desc: "We begin with a deep dive into your brand, objectives, and audience to set the foundation for impactful PR campaigns." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/2.png", 
    title: "PR Audit & Market Research", 
    desc: "Audit current presence, analyze competitors, and identify media gaps to position your brand effectively." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/3.png", 
    title: "Strategy Blueprint", 
    desc: "Develop a tailored PR roadmap with clear goals, messaging, and media targeting for measurable outcomes." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/4.png", 
    title: "Content Development", 
    desc: "Craft press releases, articles, and media kits that capture your brand voice and engage journalists and audiences." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/5.png", 
    title: "Media List Building", 
    desc: "Curate targeted lists of journalists, publications, and platforms that maximize brand visibility." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/6.png", 
    title: "Influencer Mapping", 
    desc: "Identify authentic influencers who align with your values to build trust and credibility." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/7.png", 
    title: "Campaign Launch", 
    desc: "Roll out campaigns with precision timing to capture attention at the right moment." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/8.png", 
    title: "Outreach & Distribution", 
    desc: "Execute targeted outreach to secure placements that create buzz, backlinks, and authority." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/9.png", 
    title: "Monitoring & Engagement", 
    desc: "Track mentions, coverage, and audience response in real time while nurturing journalist relationships." 
  },
  { 
    id: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/10.png", 
    title: "Reporting & Optimization", 
    desc: "Deliver transparent reports with insights on performance, guiding continuous campaign improvement." 
  },
];


export default function GrowthFramework() {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    let isThrottled = false;

    const handleWheel = (e) => {
      if (isThrottled) return;

      if (e.deltaY > 0) {
        setShowSecond(true);
      } else if (e.deltaY < 0) {
        setShowSecond(false);
      }

      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 800);
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
    <div className="relative bg-white section overflow-hidden h-screen flex flex-col justify-center">
      {/* Title */}
      <div className="section-container mx-auto text-center mt-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Our 10-Step Growth Framework PR Process
          </span>
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
        <p className="mt-5 text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          Our 10-step approach ensures measurable, ROI-driven growth for every client.
        </p>
      </div>

      {/* Wave Line */}
      <div className="absolute top-[200px] left-0 w-full -translate-y-1/2 z-0">
        {/* <img
          src="/assets/line-1.png"
          alt="wave line"
          className="w-full h-auto object-contain"
        /> */}
      </div>

      {/* Animate Steps (1-5 or 6-10) */}
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
                  <h3 className="font-primary text-xl sm:text-2xl text-center mb-2">
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
                  <h3 className="font-primary text-xl sm:text-2xl text-center mb-2">
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
      <div className="mx-auto text-center mt-20 px-6">
        <p className="text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          This structured process ensures Digital PR campaigns are not just about visibility, but about creating sustained authority, trust, and measurable impact for your brand.
        </p>
        {/* <a
          href="/contact-us"
          className="text-blue-700 font-semibold mt-4 inline-block"
        >
          Ready to start your growth journey?
        </a> */}
      </div>
    </div>
  );
}
