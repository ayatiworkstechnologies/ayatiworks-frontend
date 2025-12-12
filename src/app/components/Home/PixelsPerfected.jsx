"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "../../lib/casestudy-data";

const MAX_VISIBLE = 3; // how many to show before "Show More"

export default function PixelsPerfected() {
  // ✅ Sort by ID before slicing
  // Descending order → latest or most important first
  const sortedCaseStudies = [...caseStudies].sort((a, b) => b.id - a.id);

  // Show only first 3
  const visible = sortedCaseStudies.slice(0, MAX_VISIBLE);
  const hasMore = sortedCaseStudies.length > MAX_VISIBLE;

  return (
    <section className="bg-white section">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container text-left relative mb-16"
      >
        <h2 className="section-title relative inline-block">
          Pixels Perfected
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[180px] mt-3 origin-left rounded-full"
          />
        </h2>
      </motion.div>

      {/* Campaigns */}
      <div className="section-container space-y-20">
        {visible.map((item, index) => (
          <motion.div
            key={`${item.id}-${item.title}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-10"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              viewport={{ once: true }}
              className="md:col-span-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] md:h-[350px]"
              />
            </motion.div>

            {/* Content */}
            <div className="md:col-span-8 space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-primary text-2xl md:text-3xl font-medium text-primary"
              >
                {item.title}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.25 }}
                  className="bg-secondary h-1 w-[180px] mt-3 origin-left rounded-full"
                />
              </motion.h3>

              {item.sub && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.25 }}
                  viewport={{ once: true }}
                  className="text-black font-primary font-medium"
                >
                  {item.sub}
                </motion.p>
              )}

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-black/80 font-secondary leading-relaxed"
              >
                {item.description}
              </motion.p>

              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.35 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1.5 border border-blue-700 text-blue-700 text-sm rounded-full hover:bg-blue-700 hover:text-white transition"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>
              )}

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut", delay: 0.35 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.link}
                  className="inline-block mt-2 bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-2.5 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                >
                  Read Case Study
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}

        {/* Show More button if there are more than MAX_VISIBLE */}
        {hasMore && (
          <div className="flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Link
                href="/case-study"
                className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
              >
                Show More
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
