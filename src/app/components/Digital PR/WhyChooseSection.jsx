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
      title: "Increased Brand Visibility",
      desc: "We ensure your brand appears where it matters most, leading digital publications, online features, and influencer-driven conversations. This consistent exposure builds recall and establishes authority in your industry.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/01.png",
    },
    {
      title: "Stronger Online Reputation",
      desc: "A strong reputation builds trust and drives conversions. Through proactive media outreach and ORM, we shape positive narratives that reflect your brand values while minimizing the impact of negative coverage",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/02.png",
    },
    {
      title: "SEO & Backlink Advantage",
      desc: "Every PR placement is also an SEO opportunity. By securing high-quality backlinks and mentions, we help improve your search rankings and organic visibility.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/03.png",
    },
    {
      title: "Local + National Relevance",
      desc: "Whether it’s Tamil-first media in Chennai, regional coverage in South India, or national placements across India, we adapt campaigns to suit your target audience and business goals.",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/04.png",
    },
    {
      title: "Data-Driven Results",
      desc: "We don’t just deliver coverage; we track its impact. From impressions to engagement, our campaigns are backed by analytics that show clear ROI and business outcomes. ",
      img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/01.png",
    },
   
  ];

  return (
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
            Benefits of Partnering with Ayatiworks for Digital PR
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
          Here’s what sets us apart:
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
            Choosing the right partner for Digital PR can make the difference
            between simply being seen and truly being remembered. At Ayatiworks,
            we combine creativity, strategy, and technology to deliver PR
            campaigns that fuel real growth. <br />
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
  );
}
