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
export default function AEOArticlePage115() {
  const post = POSTS.find((p) => p.id === 115) || POSTS[0];

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
            avatar: "/author/daniel.png",
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
              Why Businesses Confuse SEO, Performance & Growth Marketing
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
            id="what-seo-actually-is-and-what-it-is-not"
            title="What SEO Actually Is (And What It Is Not)"
          >
            <p className="section-phara">
              Search Engine Optimization, or SEO, is one of the most
              misunderstood pillars of digital marketing.
            </p>
            <p className="section-phara">
              At its core, SEO is the process of improving a website’s
              visibility in organic search results so that it appears when users
              actively search for relevant products, services, or information.
            </p>
            <p className="section-phara">In simple terms:</p>
            <p className="section-phara">SEO captures existing demand.</p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                SEO involves several foundational components:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title:
                      "	Technical optimization (site speed, indexing, crawl structure)",
                    desc: "",
                  },
                  {
                    title:
                      " On-page optimization (content alignment with search intent)",
                    desc: "",
                  },
                  {
                    title:
                      "	Authority building (quality backlinks and topical depth)",
                    desc: "",
                  },
                  {
                    title:
                      "	Search experience optimization (engagement signals and content clarity)",
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
              What SEO does not do is create demand instantly. It does not
              guarantee overnight traffic spikes. It does not replace
              advertising for immediate lead generation.
            </p>
            <p className="section-phara">
              One of the biggest misconceptions is expecting SEO to behave like
              performance marketing. SEO builds visibility gradually. It
              compounds over time. When done correctly, it reduces dependency on
              paid channels by consistently bringing in high-intent users.
            </p>
            <p className="section-phara">
              Another common misunderstanding is equating SEO with keyword
              stuffing or content volume. Modern SEO is intent-driven and
              structured around topic authority. Google rewards depth, clarity,
              and user satisfaction, not repetition.
            </p>
            <p className="section-phara">
              Businesses exploring structured visibility strategies often look
              at dedicated <strong>SEO Services </strong> to build this
              foundation properly. Without strong SEO infrastructure,
              performance campaigns become more expensive, and growth marketing
              lacks stability.
            </p>
            <p className="section-phara">
              SEO is slow compared to ads, but powerful compared to noise. It is
              not about traffic alone. It is about owning search territory in a
              way that compounds over months and years.
            </p>
            <p className="section-phara">
              When understood correctly, SEO is not a tactic. It is a long-term
              asset.
            </p>

            {/* <p className="section-phara">  </p> */}
          </Section>

          {/* STEP 1 */}
          <Section
            id="what-performance-marketing-really-means"
            title="What Performance Marketing Really Means"
          >
            <p className="section-phara ">
              Performance marketing is built for measurable acceleration. Unlike
              SEO, which focuses on organic visibility, performance marketing
              primarily relies on paid channels to generate traffic, leads, or
              sales.{" "}
            </p>
            <p className="section-phara">In practical terms:</p>
            <p className="section-phara">
              Performance marketing buys attention and optimizes for immediate
              results.{" "}
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                This includes:{" "}
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Paid search ads",
                    desc: "",
                  },
                  {
                    title: "	Paid social campaigns",
                    desc: "",
                  },
                  {
                    title: "	Display and retargeting ads",
                    desc: "",
                  },
                  {
                    title: "	Marketplace advertising",
                    desc: "",
                  },
                  {
                    title: "	Lead-generation campaigns",
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
              The defining feature of performance marketing is measurability.
              Every click, impression, conversion, and cost can be tracked.
              Businesses like this clarity because it allows rapid
              experimentation and faster decision cycles.
            </p>
            <p className="section-phara">
              For new product launches, seasonal promotions, or aggressive
              expansion goals, performance marketing provides speed. It can
              validate demand, test messaging, and generate leads within days or
              weeks.
            </p>
            <p className="section-phara">
              However, performance marketing has structural limits.
            </p>
            <p className="section-phara">
              First, it is budget-dependent. Traffic stops when spend stops.
              There is no residual visibility unless supported by organic
              channels.
            </p>
            <p className="section-phara">
              Second, acquisition costs often increase over time due to
              competition and audience fatigue. What works profitably in month
              one may require optimization in month three and higher spend in
              month six.
            </p>
            <p className="section-phara">
              Third, without strong landing pages, content alignment, and
              conversion pathways, performance campaigns leak value. Ads drive
              traffic, but poorly structured funnels reduce efficiency.
            </p>
            <p className="section-phara">
              Businesses that integrate performance marketing within broader{" "}
              <Link
                href="https://www.ayatiworks.com/digital-marketing-services"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Digital Marketing Services in Chennai
              </Link>{" "}
              often see better results because paid acceleration is supported by
              SEO, CRO, and lifecycle nurturing.
            </p>
            <p className="section-phara">
              Performance marketing is powerful, but it is not self-sustaining.
              It excels at speed and testing, but it must be integrated
              thoughtfully to avoid becoming an expensive dependency.
            </p>

            {/* <p className="section-phara"> </p>
            <p className="section-phara"> </p> */}
          </Section>

          {/* STEP 2 */}
          <Section
            id="what-growth-marketing-actually-encompasses"
            title="What Growth Marketing Actually Encompasses"
          >
            <p className="section-phara">
              Growth marketing is often used as a buzzword, but when defined
              clearly, it represents a system rather than a channel.
            </p>
            <p className="section-phara">
              {" "}
              If SEO captures demand and performance marketing accelerates
              demand, then:
            </p>
            <p className="section-phara">
              {" "}
              Growth marketing optimizes the entire revenue journey.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                It encompasses:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Acquisition (SEO + paid)",
                    desc: "",
                  },
                  {
                    title: "	Conversion rate optimization (CRO)",
                    desc: "",
                  },
                  {
                    title: "	Customer journey mapping",
                    desc: "",
                  },
                  {
                    title: "	Retention strategies",
                    desc: "",
                  },
                  {
                    title: "	Data-driven experimentation",
                    desc: "",
                  },
                  {
                    title: "	Lifecycle communication",
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
              {" "}
              Growth marketing focuses not only on bringing users in but also on
              improving how efficiently they convert and how long they remain
              customers.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Where SEO builds visibility and performance marketing drives
                traffic, growth marketing asks deeper questions:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Where are users dropping off?",
                    desc: "",
                  },
                  {
                    title: "	Which messaging converts best?",
                    desc: "",
                  },
                  {
                    title: "	How can lifetime value increase?",
                    desc: "",
                  },
                  {
                    title: "	What happens after the first purchase?",
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
              {" "}
              It is inherently cross-functional. It blends marketing, analytics,
              product thinking, and user experience.
            </p>
            <p className="section-phara">
              The problem arises when businesses adopt the term “growth
              marketing” without the foundation to support it. Without organic
              visibility, paid efficiency, or reliable data systems, growth
              marketing becomes theoretical.
            </p>
            <p className="section-phara">
              When implemented correctly, growth marketing connects all moving
              parts into a unified system. Agencies that operate at this level
              often position themselves as strategic partners rather than
              service vendors.
            </p>
            <p className="section-phara">
              At its strongest, growth marketing transforms marketing from
              campaign execution into revenue engineering, where each
              improvement compounds over time instead of resetting every
              quarter.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="why-these-three-are-not-interchangeable"
            title="Why These Three Are Not Interchangeable"
          >
            <p className="section-phara">
              The confusion between SEO, performance marketing, and growth
              marketing usually begins when businesses treat them as
              alternatives instead of complementary layers.
            </p>
            <p className="section-phara">
              They are not interchangeable because they solve different
              problems.
            </p>
            <p className="section-phara">SEO answers the question:</p>
            <p className="section-phara">
              “How do we get discovered consistently without paying for every
              click?”
            </p>
            <p className="section-phara">Performance marketing answers:</p>
            <p className="section-phara">
              “How do we generate immediate traction and test demand quickly?”
            </p>
            <p className="section-phara">Growth marketing asks:</p>
            <p className="section-phara">
              “How do we improve the entire system so revenue increases
              efficiently over time?”
            </p>
            <p className="section-phara">
              When these are mixed up, strategy collapses.
            </p>
            <p className="section-phara">
              For example, expecting SEO to deliver instant leads like paid ads
              leads to premature abandonment of organic strategies.
            </p>
            <p className="section-phara">
              On the other hand, relying entirely on performance marketing
              without SEO often results in rising acquisition costs and weak
              long-term brand authority.
            </p>
            <p className="section-phara">
              Growth marketing is frequently misunderstood as simply “doing
              everything.” In reality, it requires sequencing. Without SEO,
              there is no organic stability. Without performance marketing,
              testing cycles slow down. Without conversion optimisation, both
              channels leak efficiency.
            </p>
            <p className="section-phara">These are layers, not substitutes.</p>
            <p className="section-phara">
              A mature digital strategy typically begins with foundational SEO,
              introduces performance marketing for acceleration, and evolves
              into a growth marketing system where acquisition, conversion, and
              retention operate together.
            </p>
            <p className="section-phara">
              The real danger is choosing one and ignoring the others.
              Businesses that rely only on SEO move slowly. Businesses that rely
              only on paid media overspend. Businesses that talk about growth
              marketing without structure create complexity without results.
            </p>
            <p className="section-phara">
              Understanding their distinct roles is the first step toward
              building a system that compounds rather than resets.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="timeline-comparison-short-term-vs-mid-term-vs-long-term-roi"
            title="Timeline Comparison: Short-Term vs Mid-Term vs Long-Term ROI"
          >
            <p className="section-phara">
              One of the clearest ways to distinguish SEO, performance
              marketing, and growth marketing is through timeline expectations.
            </p>
            <p className="section-phara">
              SEO typically operates on a 3–6 month visibility curve, sometimes
              longer in competitive industries. Technical fixes may show impact
              within weeks, but meaningful ranking improvements and
              authority-building take time. However, once established, SEO tends
              to deliver consistent traffic with lower incremental cost.
            </p>
            <p className="section-phara">
              Performance marketing works almost immediately. Campaigns can
              launch within days, and data becomes available within hours.
              Businesses can test audiences, creatives, and offers quickly.
              However, sustainability depends entirely on continuous budget
              allocation.
            </p>
            <p className="section-phara">
              Growth marketing works across multiple timelines. Early gains may
              appear through conversion rate improvements within 1–2 months.
              Deeper revenue efficiency improvements, retention growth, and
              customer lifetime value optimisation typically show stronger
              impact over 6–12 months.
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Here’s a simplified comparison:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "SEO: Slower start, compounding stability.",
                    desc: "",
                  },
                  {
                    title:
                      "Performance Marketing: Fast start, ongoing spend required.",
                    desc: "",
                  },
                  {
                    title:
                      "Growth Marketing: System improvement over medium to long term.",
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
              The mistake businesses often make is judging all three by the same
              clock.
            </p>
            <p className="section-phara">
              SEO is criticised for being slow. Performance marketing is
              criticised for being expensive. Growth marketing is criticised for
              being complex.
            </p>
            <p className="section-phara">
              Each criticism is valid, if evaluated using the wrong timeline.
            </p>
            <p className="section-phara">
              The right approach aligns business goals with realistic time
              horizons. If immediate cash flow is required, performance
              marketing plays a larger role.
            </p>
            <p className="section-phara">
              If long-term brand equity and cost efficiency are priorities, SEO
              and growth systems become critical.
            </p>
            <p className="section-phara">
              Matching strategy to timeline avoids frustration and prevents
              premature pivots.
            </p>
          </Section>
          <Section
            id="structured-data-apis-and-ai-visibility"
            title="6. Structured Data, APIs, and AI Visibility"
          >
            <p className="section-phara">
              Cost is where the confusion becomes most visible.
            </p>
            <p className="section-phara">
              In the Indian market, particularly in cities like Chennai, pricing
              varies significantly depending on scope, competition, and business
              size.
            </p>
            <p className="section-phara">
              The figures below represent general market ranges and can vary
              widely based on complexity and objectives.
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                SEO Investment (Monthly Retainer Model)
              </h3>
              <p className="section-phara">
                For small to mid-sized businesses: ₹40,000 – ₹75,000 per month
              </p>
              <p className="section-phara">
                For competitive industries or national targeting: ₹75,000 –
                ₹2,00,000+ per month
              </p>
              <p className="section-phara">Costs depend on:</p>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Keyword competition",
                    desc: "",
                  },
                  {
                    title: "	Content production volume",
                    desc: "",
                  },
                  {
                    title: "	Technical complexity",
                    desc: "",
                  },
                  {
                    title: "	Link-building depth",
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
              SEO investment tends to create compounding value. Traffic
              continues even if investment is reduced later, provided
              foundational authority is built.
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Performance Marketing Investment
              </h3>
              <p className="section-phara">
                Agency management fee: ₹25,000 – ₹1,00,000+ per month
              </p>
              <p className="section-phara">
                Ad spend (separate from agency fee): ₹50,000 – several lakhs per
                month depending on scale
              </p>
              <p className="section-phara">
                Performance marketing cost is directly proportional to scale.
                Higher revenue targets require higher ad budgets. Returns depend
                on funnel efficiency and targeting precision.
              </p>
              <p className="section-phara">
                There is no compounding without reinvestment. When ad spend
                stops, traffic stops.
              </p>
            </div>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Growth Marketing Investment
              </h3>
              <p className="section-phara">
                Growth marketing typically integrates SEO, performance
                marketing, analytics, and CRO.
              </p>
              <p className="section-phara">
                Monthly investments often range from: ₹75,000 – ₹3,00,000+
                depending on scope
              </p>

              <p className="section-phara">Costs depend on:</p>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Number of channels integrated",
                    desc: "",
                  },
                  {
                    title: "	Experimentation depth",
                    desc: "",
                  },
                  {
                    title: "	Analytics infrastructure",
                    desc: "",
                  },
                  {
                    title: "	Conversion optimisation frequency",
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
              Growth marketing can improve efficiency across both SEO and paid
              media, reducing acquisition cost over time.
            </p>
            <p className="section-phara font-bold">
              So, Does Cost Depend on Scope?
            </p>
            <p className="section-phara">
              Yes. <br />
              Industry, competition, targeting geography, content needs,
              ecommerce complexity, and revenue goals all influence pricing.
              There is no fixed “standard” cost because strategies differ in
              ambition and scale.
            </p>
            <p className="section-phara">
              The key is not which model is cheaper, but which model aligns with
              business maturity and revenue objectives.
            </p>
            <p className="section-phara">
              Marketing should not be evaluated only by monthly expense. It
              should be evaluated by cost per acquisition, customer lifetime
              value, and long-term efficiency.
            </p>
            <p className="section-phara">
              When viewed this way, the conversation shifts from price
              comparison to strategic investment.
            </p>
          </Section>
          <Section
            id="where-seo-alone-breaks-down"
            title="Where SEO Alone Breaks Down"
          >
            <p className="section-phara">
              SEO is powerful. It builds visibility, authority, and long-term
              traffic stability. But it is not designed to solve every growth
              challenge on its own.
            </p>
            <p className="section-phara">
              The first limitation of SEO appears in speed. Businesses launching
              a new product, entering a new market, or needing immediate cash
              flow cannot rely solely on organic rankings.
            </p>
            <p className="section-phara">
              Even with aggressive optimisation, competitive keywords take
              months to stabilise. During that time, revenue targets may remain
              unmet.
            </p>
            <p className="section-phara">
              The second limitation is intent saturation. SEO captures demand
              that already exists. It does not create new demand quickly. If
              search volume in your category is low, ranking first does not
              automatically translate into meaningful revenue. Organic traffic
              is only as strong as the demand behind it.
            </p>
            <p className="section-phara">
              The third challenge is conversion dependency. SEO can drive highly
              relevant traffic, but if landing pages are poorly structured or
              messaging is misaligned, traffic does not convert.
            </p>
            <p className="section-phara">
              Without conversion rate optimisation, SEO becomes a visibility
              engine without a revenue engine.
            </p>
            <p className="section-phara">
              There is also competitive pressure. In saturated industries,
              ranking improvements require sustained content investment,
              technical depth, and link authority. Businesses that underinvest
              often plateau in positions 8–20 and struggle to break through.
            </p>

            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Here is the key distinction:
            </h3>
            <p className="section-phara">SEO builds digital real estate.</p>
            <p className="section-phara">
              But real estate must be activated through conversion systems and
              strategic amplification.
            </p>
            <p className="section-phara">
              Businesses that rely only on SEO often grow steadily but slowly.
              They may experience strong inbound visibility yet struggle to
              scale aggressively. That is not a failure of SEO; it is a mismatch
              between expectations and capability.
            </p>
            <p className="section-phara">
              SEO works best when it is treated as a foundation, not a
              standalone growth accelerator.
            </p>
          </Section>

          <Section
            id="where-performance-marketing-alone-becomes-expensive"
            title="Where Performance Marketing Alone Becomes Expensive"
          >
            <p className="section-phara">
              Performance marketing is designed for speed and measurable
              acquisition. But when used in isolation, it can become financially
              unsustainable.
            </p>
            <p className="section-phara">
              The most common issue is rising cost per acquisition. As
              competition increases and audiences are repeatedly targeted, cost
              per click rises.
            </p>
            <p className="section-phara">
              Without improvements in conversion rates or customer lifetime
              value, margins compress.
            </p>
            <p className="section-phara">
              The second issue is diminishing audience returns. Paid campaigns
              rely on defined audience pools.
            </p>
            <p className="section-phara">
              Over time, ad fatigue reduces engagement, forcing businesses to
              expand targeting or increase spend to maintain results.
            </p>
            <p className="section-phara">
              Third, performance marketing without organic authority reduces
              trust. Users often click ads but research the brand organically
              before converting.
            </p>
            <p className="section-phara">
              If organic presence is weak, conversion rates drop. This increases
              the effective cost of paid acquisition.
            </p>
            <p className="section-phara">
              There is also the psychological dependency factor. When
              performance marketing delivers quick wins, businesses often
              increase spend rapidly.
            </p>
            <p className="section-phara">
              However, if underlying funnel mechanics are not optimised, higher
              spend does not proportionally increase revenue.
            </p>
            <p className="section-phara">
              Performance marketing also struggles with retention unless
              integrated with lifecycle systems. Acquiring new customers
              repeatedly is more expensive than nurturing existing ones. Without
              retention strategies, marketing costs escalate.
            </p>
            <p className="section-phara">In simplified terms:</p>
            <p className="section-phara">Performance marketing buys access.</p>
            <p className="section-phara">
              But it does not automatically build equity.
            </p>
            <p className="section-phara">
              Used strategically, it accelerates growth. Used exclusively, it
              becomes a recurring cost center vulnerable to market fluctuations
              and platform changes.
            </p>
            <p className="section-phara">
              Performance marketing performs best when supported by SEO
              visibility, conversion optimisation, and customer retention
              systems.
            </p>
          </Section>
          <Section
            id="why-growth-marketing-fails-without-foundation"
            title="Why Growth Marketing Fails Without Foundation"
          >
            <p className="section-phara">
              Growth marketing sounds comprehensive, and it is. But its strength
              can become a weakness if foundational elements are missing.
            </p>
            <p className="section-phara">
              Growth marketing depends on reliable data. Without clean
              analytics, attribution clarity, and structured tracking,
              experimentation becomes guesswork.
            </p>
            <p className="section-phara">
              Businesses may run A/B tests and optimise messaging without
              understanding what actually drives revenue.
            </p>
            <p className="section-phara">
              It also depends on traffic stability. If acquisition channels are
              inconsistent, growth marketing cannot test effectively.
            </p>
            <p className="section-phara">
              Experimentation requires volume. Without either SEO or performance
              marketing delivering steady traffic, growth efforts stall.
            </p>
            <p className="section-phara">
              Another common issue is over-complexity. Some businesses adopt
              growth marketing terminology without building operational
              capacity.
            </p>
            <p className="section-phara">
              Multiple tools, dashboards, and experiments are introduced without
              alignment. Instead of creating clarity, the system becomes
              fragmented.
            </p>
            <p className="section-phara">
              Growth marketing also fails when leadership expects immediate
              transformation. True growth optimisation improves efficiency
              gradually, through small percentage gains in conversion,
              retention, and funnel velocity.
            </p>
            <p className="section-phara">
              These incremental gains compound over time, but they require
              patience and discipline.
            </p>

            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Most importantly:
              </h3>
              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Growth marketing cannot replace SEO.",
                    desc: "",
                  },
                  {
                    title: "	It cannot replace performance marketing.",
                    desc: "",
                  },
                  {
                    title: "	It integrates and enhances them.",
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
              Without organic authority, paid acceleration, and conversion
              structure, growth marketing becomes theoretical. With them, it
              becomes powerful.
            </p>
            <p className="section-phara">
              When implemented correctly, growth marketing transforms digital
              marketing from a collection of channels into a unified revenue
              system.
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
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "what-seo-actually-is-and-what-it-is-not",
    level: 1,
    label: "What SEO Actually Is",
  },
  {
    id: "what-performance-marketing-really-means",
    level: 1,
    label: "What Performance Marketing Really Means",
  },
  {
    id: "what-growth-marketing-actually-encompasses",
    level: 1,
    label: "What Growth Marketing Actually Encompasses",
  },
  {
    id: "why-these-three-are-not-interchangeable",
    level: 1,
    label: "Why These Three Are Not Interchangeable",
  },
  {
    id: "timeline-comparison-short-term-vs-mid-term-vs-long-term-roi",
    level: 1,
    label: "Timeline Comparison & ROI",
  },
  {
    id: "structured-data-apis-and-ai-visibility",
    level: 1,
    label: "Structured Data, APIs, and AI Visibility",
  },
  {
    id: "where-seo-alone-breaks-down",
    level: 1,
    label: "Where SEO Alone Breaks Down",
  },
  {
    id: "where-performance-marketing-alone-becomes-expensive",
    level: 1,
    label: "Where Performance Marketing Alone Becomes Expensive",
  },
  {
    id: "why-growth-marketing-fails-without-foundation",
    level: 1,
    label: "Why Growth Marketing Fails Without Foundation",
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
      <p className="section-title mb-4 text-left text-3xl">
        <em>
          Why Most Businesses Confuse SEO, Performance Marketing, and Growth
          Marketing
        </em>
      </p>
      <p className="section-phara">
        If you walk into any boardroom discussion about hiring a{" "}
        <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency Chennai
        </Link>{" "}
        businesses trust, you’ll hear the same words used interchangeably:{" "}
      </p>
      <p className="section-phara italic">“We need better SEO.”</p>

      <p className="section-phara">
        “Let’s increase performance marketing.” “We should shift to growth
        marketing.” On the surface, they sound related.
        {/* <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          digital marketing Chennai
        </Link> */}{" "}
      </p>
      <p className="section-phara">
        In practice, they are fundamentally different strategies built for
        different timelines, budgets, and business objectives.
      </p>
      <p className="section-phara">
        This confusion is not harmless. It directly affects how companies
        allocate budgets, measure results, and evaluate marketing partners. When
        SEO is expected to generate instant leads like paid ads, frustration
        builds.
      </p>
      <p className="section-phara ">
        When performance marketing is expected to create long-term brand equity,
        costs spiral. When growth marketing is attempted without foundational
        visibility or conversion systems, strategies collapse under their own
        weight.
      </p>
      <div className="ml-10 mb-6">
        {/* Title */}
        <h3 className="section-title text-2xl text-secondary text-left my-5">
          Here’s the core problem in simple terms:
        </h3>

        {/* List */}
        <ul className="mt-6 space-y-4">
          {[
            {
              title: "	SEO captures demand.",
              desc: "",
            },
            {
              title: "	Performance marketing accelerates demand.",
              desc: "",
            },
            {
              title: "	Growth marketing optimizes the entire revenue system.",
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
                <p className="text-lg font-medium text-black">{item.title}</p>
                <p className="section-phara text-black/80 text-base">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="section-phara">
        Yet many businesses treat them as substitutes rather than
        components.{" "}
      </p>
      <p className="section-phara">The result?</p>
      <p className="section-phara">
        {" "}
        Misaligned expectations, unrealistic KPIs, and marketing decisions
        driven by impatience instead of structure.{" "}
      </p>
      <p className="section-phara">
        {" "}
        The confusion usually begins with terminology. Agencies promote services
        based on what they specialize in. Founders and marketing heads adopt
        those terms without fully understanding the operational differences.
      </p>
      <p className="section-phara">
        {" "}
        Over time, strategy conversations become muddled. SEO is blamed for slow
        results. Paid ads are blamed for rising costs. Growth marketing becomes
        a vague promise rather than a defined system.
      </p>
      <p className="section-phara">
        {" "}
        Understanding the distinctions between these three approaches is not a
        theoretical exercise. It determines whether your marketing becomes a
        compounding asset, or a recurring expense that constantly demands
        reinvention.{" "}
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
      q: "What is the main difference between SEO and performance marketing?",
      a: `SEO focuses on improving organic search visibility to capture existing demand over time, while performance marketing uses paid advertising to generate immediate traffic and measurable results. SEO compounds gradually, whereas performance marketing delivers faster but budget-dependent outcomes.`,
    },
    {
      q: "How does growth marketing differ from traditional digital marketing?",
      a: `Growth marketing optimizes the entire customer journey, from acquisition to retention, using data-driven experimentation. Traditional digital marketing often focuses only on traffic generation or brand visibility without full-funnel optimization.`,
    },
    {
      q: "Is SEO better than performance marketing?",
      a: `Neither is universally better. SEO provides long-term organic visibility, while performance marketing delivers quick results. The right choice depends on business stage, revenue goals, and time horizon.`,
    },
    {
      q: "When should a business prioritize performance marketing?",
      a: `Businesses should prioritize performance marketing when launching new products, entering new markets, or needing immediate lead generation. It is especially effective for testing demand quickly.`,
    },
    {
      q: "Why does performance marketing become expensive over time?",
      a: `Performance marketing costs increase due to competition, audience fatigue, and rising ad bids. Without conversion optimization and organic support, customer acquisition costs tend to rise gradually.`,
    },
    {
      q: "Can growth marketing replace SEO and paid advertising?",
      a: `No. Growth marketing integrates SEO and paid advertising but does not replace them. It improves efficiency across acquisition, conversion, and retention channels.`,
    },
    {
      q: "How should businesses combine SEO, performance marketing, and growth marketing?",
      a: `Businesses should build SEO as a foundation, use performance marketing for acceleration, and apply growth marketing to optimize the entire revenue system. This layered approach creates sustainable and scalable results.`,
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





