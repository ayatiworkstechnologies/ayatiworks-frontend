"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import { PhoneCall, ShoppingBag, ArrowRight } from "lucide-react";
import { ShieldCheck, Zap, TrendingUp, AlertTriangle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "1. Website Health Check",
    points: ["Regularly review overall site functionality and performance."],
  },
  {
    id: 2,
    title: "2. Security Audit & Backup Setup",
    points: ["Implement backups and monitor vulnerabilities to ensure safety."],
  },
  {
    id: 3,
    title: "3. Speed & Performance Optimization",
    points: ["Optimize loading times, caching, and server performance."],
  },
  {
    id: 4,
    title: "4. Broken Link & Error Monitoring",
    points: ["Identify and fix 404 errors, broken links, and missing assets."],
  },
  {
    id: 5,
    title: "5. CMS & Plugin Updates",
    points: ["Keep CMS platforms, plugins, and extensions updated."],
  },
  {
    id: 6,
    title: "6. Content & Image Updates",
    points: ["Refresh text, visuals, and media to stay current and relevant."],
  },
  {
    id: 7,
    title: "7. Mobile & Cross-Browser Testing",
    points: [
      "Ensure site consistency and usability across devices and browsers.",
    ],
  },
  {
    id: 8,
    title: "8. Technical SEO Monitoring",
    points: ["Track indexing, metadata, schema, and on-page optimizations."],
  },
  {
    id: 9,
    title: "9. Analytics Review & Reporting",
    points: ["Analyze traffic, engagement, and conversion data for insights."],
  },
  {
    id: 10,
    title: "10. Continuous Improvement & Support",
    points: ["Provide proactive updates, fixes, and long-term assistance."],
  },
];
const stats = [
  {
    icon: AlertTriangle,
    value: "88%",
    desc: (
      <>
        <a
          href="https://www.forbes.com/advisor/business/internet-marketing/#:~:text=User%2DFriendly%20Website%20Design,to%20nail%20your%20website%20design"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-secondary hover:text-secondary/80"
        >
          of users won’t return after a bad web experience{" "}
        </a>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    value: "56%",
    desc: "of hacks target outdated websites.",
  },
  {
    icon: TrendingUp,
    value: "40%",
    desc: "higher conversions on regularly maintained sites.",
  },
  {
    icon: Zap,
    value: "100%",
    desc: "loss in digital campaigns with poorly maintained sites.",
  },
];

const motives1 = [
  {
    id: 1,
    title: "Fast Turnaround",
    cases: ["From bug fixes to content updates, our team responds swiftly."],
  },
  {
    id: 2,
    title: "Experienced Team",
    cases: [
      "Web developers, security analysts, and content managers under one roof.",
    ],
  },
  {
    id: 3,
    title: "Platform Agnostic",
    cases: ["WordPress, Shopify, Magento, HTML/CSS - we handle them all."],
  },
  {
    id: 4,
    title: "International Reach",
    cases: [
      "We serve clients not just in Chennai, but across India and overseas.",
    ],
  },
  {
    id: 5,
    title: "Tailored Packages",
    cases: [
      "On-demand, monthly, or yearly - our plans fit your budget and needs.",
    ],
  },
  {
    id: 6,
    title: "Security First",
    cases: [
      "SSL monitoring, malware protection, and regular vulnerability scans.",
    ],
  },
  {
    id: 7,
    title: "SEO Backing",
    cases: [
      "Maintenance plans optimized to preserve or improve your Google rankings.",
    ],
  },
  {
    id: 8,
    title: "Proactive Support",
    cases: ["We fix issues before they impact your users."],
  },
];

const MotionLink = motion(Link);

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: d },
  viewport: { once: true },
});
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
              End-to-End Website Maintenance Services in Chennai by Ayatiworks
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
                Is your website the most important platform to run your
                business?
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Is your business website one of your brand’s identities?
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Is your business your digital storefront?
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Or just simply ask yourself, can your business survive without
                your website?.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                If the answer is No - then think about the steps that you have
                taken to safeguard your website and keep it up to date for your
                customers to enjoy seamless navigation.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                A slow, glitchy, outdated website can put your customers away.
                If you are not in the current trend, your customers will turn
                you down.{" "}
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                That’s why businesses across industries trust Ayatiworks, a
                top-tier website maintenance company in Chennai. We provide
                timely updates, strong security, seamless functionality, and
                round-the-clock technical support, so your website stays smooth,
                secure, and conversion ready.
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
                  BOOK FREE CONSULTATION TODAY
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
              Why Ayatiworks is One of the Best Website Maintenance <br />{" "}
              Companies in Chennai
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              At Ayatiworks, we go beyond basic website support. Here’s what
              sets us apart:
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
              We don’t just create websites. We care for them like they are our
              own.
            </p>

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
                Get in Touch for a Tailored Maintenance Plan
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
              What is the Objective of Having a Website Maintenance Service for
              Your Business?
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
                "A well-maintained website is like a well-oiled machine, always
                running, always converting."
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                The objective of web maintenance is simple yet powerful, to
                ensure your digital presence remains up-to-date, secure, and
                user-friendly. Outdated plugins, slow loading speed, or broken
                links can all impact your brand reputation and revenue. As a
                professional website maintenance company in Chennai, Ayatiworks
                helps you avoid those pitfalls. We create structured maintenance
                strategies to keep your website fresh, functional, and high
                performing.
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
                  Schedule a Free Website Performance Review
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-2.png"
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
              Ayati's Digital Web Maintenance APPROACH
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
          Our streamlined and strategic approach ensures your website works
          flawlessly. We follow a 10-phase web maintenance plan tailored to your
          business goals.
        </p>
        <h3 className="text-lg/7 sm:text-xl/8 md:text-2xl/9 text-secondary font-primary font-medium mb-5">
          10 Phases of Web Maintenance Strategy:
        </h3>
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

        <div className="mb-12 text-center mt-6">
          <motion.h2 {...fadeUp(0)} className="section-title font-primary">
            Facts & Figures
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 mx-auto origin-left rounded-full"
          />
        </div>

        {/* === Stats Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, desc }, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="rounded-2xl bg-white shadow-md hover:shadow-xl transition p-6 text-center border border-secondary/10"
            >
              <div className="flex justify-center mb-4">
                <Icon className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-medium font-primary text-primary mb-2">
                {value}
              </h3>
              <p className="text-sm sm:text-base font-secondary text-black/80 leading-relaxed">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* === Maintenance Summary === */}
        <motion.div {...fadeUp(0.5)} className="mt-14 mx-auto text-center">
          <p className="text-base sm:text-lg md:text-lg font-secondary text-black/80 leading-relaxed">
            Our maintenance begins with a complete health check to assess your
            site’s structure and functionality. We secure your data, optimize
            speed, fix errors, and ensure mobile responsiveness. CMS updates,
            fresh content, and SEO audits keep your site relevant and
            searchable. We use analytics to track performance and offer insights
            for improvement. With ongoing support, your site remains
            future-ready and secure.
          </p>
          <p className="mt-6 text-base sm:text-lg md:text-lg font-secondary text-black/80 leading-relaxed">
            As a{" "}
            <a
              href="https://ayatiworks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-secondary underline hover:text-secondary/80"
            >
              website maintenance company in Chennai, Ayatiworks
            </a>{" "}
            handles every aspect with precision.
          </p>
        </motion.div>
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
              What Does Web Maintenance Involve? <br /> What Are the Types of
              Web Development?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Web maintenance includes regular updates, backups, security scans,
              content changes, speed optimization, and monitoring user behavior.
              Whether your site is built on WordPress, custom HTML, or an
              eCommerce platform, maintenance ensures consistent performance.
              The types of web development we support include front-end,
              back-end, full-stack, eCommerce, and CMS-based websites.
            </p>
            <h3 className="text-lg/7 sm:text-xl/8 md:text-2xl/9 text-secondary font-primary font-medium">
              Latest Technologies Used by Ayatiworks
            </h3>
            <div className="text-black/80 space-y-6">
              {[
                "Cloud-based monitoring tools",
                "AI-powered SEO & security analytics",
                "Progressive Web App integrations",
                "CDN for performance speed-up",
                "Responsive design frameworks (Bootstrap, Tailwind)",
                "Core Web Vitals optimization tools",
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mai-4.png"
                alt="Ayatiworks UX UI Design Benefits"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-black/80 space-y-8">
            <ul className="space-y-6">
              {[
                "Clients vouch for us because we don’t stop at creating websites. We maintain them like digital assets. Whether you need one-time bug fixes or ongoing annual maintenance, we’ve got you covered. From static websites to dynamic eCommerce platforms, we offer on-demand, monthly, and yearly plans for all CMS and tech stacks.",
                "Ayatiworks offers the right blend of speed, scalability, and expertise, making us the go-to website maintenance company in Chennai.",
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
