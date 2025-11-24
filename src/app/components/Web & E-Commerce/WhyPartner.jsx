"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Award-Winning Expertise",
    desc: "Recognized for building high-performing digital platforms in Chennai.",
  },
  {
    title: "Strategy + Execution",
    desc: "Not just developers, we’re digital growth strategists.",
  },
  {
    title: "Industry Agnostic",
    desc: "From retail to SaaS, we adapt to every business vertical.",
  },
  {
    title: "Trust & Security",
    desc: "Websites built with best-in-class security and compliance.",
  },
  {
    title: "Measurable Growth",
    desc: "Every build is optimized for conversions, rankings, and ROI.",
  },
  

];

export default function WhyPartner() {
  return (
    <section className="section bg-white">
      {/* ✅ Title */}
      <div className="section-container text-left flex items-start gap-6 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Why Partner with Ayatiworks for Web & E-Commerce?
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
      

      {/* ✅ Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/seo-img.png"
            alt="Team meeting"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-5">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-primary text-xl font-medium">•</span>
              <div>
                <h3 className="text-primary font-primary font-medium text-xl">
                  {item.title}
                </h3>
                <p className="text-black/80 font-secondary text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
