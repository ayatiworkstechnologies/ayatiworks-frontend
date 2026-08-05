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
  { id: "intro", level: 1, label: "Your Brand Is Being Judged Before Anyone Visits Your Website" },
  { id: "first-brand-ambassador", level: 1, label: "Why AI Has Become Your First Brand Ambassador" },
  { id: "how-ai-understands", level: 1, label: "How AI Understands Your Business" },
  { id: "digital-signals", level: 1, label: "The Digital Signals That Shape AI's Opinion" },
  { id: "hidden-cost", level: 1, label: "The Hidden Cost of Ignoring AI Brand Reputation" },
  { id: "ai-trust-framework", level: 1, label: "The A.I.T.R.U.S.T. Framework" },
  { id: "common-mistakes", level: 1, label: "Common Mistakes That Damage AI Brand Reputation" },
  { id: "practical-strategies", level: 1, label: "Practical Strategies to Build AI Trust" },
  { id: "future-reputation", level: 1, label: "The Future of Brand Reputation in the AI Search Era" },
  { id: "blog-faqs", level: 1, label: "Frequently Asked Questions" },
  { id: "conclusion", level: 1, label: "Final Perspective" },
];

const FAQS_DATA = [
  {
    q: "1. What is AI brand reputation?",
    a: "AI brand reputation refers to how artificial intelligence systems understand, interpret, and present your business based on publicly available digital information, including website content, reviews, business listings, media coverage, and online authority.",
  },
  {
    q: "2. Why does AI influence purchasing decisions?",
    a: "AI assistants increasingly provide direct recommendations, summaries, and comparisons before customers visit websites. These responses often shape first impressions and influence buying decisions.",
  },
  {
    q: "3. Does SEO still matter?",
    a: "Absolutely. SEO remains essential, but modern optimization extends beyond rankings. Businesses must also build authority, trust, and consistent digital signals that AI systems can confidently interpret.",
  },
  {
    q: "4. How can businesses improve AI trust?",
    a: "Focus on creating expert content, maintaining consistent branding, encouraging authentic customer reviews, earning reputable mentions, and keeping business information accurate across all platforms.",
  },
  {
    q: "5. Are customer reviews important for AI?",
    a: "Yes. Reviews help AI identify recurring customer experiences, satisfaction levels, and overall business credibility.",
  },
  {
    q: "6. What role does structured data play?",
    a: "Structured data helps search engines and AI systems accurately understand your business, services, products, locations, and organizational information.",
  },
  {
    q: "7. How often should businesses audit their digital presence?",
    a: "A quarterly audit is recommended to ensure messaging, contact details, reviews, and website content remain current and consistent.",
  },
  {
    q: "8. Can small businesses compete in AI-powered search?",
    a: "Yes. AI values expertise, consistency, and trust more than company size. Smaller businesses with focused authority can outperform larger competitors in niche markets.",
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
      <h3 className="mt-8 text-left text-2xl section-title">{title}</h3>
      <div className="mt-3">{children}</div>
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
          open ? "bg-white text-primary font-primary" : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-xl leading-5">{q}</h3>
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm transition-colors duration-200" aria-hidden="true">
          {open ? <FiMinus className="h-3.5 w-3.5" /> : <FiPlus className="h-3.5 w-3.5" />}
        </span>
      </button>
      <div id={bodyId} className={["px-4 transition-all duration-200 ease-out", open ? "max-h-64 py-3" : "max-h-0 py-0"].join(" ")}>
        <p className="font-secondary text-lg text-black/80 whitespace-pre-line">{a}</p>
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
        <FAQItem key={i} index={i} open={openIndex === i} onToggle={() => toggle(i)} q={item.q} a={item.a} />
      ))}
    </div>
  );
}

/* ---------- CONTENT SECTIONS ---------- */

