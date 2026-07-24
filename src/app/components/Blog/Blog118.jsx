"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

import RightSidebarCategories from "./RightSidebarCategories";

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage118() {
  const post = POSTS.find((p) => p.id === 118) || POSTS[0];

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
              "/author/daniel.png",
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
              Why SEO Still Matters for Businesses in Chennai
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
            id="what-seo-services-actually-include"
            title="What SEO Services Actually Include"
          >
            <p className="section-phara">
              SEO services involve much more than adding keywords to a website.
            </p>
            <p className="section-phara">
              A professional SEO strategy combines technical improvements, content development, search intent research, and authority building to help a site rank higher for relevant queries.
            </p>
            <p className="section-phara">
              The goal is not just to increase traffic, but to attract the right kind of visitors who are more likely to convert into customers.
            </p>
            <p className="section-phara">Most SEO service providers begin with a detailed audit to understand the current condition of the website.
              This is followed by keyword mapping, on-page optimisation, technical fixes, and content planning.
            </p>
            <p className="section-phara">Over time, link building, performance monitoring, and regular updates help strengthen rankings.
            </p>
            <p className="section-phara">Because search algorithms constantly change, SEO is treated as an ongoing process rather than a one-time activity.

            </p>



          </Section>

          {/* STEP 1 */}
          <Section
            id="types-of-seo-services-companies-offer"
            title="Types of SEO Services Companies Offer"
          >
            <p className="section-phara ">
              Different businesses require different types of SEO services depending on their size, industry, and target market. Local SEO focuses on improving visibility for searches within a specific city or region, which is especially important for service-based companies.
            </p>
            <p className="section-phara">
              Ecommerce SEO is designed for online stores, where product pages, category pages, and site structure play a major role in rankings.
            </p>
            <p className="section-phara">
              Technical SEO is another important area that deals with site speed, indexing, crawlability, and overall website performance.
            </p>
            <p className="section-phara">
              Content-driven SEO focuses on building topical authority through blogs, landing pages, and informational resources.
            </p>
            <p className="section-phara">
              Larger organisations may require enterprise SEO, which involves managing thousands of pages and complex keyword structures.
            </p>
            <p className="section-phara">
              Choosing the right type of SEO service depends on business goals rather than just budget.


            </p>


          </Section>

          {/* STEP 2 */}
          <Section
            id="how-the-seo-process-works-step-by-step"
            title="How the SEO Process Works Step by Step"
          >
            <p className="section-phara">
              A structured SEO campaign usually starts with research and analysis before any changes are made.
            </p>
            <p className="section-phara">The first step is a technical and content audit to identify issues that may be preventing the website from ranking.
            </p>
            <p className="section-phara">This is followed by keyword research to understand how potential customers search for products or services online.
            </p>
            <p className="section-phara">Once the strategy is defined, on-page optimisation is carried out by improving page titles, headings, internal links, and content relevance.
            </p>
            <p className="section-phara">Technical improvements such as fixing broken links, improving loading speed, and ensuring proper indexing are also implemented.
            </p>
            <p className="section-phara">After these steps, new content and backlinks help build authority, while regular tracking allows businesses to measure progress and adjust the strategy when needed.

            </p>

          </Section>

          {/* STEP 3 */}
          <Section
            id="how-long-seo-takes-to-show-results"
            title="How Long SEO Takes to Show Results"
          >
            <p className="section-phara">
              One of the most common questions businesses ask is how long SEO takes to work. Unlike paid advertising, search engine optimisation does not produce instant results because rankings depend on competition, website history, and the strength of existing content.
            </p>
            <p className="section-phara">In most cases, noticeable improvements start appearing within three to six months, while competitive industries may take longer to show strong growth.
            </p>
            <p className="section-phara">The timeline also depends on how consistent the optimisation efforts are. Websites that regularly publish useful content, fix technical issues, and build quality backlinks tend to grow faster than sites that make changes only occasionally.
            </p>
            <p className="section-phara">Because of this, SEO is usually treated as a long-term investment rather than a short campaign, especially for businesses that want stable and predictable online visibility.

            </p>


          </Section>
          <Section
            id="seo-pricing-in-chennai"
            title="SEO Pricing in Chennai: What Businesses Should Expect"
          >
            <p className="section-phara">
              One of the most common questions businesses ask before hiring an SEO partner is how much professional SEO services actually cost.
            </p>
            <p className="section-phara">The answer is not always straightforward, because pricing depends on the scope of work, the competitiveness of the industry, and the level of expertise required.
            </p>
            <p className="section-phara">When comparing different service providers, including the
              {" "} <Link
                href="https://www.ayatiworks.com/blogs/seo/top-10-seo-agencies-in-chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                Top 10 SEO Agencies in Chennai
              </Link>{" "} , it becomes clear that there is no single fixed price for SEO.
            </p>
            <p className="section-phara">In most cases, the base cost for a holistic SEO campaign in Chennai starts around ₹45,000 per month and can go significantly higher depending on the complexity of the project.
            </p>
            <p className="section-phara">Highly competitive industries such as healthcare, finance, SaaS, ecommerce, and real estate often require deeper keyword research, stronger content strategy, and more authority building, which naturally increases the investment required.
            </p>
            <p className="section-phara">These figures should be treated only as ballpark ranges, not exact quotes, because every business has different goals and starting points.
            </p>
            <p className="section-phara">Some companies choose limited SEO services instead of a full campaign. For example, businesses that already have strong content may only require link building to improve authority, while others may invest only in content writing to expand their topical coverage.
            </p>
            <p className="section-phara">In such cases, monthly costs can be lower, but the results may also take longer because SEO works best when technical optimisation, content, and backlinks are handled together.
            </p>
            <p className="section-phara">There are also situations where businesses request only guest posting or backlink acquisition to strengthen domain authority.
            </p>
            <p className="section-phara">While this can help in the short term, it usually needs to be supported by proper on-page optimisation and technical SEO to produce stable rankings.
            </p>
            <p className="section-phara">On the other hand, companies looking for complete end-to-end SEO services, including audit, keyword strategy, technical fixes, content creation, link building, and performance tracking, should expect higher monthly budgets because the work involves multiple specialists and ongoing effort.
            </p>
            <p className="section-phara">Another important factor that affects pricing today is the shift toward AI-driven search.
            </p>
            <p className="section-phara">Modern SEO is no longer limited to ranking for keywords. It now includes structured content, entity optimisation, answer-focused pages, and technical improvements that help websites appear in AI-generated results, featured snippets, and voice search.
            </p>
            <p className="section-phara">Because of this, the cost of SEO is increasingly linked to the depth of strategy rather than just the number of keywords being targeted.
            </p>
            <p className="section-phara">Ultimately, the right SEO budget depends on what your business actually needs and how competitive your industry is.
            </p>
            <p className="section-phara">A small local service company may require a very different approach compared to a national brand or a fast-growing startup.
            </p>
            <p className="section-phara">Instead of deciding on SEO purely based on price, many businesses today prefer to first understand what their website actually requires to compete in search.
            </p>
            <p className="section-phara">In the current AI-driven search environment, rankings depend on multiple factors, such as technical structure, content depth, authority signals, and how well a site is aligned with user intent. Because of this, the scope of SEO can vary widely even between companies in the same industry.
            </p>
            <p className="section-phara">This is why experienced businesses often begin with a practical evaluation rather than choosing a package immediately.
            </p>
            <p className="section-phara">A short review of the website, the competition, and the search landscape usually makes it clear whether the business needs basic optimisation, ongoing content support, authority building, or a complete end-to-end SEO strategy.
            </p>
            <p className="section-phara">Having this clarity early helps avoid unnecessary spending and sets realistic expectations for timelines and results.
            </p>
            <p className="section-phara">For companies that want a clearer direction before making a decision, we run a short {" "} <Link
              href="https://www.ayatiworks.com/contact-us"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              SEO Growth Diagnosis Session
            </Link>{" "}  , where we map the current visibility of the website, the level of competition in the industry, and the kind of SEO effort that would realistically be required to improve rankings.
            </p>
            <p className="section-phara">The session is designed to give businesses a practical roadmap they can use to plan their next steps with confidence.

            </p>
            <div className="my-10 overflow-hidden rounded-2xl bg-[#0A4991] p-1 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-xl border border-white/20 bg-white/5 px-8 py-8 backdrop-blur-sm">

                {/* Left Content */}
                <div className="space-y-2 md:max-w-[65%]">
                  <h3 className="font-primary text-2xl md:text-3xl text-white">
                    SEO Growth Diagnosis Session with Ayatiworks
                  </h3>
                  {/* <p className="font-secondary text-lg text-slate-100/90">
                    Get a practical roadmap for your business with Ayatiworks
                  </p> */}
                </div>

                {/* Button */}
                <Link
                  href="/contact-us"
                  className="shrink-0 whitespace-nowrap inline-flex items-center justify-center rounded-full bg-secondary px-10 py-3.5 font-primary text-lg md:text-xl font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/40"
                >
                  Schedule Diagnosis
                </Link>

              </div>
            </div>
          </Section>
          <Section
            id="how-to-evaluate-seo-services-before-hiring-an-agency"
            title="How to Evaluate SEO Services Before Hiring an Agency"
          >
            <p className="section-phara">
              Choosing an SEO service provider should not be based only on pricing or promises of quick rankings.
            </p>
            <p className="section-phara">Search engine optimisation has become more complex in recent years, especially with the rise of AI-driven search results, structured content, and entity-based ranking signals.
            </p>
            <p className="section-phara">Because of this, businesses need to look at how an agency plans to approach SEO rather than just what they claim they can achieve.
            </p>
            <p className="section-phara">One of the first things to check is whether the agency explains its process clearly.
            </p>
            <p className="section-phara">A reliable SEO partner should be able to describe how they handle technical optimisation, content planning, keyword research, and authority building.
            </p>
            <p className="section-phara">If the discussion focuses only on ranking guarantees or the number of keywords, it usually means the strategy is not well defined.
            </p>
            <p className="section-phara">Modern SEO requires a combination of technical work, content depth, and consistent updates, not a one-time setup.
            </p>
            <p className="section-phara">It is also important to understand what kind of reporting will be provided.
            </p>
            <p className="section-phara">Professional SEO services should include regular performance reviews based on search visibility, traffic quality, and conversions rather than only showing keyword positions.
            </p>
            <p className="section-phara">Rankings alone do not always reflect business growth, so agencies should be able to explain how their work connects to enquiries, leads, or sales.
            </p>
            <p className="section-phara">Another practical step is to compare multiple agencies before making a decision.
            </p>
            <p className="section-phara">Looking at different service approaches, pricing structures, and {" "} <Link
              href="https://www.ayatiworks.com/case-study"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              case studies
            </Link>{" "}  helps businesses understand what is realistic for their industry.
            </p>
            <p className="section-phara">Businesses should also pay attention to how well the agency understands their specific market.
            </p>
            <p className="section-phara">SEO strategies are rarely identical across industries. A local service company, an ecommerce brand, and a B2B technology firm will all require different keyword strategies, content structures, and authority signals.
            </p>
            <p className="section-phara">Agencies that ask detailed questions about the business, the competition, and the target audience are usually more likely to build a sustainable strategy than those who immediately suggest a fixed package.
            </p>
            <p className="section-phara">Finally, it helps to set realistic expectations before starting any SEO project. Strong results usually come from consistent work over several months rather than quick changes.
            </p>
            <p className="section-phara">Companies that invest time in understanding the process, the effort involved, and the level of competition tend to get better long-term outcomes than those who choose a service based only on cost or speed.
            </p>
            <p className="section-phara">Taking the time to evaluate SEO services carefully can prevent wasted budgets and make it easier to choose a partner who can support steady, long-term growth rather than short-term ranking improvements.


            </p>


          </Section>

          <Section
            id="top-seo-agencies-in-chennai"
            title="Top SEO Agencies in Chennai You Can Consider"
          >
            <p className="section-phara">
              Once businesses understand what SEO involves, the next step is usually to compare service providers before making a decision.
            </p>
            <p className="section-phara">Chennai has a growing number of digital agencies offering SEO services, but the level of experience, strategy depth, and reporting standards can vary significantly from one company to another.
            </p>
            <p className="section-phara">This makes it important to review multiple agencies rather than selecting the first option that appears in search results.
            </p>
            <p className="section-phara">Different agencies may specialise in different areas such as local SEO, enterprise SEO, ecommerce optimisation, or content-driven search strategies. Some focus on technical performance, while others focus more on content and authority building.
            </p>
            <p className="section-phara">The right choice depends on the size of the business, the competitiveness of the industry, and the kind of growth expected from search traffic.

            </p>



          </Section>
          <Section
            id="when-to-invest-in-seo-services"
            title="When Should a Business Invest in SEO Services?"
          >
            <p className="section-phara">
              Not every business needs SEO at the same stage, but there are clear situations where search optimisation becomes important.
            </p>
            <p className="section-phara">Companies usually start considering SEO when they realise that paid advertising alone is not giving consistent results, or when competitors are appearing ahead of them in search for important keywords.
            </p>
            <p className="section-phara">When customers are actively searching for a product or service, not being visible on search engines means losing potential enquiries to competitors.
            </p>
            <p className="section-phara">SEO also becomes important when a business plans long-term growth rather than short-term campaigns.
            </p>
            <p className="section-phara">Unlike advertising, search visibility builds gradually and continues to generate traffic even when marketing budgets change. This makes SEO useful for service companies, ecommerce businesses, startups, and established brands that want predictable lead generation instead of depending only on ads.
            </p>
            <p className="section-phara">Another common situation is when a website already exists but is not attracting enough organic traffic.
            </p>
            <p className="section-phara">In such cases, SEO services help identify technical issues, improve content relevance, and build authority so that the site can start ranking for the right searches.
            </p>
            <p className="section-phara">Investing at the right time usually gives better results than waiting until competition becomes too strong.

            </p>

          </Section>
          <Section
            id="how-seo-fits-into-a-long-term-digital-growth-strategy"
            title="How SEO Fits into a Long-Term Digital Growth Strategy"
          >
            <p className="section-phara">
              SEO works best when it is treated as part of a larger digital growth plan rather than as an isolated activity.
            </p>
            <p className="section-phara">Businesses that combine SEO with content strategy, website improvements, and performance tracking usually see more stable results compared to those who try to optimise only a few pages.
            </p>
            <p className="section-phara">Search engines reward websites that consistently publish useful content, maintain good technical performance, and build credibility over time.
            </p>
            <p className="section-phara">In the current search environment, SEO also supports other marketing channels. High-quality content created for search can be used for social media, email campaigns, and paid ads.
            </p>
            <p className="section-phara">Technical improvements made for SEO often improve overall website performance, which helps conversion rates as well.
            </p>
            <p className="section-phara">Because of this, many companies treat SEO as a foundation for digital marketing rather than just one of many services.
            </p>
            <p className="section-phara">As search continues to evolve with AI-generated results and answer-based queries, long-term strategy becomes even more important.
            </p>
            <p className="section-phara">Businesses that invest early in structured content, topical authority, and technical optimisation are more likely to remain visible as search algorithms change.


            </p>


          </Section>
          <Section
            id="choosing-seo-services-that-deliver-real-business-growth"
            title="Choosing SEO Services That Deliver Real Business Growth"
          >
            <p className="section-phara">
              Choosing the right SEO services is not only about finding an agency, but about understanding what your business actually needs to compete in search.
            </p>
            <p className="section-phara">Pricing, timelines, and results can vary depending on the industry, the level of competition, and the current state of the website.
            </p>
            <p className="section-phara">Taking time to evaluate the scope of work, compare service providers, and set realistic expectations usually leads to better long-term outcomes.
            </p>
            <p className="section-phara">Businesses that approach SEO as a structured growth strategy rather than a quick fix tend to see more stable traffic, better quality leads, and stronger online credibility over time.
            </p>
            <p className="section-phara">Whether the goal is local visibility, national reach, or industry authority, the key is to choose an approach that matches the business stage, the market, and the level of competition involved.
            </p>
            <p className="section-phara">Understanding how SEO works, what it costs, and how to evaluate service providers makes it easier to make informed decisions and avoid unnecessary spending.
            </p>
            <p className="section-phara">With the right strategy in place, search optimisation can become one of the most reliable channels for consistent business growth.


            </p>


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
/* TOC items – Updated for AI Affiliate Marketing Blog */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "what-seo-services-actually-include",
    level: 1,
    label: "What SEO Services Include",
  },
  {
    id: "types-of-seo-services-companies-offer",
    level: 1,
    label: "Types of SEO Services",
  },
  {
    id: "how-the-seo-process-works-step-by-step",
    level: 1,
    label: "The SEO Process Step-by-Step",
  },
  {
    id: "how-long-seo-takes-to-show-results",
    level: 1,
    label: "How Long SEO Takes",
  },
  {
    id: "seo-pricing-in-chennai",
    level: 1,
    label: "SEO Pricing in Chennai",
  },
  {
    id: "how-to-evaluate-seo-services-before-hiring-an-agency",
    level: 1,
    label: "How to Evaluate SEO Services",
  },
  {
    id: "top-seo-agencies-in-chennai",
    level: 1,
    label: "Top SEO Agencies in Chennai",
  },
  {
    id: "when-to-invest-in-seo-services",
    level: 1,
    label: "When to Invest in SEO",
  },
  {
    id: "how-seo-fits-into-a-long-term-digital-growth-strategy",
    level: 1,
    label: "Long-Term Growth Strategy",
  },
  {
    id: "choosing-seo-services-that-deliver-real-business-growth",
    level: 1,
    label: "Choosing the Right Services",
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
      {/* <h2 className="section-title mb-4 text-left text-3xl">
        <em>
          When Rankings Become Revenue: How Brands Choose SEO Agencies
        </em>
      </h2> */}
      <p className="section-phara">Are you seeing this everywhere?</p>
      <div className="relative my-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-slate-200">
        <Image
          src="/assets/seo-ay.jpg"
          alt="Ayatiworks professes SEO is Evolving and we need to keep upgrading our SEO Knowledge"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>
      <p className="section-phara">The famous words of Richard Hoy in 1997 – {" "} <Link
        href="https://searchengineland.com/is-seo-dead-1997-prediction-meet-2009-reality-32113"
        className="text-secondary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
      >
        SEO is DEAD
      </Link>{" "}</p>
      <p className="section-phara font-bold italic">"I’m beginning to believe that search engines are a dead-end technology and fretting over where your site comes up is a big waste of time."</p>
      <p className="section-phara">
        26 years later we are still looking to rank on Search Engines organically, it seems like SEO keeps dying and we will be yet another human to pronounce it...
      </p>
      <p className="section-phara">
        Search behaviour has changed, but search engines are still one of the strongest sources of consistent business growth. It has evolved and will keep evolving, just follow the math if you want to stay in business
      </p>
      <p className="section-phara">
        Whether customers are looking for local services, B2B solutions, or ecommerce products, most buying journeys still begin with a Google search.
      </p>
      <p className="section-phara">
        For companies operating in competitive markets like Chennai, appearing on the first page is no longer optional, it directly affects lead generation, brand trust, and long-term revenue.
      </p>
      <p className="section-phara">
        Many businesses today are beginning to work with {" "} <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agencies in Chennai
        </Link>{" "}  to build sustainable visibility instead of depending on paid ads only.
      </p>
      <p className="section-phara">
        Unlike advertising, which stops the moment the budget ends, search engine optimisation focuses on building long-term authority so that a website continues to attract traffic, enquiries, and qualified prospects over time.
      </p>
      <p className="section-phara">
        This is why SEO remains one of the most reliable digital marketing investments for companies that want steady growth rather than short-term spikes.

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
      q: "1. How much do SEO services cost in Chennai?",
      a: "SEO pricing in Chennai usually starts around ₹40,000–₹50,000 per month for basic campaigns and can increase depending on competition, industry, and scope of work. Businesses in competitive sectors often require more content, technical optimisation, and authority building, which increases the overall cost.",
    },
    {
      q: "2. How long does SEO take to show results?",
      a: "Most SEO campaigns take around three to six months to show noticeable improvement, but highly competitive industries may take longer. Results depend on website condition, keyword difficulty, content quality, and consistency of optimisation.",
    },
    {
      q: "3. Is SEO better than paid advertising?",
      a: "SEO and paid ads serve different purposes. Paid advertising gives immediate traffic, while SEO builds long-term visibility. Many businesses use both, but SEO is often preferred for sustainable growth because traffic continues even after the initial investment.",
    },
    {
      q: "4. How do I choose the right SEO agency in Chennai?",
      a: "Look for agencies that explain their process clearly, provide regular reporting, and focus on long-term strategy rather than quick rankings. Comparing multiple companies, checking case studies, and understanding the scope of work helps in making the right decision.",
    },
    {
      q: "5. What services are included in professional SEO?",
      a: "Professional SEO usually includes technical audits, keyword research, on-page optimisation, content strategy, link building, and performance tracking. Some projects may also include local SEO, ecommerce SEO, or enterprise-level optimisation depending on business needs.",
    },
    {
      q: "6. Does SEO still work after AI search updates?",
      a: "Yes. SEO continues to work, but strategies have evolved. Modern SEO includes structured content, entity optimisation, and answer-focused pages that help websites appear in AI-generated results, featured snippets, and voice search.",
    },
    {
      q: "7. When should a business start investing in SEO?",
      a: "Businesses should consider SEO when they want consistent traffic, better search visibility, and long-term lead generation. Starting early usually gives better results because SEO takes time to build authority and rankings.",
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



