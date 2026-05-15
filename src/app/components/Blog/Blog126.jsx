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
  { id: "intro", level: 1, label: "Introduction: The End of FAQ Rich Results" },
  {
    id: "what-announced",
    level: 1,
    label: "What Exactly Did Google Announce?",
  },
  {
    id: "why-removing",
    level: 1,
    label: "Why Google Is Removing FAQ Rich Results",
  },
  {
    id: "rise-and-fall",
    level: 1,
    label: "The Rise and Fall of FAQ Schema in SEO",
  },
  {
    id: "ctr-impact",
    level: 1,
    label: "How This Update Impacts Organic CTR and SERP Visibility",
  },
  {
    id: "remove-schema",
    level: 1,
    label: "Should You Remove FAQ Schema From Your Website?",
  },
  { id: "faqs-still-matter", level: 1, label: "FAQs Still Matter: Here’s Why" },
  {
    id: "user-experience",
    level: 2,
    label: "User Experience & Information Clarity",
  },
  {
    id: "ai-search-optimization",
    level: 2,
    label: "AI Search & LLM Optimization",
  },
  { id: "voice-search", level: 2, label: "Voice Search Relevance" },
  { id: "alternative-search", level: 2, label: "Alternative Search Engines" },
  {
    id: "helpful-vs-stuffed",
    level: 1,
    label: "The Difference Between Helpful FAQs vs Keyword-Stuffed FAQs",
  },
  {
    id: "faqs-correctly-2026",
    level: 1,
    label: "How to Use FAQs Correctly in 2026",
  },
  { id: "relevance-volume", level: 2, label: "Relevance Over Volume" },
  { id: "contextual-placement", level: 2, label: "Contextual Placement" },
  { id: "unique-questions", level: 2, label: "Unique Questions Only" },
  { id: "intent-formatting", level: 2, label: "Intent-Based Formatting" },
  {
    id: "seo-focus-instead",
    level: 1,
    label: "What SEOs Should Focus on Instead of FAQ Rich Results",
  },
  { id: "eeat-signals", level: 2, label: "EEAT Signals" },
  {
    id: "ai-optimized-structures",
    level: 2,
    label: "AI-Optimized Content Structures",
  },
  { id: "entity-seo", level: 2, label: "Entity SEO" },
  {
    id: "conversational-search",
    level: 2,
    label: "Conversational Search Optimization",
  },
  { id: "snippet-strategies", level: 2, label: "Featured Snippet Strategies" },
  {
    id: "ai-search-future",
    level: 1,
    label: "FAQ Content and the Future of AI Search",
  },
  {
    id: "llm-qa",
    level: 1,
    label: "How LLMs Still Use Q&A Content Structures",
  },
  {
    id: "replace-lost-ctr",
    level: 1,
    label: "SEO Strategies to Replace Lost FAQ CTR Opportunities",
  },
  {
    id: "common-mistakes",
    level: 1,
    label: "Common Mistakes Brands Will Make After This Update",
  },
  {
    id: "final-thoughts",
    level: 1,
    label: "Final Thoughts: FAQs Are Evolving, Not Dying",
  },
];

