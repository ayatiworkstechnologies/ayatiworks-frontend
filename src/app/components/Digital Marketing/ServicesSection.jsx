"use client";
import { motion } from "framer-motion";

import {

  FiGlobe,
  FiBarChart2,
  FiUsers,
  FiPenTool,
  FiShoppingBag,
} from "react-icons/fi";
import { HiMiniMegaphone } from "react-icons/hi2";

const services = [
  {
    title: "SEO & Local Search",
    desc: "Boost your visibility with data-driven SEO strategies tailored for both global and Chennai-based audiences.",
    icon: FiGlobe,
  },
  {
    title: "Social Media Marketing",
    desc: "Engage your audience with creative campaigns that drive brand awareness and customer loyalty.",
    icon: FiUsers,
  },
  {
    title: "Paid Ads (PPC)",
    desc: "Maximize ROI with highly targeted ad campaigns across Google, Facebook, and Instagram.",
    icon: HiMiniMegaphone,
  },
  {
    title: "Content Marketing",
    desc: "From blogs to video scripts, we create content that educates, entertains, and converts.",
    icon: FiPenTool,
  },
  {
    title: "E-commerce Marketing",
    desc: "Drive traffic and boost conversions with tailored strategies for online stores.",
    icon: FiShoppingBag,
  },
  {
    title: "Analytics & Reporting",
    desc: "Stay in control with transparent reports and actionable insights for growth.",
    icon: FiBarChart2,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ServicesSection() {
  return (
    <section className="section relative overflow-hidden">

      <div className="section-container text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-medium font-primary text-gray-900 mb-6"
        >
          Our Digital Marketing Services <br />
          <span className="text-blue-600">at a Glance</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className=" mx-auto text-lg text-gray-600 mb-12"
        >
          From startups to enterprises, we provide end-to-end digital solutions
          that fuel growth, enhance visibility, and drive measurable results.
        </motion.p>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, translateY: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-600 mb-6 mx-auto">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
