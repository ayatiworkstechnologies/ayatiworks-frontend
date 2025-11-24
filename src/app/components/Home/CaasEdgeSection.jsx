"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

/** Our Edge: CaaS , Content as a Strategy */
export default function CaasEdgeSection({
  rightTitle = "",
  slides = [
    // { src: "/caas/royal-1.jpg", alt: "Campaign 1", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DNGLwReMT4Y/?img_index=1" },
    // { src: "/caas/royal-2.jpg", alt: "Campaign 2", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DNayIEaNomV/?img_index=1" },
    // { src: "/caas/royal-3.mp4", alt: "Campaign 3", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DOYlMKXkvA9/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/spark-1.mp4", alt: "Campaign 4", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DIG1nPHPVbg/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/spark-2.mp4", alt: "Campaign 5", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DIG1nPHPVbg/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/spark-3.mp4", alt: "Campaign 6", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DJoxYUkpVx6/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/herbale.mp4", alt: "Campaign 7", heeding: "Traffic Smog-ku Bye Bye - Herbale’s Pocket Hero On-the-Go!  ", href: "https://www.youtube.com/watch?v=riCCr3lDm3s", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/bhookle.mp4", alt: "Campaign 8", heeding: "Bengaluru-ya, Yen Waiting? Amma Samayal Now Just a Tap Away - Bhookle Style! ", href: "https://www.instagram.com/p/DFh6pTKK9d_/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/nithyam-1.mp4", alt: "Campaign 9", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala!  ", href: "https://www.instagram.com/p/C_dGRtXtq4I/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/nithyam-2.mp4", alt: "Campaign 10", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala!  ", href: "https://www.instagram.com/p/C_ZzSDrslgb/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    // { src: "/caas/nithyam-3.mp4", alt: "Campaign 11", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala! ", href: "https://www.instagram.com/p/C_5je4IyKYC/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-1.jpg", alt: "Campaign 1", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DNGLwReMT4Y/?img_index=1" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-2.jpg", alt: "Campaign 2", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DNayIEaNomV/?img_index=1" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3.mp4", alt: "Campaign 3", heeding: "Any Script. Any Culture. One Impact - Ayatiworks Gets Your Brand Heard Everywhere", href: "https://www.instagram.com/p/DOYlMKXkvA9/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/spark-1.mp4", alt: "Campaign 4", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DIG1nPHPVbg/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/spark-2.mp4", alt: "Campaign 5", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DIG1nPHPVbg/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/spark-3.mp4", alt: "Campaign 6", heeding: "Lifestyle Change-na Life Change - 98% Diseases-ku Bye Bye! ", href: "https://www.instagram.com/p/DJoxYUkpVx6/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/herbale.mp4", alt: "Campaign 7", heeding: "Traffic Smog-ku Bye Bye - Herbale’s Pocket Hero On-the-Go!  ", href: "https://www.youtube.com/watch?v=riCCr3lDm3s", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/bhookle.mp4", alt: "Campaign 8", heeding: "Bengaluru-ya, Yen Waiting? Amma Samayal Now Just a Tap Away - Bhookle Style! ", href: "https://www.instagram.com/p/DFh6pTKK9d_/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/nithyam-1.mp4", alt: "Campaign 9", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala!  ", href: "https://www.instagram.com/p/C_dGRtXtq4I/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/nithyam-2.mp4", alt: "Campaign 10", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala!  ", href: "https://www.instagram.com/p/C_ZzSDrslgb/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
    { src: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/nithyam-3.mp4", alt: "Campaign 11", heeding: "Onam-azing Flavors, Chennai Style - சுவை that speaks Kerala! ", href: "https://www.instagram.com/p/C_5je4IyKYC/", poster: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/caas/royal-3-poster.jpg" },
  ],
  autoPlay = true,
  intervalMs = 5000,
  showOverlayHeading = true,
}) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  // slider state
  const [i, setI] = useState(0);
  const n = slides.length || 1;
  const wrap = (v) => ((v % n) + n) % n;
  const next = () => setI((v) => wrap(v + 1));
  const prev = () => setI((v) => wrap(v - 1));

  // autoplay (pause on hover)
  const boxRef = useRef(null);
  useEffect(() => {
    if (!autoPlay || prefersReducedMotion || n <= 1) return;
    let timer = setInterval(next, intervalMs);
    const el = boxRef.current;
    const stop = () => { clearInterval(timer); };
    const resume = () => { timer = setInterval(next, intervalMs); };
    if (el) {
      el.addEventListener("mouseenter", stop);
      el.addEventListener("mouseleave", resume);
    }
    return () => {
      clearInterval(timer);
      if (el) {
        el.removeEventListener("mouseenter", stop);
        el.removeEventListener("mouseleave", resume);
      }
    };
  }, [autoPlay, prefersReducedMotion, intervalMs, n]);

  const isVideo = (src = "") => /\.(mp4|webm|ogg)$/i.test(src);

  const goToContact = () => {
    router.push("/content-as-a-service/multilingual-marketing");
  };

  return (
    <section className="relative bg-white section-container">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Heading */}
        <motion.h2 className="section-title text-left" {...fadeUp(0)}>
          <span className="mb-2 block">Our Edge: CaaS - Content as a Strategy</span>
          <motion.div
            initial={prefersReducedMotion ? {} : { scaleX: 0 }}
            whileInView={prefersReducedMotion ? {} : { scaleX: 1 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-32 sm:w-48 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            aria-hidden="true"
          />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8">
          {/* LEFT copy */}
          <div className="lg:col-span-7 space-y-5">
            <motion.p {...fadeUp(0.05)} className=" text-lg sm:text-2xl font-primary leading-7 text-secondary">
              Ayatiworks: CAAS That Speaks South India, From the Heart of the South
            </motion.p>
            <motion.p {...fadeUp(0.05)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              At Ayatiworks, we don’t just serve South Indian brands, we belong here.
            </motion.p>
            <motion.p {...fadeUp(0.05)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              As a fully integrated creative and digital agency, our Content as a Service (CAAS) offering is built exclusively for South Indian branding.
            </motion.p>
            <motion.p {...fadeUp(0.1)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              From Chennai’s fast-paced tech corridors to Kochi’s vibrant start-up lanes, from Bengaluru’s cosmopolitan buzz to Hyderabad’s cultural crossroads, we know the pulse, the language, and the little nuances that make your audience feel,{" "}
              <span className="text-primary font-primary italic font-medium">“This is ours.”</span>
            </motion.p>
            <motion.p {...fadeUp(0.15)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              Our CAAS experts craft regional branding that thrives on every platform your customers live on, FB, IG, Snap, X, YouTube, Taboola, OTT, and every major South Indian digital channel.
            </motion.p>
            <motion.p {...fadeUp(0.25)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              Behind the scenes are our seasoned art directors, regional content creators, and vernacular copywriters, storytellers who live and breathe South Indian culture. They don’t just translate, they transform your brand message into something your audience instantly trusts and embraces.
            </motion.p>
            <motion.p {...fadeUp(0.3)} className=" text-base sm:text-lg font-secondary leading-7 text-black/80">
              Our CAAS strategy goes far beyond language and words. It captures local emotions, traditions, and intent, turning campaigns, organic or paid into messages that your audience doesn’t just watch or scroll past, but claims as their own.
            </motion.p>
          </div>

          {/* RIGHT slider */}
          <div className="lg:col-span-5">
            <motion.h3 {...fadeUp(0.12)} className="text-sm uppercase tracking-wide text-gray-500 mb-3 font-primary">
              {rightTitle}
            </motion.h3>

            <motion.div
              {...fadeUp(0.16)}
              ref={boxRef}
              className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_12px_40px_rgba(0,0,0,0.12)] bg-white"
            >
              {/* track */}
              <div className="flex transition-transform duration-500 ease-out" style={{ transform: `translateX(-${i * 100}%)` }}>
                {slides.map((s, idx) => {
                  const title = s.heading || s.heeding || s.alt || "";
                  const clickable = s.href && s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {};
                  return (
                    <a key={idx} href={s.href || "#"} className="w-full shrink-0 block" aria-label={s.alt || `Slide ${idx + 1}`} {...clickable}>
                      <div className="relative w-full">
                        {/* media */}
                        <div className="w-full h-[400px] sm:h-[450px] md:h-[540px] bg-black">
                          {isVideo(s.src) ? (
                            <video className="w-full h-full object-cover" src={s.src} poster={s.poster} playsInline muted loop autoPlay />
                          ) : (
                            <img src={s.src} alt={s.alt || ""} className="w-full h-full " loading="lazy" decoding="async" />
                          )}
                        </div>

                        {/* caption */}
                        {title && (
                          <div className="px-4 py-2">
                            <p className="text-lg font-medium mb-5 text-secondary font-primary leading-snug line-clamp-2">{title}</p>
                          </div>
                        )}
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* arrows */}
              {n > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-3 top-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-gray-900 shadow hover:bg-white"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}

              {/* dots */}
              {n > 1 && (
                <div className="absolute bottom-3 left-0 mt-4 right-0 flex items-center justify-center gap-2">
                  {slides.map((_, d) => (
                    <button
                      key={d}
                      onClick={() => setI(d)}
                      aria-label={`Go to slide ${d + 1}`}
                      className={`h-1.5 rounded-full mt-5 transition-all ${i === d ? "w-6 bg-primary" : "w-2 bg-black/30"}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>

            <div className="flex items-center justify-center w-full mt-4">
              <motion.button
                className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.08, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                onClick={goToContact}
              >
                Get a FREE CAAS Plan Today!
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
