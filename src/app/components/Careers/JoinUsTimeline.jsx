// JoinUsTimeline.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const JoinUsTimeline = ({ heading = "Join us to", steps }) => {
  return (
    <section className="w-full section">
      <div className="mx-auto section-container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-left"
        >
          <span className="mb-2 block">{heading}</span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[120px] mt-3 origin-left rounded-full"
          />
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-10">
          <div className="relative flex items-start justify-between  mx-auto">
            {/* Horizontal line spans between first & last dot */}
            <div className="absolute top-[10px] left-0 right-0 h-[2px] bg-primary z-0" />

            {steps.map((s, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                {/* Node in its own div */}
                <div className="flex justify-start">
                  <span className="grid place-items-center w-5 h-5 rounded-full border-2 border-secondary bg-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  </span>
                </div>

                {/* Labels in separate div */}
                <div className="mt-4 w-full">
                  <div className="text-sm md:text-lg text-left font-medium font-primary text-primary">
                    {s.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsTimeline;
