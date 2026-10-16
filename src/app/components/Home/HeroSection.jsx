
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Reusable video component
function HeroVideo({
  src,
  poster,
  className,
  preload = "metadata",
  priority = false,
}) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      className={className}
      width={1280}
      height={720}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      {...(priority ? { fetchPriority: "high" } : {})}
    >
      <track kind="captions" />
    </video>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white py-6 md:pt-20">
      <div className="mx-auto max-w-[1440px] grid gap-3 px-4 md:px-6 grid-cols-2 md:grid-cols-2 xl:grid-cols-12 auto-rows-auto xl:h-[600px] xl:grid-rows-[180px_172px_168px]">

        {/* 1. TOP WIDE VIDEO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="col-span-2 xl:col-start-1 xl:col-span-8 xl:row-start-1 rounded-2xl md:rounded-3xl overflow-hidden aspect-video xl:aspect-auto xl:h-full"
        >
          <HeroVideo
            src="/banner/banner-01.mov"
            className="w-full h-full object-cover"
            preload="auto"
            priority={true}
          />
        </motion.div>

        {/* 2. RIGHT TOP IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 xl:col-start-9 xl:col-span-4 xl:row-start-1 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-300 aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <Image
            src="/banner/Ashik_lights.png"
            alt="Steel Rods - Manufacturing Excellence"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>

        {/* 3. LEFT MIDDLE IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-2 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <Image
            src="/banner/psm.png"
            alt="Safety First - Kid with Helmet"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>

        {/* 4. CENTER MIDDLE VIDEO - ZOOM FIX */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative col-span-2 xl:col-start-5 xl:col-span-4 xl:row-start-2 border border-gray-300 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <HeroVideo
            src="/banner/Banner_Video.mp4"
            className="absolute left-1/2 top-1/2 h-full w-full max-w-none -translate-x-1/2 -translate-y-1/2 scale-[4] object-cover object-center"
            preload="metadata"
          />
        </motion.div>

        {/* 5. RIGHT MIDDLE IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="col-span-1 xl:col-start-9 xl:col-span-4 xl:row-start-2 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <Image
            src="/banner/RD.png"
            alt="Premium Pens - Quality Craftsmanship"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>

        {/* 6. LEFT BOTTOM IMAGE */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="col-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-3 border border-gray-300 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <Image
            src="/banner/Rego.png"
            alt="Modern Gadget - Technology Innovation"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </motion.div>

        {/* 7. RIGHT BOTTOM WIDE VIDEO */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="col-span-2 xl:col-start-5 xl:col-span-8 xl:row-start-3 rounded-2xl md:rounded-3xl overflow-hidden aspect-[16/9] xl:aspect-auto xl:h-full"
        >
          <HeroVideo
            src="/banner/banner-07.mov"
            className="w-full h-full object-cover"
            preload="metadata"
          />
        </motion.div>

      </div>
    </section>
  );
}
