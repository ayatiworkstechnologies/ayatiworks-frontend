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
  { id: "intro", level: 1, label: "Introduction" },
  { id: "what-is-local-seo", level: 1, label: "What is Local SEO & How It Works in 2026" },
  { id: "near-me-searches", level: 1, label: "Understanding 'Near Me' Searches & User Intent" },
  { id: "step-1-gbp", level: 2, label: "Step 1: Optimizing Your Google Business Profile" },
  { id: "step-2-keywords", level: 2, label: "Step 2: Local Keyword Strategy" },
  { id: "step-3-on-page", level: 2, label: "Step 3: On-Page SEO for Local Landing Pages" },
  { id: "step-4-citations", level: 2, label: "Step 4: Building Local Citations" },
  { id: "step-5-reviews", level: 2, label: "Step 5: Reviews, Ratings & Reputation" },
  { id: "step-6-mobile", level: 2, label: "Step 6: Mobile Optimization & Voice Search" },
  { id: "step-7-link-building", level: 2, label: "Step 7: Local Link Building & Authority" },
  { id: "common-mistakes", level: 1, label: "Common Local SEO Mistakes" },
  { id: "how-long-to-rank", level: 1, label: "How Long Does It Take to Rank in Google Maps?" },
  { id: "case-based-insights", level: 1, label: "Case-Based Insights: What Works in Chennai" },
  { id: "partnering-with-agency", level: 1, label: "Why Partnering with a Local SEO Agency Matters" },
  { id: "turning-searches-into-revenue", level: 1, label: "Turning Local Searches into Revenue" },
  { id: "faq", level: 1, label: "FAQs" },
];

