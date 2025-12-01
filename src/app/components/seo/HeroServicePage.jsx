"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "Step 1: Deep-Dive Audit",
    subtitle: "(Your Website’s “Health Check”)",
    points: [
      "Technical SEO: Site speed, mobile-friendliness, crawl errors.",
      "Content Gaps: What’s missing vs. competitors.",
      "Backlink Quality: Remove toxic links, build authority.",
    ],
  },
  {
    id: 2,
    title: "Step 2: Hyper-Targeted Keyword Strategy",
    points: [
      "“Affordable ERP software Chennai...”",
      "“Top IVF Clinic Adyar”",
      "Keywords drilled to your niche: Informational → Transactional",
    ],
  },
  {
    id: 3,
    title: "Step 3: Content That Converts",
    points: [
      "Writers: Chennai-based & International",
      "Localized Guides: “How to Choose a Wedding Hall in Chennai”",
      "Product Pages: Voice-optimized product pages",
      "Blogs with Data: “2024 Chennai Consumer Trends Report”",
      "Informational Content: AI optimized",
    ],
  },
  {
    id: 4,
    title: "Step 4: Authority Building",
    points: [
      "We earn backlinks from:",
      "Country-Based Business Portals",
      "Industry-Specific Sites",
      "Global Publications",
      "High Domain Authority Sites (Country-wise)",
      "Outreach Campaigns",
    ],
  },

  {
    id: 6,
    title: "Step 5: Monthly Reporting",
    points: [
      "Track: Transparency = Trust",
      "Keyword Rankings: Local + National + International",
      "Organic traffic growth",
      "Conversion rates (Calls, form fills, sales)",
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Motive - 1",
    subtitle: "We Speak “ROI” - Not Just SEO Jargon",
    cases: [
      "Case Study: A Chennai-based hospital saw 214% more appointment bookings in 6 months.",
      "Case Study: An e-commerce brand scaled organic revenue by ₹2.8 crore/year.",
    ],
  },
  {
    id: 2,
    title: "Motive - 2",
    subtitle: "We’re Chennai’s SEO Pioneers",
    cases: [
      "10+ years perfecting SEO in Chennai’s unique market.",
      "Award-Winning: “Best Digital Marketing Agency 2023” - “Trendsetters of Tamil Nadu” (Times of India).",
    ],
  },
  {
    id: 3,
    title: "Motive - 3",
    subtitle: "Adapt or Die - We Master Trends",
    cases: [
      "2025 Focus: AI-driven content optimization, Core Web Vitals, E-E-A-T (Expertise, Experience, Authoritativeness, Trust).",
      "Voice Search Ready: “Alexa, find the best SEO agency near me.”",
      "AI Driven SEO Optimization: with ZERO-Click SEO",
    ],
  },
];

