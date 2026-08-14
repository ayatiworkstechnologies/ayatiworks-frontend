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
  { id: "intro", level: 1, label: "Why Organic Visibility Wins" },
  { id: "why-youtube-seo", level: 1, label: "Why YouTube SEO Matters More Than Ever" },
  { id: "evolution-2026", level: 1, label: "The Evolution of YouTube SEO in 2026" },
  { id: "why-indian-brands-win", level: 1, label: "Why Indian Brands Are Winning Organically" },
  { id: "seven-pillars", level: 1, label: "The 7 Pillars of Modern YouTube SEO" },
  { id: "common-mistakes", level: 1, label: "Common YouTube SEO Mistakes" },
  { id: "measuring-success", level: 1, label: "Measuring Success Beyond Views" },
  { id: "future-youtube-seo", level: 1, label: "The Future of YouTube SEO" },
  { id: "key-takeaways", level: 1, label: "Key Takeaways" },
  { id: "blog-faqs", level: 1, label: "Frequently Asked Questions" },
  { id: "conclusion", level: 1, label: "Conclusion" },
];

const FAQS_DATA = [
  {
    q: "1. What is YouTube SEO?",
    a: "YouTube SEO is the process of optimizing videos to improve their visibility in YouTube search, recommendations, Google search results, and AI-powered discovery.",
  },
  {
    q: "2. Can businesses rank videos without paid ads?",
    a: "Yes. By consistently creating valuable, search-focused content with strong audience engagement, businesses can achieve sustainable organic rankings.",
  },
  {
    q: "3. Are YouTube tags still important?",
    a: "Tags provide additional context but are far less influential than content quality, titles, thumbnails, viewer retention, and engagement.",
  },
  {
    q: "4. How often should businesses upload videos?",
    a: "Consistency matters more than frequency. A realistic publishing schedule with high-quality content is generally more effective than frequent low-value uploads.",
  },
  {
    q: "5. Does YouTube SEO help generate leads?",
    a: "Absolutely. Educational videos build trust, attract qualified audiences, and guide potential customers toward your products or services.",
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
        Imagine two Indian brands uploading videos about the same topic.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h4 className="font-primary text-base font-bold text-slate-800 mb-2">Brand A (Paid Promotion)</h4>
          <p className="section-phara text-sm mt-0">
            Spends ₹2 lakh promoting its video through YouTube Ads. Traffic stops immediately once the ad budget runs out.
          </p>
        </div>
        <div className="bg-blue-50/40 border border-primary/20 rounded-xl p-5 shadow-sm hover:shadow-md transition">
          <h4 className="font-primary text-base font-bold text-primary mb-2">Brand B (Organic SEO Engine)</h4>
          <p className="section-phara text-sm mt-0">
            Invests nothing in advertising, yet consistently appears at the top of YouTube search results, Google Video results, and AI-powered search experiences.
          </p>
        </div>
      </div>
      <p className="section-phara font-semibold text-slate-900">
        Which brand wins in the long run? The answer is obvious: the one that earns organic visibility.
      </p>
      <p className="section-phara">
        In 2026, YouTube has become much more than a video-sharing platform. It is the world&apos;s second-largest search engine, a powerful customer education channel, and a key source of information for AI-powered search platforms. Businesses that understand modern YouTube SEO are attracting qualified audiences, generating leads, and building brand authority without relying on paid promotions.
      </p>
      <p className="section-phara">
        Across India, startups, D2C brands, healthcare providers, educational institutions, SaaS companies, manufacturers, and local businesses are using YouTube as a long-term growth engine. Instead of paying for every click, they create valuable content that continues to generate views, leads, and conversions months after it is published.
      </p>
      <p className="section-phara font-medium text-slate-800">
        If your business still thinks YouTube success depends on advertising budgets, it&apos;s time to rethink your strategy. This guide explores how Indian brands are ranking their videos #1 organically in 2026 and what your business can do to achieve the same.
      </p>
    </section>
  );
}

