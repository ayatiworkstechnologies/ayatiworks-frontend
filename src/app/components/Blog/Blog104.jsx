"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";

import { FiPlus, FiMinus } from "react-icons/fi";

export default function AEOArticlePage104() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      {/* <section className="mx-auto section-container px-4 sm:px-6 pt-6">
        <ResponsiveBanner
          href="#"
          alt="Your Offer"
          desktopSrc="/banner/aoe-blogs-web.webp"
          mobileSrc="/banner/aoe-blogs-mob.webp"
        />
      </section> */}

      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-6">
        <SplitHeroBanner
          href="#"
          imageSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-104.jpg" // update to your image
          imageAlt="Chennai digital marketing agency delivering pan-India ROI "
          category="Digital Marketing Services"
          title={[
            "Think local. Scale national!",
            "That’s the Chennai advantage ",
          ]}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
          }}
          updatedAt="Nov 14, 2025"
          readMins={10}
        />
      </section>

      {/* HERO */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              Chennai Digital Marketing Services: How Local Digital Agencies
              Deliver National-Scale ROI
            </span>
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)_250px]">
        {/* LEFT: TOC (scroll-spy with active styling) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="why-chennai-powerhouse"
            title="Why Chennai Is Emerging as India’s Digital Growth Powerhouse"
          >
            <p className="section-phara">
              Chennai’s digital transformation didn’t happen suddenly; it
              evolved with talent, culture, and technology converging at the
              right time. At the beginning of the 21st century, businesses were
              struggling with the availability of digital marketing talent in
              Chennai. Due to this shortage, businesses had to outsource their
              digital marketing requirements to cities like Bangalore, Mumbai,
              and Hyderabad. Over a period, Chennai started seeing a surge in
              young talents learning, implementing and soon spearheading digital
              agencies. Today, Chennai is seeing digital talents in explicit
              combinations and capacities, which is a boon for businesses.
            </p>
            <h3 className="section-title text-2xl text-left my-5">
              A Deep Talent Pool That Combines Creativity + Analytics{" "}
            </h3>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Chennai’s workforce is a rare combination of analytical and
                creative talent:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Engineers  ",
                  },
                  {
                    name: "Marketers ",
                  },
                  {
                    name: "Designers  ",
                  },
                  {
                    name: "Content strategists ",
                  },
                  {
                    name: "Performance specialists ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              The cost of hiring and retaining talent here is significantly
              lower than in Mumbai or Bangalore, allowing agencies to offer{" "}
              <strong> premium work without premium pricing. </strong>
            </p>
            <p className="section-phara">
              This translates directly into{" "}
              <strong>higher ROI for clients.</strong>{" "}
            </p>
            <h3 className="section-title text-2xl text-left my-5">
              Cultural Intelligence That Works Across India
            </h3>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Chennai agencies understand linguistic and cultural diversity
                because the city itself is a melting pot of:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Tamil   ",
                  },
                  {
                    name: "Telugu  ",
                  },
                  {
                    name: "Malayalam   ",
                  },
                  {
                    name: "Kannada ",
                  },
                  {
                    name: "Hindi-speaking communities  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                This gives agencies a deeper edge in:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Emotion-driven content    ",
                  },
                  {
                    name: "Regional adaptation   ",
                  },
                  {
                    name: "South-to-North campaign scaling    ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              A message tested in Chennai often performs better when rolled out
              nationally.{" "}
            </p>
            <p className="section-phara">
              This is why many pan-India brands now choose{" "}
              <strong>“Chennai-first execution”.</strong>
            </p>
          </Section>

          <Section
            id="why-national-brands-choose-chennai"
            title="Why National Brands Choose Chennai "
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Many companies now prefer Chennai for their strategic digital
                operations because the city offers:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: " High execution stability  ",
                  },
                  {
                    name: "Experienced mid-senior digital talent ",
                  },
                  {
                    name: "Consistency in performance ",
                  },
                  {
                    name: "Long-term delivery without inflated costs ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Which brings us to a real-world example:
            </p>
            <p className="section-phara">
              <strong>
                {" "}
                Ayatiworks’ work for brands like Volvo, Nippo Batteries, and
                JEEP,{" "}
              </strong>{" "}
              all of which trusted Chennai-first strategies for pan-India
              growth.
            </p>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">

                {/* Original + Duplicate for looping */}
                {[
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-4.jpg",
                    alt: "Google Ranking businesses for Keyword on SERP",
                    title: "Volvo",
                  },
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-5.jpg",
                    alt: "Optimizing Local SEO Strategies",
                    title: "Nippo India",
                  },
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-3.jpg",
                    alt: "AEO Strategies for 2025 Success",
                    title: "Jeep India",
                  },
                  // Duplicate for infinite loop
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-4.jpg",
                    alt: "Google Ranking businesses for Keyword on SERP",
                    title: "Volvo",
                  },
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-5.jpg",
                    alt: "Optimizing Local SEO Strategies",
                    title: "Nippo India",
                  },
                  {
                    img: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-3.jpg",
                    alt: "AEO Strategies for 2025 Success",
                    title: "Jeep India",
                  },
                ].map((card, i) => (
                  <div
                    key={card.title + i}
                    className=" group rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all"
                  >
                    <img
                      src={card.img}
                      alt={card.alt}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="font-primary text-xl section-title">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              <style jsx>{`
    @keyframes scrollX {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scrollX 14s linear infinite;
      width: max-content;
    }
  `}</style>
            </div>

          </Section>

          <Section
            id="chennai-advantage"
            title="The Chennai Advantage: How Local Digital Agencies Deliver National-Scale ROI"
          >
            <p className="section-phara">
              While digital marketing agencies exist everywhere, Chennai
              agencies bring three specific advantages that convert into
              measurable ROI.
            </p>

            {/* (a) sub-heading for TOC */}
            <h3
              id="advantage-national-roi"
              className="section-title text-2xl text-left my-5"
            >
              How Local Digital Agencies Deliver National-Scale ROI
            </h3>

            <h3
              id="faster-turnaround"
              className="section-title text-2xl text-left my-5"
            >
              1. Faster Turnaround & High Execution Agility{" "}
            </h3>
            <p className="section-phara">Chennai agencies operate leaner</p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                {" "}
                Which means:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: " Quicker strategy execution ",
                  },
                  {
                    name: "Faster feedback loops  ",
                  },
                  {
                    name: "Rapid iteration  ",
                  },
                  {
                    name: "Lower breakdown time across teams ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              For performance-driven brands, this speed becomes a
              <strong> deciding factor for ROI. </strong>{" "}
            </p>

            <h3
              id="regional-understanding"
              className="section-title text-2xl text-left my-5"
            >
              {" "}
              2. Regional Understanding = National Impact{" "}
            </h3>
            <p className="section-phara">
              Most consumers across India share common emotional triggers, but{" "}
              <strong>their cultural expression varies.</strong>{" "}
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                {" "}
                Chennai creatives are among the best in decoding these nuances,
                especially:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Tone  ",
                  },
                  {
                    name: "Humor ",
                  },
                  {
                    name: "Visual preferences ",
                  },
                  {
                    name: "Language adaptability ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This sensitivity allows Chennai agencies to create content that
              feels authentic across regions, not forced or templated.{" "}
            </p>

            <h3
              id="cost-efficiency"
              className="section-title text-2xl text-left my-5"
            >
              {" "}
              3. Transparent Pricing & Cost Efficiency That Boost ROI
            </h3>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                {" "}
                Because infrastructure and operational costs are lower in
                Chennai:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Campaigns deliver more value at the same budget   ",
                  },
                  {
                    name: "Brands get better ROAS  ",
                  },
                  {
                    name: "SEO/content marketing becomes cost-effective  ",
                  },
                  {
                    name: "Creative teams spend more time crafting instead of rushing  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This is one of the biggest reasons national brands now prefer
              agencies here.{" "}
            </p>
          </Section>

          <Section
            id="proven-roi"
            title="How Ayatiworks Delivered National-Scale ROI"
          >
            {/* (a) sub-heading for TOC */}
            <h3
              id="ayatiworks-approach"
              className="section-title text-2xl text-left my-5"
            >
              Ayatiworks’ Chennai-First Approach for National Brands
            </h3>

            <h3 id="volvo" className="section-title text-2xl text-left my-5">
              Volvo’s National Visibility Through a Chennai-First Strategy
            </h3>
            <p className="section-phara">
              Volvo wanted stronger national visibility but needed a
              performance-driven partner that understood regional market
              behavior.{" "}
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Ayatiworks executed:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "content localization ",
                  },
                  {
                    name: "targeted campaigns  ",
                  },
                  {
                    name: "premium creative strategy ",
                  },
                  {
                    name: "Targeted ROI  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              <strong>Result:</strong> stronger organic presence and measurable
              conversion growth.{" "}
            </p>

            <div className="flex justify-left py-5">
              <Link
                href="/case-study/how-Ayatiworks-propelled-Volvos-digital-presence-by-250-percentage-increase-in-impressions/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Volvo Case Study
              </Link>
            </div>

            <h3
              id="nippo-batteries"
              className="section-title text-2xl text-left my-5"
            >
              Nippo Batteries – Consistent Consumer Engagement Across India
            </h3>
            <p className="section-phara">
              Nippo needed a consistent brand recall in Tier 1 to Tier 3
              markets.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Ayatiworks delivered:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Integrated social campaigns ",
                  },
                  {
                    name: "Multi-regional content  ",
                  },
                  {
                    name: "Performance-backed creatives  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              <strong>Result:</strong> thousands of high-engagement interactions
              & multi-regions reach.{" "}
            </p>

            <div className="flex justify-left py-5">
              <Link
                href="/case-study/Reposition-Nippo-and-Brand-Awareness-Campaign/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Nippo Case Study
              </Link>
            </div>

            <h3 id="jeep" className="section-title text-2xl text-left my-5">
              JEEP’s High-Intent Lead Generation for Premium Buyers{" "}
            </h3>
            <p className="section-phara">
              JEEP needed quality leads, not volume.{" "}
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Ayatiworks implemented:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Refined buyer persona targeting  ",
                  },
                  {
                    name: "Tactical media buying  ",
                  },
                  {
                    name: "Performance-driven landing pages  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              <strong>Result:</strong> Improved lead quality at superior ROAS.{" "}
            </p>

            <div className="flex justify-left py-5">
              <Link
                href="/case-study/Jeep-India-Independence-Day-Merchandise-Sales-Campaign/"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                JEEP Case Study
              </Link>
            </div>
          </Section>

          <Section
            id="chennai-vs-metros"
            title="Chennai vs Metro Agencies. A Real Comparison!"
          >
            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-104-2.png"
              alt="Comparison between Chennai and other Metro Digital Marketing Agencies"
            />
          </Section>

          <Section
            id="core-services"
            title="Chennai Digital Marketing Services That Drive ROI"
          >
            <p className="section-phara">
              Here's how Chennai agencies, particularly Ayatiworks, deliver
              performance at scale.{" "}
            </p>
            <h3
              id="local-seo"
              className="section-title text-2xl text-left my-5"
            >
              {" "}
              Local SEO & Hyperlocal Targeting
            </h3>
            <div className="ml-10 mb-4">
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Google Business optimization  ",
                  },
                  {
                    name: "Location-based landing pages ",
                  },
                  {
                    name: "Regional keyword strategy  ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              This ensures brands dominate both{" "}
              <strong>local searches and national competitive terms.</strong>
            </p>
            <h3
              id="performance-marketing"
              className="section-title text-2xl text-left my-5"
            >
              Performance Marketing That Maximizes ROAS
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                {" "}
                Chennai teams excel at:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "media buying ",
                  },
                  {
                    name: "creative iteration  ",
                  },
                  {
                    name: " audience segmentation ",
                  },
                  {
                    name: " funnel optimization ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Low cost + high skill = <strong> better ROAS. </strong>
            </p>
            <h3
              id="social-multiregional"
              className="section-title text-2xl text-left my-5"
            >
              Social Media Marketing with Cultural Resonance
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Chennai agencies create content that appeals to:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "South Indian sensibilities  ",
                  },
                  {
                    name: "PAN India emotional triggers  ",
                  },
                  {
                    name: "Urban + semi-urban mix ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">This amplifies national engagement.</p>

            <h3
              id="seo-content"
              className="section-title text-2xl text-left my-5"
            >
              Content & SEO Strategy
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Chennai is known for producing some of India’s strongest content
                and SEO strategists, thanks to:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "Deep English proficiency  ",
                  },
                  {
                    name: "Strong research culture  ",
                  },
                  {
                    name: "Long-term content thinking ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              This supports sustained organic growth.{" "}
            </p>
          </Section>

          <Section
            id="when-to-choose-chennai"
            title=" When Should You Choose a Chennai-Based Digital Marketing Agency?"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                You Should choose one when:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "you want national-level ROI at regional pricing ",
                  },
                  {
                    name: "you want long-term brand consistency ",
                  },
                  {
                    name: "you want high execution speed  ",
                  },
                  {
                    name: "you need multi-regional campaigns  ",
                  },
                  {
                    name: " you prefer transparent, accountable delivery ",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">
                        {item.name}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section
            id="how-to-choose-agency"
            title=" How to Choose the Right Digital Marketing Agency in Chennai"
          >
            <p className="section-phara">
              Choosing the right digital marketing agency in Chennai starts with
              evaluating their real capabilities, look for proven case studies,
              multi-industry experience, a strong performance marketing team,
              and in-house specialists across SEO, content, and creative.
            </p>
            <p className="section-phara">
              The best agencies also bring cultural intelligence, transparent
              pricing models, and a track record of delivering measurable ROI
              across markets. Brands should prioritize partners who can combine
              strategic depth with execution speed and who offer end-to-end
              support instead of fragmented services.{" "}
            </p>
            <p className="section-phara">
              If you’re looking for expert guidance or a result-driven digital
              strategy tailored to your business goals, you can speak to
              Ayatiworks, a{" "}
              <Link
                href="https://ayatiworks.com/digital-marketing-services"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Chennai-based digital marketing agency
              </Link>{" "}
              known for performance-led execution and national-scale ROI.
            </p>
          </Section>
          <Section
            id="the-advantage-is-growing"
            title="The Chennai Advantage Is Real and Growing"
          >
            <p className="section-phara">
              Chennai has grown beyond being a regional digital hub. Today, it’s
              a <strong>national performance powerhouse,</strong> delivering ROI
              that rivals and often surpasses agencies in major metros.
            </p>
            <p className="section-phara">
              For brands looking to scale across India with agility, creativity,
              and measurable impact, choosing a{" "}
              <strong>digital marketing agency in Chennai</strong> is not just a
              smart decision, it’s a competitive advantage.
            </p>
          </Section>

          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories + Author + Banner */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <CategoriesCard items={rightCategories} />
        </aside>
      </section>

      {/* ===== Bottom: Related Posts ===== */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        <RelatedPostsSection posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

/* Scroll-spy TOC with active classes: text-primary + font-primary (others font-secondary) */
export function WhatsInside({ items }) {
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
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] }
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
                {/* Active indicator bar */}
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
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xl section-title ">
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

function SplitHeroBanner({
  href = "#",
  imageSrc = "/banner/aoe-blogs-web.webp",
  imageAlt = "AI Search Optimization Strategies for Businesses in 2025 – Visual Guide to AEO Implementation",
  category = "SEO",
  title = ["What Is lms.txt? The", "New AI Web Standard", "for 2025"],
  author = {
    name: "Daniel Joseph",
    slug: "daniel-joseph",
    role: "Content Writer",
    avatar: "/assets/teams/daniel.png",
  },
  updatedAt = "Oct 22, 2025",
  readMins = 11,
}) {
  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${title.join(" ")}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image (hover zoom + blur) - ONLY this side navigates */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${title.join(" ")}`}
            className="block"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
              />
              {/* soft blur layer only on hover (desktop) */}
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100">
                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
              </div>
            </div>
          </Link>

          {/* subtle gradient edge on right */}
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/15 to-transparent lg:block" />
        </div>

        {/* Right: Content panel (author link navigates to author page) */}
        {/* Right: Content panel */}
        <div
          className="relative isolate px-5 py-6 text-white sm:px-8 sm:py-10 flex flex-col"
          style={{
            backgroundImage: "linear-gradient(135deg,#0A4991 0%,#0A4991 100%)",
          }}
        >
          {/* corner glow */}
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

          {/* TOP CONTENT */}
          <div className="flex-1">
            {/* Category */}
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {category}
            </div>

            {/* Title */}
            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* BOTTOM META (AUTHOR + DATE + READ TIME) */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100/90">
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
                  <div>
                    <div className="font-primary text-xl hover:underline">{author.name}</div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              <Bar />

              <div className="text-center font-secondary text-slate-300/85">
                <span className="font-primary text-base text-white">{updatedAt}</span>
                <br />
                Last Updated
              </div>

              <Bar />

              <div className="text-center font-primary font-medium text-white">
                {readMins} Min
                <br />
                <span className="font-secondary text-slate-300/85">Read</span>
              </div>
            </div>
          </div>
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

/* TOC items */
export const tocItems = [
  // I — Introduction
  { id: "intro", level: 1, label: "I. Introduction" },
  {
    id: "why-chennai-powerhouse",
    level: 2,
    label: "(a) Why Chennai Is Becoming India’s Digital Growth Powerhouse",
  },

  // II — The Chennai Advantage
  { id: "chennai-advantage", level: 1, label: "II. The Chennai Advantage" },
  {
    id: "advantage-national-roi",
    level: 2,
    label: "(a) How Local Digital Agencies Deliver National-Scale ROI",
  },
  {
    id: "faster-turnaround",
    level: 2,
    label: "(b) Faster Turnaround & Execution Agility",
  },
  {
    id: "regional-understanding",
    level: 2,
    label: "(c) Regional Understanding for National Impact",
  },
  {
    id: "cost-efficiency",
    level: 2,
    label: "(d) Cost Efficiency That Improves ROI",
  },

  // III — Proven ROI
  { id: "proven-roi", level: 1, label: "III. Proven ROI" },
  {
    id: "ayatiworks-approach",
    level: 2,
    label: "(a) Ayatiworks’ Chennai-First Approach for National Brands",
  },
  { id: "volvo", level: 2, label: "(b) Volvo" },
  { id: "nippo-batteries", level: 2, label: "(c) Nippo Batteries" },
  { id: "jeep", level: 2, label: "(d) JEEP" },

  // IV — Comparison
  {
    id: "chennai-vs-metros",
    level: 1,
    label: "IV. Chennai vs Major Metro Agencies: A Practical Comparison",
  },

  // V — Core Services
  {
    id: "core-services",
    level: 1,
    label: "V. Core Chennai Digital Marketing Services That Drive ROI",
  },
  {
    id: "local-seo",
    level: 2,
    label: "(a) Local SEO & Hyperlocal Targeting",
  },
  {
    id: "performance-marketing",
    level: 2,
    label: "(b) Performance Marketing",
  },
  {
    id: "social-multiregional",
    level: 2,
    label: "(c) Social Media & Multi-Regional Content",
  },
  {
    id: "seo-content",
    level: 2,
    label: "(d) SEO + Content Marketing",
  },

  // VI — When to Choose
  {
    id: "when-to-choose-chennai",
    level: 1,
    label: "VI. When Brands Should Prefer a Chennai-Based Digital Marketing Agency",
  },

  // VII — How to Choose
  {
    id: "how-to-choose-agency",
    level: 1,
    label: "VII. How to Choose the Right Digital Marketing Agency in Chennai",
  },

  // VIII — Closing
  {
    id: "the-advantage-is-growing",
    level: 1,
    label: "VIII. The Chennai Advantage Is Real and Growing",
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

/* ---- Mock related posts (swap with your CMS) ---- */
const relatedPosts = [
  
  {
     id: 105,
    title: "5 Key Benefits of Hiring a Chennai-Based Digital Marketing Agency",
    slug: "/blogs/digital-marketing-services/benefits-of-hiring-a-chennai-based-digital-marketing-agency",
    date: "November 21, 2025",
    readMins: 8,
    category: "SEO",
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-105.jpg",
    coverAlt:
      "Benefits of hiring a Chennai-based digital marketing agency for business growth",
    deck:
      "Discover the top Chennai digital marketing agency benefits and why choosing a local agency drives faster results, better communication, and higher ROI...",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>Business sans marketing is inevitable. </em>
      </p>
      <p className="section-phara">
        In the last few decades, digital marketing has become a major part of
        every business. In the recent past, AI has been impacting digital
        marketing nevertheless, marketing is still evolving and remains
        inevitable throughout the world.
      </p>
      <p className="section-phara">
        The demand for
        <Link
          href="https://ayatiworks.com/digital-marketing-services"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          {" "}
          digital marketing services in Chennai
        </Link>{" "}
        has surged over the past five years, and for a good reason. Gone are the
        days when Chennai was seen as just a regional market. It has evolved
        into one of India’s most powerful digital marketing ecosystems,
        attracting startups, established brands, GCCs, National and
        International companies looking for a blend of{" "}
        <strong>
          creativity, cost-efficiency, performance, and cultural intelligence.{" "}
        </strong>
      </p>
      <div className="ml-10 py-5">
        <h3 className="section-title text-2xl text-left my-5">
          Today’s brands aren’t just looking for agencies that “run ads” or “do
          SEO.” They want partners who:{" "}
        </h3>
        <ul className="mt-4 space-y-2">
          {[
            {
              name: "understand consumers across regions ",
            },
            {
              name: "personalize content for multi-lingual audiences  ",
            },
            {
              name: "deliver repeatable ROI  ",
            },
            {
              name: "scale their campaigns across India ",
            },
          ].map((item) => (
            <li key={item.name} className="flex items-start gap-3">
              <span
                className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                aria-hidden="true"
              >
                <IoCheckmarkDone className="h-5 w-5 text-primary" />
              </span>

              <span className="text-black/80 section-phara text-lg">
                <span className="font-medium text-black">{item.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="section-phara">And this is exactly where Chennai shines.</p>

      <p className="section-phara">
        Let’s explore why Chennai-based agencies, notably{" "}
        <Link
          href="https://ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Ayatiworks
        </Link>{" "}
        are increasingly becoming the preferred partners for brands wanting
        national-scale growth and why the city’s digital ecosystem gives them a
        structural advantage over agencies in metros like Bangalore or Mumbai.{" "}
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
      q: "How has Ayatiworks helped national brands scale through Chennai digital marketing services? ",
      a: "Ayatiworks leverages its Chennai-base to deliver cost-efficient, culturally nuanced and performance-driven digital campaigns. From regional rollouts to pan-India expansion, our works are with leading auto brands, consumer battery brand, a global SUV brand, B2B, B2C, D2C businesses, Ecommerce companies and international healthcare brands where Chennai-first strategy translated into national-scale ROI and International SEO. By combining local insights with full-funnel digital execution, Ayatiworks offers clients a path from Tamil Nadu roots to India-wide results. ",
    },
    {
      q: "What are the most effective digital marketing services in Chennai for brands looking to expand nationally? ",
      a: "The most effective services include hyper-local SEO and regional keyword targeting, performance-marketing campaigns (PPC + social media) tailored for Indian multi-region audiences, culturally adapted content marketing across languages and regions, and data-driven analytics & optimisation. A Chennai-based agency’s advantage is its ability to fuse the local audience’s understanding with national rollout capability, delivering campaigns that perform across states and demographics. ",
    },
    {
      q: "Why should brands base their digital marketing strategy in Chennai when targeting a national market? ",
      a: "Chennai offers a unique blend of advantages: a strong talent pool (creative, analytical and multilingual), cost-efficiencies compared to metro hubs, and deep cultural understanding across southern and northern Indian markets. This means faster execution, tighter budgets, better localisation and ultimately more measurable ROI. When these strengths are applied with national ambition, a Chennai-based partner drives both local relevance and national scale. ",
    },
    {
      q: "What factors should I consider when choosing a digital marketing agency in Chennai for national-scale growth? ",
      a: "The Key factors you should look out for are proven case studies of pan-India campaign performance, experience across multiple regions, transparent pricing and fee structure, multi-channel capability (SEO, SMM, PPC, content), strong data-analytics and reporting, and localisation expertise (languages, culture, regional behaviour). An agency that combines all these will be well-positioned to help you scale nationally from a Chennai base. ",
    },
    {
      q: "How much does hiring a digital marketing agency in Chennai typically cost and how long before I see results? ",
      a: "Costs vary depending on scope, industry and channels, but many Chennai agencies can offer competitive packages compared to metro hubs due to operational efficiencies. The timeline for results typically shows initial traction within 3-4 months (especially in PPC/social), while sustainable SEO and content wins often take 6-12 months. Transparent agencies will provide clear KPIs and realistic timelines for both short-term and long-term impact. ",
    },
    {
      q: "What are the common mistakes brands make when working with digital marketing services in Chennai (or any regional hub) and how can they avoid them? ",
      a: "Common mistakes include expecting instant results without a foundational strategy, treating regional execution as “one size fits all” for national markets, unclear KPIs or no reporting, working with agencies that lack multi-region experience, and neglecting cultural localisation nuances. To avoid these, brands should demand a phased plan (local → regional → national), insist on regular reporting & clear ROI metrics, ensure the agency has national-roll-out experience, and verify that regional insights feed into your full-funnel strategy. ",
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

/* ---------- Single Item ---------- */
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
        <p className="font-secondary text-lg text-black/80">{a}</p>
      </div>
    </div>
  );
}

/* ---------- Related Posts (Bottom) ---------- */

function RelatedPostsSection({ posts = [] }) {
  if (!posts?.length) return null;
  return (
    <div className="mt-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left ">Related Posts</h2>
        <Link
          href="/blogs"
          className=" btn-outline "
          aria-label="View all blog posts"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <RelatedPostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}

function RelatedPostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Stretched link */}
      <Link href={post.slug} className="absolute inset-0 z-[1]">
        <span className="sr-only">{`Read: ${post.title}`}</span>
      </Link>

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="line-clamp-2 font-primary text-lg leading-snug text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.deck}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}
