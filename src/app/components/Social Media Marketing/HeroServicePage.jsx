"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
import Link from "next/link";
import FAQSection from "./FAQSection";

const steps = [
  {
    id: 1,
    title: "Step 1: Social Media Audit (Chennai Market Fit)",
    subtitle: "A complete audit of:",
    points: [
      "Profile optimisation",
      "Engagement health",
      "Peak Chennai activity times",
      "Local competitor mapping",
      "Content gaps",
    ],
    subtitle1: "Outcome:",
    points1: [
      "A clear understanding of what your Chennai audience will respond to.",
    ],
  },

  {
    id: 2,
    title: "Step 2: Audience-First Strategy (Built for Chennai’s Segments)",
    subtitle: "We plan content for:",
    points: [
      "Gen Z shoppers",
      "Professionals",
      "Elite dining audiences",
      "Local retail buyers",
      "B2B clusters in OMR / Guindy",
    ],
    subtitle1: "Outcome:",
    points1: ["Every segment interacts differently, and we optimise for it."],
  },

  {
    id: 3,
    title: "Step 3: Content That Captures and Converts",
    subtitle: "We create:",
    points: [
      "Scroll-stopping reels",
      "Visual-first carousels",
      "Story-driven short videos",
      "Interactive formats: polls, UGC prompts, quizzes",
      "Brand storytelling aligned to Chennai culture",
    ],
    subtitle1: "Outcome:",
    points1: ["This is how brands become unforgettable."],
  },

  {
    id: 4,
    title: "Step 4: Paid Social Ads with Hyperlocal Targeting",
    subtitle: "We target:",
    points: [
      "Chennai neighbourhoods",
      "Interest clusters",
      "Lookalike audiences",
      "High-intent segments",
    ],
    subtitle1: "Ads are built for:",
    points1: [
      "Leads ",
      "store visits ",
      "event footfalls",
      "product sales",
      " website traffic.",
    ],
  },

  {
    id: 5,
    title: "Step 5: Community Management & Brand Reputation",
    subtitle: "We help brands:",
    points: [
      "Respond fast",
      "Build trust",
      "Maintain brand voice",
      "Turn customers into advocates through UGC",
    ],
    subtitle1: "Outcome:",
    points1: [
      "Negative feedback is handled professionally, protecting brand reputation.",
    ],
  },

  {
    id: 6,
    title: "Step 6: Data-Driven Optimisation",
    subtitle: "Weekly optimisation cycles ensure:",
    points: [
      "Better CTR",
      "Improved reach",
      "Lower CPCs",
      "Higher ROAS",
      "Higher conversions",
    ],
    subtitle1: "Outcome",
    points1: ["We don’t just run campaigns.", " We engineer growth loops."],
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Hero Motors — Chennai, TN",
    subtitle: "Regional Performance Campaign",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png",
    cases: [
      "90X surge in walk-ins across metro cities, including Chennai.",
      "Regional storytelling backed by multilingual social media marketing.",
      "Performance-driven ad campaigns optimised for footfall growth.",
    ],
    subhead: "Outcome",
    points:
      "Strong regional resonance resulted in exceptional walk-in growth across key metro markets.",
  },

  {
    id: 2,
    title: "Naga Foods — Tamil Nadu",
    subtitle: "Ramadan Campaign & Internal Communication",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png",
    cases: [
      "90X increase in online pasta sales across Tamil Nadu.",
      "High cultural engagement through festival-led storytelling.",
      "WhatsApp-based content distribution for internal and external reach.",
    ],
    subhead: "Outcome",
    points:
      "The campaign built strong emotional brand connections while significantly improving sales performance.",
  },

  {
    id: 3,
    title: "Royal Enfield — Chennai",
    subtitle: "Mobile Bike Servicing Awareness Drive",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png",
    cases: [
      "60X increase in customer enquiries.",
      "30X growth in showroom walk-ins.",
      "Tamil and Tanglish reels combined with hyperlocal PPC and influencer storytelling.",
    ],
    subhead: "Outcome",
    points:
      "Successfully revived post-COVID showroom activity and reactivated customer engagement in Chennai.",
  },
  {
    id: 4,
    title: "Nithya Amirtham Eternal Fine Dine",
    subtitle: "Nungambakkam (Luxury F&B Launch)",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png",
    cases: [
      "50X footfalls + 30X surge in signature dish orders",
      "SMM campaigns + influencer partnerships + elite audience targeting",
      "Drove a fine-dine sensory experience that Chennai embraced.",
    ],
    subhead: "Outcome",
    points: "Our SMM Services for Chennai",
  },
];

