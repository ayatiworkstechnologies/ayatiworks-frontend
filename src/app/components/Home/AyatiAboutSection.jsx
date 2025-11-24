import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AyatiAboutSection() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.7, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="section bg-white">
      <div className="mx-auto section-container">
        {/* HEADLINE */}
        <div className="relative">
          <motion.h2 className="section-title text-left" {...fadeUp(0)}>
            <span className="mb-2 block">
              Ayatiworks - Award-Winning Growth <br className="hidden sm:block" />
              Architects Since 2017
            </span>

            {/* underline bar */}
            <motion.div
              initial={prefersReducedMotion ? {} : { scaleX: 0 }}
              whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
              transition={
                prefersReducedMotion
                  ? { duration: 0 }
                  : { duration: 0.6, ease: "easeInOut", delay: 0.3 }
              }
              className="bg-secondary h-1 w-36 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
              aria-hidden="true"
            />
          </motion.h2>
        </div>

        {/* MAIN GRID */}
        {/* Mobile: 1 col stacked with tighter gaps
            md: switch to 12-col grid
            lg+: keep your original 8/4 split exactly */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-12 md:gap-10 lg:gap-16">
          {/* LEFT COLUMN (8 cols at md+) */}
          <div className="md:col-span-8 space-y-5 sm:space-y-6">
            <motion.p
              className="text-lg sm:text-xl font-secondary font-semibold text-black/80"
              {...fadeUp(0.1)}
            >
              What’s holding your brand back from its next big leap?
            </motion.p>

            <motion.div
              className="bg-white p-4 sm:p-5 shadow-lg ring-1 ring-black/5 hover:shadow-2xl transition-shadow rounded-xl"
              {...fadeUp(0.15)}
            >
              <p className="text-base sm:text-lg leading-7 text-primary font-secondary font-medium">
                <strong>Since 2017</strong>, Ayatiworks has been answering that
                question for brands across Chennai, India, and beyond. We’re not
                here to “run campaigns.” We’re here to design growth blueprints,
                power them with creative precision, and execute with ROI-driven
                focus.
              </p>
            </motion.div>

            <motion.p
              className="text-black/80 font-secondary text-base sm:text-lg leading-7"
              {...fadeUp(0.2)}
            >
              We’re an award-winning digital marketing agency in Chennai trusted
              by brands like Volvo, Nippo, Xiaomi, Herbale, and Tiger Foods.
              From startups finding their voice to established players scaling
              new markets, we make sure your brand isn’t just part of the
              conversation, it leads it.
            </motion.p>
          </div>

          {/* RIGHT COLUMN (4 cols at md+) */}
          <motion.div
            className="
              md:col-span-4
              flex md:block justify-end items-start
            "
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image keeps design; on small screens we constrain ratio to avoid layout jump */}
            <div className="w-full overflow-hidden">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/home-quote.png"
                alt="Ayatiworks visual"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
