"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";

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

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage109() {
  const post = POSTS.find((p) => p.id === 109) || POSTS[0];

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
              Digital Marketing Services: A Business Decision Guide to Choosing,
              Prioritising, and Scaling the Right Services
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
            id="digital-marketing-services"
            title="Digital Marketing Services vs Digital Marketing Tactics"
          >
            <p className="section-phara">
              One of the most damaging misconceptions in digital marketing is
              the belief that activity equals progress.
            </p>
            <p className="section-phara">
              Businesses often confuse <strong> tactics</strong> with
              <strong> services</strong>. Publishing a few blog posts, boosting
              social media posts, or running short ad campaigns may feel
              productive, but these are actions, not systems.
            </p>
            <p className="section-phara">
              <strong> Digital marketing services</strong> are structured
              capabilities designed to support long-term business outcomes. They
              include planning, execution, measurement, and iteration. Tactics
              are simply the visible outputs of these systems.
            </p>
            <p className="section-phara">
              For example,{" "}
              <Link
                href="https://www.ayatiworks.com/digital-marketing-services/seo"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                SEO
              </Link>{" "}
              is not “adding keywords to a website.” It is a service that
              includes technical optimisation, content architecture, authority
              building, and ongoing performance analysis
            </p>
            <p className="section-phara">
              Content marketing is not “writing blogs.” It is a service that
              creates assets aligned to buyer intent and business objectives.
            </p>
            <p className="section-phara">
              When businesses invest in tactics without committing to services,
              they end up busy, but not effective.
            </p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="how-digital-marketing-services-work"
            title="How Digital Marketing Services Work as a Growth System"
          >
            <p className="section-phara">
              Digital marketing does not function like a funnel with neat,
              linear steps. It behaves more like an ecosystem, where each
              service influences and strengthens the others over time.
            </p>
            <p className="section-phara">
              {" "}
              At a high level, most successful digital growth strategies operate
              across four interconnected layers.
            </p>
            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Awareness: Creating Demand Before It’s Obvious
              </h3>
              <p className="section-phara">
                At the top of the system are services that shape perception and
                visibility. Content marketing and social media marketing live
                here. Their role is not immediate conversion but familiarity,
                helping potential customers recognise problems, trust expertise,
                and associate brands with solutions.
              </p>
              <p className="section-phara">
                This layer is often underestimated because its impact is
                indirect. Yet research published by Backlinko consistently shows
                that brands with strong content visibility tend to earn higher
                organic click-through rates and better long-term SEO
                performance.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Demand Capture: Intercepting Intent
              </h3>
              <p className="section-phara">
                Once awareness exists, demand capture services take over. SEO
                services and paid media ensure that when prospects actively
                search for solutions, the business appears at the right moment.
              </p>
              <p className="section-phara">
                This is where many businesses overinvest prematurely. Without
                awareness and clarity, paid campaigns become expensive, and SEO
                struggles to convert traffic into leads. Demand capture works
                best when it follows, not replaces, brand and content
                foundations.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Conversion: Turning Interest into Outcomes
              </h3>
              <p className="section-phara">
                Traffic alone does not drive growth. Conversion optimisation,
                landing page strategy, and lead generation systems ensure that
                visits translate into measurable business actions.
              </p>
              <p className="section-phara">
                Ahrefs’ research on paid traffic performance highlights a
                recurring issue: companies scale ad spend without improving
                conversion rates, leading to rising costs and diminishing
                returns. Conversion is not a one-time fix, it is an ongoing
                service.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Retention and Growth: Compounding ROI
              </h3>
              <p className="section-phara">
                Email marketing and marketing automation sit at the final layer,
                often overlooked until acquisition costs rise. These services
                focus on nurturing relationships, increasing lifetime value, and
                turning one-time buyers into repeat customers.
              </p>
              <p className="section-phara">
                According to HubSpot’s lifecycle marketing studies, businesses
                using automation-driven email strategies generate significantly
                higher revenue per customer than those relying on manual
                outreach.
              </p>
            </div>
          </Section>

          {/* STEP 2 */}
          <Section
            id="core-digital-marketing-services"
            title="Core Digital Marketing Services Explained (A Business Lens)"
          >
            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                SEO Services: Building Sustainable Demand
              </h3>
              <p className="section-phara">
                SEO is one of the most misunderstood digital marketing services.
                It is neither instant nor passive. When done well, SEO becomes a
                compounding growth asset that reduces dependency on paid
                acquisition.
              </p>
              <div className="ml-10 mb-6">
                {/* Title */}
                <h3 className="section-title text-2xl text-secondary text-left my-5">
                  Businesses should invest in SEO when they have:
                </h3>

                {/* List */}
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "Clear offerings and messaging",
                      desc: "",
                    },
                    {
                      title: "	The patience to invest consistently",
                      desc: "",
                    },
                    {
                      title: "A desire for sustainable, non-linear growth",
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
                SEO struggles when treated as a quick lead-generation hack
                rather than a long-term demand engine.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Content Marketing: From Output to Assets
              </h3>
              <p className="section-phara">
                Content marketing fails when success is measured by volume
                rather than impact. Publishing frequently does not guarantee
                visibility, authority, or conversion.
              </p>
              <div className="ml-10 mb-6">
                {/* Title */}
                <h3 className="section-title text-2xl text-secondary text-left my-5">
                  Effective content marketing services focus on:
                </h3>

                {/* List */}
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "Buyer intent alignment",
                      desc: "",
                    },
                    {
                      title: "Search demand validation",
                      desc: "",
                    },
                    {
                      title: "Distribution and repurposing",
                      desc: "",
                    },
                    {
                      title: "	Long-term relevance",
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
                This is why high-performing businesses treat content as an asset
                portfolio, not a publishing calendar.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Paid Media & Performance Marketing: Speed with Accountability
              </h3>
              <p className="section-phara">
                Paid media is powerful precisely because it delivers immediate
                data. But speed without discipline leads to wasted spend.
              </p>
            </div>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Performance marketing services exist to ensure that:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Messaging is tested and refined",
                    desc: "",
                  },
                  {
                    title: "Targeting evolves based on behaviour",
                    desc: "",
                  },
                  {
                    title: "ROI is measured beyond surface metrics",
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
              SEMrush’s digital advertising benchmarks show that businesses
              integrating paid media with SEO and content consistently
              outperform those running ads in isolation.
            </p>
            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Social Media Marketing: Visibility and Distribution
              </h3>
              <p className="section-phara">
                Social media rarely works as a direct sales engine on its own.
                Its real value lies in distribution,amplifying content,
                reinforcing brand recall, and supporting community engagement.
              </p>
              <p className="section-phara">
                When aligned with content and paid strategies, social media
                becomes a powerful awareness and remarketing tool.
              </p>
            </div>

            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Email Marketing & Automation: The Growth Multiplier
              </h3>
              <p className="section-phara">
                Email remains one of the highest ROI digital marketing services
                because it operates at the intersection of trust and timing.
                Automation allows businesses to deliver relevance at scale,
                without increasing effort.{" "}
              </p>
              <p className="section-phara">
                Despite its effectiveness, email is often implemented last, when
                it should be foundational.{" "}
              </p>
            </div>
          </Section>

          {/* STEP 3 */}
          <Section
            id="how-businesses-should-prioritise"
            title="How Businesses Should Prioritise Digital Marketing Services"
          >
            <p className="section-phara">
              Prioritisation should be based on <strong> business stage</strong>
              , not trends.
            </p>
            <p className="section-phara">
              Early-stage businesses benefit from clarity, SEO foundations,
              content positioning, and limited paid testing.{" "}
            </p>
            <p className="section-phara">
              Growth-stage companies require balance, combining acquisition with
              conversion and retention.{" "}
            </p>
            <p className="section-phara">
              Scale-stage organisations need integration, aligning services
              under unified analytics and lifecycle strategies.
            </p>
            <p className="section-phara">
              The most effective strategies evolve, rather than restart, as
              businesses grow.
            </p>
            <div className="ml-10 mb-6">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Budgets, Timelines, and ROI: Setting Realistic Expectations
              </h3>
              <p className="section-phara">
                Every digital marketing service operates on a different time
                horizon. SEO compounds slowly. Paid media delivers instantly but
                fluctuates. Content builds authority over months. Automation
                compounds quietly over years.
              </p>
              <p className="section-phara">
                Businesses that align expectations with timelines make better
                decisions, and stay invested long enough to see results.
              </p>
            </div>
          </Section>

          {/* STEP 4 */}
          <Section
            id="common-mistakes"
            title="Common Mistakes Businesses Make When Investing in Digital Marketing"
          >
            <p className="section-phara">
              The most common mistake is buying services in silos. Others
              include expecting short-term ROI from long-term channels, chasing
              vanity metrics, and investing in tools without investing in
              strategy.{" "}
            </p>
            <p className="section-phara">
              These mistakes are not tactical; they are structural.
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="when-digital-marketing-services"
            title="When Digital Marketing Services Start Working Together"
          >
            <p className="section-phara">
              There is a clear moment when digital marketing begins to feel
              different. Costs stabilise. Leads improve in quality. Decisions
              become data-led. Growth becomes predictable.
            </p>
            <p className="section-phara">
              That inflection point is not caused by doing more, it is caused by
              alignment.
            </p>
          </Section>

          {/* STEP 6 */}
          <Section
            id="digital-marketing-system"
            title="Digital Marketing Is a System, Not a Checklist"
          >
            <p className="section-phara">
              Digital marketing services are not ingredients to be mixed
              randomly. They are components of a growth system that must be
              chosen, sequenced, and scaled with intent.
            </p>
            <p className="section-phara italic text-secondary">
              Businesses that understand this stop chasing trends, and start
              building engines.
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
        <RelatedPostsSection posts={relatedPosts} />
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

/* TOC items – UPDATED to match your 14 points */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "digital-marketing-services",
    level: 1,
    label: "Digital Marketing Services vs Tactics",
  },
  {
    id: "how-digital-marketing-services-work",
    level: 1,
    label: "How Digital Marketing Services Work as a Growth System",
  },
  {
    id: "core-digital-marketing-services",
    level: 1,
    label: "Core Digital Marketing Services Explained",
  },
  {
    id: "how-businesses-should-prioritise",
    level: 1,
    label: "How Businesses Should Prioritise Digital Marketing Services",
  },
  {
    id: "common-mistakes",
    level: 1,
    label: "Common Mistakes Businesses Make",
  },
  {
    id: "when-digital-marketing-services",
    level: 1,
    label: "When Digital Marketing Services Work Together",
  },
  {
    id: "digital-marketing-system",
    level: 1,
    label: "Digital Marketing Is a System, Not a Checklist",
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

/* Mock related posts */
const relatedPosts = [
  {
    id: 104,
    title: "The Local Agency Advantage for National-Scale ROI ",
    slug: "/blogs/digital-marketing-services/chennai-digital-marketing-services",
    date: "November 14, 2025",
    readMins: 10,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-104.jpg",
    coverAlt: "Chennai digital marketing agency delivering pan-India ROI ",
    deck: "Discover how Chennai’s top digital agencies drive national-scale growth. See how brands like Volvo, Nippo & Jeep scaled with Ayatiworks’ expertise...",
    category: "Digital Marketing Services",
  },
  {
    id: 105,
    title: "5 Key Benefits of Hiring a Chennai-Based Digital Marketing Agency",
    slug: "/blogs/digital-marketing-services/benefits-of-hiring-a-chennai-based-digital-marketing-agency",
    date: "November 21, 2025",
    readMins: 8,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-105.jpg",
    coverAlt:
      "Benefits of hiring a Chennai-based digital marketing agency for business growth",
    deck: "Discover the top Chennai digital marketing agency benefits and why choosing a local agency drives faster results, better communication, and higher ROI...",
    category: "Digital Marketing Services",
  },
  {
    id: 106,
    title: "How to Evaluate a Digital Marketing Agency in Chennai",
    slug: "/blogs/digital-marketing-services/how-to-evaluate-a-digital-marketing-agency-in-chennai/",
    bannerTitle:
      "A clear, step-by-step way to identify the right digital partner! NO falling for pitches, buzzwords, or slide-deck theatrics.",
    date: "Nov 28, 2025",
    readMins: 10,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-106.jpg",
    coverAlt:
      "Business evaluating a digital marketing agency in Chennai using a structured checklist.",
    deck: "Learn how to evaluate a digital marketing agency in Chennai with a structured, step-by-step method. Understand what to ask, how to judge capability,...",
    category: "Digital Marketing Services",
  },
  {
    id: 107,
    title: "Top 10 Digital Marketing Agencies in Chennai",
    slug: "/blogs/digital-marketing-services/top-10-digital-marketing-agencies-in-chennai",
    date: "Decmber 5, 2025",
    readMins: 15,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-107.jpg",
    coverAlt:
      "Top 10 Digital Marketing Agencies in Chennai comparison guide for brands",
    deck: "Discover the top 10 digital marketing agencies in Chennai with strengths, services, pricing insights, and expert guidance to help brands choose the right digital partner....",
    category: "Digital Marketing Services",
  },
  {
    id: 108,
    title: "How digital marketing actually drives business growth",
    slug: "/blogs/digital-marketing-services/digital-marketing-integrated-growth-framework/",
    bannerTitle:
      "How digital marketing actually drives business growth.",
    date: "Dec 19, 2025",
    readMins: 10,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-108.jpg",
    coverAlt:
      "Digital marketing services explained as a growth system",
    deck:
      "Learn how digital marketing services work together as a unified growth system. A strategic guide for founders and marketing leaders evaluating long-term, scalable digital growth....",
    category: "Digital Marketing Services",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>
          Why Businesses Struggle to Choose the Right Digital Marketing Services
        </em>
      </p>
      <p className="section-phara">
        Most business leaders don’t wake up wanting to “do digital marketing.”
        They wake up wanting{" "}
        <strong>leads, revenue, visibility, and predictable growth.</strong>
      </p>
      <p className="section-phara">
        <Link
          href="https://www.ayatiworks.com/digital-marketing-services"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital marketing services
        </Link>{" "}
        are usually adopted under pressure, slowing sales, increased
        competition, declining organic reach, or a boardroom question that
        starts with “Why aren’t we growing faster?” In that moment, businesses
        search for answers and are immediately flooded with advice that feels
        fragmented, contradictory, and overwhelming.
      </p>
      <p className="section-phara">
        SEO promises long-term results. Paid ads promise speed. Social media
        promises reach. Content promises authority. Automation promises
        efficiency. Each service sounds convincing in isolation, but when
        implemented without a clear decision framework, the outcome is scattered
        execution and unclear ROI.
      </p>
      <p className="section-phara">
        In a recent article,
        <Link
          href="https://www.ayatiworks.com/blogs/digital-marketing-services/digital-marketing-integrated-growth-framework"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Services Explained as an Integrated Growth Framework
        </Link>{" "}
        , we explored{" "}
        <strong>
          why digital marketing works best when services operate as a system
          rather than standalone tactics
        </strong>
        .
      </p>
      <p className="section-phara">
        This guide builds on that foundation and focuses on the real question
        business leaders ask next:
      </p>
      <p className="section-phara">
        {" "}
        Which digital marketing services should we choose, in what order, and
        how do we scale them without wasting budget?{" "}
      </p>
      <p className="section-phara">
        {" "}
        This article exists to answer that question, calmly, clearly, and
        without hype.{" "}
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
      q: "What digital marketing services does a business really need?",
      a: "There is no universal list of digital marketing services that fits every business. The right mix depends on factors such as business stage, industry competitiveness, target audience behaviour, and growth objectives. Early-stage businesses often need visibility and demand creation, while mature businesses focus more on conversion, retention, and efficiency.",
    },
    {
      q: "How do digital marketing services work together to drive growth?",
      a: "Digital marketing services are most effective when they operate as a system. SEO supports long-term visibility, paid media accelerates demand, content builds trust, and email or automation improves lifetime value. When these services are aligned under a single strategy, each one amplifies the impact of the others rather than competing for budget.",
    },
    {
      q: "How long does it take to see ROI from digital marketing services?",
      a: "ROI timelines vary by service. Paid media can generate short-term results, while SEO and content marketing typically require several months to compound. Businesses that align expectations with the nature of each service, and measure progress consistently, are more likely to sustain long-term returns.",
    },
    {
      q: "Is SEO better than paid advertising for businesses?",
      a: "SEO and paid advertising serve different purposes. SEO builds long-term, compounding demand, while paid advertising delivers speed and testing opportunities. Most businesses see the best results when both are used together, with SEO reducing dependency on ads over time and paid media supporting faster market entry.",
    },
    {
      q: "Can a business start with one digital marketing service and add others later?",
      a: "Yes. Many businesses begin with a single service based on their immediate needs. However, long-term growth usually requires expanding into complementary services. The key is to scale intentionally, ensuring each new service aligns with overall strategy rather than reacting to short-term performance pressures.",
    },
    {
      q: "How should businesses measure the success of digital marketing services?",
      a: "Success should be measured using business-aligned metrics rather than vanity indicators. While traffic and impressions are useful signals, meaningful measurement focuses on lead quality, conversion rates, customer acquisition cost, and lifetime value. Clear attribution helps businesses understand which services contribute most to growth.",
    },
    {
      q: "What are the most common mistakes businesses make with digital marketing services?",
      a: "Common mistakes include investing in services in isolation, expecting immediate ROI from long-term channels, and prioritising tools over strategy. Businesses also struggle when they change direction too quickly, preventing any single service from reaching its full potential.",
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

/* Related posts */
function RelatedPostsSection({ posts = [] }) {
  if (!posts?.length) return null;
  return (
    <div className="mt-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left">Related Posts</h2>
        <Link
          href="/blogs"
          className="btn-outline"
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
      <Link href={post.slug} className="absolute inset-0 z-[1]">
        <span className="sr-only">{`Read: ${post.title}`}</span>
      </Link>

      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-primary text-lg leading-snug text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.deck}</p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}
