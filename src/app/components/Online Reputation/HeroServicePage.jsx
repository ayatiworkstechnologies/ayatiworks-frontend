"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import {
  ShieldCheck,
  Star,
  Search,
  AlertTriangle,
  Megaphone,
  UserCircle2,
  MessageSquare,
  Scale,
  FileSpreadsheet,
  Radar,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "1. Discover",
    points: ["Align goals, risk profile, and target audiences."],
  },
  {
    id: 2,
    title: "2. Audit",
    points: ["Map SERPs, reviews, mentions, and media gaps."],
  },
  {
    id: 3,
    title: "3. Strategy",
    points: ["Define narrative, proof points, laddered messages."],
  },
  {
    id: 4,
    title: "4. Foundations",
    points: ["Fix profiles, schema, bios, and brand assets."],
  },
  {
    id: 5,
    title: "5. Content",
    points: ["Build authoritative pages, FAQs, and thought leadership."],
  },
  {
    id: 6,
    title: "6. Reviews",
    points: ["Implement compliant generation and response systems."],
  },
  {
    id: 7,
    title: "7. Outreach",
    points: ["Pitch angles to prioritized journalists and creators."],
  },
  {
    id: 8,
    title: "8. Crisis Ready",
    points: ["Approvals, playbooks, and monitoring thresholds."],
  },
  {
    id: 9,
    title: "9. Amplify",
    points: ["Repurpose coverage across site, email, and social."],
  },
  {
    id: 10,
    title: "10. Measure",
    points: ["Track trust signals, SOV, traffic, leads, and sentiment."],
  },
];

const items = [
  {
    title: "Reputation Monitoring & Listening",
    desc: "Always-on monitoring across web, social, forums, app stores, and review sites. We detect spikes, identify patterns, and surface insights that inform product, service, and messaging.",
    icon: ShieldCheck,
  },
  {
    title: "Review & Ratings Management",
    desc: "Systematic review generation, response frameworks, and escalation paths. We craft empathetic replies, request revisions when appropriate, and turn happy customers into advocates.",
    icon: Star,
  },
  {
    title: "Search Results Shaping (SERP Management)",
    desc: "We strengthen owned and earned assets , site content, knowledge panels, profiles, and partner pages , so positive, high-authority pages dominate page one and push down unhelpful or outdated results.",
    icon: Search,
  },
  {
    title: "Crisis Preparedness & Response",
    desc: "Playbooks, approvals, and spokesperson training before you need them; rapid messaging, triage, and media coordination if an incident occurs. Transparency first , then recovery and rebuild.",
    icon: AlertTriangle,
  },
  {
    title: "Media Outreach & Earned Coverage",
    desc: "Story mining, angle development, and targeted pitching. We secure articles, interviews, features, bylines, and podcast appearances , then amplify coverage across channels.",
    icon: Megaphone,
  },
  {
    title: "Thought Leadership & Executive Visibility",
    desc: "Ghostwritten bylines, commentary on breaking trends, data-led reports, and event placements. Leaders become trusted sources, strengthening credibility and deal velocity.",
    icon: UserCircle2,
  },
  {
    title: "Social Narrative Management",
    desc: "Editorial calendars, issue mapping, and community management to keep the day-to-day narrative aligned with brand values , and ready to respond when conversations spike.",
    icon: MessageSquare,
  },
  {
    title: "Governance, Compliance & Training",
    desc: "Response hierarchies, approval flows, and message banks that meet legal/regulatory requirements. Teams are trained to handle reviews, press inquiries, and escalations with clarity and empathy.",
    icon: Scale,
  },
  {
    title: "Media Asset Creation & Newsroom",
    desc: "Journalist-ready assets, press kits, bios, fact sheets, data visuals, and b-roll , plus a fast, searchable newsroom so editors can verify details quickly and cover you accurately.",
    icon: FileSpreadsheet,
  },
  {
    title: "Risk & Opportunity Radar",
    desc: "Trend scans and competitive monitoring that flag narratives gaining traction, spokespeople to position, and moments to avoid. Delivered as a weekly heat map with defensive/offensive plays.",
    icon: Radar,
  },
];

const motives = [
  {
    id: 1,
    title: "Reputation Essentials",
    cases: [
      "For brands needing reliable monitoring, reviews, and SERP hygiene. Clear playbooks, monthly insights, and steady review growth.",
    ],
  },
  {
    id: 2,
    title: "Reputation + Media Growth",
    cases: [
      "Adds proactive earned media, executive visibility, and amplification. Ideal for challengers and category leaders expanding share of voice.",
    ],
  },
  {
    id: 3,
    title: "Enterprise Reputation Command",
    cases: [
      "Full-stack program: global monitoring, multilingual response, crisis simulations, analyst relations, and integrated communications with legal and HR.",
      "Each engagement includes an onboarding workshop, monthly retrospectives, and quarterly recalibration against market shifts.",
      "For multi-market brands, we coordinate regional nuance, language, and legal considerations, while preserving a single global narrative.",
    ],
  },
];
const motives1 = [
  {
    id: 1,
    title: "Enterprise SaaS (B2B)",
    cases: [
      "Problem: negative legacy articles and fragmented executive bios.",
      "Action: thought-leadership series, analyst quotes, and optimized profiles.",
      "Result: clean page-one SERP and shorter sales cycles.",
    ],
  },
  {
    id: 2,
    title: "Consumer Healthcare (B2C)",
    cases: [
      "Problem: inconsistent clinic reviews across cities.",
      "Action: review generation and response framework.",
      "Result: average rating moved from 3.6 to 4.5, with appointment conversions up double digits.",
    ],
  },
  {
    id: 3,
    title: "D2C Beauty",
    cases: [
      "Problem: social rumor causing cancellations.",
      "Action: rapid FAQ content, influencer clarifications, and media briefings.",
      "Result: sentiment recovered within two weeks; subscription churn reversed.",
    ],
  },
];

