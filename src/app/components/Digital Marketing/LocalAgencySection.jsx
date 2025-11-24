// components/Home/LocalAgencySection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

import { MapPin, Phone, Mail } from "lucide-react";

export default function LocalAgencySection() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-center">Digital Marketing Agency Near Me - Serving All of Chennai</span>
          {/* Decorative line */}
          <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 origin-center rounded-full"
            />
        </motion.h1>
        <p className="text-lg section-phara font-secondary text-black/80 mx-auto mb-8 mt-5">
          Searching for a reliable <span className="text-black  font-semibold">digital marketing agency near me</span>?{" "} <br />Ayatiworks operates from
          Chennai, helping local businesses grow through creative marketing and
          digital expertise.
        </p>

        {/* Location Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10 text-black/80 font-medium">
          {[
            "T-Nagar",
            "OMR (IT Corridor)",
            "Adyar",
            "Velachery",
            "Porur",
            "Tambaram",
            "Anna Nagar",
            "Guindy",
            "Nungambakkam",
          ].map((loc, i) => (
            <div
              key={i}
              className="flex items-start justify-start section-phara gap-2 bg-white shadow-sm rounded-lg py-3 hover:shadow-md transition"
            >
              <MapPin className="w-6 h-6 text-red-800 ml-5" />
              {loc}
            </div>
          ))}
        </div>

        <p className="section-phara mx-auto mb-8">
          As a locally rooted <span className="text-black  font-semibold">advertising and creative marketing agency</span>,
          we understand the unique challenges and opportunities facing Chennai
          businesses. Our team is available for in-person consultations, strategy
          sessions, and ongoing support.
        </p>

        {/* Address Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 md:p-10 inline-block text-left">
          <h3 className="section-title text-3xl  mb-2">
            Visit Our Office:
          </h3>
          <p className="section-phara mb-4">
            <span className="font-primary text-2xl">Ayatiworks Technologies LLP</span> <br />
            No.18/24, TTK Road, 1st Cross St, Alwarpet, Chennai, Tamil Nadu 600018
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-black/80">
            <a
              href="tel:04435031874"
              className="flex items-center gap-2 btn-primary transition"
            >
              <Phone className="w-4 h-4" /> 044-35031874
            </a>
            <a
              href="mailto:info@ayatiworks.com"
              className="flex items-center gap-2 btn-outline transition"
            >
              <Mail className="w-4 h-4" /> info@ayatiworks.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
