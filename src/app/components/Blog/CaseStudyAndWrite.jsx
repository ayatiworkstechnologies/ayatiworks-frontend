// app/components/CaseStudyAndWrite.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "../../lib/casestudy-data";

const MotionLink = motion(Link);

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -80px" },
  transition: { duration: 0.55, ease: "easeOut", delay: d },
});

export default function CaseStudyAndWrite() {
  // only show first 2 case studies (sorted by id desc so newer first)
  const latestCaseStudies = [...caseStudies]
    .sort((a, b) => b.id - a.id)
    .slice(0, 2);

  return (
    <section className="section-container py-12 md:py-16 space-y-12">
      {latestCaseStudies.map((item, index) => (
        <motion.article
          key={item.id}
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
        >
          {/* Glow */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -top-10 h-28 w-28 rounded-full bg-secondary/10 blur-3xl"
          />

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Image */}
            <div className="p-5 md:p-6 md:col-span-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden rounded-xl ring-1 ring-black/5"
              >
                <div className="relative w-full h-60 md:h-74">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 lg:p-8 md:col-span-8">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="section-title text-left"
              >
                {item.title}
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 origin-left rounded-full"
              />

              <motion.p
                {...fadeUp(0.1)}
                className="mt-4 text-base md:text-lg font-secondary leading-7 text-black/80 whitespace-pre-line"
              >
                {item.description}
              </motion.p>

              <motion.div {...fadeUp(0.15)} className="mt-8 text-left">
                <MotionLink
                  href={item.link}
                  role="button"
                  aria-label="Read Full Case Study"
                  className="inline-flex items-center justify-center rounded-full bg-secondary/90 px-10 py-3 text-lg md:text-xl font-primary font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-secondary/40"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Read Full Case Study
                </MotionLink>
              </motion.div>
            </div>
          </div>
        </motion.article>
      ))}

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center">
        <Link
          href="/case-study"
          className="btn-outline"
        >
          View All Case Studies
        </Link>
      </div>
    </section>
  );
}
