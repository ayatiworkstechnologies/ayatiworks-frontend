"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "../../lib/casestudy-data";

export default function CaseStudies() {


  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="section-title inline-block relative">
            Case Studies & Success Stories
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-secondary h-1 w-[180px] mt-3 mx-auto origin-left rounded-full"
            />
          </h2>

          <p className="section-phara text-center mt-3 text-lg text-gray-700">
            Real results across industries. Impact that speaks.
          </p>
        </motion.div>


        {/* Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-white shadow-xl rounded-2xl overflow-hidden group"
            >
              <div className="overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-76 rounded-t-2xl border-b border-gray-100 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex flex-col">
                <Link
                  href={study.link}
                  className="section-title text-3xl hover:underline text-left transition"
                >
                  {study.title}
                </Link>

                <p className="text-gray-600 section-phara mt-3 line-clamp-4">
                  {study.description}
                </p>

                <div className="mt-auto">
                  <Link
                    href={study.link}
                    className="btn-primary mt-5 inline-flex items-center gap-2 group"
                  >
                    Read Case Study
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
