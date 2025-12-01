
// app/components/HeroSection.jsx
"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// ✅ Direct video component (no lazy load)
function HeroVideo({ src, poster, className }) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
    />
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white py-10 md:pt-20">
      <div
        className="
          mx-auto max-w-[1440px]
          grid gap-2 px-2
          grid-cols-2 md:grid-cols-2 xl:grid-cols-12
          auto-rows-auto
          xl:h-[600px] xl:grid-rows-[180px_172px_168px]
        "
      >
        {/* 1️⃣ Top Wide Video */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-2 xl:col-start-1 xl:col-span-8 xl:row-start-1
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <HeroVideo
            // src="/banner/banner-01.mov"
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-01.mov"
            // src="https://ayatiwork.b-cdn.net/banner/banner-01.mov"
            // poster="https://ayatiwork.b-cdn.net/banner/banner-01-poster.webp"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 2️⃣ Right Top Small Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-1 xl:col-start-9 xl:col-span-4 xl:row-start-1
            rounded-3xl overflow-hidden border border-gray-300
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            // src="https://ayatiwork.b-cdn.net/banner/banner-02.webp"
            // src="/banner/banner-02.webp"
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-02.webp"
            alt="Steel Rods"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* 3️⃣ Left Middle Small Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            col-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-2
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-03.webp"
            // src="/banner/banner-03.webp"
            // src="https://ayatiwork.b-cdn.net/banner/banner-03.webp"
            alt="Kid with helmet"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* 4️⃣ Center Middle Video */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            col-span-2 xl:col-start-5 xl:col-span-4 xl:row-start-2
            border border-gray-300 rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <HeroVideo
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-04.mov"
            // src="/banner/banner-04.mov"
            // src="https://ayatiwork.b-cdn.net/banner/banner-04.mov"
            poster="https://ayatiwork.b-cdn.net/banner/banner-04-poster.webp"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* 5️⃣ Right Middle Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="
            col-span-1 xl:col-start-9 xl:col-span-4 xl:row-start-2
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-05.webp"
            // src="/banner/banner-05.webp"
            // src="https://ayatiwork.b-cdn.net/banner/banner-05.webp"
            alt="Pens"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* 6️⃣ Left Bottom Image */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="
            col-span-1 xl:col-start-1 xl:col-span-4 xl:row-start-3
            border border-gray-300 rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-06.webp"
            // src="/banner/banner-06.webp"
            // src="https://ayatiwork.b-cdn.net/banner/banner-06.webp"
            alt="Gadget"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </motion.div>

        {/* 7️⃣ Right Bottom Wide Video */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="
            col-span-2 xl:col-start-5 xl:col-span-8 xl:row-start-3
            rounded-3xl overflow-hidden 
            aspect-[16/9] xl:aspect-auto xl:h-full
          "
        >
          <HeroVideo
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-07.mov"
            // src="/banner/banner-07.mov"
            // src="https://ayatiwork.b-cdn.net/banner/banner-07.mov"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
