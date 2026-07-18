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
  { id: "intro", level: 1, label: "Introduction: The Difference Between Branding and Marketing" },
  { id: "what-is-branding", level: 1, label: "What is Branding?" },
  { id: "what-is-marketing", level: 1, label: "What is Marketing?" },
  { id: "why-together", level: 1, label: "Why Branding and Marketing Must Work Together" },
  { id: "why-fails", level: 1, label: "Why Marketing Without Branding Fails in the Long Run" },
  { id: "6-lessons", level: 1, label: "6 Strategic Lessons for 2026 Businesses" },
  { id: "lesson-1", level: 2, label: "Lesson 1: Brand Recognition Lowers Customer Acquisition Costs" },
  { id: "lesson-2", level: 2, label: "Lesson 2: Trust Drives More Revenue Than Visibility" },
  { id: "lesson-3", level: 2, label: "Lesson 3: Consistent Branding Improves Marketing Performance" },
  { id: "lesson-4", level: 2, label: "Lesson 4: Branding Creates Long-Term Business Assets" },
  { id: "lesson-5", level: 2, label: "Lesson 5: AI-Powered Marketing Requires a Strong Brand Foundation" },
  { id: "lesson-6", level: 2, label: "Lesson 6: The Most Successful 2026 Businesses Integrate Branding and Marketing" },
  { id: "common-signs", level: 1, label: "Common Signs Your Business is Marketing Without Branding" },
  { id: "future-trends", level: 1, label: "Future Trends: Branding and Marketing in 2026 and Beyond" },
  { id: "conclusion", level: 1, label: "Conclusion" },
];

const FAQS_DATA = [
  {
    q: "1. What is the difference between branding and marketing?",
    a: "Branding defines how people perceive your business, while marketing promotes your products and services to generate customer action.",
  },
  {
    q: "2. Can marketing work without branding?",
    a: "Yes, but results are often short lived, expensive, and difficult to sustain.",
  },
  {
    q: "3. Why is branding important for business growth?",
    a: "Branding builds trust, recognition, loyalty, and differentiation, which support long-term growth.",
  },
  {
    q: "4. How does branding improve marketing ROI?",
    a: "Strong branding increases conversion rates, improves customer retention, and lowers acquisition costs.",
  },
  {
    q: "5. What is brand positioning?",
    a: "Brand positioning defines how a business is perceived relative to competitors in the market.",
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
          open
            ? "bg-white text-primary font-primary"
            : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-xl leading-5 font-bold">{q}</h3>
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
          open ? "max-h-[500px] py-3" : "max-h-0 py-0",
        ].join(" ")}
      >
        <p className="font-secondary text-lg text-black/80 whitespace-pre-line">
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
        Businesses today have access to more marketing channels than ever before. From search engines and social media platforms to email automation and AI powered advertising, companies can reach millions of potential customers with unprecedented speed and precision.
      </p>
      <p className="section-phara">
        Yet despite these opportunities, many organizations continue to face a common challenge: marketing efforts produce short term results but fail to create lasting business growth.
      </p>
      <p className="section-phara">
        The reason often lies in a fundamental misunderstanding of the relationship between branding and marketing.
      </p>
      <p className="section-phara">
        Many businesses invest heavily in campaigns, advertisements, and lead-generation activities without first establishing a strong brand identity. While marketing may generate traffic and sales, branding creates recognition, trust, and loyalty. Without branding, marketing becomes increasingly expensive, less effective, and difficult to scale.
      </p>
      <p className="section-phara">
        As customer expectations evolve and competition intensifies in 2026, organizations can no longer afford to treat branding as an afterthought. Businesses that focus exclusively on marketing tactics often struggle with rising acquisition costs, inconsistent messaging, and low customer retention.
      </p>
      <p className="section-phara">
        At Ayatiworks, we believe sustainable growth happens when branding and marketing work together. Through strategic consulting, digital transformation, and Ayati Intelligence, we help businesses create meaningful customer experiences that drive long term success.
      </p>
      <p className="section-phara">
        This article explores why marketing without branding is one of the costliest mistakes businesses make and shares six strategic lessons that can help organizations build stronger brands and achieve better marketing results in 2026 and beyond.
      </p>
      <h2 className="mt-8 text-left text-2xl section-title">What is the Difference Between Branding and Marketing?</h2>
      <p className="section-phara">
        One of the biggest misconceptions in business is that branding and marketing are the same thing. While closely connected, they serve different purposes.
      </p>
    </section>
  );
}

