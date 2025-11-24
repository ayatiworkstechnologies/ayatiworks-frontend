"use client";

import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What exactly is Content-as-a-Strategy (CAAS)? ",
    answer:
      "CAAS is a holistic approach where content isn’t just created for visibility but strategically aligned with your brand voice, audience needs, and long-term business goals. ",
  },
  {
    question: "2. How is CAAS different from traditional content marketing?",
    answer:
      "Traditional content marketing focuses on volume and promotion. CAAS, on the other hand, focuses on storytelling, organic SEO, and thought leadership to build sustained authority.",
  },
  {
    question: "3. Which industries benefit most from CAAS?",
    answer:
      "Any industry that relies on digital presence, like SaaS, healthcare, edtech, fintech, e-commerce, and professional services, can benefit from CAAS.",
  },
  {
    question: "4. How long does it take to see results with CAAS? ",
    answer:
      " CAAS is a long-term investment. While SEO traction may take 3-6 months, the compounded value of brand trust, authority, and inbound leads grows steadily over time.",
  },
  {
    question: "5. Can CAAS work alongside paid marketing campaigns? ",
    answer:
      "Yes. CAAS creates organic authority, while paid campaigns drive instant visibility. When combined, they reduce ad dependency and maximize ROI. ",
  },
  {
    question: "6. How do you measure the success of CAAS? ",
    answer:
      " We track organic traffic growth, keyword rankings, engagement metrics, lead conversions, and thought leadership recognition across platforms.",
  },
  {
    question: "7. Is CAAS suitable for startups or only established businesses? ",
    answer:
      " Both, Startups use CAAS to build visibility faster with focused narratives, while established businesses leverage it to maintain dominance and scale thought leadership.",
  },

];

export default function FAQSection() {
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
                className="w-full"
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
