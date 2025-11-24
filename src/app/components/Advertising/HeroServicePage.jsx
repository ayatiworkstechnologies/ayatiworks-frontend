"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import { useRouter } from "next/navigation";
const steps = [
  {
    id: 1,
    title: "Step 1: Discovery & Deep Dive",
    points: [
      "We start with understanding your brand DNA, audience, and competitive landscape.",
    ],
  },
  {
    id: 2,
    title: "Step 2: Goal Setting & Alignment",
    points: [
      "We define measurable goals aligned with your brand’s growth objectives.",
    ],
  },
  {
    id: 3,
    title: "Step 3: Market & Competitor Analysis",
    points: [
      "Our data analysts evaluate your market positioning and identify whitespace opportunities.",
    ],
  },
  {
    id: 4,
    title: "Step 4: Creative Concept Development",
    points: [
      "We develop campaign ideas that speak your audience’s language and stand out in the clutter.",
    ],
  },
  {
    id: 5,
    title: "Step 5: Media Planning & Budgeting",
    points: [
      "We plan the right mix of digital, print, and outdoor advertising for maximum ROI.",
    ],
  },
  {
    id: 6,
    title: "Step 6: Content & Asset Creation",
    points: [
      "From ad copy to visuals, videos, and landing pages — everything is created to perform.",
    ],
  },
  {
    id: 7,
    title: "Step 7: Campaign Execution",
    points: [
      "We deploy campaigns with precise targeting across channels that matter most to your audience.",
    ],
  },
  {
    id: 8,
    title: "Step 8: Performance Monitoring",
    points: [
      "We track every click, impression, and conversion to measure what’s working.",
    ],
  },
  {
    id: 9,
    title: "Step 9: Optimization & Refinement",
    points: [
      "Based on analytics, we fine-tune creatives, messaging, and placements for better results.",
    ],
  },
  {
    id: 10,
    title: "Step 10: Reporting & Insights",
    points: [
      "Transparent, data-driven insights to keep you informed and in control of every campaign.",
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Creative Campaigns that Cut Through Noise:",
    subtitle: " ",
    cases: ["Ideas that resonate with your audience and amplify your message."],
  },
  {
    id: 2,
    title: "Performance-Driven Marketing: ",
    subtitle: "",
    cases: [
      "Every ad is tracked, measured, and optimized for tangible business outcomes.",
    ],
  },
  {
    id: 3,
    title: "Integrated Marketing Strategy: ",
    subtitle: "",
    cases: [
      "From Digital Marketing Services in Chennai to multi-channel ad campaigns, everything works in sync.",
    ],
  },
  {
    id: 4,
    title: "Content that Converts: ",
    subtitle: "",
    cases: [
      "Compelling ad copy, visuals, and videos that attract attention and drive engagement.",
    ],
  },
  {
    id: 5,
    title: "Collaborative Execution: ",
    subtitle: "",
    cases: [
      "We work closely with your marketing team to ensure brand consistency and creative synergy.",
    ],
  },
];
const motives1 = [
  {
    id: 1,
    title: "Healthcare & Pharma:",
    subtitle: "",
    cases: [
      "Brand awareness and lead generation campaigns that build patient trust and credibility.",
    ],
  },
  {
    id: 2,
    title: "FinTech & BFSI:",
    subtitle: "",
    cases: [
      "ROI-driven digital campaigns focused on conversions, retention, and customer acquisition.",
    ],
  },
  {
    id: 3,
    title: "Retail & E-Commerce:",
    subtitle: "",
    cases: [
      "High-impact digital advertising strategies designed to boost traffic, engagement, and sales.",
    ],
  },
  {
    id: 4,
    title: "Education & EdTech:",
    subtitle: "",
    cases: [
      "Awareness and engagement campaigns that drive enrollments and strengthen institutional credibility.",
    ],
  },
  {
    id: 5,
    title: "Real Estate:",
    subtitle: "",
    cases: [
      "Creative campaigns that turn property prospects into verified leads and buyers.",
    ],
  },
  {
    id: 6,
    title: "Automobile & Manufacturing:",
    subtitle: "",
    cases: [
      "B2B and B2C campaigns that enhance visibility, brand reputation, and dealer network reach.",
    ],
  },
];


function HeroServicePage() {
  const router = useRouter();
  const goToContact = () =>  router.push("/contact-us#form");

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
              Advertising Agency in Chennai That Transforms Brands <br />
              into Market Leaders
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
              Ayatiworks is an award-winning Advertising Agency in Chennai that
              blends creativity with strategy to make brands impossible to
              ignore. As a full-service Creative Agency in Chennai, we don’t
              just run campaigns; we engineer impact. From digital storytelling
              to integrated marketing strategies, we help businesses turn
              visibility into value and engagement into growth.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Our advertising model is built on the principle that marketing
              isn’t just about reach, it’s about relevance. With an in-house
              team of strategists, designers, content creators, and digital
              experts, we ensure that every campaign you run is backed by
              insight, powered by creativity, and measured by performance.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              When brands partner with us, they gain more than an agency, they
              gain a creative growth partner.
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
            <div className="sticky">
              <motion.img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/ads-img.jpg"
                alt="Ayatiworks won the 43rd Edition of Maddy’s award for best Performance Marketing for Volvo"
                className="w-full h-full mx-auto rounded-xl shadow-lg"
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
              Why Choose Our Advertising Agency
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/ads.jpg"
                alt="Best Creative Agency in Chennai, Ayatiworks"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <h3 className="section-title text-left text-3xl font-primary leading-relaxed">
              Strategic. Insightful. Transformative.
            </h3>
            <p className="text-sm sm:text-base md:text-lg font-primary leading-relaxed">
              Here’s how we help you unlock the full potential of a professional
              Advertising Agency in Chennai:
            </p>

            {/* Points */}
            <div className="space-y-6">
              {[
                {
                  title: "Tailored Solutions",
                  text: "We understand that no two brands are alike. Our advertising strategies are crafted around your business goals, audience behavior, and market position to ensure every rupee spent creates measurable impact.",
                },
                {
                  title: "Market Insights",
                  text: "Using a blend of research and data-driven tools, we uncover what drives your audience and position your brand where it matters most.",
                },
                {
                  title: "Holistic Approach",
                  text: "We bring together media strategy, content creation, performance marketing, and creative direction under one roof to ensure consistent and cohesive brand storytelling.",
                },
                {
                  title: "Ongoing Support",
                  text: "The digital landscape changes fast, and we stay faster. We continuously monitor, refine, and optimize campaigns to keep your brand ahead of the curve.",
                },
                {
                  title: "ROI-Focused Execution",
                  text: "Our campaigns are built to convert. Whether it’s digital ads, video storytelling, or influencer partnerships, our focus remains clear—better engagement, stronger recall, higher returns.",
                },
              ].map((point) => (
                <div key={point.title}>
                  <div className="flex items-center gap-2">
                    <FaRegDotCircle className="text-primary text-xl sm:text-2xl flex-shrink-0" />
                    <h3 className="section-title text-2xl">{point.title}</h3>
                  </div>
                  <p className="mt-1 ml-8 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/70">
                    {point.text}
                  </p>
                </div>
              ))}
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
              Our 10-Phase Approach to Advertising Excellence
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
        <p className="section-phara text-left leading-relaxed">
          We never consider advertising as a one-off project. It’s a process; it
          requires thorough understanding, planning, and perfecting.
        </p>
        <h3 className="section-title text-left text-3xl font-primary leading-relaxed p-4">
          Here’s how we make your brand stand out:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md `}
            >
              {/* Step Title */}
              <h3 className=" font-primary text-secondary font-medium text-2xl mb-4">
                {step.title}
                {step.subtitle && <br />}
                {step.subtitle && (
                  <span className="text-secondary font-primary">
                    {step.subtitle}
                  </span>
                )}
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
        <p className="section-phara text-left mt-6 leading-relaxed">
          This 10-phase process ensures that every campaign launched by
          Ayatiworks delivers strategic value and tangible growth.{" "}
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
              Our Approach: Simplifying Success, Amplifying Brands
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
              <p className="section-phara text-left mt-6 leading-relaxed">
                At the core of our approach lies one simple belief; advertising
                should simplify brand growth, not complicate it. We focus on
                what matters most, clear messaging, creative precision, and
                measurable outcomes.
              </p>
              <p className="section-phara text-left mt-6 leading-relaxed">
                Our process is designed to enrich and enhance brand experiences
                by aligning creativity with commerce. Whether you’re launching a
                new product or redefining your market position, we craft
                advertising strategies that connect emotionally and perform
                commercially.
              </p>
              <p className="section-phara text-left mt-6 leading-relaxed">
                From brand storytelling to performance-led campaigns, we ensure
                your marketing investment delivers beyond impressions; it
                delivers impact.
              </p>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-2.png"
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
            <span className="mb-2 block">What You Can Expect from Us</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraph */}

            <ul className="space-y-8 text-black/80">
              {motives.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Title + Subtitle */}
                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-primary text-secondary block">
                        {motive.title}
                      </span>
                      <span className="text-black/80 font-primary text-lg sm:text-xl block">
                        {motive.subtitle}
                      </span>
                    </div>

                    {/* Case Studies */}
                    <div className="space-y-2 pl-1">
                      {motive.cases.map((caseText, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
                        >
                          <GoDotFill className="mt-1 flex-shrink-0 text-black/70" />
                          <span>{caseText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
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
            <span className="mb-2 block">Industries We Work With</span>

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
            <p className="text-base sm:text-lg md:text-2xl text-black/80 font-primary font-medium leading-relaxed">
              We’ve delivered successful advertising solutions across
              industries, including:
            </p>
            <ul className="space-y-8 text-black/80">
              {motives1.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}

                  {/* Content */}
                  <div className="space-y-3">
                    {/* Title + Subtitle */}
                    <div className="space-y-1">
                      <span className="text-2xl sm:text-3xl font-primary text-secondary block">
                        {motive.title}
                      </span>
                      <span className="text-black/80 font-primary text-lg sm:text-xl block">
                        {motive.subtitle}
                      </span>
                    </div>

                    {/* Case Studies */}
                    <div className="space-y-2 pl-1">
                      {motive.cases.map((caseText, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium leading-relaxed"
                        >
                          <GoDotFill className="mt-1 flex-shrink-0 text-black/70" />
                          <span>{caseText}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Our versatility ensures your brand benefits from cross-industry
              insights and tested advertising frameworks.
            </p>
            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png"
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
            <span className="mb-2 block">Pricing & Engagement</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Intro Paragraph */}
            {/* <h3 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed">
              What if your website is a ghost town?
            </h3> */}
            <p className="text-base/7 sm:text-lg/9 md:text-lg/9 text-black/80 font-secondary font-medium">
              Our{" "}
              <strong>advertising consulting and execution services </strong>are
              priced based on the scope, scale, and complexity of your campaign.
              Whether you’re looking for a one-time project or a long-term
              retainer partnership, we customize our pricing to deliver maximum
              value and transparency.
            </p>

            <p className="text-base/8 sm:text-lg/8 md:text-lg/8 text-black/80 font-secondary font-medium">
              We prioritize<strong>results over retainers,</strong> ensuring
              that every rupee you invest translates into performance you can
              measure.
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-secondary font-primary font-medium leading-relaxed">
              Ready to see measurable growth?
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Let’s discuss your goals and craft an advertising strategy that
              delivers real business impact. Let’s start your growth story
              today.
            </p>

            <motion.button
        className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={goToContact}
      >
        Schedule a Free Consultation
      </motion.button>
            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
