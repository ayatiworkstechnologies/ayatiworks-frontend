"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import Link from "next/link";

const MotionLink = motion(Link);

const steps = [
  {
    id: 1,
    title: "1. Discovery Call & Brand Analysis",
    points: ["Understand your brand’s goals, target market, and vision."],
  },
  {
    id: 2,
    title: "2. Platform Assessment & Requirements Gathering",
    points: ["Identify Shopify needs, features, and technical requirements."],
  },
  {
    id: 3,
    title: "3. Wireframe & UX Planning",
    points: [
      "Plan user flows, wireframes, and intuitive navigation structures.",
    ],
  },
  {
    id: 4,
    title: "4. Custom Theme Design & Shopify Setup",
    points: ["Design a tailored theme and configure Shopify for your store."],
  },
  {
    id: 5,
    title: "5. Product Setup & Collection Structuring",
    points: [
      "Organize products, collections, and categories for easy browsing.",
    ],
  },
  {
    id: 6,
    title: "6. Third-party App Integration & Automation",
    points: [
      "Integrate apps for payments, shipping, marketing, and automation.",
    ],
  },
  {
    id: 7,
    title: "7. Mobile & SEO Optimization",
    points: ["Ensure mobile responsiveness and SEO-friendly design."],
  },
  {
    id: 8,
    title: "8. Performance & Security Testing",
    points: ["Run speed checks, QA, and security audits for reliability."],
  },
  {
    id: 9,
    title: "9. Client Review & Final Revisions",
    points: ["Incorporate client feedback and polish the final version."],
  },
  {
    id: 10,
    title: "10. Launch & Post-Deployment Support",
    points: ["Deploy the Shopify store and provide ongoing support."],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Client-First Culture",
    cases: [
      "We take time to understand your brand DNA before building your digital storefront.",
    ],
  },
  {
    id: 2,
    title: "Global Portfolio",
    cases: ["Trusted by brands across India, UAE, UK, and the US."],
  },
  {
    id: 3,
    title: "End-to-End Solutions",
    cases: ["From wireframes to launch and post-launch support."],
  },
  {
    id: 4,
    title: "Performance-Driven",
    cases: [
      "Our Shopify development services are optimized for speed, SEO, and sales.",
    ],
  },
  {
    id: 5,
    title: "Organized Project Management",
    cases: ["KPI-led sprints, defined scope, and on-time delivery."],
  },
  {
    id: 6,
    title: "Tech & Creative Synergy",
    cases: ["Our in-house design and dev teams ensure seamless collaboration."],
  },
  {
    id: 7,
    title: "Award-Winning Processes",
    cases: ["Recognized for digital innovation in e-commerce development."],
  },
  {
    id: 8,
    title: "Affordable Packages",
    cases: ["High-quality Shopify development services at scalable pricing."],
  },
];

