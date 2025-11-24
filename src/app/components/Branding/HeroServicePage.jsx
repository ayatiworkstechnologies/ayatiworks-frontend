"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Discovery",
    points: ["Understand your goals, customers & market."],
  },
  {
    id: 2,
    title: "2. Competitor Analysis",
    points: ["Spot gaps and differentiation areas."],
  },
  {
    id: 3,
    title: "3. Brand Strategy",
    points: ["Define your purpose, vision, and tone."],
  },
  {
    id: 4,
    title: "4. Brand Positioning",
    points: ["Establish your unique value & space."],
  },
  {
    id: 5,
    title: "5. Visual Identity Design",
    points: ["Create logo, colors, and design system."],
  },
  {
    id: 6,
    title: "6. Brand Messaging",
    points: ["Develop taglines, narratives, and tone guides."],
  },
  {
    id: 7,
    title: "7. Digital Branding",
    points: ["Website and social profiles aligned with brand."],
  },
  {
    id: 8,
    title: "8. Content Creation",
    points: ["SEO-focused and story-driven content."],
  },
  {
    id: 9,
    title: "9. Launch Planning",
    points: ["Coordinate omnichannel launch."],
  },
  {
    id: 10,
    title: "10. Performance Tracking",
    points: ["Measure awareness, engagement, impact."],
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
              Best Branding Agency in Chennai for Small to <br /> Large
              Organizations
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
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Founded in 2017 with a few digital marketing and branding projects
              from small brands and startups, Ayatiworks has grown into a
              powerhouse of branding and digital transformation. By 2025, we’re
              proud to be recognized among the Best Branding Agencies in India,
              trusted by industry giants like Nippo, Volvo, and Xiaomi. We
              believe your brand is your story, let us make it unforgettable.{" "}
              <br />
              As the Best Branding Agency in Chennai, Ayatiworks crafts
              strategic, high-impact brand identities for organizations of all
              sizes. Marketing sans Branding is Loud Noise, Branding sans
              Marketing finds no audience, at Ayatiworks we know the right
              permutation and combinations between Brands, Audience, Competition
              and Industry.
            </p>
            {/* Button */}
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
            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
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
              Why Branding Matters for Your Business
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                The Power of a Strong Brand Identity
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                Branding is no design work, gimmicks or flash it about
                distinction. A powerful brand identity must build trust, create
                consistency, and drive customer loyalty. So branding is about,
                when the end user is in pain, they think of your brand as a pain
                reliever since we at Ayatiworks project your brand as such. 80%
                People buy from your business only if they recognize your brand
                and when your USP directly relates to solving their problems. 
              </p>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  What makes a strong Brand
                </p>

                {/* ✅ Bulleted points */}
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Builds credibility instantly</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Creates emotional connections</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>
                    Increases perceived value of your products/services
                  </span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Attracts repeat business and referrals</span>
                </div>

                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  Whether you're a tech startup, a D2C brand, or an enterprise,
                  your brand identity decides your destiny.
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  Branding Beyond Logos
                </p>

                {/* ✅ Bulleted points */}

                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  Branding is more than your logo; it’s how people feel and
                  emotionally connect with your business. It’s your voice,
                  values, messaging, tone, and experience. It’s the difference
                  between a transaction and a relationship. 
                </p>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  At Ayatiworks, we create holistic brand strategies that go
                  beyond visuals to deliver consistent, authentic messaging
                  across platforms. We shape how your audience perceives you
                  emotionally, cognitively, and digitally. 
                </p>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  We blend strategic positioning, purpose-driven messaging, and
                  user-first experiences to build brands that thrive in the real
                  world and the digital one. 
                </p>
              </div>
            </div>
          </div>
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
            Why Choose Ayatiworks as the Best Branding Agency in Chennai?
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative text-lg sm:text-xl md:text-2xl font-primary font-medium mb-6"
          >
            Local Expertise, Global Standards
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto mt-4 bg-white h-1 w-32 sm:w-48 md:w-64 origin-center rounded-full"
            />
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            As the Best Branding Agency in Chennai, Ayatiworks brings a unique
            blend of local market understanding and international best
            practices. We know what resonates with audiences in Tamil Nadu, and
            we know how to translate that into a brand presence that performs
            globally.
          </p>
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            From heritage brands to Gen Z startups, we’ve helped Chennai-based
            businesses scale with confidence. We worked with Saravana Bhavan
            hotel and worked with modern hyper local home food delivery app and
            food tech company, Bhookle.
          </p>
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            “As the best branding agency in Chennai, we blend local insights
            with global trends to make brands timeless.”
          </p>
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
              Proven Track Record Across Industries
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
        <div className="text-left mb-12">
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium"></p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            <div className="space-y-6">
              {/* ✅ Title */}
              <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary leading-snug">
                Our success speaks through our clients. <br />
                We’ve worked with over 120 brands <br />
                across verticals like:
              </h2>

              {/* ✅ Bullet List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Healthcare</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>SaaS &amp; Tech</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Consumer Electronics</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Retail</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Education</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* ✅ Title */}
              <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary leading-snug">
                Mini Case Study:
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-secondary font-primary leading-snug">
                A Chennai-based fintech startup approached us in early 2023.
                They had funding but lacked brand direction. Within six months
                of launching their rebranded identity with Ayatiworks:
              </p>

              {/* ✅ Bullet List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Brand recall jumped by 40%</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Brand recall jumped by 40%</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Conversion rates grew by 40%</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {/* ✅ Title */}
              <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary leading-snug">
                Tailored Solutions for Every Business Size
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-secondary font-primary leading-snug">
                Startups. Scaleups. Enterprises. We don’t do
                “one-size-fits-all.”
              </p>

              {/* ✅ Bullet List */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>
                    For SMEs: Foundational branding that creates a strong market
                    presence
                  </span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>
                    For Mid-size Companies: Repositioning, rebranding, and
                    scalable brand systems
                  </span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>
                    For Large Enterprises: Digital transformation and
                    cross-platform brand consistency
                  </span>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                We don’t just design, we decode what your audience needs and
                build brands that deliver.
              </p>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-2.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
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
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Ayati’s 10-Phase Branding Approach
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
          A Methodical Process, A Memorable Brand
        </h3>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-xl text-black/80 mt-4 font-secondary font-medium leading-relaxed">
          As the Best Branding Agency in Chennai, we’ve engineered a proven
          10-phase process that transforms businesses into unforgettable brands.
          Whether you're starting from scratch or refreshing an established
          identity, our structured methodology ensures every element is
          intentional, aligned, and impactful.
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
            Take a closer look at our 10-step branding approach and you’ll see
            how Ayati Innovators meticulously integrates creativity at every
            stage while incorporating relevant fields of{" "}
            <a
              href="https://ayatiworks.com/services/digital-marketing-services"
              className="text-primary underline font-primary hover:text-secondary transition-colors"
            >
              digital marketing
            </a>{" "}
            to enhance your brand. We don’t just rely on this approach alone , our
            team uses many other proven strategies to ensure your brand reaches
            the right audience. This process is one of the frameworks that has
            consistently worked for our clients.
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
            <span className="mb-2 block">
              How Ayatiworks Stands Out as the Best Branding Agency in India
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                Nationwide Impact, Chennai Roots
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                While proudly rooted in Chennai, Ayatiworks’ influence spans
                India. We’ve delivered branding projects for companies in
                Mumbai, Bangalore, Delhi, Pune, and beyond each tailored to
                local market nuances.
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                {" "}
                Our Chennai DNA fuels our creativity. Our national reach drives
                our innovation.{" "}
              </p>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  Cutting-Edge Tools and Trends
                </p>

                {/* ✅ Bulleted points */}
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>We don’t just follow trends, we anticipate them.</span>
                </div>

                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>AI-powered consumer insights</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Neuromarketing & brand psychology</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Data-led visual storytelling</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>Immersive experiences using AR & 3D prototyping</span>
                </div>
                <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl shrink-0" />
                  <span>
                    We fuse design, tech, and strategy to give your brand a
                    future-proof edge.
                  </span>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  Whether you're a tech startup, a D2C brand, or an enterprise,
                  your brand identity decides your destiny.
                </p>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  Client-Centric Approach
                </p>

                {/* ✅ Bulleted points */}

                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
                  Your brand is not just a project it’s a partnership. We take
                  the time to understand your vision, your audience, and your
                  values. We deliver personalized solutions with measurable
                  business outcomes. Our support doesn't end at launch; we
                  evolve with you.
                </p>
              </div>
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
              Our Branding Process: From Vision to Victory
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-8">
            {/* Step 1 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-2xl" />
                Step 1: Discovery & Research
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                We begin by immersing ourselves in your business, goals, values,
                and audience. This deep understanding forms the foundation for
                everything we create.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-2xl" />
                Step 2: Strategy & Concept Development
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                We craft a brand roadmap , defining your essence, tone,
                positioning, and visual language. This strategic blueprint fuels
                meaningful growth.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-2xl" />
                Step 3: Design & Execution
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                From brand guidelines to logo systems, we transform strategy
                into compelling designs, visuals, and experiences that engage
                your audience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-2xl" />
                Step 4: Launch & Optimization
              </p>
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                We launch your brand across digital and physical platforms, then
                continuously monitor, refine, and optimize based on real-world
                data , maximizing impact.
              </p>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-4.png"
                alt="Our Branding Process"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
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
            <span className="mb-2 block">
              Success Stories: Transforming Brands in Chennai and Beyond
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

        {/* Volvo Case Study */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left: Text */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-2.png"
                alt="Volvo branding case study cover"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right: Image (sticky on md+) */}
          <div className="text-left">
            <h3 className="font-primary text-secondary font-semibold text-2xl md:text-3xl leading-snug">
              Volvo Case Study - Driving Legacy into the Digital Age
            </h3>

            <p className="text-base sm:text-lg/8 md:text-lg/8 text-black/80 mt-4 font-secondary leading-relaxed">
              In 2022, Volvo engaged Ayatiworks to reinvigorate its branding for
              the Indian market , blending global brand equity with regional
              resonance.
            </p>

            {/* What we did */}
            <h4 className="mt-8 font-primary text-secondary font-medium text-xl">
              What we did (3-month multi-phase strategy)
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Customer sentiment research
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Dealer network alignment
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Digital asset revamp across 25 platforms
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Hyperlocal video & content campaigns
                </span>
              </div>
            </div>

            {/* Results */}
            <h4 className="mt-8 font-primary text-secondary font-medium text-xl">
              Results delivered
            </h4>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Brand engagement on digital increased by <strong>92%</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Local dealer leads improved by <strong>54%</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Website conversion rate jumped by <strong>37%</strong>
                </span>
              </div>
              <div className="flex items-start gap-2 text-black/80">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span className="font-secondary text-base sm:text-lg leading-relaxed">
                  Average time on site increased from <strong>1.5</strong> to{" "}
                  <strong>3.2 minutes</strong>
                </span>
              </div>
            </div>

            <p className="text-base sm:text-lg/8 md:text-lg/8 text-black/80 mt-8 font-secondary leading-relaxed">
              This case proves our belief: legacy brands can evolve with the
              right branding partner. Volvo’s story is now part of our own
              3-year legacy of transformation , and still going strong.
            </p>
          </div>
        </article>
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
              Why Invest in Branding with Ayatiworks Today?
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
          <div className="text-black/80">
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  Digital-first impressions decide brand success. Consumers
                  judge within seconds. Your brand must stand out, be
                  remembered, and inspire trust.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  Ayatiworks ensures your brand isn’t just seen , it's{" "}
                  <strong>remembered, loved, and chosen</strong>.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>Let’s future-proof your business today.</span>
              </div>

              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  Book a <strong>FREE brand consultation</strong> with the Best
                  Branding Agency in Chennai.
                </span>
              </div>

              <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                <span>
                  Whether you're rebranding or starting from scratch, we’ll help
                  you <strong>own your space</strong>.
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/brand-5.png"
                alt="Branding at Ayatiworks"
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
