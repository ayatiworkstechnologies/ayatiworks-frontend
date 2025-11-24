
"use client";
import { motion } from "framer-motion";

export default function Digital() {
  // Variants for animation
  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="py-12 section">
      <div className="section-container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white shadow-md p-6 gap-6">
        
        {/* Left Text Section */}
        <motion.div
          className="flex-1"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl/9 font-medium text-secondary font-primary mb-6">
            Step Into Our Digital Studio
          </h2>
          <p className="text-gray-600 text-lg/8 font-secondary leading-relaxed">
            Ayatiworks isn’t just another digital agency, it’s where strategy
            meets execution. Whether you're looking to grow, launch, or
            transform, our team is built to make it happen. Swing by for a
            conversation, no fluff, just real ideas and smart solutions that
            move your business forward!
          </p>
        </motion.div>

        {/* Right Availability Card */}
        <motion.div
          className="bg-primary text-white shadow-lg p-6 flex flex-col items-center w-full md:w-64"
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="bg-white text-primary font-primary text-xl font-medium px-4 py-1 rounded-sm mb-5">
            Available
          </span>
          <p className="text-lg font-primary font-medium mb-4">
            Monday - Friday
          </p>
          <p className="text-base font-secondary font-medium">
            10.00 am - 7.00 pm
          </p>
        </motion.div>
      </div>
    </section>
  );
}
