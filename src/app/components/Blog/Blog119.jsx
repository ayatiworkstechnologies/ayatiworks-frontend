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
export default function AEOArticlePage119() {
  const post = POSTS.find((p) => p.id === 119) || POSTS[0];

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
              "http://89.167.92.220:8088/author/daniel.png",
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
              Why Chennai Businesses Struggle to Rank on Google: 9 SEO Mistakes
              You Should Fix
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
            id="how-seo-has-changed-in-the-last-few-years"
            title="How SEO Has Changed in the Last Few Years"
          >
            <p className="section-phara">
              A few years ago, ranking on Google was much simpler than it is
              today. Many businesses could get visibility just by adding
              keywords to their pages, writing a few blog posts, and getting
              some backlinks.
            </p>
            <p className="section-phara">
              That approach worked when competition was lower and search engines
              were not as advanced as they are now.
            </p>
            <p className="section-phara">
              But the way Google understands websites has changed significantly,
              and strategies that worked earlier do not always give the same
              results anymore.
            </p>
            <p className="section-phara">
              One of the biggest changes is how search engines interpret
              content. Earlier, SEO was mostly about matching keywords.
            </p>
            <p className="section-phara">
              Today, Google tries to understand context, intent, and relevance.
              This means a page is no longer ranked just because it contains
              certain words, but because it actually answers what the user is
              looking for.
            </p>
            <p className="section-phara">
              With the rise of AI-driven search results, featured snippets, and
              answer-based queries, websites need to show depth, clarity, and
              authority rather than just keyword presence.
            </p>
            <p className="section-phara">
              Another major shift is the growing importance of technical
              performance. Slow loading pages, poor mobile experience, indexing
              errors, or broken links can affect rankings even if the content
              itself is good.
            </p>
            <p className="section-phara">
              Search engines now evaluate how a website works, not just what it
              says.
            </p>
            <p className="section-phara">
              This is why many businesses that focus only on content or only on
              keywords often struggle to see consistent improvement, because
              modern SEO requires both technical strength and content relevance
              working together.
            </p>
            <p className="section-phara">
              Content expectations have also changed. Publishing random blogs
              without a clear structure no longer helps much, especially in
              competitive industries.
            </p>
            <p className="section-phara">
              Search engines now prefer websites that build topical authority,
              where multiple pages are connected around a subject instead of
              existing as isolated pieces.
            </p>
            <p className="section-phara">
              This is one reason why businesses that rely on outdated methods
              often feel like SEO is not working, when in reality the rules have
              simply become more demanding.
            </p>
            <p className="section-phara">
              Because of these changes, small mistakes that were once harmless
              can now stop a website from ranking at all, even when the business
              itself is well established and experienced in its field.
            </p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="mistake-1-treating-seo-as-a-one-time-activity"
            title="Mistake #1 – Treating SEO as a One-Time Activity"
          >
            <p className="section-phara ">
              One of the most common reasons websites fail to rank consistently
              is the belief that SEO is something that can be done once and then
              forgotten.
            </p>
            <p className="section-phara">
              Many businesses invest in optimisation when the website is
              launched, make a few updates for a couple of months, and then
              assume the work is complete.
            </p>
            <p className="section-phara">
              When rankings do not improve, the conclusion is often that SEO
              does not work, when in reality the process was never continued
              long enough to produce results.
            </p>
            <p className="section-phara">
              Search engines constantly update how they evaluate websites.
            </p>
            <p className="section-phara">
              Google alone makes thousands of changes every year, some small and
              some significant enough to affect rankings across entire
              industries.
            </p>
            <p className="section-phara">
              Because of this, websites that are not updated regularly tend to
              lose visibility over time, even if they were ranking well earlier.
            </p>
            <p className="section-phara">
              What worked a year ago may not be enough today, especially in
              competitive markets where other companies are actively improving
              their content and technical performance.
            </p>
            <p className="section-phara">
              Another factor many businesses underestimate is how long it takes
              to build authority. Search engines look at consistency, relevance,
              and trust signals over time.
            </p>
            <p className="section-phara">
              A website that publishes useful content regularly, fixes technical
              issues, and keeps improving its structure gradually becomes more
              reliable in the eyes of search engines.
            </p>
            <p className="section-phara">
              On the other hand, a site that stays unchanged for months often
              struggles to compete, even if the business itself is well
              established offline.
            </p>
            <p className="section-phara">
              SEO also depends heavily on content freshness. When competitors
              continue to add new pages, update old content, and strengthen
              internal links, their websites slowly gain advantage. If
              optimisation stops after the initial setup, rankings usually stop
              improving as well.
            </p>
            <p className="section-phara">
              This is why SEO works best when it is treated as an ongoing
              process rather than a one-time task completed during website
              development.
            </p>
            <p className="section-phara">
              In most cases, the difference between websites that rank and those
              that do not is not a secret technique, but consistent effort
              applied over a longer period of time.
            </p>
            <div className="relative my-8 w-full overflow-hidden rounded-xl shadow-lg border border-slate-200">
              <Image
                src="http://89.167.92.220:8088/assets/seo-mistakes-chennai-businesses-infographic.PNG"
                alt="9 SEO mistakes Chennai businesses make affecting Google rankings infographic"
                width={800}
                height={2000}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 680px"
              />
            </div>
          </Section>

          {/* STEP 2 */}
          <Section
            id="mistake-2-targeting-keywords-without-understanding-search-intent"
            title="Mistake #2 – Targeting Keywords Without Understanding Search Intent"
          >
            <p className="section-phara">
              Another common reason many websites fail to rank, even after doing
              keyword research, is targeting the wrong kind of keywords.
            </p>
            <p className="section-phara">
              In many cases, businesses choose keywords based on what they think
              people search for, instead of understanding what users are
              actually trying to find.
            </p>
            <p className="section-phara">
              This may look like a small mistake, but it can completely affect
              how search engines evaluate a page.
            </p>
            <p className="section-phara">
              Search engines today do not rank pages only because a keyword is
              present.
            </p>
            <p className="section-phara">
              They try to understand the intent behind the search.
            </p>
            <p className="section-phara">
              For example, someone searching for “SEO services in Chennai” is
              usually looking for a company to hire, while someone searching for
              “what is SEO” is only looking for information.
            </p>
            <p className="section-phara">
              If a page is optimised for the wrong intent, it may never rank
              well even if the content is technically correct.
            </p>
            <p className="section-phara">
              This problem is very common among businesses that optimise their
              website without a clear strategy.
            </p>
            <p className="section-phara">
              A service page may target very broad keywords, while blog articles
              may target phrases that have no real connection to the business.
            </p>
            <p className="section-phara">
              As a result, the website gets traffic that does not convert or
              sometimes does not get traffic at all.
            </p>
            <p className="section-phara">
              When this happens, it often feels like SEO is not working, even
              though the real issue is that the content does not match what
              users are actually searching for.
            </p>
            <p className="section-phara">
              Another mistake is trying to rank for highly competitive keywords
              without building enough authority first.
            </p>
            <p className="section-phara">
              In cities like Chennai, many industries already have strong
              websites competing for the same search terms.
            </p>
            <p className="section-phara">
              Without supporting content, internal linking, and proper topic
              structure, it becomes difficult for new pages to gain visibility.
            </p>
            <p className="section-phara">
              This is why modern SEO usually involves building groups of related
              pages instead of focusing on a single keyword at a time.
            </p>
            <p className="section-phara">
              Understanding search intent also helps search engines trust the
              website more.
            </p>
            <p className="section-phara">
              When pages consistently answer the right kind of queries, the site
              gradually becomes more relevant for that topic.
            </p>
            <p className="section-phara">
              Over time, this makes it easier to rank for both informational and
              commercial searches, instead of struggling with every new page
              that gets published.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="mistake-3-ignoring-technical-seo-issues"
            title="Mistake #3 – Ignoring Technical SEO Issues"
          >
            <p className="section-phara">
              Another reason many websites struggle to rank is technical
              problems that go unnoticed.
            </p>
            <p className="section-phara">
              From the outside, a site may look perfectly fine.
            </p>
            <p className="section-phara">
              Pages open, images load, and everything seems normal.
            </p>
            <p className="section-phara">
              But search engines evaluate websites very differently from users,
              and small technical issues can prevent a page from performing well
              even if the content itself is strong.
            </p>
            <p className="section-phara">
              One of the most common problems is website speed.
            </p>
            <p className="section-phara">
              If pages take too long to load, search engines may consider the
              site less reliable, especially for mobile users.
            </p>
            <p className="section-phara">
              With most searches now happening on phones, performance has become
              an important ranking factor. A slow website not only affects
              visibility, but also makes visitors leave before they even read
              the content.
            </p>
            <p className="section-phara">
              Indexing problems are another issue many businesses are not aware
              of. Sometimes pages exist on the website but are not properly
              indexed by search engines, which means they never appear in search
              results.
            </p>
            <p className="section-phara">
              This can happen because of incorrect settings, missing technical
              tags, or errors during website updates.
            </p>
            <p className="section-phara">
              Without regular checks, these problems can continue for months
              without being noticed.
            </p>
            <p className="section-phara">
              Broken links, duplicate pages, and poor mobile layout can also
              affect how search engines evaluate a site.
            </p>
            <p className="section-phara">
              Even if these issues seem small, they reduce the overall quality
              signals that search engines look for. Over time, websites with
              clean structure, fast performance, and proper indexing slowly gain
              advantage, while others fall behind without any obvious reason.
            </p>
            <p className="section-phara">
              Technical SEO does not always get attention because it is not
              visible like content, but it plays a major role in whether a
              website can compete in search results, especially in industries
              where many businesses are already investing in optimisation.
            </p>
          </Section>
          <Section
            id="mistake-4-publishing-content-without-strategy"
            title="Mistake #4 – Publishing Content Without Strategy"
          >
            <p className="section-phara">
              Many businesses know that publishing content helps SEO, so they
              start writing blogs regularly.
            </p>
            <p className="section-phara">
              The problem is that most of this content is created without a
              clear plan.
            </p>
            <p className="section-phara">
              Topics are chosen randomly, sometimes based on what competitors
              are writing, sometimes based on what feels interesting at the
              moment.
            </p>
            <p className="section-phara">
              Over time, the website ends up with many articles, but none of
              them are connected in a way that helps search engines understand
              what the site should rank for.
            </p>
            <p className="section-phara">
              Search engines today look for structure, not just activity. When
              content is published without a strategy, each page stands alone
              and does not support the others.
            </p>
            <p className="section-phara">
              There is no clear topic focus, no internal linking pattern, and no
              build-up of authority around a subject.
            </p>
            <p className="section-phara">
              Because of this, even after writing dozens of blogs, the website
              may still struggle to rank for important keywords.
            </p>
            <p className="section-phara">
              Another common issue is that service pages and blog content are
              not linked properly.
            </p>
            <p className="section-phara">
              A business may have good articles explaining industry topics, but
              those articles never guide the reader towards the services
              offered.
            </p>
            <p className="section-phara">
              From a search engine’s point of view, the site looks like a
              collection of unrelated pages instead of a strong resource in one
              field.
            </p>
            <p className="section-phara">
              Websites that rank consistently usually have groups of related
              pages that support each other, making it easier for search engines
              to trust the site for that topic.
            </p>
            <p className="section-phara">
              Content also needs depth and consistency to build authority.
              Writing one article about a subject rarely makes a difference.
            </p>
            <p className="section-phara">
              But when multiple pages cover related questions, problems, and
              solutions, search engines start recognising the website as a
              reliable source.
            </p>
            <p className="section-phara">
              Without this kind of structure, publishing more content does not
              always improve rankings, and businesses often feel like they are
              putting effort without seeing results.
            </p>
          </Section>
          <Section
            id="mistake-5-expecting-fast-results-from-seo"
            title="Mistake #5 – Expecting Fast Results from SEO"
          >
            <p className="section-phara">
              One of the biggest misunderstandings about SEO is the expectation
              that results should appear quickly.
            </p>
            <p className="section-phara">
              Many businesses start optimisation work and expect to see rankings
              improve within a few weeks.
            </p>
            <p className="section-phara">
              When that does not happen, they assume something is wrong, or that
              SEO itself is not effective.
            </p>
            <p className="section-phara">
              In reality, search visibility takes time to build, especially in
              industries where many competitors are already investing in
              optimisation.
            </p>
            <p className="section-phara">
              Search engines evaluate websites based on consistency and trust,
              not just recent changes.
            </p>
            <p className="section-phara">
              A page that was updated last week will not immediately outrank
              pages that have been building authority for years.
            </p>
            <p className="section-phara">
              Factors like domain history, content depth, backlinks, and
              technical quality all influence how fast rankings can improve.
            </p>
            <p className="section-phara">
              In competitive markets, even small improvements may take time
              because other websites are also updating their content regularly.
            </p>
            <p className="section-phara">
              Another reason results take longer today is the level of
              competition in local search.
            </p>
            <p className="section-phara">
              In cities like Chennai, most established businesses already have
              websites, and many are actively working on SEO.
            </p>
            <p className="section-phara">
              This means new pages have to prove their relevance before they can
              move up in rankings.
            </p>
            <p className="section-phara">
              When expectations are based on short timelines, businesses often
              stop the process too early, just when the work is starting to make
              a difference.
            </p>
            <p className="section-phara">
              Shortcuts usually make the situation worse.
            </p>
            <p className="section-phara">
              Quick fixes, bulk backlinks, or low-quality content may show
              temporary changes, but they rarely hold rankings for long.
            </p>
            <p className="section-phara">
              Search engines are better at detecting these patterns now, and
              websites that rely on shortcuts often lose visibility instead of
              gaining it.
            </p>
            <p className="section-phara">
              Consistent work over time almost always performs better than
              trying to force results in a short period.
            </p>
            <p className="section-phara">
              SEO works best when it is treated as a gradual process.
            </p>
            <p className="section-phara">
              When the focus is on steady improvement instead of immediate
              ranking, the results tend to be more stable and easier to
              maintain.
            </p>
          </Section>

          <Section
            id="mistake-6-choosing-seo-based-only-on-price"
            title="Mistake #6 – Choosing SEO Based Only on Price"
          >
            <p className="section-phara">
              Another mistake that causes problems later is choosing SEO
              services only based on cost.
            </p>
            <p className="section-phara">
              When businesses compare different providers, the first thing they
              usually notice is the price difference.
            </p>
            <p className="section-phara">
              Some offers look much cheaper than others, which makes them seem
              like a better deal at the beginning.
            </p>
            <p className="section-phara">
              The issue is that SEO is not a fixed product, and lower pricing
              often means the scope of work is limited.
            </p>
            <p className="section-phara">
              This is why many companies spend time comparing different
              providers before deciding, often reviewing lists such as the{" "}
              <Link
                href="https://www.ayatiworks.com/blogs/seo/top-10-seo-agencies-in-chennai"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Top 10 SEO Agencies in Chennai
              </Link>{" "}
              to understand how pricing, experience, and service scope can vary
              from one agency to another.
            </p>
            <p className="section-phara">
              In many cases, low-cost SEO packages cover only basic tasks such
              as adding keywords to pages or creating a few backlinks every
              month.
            </p>
            <p className="section-phara">
              While these activities may help slightly, they are rarely enough
              to compete in industries where other companies are investing in
              content, technical improvements, and long-term authority building.
            </p>
            <p className="section-phara">
              When the work is limited, the results are also limited, even if
              the service is delivered exactly as promised.
            </p>
            <p className="section-phara">
              Another problem with very low pricing is the lack of clear
              strategy. Some providers focus only on individual tasks without
              looking at the overall structure of the website.
            </p>
            <p className="section-phara">
              There may be no proper keyword planning, no content roadmap, and
              no regular performance review. Without a clear direction, it
              becomes difficult to understand what is working and what needs to
              change.
            </p>
            <p className="section-phara">
              Reporting is also an area where differences become visible.
            </p>
            <p className="section-phara">
              Professional SEO usually includes regular updates on traffic,
              rankings, and technical performance.
            </p>
            <p className="section-phara">
              When reporting is missing or unclear, businesses often continue
              spending without knowing whether the work is actually improving
              search visibility.
            </p>
            <p className="section-phara">
              Choosing SEO only based on price often leads to repeating the same
              work with different providers without seeing real progress.
            </p>
            <p className="section-phara">
              In most cases, the better approach is to understand what work will
              be done, how long it may take, and how the strategy fits the level
              of competition in the industry before deciding.
            </p>
          </Section>
          <Section
            id="mistake-7-not-optimising-for-local-search"
            title="Mistake #7 – Not Optimising for Local Search"
          >
            <p className="section-phara">
              Many businesses focus only on general keywords and forget how
              important local search has become, especially for service-based
              companies.
            </p>
            <p className="section-phara">
              When someone searches for a product or service today, Google often
              shows results based on location.
            </p>
            <p className="section-phara">
              If the website and business profile are not properly optimised for
              local searches, it becomes very difficult to appear in front of
              the right audience, even if the service itself is strong.
            </p>
            <p className="section-phara">
              One of the most common gaps is not setting up or maintaining the
              Google Business Profile correctly.
            </p>
            <p className="section-phara">
              In many cases, the listing exists but is incomplete, outdated, or
              not linked properly to the website.
            </p>
            <p className="section-phara">
              Since local search results rely heavily on this information,
              missing details such as business category, location accuracy, or
              regular updates can reduce visibility without the business
              realising it.
            </p>
            <p className="section-phara">
              Keyword targeting also needs to reflect local intent.
            </p>
            <p className="section-phara">
              A company may optimise for broad terms, but people searching for
              services usually include city names or location-based phrases.
            </p>
            <p className="section-phara">
              Without pages and content that clearly connect the business to
              Chennai or specific service areas, search engines may not consider
              the website relevant for local results.
            </p>
            <p className="section-phara">
              Reviews and local citations also play a role. Search engines look
              at consistency across directories, listings, and customer feedback
              to decide which businesses to show first. When competitors have
              stronger local signals, they gradually move ahead even if the
              website content is similar.
            </p>
            <p className="section-phara">
              Local SEO is often ignored because the website itself looks fine,
              but small gaps in location signals can make a big difference in
              rankings, especially in competitive cities where many businesses
              are trying to appear for the same searches.
            </p>
          </Section>
          <Section
            id="mistake-8-ignoring-content-depth-and-topical-authority"
            title="Mistake #8 – Ignoring Content Depth and Topical Authority"
          >
            <p className="section-phara">
              Another reason many websites fail to rank consistently is the lack
              of depth in their content.
            </p>
            <p className="section-phara">
              A business may have a few service pages and some blog posts, but
              they are not enough to build authority in a competitive search
              environment.
            </p>
            <p className="section-phara">
              Search engines now look at how well a website covers a subject as
              a whole, not just how well one page is written.
            </p>
            <p className="section-phara">Thin content is a common issue.</p>
            <p className="section-phara">
              Pages may be too short, too general, or too similar to what other
              websites already have.
            </p>
            <p className="section-phara">
              When this happens, search engines have no reason to rank one site
              above another.
            </p>
            <p className="section-phara">
              Websites that perform better usually have detailed pages,
              supporting articles, and related topics connected in a clear
              structure.
            </p>
            <p className="section-phara">
              This makes it easier for search engines to understand what the
              site specialises in.
            </p>
            <p className="section-phara">
              Another mistake is publishing content without building a topic
              around it.
            </p>
            <p className="section-phara">
              Writing random blogs may add pages to the site, but it does not
              automatically increase authority.
            </p>
            <p className="section-phara">
              When multiple pages support each other and link naturally, the
              website starts to look more reliable for that subject.
            </p>
            <p className="section-phara">
              Content depth has become even more important with AI-driven search
              results. Search engines now prefer websites that provide complete
              answers, not just short explanations.
            </p>
            <p className="section-phara">
              Businesses that invest in stronger content structure usually see
              more stable rankings over time, while sites with limited content
              struggle to compete even if the design looks modern.
            </p>
          </Section>
          <Section
            id="mistake-9-not-tracking-seo-performance-properly"
            title="Mistake #9 – Not Tracking SEO Performance Properly"
          >
            <p className="section-phara">
              Many businesses assume SEO is working or not working based only on
              rankings, but that does not give the full picture.
            </p>
            <p className="section-phara">
              A page may move up or down in search results for different
              reasons, and without proper tracking it becomes difficult to
              understand what is actually improving and what needs to change.
            </p>
            <p className="section-phara">
              One common mistake is checking keyword positions occasionally and
              using that as the only measure of progress.
            </p>
            <p className="section-phara">
              Rankings can fluctuate often, especially in competitive
              industries, so looking at them alone does not show whether the
              overall visibility of the website is growing.
            </p>
            <p className="section-phara">
              Traffic quality, user behaviour, and conversions are just as
              important as keyword position.
            </p>
            <p className="section-phara">
              Another issue is not using the right tools to monitor performance.
            </p>
            <p className="section-phara">
              Platforms like Google Search Console and analytics tools help show
              how people are finding the site, which pages are getting
              attention, and where visitors are leaving.
            </p>
            <p className="section-phara">
              Without this data, decisions are usually based on guesswork
              instead of actual results.
            </p>
            <p className="section-phara">
              Regular review is also important. SEO is not something that runs
              on its own after setup. Pages need updates, technical issues need
              fixing, and content needs to grow over time.
            </p>
            <p className="section-phara">
              When performance is not checked consistently, small problems can
              continue for months without being noticed.
            </p>
            <p className="section-phara">
              Websites that improve steadily are usually the ones where progress
              is measured, adjustments are made, and the strategy keeps evolving
              instead of staying the same.
            </p>
          </Section>
          <Section
            id="how-chennai-businesses-can-fix-these-seo-mistakes"
            title="How Chennai Businesses Can Fix These SEO Mistakes"
          >
            <p className="section-phara">
              Once these mistakes are identified, the next step is not to make
              random changes, but to look at the website as a whole and
              understand where the gaps actually are.
            </p>
            <p className="section-phara">
              In many cases, the problem is not one single issue but a
              combination of small things that have been ignored over time.
            </p>
            <p className="section-phara">
              Fixing SEO usually starts with a proper audit, where the technical
              condition of the website, the content structure, and the current
              search visibility are reviewed together.
            </p>
            <p className="section-phara">
              This helps in understanding what is stopping the site from ranking
              instead of guessing what might be wrong.
            </p>
            <p className="section-phara">
              After that, the focus usually moves to building a clear strategy.
              Without a plan, even good work may not give consistent results.
            </p>
            <p className="section-phara">
              A proper SEO strategy defines which keywords matter, what kind of
              pages need to be created, how content should be structured, and
              how the website should grow over time.
            </p>
            <p className="section-phara">
              This becomes more important in competitive markets like Chennai,
              where many businesses are already working on improving their
              search presence.
            </p>
            <p className="section-phara">
              Content planning is another area where changes often make a
              noticeable difference. Instead of writing blogs randomly, websites
              perform better when related topics are grouped together and
              connected to the main services offered.
            </p>
            <p className="section-phara">
              When search engines see multiple pages supporting the same
              subject, the site gradually gains more authority for that topic.
            </p>
            <p className="section-phara">
              This makes it easier for important service pages to rank as well.
            </p>
            <p className="section-phara">
              Technical fixes also play a major role. Improving page speed,
              fixing indexing errors, correcting broken links, and making sure
              the site works properly on mobile devices can all affect how
              search engines evaluate the website.
            </p>
            <p className="section-phara">
              These are not always visible problems, but they often decide
              whether a page moves up or stays behind competitors.
            </p>
            <p className="section-phara">
              Finally, authority building takes time but cannot be skipped.
            </p>
            <p className="section-phara">
              Backlinks, content depth, and consistent updates help search
              engines trust a website more.
            </p>
            <p className="section-phara">
              Businesses that work on these areas regularly usually see steady
              improvement, while those who make changes only once in a while
              often feel like rankings never move.
            </p>
            <p className="section-phara">
              Fixing SEO is rarely about doing one big thing, but about
              correcting several smaller issues in the right order and staying
              consistent with the process.
            </p>
          </Section>
          <Section
            id="when-it-makes-sense-to-work-with-professional-seo-services"
            title="When It Makes Sense to Work With Professional SEO Services"
          >
            <p className="section-phara">
              There are situations where businesses can handle basic
              optimisation on their own, but there comes a point where SEO
              becomes difficult to manage without proper experience and time.
            </p>
            <p className="section-phara">
              This usually happens when the competition increases, the website
              grows, or the expectations from digital marketing become higher.
            </p>
            <p className="section-phara">
              At that stage, trying to fix things without a clear plan often
              leads to slow progress or repeated mistakes.
            </p>
            <p className="section-phara">
              One common situation is when the industry itself is highly
              competitive. In markets where many companies are actively
              investing in content, backlinks, and technical improvements, small
              changes are not enough to move rankings.
            </p>
            <p className="section-phara">
              Websites that appear on the first page are usually backed by
              consistent work done over months or even years.
            </p>
            <p className="section-phara">
              Competing in that environment requires a structured approach
              rather than occasional updates.
            </p>
            <p className="section-phara">
              Another reason businesses look for professional support is the
              lack of an internal team. SEO involves technical work, content
              planning, performance tracking, and regular updates.
            </p>
            <p className="section-phara">
              Handling all of this alongside daily business operations is not
              always practical. Without someone reviewing the website regularly,
              issues can continue for long periods without being noticed, which
              slows down overall growth.
            </p>
            <p className="section-phara">
              Long-term planning is another factor. SEO works best when it is
              connected to the overall digital strategy of the business.
            </p>
            <p className="section-phara">
              Content, website structure, and marketing efforts need to move in
              the same direction.
            </p>
            <p className="section-phara">
              When optimisation is done without coordination, the results may
              remain inconsistent even if individual tasks are completed
              properly.
            </p>
            <p className="section-phara">
              This is why many companies prefer working with an experienced team
              that can look at the bigger picture instead of focusing on only
              one part of the website.
            </p>
            <p className="section-phara">
              Businesses that reach this stage often start comparing different
              service providers to understand what level of support they need.
            </p>
            <p className="section-phara">
              While there are many options available, choosing a team that
              understands both search strategy and overall digital growth makes
              a noticeable difference.
            </p>
            <p className="section-phara">
              This is also why companies looking for a long-term approach
              usually prefer working with the{" "}
              <Link
                href="https://www.ayatiworks.com/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Best Digital Marketing Agency in Chennai
              </Link>{" "}
              , where SEO, content, and performance marketing are planned
              together instead of being handled separately.
            </p>
          </Section>
          <Section
            id="ranking-on-google-requires-strategy-not-just-effort"
            title="Ranking on Google Requires Strategy, Not Just Effort"
          >
            <p className="section-phara">
              Most businesses that struggle with SEO are not failing because
              they did nothing.
            </p>
            <p className="section-phara">
              In fact, many have already invested time, money, and effort into
              their website.
            </p>
            <p className="section-phara">
              They may have written blogs, added keywords, redesigned pages, or
              even tried different service providers. The problem is usually not
              the lack of effort, but the lack of a clear and consistent
              strategy behind that effort.
            </p>
            <p className="section-phara">
              Search engines have become more demanding over the years.
            </p>
            <p className="section-phara">
              Ranking today depends on how well different parts of the website
              work together, content, technical performance, keyword targeting,
              and authority signals.
            </p>
            <p className="section-phara">
              When these areas are handled separately without a plan, progress
              becomes slow and unpredictable.
            </p>
            <p className="section-phara">
              Small improvements may happen, but they rarely last long enough to
              make a real impact.
            </p>
            <p className="section-phara">
              Another factor that often affects results is expectation. SEO is
              not a quick process, especially in competitive markets where many
              businesses are actively working on their online presence.
            </p>
            <p className="section-phara">
              Websites that rank well usually reach that position after months
              of steady improvement, not after one update or one campaign.
            </p>
            <p className="section-phara">
              When the focus stays on long-term growth instead of short-term
              ranking, the results tend to be more stable.
            </p>
            <p className="section-phara">
              Consistency also makes a bigger difference than most people
              realise.
            </p>
            <p className="section-phara">
              Regular updates, better content, fixing technical issues, and
              building authority gradually help search engines trust the website
              more.
            </p>
            <p className="section-phara">
              Over time, this trust becomes the reason why some sites continue
              to rank even when competition increases.
            </p>
            <p className="section-phara">
              In the end, SEO works best when it is treated as a structured
              process rather than a one-time task.
            </p>
            <p className="section-phara">
              Businesses that understand this usually see steady progress, while
              those looking for quick fixes often feel like nothing is working
              even after putting in effort.
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

/* TOC items – Updated for 9 SEO Mistakes Blog */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Introduction",
  },
  {
    id: "how-seo-has-changed-in-the-last-few-years",
    level: 1,
    label: "How SEO Has Changed in the Last Few Years",
  },
  {
    id: "mistake-1-treating-seo-as-a-one-time-activity",
    level: 1,
    label: "Mistake #1 – Treating SEO as a One-Time Activity",
  },
  {
    id: "mistake-2-targeting-keywords-without-understanding-search-intent",
    level: 1,
    label: "Mistake #2 – Targeting Keywords Without Understanding Search Intent",
  },
  {
    id: "mistake-3-ignoring-technical-seo-issues",
    level: 1,
    label: "Mistake #3 – Ignoring Technical SEO Issues",
  },
  {
    id: "mistake-4-publishing-content-without-strategy",
    level: 1,
    label: "Mistake #4 – Publishing Content Without Strategy",
  },
  {
    id: "mistake-5-expecting-fast-results-from-seo",
    level: 1,
    label: "Mistake #5 – Expecting Fast Results from SEO",
  },
  {
    id: "mistake-6-choosing-seo-based-only-on-price",
    level: 1,
    label: "Mistake #6 – Choosing SEO Based Only on Price",
  },
  {
    id: "mistake-7-not-optimising-for-local-search",
    level: 1,
    label: "Mistake #7 – Not Optimising for Local Search",
  },
  {
    id: "mistake-8-ignoring-content-depth-and-topical-authority",
    level: 1,
    label: "Mistake #8 – Ignoring Content Depth and Topical Authority",
  },
  {
    id: "mistake-9-not-tracking-seo-performance-properly",
    level: 1,
    label: "Mistake #9 – Not Tracking SEO Performance Properly",
  },
  {
    id: "how-chennai-businesses-can-fix-these-seo-mistakes",
    level: 1,
    label: "How Chennai Businesses Can Fix These SEO Mistakes",
  },
  {
    id: "when-it-makes-sense-to-work-with-professional-seo-services",
    level: 1,
    label: "When It Makes Sense to Work With Professional SEO Services",
  },
  {
    id: "ranking-on-google-requires-strategy-not-just-effort",
    level: 1,
    label: "Ranking on Google Requires Strategy, Not Just Effort",
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
      <p className="section-phara italic">
        One of the most common questions business owners ask today is
        simple,{" "}
      </p>
      <h2 className="section-title mb-4 text-left text-3xl">
        <em>“Why is my website not ranking on Google even after doing SEO?”</em>
      </h2>
      {/* <div className="relative my-8 aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-slate-200">
        <Image
          src="http://89.167.92.220:8088/assets/seo-ay.jpg"
          alt="Ayatiworks professes SEO is Evolving and we need to keep upgrading our SEO Knowledge"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div> */}

      <p className="section-phara font-bold italic">
        This is something we hear across almost every industry, whether it is
        healthcare, education, manufacturing, real estate, ecommerce, or
        professional services.
      </p>
      <p className="section-phara">
        A company invests in a website, publishes a few pages, maybe even writes
        some blogs, but months later the traffic is still low and enquiries are
        not improving.
      </p>
      <p className="section-phara">
        The confusion usually starts because SEO looks easy from the outside.
        Many businesses assume that once a website is built and a few keywords
        are added, rankings should automatically improve.
      </p>
      <p className="section-phara">
        But search engines have changed a lot in the last few years. Today,
        ranking on Google depends on multiple factors working together,
        technical performance, content depth, search intent, authority, and
        consistency.
      </p>
      <p className="section-phara">
        Without a proper strategy, even a well-designed website may struggle to
        appear in search results.
      </p>
      <p className="section-phara">
        Another reason this problem is becoming more common is that competition
        has increased significantly, especially in cities like Chennai where
        more companies are investing in digital marketing.
      </p>
      <p className="section-phara">
        Almost every industry now has businesses actively working on search
        visibility, which means ranking is no longer about doing SEO once, but
        about doing it better than others.
      </p>
      <p className="section-phara">
        This is where many companies realise that basic optimisation is not
        enough, and they need a structured approach similar to what is included
        in professional{" "}
        <Link
          href="https://www.ayatiworks.com/digital-marketing-services/seo"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          SEO services
        </Link>{" "}
        that focus on long-term visibility instead of short-term fixes.
      </p>
      <p className="section-phara">
        Search algorithms have also evolved with AI-driven results, featured
        snippets, and answer-based search.
      </p>
      <p className="section-phara">
        Because of this, small gaps in content, weak technical setup, or unclear
        keyword targeting can make a website invisible even when the business
        itself is well established.
      </p>
      <p className="section-phara">
        What often looks like a simple ranking problem usually turns out to be a
        combination of small mistakes that keep adding up without being noticed.
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
      q: "1. Why is my website not ranking on Google even after doing SEO?",
      a: "A website may not rank even after SEO if the optimisation is incomplete or not aligned with search intent. Common reasons include weak content, technical errors, poor keyword targeting, lack of backlinks, or strong competition. Search engines also take time to trust a website, so inconsistent work or stopping SEO too early can prevent rankings from improving.",
    },
    {
      q: "2. How long does SEO take to show results for a business website?",
      a: `SEO usually takes three to six months to show noticeable improvement, but the timeline depends on competition, website quality, and the amount of work done. New websites or highly competitive industries may take longer because search engines need time to evaluate content, authority, and consistency before improving rankings.`,
    },
    {
      q: "3. What are the most common SEO mistakes businesses make?",
      a: `Some of the most common SEO mistakes include targeting wrong keywords, ignoring technical issues, publishing content without strategy, expecting fast results, and choosing SEO services based only on price. Many websites also fail to optimise for local search or do not track performance properly, which makes it difficult to understand what needs improvement.`,
    },
    {
      q: "4. How much do SEO services cost in Chennai?",
      a: `SEO pricing in Chennai varies depending on the scope of work and competition level. Basic campaigns may start around ₹40,000–₹50,000 per month, while competitive industries may require higher budgets for content, technical optimisation, and authority building. The exact cost depends on the business goals, website condition, and the level of SEO required.`,
    },
    {
      q: "5. Does local SEO really help businesses in Chennai get more customers?",
      a: `Yes, local SEO helps businesses appear in location-based searches such as “near me” or city-specific queries. Optimising Google Business Profile, using local keywords, getting reviews, and maintaining accurate business listings improve visibility in local results. This is especially important for service-based businesses that depend on customers from a specific area.`,
    },
    {
      q: "6. Can SEO still work after AI search and Google algorithm updates?",
      a: `SEO still works, but the approach has changed. Search engines now focus more on content quality, relevance, technical performance, and authority instead of just keywords. Websites that provide useful information, have strong structure, and update content regularly are more likely to appear in both traditional search results and AI-generated answers.`,
    },
    {
      q: "7. When should a business hire a professional SEO agency?",
      a: `A business should consider hiring an SEO agency when competition is high, rankings are not improving, or there is no internal team to manage optimisation. Professional SEO services help with strategy, technical fixes, content planning, and performance tracking, which makes it easier to achieve steady long-term growth instead of temporary ranking changes.`,
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


