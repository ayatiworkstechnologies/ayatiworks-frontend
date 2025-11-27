import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import FadeInWhenVisible from "../FadeInWhenVisible";

export default function PromoHero() {
  return (
    <section className="section-container bg-white items-center">
      {/* ✅ Top Banner */}
      <FadeInWhenVisible y={-30}>
        <div className="bg-primary text-white rounded-xl px-4 sm:px-6 md:px-10 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className="text-center md:text-left text-lg sm:text-xl md:text-2xl lg:text-4xl leading-snug">
            <p className="font-primary font-medium leading-normal p-2 sm:p-4">
              Clicks & Quirks. Growth That Works.{" "}
              <br className="hidden sm:block" />
              Turn Clicks into Pure Brand Alchemy.
              {/* <span className="text-secondary bg-white font-primary font-medium ml-2 px-2 py-0.5 rounded-md">
                30 days!
              </span> */}
            </p>
          </div>
          <Link
            href="/contact-us"
            className="inline-block bg-secondary hover:bg-secondary/90 
             font-primary font-medium text-white 
             px-4 sm:px-6 py-2.5 sm:py-3 rounded-full 
             text-sm sm:text-lg lg:text-xl
             transition duration-300 ease-in-out shadow-md hover:shadow-lg"
            aria-label="Contact Us"
          >
            KNOW MORE
          </Link>
        </div>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <div className="flex flex-col items-center text-center py-5">
          <h1 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Chennai’s 360° Creative & Digital Growth Agency
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
          />
        </div>
      </FadeInWhenVisible>

      {/* ✅ Sub-header */}
      <FadeInWhenVisible delay={0.2}>
        <div className="w-full section-container mt-8 sm:mt-10 text-center flex flex-col sm:flex-row justify-between items-center gap-3">
          <h2 className="section-title text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Behind the Clicks
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-[100px] mt-1 origin-left rounded-full"
            />
          </h2>
          <p className="text-secondary font-primary text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug">
            Innovating with A Dash of Madness Since 2017!
          </p>
        </div>
      </FadeInWhenVisible>

      {/* ✅ TV Image */}
      <FadeInWhenVisible delay={0.4} y={10}>
        <div className="mt-8 sm:mt-10 w-full mx-auto flex justify-center items-center">
          <img
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/tv-utsah.png"
            alt="The Year of Utsah"
            className="mx-auto h-82 object-contain"
          />
        </div>
      </FadeInWhenVisible>

      {/* ✅ Description */}
      {/* <FadeInWhenVisible delay={0.6}>
        <div className="w-full max-w-5xl mt-8 sm:mt-10 mx-auto flex justify-center sm:text-left px-4">
          <p className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed font-secondary text-center sm:text-left">
            This year at Ayatiworks, we’re embracing Utsah , the enthusiasm and
            energy that fuel everything we do. For us, Utsah means approaching
            every challenge with positivity, bringing fresh ideas to the table,
            and creating meaningful work that makes a difference. It’s about
            going the extra mile for our clients, supporting each other as a
            team, and finding joy in every milestone, big or small. As we step
            into 2025, Utsah reminds us to stay passionate, stay inspired, and
            stay connected.
          </p>
        </div>
        <div className="w-full max-w-5xl mt-8 sm:mt-10 mx-auto sm:text-left px-4">
          <h3 className="text-base sm:text-lg md:text-xl text-primary font-secondary text-center sm:text-left font-medium mt-6">
            Here’s to a year of growth, creativity, and purpose , powered by
            Utsah! Let’s make it unforgettable!
          </h3>
        </div>
      </FadeInWhenVisible> */}
      {/* Divider */}
      {/* <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-8 sm:mt-10 section-container"
      ></motion.div> */}
    </section>
  );
}
