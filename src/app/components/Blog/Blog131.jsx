"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { FiPlus, FiMinus, FiShare2, FiCopy } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { POSTS } from "../../lib/blogs-data";
import RelatedPostsFromData from "./RelatedPostsFromData";
import { getRelatedRecentPosts } from "../../lib/getRelatedRecentPosts";
import RightSidebarCategories from "./RightSidebarCategories";
import SplitHeroBanner from "./SplitHeroBanner";
import WhatsInside from "./WhatsInside";

/* ---------- HELPERS & CONSTANTS ---------- */

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};

export const tocItems = [
  { id: "intro", level: 1, label: "The View Count Dilemma" },
  { id: "views-vs-growth", level: 1, label: "Why Views Don't Always Mean Growth" },
  { id: "attention-vs-intent", level: 1, label: "Attention vs. Buying Intent" },
  { id: "seven-reasons", level: 1, label: "7 Reasons Videos Get Views but No Customers" },
  { id: "turn-views-into-leads", level: 1, label: "How to Turn Views Into Qualified Leads" },
  { id: "modern-marketing-funnel", level: 1, label: "Video in the Modern Marketing Funnel" },
  { id: "metrics-to-track", level: 1, label: "The Metrics Businesses Should Track" },
  { id: "ai-video-content", level: 1, label: "How AI Video Content Helps Convert Viewers" },
  { id: "ayatiworks-growth-engine", level: 1, label: "Ayatiworks Video Growth Engine" },
  { id: "blog-faqs", level: 1, label: "Frequently Asked Questions" },
  { id: "conclusion", level: 1, label: "Conclusion" },
];

const FAQS_DATA = [
  {
    q: "1. Why do my business videos get views but no leads?",
    a: "High views do not necessarily indicate high buying intent. Your content may be reaching a broad audience, lacking a clear CTA, or failing to connect the video with a conversion-focused customer journey.",
  },
  {
    q: "2. How can I convert video views into customers?",
    a: "Start by targeting the right audience, creating problem-focused videos, using relevant CTAs, connecting videos to dedicated landing pages, and tracking leads and conversions rather than views alone.",
  },
  {
    q: "3. Should every business video have a sales CTA?",
    a: "Not necessarily. The CTA should match the viewer's funnel stage. Awareness content may encourage further engagement, while decision-stage content can use stronger actions such as booking a consultation or requesting a quote.",
  },
  {
    q: "4. What video metrics should businesses track?",
    a: "Businesses should track metrics across the funnel, including watch time, retention, website clicks, qualified leads, conversions, customer acquisition cost, and revenue impact.",
  },
  {
    q: "5. Is viral video marketing good for business?",
    a: "Viral reach can create awareness, but virality does not guarantee customers. A smaller audience with strong relevance and buying intent can generate greater business value than a large but unrelated audience.",
  },
  {
    q: "6. Can video marketing work with SEO and paid advertising?",
    a: "Yes. Video can support SEO, paid media, social media, landing pages, remarketing, email campaigns, and sales enablement. The strongest results often come when video is integrated into a wider digital marketing strategy rather than treated as an isolated channel.",
  },
];

/* ---------- SMALL HELPERS ---------- */

