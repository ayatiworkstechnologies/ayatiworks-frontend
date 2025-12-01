"use client";

import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

const services = [
  {
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/seo.png",
    title: "Branding  Services",
    desc: "At Ayatiworks, Content as a Service is built to be modular, allowing you to choose exactly what your brand needs. From shaping your identity to producing high-impact assets, our services are designed to deliver performance-driven creative at scale.",
    path: "/content-as-a-service/branding-service",
  },
  {
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/Social_Media.png",
    title: "Video Creation",
    desc: "From quick social reels to full-scale brand films, our on-demand video creation delivers impactful storytelling tailored to your campaigns. Scripted, shot, and edited with precision, our videos engage audiences, boost conversions, and bring your brand’s vision to life.",
    path: "/content-as-a-service/video-creation",
  },
  {
    icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/Social_Media.png",
    title: "Multilingual Marketing",
    desc: "Reach beyond language barriers with our multilingual content solutions. Whether Tamil, Hindi, or global languages, we craft culturally relevant campaigns, adapt messaging seamlessly, and ensure your brand connects authentically with local and international audiences across every touchpoint.",
    path: "/content-as-a-service/multilingual-marketing",
  },
];
// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSectionGrid() {
  return (
    <section className="section bg-white py-20">
      <div className="section-container text-center mb-12">
        <h2 className="section-title text-center mb-10">
          Here’s a quick look at our core services
        </h2>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="group bg-white shadow-md rounded-2xl p-10 flex flex-col items-start text-left hover:bg-primary hover:text-white transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon with floating animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:shadow-xl transition-all duration-500">
                  <div className="text-primary text-5xl group-hover:text-primary">
                    {/* {service.icon} */}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="shadow-md rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-medium text-primary font-primary mb-3 group-hover:text-white relative">
                {service.title}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                  className="bg-secondary h-1 w-[120px] mt-2 origin-left"
                ></motion.div>
              </h3>

              {/* Description */}
              <p className="text-black/80 group-hover:text-white/90 font-secondary text-lg leading-7 flex-grow transition-colors duration-500">
                {service.desc}
              </p>

              {/* Button with scale animation */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 font-primary bg-primary text-white group-hover:bg-secondary group-hover:text-white text-lg font-medium py-2 px-7 rounded-full shadow-md transition-all duration-500"
              >
                <Link
                  href={service.path}
                  className="inline-flex items-center justify-center font-primary"
                  prefetch={false}
                >
                  LEARN MORE
                </Link>
              </motion.button>
            </motion.div>
          ))}
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
