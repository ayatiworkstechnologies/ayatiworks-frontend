"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Market Analysis",
    points: ["Identify target regions and languages."],
  },
  {
    id: 2,
    title: "2. Audience Profiling",
    points: ["Understand cultural and linguistic preferences."],
  },
  {
    id: 3,
    title: "3. Strategy Development",
    points: ["Craft tailored multilingual marketing strategies."],
  },
  {
    id: 4,
    title: "4. Content Localization",
    points: ["Create culturally relevant multilingual content marketing."],
  },
  {
    id: 5,
    title: "5. SEO Optimization",
    points: ["Implement multilingual search marketing for visibility."],
  },
  {
    id: 6,
    title: "6. Social Media Planning",
    points: ["Design multilingual social media marketing campaigns."],
  },
  {
    id: 7,
    title: "7. Campaign Execution",
    points: ["Launch integrated multilingual campaigns."],
  },
  {
    id: 8,
    title: "8. Performance Tracking",
    points: ["Monitor KPIs for effectiveness."],
  },
  {
    id: 9,
    title: "9. Optimization",
    points: ["Refine campaigns based on data insights."],
  },
  {
    id: 10,
    title: "10. Reporting",
    points: ["Provide detailed performance insights."],
  },
];

const motives = [
  {
    id: 1,
    title: "Tailored Strategies",
    cases: [
      "We design multilingual marketing strategies customized to your brand’s goals and target regions.",
    ],
  },
  {
    id: 2,
    title: "Cultural Expertise",
    cases: [
      "Our team ensures localized content that resonates with diverse audiences, overcoming multilingual marketing challenges.",
    ],
  },
  {
    id: 3,
    title: "Advanced Tools",
    cases: [
      "We leverage AI-driven translation and analytics for seamless multilingual content marketing and multilingual search marketing.",
    ],
  },
  {
    id: 4,
    title: "Data-Driven Insights",
    cases: ["We analyze market trends to optimize campaigns for maximum ROI."],
  },
  {
    id: 5,
    title: "End-to-End Support",
    cases: [
      "From ideation to execution, we manage every aspect of your multilingual marketing services.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Multilingual Search Marketing",
    cases: [
      "Optimize SEO and PPC campaigns across diverse languages and regions to maximize visibility and reach.",
    ],
  },
  {
    id: 2,
    title: "Multilingual Content Marketing",
    cases: [
      "Create localized blogs, videos, and marketing assets that resonate culturally with each audience segment.",
    ],
  },
  {
    id: 3,
    title: "Multi-Language Marketing",
    cases: [
      "Design integrated, cross-channel campaigns in multiple languages for consistent brand impact worldwide.",
    ],
  },
  {
    id: 4,
    title: "Multilingual Social Media Marketing",
    cases: [
      "Engage audiences on platforms like Instagram, LinkedIn, and more with native-language content tailored to their culture.",
    ],
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
              Best Multilingual Marketing Services in India
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
            className="text-black/80 space-y-4 md:space-y-6"
          >
            <p className="text-lg sm:text-xl md:text-3xl text-secondary font-primary">
              Connect Globally with Ayatiworks’ Expertise
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Want your brand to reach the masses in India? Remember, India’s
              strength is its
              <span className="whitespace-nowrap"> “Unity in Diversity.”</span>
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              One country, 143 crore people, 121 languages, and over 19,500
              mother tongues , a nation rich in linguistic diversity.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              <a
                href="https://ayatiworks.com/"
                className="text-primary underline font-primary hover:text-secondary transition-colors"
              >
                Ayatiworks
              </a>{" "}
              brings deep experience and expertise. Your brand’s voice can be
              one, but it must reach audiences in their own dialects , we make
              that happen with flair.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              As the <span className="text-primary font-primary hover:text-secondary transition-colors">Best Multilingual Marketing Agency</span>, we craft
              campaigns that resonate in every language from Chennai to global
              markets. Partnering closely with our in-house{" "}
              <a
                href="https://ayatiworks.com/services/digital-marketing-services"
                className="text-primary underline hover:text-secondary font-primary transition-colors"
              >
                Growth Marketing team
              </a>{" "}
              team and{" "}
              <a
                href="https://ayatiworks.com/services/digital-marketing-consultancy"
                className="text-primary underline hover:text-secondary font-primary transition-colors"
              >
                our Marketing Consultants
              </a>{" "}
              across India and internationally, we deliver multilingual
              strategies that are culturally relevant and impactful , driving
              engagement and trust worldwide.
            </p>

            {/* CTA */}
            <motion.a
              href=""
              aria-label="Book a free multilingual marketing consultation"
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
                alt="Ayatiworks multilingual digital marketing team at work"
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
              Why Ayatiworks is the Best Multilingual Marketing <br /> Agency in Chennai
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mul-1.png"
                alt="Why Ayatiworks is the Best Multilingual Marketing Agency in Chennai"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              <a
                href="https://ayatiworks.com/"
                className="text-primary underline font-primary hover:text-secondary transition-colors"
              >
                Ayatiworks
              </a>{" "}
              stands out as the Best Multilingual Marketing Agency, delivering campaigns that bridge linguistic and cultural divides.
              Our expertise in multilingual marketing consultancy empowers
              brands to conquer global markets with precision.
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                Here’s why businesses choose us:
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
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Our approach tackles multilingual marketing challenges like
              cultural nuances and language barriers, ensuring your brand
              connects authentically. With a proven track record, we’ve helped
              businesses expand their reach across India’s 19,500+ languages and
              dialects, as well as global markets.
            </p>

            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Our multilingual content marketing fosters trust, with 70% of
              consumers preferring brands that communicate in their native
              language CSA Research, 2025. From startups to enterprises,
              Ayatiworks delivers measurable results, making us the go-to agency
              for multilingual marketing services. Our commitment to precision
              and cultural relevance sets us apart, ensuring your campaigns
              drive engagement and conversions worldwide.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              Ready to go Vernacular? Or looking to go Global?
            </p>
            <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
              <a
                href="https://ayatiworks.com/contact-us"
                className="text-primary underline font-primary hover:text-secondary transition-colors"
              >
                Contact Ayatiworks to launch impactful multilingual campaigns
                today!
              </a>{" "}
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
              Types of Multi-Lingual Marketing Services <br /> Offered by
              Ayatiworks:
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
              className="section-title text-2xl sm:text-3xl text-left "
            >
              <span className="mb-2 block">
                Ayatiworks offers a comprehensive suite of multilingual
                marketing services to amplify your brand’s global presence:
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

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mul-2.png"
                alt="Multi-Language Marketing"
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
              Why Multi-Lingual Marketing is a Game Changer?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/mul-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                Multilingual marketing services are a game-changer for
                businesses aiming to expand their reach. With over 19,500
                languages and dialects in India alone, speaking your audience’s
                language unlocks massive opportunities.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                Ayatiworks’ multilingual marketing strategy goes beyond
                translation; it creates cultural connections that make your
                brand relatable. For instance, 75% of global consumers are more
                likely to purchase from brands using their native language (CSA
                Research, 2025).{" "}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                Our multilingual content marketing builds trust, fostering
                stronger audience bonds. By addressing multilingual marketing
                challenges like localization and cultural nuances, we ensure
                your campaigns resonate. Whether targeting India’s diverse
                regions or international markets, our multilingual search
                marketing and social media efforts drive engagement and
                conversions. Ayatiworks helps businesses stand out in crowded
                markets, delivering measurable growth through authentic,
                language-specific campaigns.{" "}
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary">
                Connect with every audience! Partner with Ayatiworks for{" "}
                <a
                  href="https://ayatiworks.com/contact-us"
                  className="text-primary underline hover:text-secondary transition-colors"
                >
                  {" "}
                  multilingual marketing
                </a>{" "}
                success.
              </p>
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
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Ayatiworks’ Multi-Lingual Marketing Approach
            </span>

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
          Ayatiworks delivers strategic multilingual marketing services,
          connecting brands with global audiences.
        </h3>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-black/80 mt-4 font-secondary font-medium leading-relaxed">
          Our 10-phase process ensures culturally relevant, high-impact
          campaigns that drive engagement and growth.
        </p>

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
            Ayatiworks’ 10-phase approach ensures seamless multilingual marketing services. We analyze markets, profile audiences, and develop tailored strategies. Localized content and multilingual search marketing enhance visibility, while social media campaigns engage diverse audiences. After execution, we track performance, optimize based on insights, and deliver detailed reports, ensuring your campaigns achieve global impact.
          </p>
        </div>
      </section>
      <section className="section-container py-16">
        <div className="bg-primary rounded-2xl shadow-lg hover:shadow-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute inset-0  rounded-2xl"></div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-2xl sm:text-3xl md:text-4xl font-primary font-medium mb-6"
          >
            Facts and Figures: Benefits of Multi-Lingual Marketing
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            Businesses using multilingual marketing services see 25% higher
            engagement rates. Localized content boosts conversions by 70%.
            Ayatiworks’ multilingual search marketing drives 30% more traffic,
            while multilingual social media marketing increases brand trust by
            40%, helping brands dominate diverse markets.
          </p>
        </div>
      </section>
      <AutoImageSlider />
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
            <span className="mb-2 block">Why Work with Ayatiworks?</span>

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
          <div className="text-black/80">
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  As the Best Multilingual Marketing Agency, Ayatiworks
                  creates campaigns that connect and convert. Our past clients
                  praise our structured process, cultural expertise, and timely
                  delivery.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  We don’t just translate; we craft multilingual marketing
                  strategies that amplify your brand’s voice, ensuring global
                  impact and audience trust.
                </span>
              </div>
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
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/oni-5.png"
                alt="Multilingual at Ayatiworks"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
