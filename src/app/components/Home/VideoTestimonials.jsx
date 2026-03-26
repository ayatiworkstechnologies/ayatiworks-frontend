"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    client: "Retail entrepreneur",
    title: "Mr. Sathish Babu shares his journey",
    video: "https://www.youtube.com/watch?v=hVhLXAy_nFk",
  },
  {
    id: 2,
    client: "SPAARC",
    title: "Dr. Kannan Pugazhendi & Mrs. Sujatha Pugazhendi",
    video: "https://www.youtube.com/shorts/t6k66RCV1PI",
  },
];

export default function VideoTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Get visible items (2 at a time, wrapping around)
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      items.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return items;
  };

  const visibleTestimonials = getVisibleItems();

  const getYouTubeID = (url) => {
    if (url.includes("v=")) return url.split("v=")[1].split("&")[0];
    if (url.includes("youtu.be/"))
      return url.split("youtu.be/")[1].split("?")[0];
    return url.split("/").pop().split("?")[0];
  };

  const isYouTube = (url) =>
    url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <section className="bg-[#fafafa] section overflow-hidden px-4 md:px-0">
      {/* Heading + Nav Buttons Container */}
      <div className="section-container flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left relative"
        >
          <h2 className="section-title relative inline-block">
            Video Testimonials
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[180px] mt-3 origin-left rounded-full"
            />
          </h2>
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-4 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Carousel Content */}
      <div className="section-container max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item, idx) => (
              <motion.div
                key={`${currentIndex}-${item.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative w-full"
              >
                <div className="relative aspect-video w-full overflow-hidden shadow-2xl bg-black">
                  {isYouTube(item.video) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeID(item.video)}?autoplay=0`}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={item.video}
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      muted
                    />
                  )}
                </div>

                {/* Info Section - Now outside the video */}
                <div className="mt-6 space-y-1 px-1">
                  <p className="text-secondary font-primary text-xs md:text-sm font-medium tracking-widest uppercase">
                    {item.client}
                  </p>
                  <h3 className="text-primary font-primary text-xl md:text-3xl font-medium tracking-tight">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
