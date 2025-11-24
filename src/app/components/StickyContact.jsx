"use client";

import { FaQuoteRight } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function StickyContact({
  href = "/contact-us",
  // label = "Get in touch with us",
}) {
  const router = useRouter();
  const prefersReducedMotion = useReducedMotion();

  const floatY = prefersReducedMotion ? 0 : [0, -8, 0, 8, 0];
  const pulse  = prefersReducedMotion ? 1 : [1, 1.1, 1];

  const go = () => router.push(href);

  return (
    <div className="fixed bottom-[100px] right-4 z-50 flex items-center cursor-pointer select-none">
      {/* Text pill (smooth float) */}
      {/* <motion.span
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: floatY, opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        onClick={go}
        className="px-4 py-2 mr-2 font-semibold text-foreground text-sm bg-background rounded-full shadow-md border border-foreground/15 hover:bg-foreground/5"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && go()}
        aria-label={label}
        title={label}
      >
        {label}
      </motion.span> */}

      {/* Quote icon (pulse) */}
      <motion.button
        type="button"
        initial={{ scale: 1 }}
        animate={{ scale: pulse }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        onClick={go}
        className="bg-secondary text-primary-foreground flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Open contact page"
        title="Open contact page"
      >
        <FaQuoteRight className="text-xl text-white" />
      </motion.button>
    </div>
  );
}
