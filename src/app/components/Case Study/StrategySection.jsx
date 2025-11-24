// app/components/NippoShadowCase.jsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play, Link2, Users, Film, Star, Heart } from "lucide-react";


export default function StrategySection({
  ideaTitle = "The Idea",
  ideaCopy = `We tapped into nostalgia with the Nippo Shadow Art Challenge, a contest inviting families to create shadow art using Nippo torches. Inspired by childhood memories of crafting shapes and animals on walls, the idea connected product utility with playful creativity.`,
  ideaTagline = `Time to reignite childhood fun with shadows.`,
  strategyTitle = "The Strategy",
  strategyPoints = [
    "Teaser Videos — launched reels showing kids rediscovering shadow play.",
    "UGC at the Core — families shared photos/videos with #NippoShadowArt.",
    "Community Amplification — featured real kids and families to build authenticity.",
    "Emotional Connection — nostalgia + modern social content made the torch a source of joy.",
  ],
  executionTitle = "The Execution",
  teaserReels = [
    { title: "Teaser Reel", href: "https://www.instagram.com/reel/C8YdvnbppTg/" },
    { title: "Reveal Reel", href: "https://www.instagram.com/reel/C8eCpqWvbs7/" },
    { title: "UGC Reel", href: "https://www.instagram.com/reel/C8rfW_pConf/" },
  ] ,
  ugcItems = [
    { img: "/assets/casestudy/nippo-ugc-1.jpg", alt: "Shadow rabbit by family" },
    { img: "/assets/casestudy/nippo-ugc-2.jpg", alt: "Shadow bird" },
    { img: "/assets/casestudy/nippo-ugc-3.jpg", alt: "Shadow deer" },
    { img: "/assets/casestudy/nippo-ugc-4.jpg", alt: "Shadow wolf" },
  ] ,
  className = "",
}) {
  return (
    <section className={`section section-container ${className}`}>
      {/* === The Idea === */}
      <div className="grid gap-8 md:grid-cols-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7"
        >
          <h2 className="section-title text-left">{ideaTitle}</h2>
          <p className="section-phara mt-4">{ideaCopy}</p>

          <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-primary/5 px-5 py-3">
            <Star className="w-5 h-5 text-secondary" />
            <span className="font-secondary text-primary">{ideaTagline}</span>
          </div>
        </motion.div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
            <img
              src="/assets/casestudy/nippo-hero.jpg"
              alt="Torch casting playful shadows on a wall"
              className="h-72 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-primary text-xl">Shadow Art Challenge</p>
              <p className="text-white/90 text-sm">Nippo × Families × Play</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* === The Strategy === */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="section-title text-left">{strategyTitle}</h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {strategyPoints.map((point, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-md"
            >
              <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-secondary/10">
                {idx % 2 === 0 ? (
                  <Film className="h-5 w-5 text-secondary" />
                ) : (
                  <Users className="h-5 w-5 text-secondary" />
                )}
              </div>
              <p className="section-phara m-0">{point}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* === The Execution === */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="section-title text-left">{executionTitle}</h2>

        {/* Reel Cards */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {teaserReels.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                {/* Use a branded placeholder; Instagram thumbnails require server-side fetch, so keep a local image if needed */}
                <img
                  src={r.thumb || "/assets/casestudy/ig-placeholder.jpg"}
                  alt={r.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-90" />
                <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium">
                  <Play className="h-4 w-4 text-primary" />
                  Reel
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="line-clamp-2 font-primary text-lg text-white">
                    {r.title}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <span className="inline-flex items-center gap-1 text-primary">
                  <Link2 className="h-4 w-4" />
                  Open on Instagram
                </span>
                <Heart className="h-4 w-4 text-secondary" />
              </div>
            </Link>
          ))}
        </div>

        {/* UGC Grid */}
        <div className="mt-10">
          <div className="mb-4 flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            <p className="section-phara m-0">UGC Participation</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {ugcItems.map((u, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <img
                  src={u.img}
                  alt={u.alt || "UGC entry"}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Strip (optional, re-usable with your btn-primary) */}
      <div className="mt-14 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary px-6 py-10 text-center shadow-xl">
        <h3 className="section-title text-white">Ready to spark playful participation?</h3>
        <p className="section-phara mt-2 text-white/90 ">
          Bring product utility to life with a community-first challenge that earns reach, not just buys it.
        </p>
        <Link
          href="/contact-us"
          className="btn-primary mt-5 inline-flex items-center gap-2 group bg-white text-primary hover:bg-white/90"
        >
          Let’s Build Your UGC Campaign
        </Link>
      </div>
    </section>
  );
}
