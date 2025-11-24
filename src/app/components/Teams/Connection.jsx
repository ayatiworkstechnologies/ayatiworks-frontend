"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Connection() {
  const router = useRouter();
  const goToContact = () =>  router.push("/contact-us#form");

  return (
    <div className="bg-white text-center py-16 px-4">
      {/* Subtitle */}
      <p className="text-xs tracking-widest text-gray-500 mb-2">
        LET CURIOSITY LEAD THE WAY
      </p>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-4">
        Open Inbox, Open Possibilities
      </h2>

      {/* Description */}
      <p className="text-gray-600 mx-auto mb-8 text-sm sm:text-base">
        Got questions, goals, or big ideas? Let’s talk strategy, scale, and digital moves. <br />
        Drop us a message and we’ll get back faster than your next scroll.
      </p>

      {/* Button */}
      <motion.button
        className="relative bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08, boxShadow: "0px 12px 25px rgba(0,0,0,0.15)" }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={goToContact}
      >
        SPARK A CONNECTION
      </motion.button>
    </div>
  );
}
