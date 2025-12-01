// components/FadeInWhenVisible.js
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children, delay = 0, y = 30 }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
