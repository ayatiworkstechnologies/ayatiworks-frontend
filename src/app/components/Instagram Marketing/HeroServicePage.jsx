"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    points: [
      "According to Statista, India ranks #1 globally for Instagram usage as of 2025. With a massive, mobile-first audience, Indian brands can:",
    ],
  },
  {
    id: 2,
    points: ["Reach and influence purchase decisions in real time"],
  },
  {
    id: 3,
    points: [" Tap into younger demographics across Tier 1, 2, and 3 cities"],
  },
  {
    id: 4,

    points: ["Launch trend-based campaigns with viral potential"],
  },
];
const steps1 = [
  {
    id: 1,
    points: ["Data-driven audience targeting"],
  },
  {
    id: 2,
    points: ["Hyperlocal campaign creation"],
  },
  {
    id: 3,
    points: [" Advanced Reels and Stories content marketing"],
  },
  {
    id: 4,

    points: ["Retargeting and sales funnel alignment"],
  },
];
const Phase = [
  "Phase 1 - Discovery Call & Brand Persona Study",
  "Phase 2 - Audience Mapping & Competitor Analysis",
  "Phase 3 - Content Pillars and Grid Planning",
  "Phase 4 - Creative Design & Caption Crafting",
  "Phase 5 - Influencer and Collaboration Strategy",
  "Phase 6 - Reels, Storyboards & Video Content Creation",
  "Phase 7 - Ad Setup: Targeting & Budget Allocation",
  "Phase 8 - Calendar Publishing & Peak Hour Scheduling",
  "Phase 9 - Weekly Reporting & Engagement Optimization",
  "Phase 10 - Monthly Performance Review & Strategy Reset",
];

function HeroServicePage() {
  return (
    <>
      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Best Instagram Marketing Agency in Chennai
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black/80 space-y-6"
          >
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Are your customers scrolling past your brand on Instagram? If
              you’ve studied your audience and built detailed buyer personas,
              then you already know where they’re spending their time, on
              Instagram.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              With over 360 million users in India alone, Instagram has evolved
              into more than just a social platform.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              It’s a dynamic business tool.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              As your brand grows, your Instagram strategy must do more than
              just post; it must perform.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              That’s where Ayatiworks steps in.
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
          </motion.div>

          {/* Right - Sticky Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="sticky top-20">
              <motion.img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/office-member.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
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
              Why Ayatiworks is the Best Instagram Marketing <br />
              Agency in Chennai
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[300px] mt-3 origin-left rounded-full"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/insta-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Ayatiworks, after successfully delivering campaigns for
                  premium clients like Volvo, Nippo, and MI Xiaomi, has
                  established itself as the best Instagram marketing agency in
                  Chennai, with capabilities to serve both Indian and
                  international clients. We understand the nuances of B2B, B2C,
                  and D2C spaces, and tailor content strategies that engage,
                  educate, and convert.
                </p>
              </div>
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
              What Ayatiworks Can Do for Your Business ?
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
            <div className="space-y-6">
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Curate high-impact visual content and stories that align with
                  your brand tone
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Strategize targeted ad campaigns to maximize ROI
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Collaborate with micro/macro influencers to amplify reach
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Build content calendars aligned to product drops and business
                  goals
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Offer real-time analytics and optimization for performance
                  growth
                </p>
              </div>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/insta-2.png"
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
              Why Businesses in India Should Use <br /> Instagram Marketing
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <h3 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed mb-4">
          According to Statista, India ranks #1 globally for Instagram usage as
          of 2025. With a massive, mobile-first audience, Indian brands can: 
        </h3>
        <img
          src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/inst-banner.png"
          alt="Email Service"
          className="w-full h-auto object-cover mb-2"
        />

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md `}
            >
              {/* Step Points */}
              <ul className="font-primary text-lg space-y-2 text-black/80">
                {step.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="py-10">
          <h3 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed mb-4">
            Ayatiworks enables brands to unlock Instagram’s full potential
            through:
          </h3>
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps1.map((step) => (
              <div
                key={step.id}
                className={`bg-white shadow-md border border-gray-200 p-6 rounded-md `}
              >
                {/* Step Points */}
                <ul className="font-primary text-lg space-y-2 text-black/80">
                  {step.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
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
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Ayati’s 10-Phase Instagram Marketing Approach
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
          {Phase.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md border border-gray-200 p-6 rounded-md hover:shadow-lg transition"
            >
              <p className="font-primary text-lg text-black/80">{phase}</p>
            </motion.div>
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
              Instagram Business Profiles are Now Showing Up on Google
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
            {/* Intro Paragraph */}

            <p className="text-base/7 sm:text-lg/9 md:text-lg/9 text-black/80 font-secondary font-medium">
              Instagram business profiles are now eligible to appear in Google
              Search listings; this major update enhances discoverability and
              drives organic traffic beyond the platform. Businesses that
              optimize their bios, include keywords, and consistently post
              valuable content can gain visibility not only inside the app but
              also through search engines.
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed">
              Ayatiworks leverages this trend by:
            </h2>
            <div className="space-y-2">
              {/* ✅ Title with Icon */}
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Optimizing business bios for searchability
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Using local SEO techniques in captions and hashtags
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Enhancing brand authority through cross-platform visibility
              </p>
            </div>

            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/insta-3.png"
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
              Why Team Up with Ayatiworks for Instagram Marketing?
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
            {/* Intro Paragraph */}
            <div className="space-y-2">
              {/* ✅ Title with Icon */}
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Full-Funnel Approach - From impressions to conversions, we cover
                every step.
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Creative + Data Synergy - Every campaign is powered by insights
                and creativity.
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Global-Ready Campaigns - We understand audiences in India, UAE,
                US, and more.
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Dedicated Instagram Specialists - A team that lives and breathes
                the algorithm.{" "}
              </p>
              <p className="flex items-center gap-2 text-base sm:text-lg md:text-lg text-black/80 font-secondary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Proven Track Record - Campaigns that convert, content that
                clicks.{" "}
              </p>
            </div>

            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/insta-4.png"
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
