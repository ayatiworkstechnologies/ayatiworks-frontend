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

/* ---------- HELPERS & CONSTANTS ---------- */

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};

export const tocItems = [
  { id: "intro", level: 1, label: "Why Digital Marketing Myths Are More Dangerous Than Ever" },
  { id: "outdated-advice", level: 1, label: "The Hidden Cost of Following Outdated Marketing Advice" },
  { id: "myth-1", level: 1, label: "Myth #1: More Website Traffic Automatically Means More Sales" },
  { id: "myth-2", level: 1, label: "Myth #2: Social Media Success Is Only About Posting Every Day" },
  { id: "myth-3", level: 1, label: "Myth #3: SEO Delivers Instant Results" },
  { id: "myth-4", level: 1, label: "Myth #4: Paid Ads Can Replace Branding" },
  { id: "growth-drivers", level: 1, label: "What's Really Driving Business Growth in 2026?" },
  { id: "key-takeaways", level: 1, label: "Key Takeaways" },
  { id: "conclusion", level: 1, label: "Conclusion" },
];

const FAQS_DATA = [
  {
    q: "1. What is the biggest digital marketing myth?",
    a: "The belief that more traffic automatically leads to more sales is one of the most expensive myths. Without qualified visitors and effective conversion strategies, high traffic alone delivers little business value.",
  },
  {
    q: "2. Does SEO still work in 2026?",
    a: "Yes. SEO remains one of the most effective long-term digital marketing investments. However, success now depends on creating helpful, authoritative content, delivering excellent user experiences, and aligning with search intent rather than simply targeting keywords.",
  },
  {
    q: "3. Should businesses rely only on paid advertising?",
    a: "No. Paid advertising is valuable for generating immediate visibility, but sustainable growth requires branding, SEO, content marketing, and customer retention working together.",
  },
  {
    q: "4. How often should businesses post on social media?",
    a: "There is no universal posting frequency. It's more effective to publish high-quality, audience-focused content consistently than to post frequently without providing value.",
  },
  {
    q: "5. Why is branding important in digital marketing?",
    a: "Branding builds trust, recognition, and credibility. Strong brands typically achieve better advertising performance, higher customer retention, and increased customer lifetime value.",
  },
  {
    q: "6. What metrics should businesses focus on?",
    a: "Rather than vanity metrics such as likes or page views, prioritize: conversion rate, customer acquisition cost (CAC), return on investment (ROI), customer lifetime value (CLV), lead quality, and revenue growth.",
  },
  {
    q: "7. How can businesses avoid costly marketing mistakes?",
    a: "Develop a strategy based on customer needs, data analysis, continuous optimization, and long term objectives instead of relying on popular marketing myths or trends.",
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

function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-phara">
        Every business wants better visibility, more customers, and higher revenue. Yet despite investing in websites, advertising, SEO, social media, and content creation, many companies still struggle to achieve sustainable growth.
      </p>
      <p className="section-phara">
        The problem often isn't a lack of effort—it's following outdated marketing advice that no longer aligns with how customers search, evaluate, and buy today.
      </p>
      <p className="section-phara">
        Digital marketing has evolved dramatically over the past few years. Artificial intelligence is changing search behavior, consumers expect personalized experiences, and competition continues to increase across every industry. Strategies that worked five years ago or even two years ago can now waste both time and budget if they're applied without considering today's market realities.
      </p>
      <p className="section-phara">
        Many businesses unknowingly base important marketing decisions on common myths. These misconceptions often lead to ineffective campaigns, missed opportunities, lower conversion rates, and declining returns on investment.
      </p>
      <p className="section-phara font-medium text-slate-800">
        The good news? Once you recognize these myths, you can replace them with strategies grounded in customer behavior, data, and long-term business objectives.
      </p>
    </section>
  );
}