function SectionWhatIsBranding() {
  return (
    <Section id="what-is-branding" title="What is Branding?">
      <p className="section-phara">Most people think branding is just a logo, a colour scheme, or a catchy tagline.</p>
      <p className="section-phara">It's not.</p>
      <p className="section-phara">
        Branding is how people perceive your business. It's the impression customers have when they hear your company name, visit your website, interact with your team, or use your products and services.
      </p>
      <p className="section-phara">
        In simple terms, branding defines who you are, what you stand for, what makes you different, and why customers should choose you over competitors.
      </p>
      <p className="section-phara">
        A strong brand is built through a combination of your identity, messaging, values, vision, customer experience, market positioning, and overall reputation. Every interaction a customer has with your business contributes to how they perceive your brand.
      </p>
      <p className="section-phara">
        Think about companies like Apple, Nike, or Tesla. Customers don't just buy their products they buy into the story, values, and experience those brands represent.
      </p>
      <p className="section-phara">That's the power of branding.</p>
      <p className="section-phara">
        When done effectively, branding creates trust, builds emotional connections, and influences purchasing decisions long before a customer is ready to buy. It helps your business stand out in a crowded market and creates a memorable experience that customers return to again and again.
      </p>
      <p className="section-phara">Your logo is simply one part of the equation.</p>
      <p className="section-phara">
        Your brand is the feeling people associate with your business, the promise they expect you to deliver, and the reason they remember you long after they've interacted with your company.
      </p>
    </Section>
  );
}

function SectionWhatIsMarketing() {
  return (
    <Section id="what-is-marketing" title="What is Marketing?">
      <p className="section-phara">
        Marketing is the process of getting your products or services in front of the right audience and motivating them to take action.
      </p>
      <p className="section-phara">
        Whether it's visiting your website, downloading a guide, requesting a demo, or making a purchase, marketing is designed to move potential customers through the buying journey.
      </p>
      <p className="section-phara">
        Today, marketing takes many forms. Businesses use search engine optimization (SEO), content marketing, social media campaigns, paid advertising, email marketing, influencer partnerships, lead generation strategies, and marketing automation to attract and engage potential customers.
      </p>
      <p className="section-phara">
        At its core, marketing is about visibility.
      </p>
      <p className="section-phara">
        It helps people discover your brand, understand your offerings, and take the next step toward becoming a customer.
      </p>
      <p className="section-phara">But here's the important part:</p>
      <p className="section-phara">
        Marketing gets attention. Branding gives people a reason to care.
      </p>
      <p className="section-phara">
        You can run the best advertising campaign in the world and drive thousands of visitors to your website. However, if customers don't trust your business or understand what makes you different, those marketing efforts will struggle to deliver long-term results.
      </p>
      <p className="section-phara">
        That's why successful businesses don't rely on marketing alone. They combine effective marketing with a strong brand foundation to attract, engage, and retain customers.
      </p>
      <p className="section-phara">
        In simple terms, marketing drives traffic and conversions, while branding creates trust and loyalty. Together, they become a powerful engine for sustainable business growth.
      </p>
    </Section>
  );
}

function SectionWhyTogether() {
  return (
    <Section id="why-together" title="Why Branding and Marketing Must Work Together">
      <p className="section-phara">Think of branding as the reason customers choose you and marketing as the method used to reach them.</p>
      <p className="section-phara">Without branding, marketing becomes a constant battle for attention.</p>
      <p className="section-phara">Without marketing, even the strongest brand may struggle to reach new audiences.</p>
      <p className="section-phara">The most successful organizations integrate branding and marketing into a unified growth strategy.</p>
    </Section>
  );
}

