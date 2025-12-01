"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { caseStudies } from "../../lib/casestudy-data";

// ⬇️ import shared data

export default function CaseStudies() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // sort by id if you want a specific order (optional)
  const caseStudiesData = [...caseStudies].sort((a, b) => a.id - b.id);

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? caseStudiesData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === caseStudiesData.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 7s (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="section relative py-16 mb-10">
      <div className="section-container mx-auto max-w-6xl px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-6"
        >
          <h2 className="section-title flex items-start text-primary">
            Case Studies & Client Success Stories
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-black/80 mb-12 font-secondary leading-relaxed"
        >
          At Ayatiworks, we deliver end-to-end digital marketing solutions
          designed to help your business grow faster, smarter, and stronger.
        </motion.p>

        {/* Card Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute -left-6 lg:-left-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <FaChevronLeft size={28} />
          </motion.button>

          {/* Card Content */}
          <AnimatePresence
            mode="wait"
            onExitComplete={() => setIsAnimating(false)}
          >
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white shadow-lg rounded-2xl p-5 lg:p-7 flex flex-col lg:flex-row gap-6 items-center w-full max-h-[500px]"
            >
              {/* Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="flex-1 max-w-[320px]"
              >
                <img
                  src={caseStudiesData[current].image}
                  alt={caseStudiesData[current].title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl shadow-sm"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex-1 flex flex-col justify-between h-full"
              >
                <div>
                  <h3 className="text-2xl lg:text-3xl font-primary font-medium text-primary mb-3 leading-snug">
                    {caseStudiesData[current].title}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="bg-secondary h-1 w-[150px] mt-2 origin-left rounded-full"
                    />
                  </h3>
                  <p className="text-black/80 font-secondary text-sm lg:text-base leading-6 whitespace-pre-line line-clamp-[8] overflow-hidden">
                    {caseStudiesData[current].description}
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href={caseStudiesData[current].link}
                    className="inline-block bg-primary text-white px-5 py-2.5 rounded-full text-sm lg:text-base font-medium shadow-md hover:bg-secondary transition"
                  >
                    Read Full Case Study
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>


          {/* Right Arrow */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute -right-6 lg:-right-12 bg-white shadow-md p-2 rounded-full hover:bg-secondary hover:text-white transition"
          >
            <FaChevronRight size={28} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
