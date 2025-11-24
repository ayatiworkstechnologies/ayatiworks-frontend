"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoDotFill } from "react-icons/go";
import AutoImageSlider from "./AutoImageSlider";

const steps = [
  {
    id: 1,
    title: "1. Research & Discovery",
    points: ["Understand user needs, pain points, and business goals."],
  },
  {
    id: 2,
    title: "2. User Persona Development",
    points: ["Build target profiles to guide design decisions."],
  },
  {
    id: 3,
    title: "3. Information Architecture",
    points: ["Structure content and navigation for easy access."],
  },
  {
    id: 4,
    title: "4. Wireframing",
    points: ["Create low-fidelity blueprints of screens and flows."],
  },
  {
    id: 5,
    title: "5. Prototyping",
    points: ["Develop interactive models to visualize user journeys."],
  },
  {
    id: 6,
    title: "6. UI Design",
    points: [
      "Add visual elements, color, and typography for aesthetic appeal.",
    ],
  },
  {
    id: 7,
    title: "7. Usability Testing",
    points: ["Validate with real users and refine based on feedback."],
  },
  {
    id: 8,
    title: "8. Responsive Design",
    points: ["Optimize experiences across devices and screen sizes."],
  },
  {
    id: 9,
    title: "9. Iteration & Feedback Loops",
    points: ["Continuously refine based on analytics."],
  },
  {
    id: 10,
    title: "10. Launch & Support",
    points: ["Deploy final designs and provide post-launch support."],
  },
];

const motives2 = [
  {
    id: 1,
    title: "User-Centered Approach",
    cases: [
      "We design around user behavior, ensuring every interaction feels natural.",
    ],
  },
  {
    id: 2,
    title: "Business-Aligned Design",
    cases: ["Our UX/UI aligns with your brand’s goals, not just aesthetics."],
  },
  {
    id: 3,
    title: "Cross-Industry Expertise",
    cases: [
      "From fintech and healthcare to retail and SaaS, we design for multiple business models.",
    ],
  },
  {
    id: 4,
    title: "Agile Design Process",
    cases: [
      "Iterative design sprints ensure faster delivery without compromising quality.",
    ],
  },
  {
    id: 5,
    title: "Scalable Solutions",
    cases: [
      "Whether you’re a startup or enterprise, our designs grow with your business.",
    ],
  },
];