function SectionOutdatedAdvice() {
  return (
    <Section id="outdated-advice" title="The Hidden Cost of Following Outdated Marketing Advice">
      <p className="section-phara">
        Marketing myths rarely fail overnight. Instead, they slowly drain your budget while giving the illusion that progress is being made.
      </p>
      <p className="section-phara">
        Imagine two businesses operating in the same industry:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h4 className="font-primary text-base font-bold text-slate-800 mb-2">Business A (Outdated Approach)</h4>
          <p className="section-phara text-sm mt-0">
            Focuses solely on increasing website traffic. They publish content every day, run general paid advertisements, and celebrate growing visitor numbers, without auditing conversions.
          </p>
        </div>
        <div className="bg-blue-50/40 border border-primary/20 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h4 className="font-primary text-base font-bold text-primary mb-2">Business B (Strategic Approach)</h4>
          <p className="section-phara text-sm mt-0">
            Spends time understanding customer intent, improving website experience, strengthening its brand, optimizing conversions, and creating valuable content that answers real customer questions.
          </p>
        </div>
      </div>
      <p className="section-phara">
        At first glance, the first business appears more successful because of impressive traffic metrics. However, over time, the second business generates more qualified leads, builds stronger customer relationships, and achieves significantly higher profitability.
      </p>
      <p className="section-phara font-semibold">
        The difference isn't effort—it's strategy.
      </p>

      <SectionH3 id="why-myths-persist" title="Why Businesses Continue Believing Marketing Myths">
        <p className="section-phara">
          Several factors contribute to these misconceptions:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>Advice based on outdated search algorithms</li>
          <li>Oversimplified marketing tips shared on social media platforms</li>
          <li>Chasing vanity metrics (likes, impressions) instead of tangible business outcomes</li>
          <li>Copying competitors blindly without understanding their core strategy</li>
          <li>Expecting immediate results from long-term investments (like SEO)</li>
        </ul>
        <p className="section-phara mt-4">
          As digital platforms evolve, businesses must adapt their approach instead of relying on assumptions that no longer reflect current customer behavior.
        </p>
      </SectionH3>

      <SectionH3 id="common-symptoms" title="Common Symptoms of Myth-Driven Marketing">
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-4">Marketing Activity</th>
                <th className="px-6 py-4">Hidden Problem</th>
                <th className="px-6 py-4">Business Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Increasing website traffic</td>
                <td className="px-6 py-4">Poor conversion optimization</td>
                <td className="px-6 py-4 text-red-600 font-medium">Low sales despite high visits</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Posting daily on social media</td>
                <td className="px-6 py-4">Low engagement and weak messaging</td>
                <td className="px-6 py-4 text-red-600 font-medium">Reduced brand impact</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Running paid advertisements continuously</td>
                <td className="px-6 py-4">Weak brand positioning</td>
                <td className="px-6 py-4 text-red-600 font-medium">Rising acquisition costs</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Publishing content without strategy</td>
                <td className="px-6 py-4">Limited organic visibility</td>
                <td className="px-6 py-4 text-red-600 font-medium">Poor SEO performance</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Focusing only on rankings</td>
                <td className="px-6 py-4">Ignoring user experience</td>
                <td className="px-6 py-4 text-red-600 font-medium">Lower conversions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionH3>

      <div className="my-6 border-l-4 border-primary bg-blue-50/50 p-5 rounded-r-xl">
        <p className="font-primary text-base font-bold text-primary uppercase tracking-wide">Expert Tip</p>
        <p className="mt-1 font-secondary text-base text-slate-700 leading-relaxed">
          Instead of asking, <strong>"How can we get more traffic?"</strong> ask, <strong>"How can we attract visitors who are most likely to become customers?"</strong>
        </p>
      </div>
    </Section>
  );
}

