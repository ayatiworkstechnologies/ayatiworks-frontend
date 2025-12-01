"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Audience Segmentation",
    points: [
      "Define target groups with precision using first-party and third-party data.",
    ],
  },
  {
    id: 2,
    title: "2. Platform Selection",
    points: [
      "Identify best-fit ad exchanges and DSPs for your business model.",
    ],
  },
  {
    id: 3,
    title: "3. Creative Optimization",
    points: [
      "Deliver personalized ad creatives tailored to audience behavior.",
    ],
  },
  {
    id: 4,
    title: "4. Real-Time Bidding (RTB)",
    points: [
      "Automate ad buying to secure the best inventory at the right price.",
    ],
  },
  {
    id: 5,
    title: "5. Omnichannel Integration",
    points: [
      "Run campaigns across display, video, mobile, and social channels.",
    ],
  },
  {
    id: 6,
    title: "6. AI-Powered Insights",
    points: ["Leverage machine learning to optimize targeting and delivery."],
  },
  {
    id: 7,
    title: "7. Fraud Prevention",
    points: ["Ensure ad spend is protected with advanced verification tools."],
  },
  {
    id: 8,
    title: "8. Performance Monitoring",
    points: ["Track KPIs with transparent, real-time reporting dashboards."],
  },
  {
    id: 9,
    title: "9. A/B Testing",
    points: ["Continuously test creatives and strategies for higher ROI."],
  },
  {
    id: 10,
    title: "10. Scalable Growth",
    points: [
      "Expand campaigns while keeping costs efficient and results measurable.",
    ],
  },
];