const motives1 = [
  {
    id: 1,
    title: "For B2B",
    cases: [
      "Complex platforms like ERP dashboards or SaaS products need clean, structured interfaces that simplify workflows and save time.",
    ],
  },
  {
    id: 2,
    title: "For B2C",
    cases: [
      "Consumers expect ease, speed, and beauty in apps, websites, and e-commerce experiences.",
    ],
  },
  {
    id: 3,
    title: "For D2C",
    cases: [
      "Direct-to-consumer brands thrive on first impressions, and an intuitive UX/UI helps build trust and loyalty instantly.",
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
            <span className="mb-2 block">UX UI Design Services in Chennai</span>

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
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                First impressions happen in seconds, and in the digital space,
                design makes all the difference. Whether it’s a website, mobile
                app, or digital platform, UI (User Interface) and UX (User
                Experience) design define how users interact with your brand. At
                Ayatiworks, we go beyond visuals, we build functional,
                intuitive, and engaging designs that drive results.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                From B2B dashboards to B2C mobile apps and D2C e-commerce
                stores, our design approach blends creativity, usability, and
                business strategy. We don’t just design screens; we design
                journeys that guide users smoothly from curiosity to conversion.
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                If you’re looking for the best UX UI design services in Chennai,
                Ayatiworks ensures every click, swipe, and scroll is meaningful.
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
              Why UX UI Design Matters for Your Business
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ux-1.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}
          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              A good product or service can lose its shine if customers struggle
              with its interface. UX UI design bridges this gap by creating a
              seamless experience that reflects user intent and brand identity.
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
              Key Benefits of Good UX UI Design:
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
            {[
              "Higher customer engagement and retention",
              "Reduced bounce rates and increased conversions",
              "Clearer navigation and better user satisfaction",
              "Improved accessibility across devices and platforms",
              "Stronger brand positioning with consistent design language",
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
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              Investing in UX UI is not just about aesthetics; it’s about
              creating digital experiences that convert casual users into loyal
              customers.
            </p>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ux-2.png"
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
              Why Choose Ayatiworks as Your UX UI Design Partner{" "}
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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/ux-3.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>

          {/* Right - Sticky Image */}

          <div className="text-black/80 space-y-6">
            <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
              At Ayatiworks, design is both art and science.{" "}
            </p>
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="font-primary text-2xl sm:text-3xl text-primary text-left "
            >
              Here’s why businesses trust us for UX UI design:
            </motion.h2>
            <ul className="space-y-4 text-black/80">
              {motives2.map((motive) => (
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
              When you choose Ayatiworks, you’re not just hiring
              designers , you’re partnering with strategic thinkers who combine
              creativity with measurable business outcomes.
            </p>
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
            <span className="mb-2 block">Our 10-Step UX UI Design Process</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>
        <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium mb-5">
          Our structured 10-step process ensures every design decision is
          purposeful. From discovery to launch, we create digital products that
          blend creativity with usability, transforming user interactions into
          seamless, enjoyable, and result-driven experiences.
        </p>

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
        <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium mt-5">
          Design is never “done.” With Ayatiworks, you get a design partner who
          constantly adapts, refines, and enhances your digital experiences to
          keep you ahead in a competitive landscape.{" "}
        </p>
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
              Benefits of UX UI Design for B2B, B2C & D2C Businesses
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* B2B */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-medium font-primary text-secondary mb-4">
              B2B Brands
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              <li>Simplified dashboards for SaaS & enterprise solutions</li>
              <li>Increased adoption through intuitive design</li>
              <li>Better data visualization for decision-making</li>
            </ul>
          </motion.div>

          {/* B2C */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-medium font-primary text-secondary mb-4">
              B2C Brands
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              <li>Attractive designs that boost engagement</li>
              <li>Frictionless checkout and onboarding flows</li>
              <li>Higher retention through consistent user experience</li>
            </ul>
          </motion.div>

          {/* D2C */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 transition"
          >
            <h3 className="text-xl font-medium font-primary text-secondary mb-4">
              D2C Brands
            </h3>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg font-secondary leading-relaxed text-black/80">
              <li>E-commerce interfaces that drive impulse buying</li>
              <li>Mobile-first design for seamless shopping</li>
              <li>Customer trust through polished design consistency</li>
            </ul>
          </motion.div>
        </div>

        {/* ✅ Bottom Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center text-base sm:text-lg md:text-xl font-secondary leading-relaxed text-black/80 max-w-8xl mx-auto"
        >
          Whether it’s a corporate dashboard, an e-commerce app, or a
          subscription-based service, UX UI design helps your business connect
          with users, increase conversions, and stay ahead of competitors.
        </motion.p>
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
            <span className="mb-2 block">
              Benefits of Partnering with Ayatiworks for UX UI Design
            </span>

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
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/seo-3.png"
                alt="Ayatiworks UX UI Design Benefits"
                className="w-full h-auto mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="text-black/80 space-y-8">
            <ul className="space-y-6">
              {[
                "Expert Design Team with cross-industry experience",
                "Collaboration-Driven Process with real-time feedback loops",
                "Scalable Design Systems that adapt as your business grows",
                "Faster Time-to-Market with agile delivery cycles",
                "Post-Launch Support to refine and optimize continuously",
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
                  <p className="text-base sm:text-lg md:text-xl font-secondary leading-relaxed">
                    {text}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg md:text-xl font-secondary leading-relaxed text-black/80 border-l-4 border-secondary pl-4 italic"
            >
              Our collaborative approach ensures your brand’s voice is reflected
              in every pixel, while our design systems allow for long-term
              scalability and consistency across platforms.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroServicePage;
