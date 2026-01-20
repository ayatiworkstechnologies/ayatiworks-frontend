"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DigitalMarketingSection() {
  return (
    <section className="bg-white section ">
      {/* Top Title Section */}
      <div className="section-container text-left flex items-start gap-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">
            Digital Marketing Services in Chennai for ROI-Driven Business Growth
          </span>
          {/* <span className="block mb-4">Marketing Agency in Chennai</span> */}
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-center rounded-full"
          />
        </motion.h1>
      </div>
      <motion.div
        className="section-container"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <p className="text-black/80 font-secondary font-bold mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          If you’re a business in Chennai or South India looking for digital
          marketing that drives{" "}
          <strong>qualified leads and measurable growth,</strong> Ayatiworks is
          built for that purpose.
        </p>
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          We provide{" "}
          <strong> AI-led digital marketing services in Chennai</strong> for
          B2B, B2C, and D2C brands that want clarity, not noise.
        </p>
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          Our focus is simple: align{" "}
          <strong> strategy, data, and execution</strong> to generate outcomes
          that matter to business leaders, pipeline growth, revenue impact, and
          long-term sustainability.
        </p>
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          In today’s digital marketing world, most businesses understand the
          importance of showing up organically on Google through white-hat SEO
          practices. At the same time, search behaviour is evolving, with
          AI-powered platforms influencing how users discover, evaluate, and
          choose brands.{" "}
        </p>
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          {" "}
          At Ayatiworks, we work with a combined SEO and AISEO framework to
          ensure your business attracts the right organic traffic and converts
          it into meaningful ROI.{" "}
        </p>
        <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
          {" "}
          For many founders, business owners, and C-suite leaders, one question
          consistently comes up before choosing a digital marketing
          partner:{" "}
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="section-container mx-auto items-center">
        {/* Left side - TV Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/tv-dm.png"
            alt="AI Driven Digital Marketing Services in Chennai Ayatiworks screened on TV"
            className="w-200 h-full drop-shadow-xl rounded-xl"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-secondary/80 font-primary font-medium mb-2 text-xl/8 sm:text-xl/8 md:text-3xl/8">
            “How can AI improve digital marketing outcomes for businesses?”
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            AI improves digital marketing outcomes by helping businesses make
            better decisions, faster, not by replacing strategy, but by
            sharpening it.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            Instead of guessing what content to publish, which keywords to
            target, or where budgets should be spent, AI analyses real user data
            to reveal what customers are actively searching for, how they behave
            across channels, and where conversion opportunities are being
            missed.
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            When applied correctly, this allows digital marketing to move away
            from volume-driven activity and toward precision-led execution,
            where every SEO effort, content decision, and campaign is tied back
            to a clear business objective.
          </p>
        </motion.div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left mt-8"
        >
          <Link href="/contact" passHref>
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
              Let’s Build Your Growth Story Together
            </motion.a>
          </Link>
        </motion.div>
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
