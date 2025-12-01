"use client";
import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa6";

import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "1. How long does web development take?",
    answer:
      "Most projects, including ecommerce sites, take 6-12 weeks, ensuring quality and performance. The timeline can be over 6 weeks and under 6 weeks depending on the scope of work arrived by the client and our experts.",
  },
  {
    question: "2. Do you offer post-launch support?",
    answer:
      "Yes, we provide ongoing website maintenance for security, updates, and optimization.",
  },
  {
    question: "3. Will my website be mobile-friendly?",
    answer:
      "Absolutely. Every website we build is fully responsive and optimized for mobile, tablet, and desktop devices.",
  },
  {
    question: "4. Can you integrate SEO best practices?",
    answer:
      "Yes. We follow SEO-friendly coding standards, integrate meta tags, schema, and optimize content to improve search engine rankings.",
  },
  {
    question: "5. Do you work with ecommerce platforms?",
    answer:
      "Yes, we specialize in ecommerce development using platforms like Shopify, WooCommerce, and custom solutions tailored to your needs.",
  },
  {
    question: "6. What technologies do you use?",
    answer:
      "Our team works with modern stacks including React, Node.js, Next.js, WordPress, and Shopify to deliver high-performance, scalable websites.",
  },
  {
    question: "7. Can you redesign my existing website?",
    answer:
      "Yes, we can refresh and modernize your current site to improve design, user experience, and performance while retaining your brand identity.",
  },
  {
    question: "8. How do you ensure website security?",
    answer:
      "We implement SSL, firewalls, regular updates, and follow industry best practices to ensure your site remains secure.",
  },
  {
    question: "9. Will I be able to manage my website after launch?",
    answer:
      "Yes, we provide CMS-based solutions and training so your team can easily update content, products, and pages without coding knowledge.",
  },
  {
    question: "10. How much does web development cost?",
    answer:
      "Costs vary based on complexity, features, and integrations. After understanding your requirements, we provide a tailored quote that aligns with your budget and goals.",
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