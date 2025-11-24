"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // simulate load
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const dotVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.4,
        repeat: Infinity,
        repeatType: "reverse",
      },
    }),
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex items-center space-x-1">
        <motion.h1
          className="text-5xl font-medium text-primary font-primary"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ayati
        </motion.h1>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-6xl font-medium text-primary"
              custom={i}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
            >
              .
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