function SectionMyth1() {
  return (
    <Section id="myth-1" title="Myth #1: More Website Traffic Automatically Means More Sales">
      <p className="section-phara">
        One of the oldest misconceptions in digital marketing is that higher website traffic naturally leads to increased revenue.
      </p>
      <p className="section-phara">
        While traffic is important, it represents only one stage of the customer journey. A website attracting 100,000 visitors each month isn't necessarily more successful than one attracting 10,000 highly qualified visitors.
      </p>

      <SectionH3 id="real-goal-qualified" title="The Real Goal Isn't Traffic—It's Qualified Traffic">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 relative">
          <div className="border border-slate-100 rounded-xl p-5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] bg-white text-center">
            <h5 className="font-primary text-lg font-extrabold text-slate-700 font-bold">Company A</h5>
            <div className="mt-4 space-y-2">
              <p className="text-3xl font-extrabold text-slate-800 font-bold">100,000</p>
              <p className="text-xs font-semibold uppercase text-slate-400">Monthly Visitors</p>
              <div className="h-px bg-slate-100 my-3" />
              <p className="text-xl font-bold text-red-500 font-bold">0.4%</p>
              <p className="text-xs text-slate-400">Conversion Rate</p>
              <div className="h-px bg-slate-100 my-3" />
              <p className="text-2xl font-bold text-slate-700 font-bold">400</p>
              <p className="text-xs text-slate-400">Customers Generated</p>
            </div>
          </div>
          <div className="border-2 border-primary/20 rounded-xl p-5 shadow-[0_8px_20px_rgba(10,73,145,0.08)] bg-blue-50/20 text-center relative overflow-hidden">
            <div className="absolute -top-1 right-0 rounded-bl-lg bg-primary px-3 py-1 text-center text-[10px] font-semibold text-white uppercase tracking-wider">
              More Profit
            </div>
            <h5 className="font-primary text-lg font-extrabold text-primary mt-2 font-bold">Company B</h5>
            <div className="mt-4 space-y-2">
              <p className="text-3xl font-extrabold text-primary font-bold">15,000</p>
              <p className="text-xs font-semibold uppercase text-slate-400">Monthly Visitors</p>
              <div className="h-px bg-slate-100 my-3" />
              <p className="text-xl font-bold text-green-600 font-bold">5.0%</p>
              <p className="text-xs text-slate-400">Conversion Rate</p>
              <div className="h-px bg-slate-100 my-3" />
              <p className="text-2xl font-bold text-primary font-bold">750</p>
              <p className="text-xs text-slate-400">Customers Generated</p>
            </div>
          </div>
        </div>
        <p className="section-phara">
          Despite attracting far fewer visitors, Company B generates nearly twice as many customers because its audience is more relevant and its website converts effectively.
        </p>
      </SectionH3>

      <SectionH3 id="what-drives-conversions" title="What Really Drives Conversions?">
        <p className="section-phara">
          Businesses that consistently achieve strong results focus on several interconnected factors:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
            <h6 className="font-primary font-bold text-slate-800 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Search Intent
            </h6>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Visitors should arrive because your content genuinely answers their questions or solves their problems—not simply because it ranks for broad, irrelevant keywords.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
            <h6 className="font-primary font-bold text-slate-800 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> User Experience
            </h6>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              A fast-loading website, intuitive navigation, and clear calls to action encourage visitors to stay longer and take meaningful actions.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
            <h6 className="font-primary font-bold text-slate-800 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Trust Signals
            </h6>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Modern consumers evaluate credibility before buying. Reviews, testimonials, certifications, case studies, and transparent information all contribute to higher conversions.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5">
            <h6 className="font-primary font-bold text-slate-800 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> Valuable Content
            </h6>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">
              Educational articles, comparison guides, industry insights, and practical resources position your business as a trusted authority rather than just another provider.
            </p>
          </div>
        </div>
      </SectionH3>

      <SectionH3 id="quality-vs-quantity-traffic" title="Quality vs. Quantity">
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-4">High Traffic Strategy</th>
                <th className="px-6 py-4">High Intent Strategy</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4">Focus on pageviews</td>
                <td className="px-6 py-4 font-semibold text-primary">Focus on conversions</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4">Broad keywords</td>
                <td className="px-6 py-4 font-semibold text-primary">Customer-focused keywords</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4">Generic content</td>
                <td className="px-6 py-4 font-semibold text-primary">Problem-solving content</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4">Vanity metrics</td>
                <td className="px-6 py-4 font-semibold text-primary">Revenue metrics</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4">More visitors</td>
                <td className="px-6 py-4 font-semibold text-primary">Better customers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionH3>

      <div className="my-6 rounded-xl border border-red-200 bg-red-50/20 p-5">
        <p className="font-primary text-base font-bold text-red-700 uppercase tracking-wide">Common Mistake</p>
        <p className="mt-1 font-secondary text-sm text-slate-700 leading-relaxed">
          Many businesses celebrate reaching 50,000 monthly visitors without measuring how many of them actually become customers. Traffic without conversions is similar to having a busy retail store where nobody makes a purchase. The ultimate goal should always be profitable growth, not impressive analytics dashboards.
        </p>
      </div>

      <div className="my-6 rounded-xl border border-blue-200 bg-blue-50/20 p-5">
        <p className="font-primary text-base font-bold text-primary uppercase tracking-wide">Business Insight</p>
        <p className="mt-1 font-secondary text-sm text-slate-700 leading-relaxed">
          Modern SEO isn't about attracting everyone. It's about becoming the best answer for the right audience. Businesses that understand customer intent consistently outperform competitors chasing traffic alone.
        </p>
      </div>
    </Section>
  );
}

