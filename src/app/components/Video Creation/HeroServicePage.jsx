"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";
const steps = [
  {
    id: 1,
    title: "Phase 1. Audit",
    points: [
      "We begin by understanding your brand, target audience, and existing visual assets to identify how video can amplify your story.",
    ],
  },
  {
    id: 2,
    title: "Phase 2. Strategy",
    points: [
      "Our team develops a creative roadmap , defining video style, tone, and purpose to ensure each project aligns with business goals.",
    ],
  },
  {
    id: 3,
    title: "Phase 3. Content Planning",
    points: [
      "We plan concepts, shot lists, and production formats tailored to your campaign needs , be it explainer videos, brand films, or product showcases.",
    ],
  },
  {
    id: 4,
    title: "Phase 4. Script/Asset Prep",
    points: [
      "Scripts, storyboards, and production assets are carefully crafted to ensure strong storytelling and smooth execution on shoot day.",
    ],
  },
  {
    id: 5,
    title: "Phase 5. Production Setup",
    points: [
      "From lighting to camera gear to location scouting, we prepare every detail, so the shoot runs seamlessly and captures high-quality visuals.",
    ],
  },
  {
    id: 6,
    title: "Phase 6. Filming",
    points: [
      "Our production team captures your story with cinematic precision, directing talent, scenes, and shots that bring the script to life.",
    ],
  },
  {
    id: 7,
    title: "Phase 7. Editing & Post",
    points: [
      "Footage is shaped into a powerful narrative with editing, color grading, music, and sound design to elevate impact.",
    ],
  },
  {
    id: 8,
    title: "Phase 8. Revisions & Feedback",
    points: [
      "We share drafts for your input, refining details until the video reflects your brand vision perfectly.",
    ],
  },
  {
    id: 9,
    title: "Phase 9. Final Delivery",
    points: [
      "High-resolution videos are optimized for multiple platforms, ensuring smooth playback whether on websites, ads, or social media.",
    ],
  },
  {
    id: 10,
    title: "Phase 10. Scale & Adapt",
    points: [
      "Videos are repurposed into shorter cuts, teasers, and reels, giving you versatile content to maximize reach and ROI.",
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Performance-Driven Campaigns",
    cases: [
      "Every video is optimized for click-throughs, conversions, and audience engagement.",
    ],
  },
  {
    id: 2,
    title: "Platform-Specific Strategies",
    cases: [
      "From Instagram Reels to YouTube Ads, we customize content to fit where your audience spends time.",
    ],
  },
  {
    id: 3,
    title: "End-to-End Execution",
    cases: [
      "From strategy and targeting to distribution and reporting , we handle it all under one roof.",
    ],
  },
  {
    id: 4,
    title: "Cross-Industry Experience",
    cases: [
      "Trusted by 100,000+ clients across India, UAE, Singapore, and beyond.",
    ],
  },
  {
    id: 5,
    title: "Data + Creativity Balance",
    cases: [
      "Analytics ensures ROI, storytelling ensures memorability and recall.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "Brand Films & Corporate Videos",
    cases: [
      "Your brand film becomes a growth engine with Ayatiworks. We design launch calendars, cut master edits into platform natives, and seed teasers across YouTube, LinkedIn, and OTT. Heat maps and watch time guide retargeting, while short clips empower sales outreach. Clients value punctuality, clear reporting, and the way stories translate into pipeline, not just applause.",
    ],
  },
  {
    id: 2,
    title: "Product Demo & Explainer Videos",
    cases: [
      "Explainers deserve distribution, not dust. We map search intent to scripts, optimize titles and thumbnails, and launch skippable/non-skippable formats. On social, hooks are tested within three seconds, driving viewers to trials or comparison pages. Pixel events enable low-cost follow-ups, turning complex features into simple, persuasive journeys.",
    ],
  },
  {
    id: 3,
    title: "Animated & Motion Graphics",
    cases: [
      "We tailor aspect ratios, colors, and subtitle pacing for silent autoplay feeds, then syndicate across YouTube, product pages, and email. Sequenced ads educate step by step, with localized captions for accessibility. Analytics refine iterations. Clients value storyboarding, disciplined workflows, and motion design that boosts recall and lowers acquisition costs.",
    ],
  },
  {
    id: 4,
    title: "Testimonial & Case Study Videos",
    cases: [
      "We edit testimonials around objections and outcomes, then segment audiences by role, industry, and funnel stage. Snippets power reCreation, long-form versions live on landing pages with schema for SEO. Compliance and tone are meticulously handled. Clients trust us for interview coaching, smooth production, and testimonials that accelerate trust and sales.",
    ],
  },
  {
    id: 5,
    title: "Event & Promotional Videos",
    cases: [
      "We build pre-event teasers, geo-targeted invites, and countdowns, then publish highlights within hours. Post-event, nurture sequences, sizzle reels, and speaker clips extend demand. Tracking ties registrations to revenue. Clients depend on our onsite discipline, quick turnarounds, and event videos that keep delivering leads and partnerships long after the lights fade.",
    ],
  },
];

function HeroServicePage() {
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
              Best Video Creation Services in Chennai
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
            <h2 className="text-lg sm:text-xl md:text-3xl text-secondary font-primary font-medium leading-relaxed">
              Types of Video Creation Services Offered by Ayatiworks
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              Ayatiworks offers a full spectrum of video creation services
              designed to help brands tell stories, build trust, and inspire
              action:
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
                      <span className="text-lg sm:text-2xl font-primary text-secondary block">
                        {motive.title}
                      </span>
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
                src="/assets/office-member.png"
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
              Types of Video Creation Services Offered by Ayatiworks  
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
                src="/assets/service/vid-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <p className="text-base sm:text-lg md:text-xl text-secondary font-primary font-medium leading-relaxed">
              Ayatiworks offers specialized services that align with different
              business goals:
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
              Ayatiworks 10-Phase Video Creation Process
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
            At Ayatiworks, we believe great video creation isn’t just about
            pressing records, it’s about telling stories that inspire action.
            Our 10-phase process ensures every video is thoughtfully crafted,
            strategically aligned with your brand, and visually compelling. From
            the first brainstorm to the final edit, we create videos that spark
            connection and drive business growth.
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
            Our 10-phase video creation process ensures every frame works for
            your brand. By blending creativity with precision, Ayatiworks
            delivers videos that don’t just look good, they inspire action and
            strengthen your business story.
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
              Why Video Creation Is a Game Changer
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
                src="/assets/service/vid-2.png"
                alt="Volvo branding case study cover"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right: Image (sticky on md+) */}
          <div className="text-left">
            <h3 className="font-primary text-secondary font-semibold text-2xl md:text-3xl leading-snug">
              Picture this:
            </h3>

            <p className="text-base sm:text-lg/8 md:text-lg/8 text-black/80 mt-4 font-secondary leading-relaxed">
              a 15-second Instagram reel we created for an FMCG brand clocked
              over 2M views in under a week, a healthcare explainer video helped
              doctors simplify complex treatments for patients, and a sleek
              YouTube launch film we made for Volvo Automobiles turned into a
              lead-generating machine.
            </p>
            <video src=""></video>
            <p className="text-base sm:text-lg/8 md:text-lg/8 text-black/80 mt-4 font-secondary leading-relaxed">
              That’s the power of professional video creation, it doesn’t just
              tell your story, it makes people stop, watch, and act. Whether
              you’re in real estate, healthcare, FMCG, or technology, your
              audience is consuming more video than ever before. At Ayatiworks,
              we help brands like yours create scroll-stopping visuals and
              conversion-driven stories that don’t just get views, they bring
              results.
            </p>
          </div>
        </article>
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
                    Why Work with Ayatiworks?
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
                        With 1000+ projects delivered, Ayatiworks is trusted by startups and enterprises alike for impactful video creation services in Chennai. We merge creativity with strategy to deliver videos that sell, scale, and succeed.
                      </span>
                    </div>
      <video src=""></video>
                    <div className="flex items-start gap-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed">
                      <GoDotFill className="text-primary text-xl shrink-0 mt-1" />
                      <span>
                        Place the Clients that we worked with and give the Instagram Link to Instagram works done by Ayatiworks or YouTube videos
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
                        GET A FREE QUOTE TODAY
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
      
                {/* Right - Sticky Image */}
                <div className="hidden md:block">
                  <div className="sticky top-20">
                    <img
                      src="/assets/service/brand-5.png"
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
