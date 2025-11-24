import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Discovery Call",
    description: "Understand business goals, audience, and vision.",
    position: "left-[5%] top-[35%]",
  },
  {
    id: 2,
    title: "Comprehensive Audit",
    description: "Evaluate digital presence, gaps, and opportunities.",
    position: "left-[28%] top-[65%]",
  },
  {
    id: 3,
    title: "KPI-Driven Strategy",
    description: "Define success metrics aligned to business outcomes.",
    position: "left-[58%] top-[32%]",
  },
  {
    id: 4,
    title: "Tailored Campaign Planning",
    description: "Build strategies for SEM, SEO, and CRO trends.",
    position: "left-[82%] top-[62%]",
  },
];

export default function GrowthFramework() {
  return (
    <div className="bg-white py-12 px-4 md:px-12 lg:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-medium text-gray-800">
          Our 10-Step Growth Framework
        </h2>
        <p className="text-blue-600 font-medium mt-2">
          Our 10-step approach ensures measurable, ROI-driven growth for every
          client.
        </p>
      </div>

      {/* Wave Image with Positioned Steps */}
      <div className="relative mx-auto">
        <img
          src="/assets/line.png"
          alt="Growth Wave"
          className="w-full"
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`absolute ${step.position} text-center`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            {/* Number Circle */}
            <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-medium shadow-lg">
              {step.id}
            </div>

            {/* Title */}
            <h3 className="mt-3 text-lg font-semibold text-gray-800">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mt-1 max-w-[200px] mx-auto">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center max-w-3xl mx-auto">
        <p className="text-gray-600">
          At Asynchro, our 10-Step Framework isn’t just about execution. It’s
          about building a reliable growth engine for your brand. With clarity,
          creativity, and consistency, we help you scale smarter, faster, and
          stronger.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all">
          Ready to start your growth journey?
        </button>
      </div>
    </div>
  );
}
