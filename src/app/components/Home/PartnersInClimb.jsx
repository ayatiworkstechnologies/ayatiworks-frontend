"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function PartnersInClimb() {
  const controlsRow1 = useAnimation();
  const controlsRow2 = useAnimation();
  const controlsRow3 = useAnimation();

  useEffect(() => {
    startAnimation();
  }, []);

  // === Continuous marquee motion ===
  const startAnimation = () => {
    controlsRow1.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 25,
      },
    });

    controlsRow2.start({
      x: ["-50%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 25,
      },
    });

    controlsRow3.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        duration: 25,
      },
    });
  };

  const stopAnimation = () => {
    controlsRow1.stop();
    controlsRow2.stop();
    controlsRow3.stop();
  };

  // === Partner Logos (52 total) ===
  const partners = Array.from({ length: 45 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `https://ayatiworks-storage.s3.us-east-1.amazonaws.com/logos/Client-${i + 1}.webp`,
  }));

  // Split across rows for balance
  const row1 = partners.slice(0, 15);
  const row2 = partners.slice(16, 30);
  const row3 = partners.slice(31, 45).concat(partners.slice(0, 2)); // fills evenly

  return (
    <section className="bg-white py-12 overflow-hidden">
      {/* ===== Heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12 section-container"
      >
        <h2 className="section-title inline-block relative">
          Our Partners in Climb
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 0.3,
            }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full mx-auto"
          />
        </h2>
      </motion.div>

      {/* ===== ROW 1 ===== */}
      <div
        className="relative w-full overflow-hidden mb-8 section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div
          animate={controlsRow1}
          className="flex min-w-[200%] gap-6"
          style={{ willChange: "transform" }}
        >
          {[...row1, ...row1].map((partner, index) => (
            <div
              key={`row1-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-12 md:h-14 lg:h-20 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== ROW 2 ===== */}
      <div
        className="relative w-full overflow-hidden mb-8 section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div
          animate={controlsRow2}
          className="flex min-w-[200%] gap-6"
          style={{ willChange: "transform" }}
        >
          {[...row2, ...row2].map((partner, index) => (
            <div
              key={`row2-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-12 md:h-14 lg:h-20 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== ROW 3 ===== */}
      <div
        className="relative w-full overflow-hidden section-container"
        onMouseEnter={stopAnimation}
        onMouseLeave={startAnimation}
      >
        <motion.div
          animate={controlsRow3}
          className="flex min-w-[200%] gap-6"
          style={{ willChange: "transform" }}
        >
          {[...row3, ...row3].map((partner, index) => (
            <div
              key={`row3-${index}`}
              className="flex items-center justify-center min-w-[150px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="h-12 md:h-14 lg:h-20 object-contain opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== Divider ===== */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-black/10 mt-12 section-container"
      />
    </section>
  );
}