function SectionWhyFails() {
  return (
    <Section id="why-fails" title="Why Marketing Without Branding Fails in the Long Run">
      <p className="section-phara">Businesses that prioritize marketing without establishing a strong brand often experience several challenges.</p>
      
      <p className="section-phara font-bold mt-4">Rising Advertising Costs</p>
      <p className="section-phara">Digital advertising costs continue to increase across industries.</p>
      <p className="section-phara">When customers don’t recognize your brand, every click requires more persuasion and greater spending.</p>
      <p className="section-phara">Strong brands reduce acquisition costs because familiarity improves engagement and conversion rates.</p>
      
      <p className="section-phara font-bold mt-4">Lower Customer Loyalty</p>
      <p className="section-phara">Promotions can drive purchases.</p>
      <p className="section-phara">Brands create loyalty.</p>
      <p className="section-phara">Customers return to businesses they trust and remember. Without branding, businesses often rely on continuous discounts and aggressive marketing campaigns.</p>

      <p className="section-phara font-bold mt-4">Weak Differentiation</p>
      <p className="section-phara">Many companies compete on features and price alone.</p>
      <p className="section-phara">Without a clear brand positioning strategy, businesses become interchangeable with competitors.</p>
      <p className="section-phara">Strong branding helps businesses stand out in crowded markets.</p>

      <p className="section-phara font-bold mt-4">Reduced Trust</p>
      <p className="section-phara">Trust has become one of the most valuable business assets.</p>
      <p className="section-phara">Consumers research companies extensively before making decisions. Inconsistent branding and unclear messaging can quickly undermine credibility.</p>

      <p className="section-phara font-bold mt-4">Inconsistent Customer Experience</p>
      <p className="section-phara">When branding is not clearly defined, customers encounter different messages across websites, advertisements, emails, and social media channels.</p>
      <p className="section-phara">This inconsistency creates confusion and weakens customer confidence.</p>

      <p className="section-phara font-bold mt-4">Difficulty Scaling</p>
      <p className="section-phara">Organizations that lack a strong brand foundation often struggle to expand into new markets because they have not established a recognizable identity that customers can trust.</p>
    </Section>
  );
}

