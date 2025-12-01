"use client";
import React from "react";
import { MdOutlinePhoneAndroid, MdMail  } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

import { motion } from "framer-motion";

export default function Address() {
  const cards = [
    {
      title: "Email Address",
      icon: <MdMail className="w-8 h-8" />,
      content: ["upendran@ayatiworks.com", "info@ayatiworks.com"],
    },
    {
      title: "LandLine Number",
      icon: <BsFillTelephoneFill className="w-8 h-8" />,
      content: ["044-35031874", "044-35031878"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="section py-12 bg-gray-50">
      <div className="section-container mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col p-6 w-full sm:w-[300px] md:w-[350px] shadow-lg bg-white text-black/80 cursor-pointer hover:bg-primary hover:text-white transition-colors gap-5"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Header */}
              <div className="flex items-center font-primary text-2xl gap-4 mb-4">
                {card.icon}
                {card.title}
              </div>

              {/* Content */}
              <div className="max-w-full">
                {card.content.map((line, i) => (
                  <p key={i} className="font-secondary text-lg break-all">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
