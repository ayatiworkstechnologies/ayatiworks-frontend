"use client";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

export const faqs = [
  {
    question: "1) What’s the difference between ORM and media outreach?",
    answer:
      "ORM manages reviews, search results, and sentiment. Media outreach earns coverage in trusted publications. Together they protect, clarify, and amplify your brand story across discovery channels.",
  },
  {
    question: "2) How long until results are visible?",
    answer:
      "Review health and response quality improve within weeks; SERP shaping and authority growth typically show in 8–12 weeks. Crisis control has immediate impact, followed by structured recovery.",
  },
  {
    question: "3) Can small teams run this effectively?",
    answer:
      "Yes. With playbooks, automation, and clear escalation paths, even lean teams can manage reputation well—focusing energy where human judgment matters most.",
  },
  {
    question: "4) What metrics should we track?",
    answer:
      "Review velocity and ratings, branded vs. non-branded search, SERP composition, media placements, share of voice, referral traffic, sentiment trend, and assisted conversions across the funnel.",
  },
  {
    question: "5) How do you handle unfair or fake reviews?",
    answer:
      "Follow platform policies: request verification, document evidence, and respond calmly with facts. Encourage verified customers to share experiences to outweigh anomalies.",
  },
  {
    question: "6) Do these efforts help SEO?",
    answer:
      "Yes. Positive reviews, authoritative coverage, and expert content strengthen E-E-A-T and improve click-through, which can lift rankings and organic conversion.",
  },
  {
    question: "7) Is this relevant for regulated industries?",
    answer:
      "Absolutely. With approvals, compliant messaging, and trained spokespeople, reputation and media programs work effectively in healthcare, finance, and other regulated categories.",
  },
  {
    question: "8) Ready to shape the narrative?",
    answer:
      "Reputation compounds. The earlier you invest in trust signals, the easier every downstream metric becomes—rankings, response rates, close rates, even hiring. If you’re ready to lead the conversation, let’s build a reputation engine that grows with your ambitions. When trust is visible, everything accelerates: search clicks, media replies, partner confidence, and customer advocacy. Start where impact compounds fastest, then widen the circle—methodically, measurably, and with leadership that speaks before rumors do.",
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