const seoPoints = [
  {
    title: "Web Architecture",
    text: "We architect a strategic framework that powers your website’s functionality, performance, and user experience. It involves how your site structure, design, and technical aspects work together to ensure seamless navigation, fast-loading speeds, and scalability. A well-planned web architecture boosts SEO, enhances user satisfaction, and delivers frictionless experiences , key factors in driving traffic from top-ranked search engines.",
  },
  {
    title: "Web Content SEO Optimized",
    text: "SEO-optimized web content is strategically crafted and thoughtfully written to align with search engines while engaging your audience. It delivers keyword relevance, clear structure, and user intent within the targeted market. Our SEO-optimized web content not only boosts visibility but also builds brand authority, strengthens messaging, and reaches the right audience effectively.",
  },
  {
    title: "Technical SEO",
    text: "Technical SEO is the backbone of your website’s performance, ensuring search engines can crawl, index, and rank your pages effectively. It involves optimizations like faster site speed, secure connections (HTTPS), mobile-friendly design, structured data, and improved architecture. These elements collectively reduce bounce rates, cut about-section bottlenecks, fix crawl errors, and improve site rankings , resulting in greater reach, higher traffic, and conversions.",
  },
  {
    title: "On-Page Optimization",
    text: "On-page optimization is the process of making every page on your website search-engine-friendly and user-focused. It involves optimizing meta tags, headers, keywords, and internal links to enhance indexation and readability. A well-optimized page ensures higher rankings, better engagement, and greater conversions.",
  },
  {
    title: "Off Page Optimization",
    text: "Off-page optimization is the practice of building your website’s authority and trust beyond its pages. It includes quality backlinks, social media signals, influencer marketing, guest blogging, and brand credibility. A strong off-page strategy drives organic traffic, improves search visibility, and builds credibility through backlinks.",
  },
  {
    title: "Competitor Analysis",
    text: "Competitor analysis helps us blueprint your SEO strategy’s position in the digital space. It uncovers their strengths, keywords, and backlink sources while analyzing gaps. By learning from SEO and marketing approaches, identifying gaps and opportunities, we position your business for greater visibility and market dominance.",
  },
  {
    title: "Local SEO",
    text: "Local SEO is your business on the map, literally. It optimizes your online presence for location-based searches, ensuring you appear in Google’s local pack, maps, and nearby searches. From Google Business Profile optimization to local citations, we help your business capture foot traffic and local customers.",
  },
];