function SectionMyth2() {
  return (
    <Section id="myth-2" title="Myth #2: Social Media Success Is Only About Posting Every Day">
      <p className="section-phara">
        A common belief among businesses is that success on social media comes from posting as frequently as possible. This misconception often leads to a content calendar filled with repetitive, low-value posts that generate little engagement and even less business impact.
      </p>
      <p className="section-phara font-semibold text-slate-800">
        The reality is that social media platforms reward quality, relevance, and engagement, not just consistency.
      </p>
      <p className="section-phara">
        Imagine two brands:
      </p>
      <ul className="ml-6 list-disc space-y-2 text-base text-slate-700 font-secondary my-4">
        <li><strong>Brand A</strong> publishes three generic promotional posts every day.</li>
        <li><strong>Brand B</strong> publishes three insightful, audience-focused posts each week, encourages conversations, shares customer stories, and responds actively to comments.</li>
      </ul>
      <p className="section-phara">
        After six months, Brand B is far more likely to have built trust, loyalty, and qualified leads because its content creates genuine, lasting value for the user.
      </p>

      <SectionH3 id="posting-more-flaws" title="Why Posting More Doesn't Always Mean Better Results">
        <p className="section-phara">
          Every post competes for attention in an increasingly crowded feed. If your content doesn't educate, entertain, or solve a problem, it quickly disappears.
        </p>
        <p className="section-phara">
          Businesses that prioritize quantity over quality often experience:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>Declining engagement rates (likes, comments, shares)</li>
          <li>Reduced organic reach due to algorithm throttling</li>
          <li>Content fatigue among existing followers</li>
          <li>Lower brand credibility and perceived authority</li>
          <li>Wasted content creation budgets and resources</li>
        </ul>
        <p className="section-phara mt-4">
          Instead of asking, <em>"How many times should we post?"</em>, ask: <strong>"How can every post provide tangible value to our audience?"</strong>
        </p>
      </SectionH3>

      <SectionH3 id="social-content-types" title="What High-Performing Social Content Looks Like">
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-4">Content Type</th>
                <th className="px-6 py-4">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Educational posts</td>
                <td className="px-6 py-4">Build expertise and trust</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Behind-the-scenes content</td>
                <td className="px-6 py-4">Humanize the brand</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Customer success stories</td>
                <td className="px-6 py-4">Provide social proof</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Industry insights</td>
                <td className="px-6 py-4">Position thought leadership</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Interactive polls and Q&A</td>
                <td className="px-6 py-4">Increase engagement</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">Short-form videos</td>
                <td className="px-6 py-4">Improve reach and retention</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionH3>

      <div className="my-6 border-l-4 border-primary bg-blue-50/50 p-5 rounded-r-xl">
        <p className="font-primary text-lg font-bold text-primary uppercase tracking-wide">Expert Tip</p>
        <p className="mt-1 font-secondary text-base text-slate-700 leading-relaxed">
          One valuable post that solves a customer's specific problem often outperforms ten generic promotional posts asking people to "Buy Now."
        </p>
      </div>
    </Section>
  );
}

