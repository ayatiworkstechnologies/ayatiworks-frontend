"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import { PhoneCall, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "1. Discovery",
    points: ["Analyze your brand’s goals and audience."],
  },
  {
    id: 2,
    title: "2. Planning",
    points: ["Define site structure and features."],
  },
  {
    id: 3,
    title: "3. Design",
    points: ["Create modern, user-friendly mockups."],
  },
  {
    id: 4,
    title: "4. Development",
    points: ["Build responsive, scalable websites."],
  },
  {
    id: 5,
    title: "5. Content Integration",
    points: ["Add SEO-optimized content."],
  },
  {
    id: 6,
    title: "6. Testing",
    points: ["Ensure compatibility across devices."],
  },
  {
    id: 7,
    title: "7. Optimization",
    points: ["Enhance speed and performance."],
  },
  {
    id: 8,
    title: "8. Launch",
    points: ["Deploy the site seamlessly."],
  },
  {
    id: 9,
    title: "9. Training",
    points: ["Equip your team for site management."],
  },
  {
    id: 10,
    title: "10. Maintenance",
    points: ["Provide ongoing updates and support."],
  },
];

const motives2 = [
  {
    id: 1,
    title: "User-Centered Approach",
    cases: [
      "We design around user behavior, ensuring every interaction feels natural.",
    ],
  },
  {
    id: 2,
    title: "Business-Aligned Design",
    cases: ["Our UX/UI aligns with your brand’s goals, not just aesthetics."],
  },
  {
    id: 3,
    title: "Cross-Industry Expertise",
    cases: [
      "From fintech and healthcare to retail and SaaS, we design for multiple business models.",
    ],
  },
  {
    id: 4,
    title: "Agile Design Process",
    cases: [
      "Iterative design sprints ensure faster delivery without compromising quality.",
    ],
  },
  {
    id: 5,
    title: "Scalable Solutions",
    cases: [
      "Whether you’re a startup or enterprise, our designs grow with your business.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Customized Solutions",
    cases: [
      "We craft websites tailored to your brand’s goals, from ecommerce to corporate sites.",
    ],
  },
  {
    id: 2,
    title: "Advanced Technologies",
    cases: [
      "Using React, Node.js, and Shopify, we build scalable, high-performance websites.",
    ],
  },
  {
    id: 3,
    title: "User-Focused Design",
    cases: [
      "Our designs prioritize seamless navigation and engaging user experiences.",
    ],
  },
  {
    id: 4,
    title: "SEO Optimization",
    cases: [
      "We integrate SEO best practices to enhance visibility and drive traffic.",
    ],
  },
  {
    id: 5,
    title: "Continuous Support",
    cases: [
      "Post-launch maintenance ensures your site remains secure and optimized.",
    ],
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
              Top Web Development Services in Chennai
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
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="section-title text-left "
              >
                <span className="mb-2 block">
                  Craft Your Digital Success with Ayatiworks
                </span>
              </motion.h2>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Your brand deserves a website that’s more than just pixels; it
                should be a digital game-changer!
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                A powerful magnet that draws the attention of your target
                audience!
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                As a top web development company in Chennai, Ayatiworks,
                delivers sleek, high-performing websites for businesses in India
                and globally. Specializing in ecommerce website development in
                Chennai, we blend wit, innovation, and strategy to create sites
                that captivate and convert.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                From startups to international brands, our Web Development
                Services and Web Design Services in Chennai turn your vision
                into a digital masterpiece that drives results.
              </p>
              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left mt-8"
              >
                <motion.button
                  className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
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
                  BOOK FREE CONSULTATION TODAY
                </motion.button>
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
              Why Ayatiwork is a Leading Web Development Company in Chennai
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/dev-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Ayatiworks stands out as a premier web development company in
              Chennai, delivering transformative websites that drive business
              growth. Our expertise in ecommerce website development in Chennai
              ensures tailored solutions for online stores, alongside robust
              websites for all industries.
            </p>
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Here’s why we’re the preferred choice:
            </p>
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
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Our approach, inspired by industry leaders, leverages data-driven
              insights to create websites that boost engagement and conversions.{" "}
            </p>
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Whether you need ecommerce website development in Chennai or a
              corporate platform, we ensure your site is a powerful asset. Our
              proven track record with diverse clients highlights our ability to
              deliver measurable results, making Ayatiworks a trusted partner
              for businesses seeking digital excellence.
            </p>
          </div>
        </div>
      </section>
      <section className="section-container py-14 md:py-20">
        {/* === CTA HERO === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-primary text-white"
        >
          {/* soft moving glow */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary to-primary text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* floating glow (decorative) */}
            <motion.div
              aria-hidden="true"
              animate={{ x: ["-15%", "115%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <motion.h2
                {...fadeUp(0)}
                className="text-3xl md:text-4xl lg:text-5xl font-primary font-bold leading-tight"
              >
                Ready to Transform Your Online Presence?
              </motion.h2>

              <motion.p
                {...fadeUp(0.1)}
                className="mt-4 md:mt-5 text-base md:text-lg lg:text-xl font-secondary text-white/90"
              >
                Contact{" "}
                <span className="font-semibold font-secondary">Ayatiworks</span>{" "}
                to build a website that drives success!
              </motion.p>

              <motion.div
                {...fadeUp(0.2)}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                {/* Internal navigation -> Next.js Link */}
                <Link
                  href="/contact-us"
                  aria-label="Contact Ayatiworks"
                  className="inline-flex font-primary items-center gap-2 rounded-full bg-white text-secondary px-5 py-3 text-lg md:text-2xl font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                  prefetch
                >
                  <PhoneCall className="h-5 w-5" />
                  Contact Us
                </Link>

                {/* External link */}
                <a
                  href="https://ayatiworks.com/web-ecommerce/ecommerce-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ecommerce Digital Marketing Service"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-3 text-lg md:text-2xl font-primary font-medium text-white ring-1 ring-white/30 transition hover:bg-white/15 hover:-translate-y-0.5"
                >
                  <ShoppingBag className="h-6 w-6" />
                  Ecommerce Marketing Service
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* === OBJECTIVE BLOCK === */}
        <div className="mt-14 md:mt-20">
          <motion.h3
            {...fadeUp(0)}
            className="section-title font-primary font-medium text-left"
          >
            What is the Objective of a Website for Your Business?
          </motion.h3>

          <motion.div
            {...fadeUp(0.1)}
            className="mt-4 inline-flex items-center font-primary gap-2 rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-2 text-secondary"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="text-lg md:text-xl">
              Define your goal and let’s execute it.
            </span>
          </motion.div>
        </div>

        {/* === MINI CTA (ECOMMERCE) === */}
        <motion.div
          {...fadeUp(0.15)}
          className="mt-10 rounded-2xl border border-secondary/20 bg-white p-6 md:p-8 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
            <div>
              <h4 className="text-xl md:text-3xl font-primary font-medium text-secondary">
                Launch Your Ecommerce Website Today!
              </h4>
              <p className="mt-1 font-secondary text-black/80">
                Partner with Ayatiworks for a site that delivers results.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="https://ayatiworks.com/web-ecommerce/ecommerce-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg md:text-2xl font-primary rounded-full bg-secondary px-5 py-3 text-white font-medium shadow-md hover:shadow-lg transition hover:-translate-y-0.5"
              >
                <ShoppingBag className="h-5 w-5" />
                Explore Ecommerce Service
              </a>

              {/* Internal navigation -> Link */}
              <Link
                href="/contact-us"
                aria-label="Contact Ayatiworks"
                className="inline-flex font-primary items-center gap-2 rounded-full bg-white text-secondary px-5 py-3 text-lg md:text-2xl font-medium shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                prefetch // optional: let Next prefetch this route
              >
                <PhoneCall className="h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
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
              Ayatiworks’ 10-Phase Digital Web Development Approach
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
          Ayatiworks delivers strategic, user-centric web development, including
          ecommerce website development in Chennai. Our 10-phase process ensures
          tailored, high-impact websites that drive engagement and growth.
        </p>

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
        <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium mt-5">
          Ayatiworks’ 10-phase process ensures seamless web development. We
          analyze your needs, plan a strategic structure, and design engaging
          mockups. Development uses modern tech, followed by SEO-optimized
          content integration and rigorous testing. Optimization ensures fast
          load times, and after a smooth launch, we provide training and ongoing
          support to keep your site performing at its best.
        </p>
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
              Facts and Figures: <br />
              Benefits of Web Development
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
              "Professional websites increase conversions by 50% (Forrester, 2025). ",
              "A well-designed site boosts credibility, with 75% of users judging brands by their website (Stanford Web Credibility Research). ",
              "Ayatiworks, a top web development company in Chennai, drives 20% more traffic through SEO and improves retention by 40% with intuitive designs, especially for ecommerce website development in Chennai.",
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/dev-2.png"
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
              What Does Web Development Involve?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/dev-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {[
              "Web development includes front-end (user interface), back-end (server-side logic), and full-stack development. ",
              "Ayatiworks excels in ecommerce website development in Chennai, using React, Node.js, Shopify, and WordPress for responsive, scalable sites. ",
              "We integrate AI chatbots, PWAs, and headless CMS for seamless, modern experiences, ensuring brands engage audiences effectively.",
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

      <AutoImageSlider />
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
                "As a leading web development company in Chennai, Ayatiworks delivers websites that blend stunning design with robust functionality. ",
                "Our past clients vouch for our ability to create platforms that make bold brand statements. ",
                "We prioritize user immersion, seamless tech interfaces, and modern aesthetics to ensure your website is a powerful business tool.",
                "We strongly believe development must be imbibed with long-term planning so that it will support the brand in the long run.",
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
                  <p className="text-base sm:text-lg md:text-xl font-secondary leading-relaxed">
                    {text}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl font-secondary leading-relaxed text-black/80 border-l-4 border-secondary pl-4 italic"
            >
              Our collaborative approach ensures your brand’s voice is reflected
              in every pixel, while our design systems allow for long-term
              scalability and consistency across platforms.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
