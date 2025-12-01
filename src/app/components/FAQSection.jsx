"use client";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What services does Ayati Works offer? ",
    answer:
      "Ayati Works provides a full suite of digital marketing services, including SEO, social media marketing, email marketing, video marketing, affiliate marketing, and programmatic advertising. They also offer Content-as-a-Service (CaaS) - strategic content ideation, creation, and execution - as well as digital PR (influencer outreach, media placement, reputation management). Additionally, Ayati Works provides web & e-commerce solutions, including UX/UI design, web development, and tailored e-commerce strategy ",
  },
  {
    question: "2. Which industries does Ayati Works specialize in? ",
    answer:
      "Ayati Works works across a wide range of industries such as healthcare, SaaS / tech, e-commerce, finance, and enterprise. Their content and branding expertise is also proven in large-scale branded partnerships (for example, with Volvo) and consumer-facing businesses. ",
  },
  {
    question: "3. How does Ayati Works approach digital marketing strategy? ",
    answer:
      "Ayati Works uses a methodology called CAAS (Content as a Service) to align content with business objectives. They begin with a discovery call to understand goals, audience, and competition; then define KPIs, create campaigns (SEO, performance, content), and execute them with continuous measurement. Their strategies are data-driven, combining creativity, content, and analytics to deliver real ROI ",
  },
  {
    question: "4. How does Ayati Works help with SEO? ",
    answer:
      "Ayati Works offers comprehensive SEO services: technical SEO audits, on-page optimization, off-page link building, keyword research, and international SEO. They emphasize revenue-driven SEO - not just ranking, but growth and conversions. They also serve clients from Chennai to global markets, helping brands scale beyond their local digital presence. ",
  },
  {
    question: "5. Can Ayati Works manage social media campaigns? ",
    answer:
      "Yes - Ayati Works provides full social media marketing services. Their team builds data-driven campaigns tailored to Facebook, Instagram, LinkedIn, and more. They focus on creating engaging content, running ads, optimizing for conversions, and building long-term community and brand loyalty. They also run influencer campaigns, A/B testing, and retargeting to optimize social ROI. ",
  },
  {
    question: "6. What is Digital PR, and how can Ayati Works help with it? ",
    answer:
      "Digital PR at Ayati Works means building credibility and authority through media mentions, influencer collaborations, and content that gets covered in trusted publications. They help clients craft compelling PR strategies to earn high-value features, backlinks, and brand visibility. Their approach is tailored to both national and local audiences, adjusting messaging for regional media as well as high-authority national outlets. ",
  },
  {
    question: "7. Do they provide web development or e-commerce solutions? ",
    answer:
      "Yes - Ayati Works offers web and e-commerce services including UX/UI design, web development, and full-funnel e-commerce strategy. They aim to transform traditional storefronts into scalable online businesses. They also optimize conversion, retention, and performance for e-commerce clients. ",
  },
 
];

export default function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 text-center"
        >
          <h2 className="section-title font-medium text-center mb-3">
            Frequently Asked Questions
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
            className="bg-secondary h-1 w-[300px] mt-2 mx-auto origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className=" shadow-2xl bg-white p-4"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium font-primary text-2xl text-primary">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary text-xl"
                  >
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-secondary font-secondary text-lg leading-6 mt-3">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center text-center space-y-6"
          >
            <div>
              <img
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/faq-img.png"
                alt="FAQ Illustration"
                className="w-full "
              />
            </div>
            <h3 className="section-title">Any Questions?</h3>
            <p className="text-black font-secondary text-base">
              You can ask anything you want to know. Feedback welcome.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}