function SectionMyth3() {
  return (
    <Section id="myth-3" title="Myth #3: SEO Delivers Instant Results">
      <p className="section-phara">
        SEO is one of the most misunderstood areas of digital marketing.
      </p>
      <p className="section-phara">
        Many businesses expect to publish a few blog posts, optimize some keywords, and appear on the first page of search results within weeks. When that doesn't happen, they assume SEO doesn't work.
      </p>
      <p className="section-phara font-semibold text-slate-800">
        The truth is that SEO is a long-term growth strategy, not a quick, one-off marketing campaign.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-emerald-50/30 border border-emerald-200 rounded-xl p-5 shadow-sm">
          <h5 className="font-primary text-base font-bold text-emerald-800 flex items-center gap-2">
            🌱 SEO is Like Planting a Tree
          </h5>
          <p className="text-sm text-slate-700 mt-2 leading-relaxed">
            You invest time in preparing the soil, watering it consistently, and nurturing its growth. The results aren't immediate, but once the tree matures, it continues providing shade and fruit (organic value) for years.
          </p>
        </div>
        <div className="bg-amber-50/30 border border-amber-200 rounded-xl p-5 shadow-sm">
          <h5 className="font-primary text-base font-bold text-amber-800 flex items-center gap-2">
            ⛺ Paid Ads are Like Renting a Billboard
          </h5>
          <p className="text-sm text-slate-700 mt-2 leading-relaxed">
            You get instant visibility as long as you pay the rent. But the moment your budget stops, the billboard is taken down, and your visibility drops to zero.
          </p>
        </div>
      </div>

      <SectionH3 id="why-seo-takes-time" title="Why SEO Takes Time">
        <p className="section-phara">
          Search engines evaluate hundreds of ranking signals before positioning a website on the first page. These include:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Content Quality</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Topical Authority</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Website Speed</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Mobile Usability</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Internal Linking</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Backlink Quality</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">User Engagement</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg text-center border border-slate-100">
            <p className="font-primary font-bold text-primary text-sm">Intent Fit</p>
          </div>
        </div>
        <p className="section-phara">
          Building authority requires consistency. Businesses that commit to SEO often see stronger, more sustainable growth than those relying solely on short-term campaigns.
        </p>
      </SectionH3>

      <div className="my-6 rounded-xl border border-red-200 bg-red-50/20 p-5">
        <p className="font-primary text-base font-bold text-red-700 uppercase tracking-wide">Common Mistake</p>
        <p className="mt-1 font-secondary text-sm text-slate-700 leading-relaxed">
          Businesses frequently abandon SEO after two or three months because they haven't reached the first page yet. In reality, many of the highest-performing websites have invested consistently in content, technical optimization, and authority building for years. Patience, combined with a clear strategy, delivers far greater returns than chasing short-lived ranking spikes.
        </p>
      </div>
    </Section>
  );
}

