"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Holistic Approach to Marketing",
    desc: "CaaS is not just about creating content; it’s about aligning every asset with your larger digital goals. We ensure your blogs, videos, campaigns, and multilingual content all connect seamlessly to your brand’s growth strategy.",
  },
  {
    title: "Industry Experience",
    desc: "From automotive and healthcare to real estate, SaaS, and FMCG, we understand the unique content needs of each industry. This expertise allows us to craft campaigns that resonate with audiences while meeting business objectives.",
  },
  {
    title: "Regional & Global Edge",
    desc: "As a Chennai-based agency, we combine local market insight with global standards of execution. Whether it’s Tamil-first content for regional campaigns or international content marketing, we make your brand relevant everywhere.",
  },
  {
    title: "Growth-First Mindset",
    desc: "Every project is guided by data, performance metrics, and ROI. Our goal isn’t just to deliver content, it’s to deliver measurable business outcomes.",
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
            Why Partner with Ayatiworks for Your Overall Digital Growth?
          </span>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[320px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
      </div>

      {/* ✅ Intro */}
      <div className=" mx-auto px-6 mb-10 text-black/80 text-base sm:text-lg font-secondary">
        <p>
          Choosing the right Content as a Service (CaaS) partner makes all the
          difference. At Ayatiworks, we go beyond content delivery, integrating
          creativity, strategy, and technology to fuel your end-to-end digital
          growth. Here’s why businesses in Chennai and beyond trust us:
        </p>
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
        <div className="space-y-6">
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

      {/* ✅ Closing Statement */}
      <div className=" mx-auto px-6 mt-10 text-black/80 text-base sm:text-lg font-secondary">
        <p>
          With Ayatiworks as your CaaS partner, you’re not just outsourcing
          content  ,  you’re investing in a scalable system that powers
          sustainable, long-term digital growth.
        </p>
      </div>
    </section>
  );
}
