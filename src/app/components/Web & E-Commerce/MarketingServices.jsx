
"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MarketingServices() {
  const services = [
    {
      image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/ms-1.png", // replace with your image
      alt: "Service 1",
    },
    {
      image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/ms-2.png",
      alt: "Service 2",
    },
    {
      image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/ms-3.png",
      alt: "Service 3",
    },
  ];

  return (
    <section className="section bg-white">
      <div className="section-container mx-auto px-4 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="section-title">
            Our Web & E-Commerce Services <br />
            <span className="text-primary">at a Glance</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-32 mt-3 mx-auto origin-left rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Description */}
        <p className="text-secondary font-secondary mx-auto text-lg leading-relaxed">
          We don’t believe in one-size-fits-all websites. At Ayatiworks, we
          tailor every solution to your business stage, growth goals, and
          customer journey.
        </p>

        {/* Subheading */}
        {/* <h3 className="text-4xl font-medium font-primary text-primary mt-8">
          Here’s a quick look at our core services
        </h3> */}
      </div>
    </section>
  );
}
