"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

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
  { id: "intro", level: 1, label: "Introduction: The Marketing Strategy Dilemma in 2026" },
  { id: "what-is-brand-marketing", level: 1, label: "What is Brand Marketing in Digital Marketing?" },
  { id: "what-is-performance-marketing", level: 1, label: "What is Performance Marketing?" },
  { id: "brand-vs-performance", level: 1, label: "Brand Marketing vs Performance Marketing: Core Differences" },
  { id: "reason-1", level: 1, label: "Reason #1: Long-Term Equity vs Short-Term Conversions" },
  { id: "reason-2", level: 1, label: "Reason #2: Emotional Connection vs Data-Driven Targeting" },
  { id: "reason-3", level: 1, label: "Reason #3: Customer Journey Influence in B2B vs B2C" },
  { id: "reason-4", level: 1, label: "Reason #4: Cost Efficiency Over Time" },
  { id: "reason-5", level: 1, label: "Reason #5: Scalability and Market Positioning" },
  { id: "what-works-b2b", level: 1, label: "What Works Best for B2B Businesses?" },
  { id: "what-works-b2c", level: 1, label: "What Works Best for B2C Businesses?" },
  { id: "hybrid-strategy", level: 1, label: "The Hybrid Strategy: Why Integration Wins in 2026" },
  { id: "role-of-brand-consultants", level: 1, label: "The Role of Brand Consultants in Scaling Growth" },
  { id: "future-trends", level: 1, label: "Future Trends: AI, AEO & Full-Funnel Marketing" },
  { id: "final-takeaway", level: 1, label: "Final Takeaway: Choosing the Right Strategy for Your Business" },
  { id: "faq", level: 1, label: "FAQs" },
];

