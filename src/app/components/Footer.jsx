"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const linkClass =
    "relative px-1 font-secondary text-black/70 hover:text-primary transition";

  return (
    <footer className="bg-background border-t border-secondary/40 font-secondary px-6 md:px-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Left - Logo & Links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 text-sm md:text-lg text-center md:text-left gap-2">
          <img src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/ayatiworks_logo.svg" alt="Ayatiworks" className="h-8" />

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <Link href="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
            <span className="text-black/50">|</span>
            <Link href="/terms-and-conditions" className={linkClass}>
              Terms &amp; Conditions
            </Link>
          </div>

          <p className="text-black/80 text-xs md:text-sm">
            Copyright © {new Date().getFullYear()} – All rights reserved
          </p>
        </div>

        {/* Right - Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 md:gap-5"
        >
          {[
            { icon: <FaLinkedinIn />, link: "https://linkedin.com/company/ayatiworks" },
            { icon: <FaFacebookF />, link: "https://facebook.com/Ayatiworksindia/" },
            { icon: <FaInstagram />, link: "https://instagram.com/ayatiworks/" },
            { icon: <FaYoutube />, link: "https://youtube.com/@ayatiworks" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black/70 rounded-full p-2 text-black/70 hover:text-white hover:bg-primary hover:border-primary transition"
              aria-label={social.link}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
