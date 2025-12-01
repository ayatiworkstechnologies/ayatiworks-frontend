"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const services = [
    {
      title: "Consulting for a Click-Worthy Connection",
      desc: "When everything else is on point, great user design doesn’t just jazz up how users see your company; it also rolls out the red carpet for consumer adoption!",
    },
    {
      title:
        "Creative Marketing Communications: Big on RoI and Even Bigger on Ideas",
      desc: "We craft creative marketing campaigns that not only grab attention but also deliver measurable results for your business.",
    },
    {
      title: "Digital Production and Support: Quality that Goes Global",
      desc: "From strategy to production, we provide end-to-end digital solutions that scale globally with precision and quality.",
    },
    {
      title: "Technology with Trust: Reliable & Scalable",
      desc: "We help enterprises grow by delivering secure, scalable, and performance-driven technology solutions.",
    },
  ];

  // Framer Motion variants (client-only)
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="bg-white section overflow-hidden">
      <div className="section-container mx-auto">
        {/* Heading Row */}

        {/* 12-col row: left 4 / right 8 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* LEFT (4 cols) */}
          <motion.div
            className="lg:col-span-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="section-title flex items-start text-primary">
              What we do
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[100px] mt-3 origin-left"
              aria-hidden="true"
            />
          </motion.div>

          {/* RIGHT (8 cols) */}
          <motion.p
            className="lg:col-span-8 text-black/80 font-secondary text-base sm:text-lg md:text-lg leading-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            At Ayatiworks, we open the doors to your digital future. From
            sparking meaningful conversations through brand marketing to
            creating seamless e-commerce experiences, building powerful
            platforms for entertainment and finance, managing enterprise
            networks, or driving measurable performance growth, we cover it all.
            Our strength lies in delivering practical, reliable, and
            result-driven solutions that businesses trust. With Ayatiworks by
            your side, your digital vision isn’t just an idea; it’s a reality in
            motion.
          </motion.p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              className="relative h-72 sm:h-80 lg:h-96 rounded-xl [perspective:1200px] group focus-within:[perspective:1200px]"
              custom={idx + 1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute inset-0 transition-transform duration-700 ease-in-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute inset-0 rounded-xl flex items-center justify-center text-center font-primary text-primary text-2xl p-6 bg-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.03] [backface-visibility:hidden] ">
                  {service.title}
                </div>

                {/* Back */}
                <div className="absolute inset-0 flex rounded-xl items-center text-xl font-secondary justify-center text-center bg-primary text-white p-6 shadow-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  {service.desc}
                </div>
              </div>

              {/* Invisible focus target for keyboard flip */}
              <button
                className="absolute inset-0 opacity-0"
                aria-label={`More about: ${service.title}`}
                onFocus={(e) =>
                  e.currentTarget.parentElement?.classList.add("group")
                }
                onBlur={(e) =>
                  e.currentTarget.parentElement?.classList.remove("group")
                }
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      />
    </section>
  );
}
