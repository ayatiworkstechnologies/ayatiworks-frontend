"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Client Goal Analysis",
    points: ["Understand objectives and customer personas."],
  },
  {
    id: 2,
    title: "2. Market Research",
    points: ["Study industry benchmarks and affiliate trends."],
  },
  {
    id: 3,
    title: "3. Affiliate Selection",
    points: ["Identify and vet high-quality partners."],
  },
  {
    id: 4,
    title: "4. Strategy Design",
    points: ["Map out offer strategy, content plans, and channels."],
  },
  {
    id: 5,
    title: "5. Content Creation",
    points: ["Provide assets to align with affiliate platforms."],
  },
  {
    id: 6,
    title: "6. Campaign Launch",
    points: ["Execute with tracking and monitoring in place."],
  },
  {
    id: 7,
    title: "7. Performance Tracking",
    points: ["Analyze key KPIs and funnel movement."],
  },
  {
    id: 8,
    title: "8. Optimization",
    points: ["Improve based on insights and test outcomes."],
  },
  {
    id: 9,
    title: "9. Reporting",
    points: ["Deliver transparent weekly/monthly reports."],
  },
  {
    id: 10,
    title: "10. Scaling",
    points: ["Identify top performers and scale with increased investment."],
  },
];

const data = [
  {
    title: "Affiliate Recruitment and Onboarding ",

    desc: "Our recruitment process is both strategic and data driven. We identify affiliates who align with your industry, values, and audience. Vetting involves assessing engagement rates, historical performance, and platform credibility. Once selected, affiliates are onboarded through structured briefing, creative access, and incentive-based models. This process ensures every partnership is positioned for success, driving results through affiliate marketing in India.",
  },
  {
    title: "Campaign Strategy and Management  ",

    desc: "We create detailed affiliate marketing strategies that align with your business objectives. From audience segmentation and offer planning to promotional calendar design, we build high-conversion campaigns. Our team manages every element from approvals and tracking setup to budget pacing and compliance ensuring seamless execution. As the best affiliate marketing agency in India, we handle complexities so you can focus on scaling.",
  },
  {
    title: "Content Creation and Promotion",

    desc: "High-quality content fuels affiliate success. We provide affiliates with compelling creatives, product information, SEO-optimized copy, and video assets tailored to their audiences. Additionally, we run co-branded promotions across blogs, YouTube, and social media. By prioritizing brand voice and relevance, we ensure content built for affiliate marketing in India drives both trust and transactions.",
  },
  {
    title: "Performance Tracking and Optimization",

    desc: "Our real-time dashboards provide clear insights into clicks, leads, sales, and revenue contribution. Using advanced analytics, we identify top performers, drop-offs, and optimization opportunities. Campaigns are regularly refined for better CTR, conversion rates, and ROI. As the best affiliate marketing agency in India, our performance-first mindset keeps your growth trajectory upward.",
  },
];


