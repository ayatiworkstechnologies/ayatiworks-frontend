import React from "react";
import { motion } from "framer-motion";

export default function BrandsMarquee() {
  const brands = [
    {
      name: "Volvo",
      pattern: "/assets/brands/volvo.png",
      logo: "/assets/brands/volvo.png",
    },
    {
      name: "Nippo",
      pattern: "/assets/brands/nippo.png",
      logo: "/assets/brands/nippo.png",
    },
    {
      name: "Xiaomi",
      pattern: "/assets/brands/mi.png",
      logo: "/assets/brands/mi.png",
    },
    {
      name: "Herbale",
      pattern: "/assets/brands/herbale.png",
      logo: "/assets/brands/herbale.png",
    },
    {
      name: "Tiger Foods",
      pattern: "/assets/brands/tiger.png",
      logo: "/assets/brands/tiger.png",
    },
  ];
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <section className="bg-white section">
      {/* === Heading === */}
      <div className="mx-auto section-container">
        <motion.h2 className="section-title text-left" {...fadeUp(0)}>
          <span className="mb-2 block">Brands That Grew With Us</span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
          />
        </motion.h2>
      </div>

      {/* === Marquee Track === */}
      <div className="mt-8 sm:mt-10 section-container">
        <div className="relative overflow-hidden">
          {/* The mask gradient on edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Animation styles */}
          <style>{`
            @keyframes marquee-left {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee {
              display: flex;
              width: max-content;
              animation: marquee-left 26s linear infinite;
            }
            .marquee:hover { animation-play-state: paused; }
            @media (max-width: 640px) {
              .marquee { animation-duration: 32s; }
            }
          `}</style>

          {/* Two copies for seamless loop */}
          <div className="marquee gap-6 sm:gap-8 px-5">
            {[...brands, ...brands].map((b, i) => (
              <BrandCard key={`${b.name}-${i}`} {...b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====== Card with flip interaction ====== */
function BrandCard({ name, pattern, logo }) {
  return (
    <div
      className="group relative h-[260px] w-[250px] sm:h-[300px] sm:w-[240px]
                 [perspective:1000px]"
      aria-label={name}
    >
      {/* Card shell & shadow */}
      <div
        className="absolute inset-0  bg-white ring-1 ring-black/5
                   shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                   transition-transform duration-500
                   [transform-style:preserve-3d]
                   group-hover:[transform:rotateY(180deg)]"
      >
        {/* Front (pattern) */}
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden
                     [backface-visibility:hidden]"
        >
          <img
            src={pattern}
            alt={`${name} pattern`}
            className="h-full w-full object-cover opacity-90"
          />
        </div>

        {/* Back (logo) */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-white
                     [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-h-[180px] max-w-[70%] object-contain"
          />
        </div>
      </div>

      {/* Bottom soft shadow bar for depth */}
    </div>
  );
}
