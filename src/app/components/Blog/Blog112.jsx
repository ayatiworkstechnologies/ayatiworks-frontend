"use client";

import React from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";

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

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage112() {
  const post = POSTS.find((p) => p.id === 112) || POSTS[0];

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
            avatar:
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
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
              Why Choosing a Digital Marketing Agency in Chennai Is Harder Than
              It Looks
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
            id="why-is-choosing-the-right"
            title="So why is choosing the right digital marketing agency in Chennai actually so difficult?"
          >
            <p className="section-phara">
              Because most agencies sell activity, while businesses need
              outcomes.
            </p>
            <p className="section-phara">
              SEO reports show rankings, ad dashboards show clicks, and social
              media calendars show consistency, but none of these automatically
              translate into business growth unless they are part of a connected
              system.
            </p>
            <p className="section-phara">
              Choosing the right{" "}
              <Link
                href="/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                digital marketing agency
              </Link>{" "}
              is difficult because most agencies focus on executing individual
              tactics rather than building a revenue-driven marketing system
              aligned with business goals.
            </p>
            <p className="section-phara">
              That single gap explains why businesses keep switching agencies,
              increasing budgets, and still feeling uncertain. Many digital
              marketing agencies in Chennai are excellent at execution, but far
              fewer are structured to think in terms of funnels, conversion
              economics, and long-term growth infrastructure.
            </p>
            <p className="section-phara">
              This guide exists to solve that exact problem. Not by listing
              agencies or ranking “top 10” names, but by helping you understand
              how to evaluate a digital marketing agency, so you can make a
              decision that supports revenue, not just visibility.
            </p>
            {/* <p className="section-phara">
              Revenue-focused marketing requires a shift from channel
              performance to funnel performance.{" "}
            </p>
            <p className="section-phara">
              Digital marketing services must be designed to move prospects
              forward intentionally, rather than just increasing surface-level
              metrics.
            </p> */}
          </Section>

          {/* STEP 1 */}
          <Section
            id="why-chennai-has-become"
            title="Why Chennai Has Become a Serious Digital Marketing Hub"
          >
            <p className="section-phara">
              Chennai didn’t become a digital marketing hub because it was
              trendy.
            </p>
            <p className="section-phara">
              It became one because it solved a problem businesses everywhere
              were struggling with:
              <strong>
                execution that actually holds up under revenue pressure.
              </strong>
            </p>
            <p className="section-phara">
              For years, many markets prioritised surface-level creativity,
              campaigns that looked good but didn’t always perform.
            </p>
            <p className="section-phara">
              Chennai evolved differently. Digital teams here have developed a
              reputation for structured thinking, operational discipline, and
              long-term problem solving.
            </p>
            <p className="section-phara">
              Marketing wasn’t treated as a creative experiment; it was treated
              as a system that needed to work reliably.
            </p>
          </Section>

          {/* STEP 2 */}
          <Section
            id="so-why-are-more-businesses-choosing"
            title="So why are more businesses choosing Chennai-based digital marketing agencies today?"
          >
            <p className="section-phara">
              Because Chennai agencies tend to focus on how marketing works, not
              just how it looks.
            </p>
            <p className="section-phara">
              {" "}
              Teams in Chennai often approach digital marketing the way
              engineers approach systems.
            </p>
            <p className="section-phara">
              {" "}
              Problems are broken down into components, traffic quality, funnel
              drop-offs, conversion efficiency, attribution gaps. Each part is
              tested, measured, and optimised over time.{" "}
            </p>
            <p className="section-phara">
              {" "}
              This makes Chennai particularly strong in performance-led and
              revenue-focused digital execution.
            </p>
            <p className="section-phara">
              {" "}
              As Indian and international businesses began demanding
              accountability from their marketing spend, this mindset became a
              competitive advantage.
            </p>
            <p className="section-phara">
              Leadership teams no longer wanted reports full of impressions and
              engagement.{" "}
            </p>
            <p className="section-phara">
              They wanted answers to questions like:{" "}
            </p>
            <p className="section-phara">Where is revenue coming from? </p>
            <p className="section-phara">
              Which channel is contributing to the pipeline?{" "}
            </p>
            <p className="section-phara">
              {" "}
              What is improving month over month?
            </p>
            <p className="section-phara">
              {" "}
              Chennai-based agencies are naturally aligned with these
              expectations.{" "}
            </p>
            <p className="section-phara">
              Over time, this shifted the city’s reputation, from being seen as
              a backend delivery location to being recognised as a{" "}
              <strong>strategic digital execution hub. </strong>{" "}
            </p>
            <p className="section-phara">
              {" "}
              Today, Chennai supports national and global brands not because it
              is cheaper or larger, but because it consistently delivers
              structured, measurable outcomes.{" "}
            </p>
            <p className="section-phara">
              In a landscape where digital marketing is expected to behave like
              business infrastructure, that reliability matters more than
              hype.{" "}
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="what-businesses-actually-mean"
            title="What Businesses Actually Mean When They Search for a Digital Marketing Agency in Chennai"
          >
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                When a business searches for a digital marketing agency in
                Chennai, the intent is rarely generic. Beneath the search query
                is a set of unstated expectations:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "A need for growth clarity",
                    desc: "",
                  },
                  {
                    title: "Frustration with previous marketing efforts",
                    desc: "",
                  },
                  {
                    title: "Pressure to justify spend",
                    desc: "",
                  },
                  {
                    title: "Desire for long-term results",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              Businesses aren’t just searching for services, they’re searching
              for confidence.
            </p>
            {/* <p className="section-phara">
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
            </p> */}
            <p className="section-phara">
              This is why agencies that position themselves purely around tools
              or tactics often fail to convert serious buyers. What
              decision-makers want is assurance that marketing will move the
              business forward, not just generate reports.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="campaign-thinking-vs-system-thinking"
            title="Campaign Thinking vs System Thinking in Digital Marketing"
          >
            <p className="section-phara">
              One of the biggest reasons marketing underperforms is
              campaign-centric thinking. Campaigns are finite. They launch,
              peak, and end. While they can deliver short-term gains, they
              rarely compound value.
            </p>
            <p className="section-phara">
              System-based digital marketing works differently. It is designed
              to operate continuously, learning and improving with every
              interaction.
            </p>
            <p className="section-phara">
              SEO feeds demand capture, content builds trust, paid media
              accelerates testing, and conversion optimisation improves
              efficiency.
            </p>
            <p className="section-phara">
              Together, these elements form a growth engine.
            </p>
            <p className="section-phara">
              Businesses that move from campaign thinking to system thinking
              experience a fundamental shift: marketing stops feeling
              unpredictable. Growth becomes measurable, repeatable, and
              scalable.
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="defining-best-digital-marketing-agency"
            title="Defining “Best Digital Marketing Agency in Chennai” Without the Noise"
          >
            <p className="section-phara">
              The phrase best digital marketing agency in Chennai is everywhere,
              but rarely defined meaningfully. Rankings, awards, and “top 10”
              lists dominate search results, yet they provide little insight
              into actual business impact.
            </p>
            <p className="section-phara">
              The best agency is not the one with the loudest marketing. It is
              the one whose strategies align most closely with your business
              model, customer journey, and growth goals.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Instead of asking who ranks first, businesses should ask:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Who understands revenue mechanics?",
                    desc: "",
                  },
                  {
                    title: "Who integrates channels instead of isolating them?",
                    desc: "",
                  },
                  {
                    title: "Who measures outcomes, not just outputs?",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              These questions reveal far more than any listicle.
            </p>
          </Section>
          <Section
            id="digital-marketing-services-in-chennai"
            title="Digital Marketing Services in Chennai: What Businesses Truly Need"
          >
            <p className="section-phara">
              Businesses evaluating digital marketing services often encounter
              long service menus that feel impressive but overwhelming. The
              reality is that not all services contribute equally to growth.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Instead of asking who ranks first, businesses should ask:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Search optimization that captures demand",
                    desc: "",
                  },

                  {
                    title: "Content that educates and qualifies buyers",
                    desc: "",
                  },

                  {
                    title:
                      "Paid media that accelerates conversion-ready traffic",
                    desc: "",
                  },

                  {
                    title: "Conversion optimisation that improves ROI",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              When these services are offered as an integrated system rather
              than standalone deliverables, marketing performance improves
              significantly.
            </p>
          </Section>
          <Section
            id="how-revenue-first-digital-marketing"
            title="How Revenue-First Digital Marketing Actually Works"
          >
            <p className="section-phara">
              Revenue-first digital marketing starts with business objectives,
              not channels. Instead of asking “Which platform should we be on?”,
              it asks “What outcome are we trying to achieve?”
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                From there, marketing strategies are reverse-engineered:{" "}
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Revenue targets define lead volume needs",
                    desc: "",
                  },
                  {
                    title: "Lead quality defines channel mix",
                    desc: "",
                  },
                  {
                    title:
                      "Channel performance informs optimisation priorities ",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This approach transforms marketing from an expense into an
              operating asset. Over time, businesses gain predictability, not
              just growth.
            </p>
          </Section>
          <Section
            id="performance-marketing-vs-sustainable-growth-marketing"
            title="Performance Marketing vs Sustainable Growth Marketing"
          >
            <p className="section-phara">
              Performance marketing agencies in Chennai often focus heavily on
              paid acquisition. While performance marketing delivers speed, it
              becomes expensive when not supported by organic visibility and
              conversion systems.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Sustainable growth marketing balances:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Organic demand capture",
                    desc: "",
                  },
                  {
                    title: "Paid acceleration",
                    desc: "",
                  },
                  {
                    title: "Funnel optimisation",
                    desc: "",
                  },
                  {
                    title: "Lifecycle nurturing",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              The difference lies in horizon. Performance marketing wins
              quarters. Growth marketing wins years.
            </p>
          </Section>
          <Section
            id="the-role-of-data-attribution-and-decision-making"
            title="The Role of Data, Attribution, and Decision-Making"
          >
            <p className="section-phara">
              Data is often misunderstood in digital marketing. Many agencies
              collect vast amounts of data without translating it into
              decisions.
            </p>
            <p className="section-phara">
              Revenue-focused agencies treat data as a decision engine.
              Attribution models are designed to reflect real buyer journeys,
              not just last-click wins. This clarity enables smarter budgeting,
              faster optimisation, and better forecasting.
            </p>
            <p className="section-phara">
              Without this layer, marketing becomes reactive rather than
              strategic.
            </p>
          </Section>
          <Section
            id="common-mistakes-businesses-make"
            title="Common Mistakes Businesses Make When Hiring Agencies"
          >
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Some of the most common mistakes include:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Choosing agencies based on price alone",
                    desc: "",
                  },
                  {
                    title: "Confusing activity with impact",
                    desc: "",
                  },
                  {
                    title: "Evaluating channels instead of systems",
                    desc: "",
                  },
                  {
                    title: "Expecting guarantees instead of frameworks",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Avoiding these mistakes requires clarity—not expertise. Businesses
              don’t need to become marketers; they need partners who can
              translate complexity into outcomes.
            </p>
          </Section>
          <Section
            id="questions-you-should-ask-before-finalising"
            title="Questions You Should Ask Before Finalising a Digital Marketing Partner"
          >
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Before committing, businesses should ask:{" "}
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "How do you define success?",
                    desc: "",
                  },
                  {
                    title: "How do services integrate into one system?",
                    desc: "",
                  },
                  {
                    title: "How is performance tied to revenue?",
                    desc: "",
                  },
                  {
                    title: "What does optimisation look like over time?",
                    desc: "",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>

                    <div>
                      <p className="text-lg font-medium text-black">
                        {item.title}
                      </p>
                      <p className="section-phara text-black/80 text-base">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              The answers reveal whether an agency thinks tactically or
              strategically.
            </p>
          </Section>
          <Section
            id="what-a-long-term-digital-marketing-partnership-looks-like"
            title="What a Long-Term Digital Marketing Partnership Looks Like"
          >
            <p className="section-phara">
              A strong partnership evolves. Initial phases focus on
              foundation-building, SEO, analytics, conversion paths. Over time,
              efforts shift toward optimisation, scale, and innovation.
            </p>
            <p className="section-phara">
              Agencies like <strong>Ayatiworks</strong> operate on this
              partnership model, positioning digital marketing as revenue
              infrastructure rather than one-off execution. This approach allows
              businesses to scale confidently while maintaining efficiency.
            </p>
          </Section>
          <Section
            id="making-the-right-decision"
            title="Making the Right Decision"
          >
            <p className="section-phara">
              Choosing the right digital marketing agency is one of the most
              consequential growth decisions a business makes. The right choice
              compounds value. The wrong choice compounds frustration.
            </p>
            <p className="section-phara">
              Marketing that works is not louder; it’s smarter, structured, and
              aligned with business reality. When marketing becomes a system
              rather than a series of campaigns, growth stops being accidental
              and starts becoming predictable.
            </p>
          </Section>

          {/* FAQ SECTION */}
          <Section id="faq" title="Frequently Asked Questions (FAQs)">
            <FAQAccordion />
          </Section>
        </article>

        {/* RIGHT: Categories */}
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <CategoriesCard items={rightCategories} />
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
    id: "why-choosing-agency-is-harder",
    level: 1,
    label:
      "Why Choosing a Digital Marketing Agency in Chennai Is Harder Than It Looks",
  },
  {
    id: "what-businesses-actually-mean-when-searching",
    level: 1,
    label:
      "What Businesses Actually Mean When They Search for a Digital Marketing Company in Chennai",
  },
  {
    id: "what-does-best-really-mean",
    level: 1,
    label:
      "“Best Digital Marketing Agency in Chennai” — What Does Best Really Mean?",
  },
  {
    id: "digital-marketing-services-businesses-need",
    level: 1,
    label:
      "Digital Marketing Services in Chennai: What Businesses Actually Need",
  },
  {
    id: "performance-vs-presence",
    level: 1,
    label: "Performance vs Presence: Why ROI Matters More Than Reach",
  },
  {
    id: "why-chennai-is-emerging",
    level: 1,
    label: "Why Chennai Is Emerging as a Digital Marketing Hub",
  },
  {
    id: "questions-to-ask-before-finalising",
    level: 1,
    label: "Questions to Ask Before Finalising a Digital Marketing Agency",
  },
  {
    id: "how-to-know-right-partner",
    level: 1,
    label: "How to Know You’ve Found the Right Digital Marketing Partner",
  },
  {
    id: "faq",
    level: 1,
    label: "Frequently Asked Questions",
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
      {/* <p className="section-title mb-4 text-left text-3xl">
        <em>Metrics rise. Revenue moves only when the funnel aligns </em>
      </p> */}
      <p className="section-phara">
        If every digital marketing agency promises growth, visibility, and ROI,
        why do so many businesses still feel stuck after hiring one?
      </p>
      <p className="section-phara">
        That question is quietly becoming one of the most searched, yet least
        honestly answered, questions in business growth today.{" "}
      </p>
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
        A quick Google search for a digital marketing agency in Chennai throws
        up hundreds of options. Every website looks polished.
      </p>
      <p className="section-phara">
        Every pitch sounds confident. Every proposal promises results.
      </p>
      <p className="section-phara">
        And yet, months later, many businesses are left asking the same
        uncomfortable question:{" "}
      </p>
      <p className="section-phara italic">
        Why did traffic increase, but revenue didn’t?
      </p>
      <p className="section-phara">
        This is not a rare problem. It’s a structural one.
      </p>
      {/* <p className="section-phara">
        Alignment is not a buzzword here; it is the operating model.
      </p> */}
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
      q: "What does a digital marketing agency in Chennai do?",
      a: "A digital marketing agency in Chennai helps businesses grow online using SEO, paid ads, content, and conversion optimisation aligned to business goals.",
    },
    {
      q: "How do I choose the best digital marketing agency in Chennai?",
      a: "Focus on strategy alignment, integration of services, revenue measurement, and transparency rather than rankings alone.",
    },
    {
      q: "What are digital marketing services in Chennai?",
      a: "They include SEO, performance marketing, content marketing, analytics, and CRO designed to drive measurable growth.",
    },
    {
      q: "How long does digital marketing take to show results?",
      a: "SEO typically takes 3–6 months, while paid campaigns can deliver faster results when supported by strong conversion systems.",
    },
    {
      q: "Is hiring a local digital marketing company better?",
      a: "Local agencies often offer better collaboration, accountability, and market understanding, especially for India-focused growth.",
    },
    {
      q: "What is revenue-first digital marketing?",
      a: "It is an approach where marketing strategies are designed backward from revenue goals rather than channel activity.",
    },
    {
      q: "Do digital marketing agencies guarantee results?",
      a: "Reputable agencies do not guarantee outcomes but commit to measurable KPIs and continuous optimisation.",
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
