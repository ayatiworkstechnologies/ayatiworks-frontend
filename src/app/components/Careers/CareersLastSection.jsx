// app/components/CareersCTA.jsx (or anywhere in your project)
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function CareersCTA({
  email = "info@ayatiworks.com",
  // If the form is on the same page, keep "#apply".
  // If it lives on /careers, use "/careers#apply".
  applyHref = "#apply",
}) {
  return (
    <section className="bg-white section">
      <div className="mx-auto section-container text-center p-4">
        <motion.h3
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="section-title text-secondary"
        >
          Don’t lose heart if you don’t see your role here!
        </motion.h3>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-lg font-secondary"
        >
          Just tell us you can bring something unique to the table, and we are
          all ears!
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mt-8 text-3xl font-primary text-black"
        >
          write to us @{" "}
          <a
            href={`mailto:${email}`}
            className="text-secondary underline hover:no-underline"
          >
            {email}
          </a>
        </motion.p>

        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="my-5 text-4xl font-primary text-primary"
        >
          or
        </motion.div>

        <motion.h4
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="text-xl md:text-3xl font-primary text-secondary"
        >
          If you are an aspirant looking for Internships with Ayatiworks
        </motion.h4>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-lg font-secondary"
        >
          Your next big opportunity starts here.
        </motion.p>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mt-6 text-2xl font-primary text-black"
        >
          Are you ready to grow with us
        </motion.p>

        {/* ✅ Use Next.js <Link>. If the target is same page, href="#apply" works.
            If it's another page section, use href="/careers#apply". */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          className="mt-6"
        >
          <Link
            href={applyHref}
            className="inline-flex items-center justify-center font-primary rounded-full bg-secondary px-7 py-3 text-xl uppercase tracking-wide text-white shadow-lg shadow-sky-300/40 transition hover:bg-[#1689c9] active:scale-95"
            // Next.js scrolls to hash by default; keep global CSS for smoothness.
            scroll
            prefetch={false}
          >
            Apply Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
