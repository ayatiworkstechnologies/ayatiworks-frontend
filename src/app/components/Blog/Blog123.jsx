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
  {
    id: "intro",
    level: 1,
    label: "Introduction: The Digital Growth Dilemma for Chennai Businesses",
  },
  {
    id: "what-is-performance-marketing",
    level: 1,
    label: "What is Performance Marketing?",
  },
  {
    id: "why-scaling-2026",
    level: 1,
    label: "Why It’s Scaling in 2026",
  },
  {
    id: "what-is-seo",
    level: 1,
    label: "What is SEO?",
  },
  {
    id: "key-differences",
    level: 1,
    label: "Key Differences Between Performance Marketing and SEO",
  },
  {
    id: "seo-dominates-long-term",
    level: 1,
    label: "Why SEO Still Dominates Long-Term",
  },
  {
    id: "when-to-choose-pm",
    level: 1,
    label: "When Should Chennai Businesses Choose Performance Marketing?",
  },
  {
    id: "when-to-invest-in-seo",
    level: 1,
    label: "When Should Chennai Businesses Invest in SEO?",
  },
  {
    id: "cost-comparison",
    level: 1,
    label: "Cost Comparison: SEO vs Performance Marketing in Chennai",
  },
  {
    id: "roi-breakdown",
    level: 1,
    label: "ROI Breakdown: Short-Term Wins vs Long-Term Gains",
  },
  {
    id: "industry-based-strategy",
    level: 1,
    label: "Industry-Based Strategy: What Works Best for Your Business Type?",
  },
  {
    id: "combining-seo-pm",
    level: 1,
    label: "Why Smart Chennai Brands Are Combining SEO + Performance Marketing",
  },
  { id: "common-mistakes", level: 1, label: "Common Mistakes Businesses Make" },
  { id: "trend-shift-2026", level: 1, label: "2026 Trend Shift: AI Search & AEO" },
  {
    id: "final-verdict",
    level: 1,
    label: "Final Verdict: Where Should You Invest First?",
  },
  { id: "faq", level: 1, label: "FAQs" },
];

