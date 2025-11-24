import React from "react";
import { motion } from "framer-motion";

const DEFAULT_ITEMS = [
  {
    no: "01",
    title: "360° marketing without juggling multiple vendors.",
    tile: "#F4E5DC", // peach
    accent: "#C77433",
  },
  {
    no: "02",
    title: "Faster campaign rollouts with in‑house production & strategy.",
    tile: "#DCE6FA", // light blue
    accent: "#3E6BC1",
  },
  {
    no: "03",
    title: "Transparent reporting and ROI clarity",
    tile: "#DCD2E7", // lavender
    accent: "#5E4A83",
  },
  {
    no: "04",
    title: "Scalable solutions for local and global markets",
    tile: "#F4E5DC", // peach again
    accent: "#C77433",
  },
];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
  viewport: { once: true, amount: 0.3 },
});

function AnimatedWrapper({ delay = 0, children }) {
  return (
    <div
      className="will-change-transform"
      style={{
        animation: `fadeUp 700ms ease-out forwards, floatY 6s ease-in-out ${
          delay + 700
        }ms infinite alternate`,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}

function BenefitCard({ idx, item, className = "", delay = 0 }) {
  const angles = [10, 3, 3, 12];
  const rotation = angles[idx % angles.length];
  return (
    <AnimatedWrapper delay={delay}>
      <div
        className={
          "relative w-[230px] sm:w-[260px] md:w-[280px] aspect-[1/1.08] select-none " +
          "rounded-2xl bg-white shadow-[0_20px_45px_rgba(0,0,0,0.12)] ring-1 ring-black/5 " +
          `transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.16)] rotate-[${rotation}deg] ` +
          className
        }
        style={{ transformOrigin: "center" }}
      >
        {/* inner pastel tile */}
        <div
          className="absolute inset-0 m-5 rounded-xl flex flex-col p-5"
          style={{ backgroundColor: item.tile }}
        >
          {/* content block inside colored tile */}
          <span
            className="font-extrabold text-3xl font-primary tracking-[0.08em]"
            style={{ color: item.accent }}
          >
            {item.no}
          </span>
          <p className="mt-3 text-lg font-secondary leading-5 text-black/80">
            {item.title}
          </p>
        </div>
      </div>
    </AnimatedWrapper>
  );
}

export default function BenefitsFlow({ items = DEFAULT_ITEMS, title }) {
  const heading = title || "The Benefits of Partnering with Us";

  return (
    <section
      className="py-12 md:py-16"
      style={{
        // faint ruled paper background
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(15,23,42,0.05) 0px, rgba(15,23,42,0.05) 1px, transparent 1px, transparent 56px)",
        backgroundSize: "100% auto",
      }}
    >
      {/* Inline keyframes for animations */}
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatY { 0% { transform: translateY(0); } 100% { transform: translateY(-6px); } }
        @keyframes dashMove { to { stroke-dashoffset: -200; } }
      `}</style>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-6 sm:mb-8">
          <motion.h2 className="section-title text-left" {...fadeUp(0)}>
            <span className="mb-2 block">{heading}</span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* Canvas */}
        <div className="relative mx-auto w-full max-w-[960px] min-h-[860px] sm:min-h-[900px] md:min-h-[720px] lg:min-h-[720px]">
          {/* SVG dashed connectors (only >= md) */}
          <svg
            className="pointer-events-none absolute inset-0 hidden md:block"
            viewBox="0 0 960 720"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M180 160 C 320 110, 520 110, 650 190"
              stroke="#C9D3DF"
              strokeWidth="3"
              strokeDasharray="6 10"
              style={{ animation: "dashMove 6s linear infinite" }}
            />
            <path
              d="M660 230 C 560 320, 380 350, 260 420"
              stroke="#C9D3DF"
              strokeWidth="3"
              strokeDasharray="6 10"
              style={{ animation: "dashMove 6s linear 0.3s infinite" }}
            />
            <path
              d="M260 520 C 420 570, 540 565, 720 520"
              stroke="#C9D3DF"
              strokeWidth="3"
              strokeDasharray="6 10"
              style={{ animation: "dashMove 6s linear 0.6s infinite" }}
            />
          </svg>

          {/* Cards  ,  stacked on small screens; positioned from md+ */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:block">
            {/* 01 */}
            <div className="flex justify-center md:absolute md:left-[24px] md:top-[40px] lg:left-[40px] lg:top-[10px]">
              <BenefitCard idx={0} item={items[0]} delay={0} />
            </div>
            {/* 02 */}
            <div className="flex justify-center md:absolute md:left-[480px] md:top-[120px] lg:left-[520px] lg:top-[110px]">
              <BenefitCard idx={1} item={items[1]} delay={120} />
            </div>
            {/* 03 */}
            <div className="flex justify-center md:absolute md:left-[60px] md:top-[360px] lg:left-[80px] lg:top-[360px]">
              <BenefitCard idx={2} item={items[2]} delay={220} />
            </div>
            {/* 04 */}
            <div className="flex justify-center md:absolute md:left-[520px] md:top-[500px] lg:left-[560px] lg:top-[500px]">
              <BenefitCard idx={3} item={items[3]} delay={320} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
