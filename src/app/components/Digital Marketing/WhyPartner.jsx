"use client";
import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Award-Winning Expertise",
    desc: "Recognized for excellence in strategy and execution.",
  },
  {
    title: "Local + Global Reach",
    desc: "Deep understanding of Chennai & Tamil Nadu markets with global delivery experience.",
  },
  {
    title: "Industry Diversity",
    desc: "Proven results across Automobile, Healthcare, Real Estate, SaaS, Retail, and Beauty.",
  },
  {
    title: "End-to-End Solutions",
    desc: "From SEO to web development, all under one roof.",
  },
  {
    title: "ROI-First Approach",
    desc: "Every campaign is designed to maximize returns and reduce costs.",
  },
  {
    title: "Data + Creativity Balance",
    desc: "Combining analytics with storytelling for impactful campaigns.",
  },
  {
    title: "Transparent Reporting",
    desc: "Clear insights into performance, no jargon, no guesswork.",
  },
  {
    title: "Long-Term Partnerships",
    desc: "Many of our client relationships go beyond 3+ years.",
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
          Why Partner with Ayatiworks for Your Digital Growth?
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
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/seo-img.png"
            alt="Team meeting"
            className="rounded-lg shadow-lg w-full  object-cover"
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