function HeroServicePage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.1 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };
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
              Online Reputation & Media Outreach Services
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
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-3xl text-secondary font-primary text-left"
              >
                <span className="mb-2 block">
                  When Perception Becomes Reality
                </span>
              </motion.h2>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                A single comment can snowball into a headline. A five-star
                streak can lift conversions overnight. In a click-first world,
                reputation is the fastest filter customers use to decide if
                you’re worth their time. If search results feel messy, reviews
                go unanswered, or your story isn’t being told in credible
                places, growth stalls. Our approach pairs online reputation
                management with relationship-led media outreach to make sure
                your brand looks as good as it performs. We defend what you’ve
                built and amplify what deserves the spotlight before, during,
                and after every critical moment.
              </p>
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-3xl text-secondary font-primary text-left"
              >
                <span className="mb-2 block">
                  What These Services Actually Cover
                </span>
              </motion.h2>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Online Reputation Management (ORM) keeps your digital footprint
                accurate, positive, and discoverable. We monitor mentions,
                manage ratings, and shape search results with authoritative
                content. Media Outreach earns visibility where it counts,
                industry publications, digital newsrooms, niche blogs, podcasts,
                and analysts. Together, they create a feedback loop: stronger
                reputation drives better coverage; better coverage strengthens
                search visibility and trust.
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
            className="section-title text-left"
          >
            <span className="mb-2 block">Who Benefits and How</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Card Grid like in the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-bold text-secondary mb-3">
              B2B Brands
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              Complex deals hinge on perceived risk. We build executive
              authority, place thought leadership, and maintain clean SERPs so
              procurement, boards, and analysts see proof of reliability.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-bold text-secondary mb-3">
              B2C Brands
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              Purchase decisions are emotional and immediate. We grow positive
              reviews, address criticism fast, and place stories in consumer
              media to boost trust, rankings, and conversion.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-bold text-secondary mb-3">
              D2C Brands
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              Communities and creators move markets. We collect UGC, manage
              social sentiment, and secure lifestyle coverage that compounds:
              more trust → more sales → more reviews → more trust.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="section-container py-12">
        {/* H2 */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">Core Services</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[200px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6"
        >
          {items.map(({ title, desc, icon: Icon }, i) => (
            <motion.article
              key={title}
              variants={card}
              className="group relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition
                       hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Accent top border */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-secondary/60 to-transparent opacity-70" />

              {/* Icon */}
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 group-hover:bg-secondary/15 transition">
                <Icon className="h-8 w-8 text-secondary" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-2xl sm:text-3xl font-primary font-medium text-primary">
                {i + 1}. {title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm sm:text-base text-black/80 leading-relaxed font-secondary">
                {desc}
              </p>
            </motion.article>
          ))}
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
            <span className="mb-2 block">Benefits You Can Expect</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/oni-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {[
              "Higher trust at every touchpoint  ,  search, social, and media.",
              "Better rankings as authoritative coverage and reviews boost E-E-A-T signals.",
              "Faster sales cycles; fewer objections; improved win rates.",
              "Resilience during incidents due to prepared responses and clear ownership.",
              "Share of voice gains in categories crowded with lookalike promises.",
              "Measurable uplift in branded search, referral traffic, and conversion.",
              "Stronger hiring brand and partner confidence.",
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
              Program & Process - Our 10-Step Card Model
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

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
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Measurement, Reporting & Tech Stack
            </span>

            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            {[
              "Dashboards track review velocity, star averages, SERP composition, share of voice, media placements, referral traffic, and assisted conversions. We interpret the “why” behind the charts , what triggered movement, what to double down on, and what to pause.",
              "Tooling may include brand mention trackers, review platforms, PR databases, newsroom distributions, and analytics suites. Reports are written in plain language with clear next steps, not just numbers.",
              "We align metrics to business outcomes for each model. B2B programs map media and reputation lifts to pipeline velocity, win rates, and deal size. B2C and D2C programs review health and share of voice to add-to-cart rate, repeat purchase, and lifetime value. For all, we annotate major events so that cause and effect are clear in hindsight.",
            ].map((text, i) => (
              <div key={i} className="space-y-2">
                <p className="flex items-center gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl flex-shrink-0 mt-0.5" />
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/oni-2.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
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
            <span className="mb-2 block">Engagement Options</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/oni-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <ul className="space-y-4 text-black/80">
              {motives.map((motive) => (
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
            <span className="mb-2 block">Mini Case Snapshots</span>

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
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/oni-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
