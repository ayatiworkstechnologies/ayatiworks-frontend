"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  "http://89.167.92.220:8088/assets/service/slider-img-1.png",
  "http://89.167.92.220:8088/assets/service/slider-img-2.png",
  "http://89.167.92.220:8088/assets/service/slider-img-3.png",
];

export default function AutoImageSlider() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-container">
      <div className="relative w-full max-w-6xl mx-auto h-full sm:h-full overflow-hidden shadow-lg">
        <div className="flex w-full h-full">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full object-cover flex-shrink-0"
              initial={false}
              animate={{
                x: `-${index * 100}%`, // shift images
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