function HeroServicePage() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  

  // Get 4 cards to ensure smooth slide
  const getVisibleCards = () => {
    return [
      data[index % data.length],
      data[(index + 1) % data.length],
      data[(index + 2) % data.length],
      data[(index + 3) % data.length], // hidden buffer card for sliding
    ];
  };

  const visibleCards = getVisibleCards();

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
              Affiliate Marketing Services by Ayatiworks - <br />
              Best Affiliate Marketing Agency in India
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
              At Ayatiworks, we help businesses scale through result-driven
              affiliate marketing strategies. As the best affiliate marketing
              agency in India, we deliver measurable outcomes by connecting your
              brand with high-performing affiliate partners. Whether you're a
              startup or an enterprise, our campaigns are built to fuel revenue
              growth, optimize ROI, and extend your market reach through trusted
              collaborations. Our deep industry knowledge and tech-enabled
              execution have made us a go-to choice for brands looking to unlock
              scalable performance marketing.
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
              Why Choose Ayatiworks for Affiliate Marketing?{" "}
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/aff-1.png"
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
                Ayatiworks is India’s top choice for affiliate marketing,
                offering deep domain expertise and a full-suite affiliate
                ecosystem. Our team brings decades of combined experience
                across performance marketing , e-commerce , and digital
                partnerships. With an in-house affiliate network, curated
                through strict vetting, we ensure your brand gets premium
                placement across relevant channels. We've been recognized by top
                industry bodies and have received multiple accolades for
                excellence in performance-driven marketing. As the best
                affiliate marketing agency in India, we tailor every campaign to
                align with your brand’s growth goals. Our data-led approach and
                transparent execution make us the most trusted partner for
                affiliate marketing in India.
              </p>

              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  Proven Track Record
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  We take pride in our results. From tech giants like Xiaomi to
                  established FMCG brands like Naga Foods, our affiliate
                  marketing campaigns have consistently driven conversions and
                  brand visibility.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  For Xiaomi, we enabled a 30% spike in mid-funnel conversions
                  within 90 days. For Naga Foods, our hyperlocal affiliate push
                  expanded reach across Tier 2 cities, doubling their online
                  sales in one quarter. Our proven success underlines our
                  commitment to delivering impactful affiliate marketing in
                  India.{" "}
                </p>
              </div>
              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  Tailored Strategies
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                   At Ayatiworks, we don’t believe in one-size-fits-all
                  marketing. Every brand is unique, and so are our strategies.
                  Our affiliate marketing services begin with a comprehensive
                  brand audit, followed by personalized campaign mapping.
                </p>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  From choosing the right affiliate types to defining commission
                  structures and crafting creatives, everything is designed with
                  your specific goals in mind. As the best affiliate marketing
                  agency in India, we ensure your campaigns deliver long-term
                  value and brand alignment.{" "}
                </p>
              </div>
              <div className="space-y-2">
                {/* ✅ Title with Icon */}
                <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                  <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                  In-House Affiliate Network
                </p>

                {/* ✅ Paragraph with left indent */}
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                  Our strength lies in our exclusive in-house affiliate network
                  that includes bloggers, influencers , comparison sites, and
                  loyalty platforms. Each partner is handpicked based on
                  relevance, credibility, and performance history. This allows
                  us to maintain quality control and ensure your campaigns reach
                  high-intent audiences. With Ayatiworks, affiliate marketing in
                  India is about meaningful collaborations that convert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="section-title text-left">
            <span className="mb-2 block">
              Ayatiworks Affiliate Marketing Services
            </span>
            <div className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full" />
          </h2>
        </div>
        <div className="text-left mb-12">
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium">
            Ayatiworks provides a complete range of affiliate marketing services
            tailored to businesses of all sizes. From affiliate recruitment to
            performance optimization, we support your brand at every stage. Our
            affiliate marketing services are designed to generate leads,
            increase conversions, and improve customer acquisition
            cost-effectively. As the best affiliate marketing agency in India,
            we empower you with tools, talent, and insights to scale your
            business through affiliate marketing in India.
          </p>
        </div>

        {/* Smooth sliding carousel */}
        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          <motion.div
            key={index}
            className="flex gap-6"
            initial={{ x: 0 }}
            animate={{ x: "-25%" }} // shift left by 1 card (out of 4)
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {visibleCards.map((item, i) => (
              <div
                key={item.title + i}
                className="bg-white p-6 shadow-md hover:shadow-xl transition w-[300px] flex-shrink-0"
              >
                <h3 className="text-secondary font-medium font-primary text-xl sm:text-3xl mb-4">
                  {item.title}
                </h3>

                <p className="text-black/80 text-base sm:text-lg font-primary">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
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
              Benefits of Affiliate Marketing with Ayatiworks
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
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium">
            With Ayatiworks, your affiliate marketing becomes a powerful channel
            for sustainable, cost-effective growth. Our performance-driven model
            ensures you only pay for results. Affiliates help tap into new
            audiences, and our scalable campaigns suit every business size. As
            the best affiliate marketing agency in India, we simplify
            performance marketing for consistent revenue expansion through
            affiliate marketing in India.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            <div className="space-y-2">
              {/* ✅ Title with Icon */}
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Cost-Effective Growth
              </p>

              {/* ✅ Paragraph with left indent */}
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                Affiliate marketing in India offers unmatched efficiency. With a
                pay-for-performance model, brands can manage acquisition costs
                while focusing on results. Our targeted execution ensures every
                rupee spent delivers value.
              </p>
            </div>
            <div className="space-y-2">
              {/* ✅ Title with Icon */}
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Wider Brand Reach
              </p>

              {/* ✅ Paragraph with left indent */}
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                Affiliates act as brand evangelists across various digital
                ecosystems. From blogs to review platforms, our campaigns place
                your brand in front of audiences you might otherwise miss. It’s
                affiliate marketing in India, done with purpose.
              </p>
            </div>
            <div className="space-y-2">
              {/* ✅ Title with Icon */}
              <p className="flex items-center gap-2 text-lg sm:text-xl md:text-3xl text-secondary font-primary">
                <GoDotFill className="text-primary text-lg sm:text-xl md:text-xl" />
                Scalable Campaigns
              </p>

              {/* ✅ Paragraph with left indent */}
              <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80 pl-8">
                 Whether you're a startup or an enterprise, we build campaigns
                that grow with you. Our affiliate marketing in India framework
                allows for flexible budgets, multi-tier structures, and dynamic
                scaling based on performance data.
              </p>
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/aff-2.png"
                alt="Search Engines Work"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
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
            Industries We Serve
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto mt-4 bg-white h-1 w-32 sm:w-48 md:w-64 origin-center rounded-full"
            />
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            Our affiliate marketing services cater to a broad spectrum of
            industries. From retail and FMCG to fintech, edtech, travel,
            fashion, health & wellness, SaaS, and real estate, we understand
            unique vertical dynamics. We create customized affiliate marketing
            campaigns that resonate with niche audiences and drive
            category-specific results. Our vast domain experience allows us to
            plug into the affiliate ecosystems that matter most for your brand.
          </p>
        </div>
      </section>

      <section className="section-container py-16">
        <div className=" shadow-lg hover:shadow-2xl p-8 sm:p-12 text-center text-primary relative overflow-hidden">
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
            Our Process
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto mt-4 bg-secondary h-1 w-32 sm:w-48 md:w-64 origin-center rounded-full"
            />
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-primary text-secondary mx-auto">
            Our affiliate marketing process is backed by a 10-phase methodology
            that ensures consistent and scalable outcomes. It begins with
            understanding your brand's goals and ends with scaling successful
            campaigns. With strategic planning, quality partnerships, and
            performance analytics, we deliver affiliate marketing in India that
            drives real business growth.{" "}
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
            className="section-title text-left "
          >
            <span className="mb-2 block">
              10-Phase Affiliate Marketing Approach
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

        <div className="text-left mb-12">
          <p className="text-base/7 sm:text-lg/7 md:text-xl/7 text-black/80 mt-4 font-secondary font-medium">
            As the best affiliate marketing agency in India, we combine
            structure with agility for sustainable affiliate marketing in India.
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
            className="section-title text-left"
          >
            <span className="mb-2 block">Discovery and Analysis</span>

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
          <p className="flex items-start gap-2 text-base sm:text-lg md:text-xl text-black/80 mt-4 font-secondary font-medium">
            <GoDotFill className="text-primary text-xl flex-shrink-0 mt-1" />
            We begin with detailed consultations to understand your business,
            market, and objectives. Competitive audits and audience behavior
            analysis help uncover positioning gaps. This research-first mindset
            shapes every decision in our affiliate marketing in India
            strategies.
          </p>
        </div>
      </section>

      <AutoImageSlider />

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
            Why Affiliate Marketing Matters
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto mt-4 bg-white h-1 w-32 sm:w-48 md:w-64 origin-center rounded-full"
            />
          </motion.h2>

          {/* Paragraph */}
          <p className="relative text-base/8 sm:text-lg/8 md:text-lg/8 font-secondary max-w-8xl mx-auto">
            Affiliate marketing is one of the most effective digital channels
            for driving qualified leads and sales. As digital consumers grow
            wary of traditional ads, affiliate marketing in India bridges trust
            through peer-driven recommendations. The model is low-risk,
            data-rich, and scalable, making it essential for modern marketing
            mixes. With mobile-first audiences and creator-led commerce booming,
            the role of affiliate marketing in India has never been more
            critical. As the best affiliate marketing agency in India,
            Ayatiworks helps you stay ahead of the curve.
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
            <span className="mb-2 block">Get Started with Ayatiworks</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/aff-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ">
                  Ready to unlock your brand’s growth through affiliate
                  marketing in India?
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed">
                  Connect with Ayatiworks, the best affiliate marketing agency
                  in India.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ">
                  Reach out for a consultation and discover how our affiliate
                  marketing in India services can accelerate your customer
                  acquisition.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-primary text-lg mt-1 flex-shrink-0" />
                <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ">
                  Let’s build something profitable together.Contact us today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
