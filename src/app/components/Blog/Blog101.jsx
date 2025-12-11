"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
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


export default function AEOArticlePage101() {
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
              Is Your Website Ready for the AI Search Takeover?{" "}
            </span>
            <br />
            <span className="text-primary">
              5 Must-Know AEO Strategies for 2025
            </span>
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

          {/* Inline banner */}
          {/* <div className="my-6">
            <ResponsiveBanner
              href="#"
              alt="Subscribe Now"
              desktopSrc="/assets/banners/wide-900x160.jpg"
              mobileSrc="/assets/banners/mobile-wide-360x140.jpg"
            />
          </div> */}

          <Section
            id="what-is-aeo"
            title="What Is AEO and Why It’s a Game-Changer"
          >
            <p className="section-phara">
              <strong>Answer Engine Optimization (AEO)</strong> is the art of
              tailoring your content to be the go-to source for AI-powered tools
              like Google’s AI Overviews, ChatGPT, or voice assistants like
              Siri. Unlike traditional SEO, which focuses on climbing search
              engine result pages (SERPs), AEO is about crafting content that AI
              can easily pull to answer user queries directly. Think of it as
              making your website the first choice when someone asks, “How do I
              improve my website’s conversion rate?” and the AI responds with
              your blog post or product page.
            </p>
          </Section>

          <Section id="why-matters" title="Why does this matter?">
            <p className="section-phara">
              AI-driven search is exploding; industry forecasts predict over 50%
              of searches will involve AI by the end of 2025. Users want instant
              answers, not endless scrolling, and AI tools are stepping up to
              deliver. For businesses, AEO means more than visibility; it’s
              about trust. When AI cites your content, it positions your brand
              as an authority, driving organic traffic through referral links.
              For example, a SaaS company that optimized for AEO saw a 22% spike
              in organic visits after appearing in AI answers for
              industry-specific queries.
            </p>
            <p className="section-phara">
              AEO differs from SEO in its focus on concise, structured answers
              over broad keyword strategies. While <Link
                href="https://ayatiworks.com/digital-marketing-services/seo"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                SEO
              </Link>{" "} gets you on Google’s
              first page, AEO gets your content quoted in zero-click
              searches—those moments when AI delivers the answer without users
              leaving the interface. But don’t ditch SEO; AEO complements it,
              creating new pathways for traffic. The five strategies below will
              show you how to harness AEO’s potential.
            </p>
          </Section>

          <Section
            id="shift"
            title="The Shift from Traditional Search to AI Answers"
          >
            <p className="section-phara">
              The evolution of search has made AEO essential. With AI handling
              complex queries, businesses must adapt to stay visible.
            </p>
          </Section>

          <Section
            id="strategy-1"
            title="Strategy 1: Optimize for Question-Based Queries"
          >
            <p className="section-phara">
              AI loves questions; it’s how users interact with tools like
              ChatGPT or Google’s AI Overviews. Optimizing for question-based
              queries means crafting content that directly answers what your
              audience is asking, like “What’s the best CRM for small
              businesses?” or “How to reduce cart abandonment?” AI engines
              prioritize content that nails user intent with clear, concise
              responses.
            </p>
            <p className="section-phara">
              To make this work, start by researching the questions your
              customers ask. Tools like AnswerThePublic or Google’s “People Also
              Ask” section reveal popular queries in your niche. For example, an
              e-commerce brand might target “How to choose sustainable
              packaging?” by opening their blog with a direct answer: “Choose
              sustainable packaging by prioritizing biodegradable materials and
              minimalistic designs.” Keep answers short—50–100 words— followed
              by deeper insights to encourage click-throughs.
            </p>

            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                Implementation is straightforward :
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Write blog posts or landing pages with question-based headlines.",
                  "Answer the query in the first paragraph, using simple language.",
                  "Include related questions in subheadings to capture variations.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This approach works because AI scans for content that matches
              question formats. A local service business, for instance,
              optimized a blog for “How to find reliable HVAC repair?” and
              landed in AI answers, driving a 15% increase in organic leads. By
              aligning with user intent, you boost your chances of being cited,
              sending curious users straight to your site.
            </p>
          </Section>

          <Section
            id="tools-for"
            title="Tools for Identifying Question-Based Keywords"
          >
            <p className="section-phara">
              Leverage free tools like SEMrush to uncover high-impact questions
              and track performance.
            </p>
          </Section>

          <Section
            id="strategy-2"
            title="Strategy 2: Leverage Structured Data (Schema)"
          >
            <p className="section-phara">
              If AI can’t “read” your website, it won’t cite you. That’s where
              structured data and schema markup come in. Structured data is code
              that organizes your content in a way AI understands, like labeling
              a blog post as an “Article” or a product page as a “Product.”
              Schema markup, a type of structured data, tells AI exactly what
              your content is about, making it easier to pull for answers.
            </p>
            <p className="section-phara">
              Why is this a big deal? AI engines rely on structured data to
              extract accurate information. For example, a recipe blog with
              Recipe schema (detailing ingredients, cook time, etc.) is more
              likely to appear in AI answers for “How to make vegan brownies?”
              than one without. Studies show pages with schema markup see a
              20–30% higher chance of AI citation.
            </p>

            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                Here’s how to implement it:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Identify relevant schema types (e.g., FAQPage, HowTo, Product) at Schema.org.",
                  "Add schema markup to key pages using JSON-LD format (Google’s preferred method).",
                  "Test your markup with Google’s Rich Results Test to ensure it’s error-free.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              For businesses, this is a low-effort, high-impact strategy. An
              e-commerce site added Product schema to its listings and saw a 25%
              uptick in organic traffic from AI-driven shopping queries. Tools
              like Yoast SEO or plugins for WordPress make adding schema a
              breeze, even for non-techies.
            </p>
          </Section>

          <Section
            id="common-schema-types"
            title="Common Schema Types for AEO Success"
          >
            <p className="section-phara">
              Focus on FAQPage and HowTo schemas to directly target
              answer-driven content.
            </p>
          </Section>

          <Section
            id="strategy-3"
            title="Strategy 3: Create Comprehensive FAQ Pages"
          >
            <p className="section-phara">
              FAQ pages are AEO gold. They’re built to answer specific customer
              questions in a format AI loves—short, scannable, and structured.
              When a user asks, “What’s the return policy for [product]?” or
              “How does [service] work?”, a well-crafted FAQ page can land your
              site in the AI’s response, complete with a link back to you.
            </p>
            <p className="section-phara">
              Why do FAQs work so well? They align perfectly with AI’s
              preference for question-answer pairs. Plus, they cater to
              zero-click searches, where users get answers without leaving the
              AI interface, but still click through for more details. A SaaS
              company, for example, created an FAQ page answering “What is
              [software feature]?” and saw a 30% jump in organic traffic from AI
              referrals.
            </p>

            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                To build an AEO-friendly FAQ page:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Research customer pain points using reviews, support tickets, or tools like SurveyMonkey.",
                  "Write concise answers (50–100 words) for each question, avoiding fluff.",
                  "Add FAQPage schema markup to boost AI readability.",
                  "Update regularly to reflect new queries or trends.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              For instance, a retailer’s FAQ answering “How to track my order?”
              with a clear response and schema markup appeared in AI answers,
              driving thousands of clicks. Keep your FAQs user-focused—think
              about what your audience actually asks, not just what you want to
              say.
            </p>
          </Section>

          <Section
            id="best-practices-faq"
            title="Best Practices for FAQ Content"
          >
            <p className="section-phara">
              Keep answers brief, use bullet points, and integrate keywords
              naturally.
            </p>
          </Section>

          <Section
            id="strategy-4"
            title="Strategy 4: Focus on Authoritative and Trustworthy Content"
          >
            <p className="section-phara">
              AI doesn’t just pick any content—it favors sources that scream
              credibility. This is where Google’s E-A-T principles (Expertise,
              Authoritativeness, Trustworthiness) come into play. AI engines
              like ChatGPT or Google’s AI Overviews prioritize content backed by
              data, expert insights, or reputable sources, making it critical to
              establish your site as a trusted authority.
            </p>
            <p className="section-phara">
              Why does authority matter? AI aims to deliver reliable answers,
              and it leans on signals like domain authority, quality backlinks,
              and verified information. A health brand, for instance, boosted
              its AI citations by 40% after publishing expert-backed content
              with cited studies.
            </p>

            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                Here’s how to make your content authoritative:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Include original research, stats, or expert quotes (e.g., “Industry expert Jane Doe says…”).",
                  "Cite reputable sources and link to them for transparency.",
                  "Build backlinks from high-authority sites to boost your domain’s credibility.",
                  "Showcase credentials, like author bios or certifications, on your site.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              Tools like Moz or Ahrefs can help track your domain authority and
              identify backlink opportunities. For example, a B2B company
              published a whitepaper with unique data and earned backlinks,
              making it a go-to source for AI answers on industry trends.
            </p>
          </Section>

          <Section id="building-eat-signals" title="Building E-A-T Signals">
            <p className="section-phara">
              Enhance your site's trustworthiness with verified sources and
              expert collaborations.
            </p>
          </Section>

          <Section
            id="strategy-5"
            title="Strategy 5: Optimize for Voice & Conversational AI"
          >
            <p className="section-phara">
              Voice search is skyrocketing, with devices like Alexa and Google
              Assistant handling millions of queries daily. By 2025, voice
              searches are expected to account for 30% of all searches. AEO for
              voice search means optimizing for conversational, long-tail
              queries like “What’s the best way to improve my SEO?” or “Where
              can I find reliable web hosting?”
            </p>
            <p className="section-phara">
              Why does this work? Voice users ask questions naturally, often in
              full sentences, and AI needs content that matches this
              conversational tone. A restaurant optimized for “What’s the best
              pizza place near me?” saw a 20% traffic boost from voice search
              referrals.
            </p>

            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                To optimize for voice search:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Target long-tail, conversational keywords (e.g., “How do I choose a marketing agency?”).",
                  "Write in a natural, human-like tone, as if answering a friend.",
                  "Focus on local intent for queries like “near me” or “best [service] in my area.”",
                  "Ensure your site is mobile-friendly, as most voice searches happen on phones.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              Tools like SEMrush or Google Keyword Planner can uncover
              conversational keywords. For example, a service business targeting
              “How to hire a plumber?” with a conversational blog post landed in
              voice search answers, driving local traffic.
            </p>
          </Section>

          <Section id="voice-search" title="Voice Search Optimization Tips">
            <p className="section-phara">
              Prioritize natural language and local keywords for better AI
              compatibility.
            </p>
          </Section>

          <Section
            id="measuring-aeo"
            title="Measuring AEO Success and Avoiding Pitfalls"
          >
            <p className="section-phara">
              AEO isn’t a set-it-and-forget-it strategy—you need to track its
              impact to ensure it’s driving traffic. Use Google Analytics to
              monitor AI referral traffic (look for sources like
              “chat.openai.com” or “perplexity.ai”). Tools like Ahrefs or Rank
              Tracker can also help you see if your content appears in AI
              answers or “People Also Ask” snippets. Key metrics include
              click-through rates, dwell time, and organic traffic growth.
            </p>
            <p className="section-phara">
              Common pitfalls? Over-optimizing can make content sound robotic,
              turning off human readers. Focus on user experience—write for
              people first, AI second. Neglecting to update content is another
              mistake; AI favors fresh, relevant information, so refresh your
              FAQs and blogs regularly. A retailer learned this the hard way
              when outdated product info dropped them from AI answers, costing
              10% of their traffic.
            </p>
            <div className="ml-10 py-5">
              <h3 className=" section-title text-xl text-left">
                To stay on track:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Set up Google Search Console to monitor impressions from AI-driven searches.",
                  "Test schema markup regularly to avoid errors.",
                  "Keep an eye on AI trends, like new answer engines, to adapt your strategy.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              By measuring and refining, you’ll turn AEO into a reliable traffic
              driver.
            </p>
          </Section>

          <Section id="metrics" title="Key Metrics for AEO ROI">
            <p className="section-phara">
              Track referral sources and engagement to gauge effectiveness.
            </p>
            <p className="section-phara">
              The AI search takeover is here, and AEO is your ticket to staying
              relevant. By optimizing for question-based queries, leveraging
              schema markup, creating killer FAQ pages, building authoritative
              content, and targeting voice search, you’re not just preparing for
              2025—you’re setting your business up to dominate. These five
              strategies make your website a magnet for AI citations, driving
              organic traffic without relying solely on traditional SEO. The
              best part? You don’t have to do it alone. If you're looking to
              elevate your digital presence,{" "}
              <Link
                href="https://ayatiworks.com/contact-us/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                reach out to Ayatiworks for expert AEO and digital marketing
                solutions in Chennai
              </Link>{" "}
              to get started today.
            </p>
            <p className="section-phara">
              Don’t wait—competitors are already optimizing for AI search. Start
              implementing these strategies today, track your progress, and
              watch your organic traffic soar. Is your website ready to lead the
              AI search revolution, or are you leaving clicks on the table? The
              choice is yours— make it count.
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
  const shareUrl = typeof window !== "undefined" ? window.location.origin + href : href;
  const shareTitle = Array.isArray(title) ? title.join(" ") : title;

  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${shareTitle}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link href={href} aria-label={`Read: ${shareTitle}`} className="block">
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

              <div className="hidden sm:block h-6 w-px bg-white/20 mx-3" aria-hidden="true" />

              <div className="text-sm text-slate-100/90">
                <div className="font-primary font-medium text-base">{readMins} Min</div>
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
          <button
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
  { id: "what-is-aeo", label: "What is AEO & Why it’s a Game-Changer" },
  { id: "why-matters", label: "Why does this matter?" },
  { id: "shift", label: "The Shift to AI Answers" },
  { id: "strategy-1", label: "Strategy 1 – Questions" },
  { id: "strategy-2", label: "Strategy 2 – Schema" },
  { id: "strategy-3", label: "Strategy 3 – FAQs" },
  { id: "strategy-4", label: "Strategy 4 – Authority" },
  { id: "strategy-5", label: "Strategy 5 – Voice" },
  { id: "measuring-aeo", label: "Measuring AEO" },
  { id: "metrics", label: "AEO ROI Metrics" },
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
     id: 102,
    slug: "/blogs/seo/how-your-tech-startup-can-use-answer-engine-optimization-aeo-to-attract-engage-and-convert-smarter-audiences/",
    title: "How Your Tech Startup Can Use Answer Engine Optimisation (AEO) to Reach their Audience ",
    excerpt: "From CEOs to CMOs in funded or incubated tech startups, there is this question about using organic reach or SEO ...",
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-102.jpg",
    category: "SEO",
    updatedAt: "October 31, 2025",
    readMins: 15,
  },
  {
     id: 103,
    slug: "/blogs/seo/implementing-aeo-in-your-content-strategy",
    title: "Implementing AEO in Your Content Strategy",
    excerpt: "Answer Engine Optimization (AEO) isn’t the next big thing, it’s the now thing. As AI Overviews and conversational search take center stage, startups that master AEO today are the ones that will stay visible tomorrow. ",
    image: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-103.jpg",
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
        A customer asks their AI assistant, “What’s the best way to boost my
        online sales?” and gets a crisp, tailored answer, but your business
        isn’t mentioned.
      </p>
      <p className="section-phara">
        Not great! When your business could have been mentioned to your target
        audience.
      </p>
      <p className="section-phara">
        In 2025, missing out on AI-driven search could mean losing customers to
        competitors who’ve cracked the code. That’s where Answer Engine
        Optimization (AEO), with the help of a savvy{" "}
        <Link
          href="https://ayatiworks.com/digital-marketing-services"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency, Chennai
        </Link>
        , comes in as your secret weapon to stay ahead. AEO isn’t just a
        buzzword; it’s the key to getting your website cited in AI responses,
        driving waves of organic traffic without breaking the bank.
      </p>
      <p className="section-phara">
        In this post, we’ll unpack what AEO is and share five must-know
        strategies to ensure your website dominates the AI search landscape.
      </p>
      <p className="section-phara">Ready to future-proof your business? </p>
      <p className="section-phara">Let’s dive in!</p>
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
      q: "What is AEO in SEO?",
      a: "AEO, or Answer Engine Optimization, is the process of optimizing content to appear in direct answers provided by AI tools like ChatGPT or Google’s AI Overviews, complementing traditional SEO by focusing on concise, user-intent-driven responses.",
    },
    {
      q: "What is the difference between AEO and SEO?",
      a: "SEO aims to rank web pages in search results, while AEO focuses on making content suitable for AI to cite in direct answers, often in zero-click searches, emphasizing structured data and question-based formats over just keywords.",
    },
    {
      q: "What is AEO vs GEO?",
      a: "AEO targets direct answers in AI engines, whereas GEO (Generative Engine Optimization) optimizes for AI-generated content like summaries or narratives—both enhance visibility, but AEO is more answer-specific.",
    },
    {
      q: "How does AEO work?",
      a: "AEO works by structuring content with schema markup, FAQs, and authoritative sources so AI can easily extract and cite it for user queries, boosting organic traffic through referrals.",
    },
    {
      q: "Why is AEO important?",
      a: "AEO is crucial as AI handles more searches, helping businesses gain visibility in instant answers, build trust, and drive traffic in a landscape where traditional rankings matter less.",
    },
    {
      q: "What are some AEO strategies?",
      a: "Key AEO strategies include optimizing for questions, using schema markup, creating FAQs, producing trustworthy content, and targeting voice search to make sites AI-friendly.",
    },
    {
      q: "Is AEO the future of search?",
      a: "Yes, AEO is shaping the future as AI search grows, shifting focus from page rankings to answer optimization for better user experiences and sustained organic growth.",
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
