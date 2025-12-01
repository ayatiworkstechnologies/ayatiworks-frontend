"use client";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Connection() {
  const navigate = useNavigate();
  return (
    <section className="section py-20 bg-white overflow-hidden">
      <div className="section-container max-w-3xl mx-auto text-center px-4">
        {/* Subtitle */}
        <motion.p
          className="text-xs tracking-[0.3em] text-black/80 font-secondary mb-4 uppercase"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Write for Us
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-primary font-semibold text-black mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Got an insight, idea, or trend worth sharing with the world?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-black/80 font-secondary max-w-2xl mx-auto mb-14 text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         We welcome guest contributions from marketers, creators, and
          innovators. Pitch your story and let’s amplify your voice.
        </motion.p>

        {/* Button */}
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
          onClick={() => navigate("/contact-us")}
        >
          Contribute Now
        </motion.button>
      </div>
    </section>
  );
}