function SectionMyth4() {
  return (
    <Section id="myth-4" title="Myth #4: Paid Ads Can Replace Branding">
      <p className="section-phara">
        Many companies believe that increasing advertising budgets is enough to grow their business.
      </p>
      <p className="section-phara">
        While paid advertising can generate leads quickly, it cannot replace a strong brand.
      </p>
      <p className="section-phara font-semibold text-slate-800">
        Consider two businesses offering identical services:
      </p>
      <ul className="ml-6 list-disc space-y-1 text-base text-slate-700 font-secondary my-4">
        <li>The first business is relatively unknown and relies entirely on transactional paid ads.</li>
        <li>The second business has built trust through consistent branding, helpful content, positive customer experiences, and a recognizable identity.</li>
      </ul>
      <p className="section-phara">
        When both companies launch advertising campaigns, the trusted brand almost always achieves:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-center">
          <p className="font-primary font-bold text-base text-primary">Higher CTR</p>
          <p className="text-[10px] text-slate-500 mt-1">Click-through rates</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-center">
          <p className="font-primary font-bold text-base text-primary">Better CR</p>
          <p className="text-[10px] text-slate-500 mt-1">Conversion rates</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-center">
          <p className="font-primary font-bold text-base text-primary">Lower CAC</p>
          <p className="text-[10px] text-slate-500 mt-1">Cost per acquisition</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-center">
          <p className="font-primary font-bold text-base text-primary">Greater Loyalty</p>
          <p className="text-[10px] text-slate-500 mt-1">Repeat business</p>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-center">
          <p className="font-primary font-bold text-base text-primary">Higher LTV</p>
          <p className="text-[10px] text-slate-500 mt-1">Lifetime customer value</p>
        </div>
      </div>
      <p className="section-phara font-bold text-slate-800 text-center text-lg my-6">
        People don't just buy products. They buy confidence.
      </p>

      <SectionH3 id="branding-strengthens-channels" title="Branding Makes Every Marketing Channel Stronger">
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-4">Without Strong Branding</th>
                <th className="px-6 py-4">With Strong Branding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-red-600 font-medium">Higher advertising costs</td>
                <td className="px-6 py-4 text-green-600 font-bold">Better ROI</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-red-600 font-medium">Lower trust</td>
                <td className="px-6 py-4 text-green-600 font-bold">Greater credibility</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-red-600 font-medium">Difficult customer retention</td>
                <td className="px-6 py-4 text-green-600 font-bold">Loyal customers</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-red-600 font-medium">Price competition</td>
                <td className="px-6 py-4 text-green-600 font-bold">Value-based pricing</td>
              </tr>
              <tr className="hover:bg-slate-50/50">
                <td className="px-6 py-4 text-red-600 font-medium">Short-term growth</td>
                <td className="px-6 py-4 text-green-600 font-bold">Sustainable growth</td>
              </tr>
            </tbody>
          </table>
        </div>
      </SectionH3>

      <SectionH3 id="more-than-logo" title="Branding Is More Than a Logo">
        <p className="section-phara">
          A brand is the complete experience customers associate with your business. It includes:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Visual Identity</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Brand Voice</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Customer Service</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Website Experience</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Messaging Consistency</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Reputation</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Reviews & Proof</div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center font-semibold text-primary text-sm">Core Expertise</div>
        </div>
        <p className="section-phara">
          When these elements align, marketing becomes significantly more effective because customers already trust your business before they even make direct contact.
        </p>
      </SectionH3>

      <div className="my-6 rounded-xl border border-blue-200 bg-blue-50/20 p-5">
        <p className="font-primary text-base font-bold text-primary uppercase tracking-wide">Business Insight</p>
        <p className="mt-1 font-secondary text-sm text-slate-700 leading-relaxed">
          Advertising gets attention. Branding earns trust. Sustainable business growth requires both.
        </p>
      </div>
    </Section>
  );
}

function SectionGrowthDrivers() {
  return (
    <Section id="growth-drivers" title="What's Really Driving Business Growth in 2026?">
      <p className="section-phara">
        Businesses achieving consistent growth aren't chasing every fleeting trend. Instead, they build integrated marketing strategies that combine multiple disciplines.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 shadow-sm">
        <h4 className="font-primary text-xl font-bold text-slate-800 mb-4 text-center">A Modern Digital Marketing Framework</h4>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Build a recognizable brand</h5>
              <p className="text-sm text-slate-600 mt-0.5">Establish your unique values, positioning, voice, and design system first.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Create content that answers customer questions</h5>
              <p className="text-sm text-slate-600 mt-0.5">Focus on user queries, solving real problems, and satisfying search intent.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Optimize your website for user experience (UX)</h5>
              <p className="text-sm text-slate-600 mt-0.5">Deliver fast page speeds, clean responsive layouts, and simple navigation.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">4</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Invest in long-term SEO</h5>
              <p className="text-sm text-slate-600 mt-0.5">Build content hubs, earn authority, and structure data to align with search engines.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">5</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Use paid advertising strategically</h5>
              <p className="text-sm text-slate-600 mt-0.5">Target high-intent keywords and utilize remarketing to capture conversion opportunities.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">6</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Measure meaningful business outcomes</h5>
              <p className="text-sm text-slate-600 mt-0.5">Track conversions, ROI, and customer lifetime value (LTV) rather than clicks or impressions.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">7</span>
            <div>
              <h5 className="font-primary font-bold text-slate-800 text-base">Continuously improve based on data</h5>
              <p className="text-sm text-slate-600 mt-0.5">Test design variations, refine copy, and optimize channels periodically.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="section-phara mt-4">
        This balanced approach creates an integrated marketing ecosystem where every channel supports and strengthens the others.
      </p>
    </Section>
  );
}

