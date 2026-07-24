"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // ✅ Next.js Image
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react"; // ✅ Lucide Icons

export default function WhatAyati() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const stagger = { visible: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cards = [
    {
      title: "Digital Marketing Services",
      icon: "http://89.167.92.220:8088/assets/good-vibe.png",
      basePath: "/digital-marketing-services",
      description: "Data-driven strategies to amplify your brand presence.",
      list: [
        { label: "SEO Services", href: "/digital-marketing-services/seo" },
        {
          label: "Social Media Marketing",
          href: "/digital-marketing-services/social-media-marketing",
        },
        {
          label: "Email Marketing",
          href: "/digital-marketing-services/email-marketing",
        },
        {
          label: "Instagram Marketing",
          href: "/digital-marketing-services/instagram-marketing",
        },
        {
          label: "Affiliate Marketing",
          href: "/digital-marketing-services/affiliate-marketing",
        },
        {
          label: "Programmatic Marketing",
          href: "/digital-marketing-services/programmatic-marketing",
        },
        {
          label: "Video Marketing",
          href: "/digital-marketing-services/video-marketing",
        },
      ],
      cta: {
        label: "Explore Digital Marketing",
        href: "/digital-marketing-services",
      },
    },
    {
      title: "Content as a Service",
      icon: "http://89.167.92.220:8088/icon/01.png",
      basePath: "/content-as-a-service",
      description: "Compelling storytelling that connects and converts.",
      list: [
        {
          label: "Multi-lingual Marketing",
          href: "/content-as-a-service/multilingual-marketing",
        },
        {
          label: "Brand Service",
          href: "/content-as-a-service/branding-service",
        },
        {
          label: "Video Creation",
          href: "/content-as-a-service/video-creation",
        },
      ],
      cta: { label: "Explore Content Services", href: "/content-as-a-service" },
    },
    {
      title: "Digital PR Service",
      icon: "http://89.167.92.220:8088/icon/02.png",
      basePath: "/digital-pr",
      description: "Building credibility and managing your brand reputation.",
      list: [
        { label: "Digital PR", href: "/digital-pr/digital-pr-service" },
        {
          label: "Influencer Marketing",
          href: "/digital-pr/influencer-marketing",
        },
        {
          label: "Online Reputation",
          href: "/digital-pr/online-reputation-media-outreach",
        },
      ],
      cta: { label: "Explore Digital PR", href: "/digital-pr" },
    },
    {
      title: "Web & E-commerce",
      icon: "http://89.167.92.220:8088/icon/03.png",
      basePath: "/web-ecommerce",
      description: "Seamless user experiences and robust development.",
      list: [
        { label: "UX/UI Design", href: "/web-ecommerce/ux-ui-design" },
        { label: "Web Development", href: "/web-ecommerce/web-development" },
        { label: "Web Maintenance", href: "/web-ecommerce/web-maintenance" },
        {
          label: "Shopify Development",
          href: "/web-ecommerce/shopify-development",
        },
        { label: "E-commerce Solutions", href: "/web-ecommerce" },
      ],
      cta: { label: "Explore Web & E-commerce", href: "/web-ecommerce" },
    },
  ];

  return (
    <section className="relative w-full py-10 sm:py-24 bg-gray-50/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Header */}
      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="section-container px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-16"
      >
        <div className="w-full md:w-auto">
          <h2 className="section-title text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4">
            What Ayati Brews
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-secondary w-1/2 rounded-full mx-auto md:mx-0"
          />
        </div>
        <div className="hidden md:block">
          <h2 className="section-title text-xl sm:text-3xl text-secondary text-right mb-4">
            Fully Integrated Digital & Creative Agency
          </h2>
        </div>
      </motion.div>

      {/* Cards Grid - Definitive Premium Style */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="section-container px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 max-w-7xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            variants={item}
            className="group relative h-full bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden"
          >
            {/* Top Border Accent REMOVED */}

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex-1">
                  <h3 className="font-primary text-xl sm:text-2xl md:text-3xl lg:text-[2.5rem] leading-tight text-secondary mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {card.title}
                  </h3>
                  <div className="w-10 sm:w-12 h-1 bg-gray-100 group-hover:bg-primary/20 rounded-full transition-colors duration-300" />
                </div>

                {/* Icon Circle */}
                <div className="shrink-0 w-14 h-14 sm:w-20 sm:h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-primary/10 group-hover:bg-primary/5 transition-all duration-500">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={48}
                    height={48}
                    className="w-8 h-8 sm:w-12 sm:h-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
              </div>

              {/* Description */}
              <p className="font-secondary text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 border-l-2 border-transparent pl-0 group-hover:border-primary/30 group-hover:pl-4 transition-all duration-300">
                {card.description}
              </p>

              {/* Service List with Dividers */}
              <div className="mb-8 sm:mb-10 flex-grow">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-3">
                  {card.list.map((item) => (
                    <li
                      key={item.href}
                      className="border-b border-gray-50 last:border-0 pb-2 sm:border-0 sm:pb-0"
                    >
                      <Link
                        href={item.href}
                        className="group/link flex items-center text-sm font-medium text-gray-600 hover:text-secondary transition-colors"
                      >
                        <ChevronRight
                          size={14}
                          className="text-primary mr-2 opacity-50 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                        />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-auto pt-4 sm:pt-6 flex items-center justify-between border-t border-gray-100">
                <Link
                  href={card.cta.href}
                  className="inline-flex items-center gap-2 text-primary font-bold font-primary group/btn"
                >
                  <span className="text-base sm:text-lg group-hover/btn:underline decoration-2 decoration-primary/30 underline-offset-4 transition-all">
                    {card.cta.label}
                  </span>
                  <ArrowRight
                    size={18}
                    className="transform group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>

                {/* Decorative Number/Element */}
                <span className="text-4xl sm:text-6xl font-primary font-bold text-gray-50 group-hover:text-gray-100 transition-colors duration-500 select-none">
                  0{index + 1}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
