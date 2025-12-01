"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Goal } from "lucide-react";

import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Brand Discovery",
    points: ["Understanding your story, values, and goals."],
  },
  {
    id: 2,
    title: "2. Audience Profiling",
    points: ["Mapping stakeholders, customer personas, and media contacts."],
  },
  {
    id: 3,
    title: "3. Message Crafting",
    points: ["Designing narratives that connect with audience needs."],
  },
  {
    id: 4,
    title: "4. Channel Strategy",
    points: ["Selecting the right platforms (media, influencers, social)."],
  },
  {
    id: 5,
    title: "5. Campaign Execution",
    points: ["Launching outreach with targeted precision."],
  },
  {
    id: 6,
    title: "6. Monitoring & Listening",
    points: ["Tracking mentions, sentiment, and media coverage."],
  },
  {
    id: 7,
    title: "7. Crisis Readiness",
    points: ["Preparing frameworks for rapid response."],
  },
  {
    id: 8,
    title: "8. Measurement & Reporting",
    points: ["Delivering data-backed insights on performance."],
  },
];

const motives = [
  {
    id: 1,
    cases: [
      "Traditional PR is slow, Digital PR is instant. A single tweet, article, or influencer video can spread your story to thousands within minutes.",
    ],
  },
  {
    id: 2,
    cases: [
      "Visibility drives credibility. The more often your audience sees your brand in trusted media outlets, the more likely they are to believe in your authority.",
    ],
  },
  {
    id: 3,
    cases: [
      "SEO meets PR. Modern PR campaigns are designed not just to get media mentions but also to secure backlinks that improve search rankings.",
    ],
  },
  {
    id: 4,
    cases: [
      "Crisis travels faster online. A small issue can become viral within hours. Digital PR helps you monitor conversations and respond quickly to safeguard your reputation.",
    ],
  },
  {
    id: 5,
    cases: [
      "Audiences are fragmented. Some prefer video on YouTube, others trust LinkedIn articles, and many rely on Google search. Digital PR ensures your presence across multiple channels.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Enhanced Brand Visibility",
    cases: [
      "Your brand appears where your audience spends time: online media outlets, digital publications, and social platforms. This increased visibility boosts recognition.",
    ],
  },
  {
    id: 2,
    title: "Improved Search Engine Rankings",
    cases: [
      "PR-generated backlinks from authority sites signal credibility to search engines. The result? Higher rankings and better organic traffic.",
    ],
  },
  {
    id: 3,
    title: "Stronger Online Reputation",
    cases: [
      "Digital PR crafts a positive brand image by ensuring accurate, consistent, and engaging narratives across media.",
    ],
  },
  {
    id: 4,
    title: "Targeted Audience Reach",
    cases: [
      "Unlike traditional PR, digital campaigns can be tailored for specific demographics, industries, or geographies. This ensures higher relevance and ROI.",
    ],
  },
  {
    id: 5,
    title: "Crisis Control & Trust Management",
    cases: [
      "Quick monitoring and response mechanisms prevent small issues from escalating into full-blown reputational crises.",
    ],
  },
  {
    id: 6,
    title: "Thought Leadership Development",
    cases: [
      "Publishing expert commentary, guest articles, and opinion pieces positions your brand leaders as authorities in their industry.",
    ],
  },
  {
    id: 7,
    title: "Measurable ROI",
    cases: [
      "Through analytics, impressions, engagement rates, and backlinks, you can track how your PR efforts contribute to business goals.",
    ],
  },
];

const motives2 = [
  {
    id: 1,
    title: "Media Outreach & Online Coverage",
    cases: [
      "We connect your brand with top journalists, digital editors, and bloggers to secure high-quality placements in industry-relevant publications.",
    ],
  },
  {
    id: 2,
    title: "Influencer & Thought Leader Partnerships",
    cases: [
      "Our campaigns leverage influencers and niche thought leaders who resonate with your audience, ensuring authentic visibility and engagement.",
    ],
  },
  {
    id: 3,
    title: "Digital Storytelling & Content PR",
    cases: [
      "Every brand has a story worth telling. We craft engaging digital-first narratives , articles, press releases, videos , that resonate across platforms.",
    ],
  },
  {
    id: 4,
    title: "Crisis Communication Management",
    cases: [
      "When challenges arise, we act fast to contain misinformation, rebuild trust, and safeguard brand credibility.",
    ],
  },
  {
    id: 5,
    title: "Link Building through PR",
    cases: [
      "Our PR-driven SEO approach earns natural, high-authority backlinks from credible online sources to support long-term ranking success.",
    ],
  },
  {
    id: 6,
    title: "Corporate Reputation Management",
    cases: [
      "We help brands maintain consistent messaging, manage stakeholder communication, and build trust across digital touchpoints.",
    ],
  },
];
const motives3 = [
  {
    id: 1,
    title: "B2B",
    cases: [
      "Positioning firms as industry leaders through thought leadership and media credibility.",
    ],
  },
  {
    id: 2,
    title: "B2C",
    cases: [
      "Amplifying visibility with influencer-driven campaigns and media outreach.",
    ],
  },
  {
    id: 3,
    title: "D2C & E-Commerce",
    cases: [
      "Driving product awareness and customer trust through online reviews and targeted placements.",
    ],
  },
];
const motives4 = [
  {
    id: 1,
    title: "Data-Backed Campaigns",
    cases: ["Every action is guided by analytics and performance metrics."],
  },
  {
    id: 2,
    title: "Agile Execution",
    cases: ["From crisis communication to viral campaigns, we adapt quickly."],
  },
  {
    id: 3,
    title: "Creative Storytelling",
    cases: ["We craft narratives that stick in the minds of your audience."],
  },
  {
    id: 4,
    title: "ROI-Driven Approach",
    cases: [
      "Our ultimate goal is to ensure visibility translates into trust, and trust into growth.",
    ],
  },
];

function HeroServicePage() {
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
            <span className="mb-2 block">Digital PR Services in Chennai</span>

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

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black/80 space-y-4 md:space-y-6"
          >
            <p className="text-lg sm:text-xl md:text-3xl text-secondary font-primary">
              Ever felt like your brand is talking, but nobody’s really
              listening?
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              You post on social media, run ads, maybe even get mentioned once
              in a while, but the spotlight fades quickly.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              In today’s hyper-connected world, attention is fleeting, trust is
              fragile, and one negative comment can echo louder than months of
              effort.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              That’s where Digital PR comes in. Think of it as the bridge
              between how you want to be seen and how people actually perceive
              you. It’s not about throwing press releases into the void or
              chasing vanity mentions, it’s about crafting stories that people
              want to share, securing visibility where it matters, and building
              credibility that lasts.
            </p>

            {/* Replaced bullet paragraph with icon points */}
            <ul className="space-y-3">
              {[
                "Imagine a startup with a brilliant idea struggling to be noticed.",
                "An established brand facing whispers of bad press.",
                "An e-commerce business buried under competitors on Google.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Goal
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                    size={18}
                  />
                  <span className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              These aren’t isolated struggles; they’re everyday realities in the
              digital landscape. And the brands that rise above? They’re the
              ones using Digital PR strategically.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Digital PR weaves together storytelling, SEO, and reputation
              management so your brand isn’t just another name online , it becomes
              a trusted voice, a familiar presence, and a thought leader.
              Instead of just chasing clicks, Digital PR builds relationships,
              authority, and loyalty.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              If you’re tired of shouting into the void and ready to become a
              name people notice, respect, and remember, Digital PR Services are
              your answer.
            </p>

            {/* CTA */}
            <motion.a
              href="/contact-us"
              aria-label="Book a free Digital PR marketing consultation"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.06,
                boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center bg-secondary/90 hover:bg-secondary text-white
                   font-primary text-lg md:text-xl font-medium py-3 px-8 md:px-10 rounded-full shadow-md
                   hover:shadow-xl transition-all duration-300 mt-6"
            >
              BOOK FREE CONSULTATION TODAY
            </motion.a>
          </motion.div>

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
            <span className="mb-2 block">Why Digital PR Matters Today</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pr-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              The digital-first world has reshaped how brands communicate and
              connect with stakeholders. Customers no longer wait for newspaper
              articles or TV coverage; they expect real-time updates, authentic
              stories, and meaningful interactions.
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                This shift makes Digital PR essential, not optional. Here’s why:
              </span>
            </motion.h2>

            <ul className="space-y-4 text-black/80">
              {motives.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}
                  <GoDotFill className="text-secondary text-2xl flex-shrink-0 mt-1" />

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Title + Subtitle */}

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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              In short, Digital PR aligns brand storytelling with consumer
              behavior in today’s connected landscape. It’s not just about
              getting coverage; it’s about being part of the right conversations
              at the right time.
            </p>
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
            <span className="mb-2 block">Benefits of Digital PR</span>

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
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                A well-structured Digital PR campaign does more than secure a
                headline, it creates long-term brand equity. Here are the top
                benefits:
              </span>
            </motion.h2>

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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Digital PR is more than a marketing function; it’s a strategic
              growth driver. It strengthens not just what people see, but also
              what they believe about your brand.
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pr-2.png"
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
            <span className="mb-2 block">Our Digital PR Service Offerings</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pr-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                We design our services to fit brands of all sizes and
                industries. Here’s what we offer:
              </span>
            </motion.h2>

            <ul className="space-y-4 text-black/80">
              {motives2.map((motive) => (
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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              From building awareness for a new product launch to repositioning
              an established business, our tailored Digital PR Services ensure
              your brand’s voice is heard and respected.
            </p>
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
            className="section-title text-left"
          >
            <span className="mb-2 block">Our 8-Step Digital PR Process</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Subtitle */}
        <h3 className="font-primary text-secondary font-medium text-2xl mb-4">
          Our structured yet flexible process ensures PR strategies are not just
          creative but also effective:
        </h3>

        {/* Intro Paragraph */}
        {/* <p className="text-base sm:text-lg md:text-xl text-black/80 mt-4 font-secondary font-medium leading-relaxed">
          Our 10-phase process ensures culturally relevant, high-impact
          campaigns that drive engagement and growth.
        </p> */}

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-md border border-gray-200 p-6 rounded-md"
            >
              {/* Step Title */}
              <h4 className="font-primary text-secondary font-medium text-xl mb-4">
                {step.title}
              </h4>

              {/* Step Points */}
              <ul className="font-secondary text-base sm:text-lg space-y-2 text-black/80 leading-relaxed">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Closing Paragraph */}
        <div className="text-left mt-12">
          <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed">
            Each step is designed to balance creativity with accountability,
            ensuring your PR campaigns are impactful and measurable.
          </p>
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
            <span className="mb-2 block">Industries We Serve </span>

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
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                Our Digital PR expertise spans across:
              </span>
            </motion.h2>

            <ul className="space-y-4 text-black/80">
              {motives3.map((motive) => (
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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              We tailor every campaign to industry nuances, ensuring maximum
              relevance and results.
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pr-2.png"
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
            <span className="mb-2 block">Why Choose Us </span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pr-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                Digital PR is crowded, but our difference lies in strategy,
                personalization, and measurable outcomes. We don’t just secure
                media mentions, we ensure each campaign connects back to your
                core business objectives.
              </span>
            </motion.h2>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Integrated Expertise: We blend PR, SEO, and digital marketing for
              holistic results.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Your brand deserves more than mentions, it deserves meaningful
              conversations, lasting authority, and trusted visibility. With our
              Digital PR Services, we help you create a reputation that not only
              grows your audience but also strengthens your position in the
              market.
            </p>
            <ul className="space-y-4 text-black/80">
              {motives4.map((motive) => (
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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              When you choose us, you gain a partner who treats your brand
              reputation as our most important campaign.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Ready to amplify your brand story?
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Let’s start building your digital reputation today.
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
                Claim Your Digital PR Strategy Session Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