function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <h2 className="section-title mb-4 text-left text-3xl"><em>Your Brand Is Being Judged Before Anyone Visits Your Website</em></h2>
      <p className="section-phara">Imagine a potential customer hears about your business for the first time. Instead of typing your website into a browser, they ask ChatGPT:</p>
      <p className="section-phara italic">"Is this company reliable?"</p>
      <p className="section-phara">Or they search Google and receive an AI Overview summarizing your business before they even see your homepage. Perhaps they ask Gemini which company offers the best branding services, or Perplexity to compare your business with competitors.</p>
      <p className="section-phara">Within seconds, AI generates an opinion. It may describe your expertise, summarize customer sentiment, highlight reviews, mention media coverage, recommend competitors, or identify gaps in your online presence. More importantly, that opinion is often formed without your direct involvement.</p>
      <p className="section-phara">This marks one of the biggest shifts in digital marketing. Businesses no longer control the first impression solely through carefully designed websites, paid advertisements, or polished social media pages. Increasingly, AI systems synthesize information from across the web and create a brand narrative on behalf of your organization.</p>
      <p className="section-phara">For business leaders, this creates both an opportunity and a challenge. A company with consistent messaging, strong authority, credible reviews, and trustworthy content can become highly visible in AI-powered search experiences. Conversely, businesses with fragmented information, outdated websites, or inconsistent branding may discover that AI tells a story they never intended.</p>
      <p className="section-phara">The future of digital reputation is no longer defined by what your company says about itself. It is shaped by what AI understands about your business.</p>
    </section>
  );
}