function SectionKeyTakeaways() {
  return (
    <Section id="key-takeaways" title="Key Takeaways">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
        <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:-translate-y-1 transition duration-200">
          <h5 className="font-primary font-bold text-primary mb-2 text-base font-bold">Myth #1: Traffic = Sales</h5>
          <p className="text-sm text-slate-600 mt-0 leading-relaxed">
            <strong>Reality:</strong> Shift focus from pageviews to conversion rate optimization (CRO) and qualified search intent.
          </p>
        </div>
        <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:-translate-y-1 transition duration-200">
          <h5 className="font-primary font-bold text-primary mb-2 text-base font-bold">Myth #2: Post Every Day</h5>
          <p className="text-sm text-slate-600 mt-0 leading-relaxed">
            <strong>Reality:</strong> Prioritize audience-focused, high-value, and engaging content over mindless volume.
          </p>
        </div>
        <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:-translate-y-1 transition duration-200">
          <h5 className="font-primary font-bold text-primary mb-2 text-base font-bold">Myth #3: Instant SEO</h5>
          <p className="text-sm text-slate-600 mt-0 leading-relaxed">
            <strong>Reality:</strong> Commit to consistency, technical excellence, and topical authority to build a long-term asset.
          </p>
        </div>
        <div className="border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:-translate-y-1 transition duration-200">
          <h5 className="font-primary font-bold text-primary mb-2 text-base font-bold">Myth #4: Ads Replace Branding</h5>
          <p className="text-sm text-slate-600 mt-0 leading-relaxed">
            <strong>Reality:</strong> Combine performance performance ads with strong branding to build trust and lower customer acquisition costs.
          </p>
        </div>
      </div>
    </Section>
  );
}

function SectionConclusion() {
  return (
    <Section id="conclusion" title="Conclusion">
      <p className="section-phara">
        Digital marketing is no longer about chasing every trend or investing heavily in a single channel. True business growth comes from building a well-rounded strategy where branding, SEO, content marketing, social media, and paid advertising work together to create meaningful customer experiences and measurable results.
      </p>
      <p className="section-phara">
        The myths discussed in this article often lead businesses to waste valuable time, budget, and opportunities. By shifting your focus from vanity metrics to customer intent, long-term value, and data-driven decision-making, you can create a marketing strategy that not only attracts attention but also builds trust, increases conversions, and drives sustainable growth.
      </p>
      <p className="section-phara">
        As digital marketing continues to evolve, businesses that embrace innovation, adapt to changing consumer behavior, and invest in integrated marketing strategies will be better positioned to outperform their competitors in 2026 and beyond.
      </p>
      <p className="section-phara font-semibold text-slate-800">
        If you're looking to strengthen your brand, improve your online visibility, generate high-quality leads, or develop a results-driven digital marketing strategy, Ayatiworks Technologies LLP is here to help. From branding and website development to SEO, performance marketing, content marketing, and social media management, our team delivers tailored digital solutions designed to help your business grow with confidence.
      </p>
    </Section>
  );
}

