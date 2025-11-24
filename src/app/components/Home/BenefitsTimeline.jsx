import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

export function BenefitsTimeline() {
  return (
    <section className="bg-white section">
      <div className="mx-auto section-container">
        {/* Title */}
        <motion.h2
          className="section-title text-left"
          {...fadeUp(0)}
        >
          <span className="mb-2 block">
            The Benefits of Partnering with Us
          </span>

          {/* Underline animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-32 sm:w-48 md:w-64 lg:w-80 mt-3 origin-left rounded-full"
          />
        </motion.h2>

        {/* Image / Content */}
        <div className="mt-10 flex justify-center">
          <img
            src="/assets/home-benefits.svg"
            alt="Benefits"
            className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-5xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