function SectionSixLessons() {
  return (
    <Section id="6-lessons" title="6 Strategic Lessons for 2026 Businesses">
      <SectionH3 id="lesson-1" title="Lesson 1: Brand Recognition Lowers Customer Acquisition Costs">
        <p className="section-phara">Customer acquisition costs continue to rise as competition increases.</p>
        <p className="section-phara">A recognizable brand helps businesses reduce these costs by creating familiarity before prospects engage with marketing campaigns.</p>
        <p className="section-phara">People naturally gravitate toward brands they recognize.</p>
        <p className="section-phara font-bold mt-4">Benefits of Strong Brand Recognition</p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-lg text-slate-700 font-secondary">
          <li>Higher click-through rates</li>
          <li>Better conversion rates</li>
          <li>Increased direct traffic</li>
          <li>Improved referral rates</li>
          <li>Greater customer retention</li>
        </ul>
        <p className="section-phara mt-4">Well known brands spend less effort convincing customers because trust already exists.</p>
        <p className="section-phara font-bold mt-4">Ayatiworks Insight</p>
        <p className="section-phara">At Ayatiworks, we help businesses build memorable brand identities before scaling marketing investments.</p>
        <p className="section-phara">By developing strong positioning, visual identity systems, and messaging frameworks, organizations can improve campaign performance while reducing acquisition costs.</p>
      </SectionH3>

      <SectionH3 id="lesson-2" title="Lesson 2: Trust Drives More Revenue Than Visibility">
        <p className="section-phara">Visibility attracts attention.</p>
        <p className="section-phara">Trust converts attention into revenue.</p>
        <p className="section-phara">Customers often choose brands they trust over unfamiliar alternatives, even when prices are higher.</p>
        <p className="section-phara font-bold mt-4">Trust impacts:</p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-lg text-slate-700 font-secondary">
          <li>Conversion rates</li>
          <li>Customer retention</li>
          <li>Average order value</li>
          <li>Brand advocacy</li>
          <li>Lifetime customer value</li>
        </ul>
        <p className="section-phara font-bold mt-4">Building Trust Through Branding</p>
        <p className="section-phara">Trust is developed through:</p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-lg text-slate-700 font-secondary">
          <li>Consistent communication</li>
          <li>Authentic messaging</li>
          <li>Reliable customer experiences</li>
          <li>Transparent business practices</li>
          <li>Strong visual identity</li>
        </ul>
        <p className="section-phara font-bold mt-4">Ayati Intelligence Perspective</p>
        <p className="section-phara">At Ayatiworks, AI stands for Ayati Intelligence.</p>
        <p className="section-phara">Ayati Intelligence combines artificial intelligence, data driven insights, human expertise, and strategic branding to help businesses understand customer behavior more effectively.</p>
        <p className="section-phara">This enables organizations to create personalized experiences that strengthen trust and improve customer relationships.</p>
      </SectionH3>

      <SectionH3 id="lesson-3" title="Lesson 3: Consistent Branding Improves Marketing Performance">
        <p className="section-phara">Consistency is one of the most powerful drivers of marketing effectiveness.</p>
        <p className="section-phara">When customers encounter the same messaging, tone, and visual identity across multiple channels, recognition increases.</p>
        <p className="section-phara font-bold mt-4">Key Elements of Consistent Branding</p>
        <p className="section-phara font-bold mt-2">Brand Voice</p>
        <p className="section-phara">Your communication style should remain consistent across every customer touchpoint.</p>
        <p className="section-phara font-bold mt-2">Messaging Framework</p>
        <p className="section-phara">Core messages should reinforce the same value proposition regardless of channel.</p>
        <p className="section-phara font-bold mt-2">Visual Identity</p>
        <p className="section-phara">Colors, typography, imagery, and design systems should reflect a unified brand experience.</p>
        <p className="section-phara font-bold mt-2">Customer Perception</p>
        <p className="section-phara">Consistent branding shapes how customers think about your company.</p>
        <p className="section-phara font-bold mt-4">Example</p>
        <p className="section-phara">Imagine two businesses running identical advertising campaigns.</p>
        <p className="section-phara">One has a consistent identity, messaging, and visual experience.</p>
        <p className="section-phara">The other uses different messaging and branding across channels.</p>
        <p className="section-phara">The first business is far more likely to generate trust and conversions because customers recognize and understand the brand.</p>
      </SectionH3>

      <SectionH3 id="lesson-4" title="Lesson 4: Branding Creates Long-Term Business Assets">
        <p className="section-phara">Marketing campaigns produce immediate results.</p>
        <p className="section-phara">Branding creates long term assets that continue generating value for years.</p>
        <p className="section-phara font-bold mt-4">Valuable Brand Assets</p>
        <p className="section-phara font-bold mt-2">Brand Equity</p>
        <p className="section-phara">Strong brands command premium pricing and greater customer loyalty.</p>
        <p className="section-phara font-bold mt-2">Reputation</p>
        <p className="section-phara">A positive reputation becomes a competitive advantage that competitors cannot easily replicate.</p>
        <p className="section-phara font-bold mt-2">Customer Loyalty</p>
        <p className="section-phara">Loyal customers generate repeat revenue and referrals.</p>
        <p className="section-phara font-bold mt-2">Community</p>
        <p className="section-phara">Strong brands create communities of engaged customers who actively support the business.</p>
        <p className="section-phara font-bold mt-2">Recognition</p>
        <p className="section-phara">Brand recognition reduces the effort required to attract new customers.</p>
        <p className="section-phara mt-4">Unlike advertising spend, which stops producing results once the budget ends, branding continues delivering value over time.</p>
        <p className="section-phara">This is why branding should be viewed as an investment rather than an expense.</p>
      </SectionH3>

      <SectionH3 id="lesson-5" title="Lesson 5: AI-Powered Marketing Requires a Strong Brand Foundation">
        <p className="section-phara">Artificial intelligence is transforming marketing at an unprecedented pace.</p>
        <p className="section-phara">Businesses now use AI for:</p>
        <ul className="ml-6 mt-2 list-disc space-y-1 text-lg text-slate-700 font-secondary">
          <li>Customer segmentation</li>
          <li>Predictive analytics</li>
          <li>Personalized recommendations</li>
          <li>Content generation</li>
          <li>Marketing automation</li>
          <li>Customer journey optimization</li>
        </ul>
        <p className="section-phara mt-4">However, AI alone cannot create a meaningful brand.</p>
        <p className="section-phara">Without a clear brand strategy, AI powered campaigns may generate activity without creating lasting customer relationships.</p>
        <p className="section-phara font-bold mt-4">Why Brand Foundation Matters</p>
        <p className="section-phara">AI can determine what customers want.</p>
        <p className="section-phara">Branding determines why customers should choose you.</p>
        <p className="section-phara">A strong brand provides the strategic direction that AI powered marketing needs to succeed.</p>
        <p className="section-phara font-bold mt-4">Ayati Intelligence: A Smarter Approach</p>
        <p className="section-phara">At Ayatiworks, AI means Ayati Intelligence a strategic framework that combines artificial intelligence, human creativity, customer insights, and brand intelligence.</p>
        <p className="section-phara">Rather than treating AI as a standalone technology, Ayati Intelligence integrates data driven decision making with strategic branding to create meaningful customer experiences and sustainable business growth.</p>
        <p className="section-phara">This approach helps businesses align technology with customer expectations while maintaining a strong brand identity.</p>
      </SectionH3>

      <SectionH3 id="lesson-6" title="Lesson 6: The Most Successful 2026 Businesses Integrate Branding and Marketing">
        <p className="section-phara">The future belongs to organizations that stop viewing branding and marketing as separate functions.</p>
        <p className="section-phara">Leading companies understand that branding and marketing are interconnected components of a single growth strategy.</p>
        <p className="section-phara font-bold mt-4">Characteristics of Brand-Led Marketing Organizations</p>
        <p className="section-phara font-bold mt-2">Unified Growth Strategy</p>
        <p className="section-phara">Every marketing initiative supports long term brand objectives.</p>
        <p className="section-phara font-bold mt-2">Omnichannel Experiences</p>
        <p className="section-phara">Customers receive consistent experiences across all touchpoints.</p>
        <p className="section-phara font-bold mt-2">Customer-Centric Communication</p>
        <p className="section-phara">Messaging is designed around customer needs rather than company priorities.</p>
        <p className="section-phara font-bold mt-2">Data-Driven Decisions</p>
        <p className="section-phara">Organizations use insights to improve both branding and marketing performance.</p>
        <p className="section-phara font-bold mt-2">Strong Market Positioning</p>
        <p className="section-phara">Customers immediately understand what the brand represents and why it matters.</p>
        <p className="section-phara font-bold mt-4">Actionable Recommendations</p>
        <p className="section-phara">Businesses should:</p>
        <ol className="ml-6 mt-2 list-decimal space-y-1 text-lg text-slate-700 font-secondary">
          <li>Define their brand positioning.</li>
          <li>Establish clear messaging guidelines.</li>
          <li>Create a consistent visual identity.</li>
          <li>Invest in customer experience.</li>
          <li>Align marketing campaigns with brand strategy.</li>
          <li>Leverage AI responsibly through strategic frameworks like Ayati Intelligence.</li>
        </ol>
      </SectionH3>
    </Section>
  );
}