function WhatsInside({ items }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id || "");
  useEffect(() => {
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
  useEffect(() => {
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
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start text-xs font-semibold">
      <nav
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
        aria-label="Table of contents"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800">
          Table of Contents:
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
                      ? "bg-slate-50 text-primary font-primary font-bold"
                      : "text-slate-700 font-secondary hover:bg-slate-50 hover:text-secondary",
                    isMain ? "text-[14px]" : "text-[12.5px]",
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

function SplitHeroBanner({
  href = "#",
  imageSrc,
  imageAlt,
  category,
  title,
  subline,
  ctaname,
  ctahref,
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
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)]">
        {/* Left: Image */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${shareTitle}`}
            className="block h-full"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <Image
                width={800}
                height={800}
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

            <h2 className="mt-4 section-title text-left leading-[1.12] text-white text-3xl font-bold">
              {Array.isArray(title)
                ? title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
                : title}
            </h2>

            {subline && (
              <p className="mt-3 text-base font-secondary text-slate-100/90 leading-relaxed">
                {subline}
              </p>
            )}

            {ctaname && ctahref && (
              <div className="mt-6">
                <Link
                  href={ctahref}
                  className="inline-flex items-center rounded-full bg-secondary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
                >
                  {ctaname}
                </Link>
              </div>
            )}
          </div>

          {/* BOTTOM META - aligned row: author | meta | share */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-1 flex-wrap">
              {/* Author */}
              <Link
                href={`/author/${author.slug}`}
                aria-label={`View ${author.name}'s author page`}
                className="relative z-[1] block rounded-md transition hover:opacity-95"
              >
                <div className="flex items-center gap-3">
                  <Image
                    width={800}
                    height={800}
                    src={author.avatar}
                    alt={author.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <div className="font-primary text-base hover:underline leading-tight font-bold">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-xs font-secondary text-slate-300/85 truncate">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {/* Vertical divider */}
              <Bar />

              {/* Meta */}
              <div className="text-xs text-slate-100/90">
                <div className="font-primary text-sm font-bold">{updatedAt}</div>
                <div className="font-secondary text-[10px] text-slate-300">Last updated</div>
              </div>

              <div
                className="hidden sm:block h-6 w-px bg-white/20 mx-3"
                aria-hidden="true"
              />

              <div className="text-xs text-slate-100/90">
                <div className="font-primary font-bold text-sm">
                  {readMins} Min
                </div>
                <div className="font-secondary text-[10px] text-slate-300">Read</div>
              </div>
            </div>

            {/* Share buttons placed on the right of meta - LARGE CTA */}
            <div className="z-[2] flex items-center">
              <ShareButtons
                slug={buildHref(post?.slug)}
                post={post}
                title={shareTitle}
                variant="large"
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

  React.useEffect(() => {
    if (url) {
      setAbsoluteUrl(url);
      return;
    }
    const base =
      domain || (typeof window !== "undefined" ? window.location.origin : "");
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
    } catch (e) {
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
          "absolute right-0 mt-2 w-auto rounded-md border bg-white shadow-lg ring-1 ring-black/5 transition-all z-10",
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
                "absolute -bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs shadow-sm z-20",
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

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage128() {
  const post = POSTS.find((p) => p.id === 128) || POSTS[0];
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
        datePublished: "2026-07-24",
        dateModified: "2026-07-24",
        keywords: [
          "digital marketing myths",
          "marketing myths 2026",
          "website traffic conversions",
          "social media frequency myth",
          "instant SEO myth",
          "paid ads vs branding",
          "digital marketing success framework",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="blog-128-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-10">
        <SplitHeroBanner
          href={post.slug}
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
          title={post.title}
          subline={post.subline}
          ctaname="Talk to a Digital Marketing Expert"
          ctahref="/contact-us"
          author={{
            name: "Karthick Raja",
            role: "Jr Content Writer",
            avatar: "http://89.167.92.220:8088/assets/teams/male.png",
            slug: "karthick-raja",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
          post={post}
        />
      </section>

      <section className="mx-auto section-container grid grid-cols-1 gap-12 px-4 py-12 lg:grid-cols-[20%_52%_20%] lg:gap-16 sm:px-6">
        <WhatsInside items={tocItems} />

        <article className="prose prose-lg max-w-none text-slate-700 font-secondary mt-0 w-full min-w-0">
          <Intro />
          <SectionOutdatedAdvice />
          <SectionMyth1 />
          <SectionMyth2 />
          <SectionMyth3 />
          <SectionMyth4 />
          <SectionGrowthDrivers />
          <SectionKeyTakeaways />
          <SectionConclusion />

          <Section id="blog-faqs" title="Frequently Asked Questions">
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
