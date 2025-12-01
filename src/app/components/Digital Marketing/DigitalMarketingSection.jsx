"use client";
import React from "react";
import { motion } from "framer-motion";

export default function DigitalMarketingSection() {
  return (
    <section className="bg-white section ">
      {/* Top Title Section */}
      <div className="section-container text-left flex items-start gap-6 mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
        >
          <span className="mb-2 flex items-start">Award Winning Digital Marketing Agency in Chennai</span>
          {/* <span className="block mb-4">Marketing Agency in Chennai</span> */}
          {/* Decorative line */}
          <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[280px] mt-3 origin-left rounded-full"
            />
        </motion.h1>

        
      </div>
      <motion.div className="section-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
 <p className="text-black/80 font-secondary font-bold mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
         Looking for a trusted digital marketing agency in Chennai? 
         </p>
         <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
         Whether you need a <strong>social media marketing agency in Chennai</strong>, comprehensive <strong>digital marketing services in Chennai</strong> , or a strategic <strong>advertising agency in Chennai</strong>, Ayatiworks delivers ROI-driven solutions tailored to B2B, B2C, and D2C brands across Tamil Nadu.
         </p>
         <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
         As an award-winning digital marketing agency serving businesses from T-Nagar to OMR, we combine data-driven strategies with creative excellence to help your brand thrive in competitive markets.
         </p>
        </motion.div>

      {/* Content Grid */}
      <div className="section-container mx-auto items-center">
        {/* Left side - TV Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/tv-dm.png"
            alt="Award Winning Digital Marketing Agency in Chennai"
            className="w-200 h-full drop-shadow-xl rounded-xl"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            Ayatiworks extends its heartfelt thanks to all our valuable clients
            for trusting us and giving us the opportunity to elevate your
            brands. Your confidence in our work has not only driven measurable
            business growth but also strengthened our reputation as an
            award-winning digital marketing agency in Chennai. 
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            At Ayatiworks, we believe digital marketing is more than just
            campaigns, it’s about creating experiences that connect, engage, and
            convert. Backed by a team of digital marketing experts in Chennai,
            we craft strategies that combine creativity with performance. From
            SEO and social media marketing to influencer campaigns and
            multilingual solutions, every service is designed to maximize ROI
            for your business. 
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            Our client-first philosophy means we don’t offer cookie-cutter
            solutions. Instead, we dive deep into your brand, industry, and
            audience before designing tailored strategies that deliver results.
            Whether you’re a B2B, B2C, or D2C brand in Tamil Nadu, Ayatiworks
            ensures your digital presence doesn’t just exist, it thrives. 
          </p>
          <p className="text-black/80 font-secondary font-medium mb-2 text-base/8 sm:text-base/8 md:text-lg/8">
            {" "}
            Ready to scale your brand with Chennai’s most trusted digital
            marketing agency?  
          </p>
        </motion.div>
        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-left mt-8"
        >
          <motion.button
            className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Let’s build your growth story together.
          </motion.button>
        </motion.div>
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
