"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WhatAyati() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();

  const stagger = { visible: { transition: { staggerChildren: 0.12 } } };
  const item = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const cards = [
    {
      title: "Digital Marketing Services",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/good-vibe.png",
      basePath: "/digital-marketing-services",
      list: [
        { label: "SEO Services", href: "/digital-marketing-services/seo" },
        { label: "Social Media Marketing", href: "/digital-marketing-services/social-media-marketing" },
        { label: "Email Marketing", href: "/digital-marketing-services/email-marketing" },
        { label: "Instagram Marketing", href: "/digital-marketing-services/instagram-marketing" },
        { label: "Affiliate Marketing", href: "/digital-marketing-services/affiliate-marketing" },
        { label: "Programmatic Marketing", href: "/digital-marketing-services/programmatic-marketing" },
        { label: "Video Marketing", href: "/digital-marketing-services/video-marketing" },
      ],
      cta: { label: "Explore Digital Marketing →", href: "/digital-marketing-services" },
    },
    {
      title: "Content as a Service",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/01.png",
      basePath: "/content-as-a-service",
      list: [
        { label: "Multi-lingual Marketing", href: "/content-as-a-service/multilingual-marketing" },
        { label: "Brand Consultant", href: "/content-as-a-service/brand-service" },
        { label: "Video Creation", href: "/content-as-a-service/video-creation" },
      ],
      cta: { label: "Explore Content Services →", href: "/content-as-a-service" },
    },
    {
      title: "Digital PR Service",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/02.png",
      basePath: "/digital-pr",
      list: [
        { label: "Digital PR", href: "/digital-pr/digital-pr-service" },
        { label: "Influencer Marketing", href: "/digital-pr/influencer-marketing" },
        { label: "Online Reputation & Media Outreach", href: "/digital-pr/online-reputation-media-outreach" },
      ],
      cta: { label: "Explore Digital PR →", href: "/digital-pr" },
    },
    {
      title: "Web & E-commerce",
      icon: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/icon/03.png",
      basePath: "/web-ecommerce",
      list: [
        { label: "UX/UI Design", href: "/web-ecommerce/ux-ui-design" },
        { label: "Web Development Services", href: "/web-ecommerce/web-development" },
        { label: "Web Maintenance Services", href: "/web-ecommerce/web-maintenance" },
        { label: "Shopify Development Services", href: "/web-ecommerce/shopify-development" },
        { label: "E-commerce", href: "/web-ecommerce" },
      ],
      cta: { label: "Explore Web & E-commerce →", href: "/web-ecommerce" },
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20">
      {/* background: remove gradient/spotlight, keep optional subtle grid off */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" />

      {/* header */}
      <motion.div
        initial={false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="section-container px-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10"
      >
        <div>
          <h2 className="section-title">What Ayati Brews</h2>
          {/* solid underline (no gradient) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="h-[3px] w-44 mt-3 origin-left rounded-full bg-secondary"
          />
        </div>
        <p className="text-secondary font-primary text-2xl sm:text-3xl text-left md:text-right">
          Fully Integrated Digital & Creative Agency
        </p>
      </motion.div>

      {/* cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="section-container px-6 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl"
      >
        {cards.map((card) => (
          <motion.article
            key={card.title}
            variants={item}
            onClick={() => router.push(card.basePath)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && router.push(card.basePath)}
            role="button"
            tabIndex={0}
            className={[
              "group relative overflow-hidden rounded-2xl",
              // removed gradient ring; use plain border + shadow
              "border border-slate-200 bg-white",
              "shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_42px_rgba(0,0,0,0.12)]",
              "transition-all duration-300 hover:-translate-y-0.5",
            ].join(" ")}
          >
            {/* header row */}
            <div className="flex items-start gap-4 p-6">
              <div className="flex-1">
                <h3 className="font-primary text-2xl sm:text-3xl text-secondary leading-snug">
                  {card.title}
                </h3>
              </div>
              <img
                src={card.icon}
                alt=""
                aria-hidden
                className="h-14 w-14 rounded-md object-contain  shadow-sm transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* list */}
            <ul
              className="px-6 pb-2 pt-1 grid grid-cols-1 gap-2 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {card.list.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "group/link inline-flex items-center gap-2 w-full rounded-md px-3 py-2",
                      "text-[13px] md:text-sm font-semibold uppercase tracking-wide",
                      "text-slate-800 hover:text-secondary",
                      "transition-colors",
                    ].join(" ")}
                  >
                    <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
                    <span className="flex-1 font-secondary">{item.label}</span>
                    <span
                      aria-hidden
                      className="translate-x-0 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 transition-all"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* footer CTA (solid color, no gradient) */}
            <div className="p-6 pt-2" onClick={(e) => e.stopPropagation()}>
              <Link
                href={card.cta?.href || card.basePath}
                className={[
                  "inline-flex items-center gap-2 rounded-full px-5 py-2.5",
                  "text-white font-primary text-sm md:text-base",
                  "bg-secondary hover:brightness-110 active:scale-[0.98]",
                  "shadow-[0_8px_20px_rgba(0,0,0,0.12)] transition-all",
                ].join(" ")}
              >
                <span>{card.cta?.label || `Explore ${card.title} →`}</span>
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* divider (solid) */}
      <motion.div
        initial={false}
        whileInView={reduceMotion ? {} : { scaleX: [0, 1] }}
        transition={reduceMotion ? {} : { duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="section-container px-6 mt-10 sm:mt-14"
      >
        <div className="h-[2px] w-full rounded-full bg-slate-200" />
      </motion.div>
    </section>
  );
}