function HeroServicePage() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  /* ================= RESPONSIVE CARD COUNT ================= */
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // tablet
      } else {
        setVisibleCards(3); // desktop
      }
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  /* ================= INDEX CONTROL ================= */
  const maxIndex = Math.max(steps.length - visibleCards, 0);

  useEffect(() => {
    if (index > maxIndex) {
      setIndex(maxIndex);
    }
  }, [index, maxIndex]);
  return (
    <>
      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Award-Winning Social Media Marketing Agency in Chennai
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-top">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-black/80 space-y-4"
          >
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Where creativity meets precision. Where Chennai brands scale
              faster. Ayatiworks builds platform-first, data-driven SMM
              campaigns engineered for engagement, conversions & revenue.
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl text-secondary font-primary text-left"
            >
              Social Media Marketing That Works for Chennai’s Digital Audience
            </motion.h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Chennai isn’t one audience. It’s many, it’s an Army.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              From OMR professionals to Nungambakkam fine-diners and North
              Chennai retail shoppers, every segment behaves differently on
              social media.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Businesses need to cut to the chase by knowing their army really
              well. From Boomers to Millenials, Gen-z to Gen Alpha it becomes
              the marketer's challenge to prepare their buyer’s persona and
              attract their target audience.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              As a full-stack digital partner, Ayatiworks integrates Social
              Media Marketing with our broader suite of{" "}
              <Link
                href="https://www.ayatiworks.com/digital-marketing-services"
                className="text-secondary font-semibold underline underline-offset-4 hover:opacity-80 transition"
              >
                Digital Marketing Services
              </Link>{" "}
              to give Chennai brands a unified, ROI-driven growth engine.
            </p>

            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Which is why{" "}
              <strong> generic SMM strategies underperform.</strong>{" "}
            </p>
            {/* CTA Button */}
            <Link href="https://www.ayatiworks.com/contact-us" passHref>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                          inline-flex
                          items-center
                          justify-center
                          text-center
                          bg-secondary text-white
                          font-primary text-lg
                          px-10 py-4
                          rounded-full
                          shadow-lg hover:shadow-2xl
                          transition-all duration-300
                          cursor-pointer
                          leading-none mt-4
                        "
              >
                CLAIM YOUR FREE SMM AUDIT
              </motion.span>
            </Link>
          </motion.div>

          {/* Right - Sticky Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <div className="sticky space-y-6">
              {/* Floating Image */}
              <motion.img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/smm-1.png"
                alt="Ayatiworks Social Media Marketing Team"
                className="w-full h-full mx-auto"
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
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            Ayatiworks builds Chennai-specific campaigns shaped by
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/smm-2.png"
                alt="Search Engines Work"
                className="w-full h-full mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <div className="space-y-6">
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Local cultural cues
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  City-specific engagement patterns
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Tamil + Tanglish behavioural triggers
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Competitor activity within Chennai
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Platform-first content behaviour
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  UGC – User Generated Content
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              {" "}
              You don’t need “more posts.”{" "}
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              {" "}
              You need <strong> Chennai-relevant social storytelling </strong>
              that drives outcomes.{" "}
            </p>
            {/* CTA Button */}
            <Link href="https://www.ayatiworks.com/contact-us" passHref>
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                    inline-flex
                    items-center
                    justify-center
                    text-center
                    bg-secondary text-white
                    font-primary text-lg
                    px-10 py-4
                    rounded-full
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300
                    cursor-pointer
                    leading-none
                  "
              >
                GET A FREE CHENNAI MARKET INSIGHTS FOR YOUR BUSINESS
              </motion.span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            Why Ayatiworks is Chennai’s Preferred SMM Partner
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              {" "}
              Chennai businesses don’t just look for social media agencies, they
              look for partners who can blend creativity with measurable
              performance. Brands want reels that stop the scroll, ads that
              convert, and strategies that deliver ROI, not vanity metrics.{" "}
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              {" "}
              Every reel, carousel, and brand story is crafted through our
              in-house{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service"
                className="text-secondary font-semibold underline underline-offset-4 hover:opacity-80 transition"
              >
                Content Services
              </Link>{" "}
              , ensuring Chennai brands get platform-optimized creatives that
              perform{" "}
            </p>
            <div className="space-y-6">
              {/* ITEM 1 */}
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-primary text-xl flex-shrink-0" />
                  <h4 className="text-base sm:text-lg md:text-2xl font-primary text-secondary">
                    Deep Local Expertise
                  </h4>
                </div>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-secondary text-black/80">
                  We understand how Chennai audiences interact with brands, from
                  Anna Nagar to Velachery to ECR.
                </p>
              </div>

              {/* ITEM 2 */}
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-primary text-xl flex-shrink-0" />
                  <h4 className="text-base sm:text-lg md:text-2xl font-primary text-secondary">
                    Award-Winning Creative + Performance
                  </h4>
                </div>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-secondary text-black/80">
                  Times of India’s{" "}
                  <strong>
                    “Best Digital Marketing Agency 2023 – Trendsetters of Tamil
                    Nadu”
                  </strong>
                  .
                </p>
              </div>

              {/* ITEM 3 */}
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-primary text-xl flex-shrink-0" />
                  <h4 className="text-base sm:text-lg md:text-2xl font-primary text-secondary">
                    Content That Converts
                  </h4>
                </div>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-secondary text-black/80">
                  Reels, shorts, carousels, influencer collabs, community
                  engagement - all purpose-built for Chennai.
                </p>
              </div>

              {/* ITEM 4 */}
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-primary text-xl flex-shrink-0" />
                  <h4 className="text-base sm:text-lg md:text-2xl font-primary text-secondary">
                    10+ Years of Multi-Industry Experience
                  </h4>
                </div>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-secondary text-black/80">
                  We’ve worked with F&B, retail, automobiles, fitness,
                  hospitality, fintech, edtech, FMCG, healthcare, and hyperlocal
                  brands.
                </p>
              </div>

              {/* ITEM 5 */}
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-primary text-xl flex-shrink-0" />
                  <h4 className="text-base sm:text-lg md:text-2xl font-primary text-secondary">
                    Growth Engineering (Not Guesswork)
                  </h4>
                </div>
                <p className="mt-2 text-sm sm:text-base md:text-lg font-secondary text-black/80">
                  Every content piece is backed by data & psychology, crafted to{" "}
                  <strong>convert</strong>, not just engage.
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              <span className="font-priamry text-2xl text-secondary ">
                Ayatiworks has consistently been that sweet spot for Chennai:
              </span>{" "}
              a performance-first SMM partner trusted for creative excellence,
              predictable outcomes, and campaigns engineered to grow revenue,
              not just engagement.
            </p>
          </div>

          {/* Right - Sticky Image */}

          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/smm-3.png"
                alt="Search Engines Work"
                className="w-full h-full  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        {/* ================= TITLE ================= */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Ayatiworks’ Proven 6-Step Social Media Growth Framework
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* ================= SLIDER ================= */}
        <div className="relative">
          {/* ===== Arrows ===== */}
          <div className="absolute -top-14 right-0 flex gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(i - 1, 0))}
              disabled={index === 0}
              className="p-2 border rounded-full disabled:opacity-30"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => setIndex((i) => (i < maxIndex ? i + 1 : i))}
              disabled={index === maxIndex}
              className="p-2 border rounded-full disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>

          {/* ===== Track ===== */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / visibleCards)}%)`,
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  {/* ================= CARD ================= */}
                  <div className="relative bg-white p-6 rounded-md min-h-[260px]">
                    {/* Left centered border */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[200px] w-[4px] bg-secondary rounded-full"></span>

                    <div className="pl-6">
                      <h3 className="font-primary text-secondary font-medium text-2xl mb-4">
                        {step.title}
                        {step.subtitle && (
                          <span className="block text-lg text-secondary mt-1">
                            {step.subtitle}
                          </span>
                        )}
                      </h3>

                      <ul className="font-primary text-lg space-y-2 text-black/80 mb-4">
                        {step.points.map((point, i) => (
                          <li key={i}>• {point}</li>
                        ))}
                      </ul>

                      {step.subtitle1 && (
                        <div>
                          <h2 className="text-secondary font-primary text-lg font-medium mb-2">
                            {step.subtitle1}
                          </h2>
                          <ul className="font-primary text-lg space-y-2 text-black/80">
                            {step.points1.map((point, i) => (
                              <li key={i}>✔ {point}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* ================= END CARD ================= */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        {/* Title */}
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="mb-2 block">
              Chennai Success Stories Powered by Ayatiworks
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* Case Studies */}
        <div className="space-y-20">
          {caseStudies.map((motive, index) => {
            const isReverse = index % 2 === 1;

            return (
              <div
                key={motive.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-top ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <div className={`${isReverse ? "md:order-2" : "md:order-1"}`}>
                  <img
                    src={motive.image}
                    alt={motive.title}
                    className="w-full h-96"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`space-y-6 text-black/80 ${
                    isReverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  {/* Title */}
                  <div className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-primary text-secondary block">
                      {motive.title}
                    </span>
                    <span className="mt-4 text-black/80 font-primary text-lg sm:text-xl block">
                      {motive.subtitle}
                    </span>
                  </div>

                  {/* Case Points */}
                  <div className="space-y-3 mt-5">
                    {motive.cases.map((caseText, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 text-base sm:text-lg text-black/80 font-secondary font-medium"
                      >
                        <GoDotFill className="mt-1 flex-shrink-0 text-black/70" />
                        <span>{caseText}</span>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  {motive.subhead && (
                    <div className="pt-2 mt-5">
                      <h2 className="text-secondary uppercase font-primary text-2xl mb-1">
                        {motive.subhead} :
                      </h2>
                      <p className="text-base sm:text-lg text-black/80 font-secondary">
                        {motive.points}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Full-Stack Social Media Marketing Services We Offer
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/smm-4.png"
                alt="Search Engines Work"
                className="w-full h-full  mx-auto "
              />
            </div>
          </div>
          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            {/* Intro Paragraphs */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Instagram Marketing
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Facebook Strategy
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  LinkedIn B2B Marketing
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Reels & Shorts Creation
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Influencer Marketing (Chennai creators)
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Paid Ads on Meta + YouTube
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Community Management
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  UGC-driven brand growth
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Social media copywriting & design
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
                <p className="text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Performance analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">What Sets Ayatiworks Apart? </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            {/* Intro Paragraphs */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0" />
                  <h4 className="text-secondary font-primary text-lg sm:text-xl font-medium">
                    We Drive Sales, Not Just Likes
                  </h4>
                </div>
                <p className="mt-1 text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Performance-first execution → proven revenue outcomes.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0" />
                  <h4 className="text-secondary font-primary text-lg sm:text-xl font-medium">
                    100% ROI-Driven Framework
                  </h4>
                </div>
                <p className="mt-1 text-base sm:text-lg text-black/80 font-secondary font-medium">
                  Every rupee spent is optimised for measurable action.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0" />
                  <h4 className="text-secondary font-primary text-lg sm:text-xl font-medium">
                    Chennai + Global Expertise
                  </h4>
                </div>
                <p className="mt-1 text-base sm:text-lg text-black/80 font-secondary font-medium">
                  We help Chennai brands scale beyond borders.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0" />
                  <h4 className="text-secondary font-primary text-lg sm:text-xl font-medium">
                    Ahead of Trends
                  </h4>
                </div>
                <p className="mt-1 text-base sm:text-lg text-black/80 font-secondary font-medium">
                  AI-driven marketing, short-form video mastery, interactive
                  content.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0" />
                  <h4 className="text-secondary font-primary text-lg sm:text-xl font-medium">
                    Engagement That Builds Loyalty
                  </h4>
                </div>
                <p className="mt-1 text-base sm:text-lg text-black/80 font-secondary font-medium">
                  We ensure your brand sounds human, and stays unforgettable.
                </p>
              </div>
            </div>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Ayatiworks has helped transform brands across Chennai, start your
              journey with a partner recognized among the
              <Link
                href="https://www.ayatiworks.com/"
                className="text-secondary font-semibold underline underline-offset-4 hover:opacity-80 transition"
              >
                {" "}
                Best Digital Marketing Agencies in Chennai
              </Link>
              .
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/smm-5.png"
                alt="Search Engines Work"
                className="w-full h-full  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
      <AutoImageSlider />
      <FAQSection />

      <section className="section-container py-16">
        {/* Heading */}
        <div className="mb-14">
          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="section-title text-left"
          >
            <span className="block mb-2">
              Ready to Scale Your Brand in Chennai?
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.25 }}
              className="bg-secondary h-1 w-44 sm:w-60 md:w-72 lg:w-[360px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className=" border border-secondary/20 rounded-3xl p-10 text-center space-y-5 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-primary uppercase text-secondary">
              CLAIM YOUR FREE Social Media Marketing AUDIT
            </h3>

            <p className="text-base sm:text-lg text-black/80 font-secondary font-medium  mx-auto">
              We’ll review your social pages and send personalised insights
              within 24 hours.
            </p>

            <Link href="https://www.ayatiworks.com/contact-us">
              <button className="mt-2 inline-flex items-center justify-center gap-2 bg-secondary text-white font-primary text-lg px-8 py-3 rounded-full shadow-md hover:shadow-xl hover:opacity-95 transition-all duration-300">
                TALK TO AN EXPERT
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default HeroServicePage;
