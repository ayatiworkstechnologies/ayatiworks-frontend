"use client";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. What types of businesses do you work with? ",
    answer:
      "We partner with B2B, B2C, and D2C brands across sectors like real estate, 	healthcare, automobile, retail, SaaS, beauty, and more, including long-	term collaborations like our ongoing work with Volvo. ",
  },
  {
    question: "2. How soon will I see results?",
    answer:
      "Paid ad campaigns can generate traffic instantly, while SEO and organic 	growth typically show strong, sustainable results within 3-6 months based 	on ongoing optimizations. ",
  },
  {
    question: "3. What reporting do you provide?",
    answer:
      "We deliver monthly dashboards that highlight KPIs like traffic, leads, conversions, and ROI, with transparent insight summaries and recommendations for scaling further.",
  },
  {
    question: "4. How do you tailor strategies to my industry? ",
    answer:
      "Every strategy begins with in-depth research into your business context and competitors, and then we create customized campaigns based on your goals, whether you’re in tech, real estate, D2C, or healthcare. ",
  },
  {
    question: "5. Who will manage my account and how often will we communicate? ",
    answer:
      "You’ll have a dedicated account manager backed by an expert team. We schedule regular updates (weekly or bi-weekly) and adjust communication frequency based on your preference.",
  },
  {
    question: "6. Do you offer full-stack digital solutions?  ",
    answer:
      "Yes! From strategy and content to technology , SEO, social media, performance ads, influencer marketing, web development, and maintenance, all are handled under one roof for seamless execution.",
  },
  {
    question: "7.	Do you offer ongoing after launching a campaign? ",
    answer:
      "Absolutely. We believe in long-term partnership, not just project completion. Our framework includes continuous optimization, iterations, and support to keep results moving upward. ",
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