const steps1 = [
  {
    id: 1,
    title: "B2B / Enterprise",
    points: [
      "ABM against named accounts, job roles, and firmographic filters; push to demo/revenue pages.",
    ],
  },
  {
    id: 2,
    title: "D2C & E-Commerce",
    points: [
      "Dynamic catalog ads, cart recovery, price-drop triggers, and contribution-to-sale analytics.",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    points: [
      "Privacy-safe contextual targeting; appointment and lead flows with strict suitability controls.",
    ],
  },
  {
    id: 4,
    title: "Automotive",
    points: [
      "Dealer-level geo + CTV for model interest; test-drive and booking intent pages.",
    ],
  },
  {
    id: 5,
    title: "Real Estate",
    points: [
      "Hyperlocal DOOH + mobile retargeting; funnel to site visits and form fills.",
    ],
  },
  {
    id: 6,
    title: "SaaS",
    points: [
      "Intent-based content promotion, free-trial velocity, pipeline contribution reporting.",
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Awareness at Efficient CPMs",
    cases: ["Reach net-new audiences with guaranteed brand safety. "],
  },
  {
    id: 2,
    title: "Mid-Funnel Acceleration",
    cases: [
      "Drive product consideration with contextual + behavioral overlays. ",
    ],
  },
  {
    id: 3,
    title: "Conversion & ROAS",
    cases: [
      "Cart recovery, dynamic remarketing, price-drop triggers, and feed-driven creatives.",
    ],
  },
  {
    id: 4,
    title: "ABM for B2B",
    cases: [
      "Target named accounts by firmographic signals, job functions, and technographics.",
    ],
  },
  {
    id: 5,
    title: "Retail Media & Marketplaces",
    cases: [
      "Prospect + retarget across retail networks with SKU-level optimization. ",
    ],
  },
  {
    id: 6,
    title: "CTV/OTT & DOOH",
    cases: ["Extend reach beyond walled gardens; unify measurement. "],
  },
  {
    id: 7,
    title: "Truth",
    cases: [
      "Most ad waste comes from poor audience architecture, weak supply paths, and generic creatives. We fix all three.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Local Domination: ",
    cases: [
      "Own your niche in Chennai with granular geo-targets, language, and contexts. ",
    ],
  },
  {
    id: 2,
    title: "National/Global Scale: ",
    cases: [
      "Roll out with layered lookalikes, frequency governance, and SPO (Supply Path Optimization).",
    ],
  },
  {
    id: 3,
    title: "ROAS-First: ",
    cases: ["Optimize to CPA/ROAS, not vanity metrics."],
  },
  {
    id: 4,
    title: "True Omnichannel: ",
    cases: [
      "Display, native, video, CTV/OTT, audio, in-app, DOOH , planned as one journey.",
    ],
  },
];

const motives2 = [
  {
    id: 1,
    title: "Display & Native",
    cases: ["Contextual + behavioral with premium editorial inventory."],
  },
  {
    id: 2,
    title: "Online Video & CTV/OTT",
    cases: ["Skippable/non-skippable, mid-roll, and long-form integrations."],
  },
  {
    id: 3,
    title: "Audio",
    cases: [
      "Programmatic audio on music/podcast networks with precise geo and interest layers.",
    ],
  },
  {
    id: 4,
    title: "In-App & Gaming",
    cases: ["High-intent placements with brand safety controls."],
  },
  {
    id: 5,
    title: "DOOH (Digital Out-Of-Home)",
    cases: [
      "Location-aware digital billboards with footfall measurement options.",
    ],
  },
  {
    id: 6,
    title: "Retail Media",
    cases: [
      "Prospect + remarket across retail DSPs; SKU-level creative with live price/stock feeds.",
    ],
  },
];

const motives3 = [
  {
    id: 1,
    title: "Awareness",
    cases: ["vCPM, viewability, on-target reach, brand-lift studies."],
  },
  {
    id: 2,
    title: "Consideration",
    cases: ["CTR, video completion rate (VCR), site engagement depth."],
  },
  {
    id: 3,
    title: "Conversion",
    cases: ["CPA, ROAS, contribution to assisted conversions."],
  },
  {
    id: 4,
    title: "Quality",
    cases: [
      "Frequency distribution, SPO efficiency, IVT rate, attention metrics.",
    ],
  },
];

const motives4 = [
  {
    id: 1,
    title: "E-Com Scale-Up",
    cases: [
      "Prospect on contextual + affinity, retarget with feed-based DCO, expand to CTV for incremental reach; optimize to blended ROAS.",
    ],
  },
  {
    id: 2,
    title: "B2B Pipeline Assist",
    cases: [
      "ABM display + LinkedIn native mix; intent surge → demo bookings → pipeline influence reporting.",
    ],
  },
  {
    id: 3,
    title: "Multi-City Retail",
    cases: [
      "DOOH for reach + mobile retargeting to offers; store-visit proxies and coupon redemptions tied to flight windows.",
    ],
  },
  {
    id: 4,
    title: "Our Approach",
    cases: [
      "We tailor the stack, channels, and creative system to your KPI, not the other way around.",
    ],
  },
];

const motives5 = [
  {
    id: 1,
    cases: ["Audience Map (prospecting, retargeting, loyalty tiers)"],
  },
  {
    id: 2,
    cases: [
      "Inventory & Channel Blueprint (display, video, CTV/OTT, DOOH, native, audio)",
    ],
  },
  {
    id: 3,
    cases: ["Creative Matrix (messages by funnel stage + DCO plan)"],
  },
  {
    id: 4,
    cases: ["KPI Forecast Ranges & Measurement Plan"],
  },
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
              What is Programmatic Marketing and Why Businesses Use It
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
              Programmatic marketing is revolutionizing how businesses connect
              with their audiences by automating the buying and selling of ad
              space in real time. Unlike traditional advertising, it relies on
              advanced data, machine learning, and AI-driven algorithms to
              optimize campaigns and deliver highly relevant ads to the right
              people at the right time. 
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              What makes programmatic unique is its adaptability across business
              models. For B2B, it enables precise targeting of decision-makers
              and niche industries. In B2C, it ensures scalable reach and
              personalized engagement. For D2C brands, it delivers
              cost-effective visibility, accelerating customer acquisition and
              brand loyalty. By uniting automation, efficiency, and data-driven
              insights, programmatic marketing empowers businesses of all types
              to achieve better ROI, reduce wasted ad spend, and maintain
              agility in an ever-competitive digital ecosystem. 
            </p>
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
            <span className="mb-2 block">What Next??? </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[150px] mt-3 origin-left rounded-full"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <p className="text-base sm:text-lg md:text-xl text-secondary font-primary font-medium leading-relaxed">
              You’ve landed on our Programmatic Marketing Services page, great
              move
            </p>
            <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary font-medium leading-relaxed">
              If you’re exploring programmatic, you’re likely asking:
            </h2>

            <div className="space-y-6">
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Can smarter targeting cut wasted spend? 
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Can omnichannel (display, video, CTV, DOOH, native, audio)
                  work as one system? 
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Can we prove incrementality, not just clicks? 
                </p>
              </div>
            </div>
            <h2 className="text-base sm:text-lg md:text-2xl text-secondary font-primary font-medium leading-relaxed">
              Speak Ayati’s language, Next is Now! 
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              {" "}
              We design AI-powered buying systems that find your audience, bid
              at the right price, and convert attention into revenue. 
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
              Why Ayatiworks is the Best Programmatic Marketing <br /> Company
              in Chennai
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
                    <GoDotFill />
                  </span>
                  Relationship first, results always. We don’t “spray & pray”
                  media. We architect it. 
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  We learn your business inside-out. ICPs, buying cycles,
                  average order values, sales velocity, the works. 
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Platform-agnostic buying. We run across leading DSPs (e.g.,
                  DV360, The Trade Desk, Amazon DSP) and premium PMPs, so you’re
                  never locked into one inventory source. 
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Creative + Data + Media, together. DCO (dynamic creative
                  optimization), feed-based product ads, HTML5, vertical video,
                  matched to audiences and intent. 
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Compliance & safety by design. Brand safety layers, fraud
                  prevention, viewability benchmarks, consent-aware tracking. 
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <GoDotFill />
                  </span>
                  Whether you’re a B2B SaaS, D2C brand, marketplace, or
                  enterprise, we stitch together precision targeting +
                  performance measurement to maximize ROAS. 
                </p>
              </div>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-2.png"
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
              What’s the Programmatic Objective of Your Business?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraph */}
            <p className="text-lg sm:text-xl md:text-3xl text-primary font-primary font-medium leading-relaxed">
              Most briefs fall into a few high-impact <br />
              tracks: 
            </p>

            <ul className="space-y-8 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
            <span className="mb-2 block">Ayatiworks’ Assurance</span>

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
            <p className="text-lg sm:text-xl md:text-3xl text-primary font-primary font-medium leading-relaxed">
              Choose outcomes; we’ll pick the pipes.
            </p>

            <ul className="space-y-8 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-4.png"
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
              Programmatic Strategic Approach by Ayatiworks : <br /> No
              Guesswork, Just Results
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <div className="text-left mb-12">
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium">
            Our programmatic strategic approach is designed to help businesses
            maximize ad efficiency with precision targeting, automation, and
            real-time insights. By combining data, technology, and creativity,
            we deliver campaigns that scale seamlessly while ensuring measurable
            ROI across B2B, B2C, and D2C models.{" "}
          </p>
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
        <div className="text-left mb-12">
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium">
            With this structured approach, businesses gain clarity, control, and
            confidence in their programmatic investments. Each step is built to
            deliver sustainable growth, ensuring every marketing dollar works
            harder and smarter for long-term success.{" "}
          </p>
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
            <span className="mb-2 block">Channels & Formats We Activate</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-5.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraph */}

            <ul className="space-y-8 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
        {/* Title */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">Industry Use-Cases</span>

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
          {steps1.map((step) => (
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
            <span className="mb-2 block">What Success Looks Like </span>

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

            <ul className="space-y-8 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-6.png"
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
            <span className="mb-2 block">Case Snapshots </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 origin-left rounded-full"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-7.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraph */}

            <ul className="space-y-8 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
            <span className="mb-2 block">Free Programmatic Action Plan </span>

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
            <p className="text-lg sm:text-xl md:text-3xl text-secondary font-primary font-medium leading-relaxed">
              Share your domain and core KPIs and get:
            </p>
            <ul className="space-y-8 text-black/80">
              {motives5.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}
                  <GoDotFill className="text-secondary text-2xl flex-shrink-0 mt-1" />

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Case Studies */}
                    <div className="space-y-2 pl-1">
                      {motive.cases.map((caseText, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/pro-8.png"
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