function SectionCommonSigns() {
  return (
    <Section id="common-signs" title="Common Signs Your Business is Marketing Without Branding">
      <p className="section-phara">If your business experiences any of the following challenges, branding may need greater attention.</p>
      <p className="section-phara font-bold mt-4">Branding Checklist</p>
      <ul className="ml-6 mt-2 list-disc space-y-1 text-lg text-slate-700 font-secondary">
        <li>Running ads without a clear brand identity</li>
        <li>Inconsistent messaging across channels</li>
        <li>Low customer retention rates</li>
        <li>Weak social media engagement</li>
        <li>Competing primarily on price</li>
        <li>Frequent changes in positioning</li>
        <li>Lack of emotional customer connection</li>
        <li>Poor brand recognition</li>
        <li>High customer acquisition costs</li>
        <li>Limited referral business</li>
      </ul>
      <p className="section-phara mt-4">Addressing these issues often requires strengthening your branding strategy before increasing marketing spend.</p>
    </Section>
  );
}

function SectionFutureTrends() {
  return (
    <Section id="future-trends" title="Future Trends: Branding and Marketing in 2026 and Beyond">
      <p className="section-phara">The relationship between branding and marketing will continue evolving.</p>
      <p className="section-phara">Several trends are expected to shape the future.</p>
      <p className="section-phara font-bold mt-4">AI Driven Personalization</p>
      <p className="section-phara">Customers increasingly expect personalized experiences tailored to their preferences and behaviors.</p>
      <p className="section-phara font-bold mt-2">Brand Communities</p>
      <p className="section-phara">Organizations will invest more in building engaged communities rather than simply acquiring customers.</p>
      <p className="section-phara font-bold mt-2">Trust Based Marketing</p>
      <p className="section-phara">Transparency and authenticity will become critical competitive advantages.</p>
      <p className="section-phara font-bold mt-2">First Party Data Strategies</p>
      <p className="section-phara">Businesses will rely more heavily on direct customer relationships and owned data assets.</p>
      <p className="section-phara font-bold mt-2">Human Centered Experiences</p>
      <p className="section-phara">Despite technological advancements, customers will continue valuing genuine human connections.</p>
      <p className="section-phara font-bold mt-2">Predictive Customer Engagement</p>
      <p className="section-phara">AI powered insights will enable brands to anticipate customer needs before they arise.</p>
      <p className="section-phara mt-4">Organizations that combine these trends with strong branding foundations will be best positioned for long term success.</p>
    </Section>
  );
}

