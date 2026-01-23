"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FiShare2, FiCopy } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import { POSTS } from "../../lib/blogs-data";
import { getRelatedRecentPosts } from "../../lib/getRelatedRecentPosts";
import RelatedPostsFromData from "./RelatedPostsFromData";

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage110() {
  const post = POSTS.find((p) => p.id === 110) || POSTS[0];
  const relatedPosts = getRelatedRecentPosts({
    currentPostId: post.id,
    category: post.category,
    limit: 3,
  });
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-6">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)} // <-- normalized href
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
          title={[post.bannerTitle]}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar:
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      {/* MAIN TITLE */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              SEO vs AEO vs GEO vs AI SEO: How Modern Search Really Works—and
              Why SEO Is Still the Foundation
            </span>
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)_250px]">
        {/* LEFT: TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="how-search-has-changed"
            title="How Search Has Changed (But Not Replaced SEO)"
          >
            <p className="section-phara">
              Search engines today behave less like directories and more like
              advisors. Google, Bing, and AI-driven search experiences aim to
              understand intent, context, and relevance rather than just
              matching keywords.
            </p>
            <p className="section-phara">
              Users now ask complete questions, speak into devices, search
              locally, and expect immediate clarity.
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                This evolution created new optimisation needs:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Content must answer questions clearly",
                    desc: "",
                  },
                  {
                    title: "Local relevance must be stronger",
                    desc: "",
                  },
                  {
                    title: "Trust and credibility matter more",
                    desc: "",
                  },
                  {
                    title: "AI must assist analysis and execution",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              What it did not create is a reason to abandon SEO.
            </p>
            <p className="section-phara">
              Instead, SEO expanded. It absorbed new requirements and execution
              methods. AEO, GEO, and AI SEO emerged to describe how SEO adapts
              to new behaviours, not to replace it.
            </p>
          </Section>

          {/* STEP 1 */}

          <Section
            id="what-is-seo"
            title="What Is SEO? The Core System Behind All Search Visibility"
          >
            <p className="section-phara">
              SEO (Search Engine Optimization) is the process of making your
              website discoverable, understandable, and trustworthy for search
              engines and users.
            </p>

            <p className="section-phara">
              In today’s context, SEO consists of four core pillars:
            </p>

            {/* PILLAR 1 */}
            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                1. Technical Foundation
              </h3>
              <p className="section-phara">
                Search engines must be able to crawl, index, and understand your
                website. This includes:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Clean site structure",
                  "Page speed",
                  "Mobile usability",
                  "Proper indexing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PILLAR 2 */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                2. Content and Intent Alignment
              </h3>
              <p className="section-phara">
                SEO today focuses on intent, not just keywords. Content must:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Match what users are actually searching for",
                  "Provide complete, clear answers",
                  "Demonstrate subject understanding",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PILLAR 3 */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                3. Authority and Trust
              </h3>
              <p className="section-phara">
                Search engines evaluate credibility through:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Content depth",
                  "Consistency",
                  "Brand signals",
                  "References and mentions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PILLAR 4 */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                4. User Experience
              </h3>
              <p className="section-phara">
                If users leave quickly or struggle to navigate, rankings suffer.
                SEO now includes:
              </p>

              <ul className="mt-4 space-y-4">
                {["Readability", "Page flow", "Engagement signals"].map(
                  (item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="section-phara text-black/80">
                        {item}
                      </span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* SUMMARY */}
            <p className="section-phara mt-8">
              This is why modern SEO services are no longer limited to keyword
              placement. Businesses looking for structured, long-term visibility
              often rely on comprehensive SEO strategies that integrate
              technical performance, content, and user experience under one
              system.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Book a free SEO consultation
                </Link>
              </motion.div>
            </div>
          </Section>

          {/* STEP 2 */}
          <Section
            id="what-is-aeo"
            title="What Is AEO (Answer Engine Optimization)?"
          >
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                AEO focuses on optimising content so it appears as direct
                answers in search results. These include:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Featured snippets",
                    desc: "",
                  },
                  {
                    title: "	People Also Ask sections",
                    desc: "",
                  },
                  {
                    title: "	Voice search responses",
                    desc: "",
                  },
                  {
                    title: "	AI-generated summaries",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                How AEO Is Implemented
              </h3>
              <p className="section-phara">AEO is achieved by:</p>

              <ul className="mt-4 space-y-4">
                {[
                  "	Writing clear, direct answers to questions",
                  "	Structuring content logically",
                  "	Using simple language",
                  "	Formatting content for quick understanding",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                Is AEO Industry-Specific?
              </h3>
              <p className="section-phara">
                AEO works best for industries where users ask questions before
                making decisions:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "	Healthcare",
                  "	Education",
                  "	SaaS",
                  "	Professional services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="section-phara">
                However, any business with informational search intent can
                benefit.{" "}
              </p>
            </div>

            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                AEO’s Relationship with SEO
              </h3>
              <p className="section-phara">
                {" "}
                AEO cannot exist without SEO. Search engines choose answers from
                pages that already demonstrate authority, relevance, and
                technical clarity, core SEO signals.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Book a free demo
                </Link>
              </motion.div>
            </div>
          </Section>

          {/* STEP 3 */}
          <Section
            id="what-is-geo"
            title="What Is GEO? Understanding Geographic Optimization and Its Impact on Local SEO"
          >
            <p className="section-phara">
              <strong> Definition: GEO as Geographic Optimization</strong>
            </p>
            <p className="section-phara">
              GEO, in its original and most widely used sense, stands for{" "}
              <strong>Geographic Optimization. </strong>It refers to the process
              of improving a business’s visibility in search results based on
              location-based intent.
            </p>
            <p className="section-phara">
              When users include terms like “near me,” city names, or
              neighbourhood references, or when search engines infer location
              automatically, GEO determines which businesses appear and in what
              order.
            </p>
            <p className="section-phara">
              Geographic Optimization is the backbone of{" "}
              <strong>Local SEO.</strong> It helps search engines understand
              where a business operates, who it serves, and which searches are
              relevant to that location.
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                How Geographic Optimization Is Implemented
              </h3>
              <p className="section-phara">
                Geographic Optimization is not limited to adding a city name to
                a page. It involves multiple layers working together:
              </p>
              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Location-specific landing pages",
                    desc: "Pages built for cities, regions, or service areas with unique, useful content.",
                  },
                  {
                    title: "	Google Business Profile optimisation",
                    desc: "Accurate business information, categories, services, images, and reviews.",
                  },
                  {
                    title: "	Local content relevance",
                    desc: "Content that reflects local context, problems, and search behaviour.",
                  },
                  {
                    title: "	Consistent business signals",
                    desc: "Matching name, address, and phone details across platforms.",
                  },
                  {
                    title: "	User proximity and intent signals",
                    desc: "Search engines use location data to personalise results in real time.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="section-phara">
                Together, these signals help search engines decide which
                business is most relevant for a specific location-based search.
              </p>
            </div>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Impact of Geographic Optimization on Local SEO{" "}
              </h3>
              <p className="section-phara">
                Local SEO cannot function without strong GEO signals. Geographic
                Optimization directly influences:
              </p>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Local Pack visibility (map listings)",
                    desc: "",
                  },
                  {
                    title: "		“Near me” searches",
                    desc: "",
                  },
                  {
                    title: "	City-specific service searches",
                    desc: "",
                  },
                  {
                    title: "	Mobile search results",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="section-phara">
                For example, when someone searches for a service in Chennai,
                search engines prioritise businesses that clearly demonstrate
                geographic relevance, through content, listings, and engagement,
                not just keyword usage.
              </p>
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Without proper GEO implementation:
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Businesses may rank nationally but not locally",
                    desc: "",
                  },
                  {
                    title:
                      "		Service pages fail to appear for city-level searches",
                    desc: "",
                  },
                  {
                    title:
                      "	Local competitors with weaker brands but better GEO win visibility",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Is Geographic Optimization Industry-Specific?
              </h3>
              <p className="section-phara">
                Geographic Optimization is essential for:
              </p>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Healthcare providers",
                    desc: "",
                  },
                  {
                    title: "	Local services",
                    desc: "",
                  },
                  {
                    title: "	Retail businesses",
                    desc: "",
                  },
                  {
                    title: "	Educational institutions",
                    desc: "",
                  },
                  {
                    title: "	Real estate and hospitality",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="section-phara">
                However, it is{" "}
                <strong>not limited to local-only businesses</strong> . National
                and global brands also use GEO to dominate specific regions,
                cities, or markets. A company operating across India or
                internationally still needs strong geographic signals to perform
                well in regional searches.
              </p>
            </div>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                How Geographic Optimization Fits Inside SEO
              </h3>
              <p className="section-phara">
                Geographic Optimization does not replace SEO. <br />
                It refines SEO for location-based intent.
              </p>
              <p className="section-phara">
                SEO provides the foundation (crawlability, content quality,
                authority). <br />
                GEO adds where that relevance applies.
              </p>
              <p className="section-phara">
                Without SEO, GEO has no stability. <br />
                Without GEO, SEO loses local precision.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Get a free local visibility audit
                </Link>
              </motion.div>
            </div>
          </Section>

          {/* STEP 4 */}
          <Section
            id="what-is-geo-generative-engine-optimization"
            title="GEO as Generative Engine Optimization: How AI Search Engines Interpret Content"
          >
            {/* Definition */}
            <div className="mt-4">
              <h3 className="section-title text-2xl text-secondary text-left mb-3">
                Definition: GEO as Generative Engine Optimization
              </h3>
              <p className="section-phara">
                In newer search discussions, GEO is also used to mean Generative
                Engine Optimization. This refers to optimising content, so it is
                correctly understood, selected, and summarised by AI-driven
                search engines and generative answer systems.
              </p>
              <p className="section-phara">
                Unlike Geographic Optimization, which focuses on where a user
                is, Generative Engine Optimization focuses on how machines
                interpret content.
              </p>
            </div>

            {/* How it works */}
            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                How Generative Engine Optimization Works
              </h3>

              <p className="section-phara">
                Generative search engines don’t just rank pages, they:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Read content in full",
                  "Identify key ideas and relationships",
                  "Summarise information into direct answers",
                  "Combine insights from multiple trusted sources",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="section-phara mt-6">
                Generative Engine Optimization helps ensure that:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Content is accurate and unambiguous",
                  "Ideas are clearly structured",
                  "Context is easy for AI systems to interpret",
                  "Information can be confidently reused in summaries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Implementation */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                How Generative Engine Optimization Is Implemented
              </h3>

              <ul className="mt-4 space-y-4">
                {[
                  "Clear headings and logical flow",
                  "Simple, direct explanations",
                  "Strong topical depth instead of surface-level coverage",
                  "Consistent terminology",
                  "Content written for understanding, not manipulation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="section-phara mt-6">
                This approach overlaps heavily with AEO and AI-assisted SEO, but
                its focus is specifically on machine comprehension.
              </p>
            </div>

            {/* Industry applicability */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                Is Generative Engine Optimization Industry-Specific?
              </h3>

              <p className="section-phara">
                Generative Engine Optimization is useful across all industries,
                but especially important for:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Knowledge-driven businesses",
                  "Healthcare and medical content",
                  "SaaS and technology platforms",
                  "Education and professional services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="section-phara mt-6">
                Any industry where AI-generated answers influence
                decision-making benefits from this optimisation.
              </p>
            </div>

            {/* SEO relationship */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                How Generative Engine Optimization Fits Inside SEO
              </h3>

              <p className="section-phara">
                Generative Engine Optimization is not a replacement for SEO. It
                is an extension of modern SEO execution.
              </p>
              <p className="section-phara">
                SEO ensures content is discoverable and trusted. Generative
                Engine Optimization ensures content is interpreted correctly by
                AI systems.
              </p>
              <p className="section-phara">
                Without SEO authority, generative engines won’t trust the
                content. Without clear structure, they won’t use it accurately.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Book a free strategy session
                </Link>
              </motion.div>
            </div>
          </Section>

          {/* STEP 5 */}

          <Section
            id="what-is-ai-seo"
            title="What Is AI SEO and How AI Is Reshaping Search Execution"
          >
            <p className="section-phara">
              AI SEO refers to using artificial intelligence to support SEO
              research, analysis, and execution.
            </p>

            {/* Implementation */}
            <div className="ml-10 mt-8">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                How AI SEO Is Implemented
              </h3>

              <ul className="mt-4 space-y-4">
                {[
                  "Identifying content gaps",
                  "Analysing search patterns",
                  "Clustering topics logically",
                  "Monitoring performance trends",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What it is NOT */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                What AI SEO Is Not
              </h3>

              <ul className="mt-4 space-y-4">
                {[
                  "It is not automated content publishing",
                  "It does not replace human judgment",
                  "It does not bypass SEO fundamentals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Applicability */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                Industry Applicability
              </h3>

              <p className="section-phara">
                AI SEO benefits all industries, especially:
              </p>

              <ul className="mt-4 space-y-4">
                {[
                  "Content-heavy businesses",
                  "Competitive niches",
                  "Multi-location brands",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Relationship with SEO */}
            <div className="ml-10 mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                AI SEO’s Relationship with SEO
              </h3>

              <p className="section-phara">
                AI enhances SEO. It does not redefine it.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex justify-start">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="relative inline-block bg-secondary/90 hover:bg-secondary text-white font-primary text-lg md:text-xl font-medium py-3 px-10 rounded-full shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  Explore AI-assisted SEO strategies
                </Link>
              </motion.div>
            </div>
          </Section>

          {/* STEP 6 */}
          <Section
            id="other-search-acronyms-and-industry-use"
            title="Other Search Acronyms Explained"
          >
            {/* SXO */}
            <div className="ml-10 mt-6">
              <h3 className="section-title text-2xl text-secondary text-left mb-3">
                SXO (Search Experience Optimization)
              </h3>
              <p className="section-phara">
                Improving how users interact with pages after clicking from
                search.
              </p>
            </div>

            {/* VSO */}
            <div className="ml-10 mt-6">
              <h3 className="section-title text-2xl text-secondary text-left mb-3">
                VSO (Voice Search Optimization)
              </h3>
              <p className="section-phara">
                Optimising content for conversational, spoken queries.
              </p>
            </div>

            {/* E-E-A-T */}
            <div className="ml-10 mt-6">
              <h3 className="section-title text-2xl text-secondary text-left mb-3">
                E-E-A-T
              </h3>
              <p className="section-phara">
                Experience, Expertise, Authority, and Trust signals that define
                credibility.
              </p>
            </div>

            {/* Closing line */}
            <p className="section-phara mt-6">
              All of these function inside SEO, not outside it.
            </p>

            {/* Industry-wise usage */}
            <div className="mt-10">
              <h3 className="section-title text-2xl text-secondary text-left mb-4">
                Industry-Wise Use of SEO, AEO, GEO, and AI SEO (A Quick Glance)
              </h3>

              <ul className="mt-6 space-y-4 ml-10">
                {[
                  "Healthcare: SEO + AEO + GEO",
                  "SaaS: SEO + AEO + AI SEO",
                  "Local Services: SEO + GEO",
                  "E-commerce: SEO + AI SEO",
                  "Education: SEO + AEO",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20">
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="section-phara text-black/80">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="section-phara mt-6 ml-10 italic text-secondary">
                The strategy depends on intent, not trends.
              </p>
            </div>
          </Section>

          {/* STEP 7 */}
          <Section
            id="why-seo-is-the-bigger-picture"
            title="Why SEO Is the Bigger Picture"
          >
            {/* Core analogy */}
            <div className="mt-6">
              <p className="section-phara text-lg font-medium">
                SEO is the operating system.
              </p>
              <p className="section-phara text-lg font-medium">
                AEO, GEO, and AI SEO are applications.
              </p>
            </div>

            {/* Divider line */}
            <div className="my-6 h-px w-full bg-slate-200" />

            {/* Explanation */}
            <p className="section-phara">
              Without the operating system, applications fail.
            </p>

            <p className="section-phara mt-4">
              Businesses that chase individual tactics often experience
              short-term spikes followed by long-term instability.
            </p>

            <p className="section-phara">
              Businesses that invest in SEO as a system build authority,
              consistency, and sustained growth over time.
            </p>
          </Section>

          {/* FAQ SECTION */}
          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <CategoriesCard items={rightCategories} />
        </aside>
      </section>

      {/* Bottom: Related Posts */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        <RelatedPostsFromData posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */
function WhatsInside({ items }) {
  const [activeId, setActiveId] = React.useState(items?.[0]?.id || "");

  React.useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  React.useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "");
      if (id) setActiveId(id);
    };
    window.addEventListener("hashchange", onHash, { passive: true });
    onHash();
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  };

  return (
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
      <nav
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
        aria-label="Table of contents"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-3 text-2xl section-title">
          What’s Inside
        </div>

        <ul className="max-h-[70vh] overflow-y-auto p-3 pr-2">
          {items.map((it) => {
            const active = activeId === it.id;
            const isMain = it.level === 1;

            return (
              <li key={it.id} className="relative">
                <span
                  aria-hidden
                  className={[
                    "absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r transition-colors",
                    active ? "bg-primary" : "bg-transparent",
                  ].join(" ")}
                />

                <a
                  href={`#${it.id}`}
                  onClick={(e) => handleClick(e, it.id)}
                  className={[
                    "block rounded pr-2 py-2 transition-colors",
                    isMain ? "pl-3" : "pl-7",
                    active
                      ? "bg-slate-50 text-primary font-primary"
                      : "text-slate-700 font-secondary hover:bg-slate-50 hover:text-secondary",
                    isMain ? "text-[15px]" : "text-[13.5px]",
                  ].join(" ")}
                  aria-current={active ? "true" : undefined}
                >
                  {it.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}

function CategoriesCard({ items }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xl section-title">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-lg">
          {items.map((c) => {
            const active = isActive(c.href);
            return (
              <li key={c.text}>
                <Link
                  href={c.href}
                  className={[
                    "block rounded px-3 py-2 transition-colors",
                    active
                      ? "text-primary text-xl font-primary"
                      : "text-black font-secondary text-lg hover:bg-blue-50",
                  ].join(" ")}
                >
                  {c.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* HERO BANNER */
function SplitHeroBanner({
  href = "#",
  imageSrc,
  imageAlt,
  category,
  title,
  author,
  updatedAt,
  readMins,
  post = null,
}) {
  const shareUrl =
    typeof window !== "undefined" ? window.location.origin + href : href;
  const shareTitle = Array.isArray(title) ? title.join(" ") : title;

  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${shareTitle}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${shareTitle}`}
            className="block"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100">
                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
              </div>
            </div>
          </Link>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/15 to-transparent lg:block" />
        </div>

        {/* Right: Content panel */}
        <div
          className="relative isolate px-5 py-6 text-white sm:px-8 sm:py-10 flex flex-col"
          style={{
            backgroundImage: "linear-gradient(135deg,#0A4991 0%,#0A4991 100%)",
          }}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

          {/* TOP CONTENT */}
          <div className="flex-1">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {category}
            </div>

            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {Array.isArray(title)
                ? title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))
                : title}
            </h2>
          </div>

          {/* BOTTOM META - aligned row: author | meta | share */}
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              {/* Author */}
              <Link
                href={`/author/${author.slug}`}
                aria-label={`View ${author.name}'s author page`}
                className="relative z-[1] block rounded-md transition hover:opacity-95"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <div className="font-primary text-xl hover:underline leading-tight">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85 truncate">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {/* Vertical divider */}
              <Bar />

              {/* Meta */}
              <div className="text-sm text-slate-100/90">
                <div className="font-primary text-base">{updatedAt}</div>
                <div className="text-xs font-secondary">Last updated</div>
              </div>

              <div
                className="hidden sm:block h-6 w-px bg-white/20 mx-3"
                aria-hidden="true"
              />

              <div className="text-sm text-slate-100/90">
                <div className="font-primary font-medium text-base">
                  {readMins} Min
                </div>
                <div className="text-xs font-secondary">Read</div>
              </div>
            </div>

            {/* Share buttons placed on the right of meta - LARGE CTA */}
            <div className="z-[2] flex items-center">
              <ShareButtons
                slug={buildHref(post?.slug)}
                post={post}
                title={shareTitle}
                variant="large" // optional prop to style button inside ShareButtons
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShareButtons({
  url = "",
  slug = "",
  post = null,
  title = "",
  domain = "",
}) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const containerRef = React.useRef(null);
  const [absoluteUrl, setAbsoluteUrl] = React.useState(url || "");

  // build absolute URL on client or from domain prop
  React.useEffect(() => {
    if (url) {
      setAbsoluteUrl(url);
      return;
    }
    const base =
      domain || (typeof window !== "undefined" ? window.location.origin : "");
    // prefer passed slug (which should already include /blogs/), otherwise fall back to post
    const candidate = slug || (post && buildHref(post.slug)) || "";
    if (!candidate) return;
    const path = candidate.startsWith("/") ? candidate : `/${candidate}`;
    if (base) setAbsoluteUrl(base + path);
    else setAbsoluteUrl(path);
  }, [url, slug, post, domain]);

  const encodedUrl = encodeURIComponent(absoluteUrl || "");
  const encodedTitle = encodeURIComponent(
    title ||
      (post && post.title) ||
      (typeof document !== "undefined" ? document.title : ""),
  );

  // close on outside click / Esc
  React.useEffect(() => {
    const onDocClick = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };
    const onEsc = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const openPopup = (shareUrl, preferSameWindow = false) => {
    try {
      const w = 700;
      const h = 520;
      const left = window.screenX + (window.innerWidth - w) / 2;
      const top = window.screenY + (window.innerHeight - h) / 2;
      if (preferSameWindow) {
        window.location.href = shareUrl;
      } else {
        window.open(
          shareUrl,
          "share-window",
          `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`,
        );
      }
    } catch (e) {
      window.open(shareUrl, "_blank", "noopener");
    } finally {
      setOpen(false);
    }
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 
             text-base font-primary text-white backdrop-blur-md 
             hover:bg-white/30 transition"
      >
        <FiShare2 className="h-6 w-6 text-white" />
        <span>Share</span>
      </button>

      <div
        className={[
          "absolute right-0 mt-2 w-auto rounded-md border bg-white shadow-lg ring-1 ring-black/5 transition-all",
          open
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-1",
        ].join(" ")}
        style={{
          transitionProperty: "opacity, transform",
          padding: open ? "8px" : "0",
        }}
        aria-hidden={!open}
      >
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <button
            onClick={() =>
              openPopup(
                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Facebook"
            title="Facebook"
          >
            <FaFacebookF className="h-4 w-4 text-slate-700" />
          </button>

          {/* Twitter */}
          <button
            onClick={() =>
              openPopup(
                `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Twitter"
            title="Twitter"
          >
            <FaXTwitter className="h-4 w-4 text-slate-700" />
          </button>

          {/* LinkedIn */}
          <button
            onClick={() =>
              openPopup(
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn className="h-4 w-4 text-slate-700" />
          </button>

          {/* WhatsApp */}
          <button
            onClick={() =>
              openPopup(
                `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
                true,
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on WhatsApp"
            title="WhatsApp"
          >
            <FaWhatsapp className="h-4 w-4 text-slate-700" />
          </button>

          {/* Telegram */}
          {/* <button
            onClick={() =>
              openPopup(
                `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
                true
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Telegram"
            title="Telegram"
          >
            <FaTelegramPlane className="h-4 w-4 text-slate-700" />
          </button> */}

          {/* Copy link */}
          <button
            onClick={onCopy}
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition relative"
            aria-label="Copy link"
            title="Copy link"
          >
            <FiCopy className="h-4 w-4 text-slate-700" />
            <span className="text-sm text-slate-700 hidden sm:inline">
              Copy
            </span>

            <span
              role="status"
              aria-live="polite"
              className={[
                "absolute -bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs shadow-sm",
                copied ? "visible opacity-100" : "invisible opacity-0",
              ].join(" ")}
              style={{
                background: "rgba(34,34,34,0.9)",
                color: "white",
                transition: "opacity 180ms ease",
              }}
            >
              {copied ? "Copied!" : ""}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <span
      className="mx-1 hidden h-6 w-px bg-white/30 sm:inline-block"
      aria-hidden="true"
    />
  );
}

/* TOC items – UPDATED to match your 14 points */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Why Businesses Are Confused About Search Today",
  },
  {
    id: "how-search-has-changed",
    level: 1,
    label: "How Search Has Changed (But Not Replaced SEO)",
  },
  {
    id: "what-is-seo",
    level: 1,
    label: "What Is SEO? The Core System Behind All Search Visibility",
  },
  {
    id: "what-is-aeo",
    level: 1,
    label: "What Is AEO (Answer Engine Optimization)?",
  },
  {
    id: "what-is-geo",
    level: 1,
    label: "What Is GEO? Geographic Optimization & Local SEO",
  },
  {
    id: "what-is-geo-generative-engine-optimization",
    level: 1,
    label: "GEO as Generative Engine Optimization",
  },
  {
    id: "what-is-ai-seo",
    level: 1,
    label: "What Is AI SEO and How AI Is Reshaping Search",
  },
  {
    id: "other-search-acronyms-and-industry-use",
    level: 1,
    label: "Other Search Acronyms Explained",
  },
  {
    id: "why-seo-is-the-bigger-picture",
    level: 1,
    label: "Why SEO Is the Bigger Picture",
  },
  {
    id: "faq",
    level: 1,
    label: "Frequently Asked Questions",
  },
];

/* Right rail categories */
const rightCategories = [
  { text: "SEO Services", href: "/blogs/seo" },
  {
    text: "Digital Marketing Services",
    href: "/blogs/digital-marketing-services",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>Why Businesses Are Confused About Search Today</em>
      </p>
      <p className="section-phara">
        Search marketing used to feel simple. Businesses invested in SEO, worked
        on rankings, and gradually built visibility. Today, that clarity has
        been replaced with confusion.
      </p>
      <p className="section-phara">
        New terms appear in meetings and proposals, AEO, GEO, AI SEO, SXO, and
        businesses are left wondering whether traditional SEO still matters or
        if it has been replaced entirely. This confusion is especially common
        among companies speaking to a{" "}
        <Link
          href="https://www.ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency in Chennai
        </Link>{" "}
        , where both local competition and global exposure demand sharper search
        strategies.
      </p>
      <p className="section-phara">
        The confusion doesn’t come from change itself; it comes from
        misunderstanding of change. Search engines have evolved. User behavior
        has evolved. Technology has evolved.
      </p>
      <p className="section-phara">
        But the core goal of search has not changed: helping users find the most
        relevant, trustworthy answer to their query.
      </p>
      <p className="section-phara">
        What has changed is how that answer is delivered, sometimes as a
        featured snippet, sometimes as a local result, sometimes through
        AI-generated summaries.
      </p>
      <p className="section-phara">
        When businesses treat every new acronym as a separate strategy, they
        fragment their efforts and dilute results. The truth is simpler and more
        practical: SEO is still the foundation. Everything else builds on top of
        it.
      </p>
    </section>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mt-8 text-left text-2xl section-title">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "Is SEO still relevant in the age of AI-powered search?",
      a: "Yes, SEO is still relevant, and in fact, more important than ever. AI-powered search tools do not generate information randomly. They rely heavily on existing, well-structured, and trustworthy content available on the web. SEO provides the signals AI systems use to understand which websites are credible, authoritative, and relevant. Without SEO, AI has no reliable source to pull information from. AI has changed how results are presented, not how trust is built.",
    },
    {
      q: "Can AEO work without SEO in place?",
      a: "No, AEO cannot work independently. Answer Engine Optimization depends on strong SEO foundations such as content relevance, page structure, authority, and technical clarity. Search engines select answers from pages they already trust. If SEO fundamentals are weak, content will not qualify to appear as a featured snippet, voice answer, or AI-generated response, no matter how well it is written.",
    },
    {
      q: "Is GEO optimization useful only for small or local businesses?",
      a: "No. While GEO is essential for local businesses, it is equally valuable for national and global brands. Large companies use GEO to dominate specific regions, cities, or service areas. For example, a national brand may want separate visibility in Chennai, Bengaluru, Dubai, or New York. GEO helps tailor search presence based on regional intent, language preferences, and local competition.",
    },
    {
      q: "Does AI SEO replace the need for SEO experts or agencies?",
      a: "No. AI SEO supports SEO experts, it does not replace them. AI can analyse data, identify patterns, and speed up research, but it cannot understand business goals, brand positioning, customer psychology, or market nuance. Strategic thinking, decision-making, and long-term planning still require human expertise. AI is a tool, not a strategy.",
    },
    {
      q: "How long does SEO take to show results today?",
      a: "SEO is a long-term growth process, not an instant solution. Initial improvements such as better indexing, keyword movement, or traffic signals may appear within a few weeks. However, stable rankings, authority growth, and consistent lead generation typically take several months. The timeline depends on competition, industry, content quality, and how strong the existing website foundation is.",
    },
    {
      q: "Do all industries really need AEO?",
      a: "Not all industries need AEO in the same way, but most benefit from it. Industries where customers ask questions before making decisions, such as healthcare, education, SaaS, and professional services, gain the most from AEO. For other industries, AEO still improves clarity and visibility by helping search engines understand content better. It should be applied selectively, not blindly.",
    },
    {
      q: "Is AI-generated content good or bad for SEO?",
      a: "AI-generated content is neither good nor bad by default. What matters is quality, accuracy, and usefulness. Content created purely to manipulate rankings or flood search engines usually fails. AI should assist in research, structuring, and drafting, but final content must be reviewed, refined, and aligned with real user intent. Search engines reward helpful content, regardless of how it is produced.",
    },
    {
      q: "Can businesses choose only one approach: SEO, AEO, GEO, or AI SEO?",
      a: "No. These are not standalone choices. SEO is the foundation, and AEO, GEO, and AI SEO are execution layers within it. Choosing only one approach limits results and creates gaps. For example, AEO without SEO lacks authority, and GEO without SEO lacks stability. A combined approach ensures consistency, scalability, and long-term performance.",
    },
    {
      q: "Is SEO only about rankings and traffic?",
      a: "No. Modern SEO is about outcomes, not just rankings. Traffic without relevance does not generate business value. SEO today focuses on attracting the right users, guiding them through content, and supporting conversions. Rankings are indicators, not the end goal. The real measure of SEO success is visibility that leads to engagement, trust, and business growth.",
    },
    {
      q: "What is the biggest mistake businesses make with SEO today?",
      a: "The biggest mistake is treating SEO as a one-time project instead of an ongoing system. Many businesses optimise a few pages and stop. Search behaviour, competition, and algorithms constantly evolve. SEO must be maintained, refined, and expanded over time. Businesses that invest consistently see compounding results; those that stop early lose momentum.",
    },
    {
      q: "How should a business decide the right SEO strategy for its needs?",
      a: `The right SEO strategy depends on the business model, industry, location, competition, and growth goals. There is no one-size-fits-all approach. A local service business needs stronger GEO focus, while a SaaS company may prioritise AEO and AI SEO. The key is to build on SEO fundamentals first, then layer advanced strategies based on real data and intent.
    Modern search is not about choosing between SEO, AEO, GEO, or AI SEO. It is about understanding how they work together. SEO remains the foundation that supports every evolution in search behaviour.
    Businesses that recognise this build visibility that lasts. Those that chase acronyms without structure struggle to sustain results.
    `,
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(0);
  const toggle = (i) => setOpenIndex((curr) => (curr === i ? -1 : i));

  return (
    <div className="mx-auto w-full space-y-3">
      {faqs.map((item, i) => (
        <FAQItem
          key={i}
          index={i}
          open={openIndex === i}
          onToggle={() => toggle(i)}
          q={item.q}
          a={item.a}
        />
      ))}
    </div>
  );
}

function FAQItem({ q, a, open, onToggle, index }) {
  const bodyId = `faq-panel-${index}`;
  return (
    <div
      className={[
        "overflow-hidden rounded-lg",
        "shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-slate-100",
        "transition-shadow duration-200",
      ].join(" ")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
        className={[
          "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
          "transition-colors duration-200",
          open
            ? "bg-white text-primary font-primary"
            : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-xl leading-5">{q}</h3>
        <span
          className={[
            "inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm",
            "transition-colors duration-200",
          ].join(" ")}
          aria-hidden="true"
        >
          {open ? (
            <FiMinus className="h-3.5 w-3.5" />
          ) : (
            <FiPlus className="h-3.5 w-3.5" />
          )}
        </span>
      </button>

      <div
        id={bodyId}
        className={[
          "px-4 transition-all duration-200 ease-out",
          open ? "max-h-64 py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <p className="font-secondary text-lg text-black/80 whitespace-pre-line">
          {a}
        </p>
      </div>
    </div>
  );
}
