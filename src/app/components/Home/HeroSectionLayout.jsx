import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSectionLayout() {
  return (
    <section className="bg-white py-8">
      {/* 🔹 Outer container (max width 1440, height 600) */}
      <div className="mx-auto max-w-[1440px] h-[600px] grid grid-cols-12 grid-rows-3 gap-5 px-5">
        
        {/* ✅ Top Wide Video (946x180) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="col-span-8 row-span-1 rounded-3xl overflow-hidden shadow"
        >
          <video
            src="/assets/banner-02.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✅ Right Top Small (434x168) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="col-span-4 row-span-1 rounded-3xl overflow-hidden shadow"
        >
          <img
            src="/assets/banner-03.png"
            alt="Steel Rods"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✅ Left Middle Small (434x172) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className="col-span-4 row-span-1 rounded-3xl overflow-hidden shadow"
        >
          <img
            src="/assets/banner-04.png"
            alt="Kid with helmet"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✅ Center Middle (492x168) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.2 }}
          className="col-span-4 row-span-1 rounded-3xl overflow-hidden shadow relative"
        >
          <video
            src="/assets/banner-07.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          
        </motion.div>

        {/* ✅ Right Middle (434x172) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-4 row-span-1 rounded-3xl overflow-hidden shadow"
        >
          <img
            src="/assets/banner-06.png"
            alt="Pens"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✅ Left Bottom (434x168) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.4 }}
          className="col-span-4 row-span-1 rounded-3xl overflow-hidden shadow"
        >
          <img
            src="/assets/banner-05.png"
            alt="Gadget"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* ✅ Right Bottom Wide (946x180) */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.5 }}
          className="col-span-8 row-span-1 rounded-3xl overflow-hidden shadow relative"
        >
          <video
            src="/assets/banner-01.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
