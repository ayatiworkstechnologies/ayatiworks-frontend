// RolesMarquee.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

/* Updated roles (cleaned) */
const roles = [
  {
    title: "SEO Content Writers & Strategists",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/1.png",
  },
  { title: "Digital Marketing Managers", icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/2.png" },
  {
    title: "Social Media & Performance Marketing Specialists",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/3.png",
  },
  { title: "UI/UX Designers", icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/4.png" },
  {
    title: "Programmatic & Media Buying Experts",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/5.png",
  },
  {
    title: "Brand Storytellers & PR Specialists",
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/6.png",
  },
];

/* Optional underline for a word */
function renderTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) return title;
  const [before, after] = title.split(highlight);
  return (
    <>
      {before}
      <span className="underline underline-offset-2">{highlight}</span>
      {after}
    </>
  );
}

export default function RolesMarquee() {
  // Duplicate for seamless loop
  const list = [...roles, ...roles];

  return (
    <section className="bg-white section">
      {/* Local keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <div className="mx-auto section-container">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="section-title text-left"
        >
          Roles We Hire For
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
            className="h-[4px] w-28 md:w-40 rounded-full bg-secondary mt-3 origin-left"
          />
        </motion.h2>

        <p className="mt-3 font-secondary text-lg text-secondary">
          We’re always on the lookout for driven people who want to grow with
          us.
        </p>

        {/* Marquee */}
        <div className="relative mt-8 overflow-hidden group p-4">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent" />

          {/* track */}
          <div
            className="
              flex gap-6 w-[200%]
              animate-[marquee_28s_linear_infinite]
              group-hover:[animation-play-state:paused]
            "
          >
            {list.map((r, i) => {
              
              return (
                <article
                  key={`${r.title}-${i}`}
                  className="relative w-[260px] shrink-0 bg-white ring-1 ring-black/5 shadow-sm p-2"
                >
                  {/* Ghost number / icon */}
                  <div
                    aria-hidden
                    className="absolute left-1/2 -translate-x-1/2 top-4 select-none"
                  >
                    <img
                      src={r.icon}
                      alt={`Role ${(i % roles.length) + 1}`}
                      className="object-contain drop-shadow-sm"
                    />
                  </div>

                  {/* Body */}
                  <div className="px-5 pt-20 mt-16 pb-6">
                    <h3 className="text-lg text-center font-semibold text-black leading-snug font-secondary">
                      {renderTitle(r.title)}
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