function Bar() {
  return (
    <span
      className="mx-1 hidden h-8 w-px bg-white/30 sm:inline-block"
      aria-hidden="true"
    />
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

function SectionH3({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-6 text-left text-xl font-bold text-primary">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

/* ---------- COMPOUND COMPONENTS ---------- */

function FAQItem({ q, a, open, onToggle, index }) {
  const bodyId = `faq-panel-${index}`;
  return (
    <div className="overflow-hidden rounded-lg shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-slate-100 transition-shadow duration-200">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
        className={[
          "flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200",
          open
            ? "bg-white text-primary font-primary"
            : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-lg leading-6 font-bold">{q}</h3>
        <span
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm transition-colors duration-200"
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
          open ? "max-h-[500px] py-3 border-t border-slate-100" : "max-h-0 py-0",
        ].join(" ")}
      >
        <p className="font-secondary text-base text-black/80 whitespace-pre-line leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((curr) => (curr === i ? -1 : i));
  return (
    <div className="mx-auto w-full space-y-3">
      {FAQS_DATA.map((item, i) => (
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

/* ---------- SECTION COMPONENTS ---------- */

function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-phara">
        Your latest business video has 50,000 views. The engagement looks impressive. Likes are coming in. People are commenting. Your team is sharing screenshots of the numbers internally.
      </p>
      <div className="my-6 p-5 border-l-4 border-amber-500 bg-amber-50/50 rounded-r-xl">
        <p className="font-bold text-amber-900 text-lg">But there is one problem: Nobody is buying.</p>
        <p className="text-sm text-slate-700 mt-1">
          No meaningful increase in enquiries. No qualified leads. No noticeable improvement in sales revenue.
        </p>
      </div>
      <p className="section-phara">
        This is one of the most frustrating problems businesses face with video marketing today. The assumption is simple: more views should eventually create more customers. But views are not the same as intent.
      </p>
      <p className="section-phara">
        A person can watch a 30-second video because the opening was entertaining, the topic was interesting, or the algorithm placed it in front of them. That does not necessarily mean they have a problem your business can solve or that they are ready to buy from you.
      </p>
      <p className="section-phara font-medium text-slate-800">
        Effective video marketing needs to do more than capture attention. It needs to connect attention, intent, trust, and conversion. That distinction can turn video from a vanity metric into a measurable growth channel.
      </p>
    </section>
  );
}

function SectionViewsVsGrowth() {
  return (
    <Section id="views-vs-growth" title="Why High Video Views Don’t Always Mean Business Growth">
      <p className="section-phara">
        A video view is an engagement signal. A customer is a business outcome. They are not interchangeable.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
          <h4 className="font-primary text-base font-bold text-slate-800 mb-2">Scenario A: Pure Entertainment</h4>
          <p className="text-sm text-slate-600">
            A software company publishes a funny video about workplace productivity and receives <strong>100,000 views</strong>. The content performs well socially, but viewers enjoy the humor without any intent to purchase.
          </p>
        </div>
        <div className="bg-blue-50/40 border border-primary/20 rounded-xl p-5 shadow-sm">
          <h4 className="font-primary text-base font-bold text-primary mb-2">Scenario B: High Intent Solution</h4>
          <p className="text-sm text-slate-600">
            Another video receives <strong>8,000 views</strong> but clearly explains how the company&apos;s software solves a specific operational bottleneck, generating <strong>40 qualified enquiries</strong>.
          </p>
        </div>
      </div>
      <p className="section-phara">
        The second video has fewer views but significantly stronger commercial value. The real question is not: <em>&quot;How many people watched my video?&quot;</em> It is: <em>&quot;What did the right viewers do after watching it?&quot;</em>
      </p>
    </Section>
  );
}

function SectionAttentionVsIntent() {
  return (
    <Section id="attention-vs-intent" title="The Difference Between Attention and Buying Intent">
      <p className="section-phara">
        Attention gets someone to stop scrolling. Intent gives them a reason to continue into your sales funnel. Consider three viewers watching the exact same video:
      </p>
      <div className="space-y-3 my-6">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
          <div>
            <span className="font-bold text-slate-700">Viewer A (Low Value)</span>
            <p className="text-sm text-slate-500">Watches for 5 seconds and scrolls away.</p>
          </div>
          <span className="px-3 py-1 bg-slate-200 text-slate-600 text-xs font-bold rounded-full">Casual</span>
        </div>
        <div className="p-4 bg-blue-50/50 border border-blue-200 rounded-lg flex items-center justify-between">
          <div>
            <span className="font-bold text-blue-900">Viewer B (Medium Value)</span>
            <p className="text-sm text-slate-600">Watches entire video, visits profile, browses website.</p>
          </div>
          <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-bold rounded-full">Interested</span>
        </div>
        <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-lg flex items-center justify-between">
          <div>
            <span className="font-bold text-emerald-900">Viewer C (High Value)</span>
            <p className="text-sm text-slate-600">Watches video, visits product page, downloads case study, requests consultation.</p>
          </div>
          <span className="px-3 py-1 bg-emerald-200 text-emerald-800 text-xs font-bold rounded-full">High Intent</span>
        </div>
      </div>
      <p className="section-phara">
        All three contribute to your view count, but only Viewer C creates direct business revenue. A strong video should explicitly address buyer problems, build trust, and encourage a meaningful next step.
      </p>
    </Section>
  );
}

function SectionSevenReasons() {
  return (
    <Section id="seven-reasons" title="7 Reasons Your Business Videos Get Views but Not Customers">
      <p className="section-phara">
        If your video marketing isn&apos;t generating enquiries or sales, examine these seven core breakdown points:
      </p>

      <SectionH3 id="reason-1" title="1. Your Video Is Optimised for Views, Not Buyers">
        <p className="section-phara">
          Designing videos around algorithm hooks (humour, controversy, trend audio) attracts generic attention rather than target business decision-makers. Shift your strategy from asking <em>&quot;What video will get more views?&quot;</em> to <em>&quot;What video will attract the people most likely to need our solution?&quot;</em>
        </p>
      </SectionH3>

      <SectionH3 id="reason-2" title="2. Your Video Doesn't Clearly Communicate the Problem">
        <p className="section-phara">
          People don&apos;t buy because a company claims its product is &quot;innovative.&quot; They buy because they recognize an urgent problem. Make the problem obvious immediately (e.g., <em>&quot;Your website gets traffic, but why aren&apos;t those visitors becoming enquiries?&quot;</em>).
        </p>
      </SectionH3>

      <SectionH3 id="reason-3" title="3. There Is No Clear Next Step">
        <p className="section-phara">
          A video without a call-to-action creates friction. Your CTA should match the viewer&apos;s stage in the funnel:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li><strong>Awareness:</strong> &quot;Follow us for more practical growth strategies.&quot;</li>
          <li><strong>Consideration:</strong> &quot;Explore our complete performance marketing guide.&quot;</li>
          <li><strong>Decision:</strong> &quot;Book a consultation with our growth team.&quot;</li>
        </ul>
      </SectionH3>

      <SectionH3 id="reason-4" title="4. Video and Landing Page Tell Different Stories">
        <p className="section-phara">
          If your video promises a solution to reduce customer acquisition costs, but the landing page is a generic company homepage, momentum dies. Ensure message consistency from Video → CTA → Landing Page → Lead Form → Sales Follow-up.
        </p>
      </SectionH3>

      <SectionH3 id="reason-5" title="5. You Are Reaching the Wrong Audience">
        <p className="section-phara">
          Viral reach among students or non-buyers offers zero commercial value for a B2B enterprise service. Relevant reach always trumps raw impression volume.
        </p>
      </SectionH3>

      <SectionH3 id="reason-6" title="6. Your Videos Build Awareness but Don't Build Trust">
        <p className="section-phara">
          For high-ticket or complex purchases, viewers need proof before converting. Incorporate customer testimonials, case studies, product demonstrations, client success stories, and data-backed insights.
        </p>
      </SectionH3>

      <SectionH3 id="reason-7" title="7. You Are Measuring the Wrong Metrics">
        <p className="section-phara">
          Evaluating success purely on likes and shares masks performance gaps. Connect video metrics directly to qualified leads, booked calls, customer acquisition cost (CAC), and pipeline revenue.
        </p>
      </SectionH3>
    </Section>
  );
}

function SectionTurnViewsIntoLeads() {
  return (
    <Section id="turn-views-into-leads" title="How to Turn Video Views Into Qualified Leads and Customers">
      <p className="section-phara">
        Transform your video strategy with a structured 5-step implementation framework:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="font-bold text-primary block mb-1">Step 1: Define Business Objective</span>
          <p className="text-sm text-slate-600">Determine if the video is meant for awareness, prospect education, lead capture, or sales enablement.</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="font-bold text-primary block mb-1">Step 2: Identify Audience Intent</span>
          <p className="text-sm text-slate-600">Differentiate between casual top-of-funnel browsers and high-intent buyers looking for specific services.</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="font-bold text-primary block mb-1">Step 3: Build Around Problems</span>
          <p className="text-sm text-slate-600">Develop problem-led content addressing real customer friction points and objections.</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
          <span className="font-bold text-primary block mb-1">Step 4: Create a Conversion Path</span>
          <p className="text-sm text-slate-600">Link every video directly to a relevant service page, case study, lead magnet, or demo booking link.</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl md:col-span-2">
          <span className="font-bold text-primary block mb-1">Step 5: Retarget Engaged Viewers</span>
          <p className="text-sm text-slate-600">Use watch time signals to serve follow-up consideration content and testimonial ads to high-retention viewers.</p>
        </div>
      </div>
    </Section>
  );
}

function SectionModernMarketingFunnel() {
  return (
    <Section id="modern-marketing-funnel" title="Where Video Fits Into the Modern Marketing Funnel">
      <p className="section-phara">
        Video influences every touchpoint of the modern buyer journey when properly structured:
      </p>
      <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-4">Funnel Stage</th>
              <th className="px-6 py-4">Video Type</th>
              <th className="px-6 py-4">Primary Goal</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-bold text-slate-800">Awareness</td>
              <td className="px-6 py-4">Short-form videos, problem-focused clips</td>
              <td className="px-6 py-4 text-primary font-medium">Get Discovered</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-bold text-slate-800">Consideration</td>
              <td className="px-6 py-4">Explainers, feature walk-throughs, FAQs</td>
              <td className="px-6 py-4 text-primary font-medium">Build Understanding</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-bold text-slate-800">Decision</td>
              <td className="px-6 py-4">Testimonials, case studies, ROI demos</td>
              <td className="px-6 py-4 text-primary font-medium">Reduce Risk</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-bold text-slate-800">Conversion</td>
              <td className="px-6 py-4">Landing page videos, offer breakdown clips</td>
              <td className="px-6 py-4 text-primary font-medium">Create Action</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function SectionMetricsToTrack() {
  return (
    <Section id="metrics-to-track" title="The Metrics Businesses Should Actually Track">
      <p className="section-phara">
        Move beyond vanity metrics by measuring performance across the complete conversion funnel:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">1. Attention</p>
          <p className="text-lg font-bold text-slate-800 mt-1">Impressions & Retention</p>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">2. Interest</p>
          <p className="text-lg font-bold text-slate-800 mt-1">Clicks & Profile Visits</p>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">3. Intent</p>
          <p className="text-lg font-bold text-slate-800 mt-1">Landing Page Visits & Leads</p>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">4. Conversion</p>
          <p className="text-lg font-bold text-slate-800 mt-1">Qualified Enquiries & Deals</p>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">5. Efficiency</p>
          <p className="text-lg font-bold text-slate-800 mt-1">CAC, CPL & ROAS</p>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl bg-white">
          <p className="text-xs font-bold text-slate-400 uppercase">6. Growth</p>
          <p className="text-lg font-bold text-slate-800 mt-1">Pipeline & Revenue Impact</p>
        </div>
      </div>
    </Section>
  );
}

function SectionAIVideoContent() {
  return (
    <Section id="ai-video-content" title="How AI Video Content Can Help Turn Views Into Customers">
      <p className="section-phara">
        Artificial intelligence is transforming video creation by enabling teams to produce, adapt, and personalize video content at scale. However, automation alone does not guarantee conversion—strategy remains paramount.
      </p>
      <p className="section-phara">
        AI-assisted workflows excel at generating tailored variations for specific audience segments, creating multi-language versions, rapidly producing customer FAQ explainers, and testing different video hooks. When AI video production is integrated with SEO, landing pages, and remarketing, it turns high view counts into consistent pipeline growth.
      </p>
    </Section>
  );
}

function SectionAyatiworksGrowthEngine() {
  return (
    <Section id="ayatiworks-growth-engine" title="How Ayatiworks Approaches Video as a Growth Engine">
      <p className="section-phara">
        Video marketing should not begin with a camera—it should begin with a business objective.
      </p>
      <p className="section-phara">
        At <strong>Ayatiworks Technologies LLP</strong>, we treat video as an interconnected growth asset. Our video production and distribution strategy bridges strategy, messaging, SEO, paid ads, web design, and conversion rate optimization:
      </p>
      <div className="my-6 bg-slate-900 text-white p-6 rounded-xl font-mono text-center text-sm leading-relaxed overflow-x-auto">
        Strategy → Audience → Script → Video → Distribution → Landing Page → Retargeting → Conversion → Measurement
      </div>
    </Section>
  );
}

function SectionConclusion() {
  return (
    <Section id="conclusion" title="Conclusion">
      <p className="section-phara">
        Getting views is only the beginning of successful business video marketing. A video can attract thousands of viewers, but if those viewers don&apos;t become interested prospects, qualified leads, or customers, the real business opportunity is being missed.
      </p>
      <p className="section-phara">
        If your business videos are getting views but not customers, look beyond the view count dashboard. Examine your audience targeting, message clarity, calls-to-action, landing pages, and full funnel metrics.
      </p>
      <div className="my-8 rounded-xl bg-slate-900 text-white p-8 shadow-lg">
        <h4 className="font-primary text-2xl font-bold mb-3 text-white">Turn Video Attention into Measurable Business Revenue</h4>
        <p className="font-secondary text-base text-slate-300 mb-6 leading-relaxed">
          At <strong>Ayatiworks Technologies LLP</strong>, we help businesses build performance-driven video marketing and integrated digital strategies that turn views into qualified leads and sales.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-primary text-white font-primary font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Talk to Our Video Strategy Team
        </Link>
      </div>
    </Section>
  );
}

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage131() {
  const post = POSTS.find((p) => p.id === 131) || POSTS[0];
  const relatedPosts = getRelatedRecentPosts({
    currentPostId: post.id,
    category: post.category,
    limit: 3,
  });

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.ayatiworks.com${post.slug}`,
        headline: post.seoTitle || post.title,
        description: post.seoDescription || post.deck,
        image: {
          "@id": `https://www.ayatiworks.com${post.slug}#primaryimage`,
        },
        author: {
          "@type": "Person",
          name: "Karthick Raja",
        },
        publisher: {
          "@type": "Organization",
          name: "Ayatiworks",
          logo: {
            "@type": "ImageObject",
            url: "https://www.ayatiworks.com/logo.png",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://www.ayatiworks.com${post.slug}`,
        },
        datePublished: "2026-08-10",
        dateModified: "2026-08-10",
        keywords: [
          "Video Marketing ROI",
          "Convert Video Views to Customers",
          "Business Video Marketing Strategy",
          "Video Funnel Optimization",
          "AI Video Marketing",
          "Ayatiworks Video Growth",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="blog-131-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-10">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)}
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
          title={[post.bannerTitle]}
          author={{
            name: "Karthick Raja",
            slug: "karthick-raja",
            role: "Jr Content Writer",
            avatar: "/assets/teams/karthik.jpeg",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      <header className="border-b border-slate-100 section-container bg-white mt-10">
        <div className="mx-auto px-4 sm:px-6 py-12">
          <h1 className="mx-auto text-center section-title font-primary text-4xl sm:text-5xl leading-tight">
            <span className="text-primary">{post.title}</span>
          </h1>
        </div>
      </header>

      <section className="mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)_280px] max-w-[1400px]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        <article className="prose prose-slate max-w-none md:prose-xl font-secondary">
          <Intro />
          <SectionViewsVsGrowth />
          <SectionAttentionVsIntent />
          <SectionSevenReasons />
          <SectionTurnViewsIntoLeads />
          <SectionModernMarketingFunnel />
          <SectionMetricsToTrack />
          <SectionAIVideoContent />
          <SectionAyatiworksGrowthEngine />
          <SectionConclusion />

          <Section id="blog-faqs" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <RightSidebarCategories />
        </aside>
      </section>

      <section className="mx-auto section-container px-4 sm:px-6 pb-20 mt-10">
        <RelatedPostsFromData posts={relatedPosts} />
      </section>
    </main>
  );
}
