"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { FiPlus, FiMinus, FiShare2, FiCopy } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
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
  { id: "the-real-question", level: 1, label: "Do You Actually Need SEO?" },
  { id: "sign-1", level: 2, label: "Sign #1 — Inconsistent Traffic" },
  { id: "sign-2", level: 2, label: "Sign #2 — Ranking, But No Leads" },
  { id: "sign-3", level: 2, label: "Sign #3 — Reliance on Paid Ads" },
  { id: "sign-4", level: 2, label: "Sign #4 — Competitors Ranking Above" },
  { id: "sign-5", level: 2, label: "Sign #5 — Poor Content Performance" },
  { id: "why-diy-seo-stops-working", level: 1, label: "Why DIY SEO Stops Working After a Point" },
  { id: "what-professional-seo-fixes", level: 1, label: "What Professional SEO Services Actually Fix" },
  { id: "when-to-work-with-seo-agency", level: 1, label: "When It’s Time to Work with an SEO Agency" },
  { id: "seo-is-not-the-problem", level: 1, label: "SEO Is Not the Problem — The Strategy Is" },
  { id: "faq", level: 1, label: "FAQs" },
];

const FAQS_DATA = [
  {
    q: "1. How do I know if my business really needs SEO?",
    a: "If your website is not bringing consistent traffic, leads, or enquiries, you need SEO. A business website should generate visibility and demand. If it’s not doing that, something is missing in your SEO approach.",
  },
  {
    q: "2. Can I rely only on paid ads instead of SEO?",
    a: "You can, but it creates dependency. The moment you stop ads, your visibility drops. SEO builds long-term, organic visibility that continues even without constant spending.",
  },
  {
    q: "3. Why is my website getting traffic but no leads?",
    a: "This usually means you are targeting the wrong audience or wrong keywords. Traffic alone is not useful if it doesn’t match user intent or convert into enquiries.",
  },
  {
    q: "4. How long does it take for SEO to show results?",
    a: "SEO is not instant. It typically takes a few months to show consistent improvement. However, once it starts working, it delivers stable and long-term results compared to short-term channels.",
  },
  {
    q: "5. What is the difference between doing SEO myself and hiring an agency?",
    a: "DIY SEO can work at a basic level. But as competition increases, SEO requires strategy, technical expertise, and consistent execution. An agency brings structure, experience, and scalability.",
  },
  {
    q: "6. Why is my content not ranking even though I publish regularly?",
    a: "Publishing content is not enough. If the content is not aligned with search intent, not structured properly, or not part of a larger strategy, it will not rank or perform.",
  },
  {
    q: "7. When is the right time to hire professional SEO services?",
    a: "When your website is not delivering results, your competitors are ahead, and your current efforts are not working, that’s the right time. Waiting longer usually increases the gap.",
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

function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <h2 className="section-title mb-4 text-left text-3xl"><em>Why Many Businesses Don’t Realize They Need SEO</em></h2>
      <p className="section-phara">Before we get judgmental about why businesses don’t realize they need SEO, let’s take a step back and understand how most businesses even arrive at the idea of SEO in the first place.</p>
      <p className="section-phara">At one end, you have companies with deep pockets, funded startups, VC-backed businesses, or well-established brands. These companies don’t “discover” SEO randomly.</p>
      <p className="section-phara">They have experienced teams, clear roadmaps, and defined expectations from every department. SEO is not a guess for them, it’s part of a larger, structured growth strategy.</p>
      <p className="section-phara">The real gap starts elsewhere. Bootstrapped businesses, One-man shows, Small teams, Product-focused founders and Partnerships where marketing is not a core strength. These are businesses driven by passion, hustle, and execution, but often without deep clarity on digital marketing.</p>
      <p className="section-phara">And this is where things begin to slip.</p>
      <p className="section-phara">Let’s be honest here.</p>
      <p className="section-phara">A large percentage of businesses struggling with SEO today are not failing because SEO doesn’t work, they’re struggling because they don’t fully understand it. There’s very little time spent on actually researching what SEO is, whether it fits their business, what their competitors are doing, or how their industry behaves online.</p>
      <p className="section-phara">Instead, decisions are often impulsive.</p>
      <p className="section-phara italic">“I heard SEO works.”</p>
      <p className="section-phara italic">“My competitor is ranking.”</p>
      <p className="section-phara italic">“Someone in my network is getting leads from Google.”</p>
      <p className="section-phara">And that’s enough to get started, without clarity, without direction.</p>
      <p className="section-phara">Let’s look at how this usually plays out.</p>
      <p className="section-phara">In a business network, a group of professionals meet regularly, Martin, who runs a real estate business; Sailesh, who owns a digital marketing agency; Sundar, who operates a business loan firm; Ms. Kirthika, who runs a play school; Ms. Charulatha, who manages an HR consultancy; and Mahesh Kumar, also in real estate.</p>
      <p className="section-phara">Like most networks, they support each other, exchange referrals, and share ideas for growth.</p>
      <p className="section-phara">One day, the conversation shifts to how each of them gets leads online. Sailesh casually mentions that a major portion of his business comes organically through Google, through SEO.</p>
      <p className="section-phara">That’s all it takes.</p>
      <p className="section-phara">The idea clicks. Everyone gets interested. They all want the same outcome.</p>
      <p className="section-phara">But instead of understanding what SEO really involves, instead of sitting with Sailesh to break it down, they jump straight into action. They reach out to different agencies with half-baked knowledge, unclear expectations, and often a limited budget just to “try it out.”</p>
      <p className="section-phara">Now what happens next depends entirely on who they meet. Some agencies might take advantage of the lack of clarity. Some might genuinely say it won’t work within that budget. Some might overpromise and underdeliver.</p>
      <p className="section-phara">But the core issue remains the same. The decision was made without understanding the process. This is where most businesses go wrong. SEO is not something you try because someone else succeeded with it. It’s not a plug-and-play channel. It requires context, your business model, your competition, your timeline, and your goals.</p>
      <p className="section-phara">When that foundation is missing, SEO doesn’t fail, the approach does. And that’s why many businesses don’t realize they need SEO, not because it’s irrelevant, but because they never fully understand how it actually works in their own context.</p>
    </section>
  );
}

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
    }
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
                <a href={`#${it.id}`} onClick={(e) => handleClick(e, it.id)} className={["block rounded pr-2 py-2 transition-colors", isMain ? "pl-3" : "pl-7", active ? "bg-slate-50 text-primary font-primary" : "text-slate-700 font-secondary hover:bg-slate-50 hover:text-secondary", isMain ? "text-[15px]" : "text-[13.5px]"].join(" ")} aria-current={active ? "true" : undefined}>{it.label}</a>
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
              <Image width={800} height={800}
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
                  <Image width={800} height={800}
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

          {/* Telegram */}
          {/* <button
            onClick={() =>
              openPopup(
                `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
                true
              )
            }
            className="flex items-center gap-2 rounded px-2 py-1 hover:bg-slate-50 transition"
            aria-label="Share on Telegram"
            title="Telegram"
          >
            <FaTelegramPlane className="h-4 w-4 text-slate-700" />
          </button> */}

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

