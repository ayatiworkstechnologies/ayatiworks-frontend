"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AwardsSectionPage() {

  const router = useRouter();
  const goToContact = () =>  router.push("/contact-us#form");
  return (
    <>
      <section className="section-container py-12">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="section-title text-left "
          >
            <span className="mb-2 block">
              Celebrating Milestones, Honoring Excellence
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[350px] mt-3 origin-left rounded-full"
            />
          </motion.h2>
        </div>

        {/* ✅ Make grid parent tall enough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          {/* Left Content */}
          <div className="text-black/80 space-y-6">
            {/* Points */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-black/80 space-y-6"
            >
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                At Ayatiworks, every award is more than just a trophy, it’s a
                reminder of the passion, persistence, and people behind our
                journey.   Over the years, we’ve been recognized by industry
                leaders for our creativity, innovation, and impact across
                digital, design, and technology.  
              </p>
              <p className="text-base/7 sm:text-lg/8 md:text-lg/9 text-black/80 font-secondary font-medium">
                These honors reflect the trust our clients place in us and the
                commitment our team brings to every project. 
              </p>
              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left mt-8"
              >
                <motion.button
                  className="relative cursor-pointer bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 "
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onClick={goToContact}
                >
                  BOOK FREE CONSULTATION TODAY
                </motion.button>
              </motion.div>
              {/* <p className="text-base sm:text-lg md:text-xl text-black/80 font-secondary font-medium leading-relaxed"></p> */}
            </motion.div>
          </div>

          {/* Right - Sticky Image */}
          <div className="hidden md:block">
            {/* ✅ Sticky works if parent (this div) doesn’t collapse */}
            <div className="sticky top-20">
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/group-img.png"
                alt="Search Engines Work"
                className="w-full h-auto  mx-auto "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
