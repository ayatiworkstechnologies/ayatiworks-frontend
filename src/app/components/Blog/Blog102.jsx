"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import Script from "next/script";

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

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};

export default function AEOArticlePage102() {
  const post = POSTS.find((p) => p.id === 102) || POSTS[0];

  return (
    <main className="min-h-screen bg-white">
      {/* Top banner */}
      {/* <section className="mx-auto section-container px-4 sm:px-6 pt-6">
        <ResponsiveBanner
          href="#"
          alt="Your Offer"
          desktopSrc="/banner/aoe-blogs-web.webp"
          mobileSrc="/banner/aoe-blogs-mob.webp"
        />
      </section> */}

      <section className="mx-auto section-container px-4 sm:px-6 pt-6">
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
            avatar:
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
          }}
          updatedAt={post.date}
          readMins={post.readMins}
        />
      </section>

      {/* HERO */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              How Your Tech Startup Can Use Answer Engine Optimisation (AEO) to
              Reach their Audience{" "}
            </span>
            {/* <br />
            <span className="text-primary">
              5 Must-Know AEO Strategies for 2025
            </span> */}
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid section-container grid-cols-1 gap-6 px-4 sm:px-6 py-8 lg:grid-cols-[230px_minmax(0,1fr)_280px]">
        {/* LEFT: TOC (scroll-spy with active styling) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <WhatsInside items={tocItems} />
        </aside>

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="what-is-aeo"
            title="What Is Answer Engine Optimization (AEO) and Why It Matters for Tech Startups"
          >
            <p className="section-phara">
              With <strong>AI-driven search engines, voice assistants,</strong>{" "}
              and <strong> conversational chatbots</strong> shaping user
              behavior, the way people discover information has completely
              transformed. That’s where{" "}
              <strong>Answer Engine Optimization (AEO) </strong> comes in.
            </p>
            <p className="section-phara">
              {" "}
              <strong>AEO</strong> is the process of optimizing your digital
              presence so that{" "}
              <strong>AI systems, search engines, and voice platforms</strong>{" "}
              can understand, extract, and present your brand’s content directly
              as the best possible answer to a user’s query. Unlike traditional
              SEO, which focuses on ranking web pages on SERPs, AEO focuses on
              contextual accuracy and semantic relevance.
            </p>
            <p className="section-phara">
              When a user asks, “What’s the best productivity tool for
              startups?” or “How do SaaS companies improve user retention?”, AI
              engines like{" "}
              <strong> Google’s AI Overviews, Bing Copilot, or ChatGPT </strong>{" "}
              don’t just list websites, they summarize insights from sources
              they trust. Being cited or featured in those summaries is the
              new-age equivalent of ranking #1.
            </p>
            <p className="section-phara">
              For <strong>tech startups</strong> , AEO is a powerful opportunity
              to build visibility early. By structuring your content with{" "}
              <strong>schema markup</strong> , creating{" "}
              <strong>conversational and intent-driven answers</strong>, and
              focusing on <strong>topic authority</strong> , your brand can
              become part of these AI-generated responses.
            </p>
            <p className="section-phara">
              In essence, <strong> Answer Engine Optimization </strong>ensures
              your startup is not just searchable, but recommendable. It’s how
              you position your brand to be chosen by algorithms that think like
              humans, and trusted by audiences that expect instant, intelligent
              answers.
            </p>
          </Section>

          <Section
            id="why-aeo"
            title="Why Answer Engine Optimization (AEO) Matters for Tech Startups"
          >
            <p className="section-phara">
              For tech startups, the biggest challenge isn’t building a great
              product; it’s getting discovered by the right audience before the
              competition does. Traditional SEO still drives value, but with{" "}
              <strong>AI-led search experiences</strong> taking center stage,
              relying solely on keyword rankings is no longer enough. This is
              where<strong> Answer Engine Optimization (AEO) </strong>gives
              startups a competitive edge.
            </p>
            <p className="section-phara">
              Startups often operate with lean budgets and limited marketing
              resources. AEO allows them to{" "}
              <strong>maximize organic visibility </strong> without spending
              heavily on paid campaigns. By aligning their content with{" "}
              <strong>
                how AI systems interpret, summarize, and deliver information,
              </strong>{" "}
              startups can appear in{" "}
              <strong>
                {" "}
                AI-generated responses, voice search results, and zero-click
                answers,
              </strong>{" "}
              precisely where decision-makers are seeking quick insights.
            </p>
            <p className="section-phara">
              More importantly, AEO helps{" "}
              <strong>build brand trust early.</strong> When an AI assistant or
              search engine repeatedly cites your content as a credible answer
              source, it signals reliability, not just to algorithms but to real
              users evaluating your brand. This creates an advantage that paid
              ads can’t buy: <strong>authority through association.</strong>
            </p>
            <p className="section-phara">
              In a digital landscape dominated by instant answers,{" "}
              <strong>
                AEO ensures your startup’s expertise becomes discoverable,
                quotable, and recommendable.{" "}
              </strong>
              It’s not about chasing algorithms; it’s about earning recognition
              from them, by offering the clearest, most helpful answers your
              audience is already searching
            </p>
          </Section>

          <Section
            id="aeo-vs-seo"
            title="AEO vs SEO - Understanding the Difference"
          >
            <p className="section-phara">
              While{" "}
              <Link
                href="https://ayatiworks.com/digital-marketing-services/seo"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Search Engine Optimization
              </Link>{" "}
              <strong>(SEO) and Answer Engine Optimization (AEO)</strong> share
              the same goal, enhancing visibility, they operate differently in
              the evolving search ecosystem. SEO focuses on ranking web pages
              higher on search engine results pages (SERPs). AEO, on the other
              hand, optimizes information for{" "}
              <strong> AI-driven interfaces </strong>that deliver direct answers
              rather than a list of links.
            </p>
            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-102-3.jpg"
              alt="Understanding the difference between SEO vs AEO "
            />
          </Section>

          <Section
            id="core-strategies"
            title="Core Strategies for AEO Success in a Tech Startup"
          >
            <p className="section-phara">
              Implementing <strong>Answer Engine Optimization</strong> is not
              about reinventing your marketing strategy; it’s about refining it
              to meet the intelligence of modern search systems.
            </p>
            <p className="section-phara">
              Here’s how startups can apply AEO effectively:
            </p>

            {/* List of strategies - blog style */}
            <ol className="space-y-8">
              {/* 1 */}
              <li className="border-t border-slate-200 pt-6 first:border-t-0 first:pt-0 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    1
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Focus on questions, not just keywords
                    </h3>
                    <p className="section-phara">
                      AI engines respond better to questions than vague queries.
                      Audit your existing content and map it to the micro
                      questions your audience actually asks. Tools like{" "}
                      <Link
                        href="https://alsoasked.com/"
                        className="text-secondary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                      >
                        AlsoAsked
                      </Link>{" "}
                      or{" "}
                      <Link
                        href="https://answerthepublic.com/"
                        className="text-secondary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                      >
                        AnswerThePublic
                      </Link>{" "}
                      help you capture real user phrasing.
                    </p>
                    <p className="rounded-lg shadow px-3 py-2 section-phara">
                      <span className="font-semibold">Example:</span>
                      Instead of optimizing for “startup growth tools,” create
                      content answering “What are the best startup growth tools
                      for early-stage founders?”
                    </p>
                  </div>
                </div>
              </li>

              {/* 2 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    2
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Optimize for conversational search
                    </h3>
                    <p className="section-phara">
                      Adopt a natural, human tone that mimics real dialogue.
                      Long-tail and intent-based phrases like “how,” “why,” and
                      “what” help AI recognize your content as a question to
                      answer. The famous “WH” words!
                    </p>
                    <p className="section-phara">
                      Use subheadings like FAQs within blogs, and concise
                      summaries after each major point; these are often what AI
                      systems extract.
                    </p>
                  </div>
                </div>
              </li>

              {/* 3 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    3
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Build structured, schema ready content
                    </h3>
                    <p className="section-phara">
                      <Link
                        href="https://ayatiworks.com/blogs/seo/5-must-know-AEO-Strategies-For-2025#strategy-2"
                        className="text-secondary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        prefetch={false}
                      >
                        Implement schema markup
                      </Link>{" "}
                      (FAQ, HowTo, Product, Review, and Organization schemas) to
                      help AI interpret and display your information clearly.
                      Structured data adds machine readability, signaling to
                      search engines that your content is reliable and
                      organized.
                    </p>
                  </div>
                </div>
              </li>

              {/* 4 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    4
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Strengthen topical authority
                    </h3>
                    <p className="section-phara">
                      {" "}
                      AI systems look for consistency and depth. Instead of
                      scattered blogs, create content clusters around themes
                      like AI for startups, automation tools, or scalable SaaS
                      models. Internal linking within these clusters helps
                      establish your site as a domain expert.
                    </p>
                  </div>
                </div>
              </li>

              {/* 5 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    5
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Use data and insights for credibility
                    </h3>
                    <p className="section-phara">
                      AI models prefer factual, verifiable information.
                      Incorporate statistics, studies, or original data wherever
                      possible. Reference reputable sources and include numbers
                      that make your content more credible and
                      “citation-worthy.”
                    </p>
                  </div>
                </div>
              </li>

              {/* 6 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    6
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Enhance technical SEO health
                    </h3>
                    <p className="section-phara">
                      AEO still relies on strong SEO fundamentals. Fast load
                      times, mobile optimization, clean site architecture, and
                      error-free indexing all contribute to content
                      discoverability. AI crawlers rely on the same
                      accessibility signals as search engines.
                    </p>
                  </div>
                </div>
              </li>

              {/* 7 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    7
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Target zero click and voice search
                    </h3>
                    <p className="section-phara">
                      With more users asking AI assistants and voice devices for
                      answers, your content should fit that format. Write in
                      short, direct sentences that can be easily read aloud.
                      Include “quick definition” or “summary” snippets within
                      longer content.
                    </p>
                  </div>
                </div>
              </li>

              {/* 8 */}
              <li className="border-t border-slate-200 pt-6 dark:border-slate-700">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 flex-none font-primary items-center justify-center rounded-full bg-secondary text-base font-semibold text-white ">
                    8
                  </span>
                  <div className="space-y-3">
                    <h3 className="text-2xl text-left section-title">
                      Monitor and refine continuously
                    </h3>
                    <p className="section-phara">
                      Regularly check how your brand appears in AI Overviews,
                      ChatGPT, Bing Copilot, or Perplexity. If your content
                      doesn’t show up, that’s an opportunity to optimize for
                      phrasing, clarity, or structure. AEO is iterative, refine
                      based on visibility trends.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </Section>

          <Section
            id="tools-and-tech"
            title="Tools and Tech Stack for Implementing AEO"
          >
            <p className="section-phara">
              Startups can integrate{" "}
              <strong> Answer Engine Optimization</strong> without overhauling
              their entire tech ecosystem. Here are some tools that simplify the
              process:
            </p>

            <div className="ml-10 py-5">
              <ul className="mt-4 space-y-2">
                {[
                  {
                    name: "AnswerThePublic / AlsoAsked",
                    desc: "Identify real user questions to guide AEO-focused content creation.",
                  },
                  {
                    name: "Frase / MarketMuse",
                    desc: "Analyze content intent, readability, and AI interpretability.",
                  },
                  {
                    name: "Google’s Structured Data Testing Tool / Schema.org / RankMath",
                    desc: "Validate and deploy schema markup for FAQs, HowTos, and Product data.",
                  },
                  {
                    name: "ChatGPT / Perplexity / Bing Copilot",
                    desc: "Test how AI tools summarize your content. If your brand doesn’t appear, it’s time to refine.",
                  },
                  {
                    name: "Google Search Console & GA4",
                    desc: "Track impressions, engagement, and visibility shifts after AEO updates.",
                  },
                ].map((item) => (
                  <li key={item.name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <span className="text-black/80 section-phara text-base">
                      <span className="font-semibold text-black">
                        {item.name}:
                      </span>{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Tech startups can combine these tools to maintain a{" "}
              <strong>360° feedback loop,</strong> from discovering what
              audiences ask, to testing how AI delivers the answers.
            </p>
          </Section>

          <Section id="case-insight" title="Case Insight!">
            <h3 className="text-2xl text-left section-title">
              How a SaaS Startup Leveraged AEO for Growth
            </h3>
            <p className="section-phara">
              A mid-stage SaaS startup offering workflow automation tools
              struggled with organic visibility despite strong SEO. Their
              content ranked but wasn’t cited in AI answers or voice searches.
            </p>
            <p className="section-phara">
              By implementing <strong>Answer Engine Optimization,</strong> they
              restructured their blogs with{" "}
              <strong>question-led H2s, added FAQ schemas,</strong> and rewrote
              sections into concise, conversational summaries.
            </p>
            <p className="section-phara">
              Within three months, the brand began appearing in{" "}
              <strong>AI Overviews and zero-click results </strong>for queries
              like “best automation tools for startups” and “AI tools to improve
              team productivity.”
            </p>
            <p className="section-phara">
              While traffic didn’t surge overnight, their{" "}
              <strong>
                {" "}
                brand mentions in AI-driven responses increased by 40%,
              </strong>{" "}
              leading to higher credibility and a 25% lift in demo sign-ups from
              organic discovery.
            </p>
            <p className="section-phara">
              <span className="font-bold"> The takeaway:</span> visibility in AI
              answers builds trust first, conversions second.
            </p>
            <p className="section-phara"></p>
          </Section>

          <Section id="be-the-answer" title="Be the Answer, Not Just an Option">
            <p className="section-phara">
              As AI continues to reshape how information is delivered,{" "}
              <strong>Answer Engine Optimization</strong> is becoming the next
              competitive advantage for startups. The startups that thrive in
              this new ecosystem will be those that
              <strong>
                {" "}
                speak the language of both humans and machines,
              </strong>{" "}
              clear, structured, and empathetic.
            </p>
            <p className="section-phara">
              Search is no longer about ranking; it’s about{" "}
              <strong>being recognized as the best possible answer.</strong> By
              combining solid SEO foundations with AEO strategies, tech startups
              can position themselves where real decisions happen inside
              AI-generated responses and digital conversations.
            </p>
            <p className="section-phara">
              In a world that’s moving from search to answers, your startup’s
              visibility will depend not on how loud you shout, but on how
              clearly you answer.
            </p>
            <p className="section-phara">
              Talk to your Audience! Give them answers! Add Value!
            </p>
          </Section>

          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories + Author + Banner */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <CategoriesCard items={rightCategories} />
        </aside>
      </section>

      {/* ===== Bottom: Related Posts ===== */}
      <section className="mx-auto section-container px-4 sm:px-6 pb-14">
        <RelatedPostsSection posts={relatedPosts} />
      </section>
    </main>
  );
}

/* ---------- Components ---------- */

/* Scroll-spy TOC with active classes: text-primary + font-primary (others font-secondary) */
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
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          )[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -65% 0px", threshold: [0, 1] }
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
    <nav className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-2xl section-title">
        What’s Inside
      </div>
      <ul className="p-3 text-sm">
        {items.map((it) => {
          const active = activeId === it.id;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                onClick={(e) => handleClick(e, it.id)}
                className={[
                  "block rounded px-2 py-2 transition-colors",
                  active
                    ? "text-primary text-xl font-primary bg-slate-50"
                    : "text-slate-700 font-secondary text-lg hover:bg-slate-50 hover:text-secondary",
                ].join(" ")}
              >
                {it.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function CategoriesCard({ items }) {
  const pathname = usePathname();
  const isActive = (href) =>
    pathname === href || pathname?.startsWith(href + "/");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-2xl section-title font-semibold">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-sm">
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

/* Responsive banner (desktop + mobile) */
function ResponsiveBanner({ href, desktopSrc, mobileSrc, alt = "" }) {
  return (
    <Link
      href={href}
      aria-label={alt}
      className="block w-full overflow-hidden bg-white shadow-sm"
    >
      <img src={desktopSrc} alt={alt} className="hidden w-full md:block" />
      <img src={mobileSrc} alt={alt} className="block w-full md:hidden" />
    </Link>
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
              <img
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
                  <img
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
      (typeof document !== "undefined" ? document.title : "")
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
          `width=${w},height=${h},left=${left},top=${top},resizable=yes,scrollbars=yes`
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
                `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
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
                `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
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
                `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
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
                true
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

/* TOC items */
const tocItems = [
  { id: "intro", label: "Intro" },
  { id: "what-is-aeo", label: "What is AEO " },
  { id: "why-aeo", label: "Why( AEO) Matters" },
  { id: "aeo-vs-seo", label: "AEO vs SEO " },
  { id: "core-strategies", label: "Core Strategies " },
  { id: "tools-and-tech", label: "Tools and Tech Stack" },
  { id: "case-insight", label: "Case Insight!" },
  { id: "be-the-answer", label: "Be the Answer" },
  { id: "faq", label: "FAQ" },
];

/* Right rail categories */
const rightCategories = [
  { text: "SEO Services", href: "/blogs/seo" },
  { text: "Digital Marketing", href: "#" },
  { text: "Social Media Marketing", href: "#" },
  { text: "Email Marketing", href: "#" },
  { text: "Instagram Marketing", href: "#" },
  { text: "Affiliate Marketing", href: "#" },
  { text: "Programmatic Marketing", href: "#" },
  { text: "Video Marketing", href: "#" },
  { text: "Content as a Service", href: "#" },
  { text: "Digital PR", href: "#" },
  { text: "Web & E-Commerce", href: "#" },
];

/* ---- Mock related posts (swap with your CMS) ---- */
const relatedPosts = [
  {
    id: 101,
    slug: "/blogs/seo/5-must-know-aeo-strategies-for-2025",
    title: "5 Must-Know AEO Strategies for 2025 ",
    excerpt:
      "A customer asks their AI assistant, “What’s the best way to boost my online sales?” and gets a crisp, tailored answer, but your business isn’t mentioned.",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-banner.png",
    category: "SEO",
    updatedAt: "October 22, 2025",
    readMins: 8,
  },
  {
    id: 103,
    slug: "/blogs/seo/implementing-aeo-in-your-content-strategy",
    title: "Implementing AEO in Your Content Strategy",
    excerpt:
      "Answer Engine Optimization (AEO) isn’t the next big thing, it’s the now thing. As AI Overviews and conversational search take center stage, startups that master AEO today are the ones that will stay visible tomorrow. ",
    image:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-103.jpg",
    category: "SEO",
    updatedAt: "November 07, 2025",
    readMins: 8,
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>How does this sound?</em>
      </p>
      <p className="section-phara">
        From CEOs to CMOs in funded or incubated tech startups, there is this
        question about using organic reach or SEO to improve their brand
        awareness, introduce their products, and increase their traffic as early
        as possible.
      </p>
      <p className="section-phara">
        Having said this, let's not ignore the bootstrapped companies that have
        deep pockets as well as those with just the right budget; they are also
        on the lookout to use SEO strategies to get their business in front of
        their audience.
      </p>
      <p className="section-phara">
        Every business wants to implement search engine optimization because
        they are well aware of the share held by Google in the search industry.
        Although Google is seeing challenges in the search industry, for the
        first time in history,{" "}
        <Link
          href="https://searchengineland.com/google-search-market-share-drops-2024-450497"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Google's search market share has dropped below 90% since 2015.
        </Link>
      </p>
      <div className="section-phara">
        <p>
          But the Indian search market has not seen this as a big threat so far.
          Google may have lost its search market by a few points, but in India,
          it still{" "}
          <Link
            href="https://gs.statcounter.com/search-engine-market-share/all/india"
            className="text-secondary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            holds 97% of the search market share.
          </Link>
        </p>

        <div
          id="all-search_engine-IN-monthly-202410-202510-bar"
          style={{ width: 600, height: 400 }}
          aria-label="StatCounter: Search Engine Market Share in India"
        />
        <p>
          Source:{" "}
          <a href="https://gs.statcounter.com/search-engine-market-share/all/india/#monthly-202410-202510-bar">
            StatCounter Global Stats - Search Engine Market Share
          </a>
        </p>
        <Script
          type="text/javascript"
          src="https://www.statcounter.com/js/fusioncharts.js"
        ></Script>
        <Script
          type="text/javascript"
          src="https://gs.statcounter.com/chart.php?all-search_engine-IN-monthly-202410-202510-bar&chartWidth=600"
        ></Script>
      </div>

      <p className="section-phara">
        So why are people looking at things as a threat when its not?{" "}
      </p>
      <p className="section-phara">
        Every business wants SEO, but they fear the lack of results. For this
        reason, every business should learn a bit about SEO or at least get an
        idea of how it works from an overview. When you plan to outsource your
        SEO to a{" "}
        <Link
          href="https://ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          {" "}
          Digital Marketing Agency in Chennai{" "}
        </Link>{" "}
        or anywhere for that matter, you need to know their knowledge in the SEO
        industry and how they will be able to help your business.
      </p>
      <p className="section-phara">
        In this blog let’s see how SEO has evolved over the years and how AEO
        has become a strategy to reach audience, especially for tech startups
        who work on a tight budget.
      </p>
      <p className="section-phara">
        People no longer search the way they used to. They ask.
      </p>
      <p className="section-phara">
        They turn to Google’s AI Overviews, ChatGPT, or Perplexity, expecting
        instant, contextual, and credible answers, not just a list of links.
      </p>
      <p className="section-phara">
        This shift marks the rise of Answer Engine Optimization (AEO) as the
        next big frontier for tech startups that want to stay visible and
        valuable in an AI-driven world.
      </p>
      <p className="section-phara">Take this example:</p>
      <p className="section-phara font-bold">Search Example:</p>
      <p className="section-phara">
        Just a year ago, people used to type Keywords in the search bar of
        Google to get links to companies they are looking for
      </p>
      <img
        src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog102-1.png"
        className="py-5"
        alt="Using Keyword to Search on Google"
      />
      <p className="section-phara">Asking for Answers in Google Search Bar: </p>
      <p className="section-phara font-bold">AEO Example:</p>
      <p className="section-phara">
        These days, people turn to Google for instant answers and no longer hunt
        for those blue underlined URLs. If your business appears in the answer
        engine, customers will recognize your brand and can easily click the
        link displayed on the right.
      </p>
      <img
        src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog102-2.png"
        className="py-5"
        alt="Asking a full-length question in Google Search bar expecting an answer from the AEO – Answer Engine Optimisation"
      />

      <p className="section-phara">
        This shift marks the rise of{" "}
        <span className="font-bold"> Answer Engine Optimization (AEO)</span> ,
        the next big frontier for tech startups that want to stay visible and
        valuable in an AI-driven world.
      </p>
      <p className="section-phara">
        SEO isn’t dead. It’s evolving into something more intelligent, a blend
        of semantics, structure, and storytelling that makes your brand
        “answer-worthy.”
      </p>
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
      q: "What is Answer Engine Optimization (AEO), and why does it matter for tech startups?",
      a: "Answer Engine Optimization (AEO) focuses on structuring content so that AI-driven systems like Google’s AI Overviews, ChatGPT, and voice assistants can deliver direct, accurate answers to user queries. For tech startups, AEO ensures that your brand is discoverable in these evolving “zero-click” search results, helping you capture attention before users even visit a website.",
    },
    {
      q: "How is AEO different from traditional SEO?",
      a: "While SEO aims to rank web pages on search results, AEO is about ranking answers. Traditional SEO relies on keyword optimization and backlinks; AEO emphasizes intent, context, and structured data. It’s less about chasing clicks and more about providing credible, conversational responses that AI engines can interpret and showcase instantly.",
    },
    {
      q: "What kind of content works best for AEO in a tech startup context?",
      a: "AEO thrives on clear, factual, and authoritative content. Formats like FAQs, how-to guides, comparison tables, feature explanations, and knowledge base articles work best. For tech startups, this could include product explainers, API documentation, or blog posts addressing “how to” use-cases around your solution.",
    },
    {
      q: "How can a tech startup implement AEO without overhauling its entire website?",
      a: "You can start by optimizing existing content. Use structured data (Schema markup), simplify your answers, and create content around conversational queries your users might ask. Gradually, integrate AEO into your content framework, aligning your blogs, landing pages, and FAQs with user intent and AI readability.",
    },
    {
      q: "Which tools or platforms support AEO implementation?",
      a: "Tools like Google Search Console, SEMrush, Frase.io, AnswerThePublic, and AlsoAsked help identify question-based queries. Schema.org markup tools, Ahrefs, and SurferSEO assist in aligning content for AEO-readiness. For startups using AI chat integrations, combining these with structured data enhances content visibility across answer engines.",
    },
    {
      q: "What measurable impact can AEO have on a tech startup’s growth?",
      a: "When implemented strategically, AEO can increase brand visibility, reduce bounce rates, and enhance user trust by positioning your startup as a reliable authority. It also improves voice search performance, which directly supports conversions, particularly for SaaS and tech products with long sales cycles.",
    },
    {
      q: "How does AEO fit into the future of digital marketing for startups?",
      a: "AEO isn’t replacing SEO; it’s redefining it. As AI systems dominate the search landscape, AEO ensures your startup stays visible and relevant in conversations led by intelligent search tools. In the next phase of digital marketing, the brands that master AEO will be the ones that own the answers, not just the keywords.",
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

/* ---------- Single Item ---------- */
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
        <p className="font-secondary text-lg text-black/80">{a}</p>
      </div>
    </div>
  );
}

/* ---------- Related Posts (Bottom) ---------- */

function RelatedPostsSection({ posts = [] }) {
  if (!posts?.length) return null;
  return (
    <div className="mt-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left ">Related Posts</h2>
        <Link
          href="/blogs"
          className=" btn-outline "
          aria-label="View all blog posts"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <RelatedPostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}

function RelatedPostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Stretched link */}
      <Link href={post.slug} className="absolute inset-0 z-[1]">
        <span className="sr-only">{`Read: ${post.title}`}</span>
      </Link>

      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="line-clamp-2 font-primary text-lg leading-snug text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.updatedAt}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}