const FAQS_DATA = [
  {
    q: "Is SEO better than performance marketing?",
    a: "No. Each serves a different purpose, SEO for long-term growth, performance marketing for immediate results.",
  },
  {
    q: "How long does SEO take in Chennai?",
    a: "Typically 3–6 months, depending on competition and execution quality.",
  },
  {
    q: "Is performance marketing expensive?",
    a: "It can be, especially in competitive industries where cost per click increases.",
  },
  {
    q: "Can small businesses invest in SEO?",
    a: "Yes. SEO is one of the most cost-effective long-term strategies for small businesses.",
  },
  {
    q: "Should I run ads and SEO together?",
    a: "Yes. A hybrid strategy delivers the most balanced and scalable growth.",
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
        <em>The Digital Growth Dilemma for Chennai Businesses</em>
      </h2>
      <p className="section-phara">
        Businesses in Chennai are navigating a high-stakes decision in 2026,
        where should marketing budgets actually go to drive predictable growth?
      </p>
      <p className="section-phara">
        If you're engaging with a{" "}
        <Link
          href="https://www.ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency in Chennai,
        </Link>{" "}
        you’ve likely encountered two dominant schools of thought. One pushes
        for aggressive paid campaigns promising immediate leads. The other
        advocates SEO as the long-term engine for sustainable growth.
      </p>
      <p className="section-phara">
        Here’s the reality: this isn’t a binary choice it’s a{" "}
        <strong>
          {" "}
          strategic allocation decision tied to your growth stage, cash flow,
          and market positioning.
        </strong>
      </p>
      <p className="section-phara">
        With increasing competition across industries, from healthcare and real
        estate to edtech and local services, Chennai businesses need more than
        tactics. They{" "}
        <strong>
          need clarity on ROI timelines, cost structures, and scalability.
        </strong>
      </p>
      <p className="section-phara">This guide breaks it down with precision.</p>
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

export default function AEOArticlePage123() {
  const post = POSTS.find((p) => p.id === 123) || POSTS[0];
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
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
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
          {/* ===== H2: What is Performance Marketing? ===== */}
          <Section
            id="what-is-performance-marketing"
            title="What is Performance Marketing?"
          >
            <p className="section-phara">
              Performance marketing is a results-driven advertising model where
              you pay for measurable outcomes, clicks, leads, or conversions.
            </p>

            <SectionH3 id="core-channels" title="Core Channels">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "Google Ads (Search, Display)",
                  "Meta Ads (Facebook & Instagram)",
                  "YouTube Ads",
                  "LinkedIn Ads (B2B targeting)",
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

          {/* ===== H2: Why It’s Scaling in 2026 ===== */}
          <Section id="why-scaling-2026" title="Why It’s Scaling in 2026">
            <p className="section-phara">
              Performance marketing aligns perfectly with businesses that need
              speed and control:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              {[
                "Immediate traffic generation",
                "Predictable lead acquisition",
                "Data-driven optimization",
                "Laser-targeted audience segmentation",
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

            <SectionH3 id="chennai-use-case-pm" title="Chennai Use Case">
              <p className="section-phara">
                A real estate developer launching a project in OMR can deploy
                Google Ads and start generating qualified leads within 48 hours.
                That’s the power of performance marketing; it compresses time.
              </p>
              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <p className="section-phara italic mb-0">
                  Performance marketing is your demand capture accelerator.
                </p>
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: What is SEO? ===== */}
          <Section id="what-is-seo" title="What is SEO?">
            <p className="section-phara">
              Search Engine Optimization (SEO) is the process of improving your
              website’s visibility on search engines organically, without paying
              for each click.
            </p>

            <SectionH3 id="core-components" title="Core Components">
              <div className="space-y-2 mt-4 ml-1">
                {[
                  "On-page SEO (content, keywords, UX)",
                  "Technical SEO (site speed, indexing, crawlability)",
                  "Off-page SEO (backlinks, authority)",
                  "Local SEO (Google Business optimization)",
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

          {/* ===== H2: Key Differences Between Performance Marketing and SEO ===== */}
          <Section
            id="key-differences"
            title="Key Differences Between Performance Marketing and SEO"
          >
            <p className="section-phara">
              Understanding the fundamental differences between these two powerhouses is the first step in deciding where to allocate your budget. While performance marketing buys you space, SEO earns you authority.
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="w-full border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">Feature</th>
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">Performance Marketing</th>
                    <th className="border border-slate-200 p-4 text-left font-primary text-primary">SEO</th>
                  </tr>
                </thead>
                <tbody className="font-secondary text-base">
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Timeline</td>
                    <td className="border border-slate-200 p-4">Immediate results (within hours)</td>
                    <td className="border border-slate-200 p-4">Long-term (3–6 months for traction)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Cost Model</td>
                    <td className="border border-slate-200 p-4">Pay-per-click or outcome (OPEX)</td>
                    <td className="border border-slate-200 p-4">Strategy & Asset building (CAPEX)</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">Sustainability</td>
                    <td className="border border-slate-200 p-4">Stops when budget stops</td>
                    <td className="border border-slate-200 p-4">Compounding value over time</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 p-4 font-bold">User Intent</td>
                    <td className="border border-slate-200 p-4">Direct response & Lead capture</td>
                    <td className="border border-slate-200 p-4">Educational & Trust-based discovery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Section>

          {/* ===== H2: Why SEO Still Dominates Long-Term ===== */}
          <Section
            id="seo-dominates-long-term"
            title="Why SEO Still Dominates Long-Term"
          >
            <p className="section-phara">
              SEO is not just a marketing tactic—it’s a digital asset-building
              strategy:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              {[
                "Compounding traffic growth",
                "High trust and credibility",
                "Lower cost per acquisition over time",
                "Strong alignment with user intent",
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

            <SectionH3 id="chennai-use-case-seo" title="Chennai Use Case">
              <p className="section-phara">
                A dental clinic ranking for “best dentist in Chennai” can
                generate consistent inbound leads daily, without ad spend.
              </p>
            </SectionH3>
            <SectionH3 id="strategic-takeaway" title="Strategic takeaway:">
              <div className="mt-6 p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                <p className="section-phara italic mb-0">
                  SEO builds owned traffic channels that reduce dependency on
                  paid acquisition.
                </p>
              </div>
              <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/seo-blog-123.png"
                  alt="SEO vs performance marketing strategy comparison"
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: When Should Chennai Businesses Choose Performance Marketing? ===== */}
          <Section
            id="when-to-choose-pm"
            title="When Should Chennai Businesses Choose Performance Marketing?"
          >
            <p className="section-phara">
              Performance marketing is the right lever when your priority is
              speed-to-revenue.
            </p>

            <SectionH3 title="Ideal Scenarios">
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    1. New Business Launch
                  </h4>
                  <p className="section-phara">
                    You need visibility immediately, SEO won’t deliver in the
                    first 90 days.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    2. Product or Service Validation
                  </h4>
                  <p className="section-phara mb-2">Ads help you test:</p>
                  <ul className="space-y-1 ml-4 mb-4">
                    {["Messaging", "Pricing", "Target audience"].map(
                      (item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 section-phara text-base"
                        >
                          <IoCheckmarkDone className="h-4 w-4 text-secondary" />
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    3. Seasonal or Time-Sensitive Campaigns
                  </h4>
                  <p className="section-phara">
                    Festive offers, admissions, or limited-time launches require
                    instant traction.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    4. High-Ticket Sales Funnels
                  </h4>
                  <p className="section-phara">
                    If your funnel is optimized, performance marketing can scale
                    revenue predictably.
                  </p>
                </div>
              </div>
            </SectionH3>

            <SectionH3 title="Best Fit Industries in Chennai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "Real estate",
                  "Coaching institutes",
                  "E-commerce brands",
                  "Event services",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="section-phara font-bold mt-6">
                Bottom line: Performance marketing is your go-to-market engine.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: When Should Chennai Businesses Invest in SEO? ===== */}
          <Section
            id="when-to-invest-in-seo"
            title="When Should Chennai Businesses Invest in SEO?"
          >
            <p className="section-phara">
              SEO becomes critical when your focus shifts from short-term
              acquisition to long-term dominance.
            </p>

            <SectionH3 title="Ideal Scenarios">
              <div className="space-y-6 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    1. You Want Consistent Organic Leads
                  </h4>
                  <p className="section-phara">
                    Businesses like clinics, consultants, and service providers
                    benefit massively from SEO.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    2. Your Customers Search Before Buying
                  </h4>
                  <p className="section-phara">
                    Industries like healthcare, legal, and education rely
                    heavily on search intent.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    3. You’re Building Brand Authority
                  </h4>
                  <p className="section-phara">
                    Ranking on Google builds credibility that ads can’t
                    replicate.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">
                    4. You Want Lower Cost Per Lead Over Time
                  </h4>
                  <p className="section-phara">
                    SEO reduces acquisition costs as rankings improve.
                  </p>
                </div>
              </div>
            </SectionH3>

            <SectionH3 title="Best Fit Industries">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  "Healthcare",
                  "Local services",
                  "B2B consulting",
                  "Education",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 section-phara text-zinc-700 font-medium"
                  >
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="section-phara font-bold mt-6">
                Bottom line: SEO is your long-term growth moat.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: Cost Comparison: SEO vs Performance Marketing in Chennai ===== */}
          <Section
            id="cost-comparison"
            title="Cost Comparison: SEO vs Performance Marketing in Chennai"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-xl font-bold text-primary mb-4">
                  Performance Marketing Costs
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 section-phara">
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>₹10,000 to ₹2,00,000+/month (ad spend)</span>
                  </li>
                  <li className="flex items-center gap-3 section-phara">
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>Additional agency fees</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="text-xl font-bold text-primary mb-4">
                  SEO Costs
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 section-phara">
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>₹15,000 to ₹1,00,000+/month</span>
                  </li>
                  <li className="flex items-center gap-3 section-phara">
                    <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                    <span>No cost per click</span>
                  </li>
                </ul>
              </div>
            </div>

            <SectionH3 title="Strategic Insight">
              <p className="section-phara">
                • Performance marketing = Ongoing expense (OPEX)
                <br />• SEO = Asset investment (CAPEX)
              </p>
              <p className="section-phara mt-4 font-medium italic">
                This distinction is critical. One buys traffic. The other builds
                equity.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: ROI Breakdown: Short-Term Wins vs Long-Term Gains ===== */}
          <Section
            id="roi-breakdown"
            title="ROI Breakdown: Short-Term Wins vs Long-Term Gains"
          >
            <div className="space-y-8 mt-6">
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">
                  Performance Marketing ROI
                </h4>
                <div className="space-y-2">
                  {[
                    "Immediate results",
                    "Predictable scaling",
                    "Linear growth (more spend = more leads)",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 section-phara"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary mb-3">SEO ROI</h4>
                <div className="space-y-2">
                  {[
                    "Delayed results",
                    "Compounding traffic",
                    "Decreasing cost per acquisition over time",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 section-phara"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-secondary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-primary/5 p-6 rounded-xl mt-8 border border-primary/10">
              <p className="section-phara font-bold text-primary mb-2">
                Real Insight
              </p>
              <p className="section-phara italic">
                Businesses that rely only on ads often face rising acquisition
                costs. Businesses that invest in SEO early create defensive
                positioning against competition.
              </p>
            </div>
          </Section>

          {/* ===== H2: Industry-Based Strategy: What Works Best for Your Business Type? ===== */}
          <Section
            id="industry-based-strategy"
            title="Industry-Based Strategy: What Works Best for Your Business Type?"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {[
                {
                  title: "Real Estate",
                  text: "Start with performance marketing → Layer SEO for long-term lead generation",
                },
                {
                  title: "Healthcare",
                  text: "SEO-first strategy → Use ads for high-value services",
                },
                {
                  title: "E-commerce",
                  text: "Hybrid approach → Ads for sales + SEO for organic traffic",
                },
                {
                  title: "Local Services",
                  text: "SEO-dominant → Supplement with ads during peak seasons",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-slate-100 bg-white shadow-sm"
                >
                  <h4 className="font-bold text-secondary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-700 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== H2: Why Smart Chennai Brands Are Combining SEO + Performance Marketing ===== */}
          <Section
            id="combining-seo-pm"
            title="Why Smart Chennai Brands Are Combining SEO + Performance Marketing"
          >
            <p className="section-phara">
              High-growth companies are not choosing between the two, they’re
              integrating both into a unified growth stack.
            </p>

            <SectionH3 title="Hybrid Strategy Framework">
              <div className="space-y-10 mt-10 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
                {[
                  {
                    phase: "Phase 1: Performance Marketing",
                    items: ["Generate immediate traffic", "Validate offers"],
                  },
                  {
                    phase: "Phase 2: SEO Investment",
                    items: ["Build organic visibility", "Reduce paid dependency"],
                  },
                  {
                    phase: "Phase 3: Retargeting Loop",
                    items: [
                      "Use ads to retarget SEO visitors",
                      "Improve conversion rates",
                    ],
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

              <div className="mt-12 p-8 rounded-2xl bg-secondary/5 border border-secondary/10">
                <h4 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                  <span className="h-2 w-8 bg-secondary rounded-full" />
                  Outcome
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    "Lower CAC (Customer Acquisition Cost)",
                    "Higher brand recall",
                    "Sustainable growth engine",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 section-phara font-bold text-primary"
                    >
                      <IoCheckmarkDone className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionH3>
          </Section>

          {/* ===== H2: Common Mistakes Businesses Make ===== */}
          <Section id="common-mistakes" title="Common Mistakes Businesses Make">
            <div className="space-y-4 mt-6">
              {[
                {
                  q: "1. Expecting SEO to Deliver Instant Results",
                  a: "SEO requires consistency and time.",
                },
                {
                  q: "2. Running Ads Without Conversion Tracking",
                  a: "Without data, ad spend becomes guesswork.",
                },
                {
                  q: "3. Ignoring Local SEO",
                  a: "Many Chennai businesses miss out on high-intent local traffic.",
                },
                {
                  q: "4. Choosing Based on Cost Instead of Strategy",
                  a: "Cheaper doesn’t mean better—it means misaligned expectations.",
                },
                {
                  q: "5. Stopping SEO Too Early",
                  a: "Most businesses quit before results compound.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{item.q}</h4>
                    <p className="text-slate-600">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* ===== H2: 2026 Trend Shift: AI Search & AEO ===== */}
          <Section
            id="trend-shift-2026"
            title="2026 Trend Shift: AI Search & AEO"
          >
            <p className="section-phara">
              Search behavior is evolving rapidly.
            </p>
            <SectionH3 title="Key Shifts">
              <ul className="space-y-4 mt-6">
                {[
                  "AI-driven search platforms are influencing discovery",
                  "Zero-click searches are increasing",
                  "Users prefer direct answers over browsing multiple pages",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 section-phara">
                    <IoCheckmarkDone className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                    <span className="font-medium text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionH3>

            <SectionH3 title="What This Means">
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3 section-phara">
                  <IoCheckmarkDone className="h-5 w-5 text-secondary mt-1" />
                  <span>
                    Content must be structured for Answer Engine Optimization
                    (AEO)
                  </span>
                </li>
                <li className="flex items-start gap-3 section-phara">
                  <IoCheckmarkDone className="h-5 w-5 text-secondary mt-1" />
                  <span>
                    Authority and clarity matter more than keyword density
                  </span>
                </li>
                <li className="flex items-start gap-3 section-phara">
                  <IoCheckmarkDone className="h-5 w-5 text-secondary mt-1" />
                  <span>
                    Brands need to optimize for visibility across AI platforms,
                    not just Google
                  </span>
                </li>
              </ul>
            </SectionH3>
          </Section>

          {/* ===== H2: Final Verdict: Where Should You Invest First? ===== */}
          <Section
            id="final-verdict"
            title="Final Verdict: Where Should You Invest First?"
          >
            <p className="section-phara">Here’s the strategic breakdown:</p>
            <div className="space-y-3 mt-4">
              <p className="section-phara">
                • <strong>Need leads immediately?</strong> → Start with
                Performance Marketing
              </p>
              <p className="section-phara">
                • <strong>Want sustainable growth?</strong> → Invest in SEO
              </p>
              <p className="section-phara">
                • <strong>Want market leadership?</strong> → Combine both
                strategically
              </p>
            </div>
            <p className="section-phara mt-8 p-6 bg-slate-900 text-white rounded-xl text-center font-bold text-xl">
              For most Chennai businesses, the optimal path is:
              <br />
              <span className="text-secondary">
                Start with ads for traction → Build SEO for stability →
                Integrate both for scale
              </span>
            </p>
          </Section>

          <Section id="faq" title="Frequently Asked Questions (FAQs)">
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