const FAQS_DATA = [
  {
    q: "Is Google completely removing FAQs from websites?",
    a: "No. Google is only removing FAQ rich results from Search appearance. Websites can still use FAQs on pages where they genuinely help users understand a topic, service, or process better.",
  },
  {
    q: "Should websites remove FAQ schema after Google’s update?",
    a: "Not necessarily. FAQ schema can still support AI search systems, voice search, and alternative search engines. If your FAQs are relevant and useful, keeping the markup may still provide long-term value.",
  },
  {
    q: "Why did Google stop showing FAQ rich results?",
    a: "Google found that many websites were overusing FAQ schema for keyword stuffing and SERP manipulation rather than helping users. The update is part of Google’s broader push toward helpful, high-quality content experiences.",
  },
  {
    q: "Are FAQs still important for SEO in 2026?",
    a: "Yes. FAQs still play an important role in SEO, AI search visibility, and user experience. Well-structured FAQ sections help users and AI systems quickly identify contextual answers related to search intent, services, pricing, implementation, usability, and decision-making. While Google may no longer prioritize FAQ rich snippets, FAQs continue to provide semantic relevance, conversational context, and structured Q&A content that AI-driven search platforms and LLMs prefer for answer extraction and citations.",
  },
  {
    q: "What should content creators focus on instead of FAQ rich snippets?",
    a: "Content creators should focus on E-E-A-T signals, AI-optimized content structures, conversational search intent, topical authority, and creating genuinely useful informational content that improves user trust and engagement.",
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
        Google has officially started phasing out FAQ rich results from Search,
        marking a major shift in how websites earn visibility on SERPs.
      </p>
      <p className="section-phara">
        For years, SEO teams relied on FAQ schema to occupy more search real
        estate, improve click-through rates, and target additional keyword
        variations.
      </p>
      <p className="section-phara">
        But as search evolves into an AI-driven ecosystem, Google is now
        prioritizing cleaner SERPs and more helpful search experiences over
        excessive rich result clutter.
      </p>
      <p className="section-phara">
        Businesses working with a{" "}
        <Link href="/" className="text-secondary hover:underline">
          modern SEO and digital growth partner
        </Link>{" "}
        must now rethink how content is structured for both traditional search
        and AI-powered discovery.
      </p>
      <p className="section-phara">
        As of May 7, Google officially announced that{" "}
        <Link
          href="https://developers.google.com/search/docs/appearance/structured-data/faqpages"
          className="text-secondary hover:underline"
        >
          FAQ rich results will no longer appear in Search
        </Link>{" "}
        for most websites.
      </p>

      <div className="mt-6 mb-6">
        <Image
          width={1200}
          height={800}
          src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/blogImg/blog-126-2.png"
          alt="Google officially announced that FAQ rich results will no longer appear in Search for most websites"
          className="w-full rounded-xl shadow-md"
        />
      </div>

      <p className="section-phara">
        Shortly after, Google Search Console will retire FAQ reporting, the Rich
        Results Test will remove FAQ support in June, and API support will
        disappear in August.
      </p>
      <p className="section-phara font-bold">
        This is not just a technical SEO update. It signals a larger change in
        how Google wants content creators to think about user intent, SERP
        optimization, and structured content.
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

export default function AEOArticlePage126() {
  const post = POSTS.find((p) => p.id === 126) || POSTS[0];
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
        "@id":
          "https://www.ayatiworks.com/blog/google-faq-rich-results-update-2026",
        headline:
          "Google Is Retiring FAQ Rich Results: What This Means for SEO in 2026",
        description:
          "Google is officially retiring FAQ rich results from Search. Learn what this means for SEO, AI search visibility, FAQ schema, and how content creators should adapt in 2026.",
        image: {
          "@id":
            "https://www.ayatiworks.com/images/helpful-faqs-vs-keyword-stuffed-faqs-google-update-2026.png",
        },
        author: {
          "@type": "Organization",
          name: "Ayatiworks",
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
          "@id":
            "https://www.ayatiworks.com/blog/google-faq-rich-results-update-2026",
        },
        datePublished: "2026-05-14",
        dateModified: "2026-05-14",
        keywords: [
          "Google FAQ update",
          "FAQ rich results",
          "SEO 2026",
          "FAQ schema",
          "AI search optimization",
          "structured data SEO",
          "Google Search update",
        ],
      },
      {
        "@type": "ImageObject",
        "@id":
          "https://www.ayatiworks.com/images/helpful-faqs-vs-keyword-stuffed-faqs-google-update-2026.png",
        contentUrl:
          "https://www.ayatiworks.com/images/helpful-faqs-vs-keyword-stuffed-faqs-google-update-2026.png",
        name: "Helpful FAQs vs Keyword-Stuffed FAQs",
        description:
          "Helpful FAQs vs keyword-stuffed FAQs infographic explaining Google’s 2026 FAQ rich results update and its impact on SEO and AI search visibility.",
        caption: "Helpful FAQs vs Keyword-Stuffed FAQs comparison infographic",
        creator: {
          "@type": "Organization",
          name: "Ayatiworks",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.ayatiworks.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blogs",
            item: "https://www.ayatiworks.com/blogs",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Google FAQ Rich Results Update 2026",
            item: "https://www.ayatiworks.com/blog/google-faq-rich-results-update-2026",
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is Google completely removing FAQs from websites?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Google is only removing FAQ rich results from Search appearance. Websites can still use FAQs on pages where they genuinely help users understand a topic, service, or process better.",
            },
          },
          {
            "@type": "Question",
            name: "Should websites remove FAQ schema after Google’s update?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Not necessarily. FAQ schema can still support AI search systems, voice search, and alternative search engines. If your FAQs are relevant and useful, keeping the markup may still provide long-term value.",
            },
          },
          {
            "@type": "Question",
            name: "Why did Google stop showing FAQ rich results?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Google found that many websites were overusing FAQ schema for keyword stuffing and SERP manipulation rather than helping users. The update is part of Google’s broader push toward helpful, high-quality content experiences.",
            },
          },
          {
            "@type": "Question",
            name: "Are FAQs still important for SEO in 2026?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. FAQs still play an important role in SEO, AI search visibility, and user experience. Well-structured FAQ sections help users and AI systems quickly identify contextual answers related to search intent, services, pricing, implementation, usability, and decision-making.",
            },
          },
          {
            "@type": "Question",
            name: "What should content creators focus on instead of FAQ rich snippets?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Content creators should focus on E-E-A-T signals, AI-optimized content structures, conversational search intent, topical authority, and creating genuinely useful informational content that improves user trust and engagement.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="schema-blog-126"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
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
              "https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/author/daniel.png",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      <header className="border-b border-slate-100 section-container bg-white mt-10">
        <div className="mx-auto px-4 sm:px-6 py-12">
          <h1 className="mx-auto text-center section-title font-primary text-4xl sm:text-5xl leading-tight">
            <span className="text-primary">{post.BlogTitle}</span>
          </h1>
        </div>
      </header>

      <section className="mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 py-16 lg:grid-cols-[280px_minmax(0,1fr)_280px] max-w-[1400px]">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        <article className="prose prose-slate max-w-none md:prose-xl font-secondary">
          <Intro />

          <Section
            id="what-announced"
            title="What Exactly Did Google Announce?"
          >
            <p className="section-phara">
              Google confirmed that FAQ rich results are being deprecated across
              Search. This means pages using FAQPage structured data will no
              longer receive the expandable FAQ snippets that previously
              appeared below search listings.
            </p>
            <SectionH3 id="impacts" title="The update impacts:">
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "FAQ rich results in Google Search",
                  "FAQ reporting inside Google Search Console",
                  "FAQ support within Rich Results Testing tools",
                  "FAQ-related Search Console APIs",
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
              <p className="section-phara mt-4">
                Google’s reasoning is simple: FAQ rich results became heavily
                overused and often manipulated for keyword visibility rather
                than genuine user support.
              </p>
              <p className="section-phara">
                Over time, the search experience became crowded with repetitive
                FAQ sections offering little real value.
              </p>
            </SectionH3>
          </Section>

          <Section
            id="why-removing"
            title="Why Google Is Removing FAQ Rich Results"
          >
            <p className="section-phara">
              FAQ schema started as a helpful enhancement. It allowed websites
              to directly answer user questions within search results. But
              eventually, many websites turned FAQs into an SEO loophole.
            </p>
            <p className="section-phara font-bold">Common misuse included:</p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Adding irrelevant questions only for keyword targeting",
                "Repeating the same FAQs across multiple pages",
                "Using FAQs to artificially increase SERP size",
                "Publishing low-value AI-generated Q&A blocks",
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
            <p className="section-phara mt-4">
              Google’s systems evolved enough to identify these patterns. As a
              result, the search engine decided that widespread FAQ rich
              snippets no longer improved search quality.
            </p>
            <p className="section-phara">
              This aligns with Google’s broader shift toward:
            </p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Helpful content systems",
                "E-E-A-T evaluation",
                "AI-generated search experiences",
                "Intent-focused ranking systems",
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
            <p className="section-phara mt-4 font-bold">
              The update is less about removing FAQs and more about removing
              manipulative SERP tactics.
            </p>
          </Section>

          <Section
            id="rise-and-fall"
            title="The Rise and Fall of FAQ Schema in SEO"
          >
            <p className="section-phara">
              When FAQ schema gained traction, it became one of the easiest wins
              in SEO.
            </p>
            <p className="section-phara">Websites could:</p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Increase SERP footprint",
                "Improve CTR",
                "Rank for long-tail queries",
                "Push competitors lower on mobile results",
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
            <p className="section-phara mt-4">
              For a period, almost every service page, blog, and landing page
              included FAQs, whether they were necessary or not.
            </p>
            <p className="section-phara">
              But this mass adoption diluted the quality of FAQ content.
            </p>
            <p className="section-phara">
              Instead of helping users, FAQs became another keyword placement
              zone.
            </p>
            <p className="section-phara font-bold">
              That ultimately triggered Google’s rollback.
            </p>
          </Section>

          <Section
            id="ctr-impact"
            title="How This Update Impacts Organic CTR and SERP Visibility"
          >
            <p className="section-phara">
              Many websites will likely see changes in click-through rates after
              losing FAQ rich snippets.
            </p>
            <p className="section-phara">
              Previously, FAQ rich results helped listings:
            </p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Occupy more screen space",
                "Increase visibility on mobile",
                "Create additional entry points",
                "Improve engagement metrics",
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
            <p className="section-phara mt-4">
              Now, those advantages disappear.
            </p>
            <p className="section-phara">
              This means SEO strategies that depended heavily on structured FAQ
              visibility may experience reduced SERP dominance.
            </p>
            <p className="section-phara">
              However, this does not mean traffic will collapse.
            </p>
            <p className="section-phara font-bold">
              Websites with genuinely valuable content, strong authority
              signals, and optimized user intent alignment will continue
              performing well.
            </p>
            <p className="section-phara">
              In fact, this update may actually benefit high-quality publishers
              because low-value SERP clutter is being reduced.
            </p>
          </Section>

          <Section
            id="remove-schema"
            title="Should You Remove FAQ Schema From Your Website?"
          >
            <p className="section-phara">
              The answer depends on your broader content strategy.
            </p>
            <p className="section-phara">
              Google has clarified that websites can either:
            </p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Remove FAQ schema entirely",
                "Keep it for alternative search ecosystems",
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
            <p className="section-phara mt-4">That’s important.</p>
            <p className="section-phara">
              While Google may no longer display FAQ rich snippets prominently,
              other systems still utilize structured Q&A formatting.
            </p>
            <p className="section-phara">This includes:</p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "AI search engines",
                "LLM-based discovery systems",
                "Voice assistants",
                "Alternative search platforms",
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
            <p className="section-phara mt-4">
              Removing FAQ schema completely may not be strategically necessary.
            </p>
          </Section>

          <Section id="faqs-still-matter" title="FAQs Still Matter in 2026">
            <p className="section-phara">
              Many SEOs are misunderstanding this update.
            </p>
            <p className="section-phara font-bold">
              Google deprecated FAQ rich results, not FAQs themselves.
            </p>
            <p className="section-phara">
              Well-structured FAQs still play a critical role in content
              optimization.
            </p>

            <SectionH3
              id="user-experience"
              title="User Experience and Information Clarity"
            >
              <p className="section-phara">
                Good FAQs improve usability. They help users:
              </p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "Find quick answers",
                  "Resolve objections",
                  "Understand services better",
                  "Navigate complex topics",
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
              <p className="section-phara mt-4">
                For example, businesses investing in{" "}
                <Link
                  href="https://www.ayatiworks.com/digital-marketing-services/seo"
                  className="text-secondary hover:underline"
                >
                  enterprise SEO services
                </Link>{" "}
                often use FAQs to answer highly specific implementation,
                reporting, and technical questions that users naturally search
                for.
              </p>
              <p className="section-phara font-bold">
                That directly improves page usefulness.
              </p>
            </SectionH3>

            <SectionH3
              id="ai-search-optimization"
              title="AI Search and LLM Optimization"
            >
              <p className="section-phara">
                Large Language Models prefer structured and conversational
                content.
              </p>
              <p className="section-phara">
                Q&A formats are easier for AI systems to process because they:
              </p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "Match natural language queries",
                  "Simplify contextual understanding",
                  "Provide direct-answer formatting",
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
              <p className="section-phara mt-4">
                This creates opportunities for:
              </p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "AI citations",
                  "Answer engine optimization (AEO)",
                  "AI overview inclusion",
                  "Conversational search visibility",
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
              <p className="section-phara mt-4 font-bold">
                FAQs may no longer dominate traditional SERPs, but they remain
                valuable in AI-driven search ecosystems.
              </p>
            </SectionH3>

            <SectionH3 id="voice-search" title="Voice Search Relevance">
              <p className="section-phara">
                Voice search still depends heavily on conversational content
                structures. Users ask questions naturally. FAQ formats mirror
                that behavior.
              </p>
              <p className="section-phara font-bold">
                Well-written Q&A sections increase the chances of voice-based
                answer retrieval.
              </p>
            </SectionH3>

            <SectionH3
              id="alternative-search"
              title="Alternative Search Engines Still Use FAQ Schema"
            >
              <p className="section-phara">
                Not every search platform follows Google’s exact roadmap. Some
                search engines and AI platforms still leverage FAQ structured
                data for enhanced results.
              </p>
              <p className="section-phara font-bold">
                That means FAQs continue providing cross-channel discoverability
                benefits.
              </p>
            </SectionH3>
          </Section>

          <Section
            id="helpful-vs-stuffed"
            title="Helpful FAQs vs Keyword-Stuffed FAQs"
          >
            <p className="section-phara">
              This update forces content creators to rethink how FAQs are
              written. The difference between useful FAQs and manipulative FAQs
              is now extremely important.
            </p>
            <div className="mt-6 mb-6">
              <Image
                width={1200}
                height={800}
                src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/assets/blogImg/blog-126-1.png"
                alt="Helpful FAQs vs keyword-stuffed FAQs infographic explaining Google’s 2026 FAQ rich results update and its impact on SEO and AI search visibility"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </Section>

          <Section
            id="faqs-correctly-2026"
            title="How to Use FAQs Correctly in 2026"
          >
            <p className="section-phara">
              The role of FAQs has changed. They are now a content experience
              element rather than a SERP manipulation tactic.
            </p>

            <SectionH3 id="relevance-volume" title="Prioritize Relevance">
              <p className="section-phara">
                Every FAQ must directly support the core topic of the page. If
                the page discusses SEO audits, the FAQ should answer
                audit-related concerns — not random keyword variations.
              </p>
            </SectionH3>

            <SectionH3 id="contextual-placement" title="Contextual Placement">
              <p className="section-phara">
                FAQs should be placed where they provide the most value to the
                user, often after the main content to answer final objections or
                technical details.
              </p>
            </SectionH3>

            <SectionH3 id="unique-questions" title="Unique Questions Only">
              <p className="section-phara">
                One of the biggest SEO mistakes is reusing the same FAQ blocks
                sitewide. This creates content redundancy and weakens topical
                uniqueness. Instead, tailor FAQs specifically to page intent.
              </p>
            </SectionH3>

            <SectionH3 id="intent-formatting" title="Intent-Based Formatting">
              <p className="section-phara">
                Structure FAQs for humans first. Write naturally. Avoid robotic
                formatting designed only for search engines. Good FAQs feel
                conversational, direct, and useful.
              </p>
              <p className="section-phara">
                FAQs should help users complete their information journey. That
                means answering:
              </p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "Concerns",
                  "Comparisons",
                  "Expectations",
                  "Pricing logic",
                  "Process clarity",
                  "Outcome-related questions",
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
              <p className="section-phara mt-4">
                For brands investing in{" "}
                <Link
                  href="/content-as-a-service"
                  className="text-secondary hover:underline"
                >
                  content marketing and SEO strategy services
                </Link>
                , FAQs now function more as conversion-support assets rather
                than traffic hacks.
              </p>
            </SectionH3>
          </Section>

          <Section
            id="seo-focus-instead"
            title="What SEOs Should Focus on Instead of FAQ Rich Results"
          >
            <p className="section-phara">
              This update shifts focus towards broader visibility strategies.
            </p>

            <SectionH3 id="eeat-signals" title="E-E-A-T Signals">
              <p className="section-phara">Google increasingly rewards:</p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "Real expertise",
                  "Demonstrated experience",
                  "Brand authority",
                  "Trust signals",
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
              <p className="section-phara mt-4 font-bold">
                Thin FAQ-heavy pages without credibility will continue losing
                visibility.
              </p>
            </SectionH3>

            <SectionH3
              id="ai-optimized-structures"
              title="AI-Optimized Content Structures"
            >
              <p className="section-phara">
                Search is moving toward AI-generated summaries and answer
                engines. Content must now be:
              </p>
              <div className="space-y-2 mt-2 ml-1">
                {[
                  "Context-rich",
                  "Structured logically",
                  "Entity-focused",
                  "Semantically connected",
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

            <SectionH3 id="entity-seo" title="Entity SEO">
              <p className="section-phara">
                Focus on becoming a recognized entity in your niche. Build
                topical clusters and ensure your brand is semantically linked to
                key industry topics.
              </p>
            </SectionH3>

            <SectionH3
              id="conversational-search"
              title="Conversational Search Optimization"
            >
              <p className="section-phara">
                Modern search behavior is becoming more natural language driven.
                Instead of isolated keywords, content should answer broader
                conversational intent.
              </p>
            </SectionH3>

            <SectionH3
              id="snippet-strategies"
              title="Featured Snippet Strategies"
            >
              <p className="section-phara">
                While FAQ rich results disappear, featured snippets remain
                valuable. Clear formatting, concise answers, and strong topical
                coverage can still secure high-visibility SERP positions.
              </p>
            </SectionH3>
          </Section>

          <Section
            id="ai-search-future"
            title="FAQ Content and the Future of AI Search"
          >
            <p className="section-phara">
              This update is not the death of FAQs. It is the death of FAQ
              abuse.
            </p>
            <p className="section-phara">
              AI-driven search ecosystems still rely heavily on:
            </p>
            <div className="space-y-2 mt-2 ml-1">
              {[
                "Question-answer structures",
                "Contextual relevance",
                "Clear informational formatting",
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
            <p className="section-phara mt-4">
              As AI Overviews and answer engines expand, structured
              informational content becomes even more important. The difference
              is that quality now matters significantly more than quantity.
            </p>
          </Section>

          <Section
            id="llm-qa"
            title="How LLMs Still Use Q&A Content Structures"
          >
            <p className="section-phara">
              Large Language Models are trained on massive corpora that include
              Q&A formatted content. When generating answers, LLMs actively
              prefer content that is clearly structured as questions and
              answers, contextually relevant, authoritative, and conversational
              in tone.
            </p>
          </Section>

          <Section
            id="replace-lost-ctr"
            title="SEO Strategies to Replace Lost FAQ CTR Opportunities"
          >
            <p className="section-phara">
              With FAQ rich results disappearing, SEO teams need alternative
              strategies to maintain click-through rates, such as optimizing for
              featured snippets, strengthening title tags, and focusing on AI
              overview visibility.
            </p>
          </Section>

          <Section
            id="common-mistakes"
            title="Common Mistakes Brands Will Make After This Update"
          >
            <p className="section-phara">
              Many websites will react incorrectly. Some will remove all FAQs
              unnecessarily, stop answering user questions, or ignore AI search
              optimization. That would be a mistake. The smarter approach is to
              evolve FAQ implementation rather than abandon it entirely.
            </p>
          </Section>

          <Section
            id="final-thoughts"
            title="Final Thoughts: FAQs Are Evolving, Not Dying"
          >
            <p className="section-phara">
              Google removing FAQ rich results marks the end of a specific SEO
              tactic — not the end of FAQs as a content strategy.
            </p>
            <p className="section-phara">
              FAQs still matter for user experience, AI visibility, voice
              search, intent completion, conversion support, and semantic
              relevance.
            </p>
            <p className="section-phara">
              The websites that adapt successfully will be those that stop
              treating FAQs as ranking shortcuts and start using them as
              meaningful informational assets.
            </p>
            <p className="section-phara">
              Search in 2026 is no longer about maximizing SERP tricks. It’s
              about building genuinely useful, context-rich content ecosystems
              that both users and AI systems trust.
            </p>
          </Section>

          <Section id="blog-faqs" title="Frequently Asked Questions">
            <FAQAccordion />
          </Section>

          <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl text-center">
            <p className="text-xl font-bold mb-4">
              Need help adapting your SEO strategy for 2026?
            </p>
            <Link
              href="https://www.ayatiworks.com/contact-us"
              className="inline-flex items-center rounded-full bg-secondary px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
            >
              Talk to Our SEO Experts
            </Link>
          </div>
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
