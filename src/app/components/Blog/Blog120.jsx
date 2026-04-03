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
export default function AEOArticlePage120() {
  const post = POSTS.find((p) => p.id === 120) || POSTS[0];

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
              9 SEO Strategies That Still Work in 2026 and 5 That No Longer Do
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
            id="why-seo-is-not-working"
            title="Why SEO Is Not Working for Many Businesses in 2026"
          >
            <p className="section-phara">
              If SEO feels harder today than it did a few years ago, it is not
              because SEO stopped working. It is because the way search engines
              evaluate websites has changed.
            </p>
            <p className="section-phara">
              Many businesses are still following old optimization methods while
              Google is ranking pages based on relevance, experience, authority,
              and user intent.
            </p>
            <p className="section-phara">
              When the strategy does not match the current algorithm, rankings
              drop even if the effort is high.
            </p>
            <p className="section-phara">
              One of the most common reasons SEO fails is that companies focus
              on activity instead of strategy.
            </p>
            <p className="section-phara">
              Publishing blogs regularly, adding keywords everywhere, or
              building random backlinks does not guarantee rankings anymore.
            </p>
            <p className="section-phara">
              In fact, these practices can sometimes make performance worse.
              Many of the problems businesses face today are the same{" "}
              <Link
                href="https://www.ayatiworks.com/blogs/seo/9-seo-mistakes-chennai-businesses-make-that-stop-them-from-ranking"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                SEO mistakes businesses make
              </Link>{" "}
              when they try to follow outdated advice without understanding how
              modern search works.
            </p>
            <p className="section-phara">
              Another major issue is ignoring search intent.
            </p>
            <p className="section-phara">
              In 2026, Google is not just matching keywords, it is matching
              meaning. If a page does not clearly answer what the user is
              looking for, it will not rank, no matter how many times the
              keyword appears.
            </p>
            <p className="section-phara">
              This is why websites with fewer pages but better content often
              perform better than sites that publish large amounts of
              low-quality articles.
            </p>
            <p className="section-phara">
              Technical quality also plays a bigger role now. Slow websites,
              poor mobile experience, broken internal links, and unstructured
              content can reduce rankings even when the content itself is good.
            </p>
            <p className="section-phara">
              Search engines want to recommend pages that users can trust and
              navigate easily, not just pages that contain keywords.
            </p>
            <p className="section-phara">
              Consistency is another factor many businesses underestimate. SEO
              today is not about quick results.
            </p>
            <p className="section-phara">
              It requires planning, structured content, proper linking, and
              regular updates.
            </p>
            <p className="section-phara">
              Companies that treat SEO as a one-time task often believe it is
              not working, while those who follow a long-term approach continue
              to see steady growth.
            </p>
            <p className="section-phara">
              To understand what actually works now, it is important to separate
              proven SEO strategies from methods that are no longer effective.
            </p>
            <p className="section-phara"></p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="mistake-1-treating-seo-as-a-one-time-activity"
            title="9 SEO Strategies That Still Work in 2026"
          >
            <SectionH3
              id="strategy-1"
              title="Strategy #1 — Topical Authority Still Beats Random Blogging"
            >
              <p className="section-phara ">
                Publishing random blogs is no longer enough to rank.
              </p>
              <p className="section-phara">
                In 2026, search engines look for websites that demonstrate depth
                in a specific subject, not just surface-level content across
                multiple topics.
              </p>
              <p className="section-phara">
                Topical authority means covering a subject completely, from
                basic concepts to advanced insights, through interconnected
                content.
              </p>
              <p className="section-phara">
                Instead of writing isolated blogs, businesses need to build
                content clusters where each page supports another.
              </p>
              <p className="section-phara">
                This helps search engines understand that your website is a
                reliable source in that domain.
              </p>
              <p className="section-phara">
                For modern businesses, this is critical not just for SEO but
                also for AEO and AI-driven search.
              </p>
              <p className="section-phara">
                When AI tools generate answers, they prioritize sources that
                show consistency and depth.
              </p>
              <p className="section-phara">
                A website with structured content around a niche is far more
                likely to be referenced than one publishing scattered articles.
              </p>
              <div className="relative my-8 w-full overflow-hidden rounded-xl shadow-lg border border-slate-200">
                <Image
                  src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blog-120-img-1.png"
                  alt="SEO strategies 2026 infographic showing 9 modern SEO techniques including AEO, GEO and AI SEO practices"
                  width={800}
                  height={2000}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 680px"
                />
              </div>
            </SectionH3>
            <SectionH3
              id="strategy-2"
              title="Strategy #2 — Helpful Content + EEAT Is Non-Negotiable"
            >
              <p className="section-phara">
                Content today is evaluated beyond keywords. Search engines now
                focus on whether the content is genuinely useful, accurate, and
                created by someone with real understanding.
              </p>
              <p className="section-phara">
                EEAT: Experience, Expertise, Authoritativeness, and Trust, plays
                a major role in rankings. Businesses need to create content that
                reflects real-world knowledge, not just rewritten information.
              </p>
              <p className="section-phara">
                Generic content is easy for AI to generate, but what ranks is
                content that adds value through clarity, examples, and
                relevance.
              </p>
              <p className="section-phara">
                This is where many companies struggle. They produce content, but
                it does not help the user take action or understand the topic
                better.
              </p>
              <p className="section-phara">
                In contrast, helpful content answers real questions clearly and
                directly, which also improves visibility in AI-generated search
                results.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-3"
              title="Strategy #3 — Search Intent Optimization Wins Rankings"
            >
              <p className="section-phara">
                Keyword targeting alone is no longer enough. In 2026,
                understanding why a user is searching matters more than what
                they are searching.
              </p>
              <p className="section-phara">
                Search intent can be informational, transactional, or
                navigational. If your content does not match that intent, it
                will not rank, even if it is well-written.
              </p>
              <p className="section-phara">
                For example, a user searching for &ldquo;SEO strategies
                2026&rdquo; expects insights and actionable ideas, not a sales
                pitch.
              </p>
              <p className="section-phara">
                Modern SEO requires structuring content in a way that directly
                answers user queries. This is also essential for AEO, where
                content needs to be clear enough for search engines and AI tools
                to extract answers easily.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-4"
              title="Strategy #4 — Internal Linking Is More Important Than Ever"
            >
              <p className="section-phara">
                Internal linking is no longer just a supporting tactic, it is a
                core ranking factor. It helps search engines understand the
                relationship between pages and distributes authority across your
                website.
              </p>
              <p className="section-phara">
                A strong internal linking structure improves crawlability,
                increases time on site, and guides users toward relevant
                content. It also strengthens topical authority by connecting
                related pages into a meaningful structure.
              </p>
              <p className="section-phara">
                For businesses investing in long-term growth, this is where
                professional{" "}
                <Link
                  href="https://www.ayatiworks.com/seo-services"
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  SEO services
                </Link>{" "}
                play a critical role. A well-planned internal linking strategy
                ensures that every piece of content contributes to overall
                visibility, rather than existing in isolation.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-5"
              title="Strategy #5 — Long-Form Content Still Ranks (If Structured Correctly)"
            >
              <p className="section-phara">
                Long-form content continues to perform well, but only when it is
                easy to read and properly structured. Simply writing 1500+ words
                is not enough.
              </p>
              <p className="section-phara">In 2026, content needs to be:</p>
              <ul className="list-disc pl-6 space-y-1 section-phara">
                <li>Scannable</li>
                <li>Logically structured</li>
                <li>Broken into sections</li>
                <li>Easy to navigate</li>
              </ul>
              <p className="section-phara">
                Search engines prefer content that is comprehensive but also
                user-friendly. This is especially important for AI-driven
                results, where structured content is easier to extract and
                summarize.
              </p>
              <p className="section-phara">
                Businesses should focus on clarity, not length. A
                well-structured article that answers multiple related questions
                will always outperform a long but unorganized page.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-6"
              title="Strategy #6 — Local SEO Is Stronger Than Ever"
            >
              <p className="section-phara">
                Local SEO has become more important as users increasingly search
                for services &ldquo;near me&rdquo; or within specific locations.
                Google prioritizes businesses that are relevant, trustworthy,
                and locally optimized.
              </p>
              <p className="section-phara">
                For companies operating in competitive markets, local SEO helps
                attract high-intent users who are ready to take action.
                Optimizing Google Business profiles, building local citations,
                and creating location-based content are essential steps.
              </p>
              <p className="section-phara">
                From an AEO perspective, local queries are often answered
                directly within search results. Businesses that optimize for
                local intent have a higher chance of appearing in these featured
                answers.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-7"
              title="Strategy #7 — Technical SEO Still Matters"
            >
              <p className="section-phara">
                No matter how good your content is, technical issues can prevent
                it from ranking. Website speed, mobile responsiveness, clean
                structure, and proper indexing are critical factors.
              </p>
              <p className="section-phara">
                Search engines prioritize websites that offer a smooth user
                experience. Pages that load slowly or are difficult to navigate
                are less likely to rank, even if the content is strong.
              </p>
              <p className="section-phara">
                Technical SEO also plays a role in GEO (AI search). AI systems
                prefer websites that are structured, fast, and easy to crawl, as
                this makes data extraction more reliable.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-8"
              title="Strategy #8 — Backlinks Still Work (But Only Quality Links)"
            >
              <p className="section-phara">
                Backlinks are still a strong ranking factor, but the focus has
                shifted from quantity to quality. A few relevant, high-authority
                links are far more valuable than hundreds of low-quality ones.
              </p>
              <p className="section-phara">
                Search engines evaluate backlinks based on relevance,
                credibility, and context. Links from trusted sources signal
                authority, while spammy links can harm rankings.
              </p>
              <p className="section-phara">
                For modern businesses, this means focusing on building
                relationships, earning mentions, and creating content worth
                linking to, rather than relying on shortcuts.
              </p>
            </SectionH3>

            <SectionH3
              id="strategy-9"
              title="Strategy #9 — Updating Old Content Gives Faster Results Than Creating New Content"
            >
              <p className="section-phara">
                One of the most overlooked strategies is updating existing
                content. In many cases, improving an old page can deliver faster
                results than publishing a new one.
              </p>
              <p className="section-phara">Updating content helps:</p>
              <ul className="list-disc pl-6 space-y-1 section-phara">
                <li>Improve relevance</li>
                <li>Align with current search intent</li>
                <li>Refresh outdated information</li>
                <li>Strengthen rankings</li>
              </ul>
              <p className="section-phara">
                Search engines prefer fresh, accurate content. Instead of
                constantly creating new blogs, businesses should audit existing
                pages and optimize them based on current SEO trends.
              </p>
              <p className="section-phara">
                This approach is also highly effective for AI visibility, as
                updated content is more likely to be considered reliable and
                relevant.
              </p>
            </SectionH3>

            <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl section-title text-left mb-3">
                Strategic Takeaway
              </h3>
              <p className="section-phara">
                SEO in 2026 is not about doing more, it is about doing the right
                things consistently. Businesses that focus on structured
                content, user intent, and long-term strategy will continue to
                see results, while those relying on outdated methods will
                struggle.
              </p>
            </div>
          </Section>

          {/* 5 SEO Strategies That No Longer Work */}
          <Section
            id="seo-strategies-that-no-longer-work"
            title="5 SEO Strategies That No Longer Work in 2026"
          >
            <SectionH3 id="outdated-1" title="Outdated #1 — Keyword Stuffing">
              <p className="section-phara">
                There was a time when repeating a keyword multiple times could
                help a page rank. That no longer works.
              </p>
              <p className="section-phara">
                In 2026, search engines understand context, meaning, and user
                intent. Overusing keywords not only reduces readability but can
                also signal low-quality content. Instead of improving rankings,
                it can actually hurt performance.
              </p>
              <p className="section-phara">
                Modern SEO focuses on natural language, topic relevance, and
                clarity. Content should read like it is written for a human, not
                optimized for a machine.
              </p>
              <p className="section-phara">
                This is even more important for AEO and AI search, where clear
                and natural answers are prioritized over forced keyword
                placement.
              </p>
            </SectionH3>

            <div className="relative my-8 w-full overflow-hidden rounded-xl shadow-lg border border-slate-200">
              <Image
                src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blog-120-img-2.png"
                alt="SEO strategies 2026 infographic showing 9 modern SEO techniques including AEO, GEO and AI SEO practices"
                width={800}
                height={2000}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 680px"
              />
            </div>

            <SectionH3
              id="outdated-2"
              title="Outdated #2 — Writing Content Without Search Intent"
            >
              <p className="section-phara">
                Many businesses still create content based on what they want to
                say instead of what users are searching for. This disconnect is
                one of the biggest reasons content fails to rank.
              </p>
              <p className="section-phara">
                If the intent behind a search query is not addressed clearly,
                the content will not perform, regardless of how well it is
                written. For example, a user looking for solutions does not want
                a general explanation, and someone researching does not want a
                sales pitch.
              </p>
              <p className="section-phara">
                In modern SEO, every piece of content must align with a specific
                intent. This is also critical for AEO, where search engines
                extract direct answers. Content that does not match intent is
                simply ignored.
              </p>
            </SectionH3>

            <SectionH3
              id="outdated-3"
              title="Outdated #3 — Buying Cheap or Spam Backlinks"
            >
              <p className="section-phara">
                Building large numbers of low-quality backlinks used to be a
                shortcut to rankings. Today, it is one of the fastest ways to
                damage a website&rsquo;s credibility.
              </p>
              <p className="section-phara">
                Search engines have become highly effective at identifying
                unnatural link patterns. Links from irrelevant or spammy
                websites do not add value and can lead to penalties or reduced
                visibility.
              </p>
              <p className="section-phara">
                In 2026, backlinks need to be earned, not bought. Relevance,
                authority, and context matter more than volume. Businesses that
                focus on genuine link-building strategies see long-term results,
                while shortcuts rarely work anymore.
              </p>
            </SectionH3>

            <SectionH3
              id="outdated-4"
              title="Outdated #4 — Publishing High Volume, Low-Quality Content"
            >
              <p className="section-phara">
                More content does not mean better results. Many businesses still
                believe that publishing frequently will improve rankings, but
                this approach often leads to the opposite outcome.
              </p>
              <p className="section-phara">
                Search engines now prioritize quality over quantity. Large
                volumes of thin or repetitive content dilute website authority
                and reduce overall performance. Instead of ranking multiple
                pages, none of them perform well.
              </p>
              <p className="section-phara">
                From an AI and GEO perspective, low-quality content is rarely
                referenced or surfaced in results. What matters is depth,
                clarity, and usefulness, not how many blogs are published.
              </p>
            </SectionH3>

            <SectionH3
              id="outdated-5"
              title="Outdated #5 — Ignoring User Experience and Page Quality"
            >
              <p className="section-phara">
                SEO is no longer limited to content and keywords. User
                experience plays a major role in how pages are ranked.
              </p>
              <p className="section-phara">
                Websites that are slow, difficult to navigate, or poorly
                structured struggle to retain users. High bounce rates and low
                engagement signal to search engines that the page is not
                valuable.
              </p>
              <p className="section-phara">
                Modern SEO requires a balance between content and experience.
                Pages need to load quickly, be mobile-friendly, and present
                information clearly. This is especially important for AI-driven
                results, where structured and user-friendly pages are easier to
                process and recommend.
              </p>
            </SectionH3>

            <div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-200">
              <h3 className="text-xl section-title text-left mb-3">
                Strategic Contrast
              </h3>
              <p className="section-phara">
                The difference between what works and what doesn&rsquo;t in 2026
                is clear. SEO is no longer about shortcuts, volume, or
                manipulation. It is about:
              </p>
              <ul className="list-disc pl-6 space-y-1 section-phara">
                <li>Relevance</li>
                <li>Clarity</li>
                <li>Structure</li>
                <li>Consistency</li>
                <li>Real value</li>
              </ul>
              <p className="section-phara mt-3">
                Businesses that continue to rely on outdated practices will
                struggle to see results, while those that adapt to modern SEO,
                AEO, and AI-driven search will continue to grow.
              </p>
            </div>
          </Section>

          {/* Why Most Businesses Still Use Outdated SEO Methods */}
          <Section
            id="why-businesses-use-outdated-seo"
            title="Why Most Businesses Still Use Outdated SEO Methods"
          >
            <p className="section-phara">
              If SEO has evolved so much, why are businesses still following
              outdated strategies?
            </p>
            <p className="section-phara">
              The main reason is familiarity. Many companies continue to rely on
              methods that worked in the past because they are comfortable and
              easy to execute. Keyword stuffing, bulk content publishing, and
              low-cost link building are still widely used simply because they
              require less strategic thinking.
            </p>
            <p className="section-phara">
              Another reason is misinformation. SEO advice online is often
              outdated or oversimplified. Businesses follow generic checklists
              without understanding how search engines actually work today. As a
              result, they invest time and money into activities that do not
              produce results.
            </p>
            <p className="section-phara">
              There is also a gap between execution and strategy. Many teams
              focus on doing SEO tasks rather than building a structured
              approach. Without a clear plan, even good efforts fail to deliver
              consistent growth.
            </p>
            <p className="section-phara">
              Finally, some businesses expect quick results. Modern SEO is a
              long-term process, but outdated tactics promise faster outcomes.
              This creates a false sense of progress in the beginning, followed
              by a drop in performance over time.
            </p>
            <p className="section-phara">
              The reality is simple, SEO has not stopped working. The approach
              has changed. Businesses that continue to use old methods are not
              failing because of SEO, but because of the strategy behind it.
            </p>
          </Section>

          {/* How to Build an SEO Strategy That Works in 2026 */}
          <Section
            id="how-to-build-seo-strategy-2026"
            title="How to Build an SEO Strategy That Works in 2026"
          >
            <p className="section-phara">
              Building an effective SEO strategy today requires more than just
              content creation or keyword targeting. It requires a structured
              approach aligned with how search engines and users behave.
            </p>
            <p className="section-phara">
              Start by understanding your audience and their search intent.
              Every piece of content should solve a specific problem or answer a
              clear question. This ensures relevance, which is the foundation of
              modern SEO and AEO.
            </p>
            <p className="section-phara">
              Next, focus on building topical authority. Instead of publishing
              random blogs, create clusters of related content that cover a
              subject in depth. This helps search engines recognize your website
              as a reliable source in that area.
            </p>
            <p className="section-phara">
              Content should be helpful, clear, and easy to navigate. Structure
              matters, use headings, logical flow, and simple language so both
              users and AI systems can understand the content easily.
            </p>
            <p className="section-phara">
              Technical performance cannot be ignored. A fast, mobile-friendly,
              and well-structured website improves both rankings and user
              experience. Without this foundation, even high-quality content may
              struggle to perform.
            </p>
            <p className="section-phara">
              Internal linking should connect all relevant pages to guide users
              and strengthen authority. This ensures that your content works
              together rather than competing with itself.
            </p>
            <p className="section-phara">
              Most importantly, SEO should be treated as an ongoing process.
              Regular updates, performance tracking, and content improvements
              are necessary to stay aligned with changing algorithms.
            </p>
            <p className="section-phara">
              Businesses looking to implement this effectively often need a
              clear and structured{" "}
              <Link
                href="https://www.ayatiworks.com/seo-services"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                SEO strategy for business growth
              </Link>
              , especially when scaling beyond basic optimization into long-term
              visibility.
            </p>
          </Section>

          {/* SEO in 2026: What Actually Drives Long-Term Growth */}
          <Section
            id="seo-long-term-growth"
            title="SEO in 2026: What Actually Drives Long-Term Growth"
          >
            <p className="section-phara">
              SEO success today is not driven by shortcuts or isolated efforts.
              It is built on consistency, clarity, and alignment with how search
              engines deliver results.
            </p>
            <p className="section-phara">
              Long-term growth comes from creating content that genuinely helps
              users, maintaining technical quality, and continuously improving
              existing pages. Websites that focus on these fundamentals build
              trust, both with users and search engines.
            </p>
            <p className="section-phara">
              AI-driven search and generative results are also shaping the
              future of SEO. Content that is structured, reliable, and easy to
              interpret has a higher chance of being surfaced in these
              environments. This makes clarity and depth more important than
              ever.
            </p>
            <p className="section-phara">
              Another key factor is adaptability. SEO will continue to evolve,
              and strategies that work today may change in the future.
              Businesses that monitor trends and refine their approach
              consistently are the ones that stay ahead.
            </p>
            <p className="section-phara">
              Ultimately, SEO in 2026 is not about chasing rankings. It is about
              building a strong digital presence that attracts, engages, and
              converts the right audience over time.
            </p>
            <p className="section-phara">
              When done right, SEO becomes one of the most sustainable channels
              for business growth, not just in search rankings, but in long-term
              brand visibility and credibility.
            </p>
          </Section>

          {/* SEO Still Works in 2026 — But Only If Done Right */}
          <Section
            id="seo-still-works-2026"
            title="SEO Still Works in 2026 — But Only If Done Right"
          >
            <p className="section-phara">
              SEO has not become less effective, it has become more refined.
            </p>
            <p className="section-phara">
              What worked earlier was often based on shortcuts, volume, and
              basic optimization. Today, SEO is driven by relevance, intent,
              structure, and trust. Businesses that adapt to these changes
              continue to grow steadily, while those relying on outdated methods
              struggle to see results.
            </p>
            <p className="section-phara">
              The difference is not effort, it is direction.
            </p>
            <p className="section-phara">
              Modern SEO requires a clear strategy, consistent execution, and a
              focus on delivering real value to users. It is no longer about
              ranking for keywords alone, but about building a presence that
              search engines and AI systems recognize as reliable.
            </p>
            <p className="section-phara">
              As search continues to evolve with AI and generative results, the
              focus will remain the same, helping users find accurate, useful,
              and trustworthy information.
            </p>
            <p className="section-phara">
              Businesses that align with this approach will not just rank
              better, but build long-term visibility and credibility.
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

/* TOC items – Updated for 2026 SEO Strategies Blog */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "why-seo-is-not-working",
    level: 1,
    label: "Why SEO Feels Broken in 2026",
  },
  {
    id: "strategy-1",
    level: 1,
    label: "Strategy #1 — Topical Authority",
  },
  {
    id: "strategy-2",
    level: 1,
    label: "Strategy #2 — Helpful Content + EEAT",
  },
  {
    id: "strategy-3",
    level: 1,
    label: "Strategy #3 — Search Intent Optimization",
  },
  {
    id: "strategy-4",
    level: 1,
    label: "Strategy #4 — Internal Linking",
  },
  {
    id: "strategy-5",
    level: 1,
    label: "Strategy #5 — Structured Long-Form Content",
  },
  {
    id: "strategy-6",
    level: 1,
    label: "Strategy #6 — Local SEO",
  },
  {
    id: "strategy-7",
    level: 1,
    label: "Strategy #7 — Technical Performance",
  },
  {
    id: "strategy-8",
    level: 1,
    label: "Strategy #8 — Quality Backlinks",
  },
  {
    id: "strategy-9",
    level: 1,
    label: "Strategy #9 — Updating Content",
  },
  {
    id: "seo-strategies-that-no-longer-work",
    level: 1,
    label: "5 Outdated SEO Strategies",
  },
  {
    id: "why-businesses-use-outdated-seo",
    level: 1,
    label: "Why Businesses Use Outdated SEO",
  },
  {
    id: "how-to-build-seo-strategy-2026",
    level: 1,
    label: "How to Build an SEO Strategy",
  },
  {
    id: "seo-long-term-growth",
    level: 1,
    label: "What Drives Long-Term Growth",
  },
  {
    id: "seo-still-works-2026",
    level: 1,
    label: "Does Modern SEO Really Work?",
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
      <h2 className="section-title mb-4 text-left text-3xl">
        <em>Why SEO Feels Broken in 2026: But It Isn’t</em>
      </h2>
      <p className="section-phara italic">
        Aren’t we hearing a lot of this off late...{" "}
      </p>
      <p className="section-phara">SEO is a TRAP</p>
      <p className="section-phara">SEO is DEAD</p>
      <p className="section-phara">SEO isn’t working</p>
      <p className="section-phara">
        Most businesses are skeptical to take on SEO for their business, since
        they aren’t aware of it, neither are they getting the right agency or
        people to execute what they want.
      </p>
      <p className="section-phara">
        Again, it is very clear that search engine optimization has changed
        faster than ever before. Many businesses that invested in SEO earlier
        now feel frustrated because the same techniques are not giving the same
        results.
      </p>
      <p className="section-phara">
        Rankings drop without warning; traffic becomes inconsistent, and content
        that once ranked well suddenly disappears from search results.
      </p>
      <p className="section-phara">
        This has led to a common belief that SEO no longer works, when the real
        problem is that search engines have evolved.
      </p>
      <p className="section-phara">
        Google’s algorithm updates, AI-driven search results, helpful content
        guidelines, and stronger quality checks have completely changed how
        websites rank.
      </p>
      <p className="section-phara">
        Strategies that worked five years ago may not work today, and businesses
        that continue to follow outdated methods often struggle to see growth.
        This is why working with an experienced{" "}
        <Link
          href="https://www.ayatiworks.com/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          digital marketing agency in Chennai
        </Link>{" "}
        becomes important, especially when SEO requires a structured approach
        based on current ranking factors instead of old practices.
      </p>
      <p className="section-phara">
        Another reason for the confusion is that SEO today is not just about
        keywords or backlinks.
      </p>
      <p className="section-phara">
        Search engines now evaluate user intent, content quality, website
        experience, authority, and consistency.
      </p>
      <p className="section-phara">
        Companies that adapt to these changes continue to grow, while those that
        rely on old tactics assume SEO has stopped working.
      </p>
      <p className="section-phara">
        To understand the difference, we need to look at what still works in
        modern SEO and what no longer helps websites rank.
      </p>
      <p className="section-phara">
        The strategies that succeed in 2026 are very different from the ones
        businesses used in the past.
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

function SectionH3({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h3 className="mt-8 text-left text-2xl section-title">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "1. Does SEO still work in 2026?",
      a: "Yes, SEO is still one of the most effective digital marketing strategies. However, the approach has changed. Success now depends on content quality, user intent, and overall website experience rather than just keywords and backlinks.",
    },
    {
      q: "2. What is the biggest change in SEO today?",
      a: "The biggest shift is the move toward intent-based and AI-driven search. Search engines now focus on understanding user queries and delivering the most relevant and helpful results, not just matching keywords.",
    },
    {
      q: "3. What is AEO and why is it important?",
      a: "AEO (Answer Engine Optimization) focuses on structuring content so it can be directly picked up by search engines and AI tools as answers. This improves visibility in featured snippets and AI-generated results.",
    },
    {
      q: "4. What is GEO in SEO?",
      a: "GEO (Generative Engine Optimization) refers to optimizing content for AI-driven search platforms. It involves creating clear, structured, and trustworthy content that AI systems can easily interpret and present.",
    },
    {
      q: "5. How long does SEO take to show results?",
      a: "SEO is a long-term strategy. Depending on competition and consistency, it can take a few months to start seeing results. However, once established, it delivers sustainable growth.",
    },
    {
      q: "6. Is content still important for SEO?",
      a: "Yes, content remains a core part of SEO. But it must be helpful, relevant, and well-structured. Simply publishing content without strategy will not produce results.",
    },
    {
      q: "7. Should businesses focus more on SEO or AI search?",
      a: "Both are connected. SEO now includes optimizing for AI search. Businesses should focus on creating content that works for both traditional search engines and AI-driven platforms.",
    },
    {
      q: "8. What is the most effective SEO strategy today?",
      a: "The most effective approach combines:\n• strong content\n• clear intent targeting\n• technical optimization\n• internal linking\n• continuous updates\n\nSEO today is about building a complete system, not isolated efforts.",
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