export default function AEOArticlePage121() {
  const post = POSTS.find((p) => p.id === 121) || POSTS[0];
  const relatedPosts = getRelatedRecentPosts({ currentPostId: post.id, category: post.category, limit: 3 });

  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pt-10">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)}
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category === "SEO Services" ? "SEO SERVICES" : post.category}
          title={[post.bannerTitle]}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar: "http://89.167.92.220:8088/author/daniel.png",
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

          <Section id="the-real-question" title="The Real Question: Do You Actually Need SEO Right Now?">
            <p className="section-phara">After everything we just discussed, this is where it becomes personal.</p>
            <p className="section-phara">Not every business need SEO at the same stage.</p>
            <p className="section-phara">But every business reaches a point where ignoring SEO starts costing more than investing in it.</p>
            <p className="section-phara">The question is, have you reached that point? Most business owners don’t sit down and evaluate this clearly. They operate based on what they feel is happening, not what the data is actually telling them.</p>
            <p className="section-phara">So instead of overthinking SEO as a concept, let’s simplify it. If your website is consistently bringing in traffic, generating leads, and contributing to revenue, then SEO is already working for you, whether you’re actively doing it or not.</p>
            <p className="section-phara">But if your website exists only as a digital brochure… If your leads depend entirely on referrals or ads… If your competitors are showing up when your potential customers search, but you’re not… Then the problem is not visibility alone, it’s a missed opportunity.</p>
            <p className="section-phara">SEO is not about “doing marketing.” It’s about making sure your business shows up when someone is actively looking for what you offer. And that’s where most businesses start realizing something is off.</p>
            <p className="section-phara">Because the signals are usually there, just not clearly understood. You might notice traffic coming in, but not consistently. You might see rankings, but no real enquiries. You might have invested in content, but nothing seems to convert.</p>
            <p className="section-phara">Individually, these may not seem like major issues. But together, they point to a deeper gap, the absence of a structured SEO approach.</p>
            <p className="section-phara">This is the moment where SEO shifts from being an “option” to a “requirement.” Not because it’s trending. Not because someone recommended it. But because your business has reached a stage where visibility, consistency, and organic growth are no longer optional, they are necessary for scale.</p>
            <p className="section-phara">The next step is simple. Look at the signs. Because once you recognize them, the decision becomes much clearer.</p>

            <SectionH3 id="sign-1" title="Sign #1 — Your Website Is Not Getting Consistent Traffic">
              <p className="section-phara">If your website traffic goes up one week and disappears the next, that’s not growth, that’s instability.</p>
              <p className="section-phara">A business website should not behave randomly. It should bring in consistent, relevant visitors over time.</p>

              <div className="space-y-2 mt-4 ml-1">
                <h4 className="text-xl font-bold text-left text-secondary">If you’re checking analytics and seeing:</h4>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>very low traffic</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>sudden spikes with no pattern</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>long periods of inactivity</span>
                </div>
              </div>
              <p className="section-phara">Then, your website is not being discovered properly. This is not a “marketing issue.” It’s a visibility problem. People are searching for what you offer. You’re just not showing up.</p>
            </SectionH3>

            <SectionH3 id="sign-2" title="Sign #2 — You Are Ranking, But Not Getting Leads">
              <p className="section-phara">This is where most businesses get confused. <span className="italic">“Yes, we are ranking.”</span> But nothing comes out of it. Ranking alone means nothing if it doesn’t convert.</p>

              <div className="space-y-2 mt-4 ml-1">
                <h4 className="text-xl font-bold text-left text-secondary">If your website:</h4>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>appears on Google</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>gets some clicks</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>but brings no enquiries</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-left text-secondary">then you are ranking for the wrong intent. This usually means:</h4>
              <div className="space-y-2 mt-4 ml-1">
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>wrong keywords</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>wrong audience</span>
                </div>
                <div className="flex items-start gap-3 section-phara text-zinc-700 font-medium">
                  <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                  <span>wrong content structure</span>
                </div>
              </div>
              <p className="section-phara">You’re attracting attention, not business. And that’s wasted effort.</p>
            </SectionH3>

            <SectionH3 id="sign-3" title="Sign #3 — You Rely Only on Paid Ads for Visibility">
              <p className="section-phara">If the moment you stop ads, your visibility drops to zero, you don’t have a growth system. You have a dependency.</p>
              <p className="section-phara">Ads are not the problem. Dependency is. Paid ads should support your business, not sustain it entirely.</p>
              <p className="section-phara">If: all your leads come from ads, your website does nothing organically, your cost per lead keeps increasing... Then, you’re renting visibility, not building it.</p>
              <p className="section-phara">SEO is what creates long-term, compounding visibility. Without it, you’re always paying to stay relevant.</p>
            </SectionH3>

            <SectionH3 id="sign-4" title="Sign #4 — Your Competitors Are Ranking Above You">
              <p className="section-phara">This one is hard to ignore. Search your own service. If your competitors consistently appear and you don’t, they are capturing your demand. Not creating it. Capturing it.</p>
              <p className="section-phara">Which means: your potential customers are finding them first, they are building trust before you even show up, they are getting the enquiry you should have received.</p>
              <p className="section-phara">This is not about competition being “better.” It’s about them being more visible. And in search, visibility wins.</p>
            </SectionH3>

            <SectionH3 id="sign-5" title="Sign #5 — You Have Content, But It’s Not Performing">
              <p className="section-phara">Many businesses say: <span className="italic">“We are doing SEO. We are posting blogs.”</span> But nothing changes.</p>
              <p className="section-phara">Content alone is not SEO. If your content is not ranking, is not bringing traffic, is not converting... Then, it is not working.</p>
              <p className="section-phara">Most of the time, this happens because: content is created without strategy, topics are chosen randomly, structure does not match search intent.</p>
              <p className="section-phara bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-10 shadow-sm">
                If this sounds familiar, it’s worth understanding the difference between{" "}
                <Link href="https://www.ayatiworks.com/blogs/seo/seo-strategies-that-work-2026-and-what-doesnt" className="text-secondary hover:underline font-bold" target="_blank" rel="noopener noreferrer">SEO strategies that still work and outdated ones</Link>,
                because what you’re doing might already be obsolete.
                <br /><br />
                These signs are not rare. Most businesses experience at least 2–3 of them. And if you’re seeing them consistently, it’s no longer a small issue, it’s a clear signal.
              </p>
            </SectionH3>
          </Section>

          <Section id="why-diy-seo-stops-working" title="Why DIY SEO Stops Working After a Point">
            <p className="section-phara">Most businesses start SEO on their own. That’s not the problem. The problem is assuming it will continue to work as the business grows.</p>
            <p className="section-phara">In the early stage, basic efforts may show some movement, a few blogs, some keywords, and minor traffic. But SEO is not a one-time setup. As competition increases, the margin for error reduces.</p>
            <p className="section-phara">What worked at a basic level stops working at a competitive level. This is where DIY SEO starts breaking down.</p>
            <h4 className="text-xl font-bold text-left text-secondary">Because SEO today is not just:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>writing content</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>adding keywords</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>publishing regularly</span>
              </div>
            </div>
            <h4 className="text-xl font-bold text-left text-secondary">It involves:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>understanding search intent deeply</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>structuring content around topics, not ideas</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>fixing technical issues</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>building authority through links</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>continuously updating and optimizing</span>
              </div>
            </div>
            <p className="section-phara mt-6">Most business owners don’t have the time or the depth to manage all of this consistently.</p>
            <h4 className="text-xl font-bold text-left text-secondary">So what happens?</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Content gets published without direction</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Keywords are chosen without strategy</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Technical issues remain unnoticed</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>Effort increases, results don’t</span>
              </div>
            </div>
            <p className="section-phara mt-4 italic">At this stage, SEO doesn’t “fail.” It plateaus. And that plateau is where most businesses get stuck.</p>
          </Section>

          <Section id="what-professional-seo-fixes" title="What Professional SEO Services Actually Fix">
            <p className="section-phara"><Link href="https://www.ayatiworks.com/seo-services" className="text-secondary hover:underline font-bold" target="_blank" rel="noopener noreferrer">Professional SEO</Link> is not about “doing more SEO.” It’s about fixing what is not working and building what is missing.</p>
            <p className="section-phara">When done right, it brings structure to everything you’re already trying to do.</p>
            <h4 className="text-xl font-bold text-left text-secondary">It fixes:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>why your website is not getting consistent traffic</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>why rankings are not converting into leads</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>why your content is not performing</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>why competitors are ahead</span>
              </div>
            </div>
            <p className="section-phara mt-6">More importantly, it connects SEO to business outcomes. Not traffic for the sake of traffic. Not rankings for the sake of visibility.</p>
            <h4 className="text-xl font-bold text-left text-secondary">But:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>relevant visitors</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>qualified leads</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>measurable growth</span>
              </div>
            </div>
            <p className="section-phara mt-4">This requires a clear strategy, not scattered effort. Because without structure, SEO becomes activity. With structure, it becomes growth.</p>
          </Section>

          <Section id="when-to-work-with-seo-agency" title="When It’s Time to Work with an SEO Agency">
            <p className="section-phara">There’s no perfect timing. But there is a clear point where delay starts costing you.</p>
            <h4 className="text-xl font-bold text-left text-secondary">You should consider working with an agency when:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>your website is not bringing consistent traffic</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>your leads depend only on ads or referrals</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>your competitors are consistently outranking you</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>your internal efforts are not delivering results</span>
              </div>
            </div>
            <p className="section-phara mt-6">At this stage, the question is not “Should I try more?” It’s “Am I approaching this the right way?” Because continuing with the same approach will only extend the problem.</p>
            <h4 className="text-xl font-bold text-left text-secondary">Working with the right team brings:</h4>
            <div className="space-y-2 mt-4 ml-1">
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>clarity on what’s not working</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>a structured plan</span>
              </div>
              <div className="flex items-start gap-3 section-phara text-zinc-700">
                <IoCheckmarkDone className="mt-1 h-5 w-5 flex-shrink-0 text-secondary" />
                <span>consistent execution</span>
              </div>
            </div>
            <p className="section-phara mt-6">
              If you’re evaluating this seriously, working with a{" "}
              <Link href="https://www.ayatiworks.com/" className="text-secondary hover:underline font-bold" target="_blank" rel="noopener noreferrer">digital marketing agency in Chennai that focuses on strategy-led SEO execution</Link>{" "}
              can help you move from trial-and-error system to a system that delivers.
            </p>
          </Section>

          <Section id="seo-is-not-the-problem" title="SEO Is Not the Problem — The Strategy Is">
            <p className="section-phara">SEO is not failing businesses. Poor strategy is.</p>
            <p className="section-phara">Most businesses are not short of effort. They are short of direction. They publish content. They try keywords. They experiment with different approaches. But without a clear structure, none of it compounds.</p>
            <p className="section-phara italic mt-4">That’s why results feel inconsistent. SEO today is not about doing more. It’s about doing the right things in the right order, consistently.</p>
            <p className="section-phara mt-4">The businesses that understand this don’t question whether SEO works. They see it working. And the ones that don’t, keep trying, without results.</p>
            <p className="section-phara font-bold mt-4">The difference is not the platform. It’s the approach.</p>
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