function SectionConclusion() {
  return (
    <Section id="conclusion" title="Conclusion">
      <p className="section-phara">The debate between marketing vs branding is not about choosing one over the other.</p>
      <p className="section-phara">As competition increases and customer expectations evolve, businesses that rely solely on marketing will face rising costs and diminishing returns. Organizations that invest in strategic branding create stronger customer relationships, improve marketing ROI, and build long term competitive advantages.</p>
      <p className="section-phara">At Ayatiworks, we help businesses align branding, marketing, and technology through Ayati Intelligence a unique approach that combines artificial intelligence, human expertise, customer insights, and brand innovation.</p>
      <p className="section-phara">If your organization is ready to build a future ready brand that delivers sustainable growth, now is the time to integrate branding and marketing into a unified strategy.</p>
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
    <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
      <nav
        className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
        aria-label="Table of contents"
      >
        <div className="border-b border-slate-200 bg-slate-50 px-3 py-3 text-2xl section-title">
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

            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {Array.isArray(title)
                ? title.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
                : title}
            </h2>

            {subline && (
              <p className="mt-3 text-lg font-secondary text-slate-100/90">
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
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-1">
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

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage127() {
  const post = POSTS.find((p) => p.id === 127) || POSTS[0];
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
        datePublished: "2026-07-18",
        dateModified: "2026-07-18",
        keywords: [
          "branding vs marketing",
          "brand strategy 2026",
          "marketing ROI",
          "brand recognition",
          "Ayati Intelligence",
          "branding services",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="blog-127-schema"
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
          ctaname="Talk to a Brand Consultant"
          ctahref="/contact-us"
          author={{
            name: "Karthick Raja",
            role: "Jr Content Writer",
            avatar: "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/teams/male.png",
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
          <SectionWhatIsBranding />
          <SectionWhatIsMarketing />
          <SectionWhyTogether />
          <SectionWhyFails />
          <SectionSixLessons />
          <SectionCommonSigns />
          <SectionFutureTrends />
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