const FAQS_DATA = [
  {
    q: "Is brand marketing better than performance marketing?",
    a: "No. Both serve different purposes, brand marketing builds trust, performance marketing drives conversions.",
  },
  {
    q: "Which is more cost-effective?",
    a: "Brand marketing is more cost-effective in the long run, while performance marketing delivers quicker results.",
  },
  {
    q: "Can small businesses invest in brand marketing?",
    a: "Yes. Even small businesses can build strong brands through consistent messaging and content.",
  },
  {
    q: "Should B2B focus more on brand marketing?",
    a: "Yes. B2B buyers rely heavily on trust and authority before making decisions.",
  },
  {
    q: "Can I run both strategies together?",
    a: "Absolutely. A hybrid approach delivers the best results in 2026.",
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
        <h3 className="text-xl leading-5">{q}</h3>
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
      <h2 className="section-title mb-4 text-left text-3xl">
        <em>The Marketing Strategy Dilemma in 2026</em>
      </h2>
      <p className="section-phara">
        Let’s be honest, most businesses don’t struggle with doing marketing. They struggle with choosing the right kind of marketing.
      </p>
      <p className="section-phara">
        You’ve probably been there. One expert tells you to “run ads and scale fast.” Another insists “SEO and branding are the real game.” And somewhere in between, you’re trying to figure out where your money actually brings results.
      </p>
      <p className="section-phara">
        If you’ve spoken to a{" "}
        <Link
          href="https://www.ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency Chennai
        </Link>
        , chances are this debate has already come up. And it’s not a small decision.
      </p>
      <p className="section-phara">
        Put everything into performance marketing, and you might see quick wins, but feel the pressure to keep spending. Focus only on brand marketing, and you might build something strong, but wonder why leads are slow in the beginning.
      </p>
      <p className="section-phara font-bold">So what’s the right move?</p>
      <p className="section-phara">
        That depends on one thing most businesses overlook, your stage of growth and what your business actually needs right now.
      </p>
      <p className="section-phara">
        This blog isn’t about choosing sides. It’s about helping you understand when to build your brand, when to push for conversions, and how to make both work together without wasting budget.
      </p>
    </section>
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
          In this article
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

/* ---------- MAIN EXPORT ---------- */

export default function AEOArticlePage124() {
  const post = POSTS.find((p) => p.id === 124) || POSTS[0];
  const relatedPosts = getRelatedRecentPosts({
    currentPostId: post.id,
    category: post.category,
    limit: 3,
  });

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-10">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)}
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={
            post.category === "SEO Services" ? "SEO SERVICES" : post.category
          }
          title={[post.bannerTitle]}
          subline={post.subline}
          ctaname={post.ctaname}
          ctahref={post.ctahref}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar:
              "http://89.167.92.220:8088/author/daniel.png",
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
          {/* ===== H2: 2. What is Brand Marketing in Digital Marketing? ===== */}
          <Section
            id="what-is-brand-marketing"
            title="2. What is Brand Marketing in Digital Marketing?"
          >
            <p className="section-phara">
              Brand marketing focuses on building awareness, trust, and emotional
              connection with your audience. It’s not about immediate conversions,
              it’s about long-term perception.
            </p>

            <SectionH3 title="Key Elements:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Storytelling and brand narrative",
                  "Visual identity and consistency",
                  "Content marketing and thought leadership",
                  "Social media presence",
                  "PR and reputation management",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="Core Objective:">
              <p className="section-phara font-bold text-primary">
                To make your brand the first choice in the customer’s mind before they even search.
              </p>
              <p className="section-phara mt-2">
                In B2B, brand marketing positions you as an authority. In B2C, it creates emotional recall.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: 3. What is Performance Marketing? ===== */}
          <Section
            id="what-is-performance-marketing"
            title="3. What is Performance Marketing?"
          >
            <p className="section-phara">
              Performance marketing is conversion-driven marketing, where every
              rupee spent is tied to a measurable outcome, clicks, leads, or sales.
            </p>

            <SectionH3 title="Key Channels:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Google Ads",
                  "Meta Ads",
                  "LinkedIn Ads",
                  "Affiliate marketing",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="Core Objective:">
              <p className="section-phara font-bold text-primary">
                To drive immediate, trackable results.
              </p>
              <p className="section-phara mt-2">
                Unlike brand marketing, performance marketing operates on precision,
                targeting the right audience at the right time with the right message.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: Brand Marketing vs Performance Marketing: Core Differences ===== */}
          <Section
            id="brand-vs-performance"
            title="Brand Marketing vs Performance Marketing: Core Differences"
          >
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">
                      Factor
                    </th>
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">
                      Brand Marketing
                    </th>
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">
                      Performance Marketing
                    </th>
                  </tr>
                </thead>
                <tbody className="font-secondary text-base">
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Focus</td>
                    <td className="border border-slate-200 p-4">Awareness & trust</td>
                    <td className="border border-slate-200 p-4">Leads & conversions</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Timeline</td>
                    <td className="border border-slate-200 p-4">Long-term</td>
                    <td className="border border-slate-200 p-4">Short-term</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Measurement</td>
                    <td className="border border-slate-200 p-4">Indirect (recall, engagement)</td>
                    <td className="border border-slate-200 p-4">Direct (ROI, CPL)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Strategy</td>
                    <td className="border border-slate-200 p-4">Emotional & narrative</td>
                    <td className="border border-slate-200 p-4">Data-driven & tactical</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Sustainability</td>
                    <td className="border border-slate-200 p-4">High</td>
                    <td className="border border-slate-200 p-4">Depends on spend</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ===== H3: Reason #1: Long-Term Equity vs Short-Term Conversions ===== */}
          <SectionH3
            id="reason-1"
            title="5. Reason #1: Long-Term Equity vs Short-Term Conversions"
          >
            <p className="section-phara">
              Brand marketing builds equity that compounds over time. It ensures that
              when customers are ready to buy, your brand is already trusted.
            </p>
            <p className="section-phara">
              Performance marketing, on the other hand, drives instant conversions.
              It’s effective, but only as long as you keep spending.
            </p>
            <div className="bg-primary/5 p-6 rounded-xl mt-6 border border-primary/10">
              <p className="section-phara font-bold text-primary mb-2">Strategic Insight:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li className="section-phara text-base">Brand marketing = Investment</li>
                <li className="section-phara text-base">Performance marketing = Expense</li>
              </ul>
            </div>
          </SectionH3>

          {/* ===== H3: Reason #2: Emotional Connection vs Data-Driven Targeting ===== */}
          <SectionH3
            id="reason-2"
            title="6. Reason #2: Emotional Connection vs Data-Driven Targeting"
          >
            <p className="section-phara">
              Brand marketing taps into emotions, values, and storytelling. It builds loyalty.
            </p>
            <p className="section-phara">
              Performance marketing relies on analytics, targeting, and optimization. It drives action.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl mt-6 border border-slate-100">
              <p className="section-phara font-bold text-primary mb-2">Example:</p>
              <ul className="space-y-2 ml-4 list-disc">
                <li className="section-phara text-base">A B2C fashion brand uses storytelling to build aspiration</li>
                <li className="section-phara text-base">The same brand uses ads to convert interest into sales</li>
              </ul>
            </div>
          </SectionH3>

          {/* ===== H3: Reason #3: Customer Journey Influence in B2B vs B2C ===== */}
          <SectionH3
            id="reason-3"
            title="7. Reason #3: Customer Journey Influence in B2B vs B2C"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="p-5 rounded-lg border border-slate-100 bg-white shadow-sm">
                <h4 className="font-bold text-secondary mb-2">B2B Buying Behavior:</h4>
                <ul className="space-y-1 ml-4 list-disc mb-4">
                  <li className="section-phara text-base">Longer decision cycles</li>
                  <li className="section-phara text-base">Multiple stakeholders</li>
                  <li className="section-phara text-base">Research-driven</li>
                </ul>
                <p className="section-phara italic">Brand marketing plays a critical role in trust-building.</p>
              </div>
              <div className="p-5 rounded-lg border border-slate-100 bg-white shadow-sm">
                <h4 className="font-bold text-secondary mb-2">B2C Buying Behavior:</h4>
                <ul className="space-y-1 ml-4 list-disc mb-4">
                  <li className="section-phara text-base">Shorter cycles</li>
                  <li className="section-phara text-base">Emotion-driven decisions</li>
                  <li className="section-phara text-base">Instant gratification</li>
                </ul>
                <p className="section-phara italic">Performance marketing drives faster conversions.</p>
              </div>
            </div>
          </SectionH3>

          {/* ===== H3: Reason #4: Cost Efficiency Over Time ===== */}
          <SectionH3
            id="reason-4"
            title="8. Reason #4: Cost Efficiency Over Time"
          >
            <p className="section-phara">
              Performance marketing can become expensive as competition increases.
            </p>
            <p className="section-phara">
              SEO and brand-driven content reduce dependency on ads, lowering acquisition costs over time.
            </p>
            <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
              <p className="section-phara font-bold text-primary mb-1">Key Insight:</p>
              <p className="section-phara italic mb-0">
                Businesses that invest only in performance marketing often face rising CAC (Customer Acquisition Cost).
              </p>
            </div>
          </SectionH3>

          {/* ===== H3: Reason #5: Scalability and Market Positioning ===== */}
          <SectionH3
            id="reason-5"
            title="9. Reason #5: Scalability and Market Positioning"
          >
            <p className="section-phara">
              Performance marketing scales with budget.
            </p>
            <p className="section-phara">
              Brand marketing scales with authority and perception.
            </p>
            <p className="section-phara font-bold mt-4">
              The strongest brands dominate not because they spend more, but because they are remembered more.
            </p>
          </SectionH3>

          {/* ===== H2: 10. What Works Best for B2B Businesses? ===== */}
          <Section
            id="what-works-b2b"
            title="10. What Works Best for B2B Businesses?"
          >
            <p className="section-phara font-bold">
              For B2B businesses, brand marketing is non-negotiable.
            </p>

            <SectionH3 title="Why?">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Buyers need trust before conversion",
                  "Thought leadership influences decisions",
                  "Content marketing drives inbound leads",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="Best Approach:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "SEO + LinkedIn content",
                  "Webinars and case studies",
                  "Strategic performance campaigns for lead capture",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: 11. What Works Best for B2C Businesses? ===== */}
          <Section
            id="what-works-b2c"
            title="11. What Works Best for B2C Businesses?"
          >
            <p className="section-phara font-bold">
              For B2C, performance marketing often leads the strategy.
            </p>

            <SectionH3 title="Why?">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Faster purchase decisions",
                  "High competition",
                  "Price sensitivity",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="Best Approach:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Meta Ads + Google Ads",
                  "Influencer marketing",
                  "Brand storytelling for recall",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: 12. The Hybrid Strategy: Why Integration Wins in 2026 ===== */}
          <Section
            id="hybrid-strategy"
            title="12. The Hybrid Strategy: Why Integration Wins in 2026"
          >
            <p className="section-phara">
              Top-performing brands don’t choose, they integrate.
            </p>

            <SectionH3 title="Hybrid Framework:">
              <div className="space-y-10 mt-10 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {[
                  {
                    phase: "Phase 1: Performance Marketing",
                    items: ["Generate traffic and validate offers"],
                  },
                  {
                    phase: "Phase 2: Brand Marketing",
                    items: ["Build authority and trust"],
                  },
                  {
                    phase: "Phase 3: Retargeting",
                    items: ["Convert and nurture leads"],
                  },
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12 group">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold shadow-lg transition-transform group-hover:scale-110 z-10">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                        {step.phase}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.items.map((item, subIdx) => (
                          <li
                            key={subIdx}
                            className="flex items-center gap-3 p-3 rounded-lg border border-slate-50 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all"
                          >
                            <span className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded bg-secondary text-white font-bold text-xs uppercase">
                              {String.fromCharCode(97 + subIdx)}
                            </span>
                            <span className="section-phara text-base font-medium">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="Outcome:">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {[
                  "Lower CAC",
                  "Higher retention",
                  "Strong brand recall",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="h-6 w-6 text-secondary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: 13. The Role of Brand Consultants in Scaling Growth ===== */}
          <Section
            id="role-of-brand-consultants"
            title="13. The Role of Brand Consultants in Scaling Growth"
          >
            <p className="section-phara">
              At a certain stage, businesses hit a plateau, not because of lack of marketing, but because of lack of brand clarity.
            </p>
            <p className="section-phara font-bold">
              This is where brand consultants become critical.
            </p>

            <SectionH3 title="By leveraging Expert Brand Growth Solutions, businesses can:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Define a clear brand positioning",
                  "Align messaging across channels",
                  "Build a consistent identity",
                  "Strengthen market differentiation",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>
            <p className="section-phara mt-6 italic">
              Without this layer, performance marketing becomes inefficient, and brand marketing becomes inconsistent.
            </p>
          </Section>

          {/* ===== H2: 14. Future Trends: AI, AEO & Full-Funnel Marketing ===== */}
          <Section
            id="future-trends"
            title="14. Future Trends: AI, AEO & Full-Funnel Marketing"
          >
            <p className="section-phara">
              The marketing landscape is evolving rapidly.
            </p>

            <SectionH3 title="Key Trends:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "AI-driven personalization",
                  "Answer Engine Optimization (AEO)",
                  "Zero-click search behavior",
                  "Full-funnel marketing strategies",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>

            <SectionH3 title="What This Means:">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Content must answer intent instantly",
                  "Brands must exist across platforms, not just Google",
                  "Integration is no longer optional",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: 15. Choosing the Right Strategy for Your Business ===== */}
          <Section
            id="final-takeaway"
            title="15. Final Takeaway: Choosing the Right Strategy for Your Business"
          >
            <p className="section-phara">Here’s the strategic breakdown:</p>
            <div className="space-y-3 mt-4">
              <p className="section-phara">
                • <strong>Want immediate results?</strong> → Performance Marketing
              </p>
              <p className="section-phara">
                • <strong>Want long-term growth?</strong> → Brand Marketing
              </p>
              <p className="section-phara">
                • <strong>Want market dominance?</strong> → Combine both
              </p>
            </div>
            <p className="section-phara mt-8 p-6 bg-slate-900 text-white rounded-xl text-center font-bold text-xl">
              The Smart Play:
              <br />
              <span className="text-secondary">
                Start with performance marketing for traction, build brand marketing for sustainability, and integrate both for scale.
              </span>
            </p>
          </Section>

          {/* ===== H2: 16. FAQs ===== */}
          <Section id="faq" title="16. FAQs">
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