const FAQS_DATA = [
  {
    q: "1. What is Local SEO and why is it important for Chennai businesses?",
    a: "Local SEO is the process of optimizing your online presence to attract customers from a specific geographic area, such as Chennai. It is important because most users searching for services like \"near me\" or \"in Chennai\" have high purchase intent. By ranking in Google Maps and local search results, businesses can capture ready-to-convert leads, increase walk-ins, and generate consistent inbound enquiries without relying solely on paid ads.",
  },
  {
    q: "2. How does Google decide which businesses appear in the local map pack?",
    a: "Google ranks businesses in the local map pack based on three primary factors: relevance, proximity, and prominence. Relevance measures how well your business matches the search query, proximity considers how close your business is to the user, and prominence evaluates your overall credibility through reviews, backlinks, and online presence. Businesses that optimize all three consistently are more likely to rank in the top 3 results.",
  },
  {
    q: "3. How can I rank higher on Google Maps in Chennai?",
    a: "To rank higher on Google Maps in Chennai, businesses need to fully optimize their Google Business Profile, use location-specific keywords, maintain consistent business information across directories, actively collect and respond to customer reviews, and build local backlinks. Regular updates, user engagement, and strong authority signals significantly improve visibility in competitive areas.",
  },
  {
    q: "4. How long does Local SEO take to show results?",
    a: "Local SEO typically shows initial improvements within 4 to 6 weeks, especially if the business profile is well-optimized. However, achieving top rankings in competitive Chennai markets usually takes 3 to 6 months of consistent effort. Long-term dominance requires ongoing optimization, review generation, and authority building over 6 to 12 months.",
  },
  {
    q: "5. Are \"near me\" searches really important for local businesses?",
    a: "Yes, \"near me\" searches are highly important because they indicate strong user intent. These searches are usually performed by users who are ready to take immediate action, such as calling, visiting, or purchasing. Optimizing for \"near me\" queries helps businesses appear in high-conversion moments, making them one of the most valuable traffic sources in Local SEO.",
  },
  {
    q: "6. Do reviews impact local SEO rankings in Chennai?",
    a: "Yes, reviews are a major ranking factor in Local SEO. Google considers the number of reviews, average rating, recency, and how businesses respond to them. A steady flow of positive, authentic reviews improves both rankings and customer trust. Businesses with strong review profiles tend to attract more clicks, calls, and conversions.",
  },
  {
    q: "7. Should I hire a local SEO agency or manage it in-house?",
    a: "Businesses can manage Local SEO in-house if they have the expertise, time, and resources to execute consistently. However, partnering with a local SEO agency is often more effective in competitive markets like Chennai. Agencies bring strategic direction, technical expertise, and performance tracking, ensuring faster and more sustainable results aligned with business growth goals.",
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
        <em>Why Local SEO is a Game-Changer in Chennai</em>
      </h2>
      <p className="section-phara">
        Let's be honest, Chennai is no longer a "growing market." It's already
        crowded, competitive, and digitally aggressive. Whether you're running a
        clinic in Anna Nagar, a SaaS startup in OMR, or a premium interior brand
        in Nungambakkam, your customer is not browsing, they're searching with
        intent.
      </p>
      <p className="section-phara">And when they search, they don't scroll.</p>
      <p className="section-phara">They click what shows up first.</p>
      <p className="section-phara">
        That's exactly where Local SEO changes the game. It doesn't just bring
        traffic, it brings ready-to-convert customers who are actively looking
        for what you offer, in your geography, right now.
      </p>
      <p className="section-phara">
        A serious{" "}
        <Link
          href="https://www.ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency in Chennai
        </Link>{" "}
        doesn't treat Local SEO as an add-on. It treats it as a revenue channel.
        Because ranking in Google Maps or showing up in "near me" searches is
        not vanity, it's pipeline.
      </p>
      <p className="section-phara">
        Think about it. When someone searches "best architect near me" or
        "dermatologist in Chennai," they are not researching. They are deciding.
      </p>
      <p className="section-phara">
        The question is, are you visible at that moment?
      </p>
      <p className="section-phara">
        Because if you're not, your competitor is.
      </p>
      <p className="section-phara">
        Local SEO is no longer optional. It's a market-entry strategy, a
        dominance play, and for many businesses, the fastest way to convert
        digital presence into real-world revenue.
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

export default function AEOArticlePage122() {
  const post = POSTS.find((p) => p.id === 122) || POSTS[0];
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

          {/* ===== H2: What is Local SEO & How It Works in 2026 ===== */}
          <Section
            id="what-is-local-seo"
            title="What is Local SEO & How It Works in 2026"
          >
            <p className="section-phara">
              Let's strip away the jargon.
            </p>
            <p className="section-phara">
              Local SEO is not about ranking your website globally. It's about
              positioning your business exactly where your customer is looking,
              geographically and contextually.
            </p>
            <p className="section-phara">
              In 2026, Google's ecosystem has evolved. It's no longer just a
              search engine, it's a decision engine. And for local queries, it
              prioritizes three core signals:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span><strong>Relevance</strong> – How well your business matches the search</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span><strong>Proximity</strong> – How close you are to the user</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span><strong>Prominence</strong> – How credible and authoritative you appear</span>
              </div>
            </div>
            <p className="section-phara">
              Now here's where most businesses get it wrong, they focus only on
              their website.
            </p>
            <p className="section-phara font-bold">
              But Local SEO is bigger than your website.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary">
              It includes:
            </h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Your Google Business Profile</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Reviews and ratings</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Local citations</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Mobile experience</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Behavioral signals (clicks, calls, directions)</span>
              </div>
            </div>
            <p className="section-phara">
              In Chennai's competitive landscape, Google is not just ranking
              businesses, it's ranking trust signals. If your digital footprint
              doesn't reflect credibility, consistency, and authority, you won't
              show up where it matters.
            </p>
            <p className="section-phara italic font-bold">
              And here's the truth: Local SEO is not a one-time setup. It's a
              continuous optimization cycle. The businesses that win are the ones
              that treat it like a system, not a tactic.
            </p>
          </Section>

          {/* ===== H2: Understanding "Near Me" Searches & User Intent ===== */}
          <Section
            id="near-me-searches"
            title={'Understanding "Near Me" Searches & User Intent'}
          >
            <p className="section-phara">
              "Near me" searches are not just keywords, they are intent triggers.
            </p>
            <p className="section-phara">
              When someone types "restaurant near me" or "SEO agency near me,"
              Google instantly shifts into hyper-local mode. It pulls data based
              on real-time location, relevance, and user behavior patterns.
            </p>
            <p className="section-phara font-bold">
              But here's the critical insight most businesses overlook:
            </p>
            <p className="section-phara italic">
              These users are not browsing. They are ready to act.
            </p>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>They want to call</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>They want directions</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>They want to visit</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>They want to buy</span>
              </div>
            </div>
            <p className="section-phara">
              That's why "near me" searches have one of the highest conversion
              rates in digital marketing.
            </p>
            <p className="section-phara">
              Now, in a city like Chennai, this becomes even more powerful.
              Why? Because user behavior here is deeply location-driven.
              A user in Velachery is unlikely to consider a service in Porur
              unless there's a strong trust signal.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary">
              So what does Google do? It prioritizes businesses that:
            </h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Have strong local relevance</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Are actively engaged (reviews, updates)</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Show consistent business information</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Have high user interaction</span>
              </div>
            </div>
            <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-10 shadow-sm">
              If your business is not optimized for "near me" intent, you're
              missing out on the most valuable traffic segment, people who are
              already halfway through the buying journey.
            </p>

            {/* ===== Step 1: GBP ===== */}
            <SectionH3
              id="step-1-gbp"
              title="Step 1: Optimizing Your Google Business Profile (GBP)"
            >
              <p className="section-phara">
                Your Google Business Profile is not just a listing, it's your
                digital storefront.
              </p>
              <p className="section-phara">
                And in many cases, it's the first (and sometimes only)
                interaction a customer has with your business.
              </p>
              <p className="section-phara italic">
                So let's be clear, this is not something you "set and forget."
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                A fully optimized GBP includes:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Accurate business name, address, and phone number (NAP consistency)</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Primary and secondary categories aligned with your services</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>High-quality images (real, not stock)</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Service descriptions with local keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Regular posts and updates</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>FAQs and attributes</span>
                </div>
              </div>
              <p className="section-phara font-bold">
                But optimization alone is not enough. Engagement is what moves
                the needle.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                You need:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Consistent review generation</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Active responses to reviews</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Regular content updates</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>User interaction signals (clicks, calls, directions)</span>
                </div>
              </div>
              <p className="section-phara">
                Now here's where strategic positioning comes in.
              </p>
              <p className="section-phara">
                If you're evaluating or benchmarking your presence against the{" "}
                <Link
                  href="https://www.ayatiworks.com/"
                  className="text-secondary hover:underline font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Top 10 SEO agencies in Chennai
                </Link>
                , you'll notice one common pattern, they treat GBP like a
                performance channel, not a directory listing.
              </p>
              <p className="section-phara">
                They optimize, test, update, and refine continuously.
              </p>
              <p className="section-phara italic">
                Because they understand one thing, visibility on Maps is not
                luck. It's engineered.
              </p>
            </SectionH3>

            {/* ===== Step 2: Local Keyword Strategy ===== */}
            <SectionH3
              id="step-2-keywords"
              title="Step 2: Local Keyword Strategy for Chennai Businesses"
            >
              <p className="section-phara">
                Let's talk about keywords, but not the outdated,
                spreadsheet-driven approach.
              </p>
              <p className="section-phara">
                Local keyword strategy is about understanding how your customer
                thinks.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                For example:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"Interior designer Chennai"</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"Best dentist in Velachery"</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"SEO services near me"</span>
                </div>
              </div>
              <p className="section-phara">
                These are not just keywords. These are decision-stage queries.
              </p>
              <p className="section-phara">
                Now, most businesses make two mistakes:
              </p>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>They target generic keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>They ignore location modifiers</span>
                </div>
              </div>
              <p className="section-phara">
                In a city like Chennai, micro-local targeting is critical.
              </p>
              <p className="section-phara">
                Instead of "Digital marketing services," you should be targeting:
              </p>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"Digital marketing agency in T Nagar"</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"SEO company in OMR Chennai"</span>
                </div>
              </div>
              <p className="section-phara">
                Why? Because Google prioritizes specificity. And so do users.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Your keyword strategy should include:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>City-level keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Area-specific keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Service + intent-based keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Voice search variations</span>
                </div>
              </div>
              <p className="section-phara italic">
                And most importantly, it should align with your business goals.
                Because ranking for irrelevant keywords is not growth. It's
                noise.
              </p>
            </SectionH3>

            {/* ===== Step 3: On-Page SEO ===== */}
            <SectionH3
              id="step-3-on-page"
              title="Step 3: On-Page SEO for Local Landing Pages"
            >
              <p className="section-phara">
                Your website is where interest turns into action.
              </p>
              <p className="section-phara">
                But here's the reality, most websites are built for aesthetics,
                not conversion.
              </p>
              <p className="section-phara">
                Local on-page SEO ensures that your website speaks the same
                language as your customer and Google.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Key elements include:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Location-specific landing pages</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Optimized title tags and meta descriptions</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Structured headers (H1, H2, H3)</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Local schema markup</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Internal linking</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Fast loading speed</span>
                </div>
              </div>
              <p className="section-phara font-bold">
                But beyond technicals, your content matters.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Your pages should:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Address local pain points</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Highlight your expertise</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Build trust through case studies and testimonials</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Include clear CTAs</span>
                </div>
              </div>
              <p className="section-phara italic">
                If a user lands on your page after a "near me" search and
                doesn't convert, it's not a traffic problem, it's a messaging
                problem.
              </p>
            </SectionH3>

            {/* ===== Step 4: Citations ===== */}
            <SectionH3
              id="step-4-citations"
              title="Step 4: Building Local Citations & Directory Listings"
            >
              <p className="section-phara">
                Think of citations as digital references.
              </p>
              <p className="section-phara">
                Every time your business is listed on platforms like Justdial,
                Sulekha, or IndiaMART, it sends a signal to Google that your
                business is legitimate and active.
              </p>
              <p className="section-phara font-bold">
                But consistency is everything.
              </p>
              <p className="section-phara">
                Your Name, Address, and Phone number must be identical across
                all platforms. Even small variations can dilute your credibility.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                High-quality citations:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Improve local rankings</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Increase visibility</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Build trust signals</span>
                </div>
              </div>
              <p className="section-phara">
                But don't chase quantity. Focus on:
              </p>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Relevant directories</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Industry-specific platforms</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>High-authority listings</span>
                </div>
              </div>
              <p className="section-phara italic">
                Because in Local SEO, accuracy beats volume.
              </p>
            </SectionH3>

            {/* ===== Step 5: Reviews ===== */}
            <SectionH3
              id="step-5-reviews"
              title="Step 5: Reviews, Ratings & Reputation Signals"
            >
              <p className="section-phara">
                Let's simplify this. Reviews are not just feedback, they are
                ranking signals.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Google looks at:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Quantity of reviews</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Quality (ratings)</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Recency</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Response rate</span>
                </div>
              </div>
              <p className="section-phara">
                In Chennai's competitive market, businesses with strong review
                profiles dominate Maps.
              </p>
              <p className="section-phara">
                But here's the strategic layer, reviews also influence user
                behavior. A user is far more likely to choose a business with 4.5
                stars and 120 reviews over a business with 5 stars and 8 reviews.
              </p>
              <p className="section-phara">
                Why? Because volume builds trust.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                You need a system to:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Request reviews consistently</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Respond to every review</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Handle negative feedback professionally</span>
                </div>
              </div>
              <p className="section-phara italic">
                Because your reputation is not what you say, it's what your
                customers say.
              </p>
            </SectionH3>

            {/* ===== Step 6: Mobile & Voice Search ===== */}
            <SectionH3
              id="step-6-mobile"
              title="Step 6: Mobile Optimization & Voice Search Readiness"
            >
              <p className="section-phara">
                Most "near me" searches happen on mobile. Which means your
                entire Local SEO strategy must be mobile-first.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Your website should:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Load in under 3 seconds</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Be fully responsive</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Have click-to-call functionality</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Offer seamless navigation</span>
                </div>
              </div>
              <p className="section-phara font-bold">
                Now add voice search to the mix.
              </p>
              <p className="section-phara">
                Users are no longer typing, they're asking:
              </p>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"Best SEO agency near me"</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>"Top dentist in Chennai open now"</span>
                </div>
              </div>
              <p className="section-phara">
                Voice queries are longer, more conversational, and highly
                intent-driven.
              </p>
              <p className="section-phara italic">
                If your content is not optimized for this, you're missing a
                growing segment of search traffic.
              </p>
            </SectionH3>

            {/* ===== Step 7: Local Link Building ===== */}
            <SectionH3
              id="step-7-link-building"
              title="Step 7: Local Link Building & Authority Signals"
            >
              <p className="section-phara">
                At this stage, you've optimized your presence. But optimization
                alone doesn't win markets, authority does.
              </p>
              <p className="section-phara">
                Local link building is how Google understands that your business
                is not just present in Chennai, but respected in Chennai.
              </p>
              <p className="section-phara">
                Think of it this way, every relevant backlink is a vote of
                confidence. But not all votes carry equal weight.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                What actually moves rankings?
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Links from Chennai-based websites</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Coverage in local media or publications</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Partnerships with local businesses</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Mentions in industry-specific platforms</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Event sponsorships or community involvement</span>
                </div>
              </div>
              <p className="section-phara">
                If your business is getting featured on local blogs, Chennai
                directories, or even collaborating with complementary brands,
                Google starts seeing you as a trusted local entity.
              </p>
              <p className="section-phara font-bold">
                And here's the strategic edge, most businesses ignore this.
              </p>
              <p className="section-phara">
                They chase generic backlinks, missing the point that local
                relevance beats global volume in Maps rankings.
              </p>
              <h4 className="text-xl font-bold text-left text-secondary">
                Authority signals also extend beyond backlinks:
              </h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Brand mentions (even without links)</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Search volume for your brand name</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>Social proof and engagement</span>
                </div>
              </div>
              <p className="section-phara italic">
                This is where Local SEO starts blending with brand building.
                Because the businesses that dominate Maps are not just optimized,
                they are recognized.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: Common Local SEO Mistakes ===== */}
          <Section
            id="common-mistakes"
            title="Common Local SEO Mistakes Chennai Businesses Make"
          >
            <p className="section-phara">
              Let's cut through the noise. Most businesses don't fail at Local
              SEO because it's complex, they fail because they approach it
              casually.
            </p>
            <p className="section-phara font-bold">
              Here are the patterns you'll see across Chennai:
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              1. Treating Google Business Profile as a One-Time Setup
            </h4>
            <p className="section-phara">
              They create a listing, fill basic details, and forget it. No
              updates, no posts, no engagement.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              2. Inconsistent Business Information
            </h4>
            <p className="section-phara">
              Different phone numbers, slightly altered addresses, outdated
              details, this confuses Google and kills trust signals.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              3. Ignoring Reviews
            </h4>
            <p className="section-phara">
              Either they don't ask for reviews, or worse, they don't respond.
              Both hurt visibility and conversions.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              4. Targeting Broad Keywords
            </h4>
            <p className="section-phara">
              Trying to rank for "SEO services" instead of "SEO services in
              Chennai" or hyper-local variants.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              5. No Local Landing Pages
            </h4>
            <p className="section-phara">
              One generic website page trying to rank for multiple locations,
              this rarely works anymore.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary mt-6">
              6. Choosing the Cheapest SEO Approach
            </h4>
            <p className="section-phara">
              This is critical. Many businesses still believe SEO is about "low
              investment, high return." That mindset leads to shortcuts, outdated
              tactics, and eventually, zero results.
            </p>
            <p className="section-phara italic">
              Here's the reality, Local SEO is a competitive advantage, not a
              cost-saving exercise. The businesses that win treat it as a
              strategic investment. The ones that don't stay invisible.
            </p>
          </Section>

          {/* ===== H2: How Long Does It Take to Rank ===== */}
          <Section
            id="how-long-to-rank"
            title="How Long Does It Take to Rank in Google Maps?"
          >
            <p className="section-phara">
              This is the question every business owner asks, and the honest
              answer is: it depends on how serious you are.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary">
              In a market like Chennai, timelines vary based on:
            </h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Competition in your category</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Current state of your digital presence</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Consistency of optimization efforts</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Review velocity and engagement</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Authority signals</span>
              </div>
            </div>
            <p className="section-phara font-bold">
              But let's set realistic expectations.
            </p>

            <SectionH3 id="early-traction" title="Early Traction">
              <p className="section-phara">
                You may start seeing visibility improvements in 4–6 weeks if
                your foundation is strong.
              </p>
            </SectionH3>

            <SectionH3 id="competitive-positioning" title="Competitive Positioning">
              <p className="section-phara">
                For high-demand niches, it typically takes 3–6 months to break
                into the top 3 map pack.
              </p>
            </SectionH3>

            <SectionH3 id="market-dominance" title="Market Dominance">
              <p className="section-phara">
                Sustained effort over 6–12 months is what builds long-term
                visibility and stability.
              </p>
            </SectionH3>

            <p className="section-phara font-bold">
              Now here's what most businesses get wrong, they expect results
              without consistency.
            </p>
            <p className="section-phara">
              Local SEO is not a campaign. It's a compounding system.
            </p>
            <p className="section-phara italic">
              Every review, every update, every optimization adds up. And over
              time, that momentum becomes extremely hard for competitors to
              disrupt.
            </p>
          </Section>

          {/* ===== H2: Case-Based Insights ===== */}
          <Section
            id="case-based-insights"
            title="Case-Based Insights: What Works in Chennai Market"
          >
            <p className="section-phara">
              Let's move from theory to reality.
            </p>
            <p className="section-phara">
              Chennai is not a uniform market. What works in OMR may not work in
              Anna Nagar. What converts in Velachery may not resonate in Adyar.
            </p>
            <p className="section-phara">
              But across industries, there are clear patterns that drive results:
            </p>

            <SectionH3 id="insight-1" title="1. Hyper-Local Positioning Wins">
              <p className="section-phara">
                Businesses that optimize for specific areas (e.g., "fitness
                trainer in T Nagar") consistently outperform those targeting
                city-wide keywords.
              </p>
            </SectionH3>

            <SectionH3 id="insight-2" title="2. Review Velocity Drives Rankings">
              <p className="section-phara">
                It's not just about having reviews, it's about getting them
                consistently. A steady flow signals relevance and activity to
                Google.
              </p>
            </SectionH3>

            <SectionH3 id="insight-3" title="3. Visual Content Impacts Conversions">
              <p className="section-phara">
                Profiles with real images, office, team, work samples, see
                higher engagement than those using generic visuals.
              </p>
            </SectionH3>

            <SectionH3 id="insight-4" title="4. Category Optimization is Underrated">
              <p className="section-phara">
                Choosing the right primary and secondary categories directly
                impacts visibility in Maps.
              </p>
            </SectionH3>

            <SectionH3 id="insight-5" title="5. Behavioral Signals Matter">
              <p className="section-phara">
                Clicks, calls, direction requests, these user actions influence
                rankings more than most businesses realize.
              </p>
            </SectionH3>

            <p className="section-phara font-bold mt-6">
              Now here's the bigger insight, Chennai users are trust-driven.
            </p>
            <p className="section-phara">
              They don't just look at rankings. They evaluate:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Reviews</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Credibility</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Consistency</span>
              </div>
            </div>
            <p className="section-phara italic">
              If your presence doesn't build trust instantly, you lose the lead,
              even if you rank.
            </p>
          </Section>

          {/* ===== H2: Why Partnering with a Local SEO Agency Matters ===== */}
          <Section
            id="partnering-with-agency"
            title="Why Partnering with a Local SEO Agency Matters"
          >
            <p className="section-phara">
              At some point, every business reaches a decision, do we manage this
              internally, or bring in experts?
            </p>
            <p className="section-phara">
              Here's the honest answer.
            </p>
            <p className="section-phara">
              Local SEO looks simple on the surface. But execution at scale,
              especially in a competitive city like Chennai, requires:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Strategic planning</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Continuous optimization</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Data-driven decision making</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Market understanding</span>
              </div>
            </div>
            <h4 className="text-xl font-bold text-left text-secondary">
              A strong local SEO partner doesn't just "do SEO." They:
            </h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Identify revenue-driving keywords</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Optimize your entire local ecosystem</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Track performance and refine strategy</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Align SEO with your business goals</span>
              </div>
            </div>
            <p className="section-phara">
              And most importantly, they save you from expensive mistakes.
            </p>
            <p className="section-phara">
              Now, if you're evaluating options, you'll naturally come across
              lists featuring the{" "}
              <Link
                href="https://www.ayatiworks.com/"
                className="text-secondary hover:underline font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Top 10 SEO agencies in Chennai
              </Link>
              . But here's how you should filter them:
            </p>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Do they talk strategy or just deliverables?</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Do they understand your business model?</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Are they focused on rankings, or revenue?</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Do they have real case studies, not just promises?</span>
              </div>
            </div>
            <p className="section-phara italic">
              Because the right agency doesn't just improve your visibility,
              they accelerate your growth.
            </p>
          </Section>

          {/* ===== H2: Turning Local Searches into Revenue ===== */}
          <Section
            id="turning-searches-into-revenue"
            title="Turning Local Searches into Revenue"
          >
            <p className="section-phara">
              Let's bring this together.
            </p>
            <p className="section-phara">
              Local SEO is not about ranking for the sake of visibility. It's
              about capturing intent at the exact moment your customer is ready
              to act.
            </p>
            <p className="section-phara">
              In a city like Chennai, where competition is intense and attention
              spans are short, this becomes your edge.
            </p>
            <h4 className="text-xl font-bold text-left text-secondary">
              When done right, Local SEO:
            </h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Drives high-quality leads</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Increases walk-ins and calls</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Builds brand credibility</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Creates a sustainable growth channel</span>
              </div>
            </div>
            <p className="section-phara font-bold">
              But it demands the right mindset.
            </p>
            <p className="section-phara">
              Not shortcuts. Not one-time efforts. Not "budget-first" thinking.
            </p>
            <p className="section-phara">
              It requires a commitment to consistency, strategy, and execution.
            </p>
            <p className="section-phara italic font-bold mt-4">
              Because at the end of the day, your customer is searching. And
              they will choose someone. The only question is, will it be you, or
              your competitor?
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


