"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // ✅ Right arrow icon

const imgs1 = [
  {
    src: "/assets/blog-1.jpg",
    heading: "SEO Simplified for you",
    path: "/seo-simplified",
  },
  // { src: "/assets/blog-2.jpg", heading: "", path: "/" },
  // { src: "/assets/blog-3.jpg", heading: "", path: "/" },
];

const imgs2 = [
  // { src: "/assets/blog-1.jpg", heading: "", path: "/" },
  // { src: "/assets/blog-2.jpg", heading: "", path: "/" },
  // { src: "/assets/blog-3.jpg", heading: "", path: "/" },
];

export default function HomeGridSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section className="section">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-container text-left relative mb-12"
      >
        <h2 className="section-title relative inline-block">
          Byte-Sized AI (Ayati Intelligence)
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
          />
        </h2>
      </motion.div>

      <div className="section-container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block 1 */}
        <div className="space-y-4">
          {/* Top Image */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={imgs1[0].src}
              alt={imgs1[0].heading}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* ✅ Overlay hover button */}
            <Link
              to={imgs1[0].path}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <ArrowRight
                    className="w-10 h-10 text-white transform -translate-x-1 group-hover:translate-x-0 
             group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>

            {/* ✅ Bottom heading label */}
            <span
              className="absolute bottom-2 left-2 font-primary bg-white/90 text-secondary hover:bg-secondary
             hover:text-white font-medium px-4 py-2 text-xl shadow rounded"
            >
              {imgs1[0].heading}
            </span>
          </motion.div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imgs1.slice(1).map((img, index) => (
              <motion.div
                key={index}
                custom={index + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={img.src}
                  alt={img.heading}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <Link
                  to={img.path}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition">
                      <ArrowRight
                        className="w-10 h-10 text-white transform -translate-x-1 group-hover:translate-x-0 
             group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>

                <span
                  className="absolute bottom-2 left-2 font-primary bg-white/90 text-secondary hover:bg-secondary
             hover:text-white font-medium px-4 py-2 text-xl shadow rounded"
                >
                  {img.heading}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Block 2 */}
        {/* <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {imgs2.slice(1).map((img, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <img
                  src={img.src}
                  alt={img.heading}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <Link
                  to={img.path}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition">
                      <ArrowRight
                        className="w-10 h-10 text-white transform -translate-x-1 group-hover:translate-x-0 
             group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>

                <span
                  className="absolute bottom-2 left-2 font-primary bg-white/90 text-secondary hover:bg-secondary
             hover:text-white font-medium px-4 py-2 text-xl shadow rounded"
                >
                  {img.heading}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={imgs2[0].src}
              alt={imgs2[0].heading}
              className="w-full h-64 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <Link
              to={imgs2[0].path}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-lg hover:scale-110 transition">
                  <ArrowRight
                    className="w-10 h-10 text-white transform -translate-x-1 group-hover:translate-x-0 
             group-hover:rotate-45 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>

            <span
              className="absolute bottom-2 left-2 font-primary bg-white/90 text-secondary hover:bg-secondary
             hover:text-white font-medium px-4 py-2 text-xl shadow rounded"
            >
              {imgs2[0].heading}
            </span>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
