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
    id: "whistle-blew",
    level: 1,
    label: "The Moment the Whistle Blew, and What Was Already in Motion",
  },
  {
    id: "caas-strategy",
    level: 1,
    label: "The Rise of CAAS Strategy: Where Modern Influence Truly Begins",
  },
  {
    id: "digital-audience-shift",
    level: 1,
    label: "Tamil Nadu's Digital Audience Shift",
  },
  {
    id: "silence-strategy",
    level: 1,
    label: "Silence as Strategy: Why Less Visibility Created More Curiosity",
  },
  {
    id: "micro-marketing",
    level: 1,
    label: "Micro Marketing at Scale: One Campaign, Thousands of Conversations",
  },
  {
    id: "funnel-framework",
    level: 1,
    label: "The Funnel Marketing Framework Behind the Campaign",
  },
  {
    id: "content-not-marketing",
    level: 1,
    label: "Content That Didn't Feel Like Marketing",
  },
  {
    id: "pressure-multiplier",
    level: 1,
    label: "When Pressure Becomes a Marketing Multiplier",
  },
  {
    id: "selective-visibility",
    level: 1,
    label: "The Power of Selective Visibility",
  },
  {
    id: "atl-btl-ttl",
    level: 1,
    label: "ATL, BTL & TTL: The Integrated Influence Ecosystem",
  },
];