function SectionWhyYouTubeSEO() {
  return (
    <Section id="why-youtube-seo" title="Why YouTube SEO Matters More Than Ever">
      <p className="section-phara">
        Consumer behavior has changed dramatically. Before purchasing a product, choosing a service, or hiring a company, people increasingly search YouTube to learn, compare, and evaluate their options.
      </p>
      <p className="section-phara">
        Whether it&apos;s <em>&quot;Best CRM Software,&quot;</em> <em>&quot;How to Choose a Digital Marketing Agency,&quot;</em> or <em>&quot;Shopify Store Setup,&quot;</em> video content often becomes the first touchpoint between a brand and a customer.
      </p>
      
      <div className="my-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h4 className="font-primary text-lg font-bold text-primary mb-3">A Well-Optimized YouTube Video Can:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-700 font-secondary text-base">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Rank on YouTube Search
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Appear in Google Search results
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Be recommended by YouTube&apos;s algorithm
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Be surfaced in AI-generated answers
          </li>
          <li className="flex items-center gap-2 md:col-span-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Continue generating traffic and qualified leads for years
          </li>
        </ul>
      </div>

      <p className="section-phara">
        Unlike paid advertising, organic YouTube SEO creates lasting value. Once a video gains authority, it can continue attracting viewers long after its publication.
      </p>
    </Section>
  );
}

function SectionEvolution() {
  return (
    <Section id="evolution-2026" title="The Evolution of YouTube SEO in 2026">
      <p className="section-phara">
        Traditional YouTube SEO focused primarily on static metadata:
      </p>
      <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
        <li>Keywords</li>
        <li>Tags</li>
        <li>Long descriptions</li>
        <li>Metadata stuffing</li>
      </ul>
      <p className="section-phara mt-4">
        While these elements still matter, they are no longer enough. Today&apos;s YouTube algorithm prioritizes viewer experience. It measures how people interact with your content rather than simply how well you&apos;ve optimized your metadata.
      </p>

      <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-4">Traditional Signals (Pre-2024)</th>
              <th className="px-6 py-4">Modern Ranking Signals (2026 Engine)</th>
              <th className="px-6 py-4">Impact Level</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-500">Keyword Density in Tags</td>
              <td className="px-6 py-4 font-semibold text-primary">Audience Retention & Watch Time</td>
              <td className="px-6 py-4 font-bold text-emerald-600">Critical</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-500">Long Video Descriptions</td>
              <td className="px-6 py-4 font-semibold text-primary">Click-Through Rate (CTR)</td>
              <td className="px-6 py-4 font-bold text-emerald-600">High</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-500">Exact Match Filename</td>
              <td className="px-6 py-4 font-semibold text-primary">Viewer Satisfaction & Session Duration</td>
              <td className="px-6 py-4 font-bold text-emerald-600">Critical</td>
            </tr>
            <tr className="hover:bg-slate-50/50">
              <td className="px-6 py-4 font-medium text-slate-500">Raw View Count</td>
              <td className="px-6 py-4 font-semibold text-primary">Returning Viewers & Topical Authority</td>
              <td className="px-6 py-4 font-bold text-emerald-600">Very High</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="section-phara">
        This shift means brands must focus on creating genuinely useful content rather than trying to &quot;game&quot; the algorithm.
      </p>
    </Section>
  );
}

function SectionWhyIndianBrandsWin() {
  return (
    <Section id="why-indian-brands-win" title="Why Indian Brands Are Winning Organically">
      <p className="section-phara">
        Successful Indian businesses have realized that educational content builds trust faster than advertisements. Instead of creating promotional videos, they answer real customer questions.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">01. How-To Tutorials</span>
          <p className="text-sm text-slate-600">Step-by-step solutions to niche industry problems.</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">02. Product Comparisons</span>
          <p className="text-sm text-slate-600">Unbiased evaluation of solutions in the market.</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">03. Industry Insights</span>
          <p className="text-sm text-slate-600">Data-backed analysis of emerging trends.</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">04. Customer Success Stories</span>
          <p className="text-sm text-slate-600">Real case studies showing measurable outcomes.</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">05. Expert Interviews</span>
          <p className="text-sm text-slate-600">Thought leadership featuring recognized specialists.</p>
        </div>
        <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
          <span className="text-primary font-bold text-lg block mb-1">06. FAQ Breakdowns</span>
          <p className="text-sm text-slate-600">Direct answers to prospective buyer queries.</p>
        </div>
      </div>

      <p className="section-phara">
        These videos solve problems, making them more likely to be watched, shared, and recommended. As a result, brands gain organic visibility while building authority and trust.
      </p>
    </Section>
  );
}

