"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Goal } from "lucide-react";
import Link from "next/link";

import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const motives = [
  {
    id: 1,
    title: "Influencer Identification and Outreach",
    cases: [
      "Success starts with the right influencers. We use advanced tools to assess reach, engagement, audience quality, and niche fit. Once we identify the right creators, we handle communication to ensure alignment, professionalism, and long-term collaboration.",
    ],
  },
  {
    id: 2,
    title: "Campaign Strategy and Execution",
    cases: [
      "Every campaign begins with clear goals, timelines, and platform plans. Our team develops original concepts and manages rollout across platforms like Instagram, YouTube, LinkedIn, and Twitter. From scripting to publishing, every detail reflects your brand's voice.",
    ],
  },
  {
    id: 3,
    title: "Content Creation and Amplification",
    cases: [
      "We co-create content with influencers to keep it authentic and high performing. From unboxing videos to tutorials and reviews, our strategies focus on relevance and virality. We also boost top content using paid media to increase reach.",
    ],
  },
  {
    id: 4,
    title: "Performance Tracking and Reporting",
    cases: [
      "We believe in transparency and results. That’s why we track key metrics like impressions, engagement, clicks, and conversions. You’ll receive detailed reports to help you understand what’s working and shape future campaigns.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Enhanced Brand Credibility",
    cases: [
      "Influencers are trusted voices. By collaborating with creators who genuinely connect with their audience, your brand builds trust that’s hard to achieve with traditional ads. At Ayatiworks, we turn this trust into conversions.",
    ],
  },
  {
    id: 2,
    title: "Targeted Audience Reach",
    cases: [
      "We help you reach the right audience, based on city, language, and interest. By pairing you with influencers who match your customer profile, we ensure every campaign hits the mark.",
    ],
  },
  {
    id: 3,
    title: "Scalable Campaigns",
    cases: [
      "Whether it’s a city-wide launch or a national awareness campaign, our strategies scale to suit your needs. We work with nano-influencers and celebrities alike to meet your brand goals and budget.",
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
            <span className="mb-2 block">
              Ayatiworks - Best Influencer Marketing <br />
              Company in Chennai
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

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black/80 space-y-4 md:space-y-6"
          >
            {/* <p className="text-lg sm:text-xl md:text-3xl text-secondary font-primary">
              Ever felt like your brand is talking, but nobody’s really
              listening?
            </p> */}

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Ayatiworks is a leading influencer marketing company in Chennai,
              known for driving strong brand-influencer collaborations. As
              consumer trust shifts from traditional ads to peer
              recommendations, influencer marketing has become a must-have
              strategy for brands in every industry.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              With deep expertise and a proven approach, Ayatiworks helps
              businesses amplify their message, build real connections, and
              drive measurable results.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Our influencer marketing services are customized to your goals,
              whether you're a startup building awareness or a large brand
              looking to grow engagement.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{
                scale: 1.06,

              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact-us"
                aria-label="Book a free Digital PR marketing consultation"
                className="btn-primary"
              >
                BOOK FREE CONSULTATION TODAY
              </Link>
            </motion.div>
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
            <span className="mb-2 block">
              Why Choose Ayatiworks for Influencer Marketing?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inf-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Replaced bullet paragraph with icon points */}
            <ul className="space-y-3">
              {[
                "Proven Track Record",
                "Tailored Strategies",
                "In-House Influencer Network",
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
              Ayatiworks is among the top influencer marketing agencies in
              Chennai. We’re trusted by brands that value precision, creativity,
              and clear results. Our in-house team includes strategists, content
              creators, and influencer managers who deliver end-to-end campaigns
              that connect.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              With access to a niche network of micro and macro influencers, we
              offer unmatched targeting. Our campaigns are backed by cultural
              insights and data. Whether you’re targeting local or national
              audiences, Ayatiworks ensures your brand is heard by the right
              voices. We’re known in Chennai for our creative, result-driven,
              and accountable influencer marketing services.
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
            <span className="mb-2 block">
              Our Influencer Marketing Services
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
              className="section-title text-xl sm:text-2xl text-left "
            >
              <span className="mb-2 block">
                At Ayatiworks, we offer flexible influencer marketing solutions
                that work for startups, SMEs, and enterprises. Our CAAS (Content
                as a Service) model powers every influencer campaign and digital
                marketing effort, from concept to conversion.
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inf-2.png"
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
              Benefits of Influencer Marketing with Ayatiworks
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inf-3.png"
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
              className="section-title text-xl sm:text-2xl text-left "
            >
              <span className="mb-2 block">
                Collaborating with Ayatiworks (https://ayatiworks.com/) opens
                doors to greater engagement, trust, and conversions. We don’t
                just run campaigns; we create brand stories that drive results.
                Our strategies deliver better ROI, faster traction, and lasting
                impact.
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

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Influencer marketing isn’t limited to fashion and beauty.
              Ayatiworks drives results across a wide range of industries
              including retail, FMCG, real estate, fintech, education,
              healthcare, and lifestyle. We understand industry nuances and
              build campaigns accordingly.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              For FMCG clients, we leverage food and parenting influences to
              drive trial and trust. For real estate brands, we collaborate with
              local lifestyle influencers to boost project visibility. For tech
              and SaaS companies, we partner with creators on LinkedIn and
              YouTube for B2B visibility. Across Chennai and beyond, our
              campaigns are as diverse as the clients we serve.
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inf-2.png"
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
            <span className="mb-2 block">Why Influencer Marketing Matters</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inf-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Influencer marketing is now a core part of digital strategy. It
              helps brands connect authentically in a time when ad fatigue is
              high and algorithm changes make organic reach harder.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Your brand deserves more than mentions, it deserves meaningful
              conversations, lasting authority, and trusted visibility. With our
              Digital PR Services, we help you create a reputation that not only
              grows your audience but also strengthens your position in the
              market.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              Studies show 70% of consumers trust influencer recommendations
              more than ads.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
              In Chennai, where regional content matters, influencer marketing
              is even more important. Ayatiworks helps you make the most of it
              with strategy, creativity, and accountability.
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