function HeroServicePage() {
  const fadeUp = (d = 0) => ({
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut", delay: d },
    viewport: { once: true },
  });
  return (
    <>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Shopify Success Engineered by Ayatiworks, <br />
              Your Trusted Shopify Development Agency
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black/80 space-y-6"
            >
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Users experience defines a brand’s success! This is an
                undeniable truth in the digital world.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                That calls for your online store to be way more than just
                functional and offer your customers an unforgettable enjoyable
                experience.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                At Ayatiworks, we combine creativity with conversion to deliver
                Shopify development services that aren’t just beautiful but
                built to perform.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                As the best Shopify development company in Chennai and a trusted
                name across India and global markets, we help businesses create
                stunning, scalable, and sales-ready Shopify stores.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                From custom design and development to third-party integrations
                and performance tuning, our Shopify experts tailor solutions to
                meet your brand vision. We understand business, not just code,
                and we bring that understanding to every line we write.
              </p>
              {/* Button */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left mt-8"
              >
                <MotionLink
                  href="/contact-us"
                  aria-label="Book free consultation with Ayatiworks"
                  className="relative inline-flex bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
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
                  Talk to our Shopify Developers
                </MotionLink>
              </motion.div>
              {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
            </motion.div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/office-member.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Why Ayatiworks is One of the Best Shopify <br /> Development
              Companies
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/sho-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <ul className="space-y-4 text-black/80">
              {motives1.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}
                  <GoDotFill className="text-secondary text-2xl flex-shrink-0 mt-1" />

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Title + Subtitle */}
                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-primary text-secondary block">
                        {motive.title}
                      </span>
                    </div>

                    {/* Case Studies */}
                    <div className="space-y-2 pl-1">
                      {motive.cases.map((caseText, i) => (
                        <div
                          key={i}
                          className="flex items-start text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
                        >
                          <span>{caseText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left mt-8"
            >
              <MotionLink
                href="/contact-us"
                aria-label="Book free consultation with Ayatiworks"
                className="relative inline-flex bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
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
                Ready to elevate your Shopify store with a partner that
                delivers?
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Comprehensive Shopify Development Services
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}

          <div className="text-black/80 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-secondary text-2xl text-left "
            >
              <span className="mb-2 block">
                Whether you’re starting from scratch or looking to scale an
                existing store, Ayatiworks has you covered with:
              </span>
            </motion.h2>
            {[
              "Custom Shopify Development",
              "Shopify Design & Development",
              "Affordable Shopify Development Services",
              "Comprehensive Shopify Website Audit",
              "Third-party API Integration & Automation",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-start gap-2">
                  <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                  <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-left mt-8"
            >
              <MotionLink
                href="/contact-us"
                aria-label="Book free consultation with Ayatiworks"
                className="relative inline-flex bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
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
                Let’s build your high-converting Shopify storefront.
              </MotionLink>
            </motion.div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/sho-2.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Ayati’s Shopify Development Service Approach
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium mb-5">
          At Ayatiworks, Shopify development isn’t a plug-and-play job; it’s a
          process. We bring your brand vision to life through a structured
          10-phase development model, ensuring every element from design to
          deployment is done right.
        </p>
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-center m-10"
        >
          <span className="mb-2 block">
            10-Phase Shopify Development Approach
          </span>
        </motion.h2>
        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md`}
            >
              {/* Step Title */}
              <h3 className=" font-primary text-secondary font-medium text-2xl mb-4">
                {step.title}
              </h3>

              {/* Step Points */}
              <ul className="font-primary text-lg space-y-2 text-black/80">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              How Businesses Benefit with Shopify Development
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}

          <div className="text-black/80 space-y-6">
            {[
              "	2x Faster Time to Market with pre-optimized templates and integrations",
              "	30% Increase in Conversions through UX and SEO-driven design",
              "	99.9% Uptime on cloud-hosted Shopify platforms",
              "	Reduced Dev Time with scalable modular code architecture",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-start gap-2">
                  <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                  <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>

      <AutoImageSlider />
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              What Makes Our 10-Phase Model Stand Out?
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {[
              "Each Shopify project at Ayatiworks moves through ten meticulously planned phases, from understanding your business vision to designing a user-first interface, implementing smart integrations, and launching a lightning-fast, mobile-ready site. ",
              "Every phase builds upon the latter to reduce rework, improve ROI, and ensure on-time delivery. Our phased approach offers full visibility, performance benchmarks, and seamless handoffs between design, development, QA, and go-live.",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <div className="flex items-start gap-2">
                  <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                  <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">Why Work with Ayatiworks?</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[420px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
          {/* Left Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/dev-4.png"
                alt="Ayatiworks UX UI Design Benefits"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-black/80 space-y-8">
            <ul className="space-y-6">
              {[
                "Past clients consistently highlight our organized workflows, KPI tracking, and clarity in scope of work. We define objectives, timelines, and deliverables upfront, and then we get to work. Our Shopify development services are supported by regular updates, milestone checks, and testing at every phase.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <GoDotFill className="text-secondary text-xl flex-shrink-0 mt-1" />
                  <p className="text-base sm:text-lg md:text-lg font-secondary leading-relaxed">
                    {text}
                  </p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
