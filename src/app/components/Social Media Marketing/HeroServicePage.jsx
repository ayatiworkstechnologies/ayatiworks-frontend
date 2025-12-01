"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "Step 1: Social Media Audit (Your Brand’s Digital Health Check)",
    subtitle: "Before launching any campaign, we conduct an analysis:",
    points: [
      `Profile Optimization: Are your social media handles aligned with your brand identity?`,
      ` Engagement Metrics: Are your posts driving interactions, or just floating in the feed?`,
      ` Competitor Analysis: What’s working for your competitors that we can leverage for you?`,
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A Chennai-based Online Fashion Magazine had inconsistent branding across platforms. We optimized their bio, visuals, and content strategy , leading to a 40% increase in profile visits in just a month.`,
    ],
  },
  {
    id: 2,
    title:
      "Step 2: Audience-First Strategy (No More One-Size-Fits-All Content)",
    subtitle:
      "We don’t just post; we create content your audience wants to see :",
    points: [
      "Audience Segmentation: Breaking down your customers into personas , B2B professionals, Gen Z shoppers, local buyers, habitual buyers etc.",
      "Platform-Specific Approach: What works on Instagram won’t work on LinkedIn. We craft strategies for each platform. ",
      "Peak Posting Time Analysis: Using data to post when your audience is most active.",
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A pan-India based restaurant had poor Instagram engagement although being a renowned brand themselves. By shifting posting times and using food trends like "ASMR food reels," their engagement grew by 65% in three months. `,
    ],
  },
  {
    id: 3,
    title: "Step 3: Content That Captivates & Converts",
    subtitle:
      "Our content strategy is designed to “stop the scroll” and drive action :",
    points: [
      "Creative Visuals: Eye-catching carousels, reels, and infographics.",
      "Interactive Elements: Polls, quizzes, AMAs to boost engagement.",
      "Value-Driven Posts: How-to guides, industry insights, and success stories.",
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A Bengaluru based fitness brand struggled with conversions. We introduced "Transformation Tuesdays" posts featuring real client stories, leading to a 30% increase in inquiries. `,
    ],
  },
  {
    id: 4,
    title: "Step 4: Paid Social Ads with Laser Precision",
    subtitle:
      "We make every ad count with targeted, data-backed ad strategies :",

    points: [
      "Custom Audience Targeting: Reaching your ideal customer, whether locally in Chennai, Pan-India or globally.",
      "Retargeting Campaigns: Converting those who engaged but didn’t buy.",
      "A/B Testing: Finding the winning creatives, copy, and formats.",
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A Hyderabad based B2B SaaS company saw 3x more leads by switching from broad targeting to LinkedIn Ads with job-specific targeting. `,
    ],
  },

  {
    id: 5,
    title: "Step 5: Community Management & Real-Time Engagement",
    subtitle:
      "We don’t just post and ghost , our team actively engages with your audience :",

    points: [
      "Quick Response to DMs & Comments: Quicker & Appropriate replies = better brand trust & rapport.",
      "Reputation Management: Handling both positive and negative feedback professionally.",
      "User-Generated Content: Encouraging customers to share their experiences.",
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A beauty brand ignored customer DMs and reviews, losing trust. We set up a 24-hour response system, improving their brand sentiment by 70% in two months. `,
    ],
  },
  {
    id: 6,
    title: "Step 6: Data-Driven Reporting (What’s Working & What’s Not?)",
    subtitle: "We track real impact, not just vanity metrics :",

    points: [
      "Engagement Rates: How well does your content resonate?",
      "Conversion Tracking: Are your followers turning into customers?",
      "ROI Analysis: How much are you earning from your social media spend?",
    ],
    subtitle1: "The Game Changing Action:",
    points1: [
      `A Chennai-based e-commerce brand saw ad costs drop by 28% after we analyzed their ad performance and restructured their targeting.`,
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Motive - 1",
    subtitle:
      "We Drive Sales , Not Just Likes. We create campaigns that turn engagement into real revenue :",
    cases: [
      "Case Study: A Chennai-based fashion brand increased online sales by 185% in 4 months after shifting to our targeted Instagram and Facebook ad strategy.",
      "Case Study: A local restaurant chain saw a 42% boost in footfall using hyper-local Instagram promotions and Instagram influencer partnerships.",
    ],
    subhead: "Why are we different?",
    points:
      "We don’t just run ads, we optimize them with A/B testing, retargeting, and data-backed creatives to ensure they convert.",
  },
  {
    id: 2,
    title: "Motive - 2",
    subtitle:
      "100% ROI-Driven Strategies. We don’t waste budget on random posts; we execute precision-targeted campaigns :",
    cases: [
      "Data Insight: Brands that leverage social media marketing see 89% higher conversion rates compared to those that don’t.",
      "Fact: Video content drives 1200% more shares than text and images combined , we integrate video-first strategies for higher engagement.",
    ],
    subhead: "Why are we different?",
    points:
      "We create platform-specific strategies. What works on LinkedIn won’t work on Instagram, and we know the difference.",
  },
  {
    id: 3,
    title: "Motive - 3",
    subtitle:
      "Social Media Innovators. We understand the pulse of your brand’s digital audience :",
    cases: [
      "Award-Winning: “Best Digital Marketing Agency 2023” - “Trendsetters of Tamil Nadu” (Times of India).",
      "10+ Years of Experience handling social media for brands across industries like retail, healthcare, automobiles, food & beverage, food aggregators, Fintech, Edtech, SaaS, hospitality, and more.",
      "Local & Global Expertise: We’ve scaled Chennai brands beyond borders, reaching audiences in Dubai, Singapore, and the U.S and vice versa.",
    ],
    subhead: "Why are we different?",
    points:
      "We tailor content to your brand’s unique audience behavior, ensuring maximum engagement and brand recall.",
  },
  {
    id: 4,
    title: "Motive - 4",
    subtitle: "Mastering the Latest Social Media Trends",
    cases: [
      "YoY Focus: AI-Driven Social Marketing, Interactive Content, and Hyper-Personalization",
      "AI-Powered Ad Optimization: Predictive analytics to maximize ad spend ROI",
      "Reels & Shorts Domination: Short-form video is 53% more engaging than static posts, we leverage Instagram Reels, YouTube Shorts, and TikTok",
      "Conversational Marketing: WhatsApp, Messenger, and chatbot automation to convert inquiries into customers",
    ],
    subhead: "Why are we different?",
    points:
      "The social media landscape evolves fast, we ensure that your brand is ahead of the curve. We conduct meticulous research to watch such moves and trends to make informed decisions.",
  },
  {
    id: 5,
    title: "Motive - 5",
    subtitle:
      "Engagement That Builds Brand Loyalty. We don’t just post, we create meaningful interactions.",
    cases: [
      "Community Building: Engaging with followers through UGC (User-Generated Content), interactive polls, and contests.",
      "Reputation Management: Quick response times to boost trust and brand perception. Build a rapport and answer appropriately",
      "Influencer Collaborations: Leveraging micro and macro influencers to amplify brand awareness.",
    ],
    subhead: "Why are we different?",
    points:
      "79% of consumers prefer brands that respond on social media, we make sure your brand is one of them. You should sound real, and we make sure your brand does!",
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
              Award Winning Social Media Marketing Agency in Chennai
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
            className="text-black/80 space-y-4"
          >
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Social Media Marketing is easy to define in words but extremely
              challenging to confine in one single framework that works and
              generates results for a brand. Social Media’s algorithm is
              cumulatively dependent on the social platform, the users, the
              trend, the content and its ability to serve the users intent.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              The brains behind brands must know their brands offering, the end
              user, their intent, their competitor and the balance magic of
              disbursing the right content at the right time to right eyes and
              this is like walking on a tightrope.{" "}
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Finding the right social media marketing agency to support your
              brand’s objective and to take your brand to the end user is like
              finding a needle in haystack.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              We know it is not easy at the stake of your business on the line.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Our clients vouch for our works, and we’ll be glad to have you on
              our client's profile list soon.
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
              Why Ayatiworks should be your best choice for Social Media
              Marketing
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/SocialMedia-1.png"
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
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Our philosophy in every marketing channel is simple, we take
                  every project on a case-to-case basis and offer bespoke
                  solutions. With so much noise out there in all social
                  platforms like Facebook, Instagram, Tik-Tok, Snapchat, YouTube
                  and LinkedIn, taking on a common strategy is a suicide
                  mission.
                </p>
              </div>

              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
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
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  Ayatiworks clearly understands your brand's objective first
                  and the timeline to achieve results. Once we understand your
                  brand’s objective our expert social media marketing
                  specialists will be invited to anatomize your brand’s
                  offering, the market, the trends, target audience,
                  demographics and competitors' performance in the niche.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  The data collected will help our social media marketing
                  experts take data-driven decisions. They will create platform
                  friendly, user-friendly creative content that not only
                  attracts their target audience but also stays ahead of their
                  competition.{" "}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg font-secondary  flex items-start gap-3">
                  <span className="text-primary text-xl sm:text-2xl flex-shrink-0">
                    <FaRegDotCircle />
                  </span>
                  When it comes to social media, the creation of compelling
                  copy, eye-catching visuals and exclusive content will be a
                  game changer.{" "}
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
              Ayati’s SMM Strategic Approach: No Guesswork, Just Results
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
              <h3 className="font-primary text-secondary font-medium text-2xl mb-4">
                {step.title}
                {step.subtitle && (
                  <span className="block text-lg text-secondary mt-1">
                    {step.subtitle}
                  </span>
                )}
              </h3>

              {/* Step Points */}
              <ul className="font-primary text-lg space-y-2 text-black/80 mb-4">
                {step.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>

              {/* Game Changing Action */}
              {step.subtitle1 && (
                <div>
                  <h4 className="text-secondary font-primary text-lg font-medium mb-2">
                    {step.subtitle1}
                  </h4>
                  <ul className="font-primary text-lg space-y-2 text-black/80">
                    {step.points1.map((point, i) => (
                      <li key={i}>✔ {point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
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
              Why Team Up with Ayatiworks for Social Media Marketing?
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
          {/* Left - Sticky Image */}
          <div className="hidden md:block">
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-4.png"
                alt="Social Media Marketing"
                className="w-full h-auto mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-black/80 space-y-6">
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium ">
              If your motive is Results our motive is to Produce them!
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium ">
              If you got a project to execute, we would be your best and
              transparent option, our previous works, records, awards and
              accolades speak volumes of our works.
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium ">
              Our prime focus when we take on a project is engagement,
              conversions, and revenue. The proof is in the pudding!
            </p>
            <p className="text-base sm:text-lg md:text-lg text-secondary font-secondary font-medium ">
              Your Motive to Join the Bandwagon of Our Happy Clients
            </p>

            {/* Motives */}
            <ul className="space-y-10 text-black/80">
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
                          className="flex items-start gap-2 text-base sm:text-lg text-black/80 font-secondary font-medium "
                        >
                          <GoDotFill className="mt-1 flex-shrink-0 text-black/70" />
                          <span>{caseText}</span>
                        </div>
                      ))}
                    </div>

                    {/* Subhead + Points */}
                    {motive.subhead && (
                      <div className="pt-2">
                        <h4 className="text-secondary font-semibold text-lg mb-1">
                          {motive.subhead}
                        </h4>
                        <p className="text-base sm:text-lg text-black/80 font-secondary ">
                          {motive.points}
                        </p>
                      </div>
                    )}
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
            <span className="mb-2 block">
              Ayatiworks' Commitment to Excellence
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
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
              Partnering with Ayatiworks means you're not just hiring a service;
              you're gaining a dedicated ally committed to standing by the
              promises we make.{" "}
            </p>
            {/* Intro Paragraphs */}
            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
                <span className="font-medium text-base sm:text-lg md:text-xl  text-secondary font-primary">
                  Transparent Communication:
                </span>{" "}
                We keep you informed every step of the way, ensuring our
                strategies align with your vision.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
                <span className="font-medium text-base sm:text-lg md:text-xl text-secondary font-primary">
                  Continuous Optimization:
                </span>{" "}
                Our team constantly monitors and refines campaigns for optimal
                performance.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaRegDotCircle className="text-secondary text-2xl flex-shrink-0 mt-1" />
              <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium ">
                <span className="font-medium text-base sm:text-lg md:text-xl text-secondary font-primary">
                  {" "}
                  Measurable Results:
                </span>{" "}
                We provide detailed reports, so you can see the tangible impact
                of our efforts.
              </p>
            </div>
          </div>
          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/SocialMedia-2.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
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
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Why should you Onboard Ayatiworks for Social Media Marketing? 
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