function SectionSevenPillars() {
  return (
    <Section id="seven-pillars" title="The 7 Pillars of Modern YouTube SEO">
      <p className="section-phara">
        To build a video strategy that consistently ranks #1 without relying on ad spend, Indian brands follow seven core pillars:
      </p>

      <SectionH3 id="pillar-1" title="1. Search Intent Comes First">
        <p className="section-phara">
          Successful videos begin with understanding why people are searching. Instead of targeting broad, unfocused keywords like <strong>&quot;Digital Marketing&quot;</strong>, target specific questions such as:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>How to generate leads with digital marketing</li>
          <li>SEO vs Google Ads for small business</li>
          <li>Best YouTube marketing strategy for small businesses</li>
        </ul>
        <p className="section-phara mt-3">
          Intent-focused content attracts more qualified viewers and leads directly to better engagement and higher conversion rates.
        </p>
      </SectionH3>

      <SectionH3 id="pillar-2" title="2. Titles That Attract Clicks">
        <p className="section-phara">
          Your title has one primary job: convince someone to click. An effective title should include the target keyword naturally, clearly communicate value, spark curiosity, and match the video&apos;s actual content.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block mb-1">Poor Title</span>
            <p className="font-semibold text-slate-800">YouTube SEO Guide</p>
          </div>
          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mb-1">Better Title</span>
            <p className="font-semibold text-slate-800">YouTube SEO in 2026: 10 Strategies That Help Indian Brands Rank Without Ads</p>
          </div>
        </div>
      </SectionH3>

      <SectionH3 id="pillar-3" title="3. High-Impact Thumbnails">
        <p className="section-phara">
          Even the best video won&apos;t perform if nobody clicks on it. High-impact thumbnails typically feature:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>Clear visual focus and subject framing</li>
          <li>Minimal text (3-5 words max)</li>
          <li>Strong color contrast</li>
          <li>Consistent brand elements</li>
          <li>Emotional appeal where appropriate</li>
        </ul>
        <p className="section-phara mt-3">
          The synergy between title and thumbnail dictates your Click-Through Rate (CTR), which is one of YouTube&apos;s primary discovery triggers.
        </p>
      </SectionH3>

      <SectionH3 id="pillar-4" title="4. Audience Retention Is the New SEO">
        <p className="section-phara">
          One of YouTube&apos;s strongest ranking signals is how long viewers continue watching your video. You can improve audience retention by:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>Starting with a compelling hook within the first 10 seconds</li>
          <li>Avoiding lengthy, self-indulgent logo intros</li>
          <li>Delivering core value immediately</li>
          <li>Using engaging dynamic visuals and screen edits</li>
          <li>Maintaining a clear, logical flow</li>
          <li>Adding detailed video chapters for seamless navigation</li>
        </ul>
      </SectionH3>

      <SectionH3 id="pillar-5" title="5. Build Topical Authority">
        <p className="section-phara">
          Publishing unrelated videos every week makes it harder for YouTube&apos;s algorithm to categorize your channel&apos;s expertise. Instead, organize your video content into topic clusters:
        </p>
        <div className="my-4 bg-slate-900 text-slate-100 p-6 rounded-xl text-center font-mono text-sm leading-relaxed overflow-x-auto">
          <p className="text-primary font-bold">Digital Marketing</p>
          <p className="text-slate-500">↓</p>
          <p className="text-emerald-400">SEO</p>
          <p className="text-slate-500">↓</p>
          <p>Local SEO → Technical SEO → Content Marketing → AI Search → <span className="text-amber-400 font-bold">YouTube SEO</span></p>
        </div>
        <p className="section-phara">
          This topical cluster approach strengthens your overall channel relevance and encourages binge-watching behavior among viewers.
        </p>
      </SectionH3>

      <SectionH3 id="pillar-6" title="6. Optimize for AI Search">
        <p className="section-phara">
          AI search assistants (Google AI Overviews, Perplexity, ChatGPT) increasingly quote and embed YouTube videos when answering user queries. To maximize AI discoverability:
        </p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
          <li>Answer specific questions directly in speech and text</li>
          <li>Use descriptive, keyword-rich chapter titles</li>
          <li>Include accurate, hand-edited captions (.srt)</li>
          <li>Structure video info logically with subheadings</li>
          <li>Provide a concise key takeaways summary in the description</li>
        </ul>
      </SectionH3>

      <SectionH3 id="pillar-7" title="7. Encourage Meaningful Engagement">
        <p className="section-phara">
          Engagement isn&apos;t limited to likes. Comments, shares, playlist adds, and repeat channel visits indicate strong community signals. Instead of generically asking viewers to &quot;Like and Subscribe,&quot; pose thoughtful questions that trigger active discussion in the comment section.
        </p>
      </SectionH3>
    </Section>
  );
}

