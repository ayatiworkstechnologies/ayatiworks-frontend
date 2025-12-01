"use client";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What is programmatic marketing?",
    answer:
      "It’s an automated process of buying and optimizing ads using data and AI for more efficient, targeted campaigns.",
  },
  {
    question: "2. How does programmatic benefit B2B businesses?",
    answer:
      "It helps reach decision-makers and niche industries with high precision, improving lead quality and conversion rates.",
  },
  {
    question: "3. Can Programmatic Marketing help small businesses?",
    answer:
      "Yes, it allows even smaller businesses to optimize budgets with cost-efficient targeting and measurable results.",
  },
  {
    question: "4. What platforms are used in programmatic advertising?",
    answer:
      "Platforms include demand-side platforms (DSPs), ad exchanges, and data management platforms for precise targeting.",
  },
  {
    question: "5. Is programmatic more effective than traditional ads?",
    answer:
      "Yes, it offers better targeting, reduced waste, and measurable ROI compared to traditional ad buying.",
  },
  {
    question: "6. Can programmatic marketing reduce ad fraud?",
    answer:
      "Yes, advanced fraud prevention and verification tools help ensure budget safety.",
  },
  {
    question: "7. How do you measure the success of a programmatic campaign?",
    answer:
      "Success is measured by CTRs, conversions, impressions, cost-efficiency, and overall ROI.",
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