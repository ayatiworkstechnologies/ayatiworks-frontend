"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

const years = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017];

// Content for each year
const yearContent = {
  2024: {
    title: "The Year of Unnati",
    text: `The Year of Unnati marked our eighth chapter; a journey filled with victories and resilience. Every challenge we faced blossomed into meaningful rewards, reflecting our unwavering drive for progress. In 2024, we didn’t just count achievements in numbers; we celebrated the experiences gained, the knowledge shared, and the collective wins that shaped us. Standing tall at the summit of success, the spirit of Unnati propelled us forward into a future brimming with promise and new opportunities.`,
  },
  2023: {
    title: "The Year of Fruition",
    text: `The Year of Fruition was our seventh chapter, a time when patience truly proved to be our greatest virtue. The hard work we invested in over the years finally bore fruit, and we embraced the rewards with gratitude and pride. With renewed insights, sharper goals, and hope driving every step, Ayatiworks moved forward with confidence. 2023 marked the moment when the next big thing had already begun for us.`,
  },
  2022: {
    title: "The Year of Blooming",
    text: `The Year of Blooming was when Ayatiworks spread its wings wide in the digital sky. Our new workplace came alive, bringing together five dynamic departments, Creative, Content, Strategy, Web & Product Development, Social Media, and Client Success. 2022 wasn’t just about growth; it was about soaring higher with purpose. This was the year we bloomed into a stronger, more complete Ayatiworks, ready to embrace the Now and the exciting journey ahead.`,
  },
  2021: {
    title: "The Year of Recognition",
    text: `The Year of Recognition marked our fifth milestone, and Ayatiworks truly flexed its digital strength. We proudly earned the title of Best Digital Interactive Tech Company and were honored with the award for Excellence in Digital Marketing. Our pioneer clients continued their journey with us, while new brands discovered our digital magic. With the momentum building, our team expanded to 20 passionate professionals, ready to make waves and reshape the digital world.`,
  },
  2020: {
    title: "The Year We Hoped and Hustled",
    text: `The Year We Hoped and Hustled was when challenges met resilience. Even as COVID and lockdowns tested the world, Ayatiworks refused to lose momentum. Our team grew from 10 to 15 strong, and so did our client family, with brands like Nova Life Space, Vels Group, Indian Terrain, Royal Enfield, and Benelli joining us. 2020 had already fueled our optimism, crowning us Best Brand of Tamil Nadu, and in 2021 we turned that hope into hustle-driven growth.`,
  },
  2019: {
    title: "The Year We Leveled Up",
    text: `If 2018 was a win, 2019 was a boss battle! Big names like Xiaomi, Siva Hospitals, Dr. Cecy, and Hyundai joined our roster, proving our digital magic was spot on. But wait, there’s more! We created our very own learning management system for the Singapore Government (yep, we went BIG). And our team? Grew to 10 legends ready to take on the world!`,
  },
  2018: {
    title: "The Year We Went Global (And Doubled Up!)",
    text: `The Year We Went Global (and Doubled Up!) was a milestone worth celebrating. Turning one felt incredible as Ayatiworks moved from supporting local legends to landing our very first overseas client, schools in Singapore, who trusted us with ROI-driven campaigns. Our team quickly grew from 2 to 6, and new partnerships with Pettikadai, Vinayak Motors, and Noritake made 2018 a year of promise, progress, and powerful wins that set the stage for global growth.`,
  },
  2017: {
    title: "The Year We Went from Zero to Zoom!",
    text: `The Year We Went from Zero to Zoom was where it all began. What started with two dreamers and a bold idea quickly turned into something bigger. We began by helping small brands and startups find their digital footing, and soon larger names like Kesavardhini and Syscom came knocking for our digital magic. With offbeat strategies and fresh energy, we didn’t just help them grow, we propelled their digital sales into the stratosphere.`,
  },
};
export default function YearSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  // ✅ Start auto slider
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % years.length);
    }, 3000);
  };

  // ✅ Stop auto slider
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const currentYear = years[activeIndex];
  const { title, text } = yearContent[currentYear];

  return (
    <section
      className="bg-white section"
      onMouseEnter={stopAutoSlide} // ✅ Pause when mouse over
      onMouseLeave={startAutoSlide} // ✅ Resume when mouse leaves
    >
      <div className="section-container mx-auto">
        {/* Timeline Nav */}
        <div className="flex items-center justify-center text-secondary font-medium mb-12 overflow-x-auto relative">
          <button
            className="text-primary px-2"
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + years.length) % years.length)
            }
          >
            <BiSolidLeftArrow className="h-6 w-6" />
          </button>

          <div className="flex items-center">
            {years.map((year, idx) => (
              <div key={year} className="flex items-center">
                <div
                  className={`px-3 p-2 cursor-pointer relative transition ${
                    idx === activeIndex
                      ? "text-secondary text-4xl font-medium font-primary"
                      : "text-secondary text-2xl font-normal font-primary"
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {idx === activeIndex && (
                    <>
                      <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>
                    </>
                  )}
                  {year}
                </div>
                {idx !== years.length - 1 && (
                  <div className="w-14 h-0.5 bg-primary mx-1"></div>
                )}
              </div>
            ))}
          </div>

          <button
            className="text-primary px-2"
            onClick={() => setActiveIndex((prev) => (prev + 1) % years.length)}
          >
            <BiSolidRightArrow className="h-6 w-6" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Content */}
          <div>
            <h2 className="text-secondary font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
              {title}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                className="bg-secondary h-1 w-[100px] mt-2 mb-2 origin-left rounded-full"
                aria-hidden="true"
              />
            </h2>

            <p className="text-black/80 font-secondary leading-relaxed mb-6">
              {text}
            </p>
          </div>

          {/* Right - Vertical Auto Slider */}
          <div
            className="relative flex items-center justify-center h-64 overflow-hidden"
            style={{
              backgroundImage: `url(/assets/dotted-bg.png)`,
              backgroundSize: "cover",
              backgroundRepeat: "repeat",
            }}
          >
            <div className="flex flex-col items-center justify-center space-y-6">
              <AnimatePresence initial={false}>
                {years.map((year, idx) => {
                  const offset = idx - activeIndex;
                  if (Math.abs(offset) > 1) return null;

                  const isActive = idx === activeIndex;
                  return (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{
                        opacity: isActive ? 1 : 0.3,
                        y: 0,
                        scale: isActive ? 1.3 : 1,
                      }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ duration: 0.6 }}
                      className={`font-primary font-extrabold ${
                        isActive
                          ? "text-5xl text-secondary"
                          : "text-3xl text-gray-400"
                      }`}
                    >
                      {year}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div>
    </section>
  );
}
