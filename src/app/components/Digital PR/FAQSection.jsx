"use client";

import { useState } from "react";

import { Plus, Minus } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "1. What is Digital PR and how is it different from traditional PR?",
    answer:
      "Digital PR focuses on building online authority through media placements, backlinks, influencer collaborations, and reputation management, whereas traditional PR relies on offline press coverage.",
  },
  {
    question: "2. Why should brands invest in Digital PR?",
    answer:
      "Because Digital PR improves brand visibility, credibility, and SEO rankings simultaneously, helping you build both reputation and organic traffic.",
  },
  {
    question: "3. Do you handle crisis communication and reputation repair?",
    answer:
      "Yes. Our Digital PR strategies include online crisis management, negative press mitigation, and proactive reputation-building.",
  },
  {
    question: "4. How do you measure Digital PR success?",
    answer:
      "We measure success by media reach, domain authority of placements, referral traffic, share of voice, and brand sentiment.",
  },
  {
    question: "5. Can Digital PR help with SEO?",
    answer:
      "Absolutely. High-quality backlinks from media sites directly improve search rankings while boosting brand authority.",
  },
  {
    question: "6. Which industries benefit the most from Digital PR?",
    answer:
      "Industries like BFSI, healthcare, tech startups, e-commerce, and consumer brands see the strongest results due to their competitive landscapes.",
  },
  {
    question: "7. How soon can we expect results with Digital PR?",
    answer:
      "While some placements are immediate, building consistent authority and recognition usually takes 3-6 months of strategic efforts.",
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
                className="shadow-2xl bg-white p-4"
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
                    {openIndex === index ? <Minus /> : <Plus />}
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
