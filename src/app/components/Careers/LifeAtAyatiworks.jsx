// LifeAtAyatiworks.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function LifeAtAyatiworks({
  title = "Life at Ayatiworks",
  image = "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/service/dev-4.png",
}) {
  return (
    <section className="bg-white section ">
      <div className="mx-auto section-container">
        {/* Heading */}
        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="section-title text-left"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
          className="h-[4px] w-28 md:w-40 bg-secondary rounded-full mt-3 origin-left"
        />

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left image */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden  ring-1 ring-black/5"
          >
            <img
              src={image}
              alt="Life at Ayatiworks"
              className="w-full h-full"
            />
          </motion.div>

          {/* Right copy block */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className=""
          >
            <p className="text-secondary font-primary text-2xl leading-relaxed">
              At our core, we’re a mix of storytellers, strategists, and
              technologists. But what binds us is a passion for solving problems
              and creating value for clients.
            </p>

            <ul className="mt-6 space-y-4 text-slate-700">
              {[
                "Brainstorming sessions that feel like creative jam-outs.",
                "Celebrating small wins as much as big launches.",
                "A flat, collaborative culture, because the best ideas can come from anywhere.",
                "Opportunities to attend training, workshops, and industry events.",
              ].map((t, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-3 w-3 rounded-full bg-primary" />
                  <span className="font-secondary text-lg leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
