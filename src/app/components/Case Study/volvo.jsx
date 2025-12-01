"use client";

import Link from "next/link";
import { motion } from "framer-motion";

/* ----------------------------- Asset Placeholders ----------------------------- */
const ASSETS = {
  heroBg: "/assets/casestudy/volvo-banner.png",
  introCard1: "/assets/casestudy/obj-1.png",
  introCard2: "/assets/casestudy/obj-2.png",
  introCard3: "/assets/casestudy/obj-3.png",
  challengeImg: "/images/case/volvo/challenge.webp",
  objectiveImg: "/images/case/volvo/objective.webp",
  strategyBg: "/images/case/volvo/strategy-bg.webp",
  strategyCar: "/images/case/volvo/strategy-car.webp",
  resultsL1: "/images/case/volvo/results-01.webp",
  resultsL2: "/images/case/volvo/results-02.webp",
  resultsR1: "/images/case/volvo/results-03.webp",
  resultsR2: "/images/case/volvo/results-04.webp",
  logosVolvo: "/images/case/volvo/logo-volvo.svg",
  logosPartner: "/images/case/volvo/logo-partner.svg",
  footerBg: "/images/case/volvo/footer-bg.webp",
  footerCar: "/images/case/volvo/footer-car.webp",
};

const DOWNLOAD_URL = "/docs/ayatiworks-volvo-case-study.pdf";

/* --------------------------------- Animations -------------------------------- */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};
const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

/* ----------------------------------- Page ----------------------------------- */
export default function VolvoCaseStudyPage() {
  return (
    <main className="bg-white text-zinc-900 dark:bg-black dark:text-zinc-50">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img
            src="/assets/casestudy/volvo-banner.png"
            alt="Hero background"
            className="h-[52vh] w-full object-cover sm:h-[60vh] md:h-[68vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/10" />
        </div>
      </section>

      {/* INTRO CARDS (3-up like screenshot) */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6"
        >
          <h2 className="text-xl font-semibold">How Ayatiworks Accelerated Volvo’s Growth Journey</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[ASSETS.introCard1, ASSETS.introCard2, ASSETS.introCard3].map((src, i) => (
            <motion.figure
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <img src={src} alt="" className="h-48 w-full object-cover" />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* CHALLENGE + OBJECTIVE (two blocks with image accents) */}
      <section className="mx-auto max-w-7xl px-4 pb-6 md:pb-10">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold">The Challenge</h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                Volvo wasn’t just looking for a digital agency. They were scouting for a strategic
                pit crew to tune up brand visibility, simplify marketing gears, and rev up sales—
                without burning extra fuel.
              </p>
              <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-100">
                <img src={ASSETS.challengeImg} alt="Challenge" className="h-44 w-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h3 className="text-lg font-semibold">The Objective</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                <li>Drive sales and enquiries for the XC90</li>
                <li>Accelerate organic brand traffic</li>
                <li>Streamline the marketing engine</li>
                <li>Drive faster, more qualified lead conversions</li>
              </ul>
              <div className="mt-5 overflow-hidden rounded-2xl bg-zinc-100">
                <img src={ASSETS.objectiveImg} alt="Objective" className="h-44 w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STRATEGY BAND (center car, text left+right) */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={ASSETS.strategyBg} alt="" className="h-[48vh] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/40" />
        </div>
        <div className="relative mx-auto flex h-[48vh] max-w-7xl items-center justify-between px-4">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden text-sm text-white/90 md:block"
          >
            Content-first marketing to humanize the brand.
          </motion.p>

          <motion.img
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            src={ASSETS.strategyCar}
            alt="XC90 front view"
            className="mx-auto h-40 w-auto sm:h-48 md:h-56"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden  text-sm text-white/90 md:block"
          >
            SEO + Search, precision Meta, and Instagram community management.
          </motion.p>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mx-auto max-w-7xl px-4 py-10 md:py-14">
        <h2 className="text-xl font-semibold">The Results: More Than Just Mileage</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Left: two small image cards + bullets */}
          <div className="space-y-6">
            <motion.figure variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <img src={ASSETS.resultsL1} alt="" className="h-44 w-full object-cover" />
              </div>
            </motion.figure>

            <motion.figure variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <img src={ASSETS.resultsL2} alt="" className="h-44 w-full object-cover" />
              </div>
            </motion.figure>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200"
            >
              <li>+250% Impressions YoY · +180% Reach YoY</li>
              <li>22,000+ leads via Lead Forms & WhatsApp</li>
              <li>+130% growth in WhatsApp interactions</li>
              <li>5,000+ test drive leads from content strategy</li>
            </motion.ul>
          </div>

          {/* Right: text bullets + two small images */}
          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <h3 className="text-lg font-semibold">Search & Google Ads (Apr 2024 – Feb 2025)</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-300">
                <li>125,000+ Google Clicks</li>
                <li>2,000+ direct enquiry calls</li>
                <li>Meta: 259,906 Impressions | 123,517 Reach | 121 High-Intent Leads</li>
                <li>Google Ads: 315,179 Impressions | 18,918 Clicks | 300 GMB Calls</li>
                <li className="font-medium text-zinc-900 dark:text-zinc-100">A Whopping 90 Cars Sold!</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <img src={ASSETS.resultsR1} alt="" className="h-36 w-full object-cover" />
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <img src={ASSETS.resultsR2} alt="" className="h-36 w-full object-cover" />
              </figure>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST + LOGOS */}
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
        <h2 className="text-xl font-semibold">From Test Drive to a Long Drive: A Journey of Trust</h2>
        <p className="mt-2  text-sm text-zinc-600 dark:text-zinc-300">
          What began as a trial in 2023 turned into a trusted partnership, driven by one motto:
          <span className="font-semibold"> “Win-Win, Always!”</span>
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6 opacity-80">
          <img src={ASSETS.logosVolvo} alt="Volvo" className="h-6 w-auto" />
          <img src={ASSETS.logosPartner} alt="Partner" className="h-6 w-auto" />
        </div>
      </section>

      {/* WHY IT WORKED */}
      <section className="mx-auto max-w-7xl px-4 pb-10 md:pb-14">
        <h2 className="text-xl font-semibold">Why It Worked</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Humanized content for a premium automobile audience",
            "Seamless integration of Meta and Google platforms",
            "Data-backed decision making with a creative soul",
            "A partnership built on performance and personality",
          ].map((t, i) => (
            <motion.li
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border border-zinc-200 bg-white p-4 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[12px] text-white">
                ✓
              </span>
              {t}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* CTA FOOTER (dark, car image at bottom) */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={ASSETS.footerBg} alt="" className="h-[44vh] w-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative mx-auto flex h-[44vh] max-w-7xl flex-col items-center justify-center px-4 text-center text-white">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Ready to Shift Gears?
          </motion.h3>
          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-2 text-sm text-white/85"
          >
            Whether you’re an automobile brand looking to drive footfalls or a SaaS startup
            wanting better conversions, Ayatiworks knows how to make digital roads work.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:opacity-90"
            >
              Let’s drive growth together
            </Link>
            <Link
              href={DOWNLOAD_URL}
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Download Case Study
            </Link>
          </motion.div>

          <img
            src={ASSETS.footerCar}
            alt="XC90 rear"
            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 sm:translate-y-1/4"
          />
        </div>
      </section>
    </main>
  );
}
