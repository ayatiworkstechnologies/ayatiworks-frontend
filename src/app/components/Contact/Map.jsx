"use client";
import { motion } from "framer-motion";

export default function Map() {
  return (
    <section className="section">
      <div className="py-12 px-6 section-container text-center">
        {/* Heading */}
        <motion.h2
          className="section-title mb-10"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Join the Bandwagon of Ayatiworks Growth Partners
        </motion.h2>

        {/* Map Container */}
        <motion.div
          className=" mx-auto overflow-hidden shadow-lg border border-gray-200"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <iframe
            title="Ayati Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.766523026257!2d80.25056954473257!3d13.032886864554456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a62f6073f9%3A0xc075e51cc59f8aea!2sAyatiworks%20Technologies%20LLP!5e1!3m2!1sen!2sin!4v1755779362991!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
