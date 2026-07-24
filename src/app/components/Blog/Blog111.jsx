"use client";

import React from "react";
import { usePathname } from "next/navigation";


import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";

import { FiShare2, FiCopy } from "react-icons/fi";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { POSTS } from "../../lib/blogs-data";
import RelatedPostsFromData from "./RelatedPostsFromData";
import { getRelatedRecentPosts } from "../../lib/getRelatedRecentPosts";

import RightSidebarCategories from "./RightSidebarCategories";
import Image from "next/image";


const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage111() {
  const post = POSTS.find((p) => p.id === 111) || POSTS[0];

  const relatedPosts = getRelatedRecentPosts({
    currentPostId: post.id,
    category: post.category,
    limit: 3,
  });

  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-6">
        <SplitHeroBanner
          post={post}
          href={buildHref(post.slug)} // <-- normalized href
          imageSrc={post.cover}
          imageAlt={post.coverAlt}
          category={post.category}
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

      {/* MAIN TITLE */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              How Digital Marketing Services Drive Revenue When the Funnel
              Actually Aligns
            </span>
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)_250px]">
        {/* LEFT: TOC */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="why-most-digital-marketing-services-fail"
            title="Why Do Most Digital Marketing Services Fail to Deliver Revenue?"
          >
            <p className="section-phara">
              Most digital marketing services fail to deliver revenue because
              they optimize activities, not outcomes. SEO teams focus on
              rankings, paid media teams focus on cost per lead, and content
              teams focus on engagement.
            </p>
            <p className="section-phara">
              Each channel may perform well in isolation, but revenue lives in
              the connection between them, and that connection is often missing.
            </p>
            <p className="section-phara">
              The failure is structural. When awareness, demand, and conversion
              are managed separately, no one owns the full customer journey.
            </p>
            <p className="section-phara">
              Leads are generated without intent alignment, traffic grows
              without qualification, and marketing reports success while revenue
              remains flat.
            </p>
            <p className="section-phara">
              The issue isn’t effort or tools; it’s the absence of a unified
              funnel strategy.
            </p>
            <p className="section-phara">
              Revenue-focused marketing requires a shift from channel
              performance to funnel performance.{" "}
            </p>
            <p className="section-phara">
              Digital marketing services must be designed to move prospects
              forward intentionally, rather than just increasing surface-level
              metrics.
            </p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="how-should-awareness-marketing-support-revenue-growth"
            title="How Should Awareness Marketing Support Revenue Growth?"
          >
            <p className="section-phara">
              Awareness marketing supports revenue growth only when it attracts
              the right audience with the right expectations.
            </p>
            <p className="section-phara">
              Visibility alone does not create demand. If awareness content is
              disconnected from buyer intent, it generates traffic that consumes
              resources but does not convert.
            </p>
            <p className="section-phara">
              Effective awareness marketing is mapped to intent signals. SEO
              content targets problem-aware and solution-aware searches.{" "}
            </p>
            <p className="section-phara">
              Paid campaigns introduce value propositions that align with
              downstream offers. Messaging is consistent, so prospects
              understand not just who the brand is, but why it is relevant to
              their problem.
            </p>
            <p className="section-phara">
              This approach ensures awareness is not a vanity stage but the
              first step in a revenue path.{" "}
            </p>
            <p className="section-phara">
              When awareness is built with intent, it feeds demand generation
              instead of inflating bounce rates and disengaged traffic.
            </p>
          </Section>

          {/* STEP 2 */}
          <Section
            id="what-breaks-demand-generation"
            title="What Breaks Demand Generation in the Middle of the Funnel?"
          >
            <p className="section-phara">
              Demand generation breaks when leads are treated as outcomes
              instead of transitions. Many funnels collapse in the middle
              because the handoff between awareness and conversion is poorly
              defined.
            </p>
            <p className="section-phara">
              {" "}
              Content attracts interest, ads capture leads, but neither prepares
              prospects for a buying decision.
            </p>
            <p className="section-phara">
              {" "}
              Common breakdowns include mismatched messaging, weak qualification
              criteria, and lack of alignment between marketing and sales.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Leads may look good on paper but fail to progress because intent
              was never validated. This creates friction, wasted spend, and
              declining trust between teams.
            </p>
            <p className="section-phara">
              {" "}
              Demand works when every interaction answers a specific question
              the buyer has at that stage. When digital marketing services are
              structured around this progression, leads become opportunities
              instead of liabilities.
            </p>
            {/* <p className="section-phara"> </p> */}
          </Section>

          {/* STEP 3 */}
          <Section
            id="how-do-digital-marketing-services-enable-revenue-alignment"
            title="How Do Digital Marketing Services Enable Revenue Alignment Across the Funnel?"
          >
            <p className="section-phara">
              Digital marketing services enable revenue alignment when they are
              built as a system rather than a collection of channels. Awareness,
              demand, and conversion share common goals, data, and
              accountability. Performance is measured by movement through the
              funnel, not isolated metrics.
            </p>
            <p className="section-phara">
              This is where <strong>Ayatiworks</strong>{" "}
              <Link
                href="/digital-marketing-services"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Digital Marketing Services
              </Link>{" "}
              are structured differently. Services are aligned to funnel stages,
              intent mapping, and revenue contribution rather than standalone
              execution.
            </p>
            <p className="section-phara">
              Digital marketing only becomes revenue-driven when it is viewed as
              a business system, not a collection of channels. Most marketing
              failures don’t happen because SEO, paid ads, or content “don’t
              work.” They happen because these channels are deployed without
              alignment, ownership, or a shared growth objective.
            </p>
            <p className="section-phara">
              This system-level thinking is explained in depth in{" "}
              <Link
                href="/blogs/digital-marketing-services/digital-marketing-integrated-growth-framework"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Why Digital Marketing Must Be Viewed as a Business System,
              </Link>{" "}
              where digital marketing services are framed as an integrated
              growth engine rather than isolated executions.
            </p>
            <p className="section-phara">
              The framework outlines how awareness, demand, and revenue must
              operate together to create scalable, predictable outcomes,
              especially for modern businesses navigating fragmented buyer
              journeys.
            </p>
            <p className="section-phara">
              When digital marketing services are designed using this integrated
              growth framework, alignment stops being theoretical and starts
              becoming operational.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="how-can-businesses-evaluate-whether-a-marketing-agency"
            title="How Can Businesses Evaluate Whether a Marketing Agency Is Revenue-Focused?"
          >
            <p className="section-phara">
              Businesses can evaluate whether a marketing agency is
              revenue-focused by examining how it defines success. Agencies that
              report only on traffic, leads, or engagement are optimizing
              activity. Revenue-focused agencies report on funnel movement,
              pipeline contribution, and conversion quality.
            </p>
            <p className="section-phara">
              Key indicators include whether the agency connects channels to
              business goals, aligns marketing metrics with sales outcomes, and
              takes responsibility beyond lead generation. Transparency in
              reporting and clarity in strategy are stronger signals than tool
              stacks or tactical promises.
            </p>
            <p className="section-phara">
              {" "}
              A revenue-focused agency does not sell services in isolation. It
              builds systems that align marketing execution with business
              growth.
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="from-funnel-alignment-to-predictable-scalable-growth"
            title="From Funnel Alignment to Predictable, Scalable Growth"
          >
            <p className="section-phara">
              Funnel alignment turns digital marketing from a cost center into a
              growth driver. When awareness, demand, and revenue operate as one
              system, performance becomes predictable.
            </p>
            <p className="section-phara">
              Marketing decisions are based on impact, not assumptions.
            </p>
            <p className="section-phara">
              As search behavior evolves and AI-driven discovery reshapes
              visibility, fragmented marketing will continue to
              underperform.{" "}
            </p>
            <p className="section-phara">
              Businesses that invest in aligned digital marketing services
              position themselves for scalable, sustainable growth, where every
              effort moves the needle forward.
            </p>
            <p className="section-phara">
              Alignment is not an upgrade. It is the foundation.
            </p>
            {/* <p className="section-phara"></p> */}
          </Section>

          {/* FAQ SECTION */}
          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <RightSidebarCategories />
        </aside>
      </section>

      {/* Bottom: Related Posts */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        {/* <RelatedPostsSection posts={relatedPosts} /> */}
        <RelatedPostsFromData posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */
function WhatsInside({ items }) {
  const [activeId, setActiveId] = React.useState(items?.[0]?.id || "");

  React.useEffect(() => {
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

  React.useEffect(() => {
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
          What’s Inside
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

function CategoriesCard({ items }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xl section-title">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-lg">
          {items.map((c) => {
            const active = isActive(c.href);
            return (
              <li key={c.text}>
                <Link
                  href={c.href}
                  className={[
                    "block rounded px-3 py-2 transition-colors",
                    active
                      ? "text-primary text-xl font-primary"
                      : "text-black font-secondary text-lg hover:bg-blue-50",
                  ].join(" ")}
                >
                  {c.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* HERO BANNER */
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

function Bar() {
  return (
    <span
      className="mx-1 hidden h-6 w-px bg-white/30 sm:inline-block"
      aria-hidden="true"
    />
  );
}

/* TOC items – UPDATED to match your 14 points */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "why-most-digital-marketing-services-fail",
    level: 1,
    label: "Why Digital Marketing Services Fail to Deliver Revenue",
  },
  {
    id: "how-should-awareness-marketing-support-revenue-growth",
    level: 1,
    label: "How Awareness Marketing Supports Revenue Growth",
  },
  {
    id: "what-breaks-demand-generation",
    level: 1,
    label: "What Breaks Demand Generation",
  },
  {
    id: "how-do-digital-marketing-services-enable-revenue-alignment",
    level: 1,
    label: "How Digital Marketing Services Enable Revenue Alignment",
  },
  {
    id: "how-can-businesses-evaluate-whether-a-marketing-agency",
    level: 1,
    label: "How to Evaluate a Revenue-Focused Marketing Agency",
  },
  {
    id: "from-funnel-alignment-to-predictable-scalable-growth",
    level: 1,
    label: "From Funnel Alignment to Scalable Growth",
  },
  {
    id: "faq",
    level: 1,
    label: "FAQs",
  },
];

/* Right rail categories */
const rightCategories = [
  { text: "SEO Services", href: "/blogs/seo" },
  {
    text: "Digital Marketing Services",
    href: "/blogs/digital-marketing-services",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>Metrics rise. Revenue moves only when the funnel aligns </em>
      </p>
      <p className="section-phara">
        Most digital marketing services promise growth, but very few are
        designed to deliver revenue. Traffic increases, leads come in,
        dashboards look busy, yet sales teams still struggle to connect
        marketing efforts to business outcomes.
      </p>
      <p className="section-phara">The gap isn’t execution. It’s alignment.</p>
      <p className="section-phara">
        {/* <Link
          href="https://www.ayatiworks.com/digital-marketing-services"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital marketing services
        </Link>{" "} */}
        In many organizations, awareness, demand generation, and conversion are
        treated as separate initiatives rather than a single revenue system.
      </p>
      <p className="section-phara">
        SEO runs independently of paid media. Content exists without sales
        intent. Leads are generated without clarity on qualification or
        follow-through.
      </p>
      <p className="section-phara">
        When this happens, marketing activity grows, but revenue impact stalls.
      </p>
      <p className="section-phara">
        Digital marketing services only drive revenue when the funnel works as
        one connected engine. Awareness must be built with intent.
      </p>
      <p className="section-phara">
        Demand must be structured to qualify, not just capture. Revenue must be
        measured as the outcome, not an afterthought.
      </p>
      <p className="section-phara">
        Alignment is not a buzzword here; it is the operating model.
      </p>
      {/* <p className="section-phara">      </p>
      <p className="section-phara">      </p> */}
    </section>
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

function FAQAccordion() {
  const faqs = [
    {
      q: "What does funnel alignment mean in digital marketing?",
      a: "Funnel alignment means connecting awareness, demand generation, and conversion into one unified system focused on revenue outcomes.",
    },
    {
      q: "Why doesn’t increased website traffic always lead to more sales?",
      a: "Because traffic without intent targeting and proper funnel progression does not convert into qualified opportunities.",
    },
    {
      q: "How do digital marketing services impact revenue?",
      a: "They impact revenue when strategies, channels, and metrics are aligned to move prospects through the funnel toward conversion.",
    },
    {
      q: "What is the biggest mistake businesses make with demand generation?",
      a: "Treating leads as final outcomes instead of qualifying and nurturing them toward sales readiness.",
    },
    {
      q: "How can I tell if an agency is focused on revenue or just metrics?",
      a: "Revenue-focused agencies report on pipeline impact, conversion quality, and business outcomes-not just traffic or leads.",
    },
    {
      q: "Is full-funnel digital marketing necessary for small businesses?",
      a: "Yes. Even small businesses benefit from alignment because it reduces wasted spend and improves conversion efficiency.",
    },
    {
      q: "How does funnel alignment support long-term growth?",
      a: "It creates predictability, improves optimization decisions, and allows marketing performance to compound over time.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(0);
  const toggle = (i) => setOpenIndex((curr) => (curr === i ? -1 : i));

  return (
    <div className="mx-auto w-full space-y-3">
      {faqs.map((item, i) => (
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

function FAQItem({ q, a, open, onToggle, index }) {
  const bodyId = `faq-panel-${index}`;
  return (
    <div
      className={[
        "overflow-hidden rounded-lg",
        "shadow-[0_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-slate-100",
        "transition-shadow duration-200",
      ].join(" ")}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={onToggle}
        className={[
          "flex w-full items-center justify-between gap-3 px-4 py-3 text-left",
          "transition-colors duration-200",
          open
            ? "bg-white text-primary font-primary"
            : "bg-white text-primary font-primary hover:bg-slate-50",
        ].join(" ")}
      >
        <h3 className="text-xl leading-5">{q}</h3>
        <span
          className={[
            "inline-flex h-7 w-7 items-center justify-center rounded-full border text-sm",
            "transition-colors duration-200",
          ].join(" ")}
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






