"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function WhyChooseSection() {
  const features = [
    {
      title: "Copywriting & Blogs ",
      desc: "SEO-optimized, audience-first content that ranks and converts.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/01.png",
    },
    {
      title: "Social Media Creatives ",
      desc: "Fast-turnaround visuals and campaigns built for engagement.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/02.png",
    },
    {
      title: "Campaign Collateral ",
      desc: "Flyers, landing pages, and digital ads designed to drive clicks.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/03.png",
    },
    {
      title: "Content Strategy ",
      desc: "Insights-driven roadmaps that align with KPIs and brand vision.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/04.png",
    },
  ];

  return (
    <>
    <section className="section bg-white relative">
      <div className="section-container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="section-title mb-6 text-3xl md:text-4xl font-medium text-primary">
            Extended Capabilities
          </h2>

          {/* Underline animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[240px] mx-auto mt-3 origin-center rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-primary text-xl md:text-2xl font-medium text-secondary mt-6"
        >
          Along with these core offerings, Ayatiworks’ CaaS <br /> framework supports a wide range of creative and strategic needs:
        </motion.p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-16">
          {/* Left Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-black/80 text-lg leading-8 font-secondary mt-5"
          >
            Every piece of content is crafted to be modular, scalable, and performance-ready, ensuring consistency across campaigns while keeping turnaround times short.
          </motion.div>

          {/* Animated Scrolling Cards */}
          <div className="lg:col-span-3 overflow-hidden relative">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {[...features, ...features].map((f, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 shadow-md min-w-[300px] rounded-xl 
                             hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold font-primary text-primary">
                      {f.title}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                        className="bg-secondary h-1 w-[80px] mt-2 origin-left"
                      />
                    </h3>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="w-16 h-16 flex items-center justify-center"
                    >
                      <img
                        src={f.img}
                        alt={f.title}
                        className="w-12 h-12 object-contain"
                      />
                    </motion.div>
                  </div>
                  <p className="text-black/80 font-secondary text-base leading-7">
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-12 section-container"
      />
    </section>
    <section className="section bg-white relative">
      <div className="section-container mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="section-title mb-6 text-3xl md:text-4xl font-medium text-primary">
            Why Choose Ayatiworks as Your Content-as-a-Strategy Partner
          </h2>

          {/* Underline animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[240px] mx-auto mt-3 origin-center rounded-full"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-secondary text-lg md:text-lg font-medium text-black/80 mt-6"
        >
          With over a decade of expertise in blending storytelling with data-driven SEO, Ayatiworks ensures your brand doesn’t just publish content, it dominates conversations. Our tailored approach aligns every blog, whitepaper, video, or campaign with measurable business outcomes. For businesses in Chennai and across India, partnering with Ayatiworks means clarity, consistency, and authority in your digital voice.
        </motion.p>

        
      </div>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="border-b border-primary h-1 mt-12 section-container"
      />
    </section></>
    
  );
}
