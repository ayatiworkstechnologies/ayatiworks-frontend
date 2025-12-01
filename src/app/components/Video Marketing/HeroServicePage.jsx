"use client";


import { motion } from "framer-motion";
import { FaRegDotCircle } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "Phase - 1. Audit",
    points: [
      "We review analytics, competitors, and past creatives, mapping gaps across search, social, and YouTube to find funnel opportunities.",
    ],
  },
  {
    id: 2,
    title: "Phase - 2. Strategy",
    points: [
      "We define goals, audiences, and messages, align formats to funnel stages, set KPIs, budgets, and timelines with a clear roadmap.",
    ],
  },
  {
    id: 3,
    title: "Phase - 3. Content Planning",
    points: [
      "We plan hooks, scripts, and creative angles, build calendars, and tailor master videos, shorts, and carousels for each platform.",
    ],
  },
  {
    id: 4,
    title: "Phase - 4. Script/Asset Prep",
    points: [
      "We create scripts, storyboards, thumbnails, captions, and end screens to ensure clarity, consistency, and compliance before production.",
    ],
  },
  {
    id: 5,
    title: "Phase - 5. Platform Setup",
    points: [
      "We configure channels, pixels, and conversions, set campaign taxonomy, optimize metadata, and ensure cross-device tracking accuracy.",
    ],
  },
  {
    id: 6,
    title: "Phase - 6. Targeting & Launch",
    points: [
      "We build audiences by intent, interests, and lookalikes, set placements and frequencies, launch in waves, and monitor early signals.",
    ],
  },
  {
    id: 7,
    title: "Phase - 7. Optimization",
    points: [
      "We refine bids, creatives, hooks, and lengths using watch time, CTR, and cost insights to steadily improve outcomes.",
    ],
  },
  {
    id: 8,
    title: "Phase - 8. A/B Testing",
    points: [
      "We test thumbnails, intros, CTAs, captions, and landing paths, identify winners, and roll findings into creative/media playbooks.",
    ],
  },
  {
    id: 9,
    title: "Phase - 9. Reporting",
    points: [
      "We provide dashboards with funnel metrics, segment insights, and creative learnings, turning data into clear, actionable recommendations.",
    ],
  },
  {
    id: 10,
    title: "Phase - 10. Scale",
    points: [
      "We expand budgets and geographies, add new audiences and partners, repurpose top performers, and maintain ROI guardrails while scaling.",
    ],
  },
];

const motives = [
  {
    id: 1,
    title: "Performance-Driven Campaigns",
    cases: [
      "Every video is optimized for CTR, conversions, and audience engagement.",
    ],
  },
  {
    id: 2,
    title: "Platform-Specific Strategies",
    cases: [
      "From Instagram Reels to YouTube Ads, we customize for where your audience lives.",
    ],
  },
  {
    id: 3,
    title: "End-to-End Execution",
    cases: [
      "Strategy, targeting, distribution, and reporting all under one roof.",
    ],
  },
  {
    id: 4,
    title: "Cross-Industry Experience",
    cases: ["100,000+ happy clients across India, UAE, Singapore, and beyond."],
  },
  {
    id: 5,
    title: "Data + Creativity Balance",
    cases: ["Analytics ensures ROI, storytelling ensures recall."],
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
      "We edit testimonials around objections and outcomes, then segment audiences by role, industry, and funnel stage. Snippets power remarketing, long-form versions live on landing pages with schema for SEO. Compliance and tone are meticulously handled. Clients trust us for interview coaching, smooth production, and testimonials that accelerate trust and sales.",
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
              Best Video Marketing Services in Chennai
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
              Why Ayatiworks is the Best Video Marketing Agency
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black/80 font-secondary font-medium leading-relaxed">
              At Ayatiworks, we don’t just publish videos, we engineer outcomes.
              With 1,000+ video marketing campaigns delivered across industries
              like automobile, fintech, healthcare, FMCG, real estate, and
              lifestyle, our expertise ensures every video turns into a growth
              channel.
            </p>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-primary font-primary font-medium leading-relaxed">
              Here’s why brands choose us:
            </h2>
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
              Types of Video Marketing Services Offered by Ayatiworks  
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/vid-1.png"
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
              Ayatiworks 10-Phase Video Marketing Process
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
            <span className="">Intro:</span>Great distribution needs great
            discipline. Our 10‑phase video marketing process keeps creative
            ideas tied to commercial outcomes, so every launch is intentional,
            measurable, and repeatable. From auditing your current performance
            to scaling proven winners, we remove guesswork and build momentum
            step by step. The result: campaigns that compound, audiences that
            grow, and videos that consistently move revenue.
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
            With this disciplined framework, creative does not float, it
            compounds. Each phase adds clarity, reducing waste and increasing
            predictable returns. You see exactly what worked, why it worked, and
            how we will scale it next. Ready to turn momentum into market share?
          </p>
        </div>
      </section>

      <AutoImageSlider />
    </>
  );
}

export default HeroServicePage;
