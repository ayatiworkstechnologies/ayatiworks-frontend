"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import {
  Search,
  Cpu,
  Megaphone,
  Code2,
  Smartphone,
  Layout,
  MousePointerClick,
  Mail,
  FileText,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);
const services = [
  {
    icon: Search,
    title: "1. E-commerce SEO Services",
    desc: "Optimize product pages, metadata, and site architecture. Fill content gaps with intent-led, keyword-focused content to rank for transactional terms.",
    result:
      "Example: Chennai electronics retailer saw +60% organic traffic after our SEO.",
  },
  {
    icon: Cpu,
    title: "2. Programmatic E-commerce SEO",
    desc: "Use AI-driven tooling to scale landing pages and automate keyword targeting across catalogs for long-tail and seasonal demand.",
    result:
      "Example: Fashion brand achieved +40% online sales via programmatic SEO.",
  },
  {
    icon: Megaphone,
    title: "3. Social Media Marketing for E-commerce",
    desc: "Plan platform-native concepts that drive traffic and conversions, with UGC and creator collabs.",
    result:
      "Example: Handmade crafts store doubled IG followers and +30% sales in 3 months.",
  },
  {
    icon: Code2,
    title: "4. E-commerce Web Development Services",
    desc: "Build responsive, conversion-focused storefronts with clean architecture and scalable stacks.",
    result:
      "Example: Chennai startup launched and saw +50% customer retention.",
  },
  {
    icon: Smartphone,
    title: "5. E-commerce App Development Services",
    desc: "Design intuitive mobile apps for faster browse-to-buy journeys and higher LTV.",
    result: "Example: Food delivery app recorded +70% orders post-launch.",
  },
  {
    icon: Layout,
    title: "6. E-commerce Web Design Services",
    desc: "Aesthetic, accessible, and friction-free UI for clearer navigation and higher trust.",
    result: "Example: Home décor brand cut bounce rate by 45% after redesign.",
  },
  {
    icon: MousePointerClick,
    title: "7. E-commerce PPC Services",
    desc: "Full-funnel campaigns on Google & Meta with granular feed optimization and audience layering.",
    result: "Example: Online bookstore reached 3× ROAS in the first month.",
  },
  {
    icon: Mail,
    title: "8. E-commerce Email Marketing Services",
    desc: "Lifecycle flows (welcome, browse/cart abandon, win-back) + targeted campaigns to lift repeat sales.",
    result:
      "Example: Skincare brand saw +25% repeat customers via email strategy.",
  },
  {
    icon: FileText,
    title: "9. E-commerce Content Marketing Services",
    desc: "Guides, comparisons, and blog content that educates, ranks, and converts.",
    result:
      "Example: Gadget retailer earned +35% traffic from editorial content.",
  },
  {
    icon: BarChart3,
    title: "10. Conversion Rate Optimization (CRO)",
    desc: "Analyze user behavior and test UI, offer, and checkout changes to reduce drop-off.",
    result:
      "Example: Apparel brand improved checkout UX and gained +20% sales.",
  },
];
const steps = [
  {
    id: 1,
    title: "Phase 1: Industry & Consumer Analysis",
    points: ["Understanding industry trends and consumer behavior."],
  },
  {
    id: 2,
    title: "Phase 2: Audience Segmentation",
    points: ["Identifying and categorizing target demographics."],
  },
  {
    id: 3,
    title: "Phase 3: Message Crafting",
    points: ["Crafting messages that resonate with each segment."],
  },
  {
    id: 4,
    title: "Phase 4: Channel Selection",
    points: ["Choosing the right digital channels for maximum reach."],
  },
  {
    id: 5,
    title: "Phase 5: Creative Development",
    points: ["Creating compelling ads and promotional materials."],
  },
  {
    id: 6,
    title: "Phase 6: Campaign Launch",
    points: ["Launching campaigns across selected platforms."],
  },
  {
    id: 7,
    title: "Phase 7: Performance Tracking",
    points: ["Tracking performance metrics in real-time."],
  },
  {
    id: 8,
    title: "Phase 8: Optimization",
    points: ["Adjusting strategies based on data insights."],
  },
  {
    id: 9,
    title: "Phase 9: Reporting",
    points: ["Providing transparent performance reports."],
  },
  {
    id: 10,
    title: "Phase 10: Continuous Improvement",
    points: ["Incorporating client feedback for ongoing growth."],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Proven Sales Growth",
    cases: [
      "300+ e-commerce clients, 800+ campaigns with measurable revenue lifts.",
    ],
  },
  {
    id: 2,
    title: "Local Expertise, Global Reach",
    cases: ["Native team with experience in India and beyond."],
  },
  {
    id: 3,
    title: "Senior Strategists",
    cases: ["Industry pros with 10+ years steering our campaigns."],
  },
  {
    id: 4,
    title: "Elite Training",
    cases: [
      "In-house experts mentored by top e-commerce coaches for cutting-edge strategies.",
    ],
  },
  {
    id: 5,
    title: "Full-Funnel Mastery",
    cases: ["From discovery to checkout, we cover TOFU, MOFU, and BOFU."],
  },
  {
    id: 6,
    title: "Precision Targeting",
    cases: ["Smart segmentation using behavior, intent, and demographics."],
  },
  {
    id: 7,
    title: "Omnichannel Power",
    cases: [
      "SEO, Google, Meta, Amazon, and email expertise for cohesive impact.",
    ],
  },
  {
    id: 8,
    title: "Crystal-Clear Reporting",
    cases: ["Weekly insights, transparent data, and actionable next steps."],
  },
  {
    id: 9,
    title: "Creative + CRO Synergy",
    cases: ["Every ad, page, and email is built to convert."],
  },
  {
    id: 10,
    title: "Seamless Client Sync",
    cases: ["Smooth calls, reports, and updates keep you in the loop."],
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
              Best E-commerce Digital Marketing Services That Drive Sales
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
                  Do you own an Ecommerce Website?
                </span>
              </motion.h2>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Got some promising products, beautiful website but not sure how
                to get in front of your target audience.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Unsure how to get the better of your competitors or simply
                sluggish on the sales front.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                If you are reading this page, then worry no more, Ayatiworks
                will get you closer to your business objectives
              </p>
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="section-title text-left "
              >
                <span className="mb-2 block">Picture this:</span>
              </motion.h2>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                Countless brands pouring budgets into flashy campaigns.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                What if every click led to a sale? Bullseye! Conversion Haven!
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                It is very unlikely but to be realistic in our experience we
                have seen brands chase trends, burning budgets on platforms
                their customers ignore. At Ayatiworks, we’ve lived this
                challenge alongside countless clients. From first impression to
                final checkout, we craft strategies that don’t just reach your
                customers but convert them, fueling your growth with measurable
                results, which is why we are the best Ecommerce Digital
                Marketing Company.
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
              What is E-commerce Digital Marketing?
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ecom-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              E-commerce digital marketing encompasses strategies tailored to
              promote online stores and drive sales through digital channels.
              Imagine a boutique owner in Chennai wanting to expand her reach
              beyond local foot traffic. By leveraging SEO, social media
              advertising, and email campaigns, she can showcase her products to
              a global audience, turning browsers into buyers. This digital
              approach transforms traditional storefronts into dynamic online
              marketplaces, accessible to customers anytime, anywhere.
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
              Why Ayatiworks is the Best E-commerce Digital Marketing Agency in
              Chennai
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
              className="section-title text-left "
            >
              <span className="mb-2 block">
                Because we turn clicks into carts, not just dreams!
              </span>
            </motion.h2>
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              {" "}
              We’re not another agency blasting generic ads or hoping for viral
              posts. From our Chennai hub, our battle-tested team, led by
              e-commerce marketing veterans, crafts campaigns that sell.{" "}
            </p>
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Here’s why e-commerce brands, from startups to scale-ups, choose
              us:
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
              We’re the partner you need to make every e-commerce click count.
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ecom-2.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        {/* === CTA HERO === */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-primary text-white"
        >
          {/* Soft moving glow */}
          <motion.div
            aria-hidden="true"
            animate={{ x: ["-15%", "115%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -top-16 h-40 w-40 rounded-full bg-white/10 blur-3xl"
          />

          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto text-center">
              <motion.h2
                {...fadeUp(0)}
                className="text-3xl md:text-4xl lg:text-5xl font-primary font-medium leading-tight"
              >
                Ayati's Digital Approach
              </motion.h2>

              <motion.p
                {...fadeUp(0.1)}
                className="mt-6 text-base md:text-lg lg:text-lg font-secondary text-white/90 leading-relaxed"
              >
                Ayatiworks follows a unique{" "}
                <span className="font-semibold">
                  Content as a Service (CaaS)
                </span>{" "}
                model. This approach emphasizes the creation and distribution of
                high-quality content tailored to your audience's preferences.
                Before launching campaigns, we delve deep into market research,
                competitor analysis, and audience behavior to ensure our
                strategies are both effective and efficient.
              </motion.p>
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
              Ayati’s 10-Phase Performance Marketing Approach
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
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Our E-commerce Digital Marketing Services in Chennai
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left: Services list */}
          <div className="text-black/80 space-y-6">
            <ul className="space-y-5">
              {services.map(({ icon: Icon, title, desc, result }, i) => (
                <motion.li
                  key={title}
                  {...fadeUp(i * 0.05)}
                  className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-12 items-center justify-center rounded-xl bg-secondary/10">
                      <Icon className="h-7 w-7 text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-2xl font-medium font-primary text-secondary">
                        {title}
                      </h3>
                      <p className="text-sm sm:text-base font-secondary leading-relaxed text-black/80">
                        {desc}
                      </p>
                      <div className="flex items-start gap-2">
                        <GoDotFill className="text-primary mt-1 text-base flex-shrink-0" />
                        <p className="text-sm sm:text-base font-secondary text-black/70">
                          <span className="text-primary font-primary text-xl font-bold">Result: </span>
                          {result}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right: Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ecom-1.png"
                alt="Ayatiworks e-commerce growth"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
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
            <span className="mb-2 block">Industries We Serve</span>

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
              "Fashion and Apparel",
              "Electronics and Gadgets",
              "Home Decor and Furniture",
              "Health and Wellness",
              "Food and Beverage",
              "Beauty and Skincare",
              "Books and Stationery",
              "Sports and Fitness",
              "Automotive Accessories",
              "Jewelry and Accessories",
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
            <span className="mb-2 block">What is Your Brand’s X?</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ecom-2.png"
                alt="Ayatiworks UX UI Design Benefits"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-black/80 space-y-8">
            <ul className="space-y-6">
              {[
                `Every brand has a unique objective - its "X." Whether it's increasing sales, expanding market reach, or enhancing customer engagement, Ayatiworks is dedicated to achieving your specific goals.`,
                `For example, a Food & Beverage client aimed to attract bachelors missing home-cooked meals. We crafted targeted social media campaigns showcasing their offerings, resulting in a 50% sales increase.`,
                `In the Fashion industry, a startup wanted to boost online visibility. Our SEO and influencer marketing strategies led to a 70% growth in website traffic.`,
                `A Health & Wellness brand sought to educate consumers about their products. Through informative blogs and email newsletters, they saw a 30% rise in customer inquiries.`,
                `Our tailored strategies have consistently delivered measurable results across various sectors, transforming businesses digitally and adding significant value to their growth trajectories.`,
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
