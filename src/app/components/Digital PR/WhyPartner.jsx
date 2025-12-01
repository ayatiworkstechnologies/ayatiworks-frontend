"use client";

import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Holistic Approach to PR",
    desc: "We integrate PR, influencer marketing, and reputation management into a unified system that amplifies every campaign.",
  },
  {
    title: "Industry Expertise",
    desc: "With experience across automotive, real estate, healthcare, SaaS, and retail, we design PR strategies that truly fit your sector.",
  },
  {
    title: "Local Insight, National Impact",
    desc: "As a Chennai-based agency, we understand Tamil Nadu’s nuances while delivering visibility on national and global platforms.",
  },
  {
    title: "Growth-First Mindset",
    desc: "Every campaign is tied to real outcomes , building authority, driving engagement, and delivering long-term business growth.",
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
            Why Partner with Ayatiworks for Digital PR ?
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
      <div className="section-container text-left flex items-start gap-6 mb-4">
        <p className="text-black/80 font-secondary font-medium mb-2 text-base sm:text-lg">
          Choosing a Digital PR partner isn’t about who can send out the most
          press releases, it’s about who can shape narratives, earn trust, and
          deliver measurable growth. At Ayatiworks, we bring a unique blend of
          local expertise and global best practices that make your brand truly
          stand out.
        </p>
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
      <div className="section-container text-left flex flex-col gap-4 mb-8 mt-8">
  <p className="text-black/80 font-secondary font-medium text-base sm:text-lg">
    With Ayatiworks as your PR partner, you’re not just buying coverage,
    you’re investing in a consistent, scalable, and ROI-driven approach to
    digital reputation and authority.
  </p>

  <p className="text-black/80 font-secondary font-medium text-base sm:text-lg">
    Digital PR is no longer optional, it’s a necessity for brands that want to
    be seen, trusted, and remembered. From shaping online reputation to building
    authority through media outreach, Ayatiworks delivers strategies that go
    beyond coverage to create sustained business impact.
  </p>

  <p className="text-black/80 font-secondary font-medium text-base sm:text-lg">
    If your goal is to stand out in a crowded market, now is the time to make
    Digital PR work for you.
  </p>

  <p className="text-black/80 font-secondary font-medium text-base sm:text-lg">
    Ready to elevate your brand?
  </p>

  <p className="text-black/80 font-secondary font-medium text-base sm:text-lg">
    Partner with Ayatiworks, the award-winning Digital PR agency in Chennai,
    trusted by businesses across industries.
  </p>

  <motion.button
    className="relative mt-4 bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 self-start"
    initial={{ scale: 0.9, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    whileHover={{
      scale: 1.08,
      boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    viewport={{ once: true }}
    onClick={() => navigate("/contact-us")}
  >
    Digital PR agency in Chennai
  </motion.button>
</div>

    </section>
  );
}