const Teamsteps = [
  {
    id: 1,
    title: "1M+ Organic Visitors Generated for EduTech Brandst",
  },
  {
    id: 2,
    title: "$10M+ Revenue Boosted for E-Commerce Brands",
  },
  {
    id: 3,
    title: "5X Increase in Leads for Fintech Startups",
  },
  {
    id: 4,
    title: "250% Growth in Social Media Engagement for Hospitality Brands",
  },

  {
    id: 5,
    title: "40% Lower Cost Per Acquisition (CPA) for Healthcare Businesses",
  },

  {
    id: 6,
    title: "2M+ Video Views for Food & Beverage Brands",
  },
  {
    id: 7,
    title: "80% Email Open Rate for B2B Businesses",
  },
  {
    id: 8,
    title: "100+ Businesses Achieved 7-Figure Growth with Us",
  },
  {
    id: 9,
    title: "35% Increase in Footfall for Retail & Jewelry Stores",
  },
  {
    id: 10,
    title: "Guaranteed Results with Data-Driven Marketing",
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
              Award Winning SEO Company in Chennai
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
              What Next??? <br />
              Now that you have landed on our highly optimized SEO Services
              Page, What Next? <br />
              Speak Ayati’s Language - The Next is Now! <br />
              Let’s show you what we have shown our existing clients -{" "}
              <span className="text-secondary font-primary text-xl font-medium">
                GROWTH! REVENUE! BUSINESS!
              </span>{" "}
              <br />
              We know you are hunting for the best SEO company in Chennai to
              help you achieve your business goals. While making your search you
              found us, next is to discuss further your business objectives,
              before that you need to know why you must work with AI - Ayati
              Innovators
              <span className="text-secondary font-medium font-primary text-xl">
                AI - Ayati Innovators
              </span>
              .
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
            <span className="mb-2 block">
              Why Ayatiworks is the Best SEO Company in Chennai
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-3.png"
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
                  Let’s get comfortable - Rapport isn’t built overnight; we earn
                  our clients because we learn them inside out to ensure we
                  think like them to serve their target audience.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Ayatiworks as a team pledge to understand the complete story
                  from client’s POV. We are industry and domain agnostic; we
                  have the expertise to ensure that you as a business get what
                  you want.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  As Chennai’s #1 award-winning SEO agency, we’ve helped 350+
                  businesses in various domains and countries like India, US,
                  UK, NZ, CA, UAE & Singapore dominate search engines, drive
                  organic traffic, and convert clicks into revenue.
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
              What’s the SEO Objective of Your Business?
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
                  Real Problems are often unaddressed sometimes unknown...
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Every business comes to us with great expectations like, “We
                  need more traffic, higher rankings, and real revenue growth
                  organically”
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary leading-relaxed flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  We don’t promise our clients the universe, we know the facts
                  about SEO & its working style being in the industry for
                  decades, so we offer calculative assurances as opposed to
                  false promises.
                </p>
              </div>
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
        <div className="py-5 font-primary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side - Here's the Truth */}
            <div>
              <h2 className="font-primary text-secondary text-xl sm:text-2xl font-medium mb-6">
                Here’s the Truth
              </h2>
              <ul className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>
                    77% of websites never make it to Page 1 (Ahrefs, 2023).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>
                    75% of users never scroll past the first page (Google).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>Poor SEO = Your competitors steal your customers</span>
                </li>
              </ul>
            </div>

            {/* Right Side - Ayatiworks’s Assurance */}
            <div>
              <h2 className="text-xl font-primary text-secondary  sm:text-2xl font-medium mb-6">
                Ayatiworks’s Assurance
              </h2>
              <p className=" text-secondary font-medium mb-6">
                Whether you’re a Chennai-based startup or an enterprise, we
                tailor strategies to fulfill your business objectives.
              </p>

              <ul className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>
                    Local Domination: Rank #1 for your niche in Chennai.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>National/Global Reach: Scale beyond Tamil Nadu.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>Revenue-Driven SEO: Track ROI, not just rankings.</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaRegDotCircle className="text-sky-600 text-lg flex-shrink-0 mt-1" />
                  <span>
                    International SEO: For businesses spreading beyond their
                    country.
                  </span>
                </li>
              </ul>
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
              Ayati’s SEO Strategic Approach: No Guesswork, Just Results
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
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md ${
                step.id === 5 ? "md:col-span-2" : ""
              }`}
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
            <span className="mb-2 block">Why Team Up with Ayatiworks?</span>

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
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium leading-relaxed">
              You definitely need a strong reason to team up with a digital
              marketing agency offering you SEO Services and the reason should
              be more than “the best SEO company in Chenni”. <br />
              We are aware of what speaks! - Ayati's actions will!
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium leading-relaxed">
              You should be motivated to do business with Ayatiworks because our
              happy clients believe in our work and our productivity.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium leading-relaxed">
              Your Motive to join the bandwagon of our Happy Clients’
            </p>
            <ul className="space-y-8 text-black/80">
              {motives.map((motive) => (
                <li key={motive.id} className="flex gap-4">
                  {/* Icon */}
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />

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
            <span className="mb-2 block">
              What Does Your Brand’s Traffic Say About You?
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
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed">
              What if your website is a ghost town?
            </h3>
            <p className="text-base/7 sm:text-lg/9 md:text-lg/9 text-black/80 font-secondary font-medium">
              Imagine having a well-done website with loads of effort and your
              target audience are blank about it. Google has a clear-cut formula
              and operates on fair basis of showing your business website to
              your target audience if you have fulfilled all the Google
              Webmaster’s guidelines and have relatable content to the intent of
              the person searching for a particular service. Nothing works in
              isolation on Search Engines. It’s a collective effort.So, if you
              have heard “Content is the King”, we don’t deny it, but a King who
              doesn’t know how to rule is not fit to be a King although he is
              technically a KING! We at Ayatiworks spend time and effort to
              ensure that we create rock solid content that rules the SERP
              space, resonates with your audience and just turn clicks into
              business
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-secondary font-primary font-medium leading-relaxed">
              What do you lose if your website doesn’t show up when your
              customer searches for something related to your service?
            </h2>
            <p className="text-base/8 sm:text-lg/8 md:text-xl/8 text-black/80 font-secondary font-medium">
              {" "}
              <span className="font-medium font-primary">
                {" "}
                Credibility: “Why isn’t this company on Page 1?”Sales:{" "}
              </span>{" "}
              <br />
              93% of buying journeys start with a search
            </p>
            {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p>
            <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
          </div>
          {/* Right - Sticky Image */}
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
            <span className="mb-2 block">Ayati’s Digital APPROACH</span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-5.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraphs */}
            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
                Our Promise are not common because no business requires the same
                service or efforts and strategies. We tailor our strategies
                according to the requirements of the business.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
                But we cannot differ from any other SEO Expert out there in the
                market and even according to Google SEO isn’t a Sprint Marketing
                or Sales Stunt, it is a Marathon!
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
                As per our SEO Industry Expertise and our past experience when
                you come to us for SEO services for your business we simply work
                with the below plan, this plan can be changed depending on your
                business requirement
              </p>
            </div>

            {/* Highlighted Timeline */}
            <div className="flex items-center gap-3 text-secondary border border-gray-400 rounded-full px-4 py-3">
              <FaRegDotCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl font-primary font-medium leading-relaxed">
                Month 1-3: Fix technical errors, publish strategic content.
              </span>
            </div>

            <div className="flex items-center gap-3 text-secondary border border-gray-400 rounded-full px-4 py-3">
              <FaRegDotCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl font-primary font-medium leading-relaxed">
                Month 4-6: Target low-competition keywords, build links.
              </span>
            </div>

            <div className="flex items-center gap-3 text-secondary border border-gray-400 rounded-full px-4 py-3">
              <FaRegDotCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base sm:text-lg md:text-xl font-primary font-medium leading-relaxed">
                Month 6+: Dominate top keywords, scale conversions.
              </span>
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
            <span className="mb-2 block">Does SEO take a lot of time?</span>

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
              A common question we get from almost all the clients who come to
              us for SEO, “How long will it take to get ranked on Page - 1?”
            </p>

            <p className="text-base/8 sm:text-lg/8 md:text-lg/8 text-black/80 font-secondary font-medium">
              In our experience answering the question with a common perspective
              it can take anywhere between 3 to 6 months to rank a website on
              rank #1 on page one.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              In reality it can differ from one business to another. There is no
              one size that fits all.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              For example: A curtain wholesaler who operates in the neighborhood
              would need a different strategy in comparison with a curtain
              wholesaler who operates in a few states within the country. The
              strategy can vary if the curtain wholesaler operates
              internationally.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Ideally, we cannot implement one strategy to get to the position
              rank#1
            </p>
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-6.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        {/* Heading */}

        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">How soon can I Rank my business?</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Intro */}
        <p className="text-base sm:text-lg md:text-xl text-secondary font-primary leading-relaxed mb-10">
          The actual timeline often depends on the market competition & SEO
          strategies. Though some websites see results within the first 3-6
          months for low competition keywords, ranking for highly competitive
          industries may take 9-12+ months. Our approach is based on building a
          strong foundation through web architecture, technical SEO, content,
          and ongoing optimization. With consistent effort, SEO helps you not
          only rank but sustain long-term growth. The SEO phases we cover are
          given below.
        </p>

        {/* List */}
        <div className="space-y-8">
          {seoPoints.map((point, idx) => (
            <div key={idx} className="space-y-2">
              {/* Title */}
              <div className="flex items-start gap-2">
                <GoDotFill className="text-sky-600 text-lg mt-1 flex-shrink-0" />
                <h3 className="text-xl sm:text-3xl font-medium font-primary text-secondary">
                  {point.title}
                </h3>
              </div>
              {/* Text */}
              <p className="text-black/80 text-sm sm:text-base font-secondary md:text-lg leading-relaxed ml-7">
                {point.text}
              </p>
            </div>
          ))}
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
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Ayati’s SEO Strategic Approach: No Guesswork, Just Results
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
          {Teamsteps.map((step) => (
            <div
              key={step.id}
              className={`bg-white shadow-md border border-gray-200 p-6 rounded-md transition hover:shadow-lg `}
            >
              {/* Step Title */}
              <h3 className="font-primary text-secondary font-medium text-xl sm:text-2xl">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