function SectionCommonMistakes() {
  return (
    <Section id="common-mistakes" title="Common YouTube SEO Mistakes">
      <p className="section-phara">
        Many businesses invest time in video production but fail to gain traction because of critical strategic errors:
      </p>
      <div className="bg-red-50/40 border border-red-200/80 rounded-xl p-6 my-6">
        <h4 className="font-primary text-base font-bold text-red-700 mb-3 uppercase tracking-wide">
          Pitfalls That Hurt Organic Video Rankings:
        </h4>
        <ul className="space-y-2 text-slate-700 font-secondary text-base">
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Focusing solely on subscriber count instead of audience retention and watch time</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Creating clickbait thumbnails that misrepresent content and tank retention</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Uploading erratically without a consistent posting cadence</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Ignoring custom captions and timestamps/chapters</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Targeting overly saturated generic keywords without a unique angle</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-500 font-bold">✕</span>
            <span>Producing sales pitch videos instead of educational problem-solving content</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

function SectionMeasuringSuccess() {
  return (
    <Section id="measuring-success" title="Measuring Success Beyond Views">
      <p className="section-phara">
        Views alone do not reflect business growth. Indian brands tracking organic YouTube ROI evaluate key metrics that directly impact revenue:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="p-5 border border-slate-200 rounded-xl bg-white text-center">
          <p className="text-2xl font-bold text-primary font-primary">Search & Suggested</p>
          <p className="text-xs text-slate-500 font-medium uppercase mt-1">Traffic Sources</p>
        </div>
        <div className="p-5 border border-slate-200 rounded-xl bg-white text-center">
          <p className="text-2xl font-bold text-primary font-primary">Retention & CTR</p>
          <p className="text-xs text-slate-500 font-medium uppercase mt-1">Engagement Signals</p>
        </div>
        <div className="p-5 border border-slate-200 rounded-xl bg-white text-center">
          <p className="text-2xl font-bold text-primary font-primary">Leads & Conversions</p>
          <p className="text-xs text-slate-500 font-medium uppercase mt-1">Business Impact</p>
        </div>
      </div>
      <p className="section-phara">
        By regularly tracking returning viewers, average view duration, and referral website conversions, you can continuously refine your video strategy for maximum organic performance.
      </p>
    </Section>
  );
}

function SectionFutureYouTubeSEO() {
  return (
    <Section id="future-youtube-seo" title="The Future of YouTube SEO">
      <p className="section-phara">
        Looking ahead, YouTube SEO will become even more focused on user experience and AI understanding. Businesses should prepare for:
      </p>
      <ul className="ml-6 mt-2 list-disc space-y-1 text-base text-slate-700 font-secondary">
        <li>Deeper AI-powered search engine integration</li>
        <li>Voice search optimization for conversational queries</li>
        <li>Hyper-personalized recommendation feeds</li>
        <li>Greater algorithm emphasis on content accuracy and quality</li>
        <li>Stronger semantic understanding of spoken video transcripts</li>
        <li>Increased importance of channel topical authority</li>
      </ul>
      <p className="section-phara mt-4 font-semibold text-slate-900">
        Brands that consistently educate and engage their audience will continue to outperform competitors relying solely on paid advertising.
      </p>
    </Section>
  );
}

function SectionKeyTakeaways() {
  return (
    <Section id="key-takeaways" title="Key Takeaways">
      <div className="my-6 border-l-4 border-primary bg-blue-50/50 p-5 rounded-r-xl">
        <ul className="space-y-2 font-secondary text-base text-slate-700 leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>Audience First:</strong> YouTube SEO in 2026 is driven by retention, CTR, and topical authority rather than simple keyword stuffing.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>Education Over Ads:</strong> Problem-solving educational videos build trust faster and generate longer-lasting traffic than paid commercials.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>Structure for AI:</strong> Clear chapters, accurate transcripts, and direct answers ensure your videos get cited by AI search platforms.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span><strong>Sustainable Asset:</strong> Organic video SEO acts as a compounding digital asset that delivers leads long after publication.</span>
          </li>
        </ul>
      </div>
    </Section>
  );
}

function SectionConclusion() {
  return (
    <Section id="conclusion" title="Conclusion">
      <p className="section-phara">
        The brands dominating YouTube in 2026 aren&apos;t necessarily the ones spending the most on advertising—they&apos;re the ones creating content that genuinely answers audience questions, builds trust, and keeps viewers engaged. Modern YouTube SEO is no longer about stuffing keywords into titles or descriptions; it&apos;s about understanding search intent, delivering value, and optimizing content for both human viewers and AI-powered discovery.
      </p>
      <p className="section-phara">
        For Indian businesses, YouTube represents one of the most powerful long-term marketing investments. A single well-optimized video can continue generating traffic, leads, and brand visibility long after its publication, making it a cost-effective alternative to constantly increasing ad spend.
      </p>
      <div className="my-8 rounded-xl bg-slate-900 text-white p-8 shadow-lg">
        <h4 className="font-primary text-2xl font-bold mb-3 text-white">Ready to Turn YouTube into an Organic Growth Engine?</h4>
        <p className="font-secondary text-base text-slate-300 mb-6 leading-relaxed">
          At <strong>Ayatiworks Technologies LLP</strong>, we help businesses build future-ready video marketing strategies that combine YouTube SEO, AI Search Optimization, content strategy, and data-driven digital marketing. If you&apos;re ready to turn YouTube into a consistent source of organic growth, now is the time to build a strategy that keeps your brand visible without depending solely on paid ads.
        </p>
        <Link
          href="/contact-us"
          className="inline-block bg-primary text-white font-primary font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Partner with Ayatiworks
        </Link>
      </div>
    </Section>
  );
}

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage130() {
  const post = POSTS.find((p) => p.id === 130) || POSTS[0];
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
        datePublished: "2026-08-14",
        dateModified: "2026-08-14",
        keywords: [
          "YouTube SEO 2026",
          "Indian Brands YouTube Growth",
          "Rank Videos Without Ads",
          "YouTube Video SEO Strategy",
          "AI Search Video Optimization",
          "Organic Video Marketing India",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="blog-130-schema"
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
          <SectionWhyYouTubeSEO />
          <SectionEvolution />
          <SectionWhyIndianBrandsWin />
          <SectionSevenPillars />
          <SectionCommonMistakes />
          <SectionMeasuringSuccess />
          <SectionFutureYouTubeSEO />
          <SectionKeyTakeaways />
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
