"use client";
import { motion } from "framer-motion";

export default function Brand() {
  return (
    <section className="section">
      <div className="bg-primary text-white section-container p-6 sm:p-10 text-center rounded-lg shadow-md">
        
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-primary font-medium mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Ready to Make Your Brand the Main Act?
        </motion.h2>

        {/* Underline SVG / Wave Line */}
        {/* <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 10"
          className="mx-auto mb-6 w-32 sm:w-40"
          fill="none"
          stroke="white"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <path d="M0 5 Q50 0 100 5 T200 5" />
        </motion.svg> */}

        {/* Paragraph */}
        <motion.p
          className=" mx-auto font-secondary text-base sm:text-lg leading-relaxed mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          At Ayati Works, we don’t follow trends; we set them. If you’re ready
          to turn your brand into the next big thing, we’re ready to make it
          happen.
        </motion.p>

        {/* Small Line */}
        <motion.p
          className="font-secondary text-base sm:text-lg mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Next is Now. !
        </motion.p>

        {/* Last Line */}
        <motion.p
          className="font-secondary text-base sm:text-lg"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Let’s make your brand impossible to ignore.
        </motion.p>
      </div>
    </section>
  );
}