function SectionFirstBrandAmbassador() {
  return (
    <Section id="first-brand-ambassador" title="Why AI Has Become Your First Brand Ambassador">
      <p className="section-phara">A decade ago, your website homepage was often the first interaction people had with your business. Today, AI-powered platforms frequently become the first point of contact.</p>
      <p className="section-phara">Customers increasingly ask conversational questions instead of searching with keywords:</p>

      <div className="space-y-2 mt-4 ml-1">
        {[
          "Which digital marketing agency is trustworthy?",
          "Which software company has the best customer support?",
          "Is this healthcare provider reliable?",
          "Which branding agency works well with startups?",
        ].map((q) => (
          <div key={q} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{q}</span>
          </div>
        ))}
      </div>

      <p className="section-phara">Rather than presenting a list of links, AI attempts to deliver a direct answer. This seemingly simple change has profound implications. Instead of evaluating your carefully crafted marketing materials, potential customers receive an AI-generated summary built from hundreds of publicly available signals.</p>
      <p className="section-phara">These include:</p>

      <div className="space-y-2 mt-4 ml-1">
        {[
          "Website content",
          "Customer reviews",
          "News mentions",
          "Business listings",
          "Industry citations",
          "Social media discussions",
          "Case studies",
          "Thought leadership articles",
          "Community conversations",
          "Structured business information",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="section-phara">Every digital interaction contributes to the broader understanding AI develops about your organization. A business may invest heavily in advertising, yet if its online reputation lacks consistency or credibility, AI may still recommend competitors with stronger authority signals.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> Your website is no longer the only source of truth about your brand. AI creates its own understanding by connecting information across the digital ecosystem.
      </p>

      <p className="section-phara mt-4">
        <strong>Expert Tip:</strong> Conduct regular searches using conversational prompts such as "Which companies offer the best [service]?" to understand how AI currently represents your brand.
      </p>
    </Section>
  );
}

function SectionHowAIUnderstands() {
  return (
    <Section id="how-ai-understands" title="How AI Understands Your Business">
      <p className="section-phara">Artificial intelligence doesn't think like a human marketer. It doesn't admire your logo, appreciate your advertising budget, or assume your claims are accurate simply because they're published on your website.</p>
      <p className="section-phara">Instead, AI evaluates consistency, authority, and credibility.</p>
      <p className="section-phara">Imagine your business as a puzzle. Your website provides one piece. Google Business Profile adds another. Customer reviews contribute additional pieces. Industry articles, LinkedIn posts, PR mentions, blog content, structured data, and third-party citations all complete the picture.</p>
      <p className="section-phara">AI assembles these fragments to answer a fundamental question: "Can this business be trusted?"</p>
      <p className="section-phara">Several factors influence that decision:</p>

      <h4 className="text-xl font-bold text-left text-secondary">Consistent Brand Identity</h4>
      <p className="section-phara">If your company describes itself differently across multiple platforms, AI struggles to determine your expertise. Consistency strengthens confidence.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Topical Authority</h4>
      <p className="section-phara">Businesses that consistently publish valuable content within a niche demonstrate expertise. For example, a digital marketing agency producing in-depth articles on branding, SEO, AI search, and performance marketing signals specialization rather than generalization.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">External Validation</h4>
      <p className="section-phara">Awards, partnerships, testimonials, interviews, and industry recognition reinforce trust. AI values information that others independently confirm.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">User Sentiment</h4>
      <p className="section-phara">Patterns in reviews, testimonials, and public discussions influence how AI interprets customer satisfaction. A single negative review rarely defines a brand, but repeated concerns across platforms create recognizable trends.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Technical Quality</h4>
      <p className="section-phara">Fast-loading websites, structured content, clear navigation, accessible pages, and organized information improve machine understanding.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> AI evaluates evidence, not marketing claims. The strongest brands don't merely communicate expertise — they demonstrate it consistently across every digital channel.
      </p>

      <p className="section-phara mt-4">
        <strong>Expert Tip:</strong> Audit your business listings, website messaging, and social platforms quarterly to ensure consistent positioning, services, and brand voice.
      </p>
    </Section>
  );
}

function SectionDigitalSignals() {
  return (
    <Section id="digital-signals" title="The Digital Signals That Shape AI's Opinion">
      <p className="section-phara">Many businesses focus exclusively on SEO rankings, believing higher positions automatically lead to stronger brand perception. While visibility remains important, AI increasingly evaluates a broader set of trust signals.</p>

      <h4 className="text-xl font-bold text-left text-secondary">1. Website Authority</h4>
      <p className="section-phara">Comprehensive service pages, educational blogs, original research, and helpful resources indicate subject matter expertise. Thin or outdated content weakens credibility.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">2. Customer Reviews</h4>
      <p className="section-phara">Reviews influence more than purchasing decisions. They provide AI with insights into customer satisfaction, service quality, and recurring strengths or weaknesses.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">3. Brand Mentions</h4>
      <p className="section-phara">When respected publications, industry websites, or partners reference your company, they strengthen your authority. Even unlinked mentions contribute to broader recognition.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">4. Content Consistency</h4>
      <p className="section-phara">Publishing occasionally isn't enough. Businesses demonstrating ongoing expertise through consistent thought leadership are more likely to become trusted sources.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">5. Structured Information</h4>
      <p className="section-phara">Clear business details including services, locations, contact information, authorship, and schema markup help AI accurately interpret your organization.</p>

      <SectionH3 id="seo-vs-ai" title="Traditional SEO vs AI Reputation Optimization">
        <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
              <tr>
                <th className="px-6 py-4">Traditional SEO</th>
                <th className="px-6 py-4">AI Reputation Optimization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {[
                ["Focuses on rankings", "Focuses on trust"],
                ["Optimizes pages", "Optimizes brand understanding"],
                ["Targets keywords", "Builds topical authority"],
                ["Measures clicks", "Measures credibility"],
                ["Competes for visibility", "Competes for recommendation"],
              ].map(([l, r]) => (
                <tr key={l} className="hover:bg-slate-50/50">
                  <td className="px-6 py-4">{l}</td>
                  <td className="px-6 py-4 font-semibold text-primary">{r}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionH3>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> Search rankings attract attention. Trust determines whether AI recommends your business. View every blog, review, customer success story, and industry mention as part of your reputation strategy rather than isolated marketing assets.
      </p>
    </Section>
  );
}

function SectionHiddenCost() {
  return (
    <Section id="hidden-cost" title="The Hidden Cost of Ignoring AI Brand Reputation">
      <p className="section-phara">Many businesses still approach reputation management as a reactive exercise. They respond to negative reviews, update their website once a year, or invest in public relations only when a crisis emerges. While these practices remain important, they no longer address the full picture.</p>
      <p className="section-phara">AI systems continuously process information from multiple sources. They don't wait for your next marketing campaign or website redesign to evaluate your business. Every review, blog post, customer testimonial, news mention, and social media discussion contributes to the digital footprint that AI uses to understand your brand.</p>
      <p className="section-phara">The consequences of neglecting this evolving landscape can be significant.</p>

      <h4 className="text-xl font-bold text-left text-secondary">Reduced Visibility in AI Search</h4>
      <p className="section-phara">Search is becoming increasingly conversational. Instead of clicking through ten blue links, users ask AI assistants direct questions. If AI lacks confidence in your digital authority, your business may never appear in these recommendations — even if your website ranks well for traditional keywords.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Lower Customer Trust</h4>
      <p className="section-phara">Today's buyers often validate information across multiple channels before making decisions. If AI-generated summaries reveal inconsistent messaging, outdated information, or limited evidence of expertise, prospective customers may hesitate before contacting your business.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Competitive Disadvantage</h4>
      <p className="section-phara">Your competitors don't need to outrank you on every keyword. They simply need stronger authority signals across the digital ecosystem. AI increasingly favors organizations that consistently demonstrate expertise, credibility, and trust.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Missed Business Opportunities</h4>
      <p className="section-phara">Every inaccurate AI-generated summary, outdated business profile, or inconsistent service description can influence purchasing decisions without your knowledge.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> Your digital reputation is no longer shaped only by customer opinions — it is increasingly shaped by how artificial intelligence interprets those opinions.
      </p>
    </Section>
  );
}

function SectionAITRUSTFramework() {
  const items = [
    {
      letter: "A",
      word: "Authority",
      desc: "Build expertise through original content, case studies, research, whitepapers, and educational resources. Authority grows when your organization consistently demonstrates knowledge within its niche.",
    },
    {
      letter: "I",
      word: "Identity",
      desc: "Maintain consistent branding across every digital platform. Your business name, services, messaging, contact information, and positioning should align across your website, Google Business Profile, LinkedIn, directories, and social platforms.",
    },
    {
      letter: "T",
      word: "Transparency",
      desc: "Trust increases when businesses openly communicate. Publish author profiles, showcase client success stories, explain methodologies, and maintain accurate company information.",
    },
    {
      letter: "R",
      word: "Reputation",
      desc: "Actively encourage customer reviews, testimonials, industry recognition, and third-party mentions. Positive experiences shared by real customers become powerful trust signals.",
    },
    {
      letter: "U",
      word: "Understanding Search Intent",
      desc: "Create content that answers real business questions instead of focusing solely on keywords. Content should solve problems, educate readers, and demonstrate practical expertise.",
    },
    {
      letter: "S",
      word: "Structured Data",
      desc: "Help AI understand your business by implementing schema markup, organizing website content clearly, and maintaining accurate business information.",
    },
    {
      letter: "T",
      word: "Thought Leadership",
      desc: "Publish insights regularly. Opinion articles, industry predictions, research-backed blogs, webinars, podcasts, and expert interviews position your business as a trusted authority.",
    },
  ];

  return (
    <Section id="ai-trust-framework" title="The A.I.T.R.U.S.T. Framework">
      <p className="section-phara">Rather than viewing AI reputation as another marketing trend, businesses should adopt a structured strategy that strengthens every digital signal influencing machine understanding.</p>

      <div className="space-y-4 mt-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-2xl font-extrabold text-white font-primary">
              {item.letter}
            </div>
            <div>
              <h4 className="text-xl font-bold text-left text-secondary">{item.word}</h4>
              <p className="section-phara mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> Strong AI reputation isn't built through shortcuts. It's the result of consistent, trustworthy communication across every customer touchpoint.
      </p>
    </Section>
  );
}

function SectionCommonMistakes() {
  return (
    <Section id="common-mistakes" title="Common Mistakes That Damage AI Brand Reputation">
      <p className="section-phara">Even well-established organizations unintentionally weaken their digital authority.</p>

      <h4 className="text-xl font-bold text-left text-secondary">Inconsistent Messaging</h4>
      <p className="section-phara">Describing your business differently across platforms creates confusion for both customers and AI systems. Consistency reinforces credibility.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Publishing Generic Content</h4>
      <p className="section-phara">AI increasingly recognizes originality. Blogs that simply repeat existing information without adding insights contribute little to your authority. Instead, publish:</p>
      <div className="space-y-2 mt-4 ml-1">
        {[
          "Original frameworks",
          "Industry observations",
          "Practical case studies",
          "Actionable strategies",
          "Executive perspectives",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Ignoring Customer Reviews</h4>
      <p className="section-phara">Reviews are no longer only social proof. They help AI understand recurring customer experiences. Respond professionally to feedback, acknowledge concerns, and encourage satisfied clients to share authentic reviews.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Outdated Website Information</h4>
      <p className="section-phara">Old service pages, broken links, expired team profiles, and obsolete case studies reduce confidence. Your website should reflect your current expertise.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Weak Internal Linking</h4>
      <p className="section-phara">Disconnected content makes it difficult for search engines and AI systems to understand relationships between topics. Build topic clusters around your core services and expertise.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Business Perspective:</strong> Think of every digital asset as a chapter in your brand story. When those chapters contradict one another, AI struggles to understand the complete narrative.
      </p>
    </Section>
  );
}

function SectionPracticalStrategies() {
  return (
    <Section id="practical-strategies" title="Practical Strategies to Build AI Trust">
      <p className="section-phara">Improving AI brand reputation doesn't require reinventing your marketing strategy. It requires greater consistency and intentionality.</p>

      <h4 className="text-xl font-bold text-left text-secondary">Publish Experience-Driven Content</h4>
      <p className="section-phara">Share real client challenges, implementation processes, lessons learned, and measurable outcomes. Authentic expertise carries more weight than generic advice.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Strengthen Topical Authority</h4>
      <p className="section-phara">Instead of covering dozens of unrelated subjects, build deep expertise around a focused set of topics. For example, a digital marketing agency might consistently publish content about:</p>
      <div className="space-y-2 mt-4 ml-1">
        {[
          "Branding Strategy",
          "SEO",
          "AI Search Optimization",
          "Website Development",
          "Content Marketing",
          "Performance Marketing",
          "User Experience",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="section-phara">This interconnected content ecosystem helps AI recognize specialization.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Maintain Digital Consistency</h4>
      <p className="section-phara">Audit your presence and ensure information remains accurate everywhere:</p>
      <div className="space-y-2 mt-4 ml-1">
        {["Website", "Google Business Profile", "LinkedIn", "Business directories", "Social media", "Review platforms"].map((item) => (
          <div key={item} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Encourage Genuine Customer Advocacy</h4>
      <p className="section-phara">Satisfied customers become your strongest reputation assets. Invite reviews, testimonials, referrals, interviews, and success stories.</p>

      <h4 className="text-xl font-bold text-left text-secondary mt-4">Invest in Digital PR</h4>
      <p className="section-phara">Industry publications, podcasts, conferences, guest articles, and expert interviews strengthen authority beyond your own website.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Expert Tip:</strong> Think beyond SEO rankings. Aim to become the most referenced, cited, and trusted resource within your industry.
      </p>
    </Section>
  );
}

function SectionFutureReputation() {
  return (
    <Section id="future-reputation" title="The Future of Brand Reputation in the AI Search Era">
      <p className="section-phara">Artificial intelligence will continue transforming how businesses are discovered, evaluated, and recommended. Future search experiences will increasingly prioritize:</p>

      <div className="space-y-2 mt-4 ml-1">
        {[
          "Entity-based understanding",
          "Context over keywords",
          "Expert-authored content",
          "Verified business information",
          "Customer sentiment",
          "Digital authority",
          "Brand consistency",
          "Experience-driven insights",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
            <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="section-phara">Organizations that rely solely on traditional SEO tactics may find it increasingly difficult to compete. Instead, future-ready businesses will invest in integrated digital ecosystems where branding, content marketing, SEO, public relations, customer experience, and technical optimization work together.</p>

      <div className="overflow-x-auto my-6 rounded-lg border border-slate-200 shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-4">Search Era</th>
              <th className="px-6 py-4">Primary Focus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {[
              ["Keyword Search", "Exact match queries"],
              ["Semantic Search", "Intent & context understanding"],
              ["AI Search", "Entity knowledge & trust signals"],
              ["Conversational Discovery", "Credibility & recommendation"],
            ].map(([era, focus]) => (
              <tr key={era} className="hover:bg-slate-50/50">
                <td className="px-6 py-4 font-semibold text-primary">{era}</td>
                <td className="px-6 py-4">{focus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="section-phara font-bold">AI doesn't simply reward visibility. It rewards credibility.</p>

      <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-6 shadow-sm">
        <strong>Key Insight:</strong> The strongest brands of tomorrow will be those that consistently earn trust — not just clicks.
      </p>
    </Section>
  );
}

function SectionConclusion() {
  return (
    <Section id="conclusion" title="Final Perspective">
      <p className="section-phara">AI is changing how businesses are discovered, evaluated, and trusted. Before a customer visits your website or speaks with your team, AI-powered search platforms may have already formed an understanding of your brand based on your content, reviews, online mentions, and overall digital presence. That's why building a strong brand reputation today means focusing on credibility, consistency, and expertise across every digital touchpoint — not just search rankings.</p>
      <p className="section-phara">At Ayatiworks Technologies LLP, we help businesses strengthen their digital presence through strategic branding, SEO, AI search optimization, website development, and integrated digital marketing solutions. If you're looking to build a brand that earns the trust of both customers and AI-driven search platforms, our team is here to help you stay ahead in the evolving digital landscape.</p>
    </Section>
  );
}

/* ---------- TOC SIDEBAR ---------- */

function WhatsInside({ items }) {
  const [activeId, setActiveId] = useState(items?.[0]?.id || "");
  useEffect(() => {
    const sections = items.map((it) => document.getElementById(it.id)).filter(Boolean);
    if (!sections.length) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible?.target?.id) setActiveId(visible.target.id);
    }, { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] });
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
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
      <nav className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]" aria-label="Table of contents">
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-3 text-2xl section-title">In this article</div>
        <ul className="max-h-[70vh] overflow-y-auto p-3 pr-2">
          {items.map((it) => {
            const active = activeId === it.id;
            const isMain = it.level === 1;
            return (
              <li key={it.id} className="relative">
                <span aria-hidden className={["absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 rounded-r transition-colors", active ? "bg-primary" : "bg-transparent"].join(" ")} />
                <a href={`#${it.id}`} onClick={(e) => handleClick(e, it.id)}
                  className={["block rounded pr-2 py-2 transition-colors", isMain ? "pl-3" : "pl-7", active ? "bg-slate-50 text-primary font-primary" : "text-slate-700 font-secondary hover:bg-slate-50 hover:text-secondary", isMain ? "text-[15px]" : "text-[13.5px]"].join(" ")}
                  aria-current={active ? "true" : undefined}>
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

/* ---------- HERO BANNER ---------- */

function SplitHeroBanner({ href = "#", imageSrc, imageAlt, category, title, author, updatedAt, readMins, post = null }) {
  const shareUrl = typeof window !== "undefined" ? window.location.origin + href : href;
  const shareTitle = Array.isArray(title) ? title.join(" ") : title;

  return (
    <div className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm" aria-label={`Read: ${shareTitle}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link href={href} aria-label={`Read: ${shareTitle}`} className="block">
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <Image width={800} height={800} src={imageSrc} alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]" />
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100">
                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
              </div>
            </div>
          </Link>
          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/15 to-transparent lg:block" />
        </div>

        {/* Right: Content panel */}
        <div className="relative isolate px-5 py-6 text-white sm:px-8 sm:py-10 flex flex-col"
          style={{ backgroundImage: "linear-gradient(135deg,#0A4991 0%,#0A4991 100%)" }}>
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

          <div className="flex-1">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {category}
            </div>
            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {Array.isArray(title) ? title.map((line, i) => <span key={i} className="block">{line}</span>) : title}
            </h2>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
              <Link href={`/author/${author.slug}`} aria-label={`View ${author.name}'s author page`} className="relative z-[1] block rounded-md transition hover:opacity-95">
                <div className="flex items-center gap-3">
                  <Image width={800} height={800} src={author.avatar} alt={author.name}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10" loading="lazy" decoding="async" />
                  <div className="min-w-0">
                    <div className="font-primary text-xl hover:underline leading-tight">{author.name}</div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85 truncate">{author.role}</div>
                    )}
                  </div>
                </div>
              </Link>
              <Bar />
              <div className="text-sm text-slate-100/90">
                <div className="font-primary text-base">{updatedAt}</div>
                <div className="text-xs font-secondary">Last updated</div>
              </div>
              <div className="hidden sm:block h-6 w-px bg-white/20 mx-3" aria-hidden="true" />
              <div className="text-sm text-slate-100/90">
                <div className="font-primary font-medium text-base">{readMins} Min</div>
                <div className="text-xs font-secondary">Read</div>
              </div>
            </div>
            <div className="z-[2] flex items-center">
              <ShareButtons slug={buildHref(post?.slug)} post={post} title={shareTitle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- SHARE BUTTONS ---------- */

function ShareButtons({ url = "", slug = "", post = null, title = "", domain = "" }) {
  const [open, setOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const containerRef = React.useRef(null);
  const [absoluteUrl, setAbsoluteUrl] = React.useState(url || "");

  React.useEffect(() => {
    if (url) { setAbsoluteUrl(url); return; }
    const base = domain || (typeof window !== "undefined" ? window.location.origin : "");
    const candidate = slug || (post && buildHref(post.slug)) || "";
    if (!candidate) return;
    const path = candidate.startsWith("/") ? candidate : `/${candidate}`;
    if (base) setAbsoluteUrl(base + path);
    else setAbsoluteUrl(path);
  }, [url, slug, post, domain]);

  const encodedUrl = encodeURIComponent(absoluteUrl || "");
  const encodedTitle = encodeURIComponent(title || (post && post.title) || (typeof document !== "undefined" ? document.title : ""));

  React.useEffect(() => {
    const onDocClick = (e) => { if (!containerRef.current) return; if (!containerRef.current.contains(e.target)) setOpen(false); };
    const onEsc = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => { document.removeEventListener("mousedown", onDocClick); document.removeEventListener("touchstart", onDocClick); document.removeEventListener("keydown", onEsc); };
  }, []);

  const openPopup = (shareUrl, preferSameWindow = false) => {
    try {
      const w = 700, h = 520, left = window.screenX + (window.innerWidth - w) / 2, top = window.screenY + (window.innerHeight - h) / 2;
      if (preferSameWindow) window.location.href = shareUrl;
      else window.open(shareUrl, "share-window", `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`);
    } catch (e) { window.open(shareUrl, "_blank", "noopener"); } finally { setOpen(false); }
  };

  const onCopy = async () => {
    try { await navigator.clipboard.writeText(absoluteUrl); setCopied(true); window.setTimeout(() => setCopied(false), 2000); }
    catch { setCopied(true); window.setTimeout(() => setCopied(false), 2000); }
  };

  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button type="button" onClick={() => setOpen((s) => !s)} aria-haspopup="true" aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-base font-primary text-white backdrop-blur-md hover:bg-white/30 transition">
        <FiShare2 className="h-6 w-6 text-white" />
        <span>Share</span>
      </button>
      <div className={["absolute right-0 mt-2 w-auto rounded-md border bg-white shadow-lg ring-1 ring-black/5 transition-all", open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"].join(" ")}
        style={{ transitionProperty: "opacity, transform", padding: open ? "8px" : "0" }} aria-hidden={!open}>
        <div className="flex items-center gap-3">
          <button onClick={() => openPopup(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition" aria-label="Share on Facebook" title="Facebook">
            <FaFacebookF className="h-4 w-4 text-slate-700" />
          </button>
          <button onClick={() => openPopup(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`)} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition" aria-label="Share on Twitter" title="Twitter">
            <FaXTwitter className="h-4 w-4 text-slate-700" />
          </button>
          <button onClick={() => openPopup(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition" aria-label="Share on LinkedIn" title="LinkedIn">
            <FaLinkedinIn className="h-4 w-4 text-slate-700" />
          </button>
          <button onClick={() => openPopup(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, true)} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition" aria-label="Share on WhatsApp" title="WhatsApp">
            <FaWhatsapp className="h-4 w-4 text-slate-700" />
          </button>
          <button onClick={onCopy} className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition relative" aria-label="Copy link" title="Copy link">
            <FiCopy className="h-4 w-4 text-slate-700" />
            <span className="text-sm text-slate-700 hidden sm:inline">Copy</span>
            <span role="status" aria-live="polite"
              className={["absolute -bottom-7 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs shadow-sm", copied ? "visible opacity-100" : "invisible opacity-0"].join(" ")}
              style={{ background: "rgba(34,34,34,0.9)", color: "white", transition: "opacity 180ms ease" }}>
              {copied ? "Copied!" : ""}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage129() {
  const post = POSTS.find((p) => p.id === 129) || POSTS[0];
  const relatedPosts = getRelatedRecentPosts({ currentPostId: post.id, category: post.category, limit: 3 });

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [{
      "@type": "Article",
      "@id": `https://www.ayatiworks.com${post.slug}`,
      headline: post.seoTitle || post.title,
      description: post.seoDescription || post.deck,
      image: { "@id": `https://www.ayatiworks.com${post.slug}#primaryimage` },
      author: { "@type": "Person", name: "Karthick Raja" },
      publisher: { "@type": "Organization", name: "Ayatiworks", logo: { "@type": "ImageObject", url: "https://www.ayatiworks.com/logo.png" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.ayatiworks.com${post.slug}` },
      datePublished: "2026-08-05",
      dateModified: "2026-08-05",
      keywords: ["AI brand reputation", "AI search optimization", "digital brand authority", "AI trust signals", "A.I.T.R.U.S.T. framework"],
    }],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script id="blog-129-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-10">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)}
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
          title={[post.bannerTitle]}
          author={{ name: "Karthick Raja", slug: "karthick-raja", role: "Jr Content Writer", avatar: "/assets/teams/karthik.jpeg" }}
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
          <SectionFirstBrandAmbassador />
          <SectionHowAIUnderstands />
          <SectionDigitalSignals />
          <SectionHiddenCost />
          <SectionAITRUSTFramework />
          <SectionCommonMistakes />
          <SectionPracticalStrategies />
          <SectionFutureReputation />
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