const FAQS_DATA = [];

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
    <section id="whistle-blew" className="scroll-mt-24">
      <h2 className="section-title mb-4 text-left text-3xl">
        The Moment the Whistle Blew, and What Was Already in Motion
      </h2>
      <p className="section-phara">
        Finally, the whistle blew. Tamil Nadu had witnessed a historic political
        victory.
      </p>
      <p className="section-phara">
        But here is the truth most people missed: by the time the results
        appeared on every screen across the state, the real work was already
        done.
      </p>
      <p className="section-phara">
        Long before the crowds surged. Long before the rallies intensified. Long
        before analysts scrambled to decode the numbers, something else had
        quietly, precisely, and powerfully taken shape beneath the surface of
        public attention.
      </p>
      <p className="section-phara font-bold">
        This was not a campaign. This was a structured{" "}
        <em>influence ecosystem.</em>
      </p>
      <p className="section-phara">
        And at Ayatiworks, we are not here to talk about politics. We are here
        to decode the marketing playbook, because what happened in Tamil Nadu is
        one of the most sophisticated real-world examples of modern digital
        influence strategy this country has ever seen.
      </p>
      <p className="section-phara">
        Tamil Nadu's political landscape had been evolving in lockstep with its
        audience. Millennials and Gen Z voters were no longer waiting for
        televised speeches or newspaper editorials to shape their thinking.
      </p>
      <p className="section-phara">
        They consumed information through reels, memes, WhatsApp communities,
        influencer discussions, fan edits, cultural callbacks, and emotionally
        resonant short-form content.
      </p>
      <p className="section-phara">
        Their attention lived online. Their trust was built through
        relatability, not authority.
      </p>
      <p className="section-phara">
        And somewhere within this shift, a powerful marketing structure was
        quietly taking form.
      </p>
      <p className="section-phara">
        What makes this worth studying as a brand or business leader is not who
        won. It is how the win was engineered, without desperation, without
        noise, and without ever making the audience feel marketed to.
      </p>
      <p className="section-phara">
        There were no constant declarations. No reactive press releases for
        every news cycle. No aggressive, visible attempts to dominate
        conversation.
      </p>
      <p className="section-phara">
        Instead, there was restraint. There was patience. There was structure.
      </p>
      <p className="section-phara">
        While public attention remained fixed on controversies, campaign
        restrictions, media narratives, cancelled rallies, legal pressure, and
        personal attacks, an entirely different operation continued to grow.
        Quietly. Patiently. With remarkable cultural precision.
      </p>
      <p className="section-phara">
        This was not just digital marketing. This was{" "}
        <Link
          href="/content-as-a-service/multilingual-marketing/#what-we-offered"
          className="text-secondary hover:underline"
        >
          vernacular influence engineering
        </Link>{" "}
        powered by a structured CAAS Strategy.
      </p>
      <p className="section-phara">
        At Ayatiworks, we define the CAAS Strategy as a long-term influence
        framework where Content, Audience Alignment, Amplification, and
        Storytelling evolve together, from the germination of an idea all the
        way to mass-scale momentum. Each pillar feeds the next. None of them
        works in isolation.
      </p>
      <p className="section-phara">
        And that is precisely what made this campaign different from everything
        that came before it in Tamil Nadu's political communication history.
      </p>
      <p className="section-phara">
        The communication did not depend on polished political speeches or
        traditional mass outreach alone. It entered people's lives through
        familiarity, through the Tamil they spoke every day, through local slang
        exchanged casually with friends, through culturally rooted humour,
        through movie dialogues they had emotionally carried for years, through
        regional dialects that sounded less like political messaging and more
        like someone from their own street speaking directly to them.
      </p>
      <p className="section-phara font-bold">
        This was not broadcast messaging. This was calibrated audience
        alignment.
      </p>
      <p className="section-phara">
        Different regions consumed different emotional tones. Urban youth
        connected with meme culture, reels, cinematic edits, punch dialogues,
        and short-form emotional storytelling. Semi-urban and regional audiences
        resonated with localized Tamil phrases, familiar ideological triggers,
        and hyper-personal narratives that reflected their own frustrations and
        aspirations.
      </p>
      <p className="section-phara">
        The brilliance of the CAAS Strategy was that content never felt
        forcefully distributed. It felt discovered. And when audiences discover
        content rather than receive it, the emotional ownership is exponentially
        stronger.
      </p>
      <p className="section-phara">
        Every layer of communication served a specific purpose inside the larger
        influence funnel:
      </p>
      <div className="space-y-2 mt-4 ml-1">
        {[
          "Content created visibility",
          "Audience alignment created relatability",
          "Amplification created momentum",
          "Storytelling created emotional ownership",
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
        Together, they transformed passive viewers into active participants, and
        active participants into voluntary amplifiers.
      </p>
      <p className="section-phara">
        Film dialogue became a symbolic positioning. A meme became identity
        signaling. A reel became digital word-of-mouth moving through WhatsApp
        groups, tea shops, college corridors, fan communities, and local
        conversations, without a single rupee of paid media driving it.
      </p>
      <p className="section-phara">
        Instead of treating Tamil Nadu as one homogeneous audience segment, the
        communication ecosystem fragmented attention into micro-emotional
        clusters: locality-based narratives, age-specific triggers,
        ideology-driven storytelling, culturally adapted messaging formats, and
        digitally optimized vernacular content.
      </p>
      <p className="section-phara">
        People were not simply consuming campaign material. They were seeing
        reflections of themselves within the narrative.
      </p>
      <p className="section-phara">
        For Millennials and Gen Z audiences especially, the campaign subtly
        aligned itself with secular aspirations, emotional accessibility,
        anti-establishment fatigue, cultural pride, digital-native
        communication, and the desire for leadership that felt human rather than
        institutionally distant.
      </p>
      <p className="section-phara">
        And because these narratives were seeded gradually, not aggressively,
        they spread organically.
      </p>
      <p className="section-phara">
        No over-explanation. No visible desperation. No constant reaction to
        every controversy.
      </p>
      <p className="section-phara">
        While mainstream narratives focused on restrictions, pressure, setbacks,
        and silence, the digital ecosystem quietly reframed those very moments
        into emotional momentum.
      </p>
      <p className="section-phara font-bold">
        Perceived powerlessness became relatability. Silence became restraint.
        Restrictions became resistance. Struggle became shared identity.
      </p>
      <p className="section-phara">
        And eventually, the audience stopped feeling like spectators observing a
        campaign from the outside. They began to feel emotionally responsible
        for its outcome.
      </p>
      <p className="section-phara">
        That transition, from audience to emotional stakeholder, is where the
        real strength of the CAAS Strategy revealed itself.
      </p>
      <p className="section-phara">
        Because the most powerful campaigns are not the ones people merely
        support. They are the ones people personally carry forward.
      </p>
      <p className="section-phara font-bold">
        This is not political analysis. This is an Ayatiworks breakdown of a
        modern influence engine, and everything businesses and brands can learn
        from it.
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

export default function AEOArticlePage125() {
  const post = POSTS.find((p) => p.id === 125) || POSTS[0];
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

          {/* ===== H2: The Rise of CAAS Strategy ===== */}
          <Section
            id="caas-strategy"
            title="The Rise of CAAS Strategy: Where Modern Influence Truly Begins"
          >
            <p className="section-phara">
              Most campaigns start with visibility. Strong campaigns start with
              conditioning.
            </p>
            <p className="section-phara">
              <Link
                href="https://www.ayatiworks.com/content-as-a-service"
                className="text-secondary hover:underline"
              >
                The CAAS Strategy
              </Link>
              : Content, Audience Alignment, Amplification, and
              Storytelling, is not a checklist. It is a sequenced framework that
              operates from the germination stage of an idea, long before mass
              attention arrives.
            </p>
            <p className="section-phara">
              Here is how each pillar functioned in this campaign, and more
              importantly, what it means for your brand:
            </p>

            <SectionH3 title="Content: The Entry Point, Not the Destination">
              <p className="section-phara">
                Content in this campaign was never created in isolation. Every
                meme, reel, dialogue callback, and vernacular post existed to
                serve a larger narrative purpose. The content did not announce.
                It acclimated. It made people comfortable with a story before
                they consciously realized they were being told one.
              </p>
              <p className="section-phara font-bold">
                For businesses, this is the shift from campaign-first to
                narrative-first content thinking. Your content should create
                familiarity before it asks for anything.
              </p>
            </SectionH3>

            <SectionH3 title="Audience Alignment: Segmentation With Emotional Precision">
              <p className="section-phara">
                Rather than broadcasting one generic message across Tamil Nadu,
                the strategy segmented audiences into micro-emotional clusters.
                Urban youth received culturally coded digital content. Rural and
                semi-urban audiences received hyper-local, dialect-driven
                narratives. Each cluster felt personally spoken to.
              </p>
              <p className="section-phara">
                This is the difference between{" "}
                <Link
                  href="https://www.ayatiworks.com/digital-marketing-services/social-media-marketing"
                  className="text-secondary hover:underline"
                >
                  demographic targeting and psychographic alignment
                </Link>
                . The former tells you who someone is.
                The latter tells you what they feel, and that is where real
                influence lives.
              </p>
            </SectionH3>

            <SectionH3 title="Amplification: Disciplined, Not Desperate">
              <p className="section-phara">
                The amplification strategy was defined by what it did not do: it
                did not flood every channel, react to every narrative, or
                manufacture urgency. It chose moments, selected platforms, and
                allowed organic sharing to do the heavy lifting.
              </p>
              <p className="section-phara">
                When audiences share content voluntarily, the reach is not just
                wider, it is trusted. Peer-to-peer amplification carries a
                credibility no paid media budget can manufacture.
              </p>
            </SectionH3>

            <SectionH3 title="Storytelling: The System That Held It All Together">
              <p className="section-phara">
                The storytelling layer was what gave the entire framework
                emotional durability. Struggle was reframed as resilience.
                Silence was reframed as strategic restraint. Every external
                pressure became part of an evolving story that audiences felt
                personally connected to.
              </p>
              <p className="section-phara">
                By the time the campaign reached large-scale visibility,
                emotional connection had already been established. The public
                was not discovering a movement anymore. They already felt part
                of it.
              </p>
              <p className="section-phara font-bold">
                That is the difference between marketing at an audience and
                building with them.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: Tamil Nadu's Digital Audience Shift ===== */}
          <Section
            id="digital-audience-shift"
            title="Tamil Nadu's Digital Audience Shift"
          >
            <p className="section-phara">
              Tamil Nadu's younger audience no longer consumes politics, or any
              brand communication, through traditional methods alone. The rules
              of attention have fundamentally changed.
            </p>
            <p className="section-phara">
              Millennials and Gen Z engage through reels, memes, WhatsApp
              communities, fan edits, local influencers, and culturally familiar
              digital conversations. They do not wait for information to arrive.
              They curate it, filter it, share it, and most importantly, they
              amplify what feels personally meaningful to them, and ignore
              everything that feels manufactured.
            </p>
            <p className="section-phara font-bold">
              Modern audiences respond faster to relatability than to authority.
            </p>
            <p className="section-phara">
              This campaign understood that distinction completely. Instead of
              relying on speeches and formal announcements, the messaging moved
              through vernacular marketing: local Tamil dialects, meme culture,
              movie punch dialogues, regional slang, and emotionally familiar
              storytelling formats.
            </p>
            <p className="section-phara">
              The content didn't feel politically manufactured. It felt socially
              native. And that distinction is everything, because audiences
              today don't amplify what looks like marketing. They amplify what
              feels personal, culturally relevant, and emotionally
              representative of who they are.
            </p>
            <p className="section-phara font-bold">
              For brands operating in Tamil Nadu and across regional India, this
              is not an insight to file away for later. It is an operational
              imperative right now. The audience shift has already happened. The
              only question is whether your communication has caught up with it.
            </p>
          </Section>

          {/* ===== H2: Silence as Strategy ===== */}
          <Section
            id="silence-strategy"
            title="Silence as Strategy: Why Less Visibility Created More Curiosity"
          >
            <p className="section-phara">
              Most campaigns react to pressure with noise. This one reacted with
              restraint.
            </p>
            <p className="section-phara">
              During controversies, restrictions, cancellations, and sustained
              media pressure, the communication strategy made a deliberate,
              counterintuitive choice: it did not over-explain itself. It did
              not defend every narrative. It did not flood every channel with
              reactive messaging. It allowed public curiosity to grow, and
              emotional interpretation to fill the space that silence created.
            </p>
            <p className="section-phara">
              That silence created psychological depth that no press release
              could have manufactured.
            </p>
            <p className="section-phara">
              People began associating struggle with authenticity. Restraint
              with discipline. The less reactive the campaign appeared, the more
              emotionally invested the audience became. They weren't being told
              what to think. They were arriving at their own conclusions, which
              made those conclusions far more durable.
            </p>
            <p className="section-phara font-bold">
              Constant communication creates attention. Controlled communication
              creates authority.
            </p>
            <p className="section-phara">
              Not every narrative needs interruption. Not every controversy
              needs a counter-statement. Sometimes the strongest momentum is
              built when audiences begin completing the story themselves, and
              when they do, they own it.
            </p>
            <p className="section-phara">
              For brands, the lesson here is direct and uncomfortable: most
              companies over-communicate. They post because they feel they must,
              react because they fear silence, and explain because they
              underestimate their audience's ability to read between the lines.
            </p>
            <p className="section-phara font-bold">
              Strategic silence, knowing what to say, what not to say, and when
              to hold, is one of the most underutilized brand tools in modern
              digital marketing. It creates narrative authority that volume
              alone never can.
            </p>
          </Section>

          {/* ===== H2: Micro Marketing at Scale ===== */}
          <Section
            id="micro-marketing"
            title="Micro Marketing at Scale: One Campaign, Thousands of Conversations"
          >
            <p className="section-phara">
              One of the defining strengths of this campaign was its ability to
              communicate differently with different audience clusters, without
              ever losing message consistency at the core.
            </p>
            <p className="section-phara">
              Urban youth consumed reels, meme edits, and short-form video
              narratives that felt native to their platform behavior.
            </p>
            <p className="section-phara">
              Regional audiences connected through local Tamil slang,
              emotionally familiar phrases, and hyper-local issues that
              reflected their daily realities.
            </p>
            <p className="section-phara">
              WhatsApp groups functioned as closed community loops where content
              spread through trust rather than advertising, making each forward
              a personal endorsement, not a paid impression.
            </p>
            <p className="section-phara">
              Instead of broadcasting one generic message across the state, the
              communication adapted itself to people's environments,
              conversations, and digital habits.
            </p>
            <p className="section-phara">
              It spoke to each cluster in its own emotional language, while all
              of those conversations pointed toward the same unified narrative.
            </p>
            <p className="section-phara font-bold">
              Mass influence is built through micro relevance. That is the
              equation that most brands get backwards.
            </p>
            <p className="section-phara">
              They invest in reach and forget about resonance. They optimize for
              impressions and overlook emotional fit. They treat every audience
              as one audience, and wonder why their content performs below
              expectations.
            </p>
            <p className="section-phara">
              The TVK campaign demonstrated that when you get micro relevance
              right across enough clusters simultaneously, the aggregate effect
              is mass movement. Not because one big message reached everyone,
              but because thousands of small, personally relevant conversations
              happened at the same time, pointing in the same direction.
            </p>
          </Section>

          {/* ===== H2: The Funnel Marketing Framework ===== */}
          <Section
            id="funnel-framework"
            title="The Funnel Marketing Framework Behind the Campaign"
          >
            <p className="section-phara">
              The campaign followed a structured three-stage influence funnel,
              but it was executed with such cultural precision that the audience
              never felt funneled. They felt accompanied.
            </p>

            <SectionH3 title="Stage One: Attention Through Culture">
              <p className="section-phara">
                The top of the funnel was built on familiarity, not promotion.
                Memes, movie callbacks, reels, and relatable digital content
                created initial visibility without the brand overhead of
                traditional advertising. People engaged because the content was
                entertaining and culturally resonant, not because they were
                being asked to support something.
              </p>
              <p className="section-phara font-bold">
                For brands: your awareness stage content should earn attention,
                not demand it. Cultural relevance opens doors that promotional
                content cannot.
              </p>
            </SectionH3>

            <SectionH3 title="Stage Two: Emotional Reinforcement">
              <p className="section-phara">
                Once visibility was established, the messaging shifted. Content
                began to emphasize struggle, restraint, identity, and shared
                frustration. The emotional frequency shifted from entertainment
                to investment. People were no longer just watching, they were
                beginning to feel something.
              </p>
              <p className="section-phara">
                This is the stage where most brand campaigns collapse. They move
                from awareness directly to conversion, skipping the emotional
                reinforcement layer entirely. The result is an audience that
                knows about the brand but doesn't care about it.
              </p>
            </SectionH3>

            <SectionH3 title="Stage Three: Participation and Ownership">
              <p className="section-phara">
                The final stage was the most powerful. Audiences became active
                amplifiers, sharing content, participating in debates, creating
                their own commentary, forwarding messages across WhatsApp
                groups, and building fan communities that sustained organic
                reach without a single paid placement driving it.
              </p>
              <p className="section-phara">
                The campaign didn't just build awareness. It built emotional
                involvement strong enough for people to carry the narrative
                themselves.
              </p>
              <p className="section-phara font-bold">
                For any brand, this is the ultimate marketing outcome: an
                audience that does your marketing for you, not because you
                incentivized them to, but because they genuinely believe in what
                you stand for.
              </p>
            </SectionH3>
          </Section>

          {/* ===== H2: Content That Didn't Feel Like Marketing ===== */}
          <Section
            id="content-not-marketing"
            title="Content That Didn't Feel Like Marketing"
          >
            <p className="section-phara">
              The most effective content rarely looks like content marketing.
              This campaign mastered that distinction.
            </p>
            <p className="section-phara">
              Instead of relying on polished promotional creatives and campaign
              announcements, the messaging blended seamlessly into everyday
              digital culture. Movie dialogues. Meme templates. Local humour.
              Emotional video edits. Culturally familiar storytelling formats
              that people already loved, now repurposed to carry a narrative.
            </p>
            <p className="section-phara">
              The content felt conversational, not corporate. It felt personal,
              not produced.
            </p>
            <p className="section-phara">
              A punch dialogue became a political statement. A reel became
              emotional positioning. A meme became social signaling. And because
              the communication looked native to the platforms people already
              consumed daily, they interacted with it naturally, and shared it
              aggressively.
            </p>
            <p className="section-phara">
              There is a concept in content strategy called native integration:
              content that earns its place within an audience's existing
              consumption habits rather than interrupting them. The TVK digital
              ecosystem was a masterclass in native integration at scale.
            </p>
            <p className="section-phara">
              For brands, this requires a{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service/branding-service"
                className="text-secondary hover:underline"
              >
                genuine understanding of how your audience consumes content
              </Link>
              , not what format your marketing team is
              comfortable producing. The gap between those two things is where
              most content budgets disappear.
            </p>
            <p className="section-phara font-bold">
              The question every brand should ask before publishing is not:
              'Does this communicate our message?' It should be: 'Would someone
              share this even if they didn't know it was from us?' If the answer
              is no, the content is not yet ready.
            </p>
          </Section>

          {/* ===== H2: When Pressure Becomes a Marketing Multiplier ===== */}
          <Section
            id="pressure-multiplier"
            title="When Pressure Becomes a Marketing Multiplier"
          >
            <p className="section-phara">
              Restrictions. Cancelled rallies. Sustained media scrutiny. Legal
              pressure. Personal attacks. Controversy after controversy.
            </p>
            <p className="section-phara">
              Any of these, handled differently, could have derailed the
              campaign entirely. Instead, they became fuel.
            </p>
            <p className="section-phara">
              The strategy's response to external pressure was remarkably
              consistent: avoid emotional overreaction, allow audiences to
              interpret the situation themselves, and trust the narrative
              structure that had already been built.
            </p>
            <p className="section-phara">
              Slowly, and then all at once, people stopped viewing the struggle
              as political friction. They started seeing it as resistance
              against an established system.
            </p>
            <p className="section-phara">
              That reframing was not accidental. It was the natural outcome of a
              storytelling framework that had primed the audience to interpret
              pressure as proof of authenticity.
            </p>
            <p className="section-phara">
              Supporters stopped behaving like followers consuming campaign
              content. They became defenders, amplifiers, and emotional carriers
              of the narrative.
            </p>
            <p className="section-phara">
              The pressure did not weaken visibility. It strengthened audience
              ownership. Every controversy became a rallying point. Every
              restriction became evidence. Every setback became part of a story
              that supporters felt personally invested in resolving.
            </p>
            <p className="section-phara">
              For brands, the lesson is this: how you respond to adversity is
              itself a communication strategy. Brands that over-react,
              over-explain, and issue defensive statements in the face of
              criticism often amplify the very narrative they are trying to
              suppress.
            </p>
            <p className="section-phara font-bold">
              Strategic composure, paired with a strong enough pre-existing
              narrative, allows audiences to defend you before you even need to
              defend yourself. That is brand equity in its most powerful form.
            </p>
          </Section>

          {/* ===== H2: The Power of Selective Visibility ===== */}
          <Section
            id="selective-visibility"
            title="The Power of Selective Visibility"
          >
            <p className="section-phara">
              The strategy never attempted to show everything. It controlled
              exposure carefully, and that control was itself a form of
              communication.
            </p>
            <p className="section-phara">
              Certain moments were amplified. Certain responses were
              deliberately delayed. Certain narratives were allowed to grow
              organically without interruption. In a digital ecosystem driven by
              oversharing and constant content output, restraint created
              curiosity.
            </p>
            <p className="section-phara">
              People were shown enough to stay emotionally connected, but never
              enough to fully decode the strategy. That balance created
              narrative control that no amount of paid media could replicate.
            </p>
            <p className="section-phara">
              There is a psychological principle at work here: humans are more
              drawn to incomplete narratives than complete ones. When a story
              has obvious gaps, the mind fills them in, and the versions people
              create for themselves are always more personally compelling than
              any version you could have manufactured for them.
            </p>
            <p className="section-phara">
              The campaign leveraged this brilliantly. By withholding certain
              information, certain responses, and certain moments of visibility,
              it invited the audience into an active role of meaning-making. And
              audiences that make meaning around your brand become your most
              committed advocates.
            </p>
            <p className="section-phara font-bold">
              Modern influence is not built by speaking constantly. It is built
              by understanding what to reveal, what to withhold, and when
              silence itself becomes communication.
            </p>
            <p className="section-phara">
              For brands, selective visibility requires confidence in your
              positioning and trust in your audience. Most brands lack both,
              which is why they default to oversharing. Building that confidence
              and trust is the foundational work of a long-term brand strategy.
            </p>
          </Section>

          {/* ===== H2: ATL, BTL & TTL ===== */}
          <Section
            id="atl-btl-ttl"
            title="ATL, BTL & TTL: The Integrated Influence Ecosystem"
          >
            <p className="section-phara">
              One of the most commonly misunderstood aspects of this campaign,
              from a marketing standpoint, was that it was not purely a digital
              play. The digital ecosystem was the most visible layer. But
              beneath it, an integrated above-the-line, below-the-line, and
              through-the-line communication structure was operating in perfect
              synchronization.
            </p>

            <SectionH3 title="Above-The-Line (ATL): Mass Reach, Broad Narratives">
              <p className="section-phara">
                ATL activities created the broad visibility foundation,
                television coverage, mass media moments, large-scale rally
                documentation, and public appearances that reached audiences
                across every demographic and geography simultaneously. These
                moments created shared cultural reference points that the
                digital ecosystem could then amplify and fragment into
                micro-relevant content.
              </p>
              <p className="section-phara font-bold">
                For brands: ATL is not dead. It is the foundation on which
                everything else builds. Without shared cultural moments, digital
                amplification has nothing to work with.
              </p>
            </SectionH3>

            <SectionH3 title="Below-The-Line (BTL): Ground-Level Emotional Connection">
              <p className="section-phara">
                BTL efforts built the emotional infrastructure that no digital
                campaign could manufacture alone. Community-level conversations,
                hyperlocal events, direct engagement with voter clusters, and
                ground-level relationship building created the trust that
                allowed digital content to land with authenticity rather than
                feel like top-down messaging.
              </p>
              <p className="section-phara">
                For brands: your BTL activity is where your brand promise is
                either proven or exposed. Digital communication amplifies the
                truth on the ground. If the ground reality doesn't match the
                digital narrative, audiences will find out, and they will share
                it louder than anything you publish.
              </p>
            </SectionH3>

            <SectionH3 title="Through-The-Line (TTL): The Synchronization Layer">
              <p className="section-phara">
                TTL integration was where the real magic happened. Online
                narratives continuously reinforced what people experienced
                offline. Every rally clip became reel content. Every public
                reaction became a shareable narrative. Every offline moment
                extended into digital conversation, and every digital trend
                created expectations for the next offline appearance.
              </p>
              <p className="section-phara">
                The campaign didn't separate online and offline influence. It
                merged them into one continuous audience experience, and that
                seamlessness is what made the impact irreversible.
              </p>
              <p className="section-phara font-bold">
                For brands with both physical and digital presences, this
                integrated approach is not optional. It is the baseline
                requirement for building lasting brand authority. Customers who
                experience consistency across online and offline touchpoints
                trust brands more deeply and advocate for them more loudly.
              </p>
            </SectionH3>
          </Section>

          {/* ===== CTA ===== */}
          <div className="mt-12 p-6 bg-slate-900 text-white rounded-xl text-center">
            <p className="text-xl font-bold mb-4">
              Want to decode your brand's influence strategy?
            </p>
            <Link
              href="https://www.ayatiworks.com/contact-us"
              className="inline-flex items-center rounded-full bg-secondary px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-secondary/90 transition-colors"
            >
              Let's map your CAAS framework
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
