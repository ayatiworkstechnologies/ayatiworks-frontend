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
export default function AEOArticlePage108() {
  const post = POSTS.find((p) => p.id === 108) || POSTS[0];

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
              Digital Marketing Services Explained as an <br />
              Integrated Growth Framework
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
            id="why-digital-marketing"
            title="Why Digital Marketing Must Be Viewed as a Business System"
          >
            <p className="section-phara">
              Most digital marketing failures don’t happen because a channel
              “doesn’t work.”
            </p>
            <p className="section-phara">
              They happen because channels are deployed{" "}
              <strong>without alignment.</strong>
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                These are some common disconnects that happen in the industry:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "SEO is run separately from content.",
                  "Paid media is executed without brand context.",
                  "Social media is treated as output, not signal.",
                  "Email runs in isolation from the buyer journey.",
                  "Content that doesn’t match intent",
                  "When Content becomes a number game",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Consider a sole proprietor running a fast-growing quick-commerce
              business. His objective is simple and valid: increase organic
              reach to reduce dependency on paid channels.
            </p>
            <p className="section-phara">
              He approaches digital agencies with the language he knows, SEO,
              blogs, and keywords.
            </p>
            <p className="section-phara">
              The responses vary. Some agencies propose aggressive content
              calendars. Others talk about audits, intent mapping, and phased
              execution.
            </p>
            <p className="section-phara">The business owner pushes back.</p>
            <p className="section-phara">
              He has read enough blogs to believe one thing with confidence:
            </p>
            <p className="section-phara">
              “Content is king. More content means more organic reach.” So, he
              asks for volume, more blogs, more pages, and more posts.
            </p>
            <p className="section-phara">
              The agency, however, insists on slowing down.
            </p>
            <p className="section-phara">
              They talk about search intent, existing visibility gaps, internal
              linking, technical foundations, distribution, and alignment.
            </p>
            <p className="section-phara">
              {" "}
              From the owner’s perspective, this feels like hesitation. From the
              agency’s perspective, it’s restraint.
            </p>
            <p className="section-phara">
              This is where the disconnect surfaces.
            </p>
            <p className="section-phara">
              {" "}
              The owner is optimizing for <strong>output.</strong>
            </p>
            <p className="section-phara">
              {" "}
              The agency is optimizing for <strong> outcomes.</strong>
            </p>
            <div className="border border-black/20 px-4 py-4 bg-secondary/10 w-[400px]">
              {" "}
              <p className="section-phara">
                Both want growth <br />
                They are just solving different problems
              </p>
            </div>
            <p className="section-phara">
              Publishing more content without addressing structure, intent, and
              amplification doesn’t build organic reach; it creates digital
              noise. At the same time, strategy without execution momentum feels
              abstract to a business owner under pressure.
            </p>
            <p className="section-phara">
              The realization here is subtle but critical:
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Organic growth is not a content problem. It’s a system problem.{" "}
            </h3>
            <p className="section-phara">
              Until content, SEO, brand clarity, and distribution are aligned,
              efforts increase, but momentum doesn’t.
            </p>
            <div className="px-10 space-y-4">
              <div className="section-phara flex items-center gap-3">
                <FaXmark className="text-red-600 h-6 w-6 flex-shrink-0" />
                <span>
                  What went wrong in that scenario wasn’t intent or effort.
                </span>
              </div>

              <div className="section-phara flex items-center gap-3">
                <FaXmark className="text-red-600 h-6 w-6 flex-shrink-0" />
                <span>It was the absence of orchestration.</span>
              </div>

              <div className="section-phara flex items-center gap-3">
                <IoMdCheckmark className="text-green-600 h-6 w-6 flex-shrink-0" />
                <span>
                  The business owner wasn’t wrong to believe content matters.
                </span>
              </div>

              <div className="section-phara flex items-center gap-3">
                <IoMdCheckmark className="text-green-600 h-6 w-6 flex-shrink-0" />
                <span>
                  The agency wasn’t wrong to insist on sequencing and structure.
                </span>
              </div>
            </div>

            <p className="section-phara">
              The failure happened because digital marketing was being treated
              as a collection of activities instead of a connected system, where
              each channel has a role, a timing, and a dependency on the others.
            </p>
            <p className="section-phara">
              This is the inflection point most growing businesses eventually
              hit.
            </p>
            <p className="section-phara">
              They realise that execution alone doesn’t scale.
            </p>
            <p className="section-phara">Alignment does.</p>
            <p className="section-phara">
              And that’s where digital marketing needs to evolve, from doing
              things in parallel to designing them to work together.
            </p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="from-channel"
            title="From Channel Execution to Growth Orchestration"
          >
            <p className="section-phara">
              In early-stage marketing, individual tactics can move the needle.
            </p>
            <p className="section-phara">
              {" "}
              At scale, they stop working unless they are designed to reinforce
              one another.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A system-led approach answers questions like:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "What role does each channel play in demand creation vs. demand capture?",
                  "How does content created today support organic, social, and email tomorrow?",
                  "How do insights from one channel improve performance across others?",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This is why leading research platforms like{" "}
              <strong>Google, Ahrefs,</strong> and <strong>SEMrush</strong>{" "}
              consistently emphasize intent alignment, cross-channel
              consistency, and measurement maturity as core drivers of long-term
              growth, not tools or isolated tactics.
            </p>
          </Section>

          {/* STEP 2 */}
          <Section
            id="digital-marketing-revenue-infrastructure"
            title="Digital Marketing as Revenue Infrastructure"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Well-structured digital marketing behaves less like a campaign
                engine and more like infrastructure:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "It compounds rather than resets",
                  "It reduces dependency on paid acquisition over time",
                  "It builds trust before conversion is required",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full  "
                      aria-hidden="true"
                    >
                      <FaRegHandPointRight className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              When designed as a system, digital marketing supports predictable
              growth, not reactive bursts of traffic.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="the-architecture"
            title="The Architecture of an Integrated Digital Marketing Framework"
          >
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                At a systems level, digital marketing services fall into three
                functional layers:{" "}
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "Demand Creation",
                    desc: "building awareness, trust, and relevance.",
                  },
                  {
                    title: "Demand Capture",
                    desc: "converting existing intent into action.",
                  },
                  {
                    title: "Lifecycle Expansion",
                    desc: "retaining, nurturing, and compounding value.",
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

            <p className="section-phara italic text-secondary">
              Each service contributes differently across these layers.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="demad-creation-vs-demand-capture"
            title="Demand Creation vs. Demand Capture"
          >
            <p className="section-phara">
              A common mistake is expecting every channel to do everything.
            </p>
            <p className="section-phara">
              SEO primarily captures existing demand.
            </p>
            <p className="section-phara">
              Content and video create new demand.
            </p>
            <p className="section-phara">Social reinforces trust and recall.</p>
            <p className="section-phara">
              Email and automation extend value over time.
            </p>
            <p className="section-phara">
              When these roles are confused, performance plateaus.
            </p>
            <p className="section-phara">
              Backlinko’s long-form studies on search behavior repeatedly show
              that users <strong> convert after multiple touchpoints,</strong>{" "}
              not during first exposure. An integrated framework is what makes
              those touchpoints coherent.
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="the-compounding-effect"
            title="The Compounding Effect of Alignment"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                When services are aligned:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "SEO insights inform content topics",
                  "Content fuels video and social distribution",
                  "Video improves engagement signals and recall",
                  "Email converts attention into relationships",
                  "Automation scales consistency without losing context",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This is where growth becomes exponential rather than linear.
            </p>
          </Section>

          {/* STEP 6 */}
          <Section
            id="seo-as-a-foundational"
            title="SEO as a Foundational Demand Capture Layer"
          >
            <p className="section-phara">
              <Link
                href="https://www.ayatiworks.com/digital-marketing-services/seo"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                SEO
              </Link>{" "}
              is not just about rankings.
            </p>
            <p className="section-phara italic text-secondary">
              It’s about{" "}
              <strong>
                being present at the exact moment intent is expressed.
              </strong>
            </p>

            {/* <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Roadmap Must Include
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "                   Month-by-month plan",
                  "  Hypotheses & experiments",
                  "Predictable KPIs",
                  "  Expected traffic/lead/ROI benchmarks",
                  "  Timeline for SEO vs Paid results",
                  "CAC expectations",
                  "Content structure",
                  "  Creative approach",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">A vague roadmap = vague outcomes.</p>
            <p className="section-phara">
              A structured roadmap = accountable outcomes.
            </p> */}
          </Section>

          {/* STEP 7 */}
          <Section
            id="seo-role"
            title="SEO’s Role in Sustainable Visibility and Trust"
          >
            <p className="section-phara">
              Search is often the final checkpoint before a decision is made.
            </p>
            <p className="section-phara">
              Users search when they want clarity, validation, or solutions.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                According to Google’s own documentation on search quality, pages
                that perform well:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Demonstrate topical authority",
                  " Match user intent precisely",
                  "	Are supported by consistent, high-quality content",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              SEO succeeds when it is supported by the broader system, not when
              it’s treated as a checklist.
            </p>
          </Section>

          {/* STEP 8 */}
          <Section
            id="search-intent"
            title="Search Intent Across the Funnel (AEO-Friendly)"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Users search differently at different stages:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Informational queries → education and understanding",
                  "	Comparative queries → evaluation and validation",
                  "	Transactional queries → decision readiness",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              SEO works best when content, branding, and messaging already exist
              to support each stage.
            </p>
          </Section>

          {/* STEP 9 */}
          <Section
            id="how-seo-connects"
            title="How SEO Connects with Content, Brand Consulting, and Video"
          >
            <p className="section-phara">
              SEO identifies what people are asking.
            </p>
            <p className="section-phara">
              Content and brand consulting define how the answers are framed.
              Video and distribution determine how widely those answers travel.
              Without this alignment, SEO traffic arrives but doesn’t convert.
            </p>
            <p className="section-phara italic text-secondary">
              Video and distribution determine how widely those answers travel.
            </p>
            <p className="section-phara italic text-secondary">
              Without this alignment, SEO traffic arrives but doesn’t convert.
            </p>
          </Section>

          {/* PAID vs ORGANIC */}
          <Section
            id="content-as-a-service"
            title="Content as a Service (CaaS) as the Strategic Backbone"
          >
            <p className="section-phara">Content is not output.</p>
            <p className="section-phara font-semibold">It is infrastructure.</p>
            <p className="section-phara">
              Businesses that treat{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                content as a service,
              </Link>{" "}
              rather than a deliverable, build consistency, scalability, and
              authority over time.
            </p>
          </Section>

          <Section
            id="why-content-operating-model"
            title="Why Content Is an Operating Model, Not a One-Off Asset"
          >
            <p className="section-phara">
              High-performing digital ecosystems don’t rely on sporadic blog
              posts or isolated campaigns.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                They run on:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Defined narratives",
                  "	Repeatable formats",
                  "	Clear editorial intent",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              This is why platforms like <strong> Ahrefs</strong> and{" "}
              <strong>SEMrush</strong> emphasize topical coverage and content
              depth as ranking and trust signals.
            </p>
          </Section>
          <Section
            id="content-systems-vs-content-pieces"
            title="Content Systems vs. Content Pieces"
          >
            {/* <p className="section-phara">
              High-performing digital ecosystems don’t rely on sporadic blog posts or isolated campaigns.
            </p> */}
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A system ensures:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "		SEO pages don’t contradict brand messaging",
                  "Social posts reinforce long-form content",
                  "Email campaigns extend the lifespan of ideas",
                  "Video content aligns with written narratives",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          <Section
            id="sub-services"
            title="Sub-Services Within Content as a Service"
          >
            <p className="section-phara">
              Content as a Service typically includes multiple layers working
              together
            </p>
          </Section>

          <Section id="brand-consulting" title="Brand Consulting">
            <p className="section-phara">
              Strong content systems start with clarity, positioning, voice, and
              category context. Brand consulting ensures every piece of content
              reflects a consistent narrative, whether it appears on search,
              social, or owned platforms. Without this layer, teams produce more
              content but dilute meaning. This is where structured{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service/branding-service"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                brand consulting services
              </Link>{" "}
              create alignment before scale.
            </p>
          </Section>

          <Section
            id="multilingual-content-marketing"
            title="Multilingual Content Marketing"
          >
            <p className="section-phara">
              As businesses expand across markets, translation alone is not
              enough. Multilingual content adapts messaging to cultural context,
              search behavior, and local intent while preserving the core brand
              narrative. This allows organic visibility and engagement to grow
              without fragmenting identity. A well-designed{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service/multilingual-marketing"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                multilingual marketing strategy
              </Link>{" "}
              ensures reach scales without inconsistency.
            </p>
          </Section>

          <Section
            id="multi-format-content-execution"
            title="Multi-Format Content Execution"
          >
            <p className="section-phara">
              Modern audiences consume information across formats, articles,
              videos, short-form visuals, and email. Multi-format execution
              ensures these assets are created as a connected set, not isolated
              outputs competing for attention. Written, visual, and motion
              content reinforce the same message at different touchpoints. This
              approach allows
              <Link
                href="https://www.ayatiworks.com/content-as-a-service/video-creation"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                video creation
              </Link>{" "}
              and content execution to amplify, not replace, written content.
            </p>
          </Section>

          <Section
            id="video-marketing"
            title="Video Marketing as a Growth and Acceleration Engine"
          >
            <p className="section-phara">
              Video has moved from optional to foundational.
            </p>
            <p className="section-phara">
              It compresses trust-building into shorter timeframes and improves
              engagement across almost every digital touchpoint.
            </p>
          </Section>

          <Section
            id="why-video-sits"
            title="Why Video Sits at the Intersection of Brand and Performance"
          >
            <p className="section-phara">
              Google’s own studies on user behavior show that pages with strong
              engagement signals, time on page, interaction, retention,
              outperform those without.
            </p>
          </Section>

          <Section id="video-improves" title="Video improves">
            {/* <p className="section-phara">
              High-performing digital ecosystems don’t rely on sporadic blog posts or isolated campaigns.
            </p> */}
            <div className="ml-10 mb-4">
              {/* <h3 className="section-title text-2xl text-secondary text-left my-5">
                A system ensures:
              </h3> */}
              <ul className="mt-4 space-y-2">
                {["Message clarity", "Recall", "Conversion confidence"].map(
                  (name) => (
                    <li key={name} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                        aria-hidden="true"
                      >
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-black/80 section-phara text-lg">
                        <span className="font-medium text-black">{name}</span>
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </Section>

          <Section
            id="end-to-end-video-as-a-system"
            title="End-to-End Video as a System"
          >
            <p className="section-phara">
              Effective video marketing is not just production.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                It includes:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Ideation aligned with business objectives",
                  "Scriptwriting tied to content and SEO insights",
                  "Execution across platforms",
                  "Distribution through social, email, and owned channels",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              When integrated correctly, video amplifies every other digital
              marketing service.{" "}
            </p>
          </Section>

          <Section
            id="social-media-as-a-trust"
            title="Social Media as a Trust and Distribution Layer"
          >
            <p className="section-phara">
              The hard truth is that{" "}
              <Link
                href="https://www.ayatiworks.com/digital-marketing-services/social-media-marketing"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                social media marketing
              </Link>
              rarely creates demand on its own.
            </p>
            <p className="section-phara">
              What it does exceptionally well is{" "}
              <strong>shape perception before demand is acted upon.</strong>
            </p>
            <p className="section-phara">
              When a prospect encounters a brand through search, content, or
              referral, social platforms often become the place they go to
              validate credibility, sometimes without consciously realizing it.
            </p>
          </Section>

          <Section
            id="social-media-beyond-posting"
            title="Social Media Beyond Posting and Engagement"
          >
            <p className="section-phara">
              Likes and comments are surface signals.{" "}
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                The real value of social media lies in:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Reinforcing brand consistency",
                  "Increasing message familiarity",
                  "Reducing perceived risk before conversion",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              From a systems perspective, social media functions as a{" "}
              <strong>trust amplifier </strong> rather than a primary
              acquisition engine.
            </p>
            <p className="section-phara">
              <Link
                href="https://www.thinkwithgoogle.com/intl/en-emea/consumer-insights/consumer-journey/study-reveals-complexity-modern-consumer-paths-purchase-and-how-brands-can-make-inroads/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Google’s own research into the modern buyer journey
              </Link>{" "}
              shows that users interact with multiple brand touchpoints before
              making decisions.{" "}
            </p>
            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-img-108.png"
              alt="An Interesting factual article on the Modern Buyers Journey cited by Ayatiworks"
            />
            <p className="section-phara">
              Social platforms quietly influence that journey by making brands
              feel present, active, and credible.
            </p>
          </Section>

          <Section
            id="social-as-distribution-layer"
            title="Social as a Distribution Layer for Content and Video"
          >
            <p className="section-phara">
              Content that lives only on a website has limited reach.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Social media extends the lifespan and visibility of:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Long-form content",
                  "	Video assets",
                  "	Thought leadership narratives",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              When aligned with SEO and content strategy, social channels ensure
              ideas travel further without requiring constant reinvention.
            </p>
          </Section>

          <Section
            id="social-media-as-a-trust"
            title="Social Media as a Trust and Distribution Layer"
          >
            <p className="section-phara">
              Social media struggles when treated as a standalone growth
              channel.
            </p>
            <p className="section-phara">
              Without strong content, clear positioning, and downstream
              conversion paths, it becomes performative rather than productive.
            </p>
            <p className="section-phara">
              In a connected system, social doesn’t chase results, it supports
              them.
            </p>
          </Section>

          <Section
            id="email-marketing-as-a-lifecycle"
            title="Email Marketing as a Lifecycle and Retention Engine"
          >
            <p className="section-phara">
              Email remains one of the few digital channels businesses truly
              own. That alone makes it strategically important.
            </p>
            <p className="section-phara">
              But its real strength lies in{" "}
              <strong>what happens after the first conversion.</strong>
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Email as an Owned Relationship Channel
            </h3>
            <p className="section-phara">
              Search and social help businesses get discovered.
            </p>
            <p className="section-phara">Email helps them stay relevant.</p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                <Link
                  href="https://www.ayatiworks.com/digital-marketing-services/email-marketing"
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  Effective email marketing:
                </Link>
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Nurtures undecided prospects",
                  "	Educates users post-conversion",
                  "	Reinforces brand recall over time",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              According to data shared by platforms like Backlinko,
              retention-focused channels consistently outperform acquisition
              channels in long-term ROI, provided the messaging is timely and
              relevant.
            </p>
          </Section>

          <Section
            id="lifecycle-thinking-not-broadcasts"
            title="Lifecycle Thinking, Not Broadcasts"
          >
            <p className="section-phara">
              Modern email systems are designed around behaviour, not blasts.{" "}
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                This includes:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "		Onboarding sequences",
                  "		Education flows",
                  "		Re-engagement campaigns",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              When aligned with content and user intent, email becomes the
              connective tissue between awareness and loyalty.
            </p>
          </Section>

          <Section
            id="why-email-depends"
            title="Why Email Depends on Upstream Systems"
          >
            <p className="section-phara">
              Email does not fix unclear messaging.
            </p>
            <p className="section-phara">
              It does not compensate for weak content.
            </p>
            <p className="section-phara">
              It does not create intent where none exists.
            </p>
            <p className="section-phara">
              Its effectiveness depends entirely on the quality of the ecosystem
              feeding into it.
            </p>
          </Section>

          <Section
            id="conversion-intelligence "
            title="Conversion Intelligence Embedded Across Digital Channels"
          >
            <p className="section-phara">
              Conversion optimisation is often misunderstood as a surface-level
              exercise, button colours, layouts, and minor tweaks.
            </p>
            <p className="section-phara">
              In reality, conversion performance is shaped long before a user
              reaches a call-to-action.
            </p>
          </Section>

          <Section
            id="conversion-as-a-system-level-outcome"
            title="Conversion as a System-Level Outcome"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Users convert when:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Messaging matches intent",
                  "	Friction is reduced across touchpoints",
                  "	Trust is established early",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              These factors are influenced by SEO clarity, content structure,
              brand voice, and distribution consistency, not just page design.{" "}
            </p>
          </Section>

          <Section
            id="experience-optimisation-across-touchpoints"
            title="Experience Optimisation Across Touchpoints"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Conversion intelligence shows up in:{" "}
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	How content answers questions",
                  "	How video clarifies value",
                  "	How social reinforces legitimacy",
                  "	How email sustains confidence",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              Rather than being a standalone service, conversion thinking is
              embedded across the system, quietly improving outcomes everywhere.{" "}
            </p>{" "}
          </Section>

          <Section
            id="brand-consulting-as-a-unifying-growth-layer"
            title="Brand Consulting as a Unifying Growth Layer"
          >
            <p className="section-phara">
              As digital ecosystems grow, inconsistency becomes the hidden
              enemy.
            </p>
            <p className="section-phara">
              Different teams, platforms, and formats start telling slightly
              different stories. Over time, this erodes trust, even when
              performance metrics look healthy.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Brand Consulting as Alignment, Not Decoration
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Brand consulting focuses on:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Positioning clarity",
                  "	Narrative consistency",
                  "	Category relevance",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              It ensures that every digital touchpoint speaks the same language,
              even when the format changes.
            </p>{" "}
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Why Brand Alignment Impacts Performance{" "}
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                When brand messaging is consistent:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Content becomes more recognisable",
                  "	SEO pages convert more efficiently",
                  "	Social presence feels cohesive",
                  "	Video storytelling gains recall",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              This is why performance-driven platforms increasingly acknowledge
              brand strength as a conversion multiplier, not a creative luxury.{" "}
            </p>{" "}
          </Section>

          <Section
            id="marketing-automation-as-a-scale-enabler"
            title="Marketing Automation as a Scale Enabler"
          >
            <p className="section-phara">
              Automation does not replace strategy.
            </p>
            <p className="section-phara">It amplifies it.</p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Automation as Operational Discipline
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Marketing automation brings structure to:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Lead journeys",
                  "	Content delivery",
                  "	Cross-channel coordination",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              When used correctly, it reduces manual overhead while preserving
              message integrity.
            </p>{" "}
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              The Dependency on Clean Inputs
            </h3>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Automation fails when:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Content is unclear",
                  "	Segmentation is weak",
                  "	Objectives are undefined",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              In a mature system, automation supports consistency, not
              complexity.{" "}
            </p>{" "}
          </Section>

          <Section
            id="how-digital-marketing-services-work-together"
            title="How Digital Marketing Services Work Together Across the Funnel"
          >
            <p className="section-phara">
              Integrated systems become most visible when viewed through the
              funnel lens.
            </p>
            <div className="ml-10 mb-4">
              {/* <h3 className="section-title text-2xl text-secondary text-left my-5">
                Conversion intelligence shows up in:{" "}
              </h3> */}
              <ul className="mt-4 space-y-2">
                {[
                  "	Awareness is driven by content, video, and social presence",
                  "	Consideration is supported by SEO clarity and brand consistency",
                  "	Conversion is reinforced by experience, trust, and email",
                  "	Retention is sustained through lifecycle communication and automation",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              No single service owns the funnel. The system does.
            </p>{" "}
          </Section>

          <Section
            id="digital-marketing-as-business-infrastructure"
            title="Digital Marketing as Business Infrastructure"
          >
            <p className="section-phara">
              Digital marketing stops being unpredictable when it stops being
              fragmented.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                When services are designed to work together:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Effort compounds",
                  "	Trust accumulates",
                  "	Growth becomes sustainable",
                ].map((name) => (
                  <li key={name} className="flex items-start gap-3">
                    <span
                      className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                      aria-hidden="true"
                    >
                      <IoCheckmarkDone className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-black/80 section-phara text-lg">
                      <span className="font-medium text-black">{name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="section-phara">
              The most successful digital strategies are rarely the loudest.
              They are the most aligned.
            </p>{" "}
            <p className="section-phara">They are the most aligned.</p>
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
  { id: "intro", level: 1, label: "Introduction" },

  {
    id: "why-digital-marketing",
    level: 1,
    label: "Why Digital Marketing Must Be Viewed as a Business System",
  },

  {
    id: "from-channel",
    level: 1,
    label: "From Channel Execution to Growth Orchestration",
  },

  {
    id: "digital-marketing-revenue-infrastructure",
    level: 1,
    label: "Digital Marketing as Revenue Infrastructure",
  },

  {
    id: "the-architecture",
    level: 1,
    label: "Architecture of an Integrated Digital Marketing Framework",
  },

  {
    id: "demad-creation-vs-demand-capture",
    level: 1,
    label: "Demand Creation vs Demand Capture",
  },

  {
    id: "the-compounding-effect",
    level: 1,
    label: "The Compounding Effect of Alignment",
  },

  {
    id: "seo-as-a-foundational",
    level: 1,
    label: "SEO as a Foundational Demand Capture Layer",
  },

  {
    id: "seo-role",
    level: 1,
    label: "SEO’s Role in Sustainable Visibility and Trust",
  },

  {
    id: "search-intent",
    level: 1,
    label: "Search Intent Across the Funnel",
  },

  {
    id: "how-seo-connects",
    level: 1,
    label: "How SEO Connects With Content, Brand & Video",
  },

  {
    id: "content-as-a-service",
    level: 1,
    label: "Content as a Service (CaaS)",
  },

  {
    id: "why-content-operating-model",
    level: 1,
    label: "Why Content Is an Operating Model",
  },

  {
    id: "content-systems-vs-content-pieces",
    level: 1,
    label: "Content Systems vs Content Pieces",
  },

  {
    id: "sub-services",
    level: 1,
    label: "Sub-Services Within Content as a Service",
  },

  {
    id: "brand-consulting",
    level: 1,
    label: "Brand Consulting",
  },

  {
    id: "multilingual-content-marketing",
    level: 1,
    label: "Multilingual Content Marketing",
  },

  {
    id: "multi-format-content-execution",
    level: 1,
    label: "Multi-Format Content Execution",
  },

  {
    id: "video-marketing",
    level: 1,
    label: "Video Marketing as a Growth Engine",
  },

  {
    id: "why-video-sits",
    level: 1,
    label: "Why Video Sits at the Intersection of Brand & Performance",
  },

  {
    id: "end-to-end-video-as-a-system",
    level: 1,
    label: "End-to-End Video as a System",
  },

  {
    id: "social-media-as-a-trust",
    level: 1,
    label: "Social Media as a Trust Layer",
  },

  {
    id: "social-media-beyond-posting",
    level: 1,
    label: "Social Media Beyond Posting",
  },

  {
    id: "social-as-distribution-layer",
    level: 1,
    label: "Social as a Distribution Layer",
  },

  {
    id: "email-marketing-as-a-lifecycle",
    level: 1,
    label: "Email Marketing as a Lifecycle Engine",
  },

  {
    id: "lifecycle-thinking-not-broadcasts",
    level: 1,
    label: "Lifecycle Thinking, Not Broadcasts",
  },

  {
    id: "conversion-as-a-system-level-outcome",
    level: 1,
    label: "Conversion as a System-Level Outcome",
  },

  {
    id: "brand-consulting-as-a-unifying-growth-layer",
    level: 1,
    label: "Brand Consulting as a Unifying Growth Layer",
  },

  {
    id: "marketing-automation-as-a-scale-enabler",
    level: 1,
    label: "Marketing Automation as a Scale Enabler",
  },

  {
    id: "how-digital-marketing-services-work-together",
    level: 1,
    label: "How Digital Marketing Services Work Together",
  },

  {
    id: "digital-marketing-as-business-infrastructure",
    level: 1,
    label: "Digital Marketing as Business Infrastructure",
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
    id: 109,
    title:
      "A Business Decision Guide to Choosing, Prioritising, and Scaling the Right Services",
    slug: "/blogs/digital-marketing-services/business-decision-guide-choosing-prioritising-scaling-services/",
    bannerTitle:
      "Digital marketing delivers results only when services are chosen with intent, not impulse.",
    date: "Dec 25, 2025",
    readMins: 10,
    cover:
      "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-109.jpg",
    coverAlt:
      "Top 10 Digital Marketing Agencies in Chennai comparison guide for brands",
    deck: "Confused about digital marketing services? This in-depth guide helps businesses choose, prioritise, and scale SEO, paid media, content, and automation for...",
    category: "Digital Marketing Services",
  },
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      {/* <p className="section-title mb-4 text-left text-3xl">
        <em>Before You Hire an Agency, Read This</em>
      </p> */}
      <p className="section-phara">
        Digital marketing services are often discussed as individual
        capabilities like SEO, content, social media, email, video, and
        automation.
      </p>
      <p className="section-phara">
        In practice, high-performing businesses don’t use them that way.
      </p>
      <p className="section-phara">
        They treat digital marketing as a <strong>growth system</strong>, one
        where each service plays a defined role, reinforces the others, and
        compounds results over time.
      </p>
      <p className="section-phara">
        This guide explains how{" "}
        <Link
          href="https://www.ayatiworks.com/digital-marketing-services"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          digital marketing services
        </Link>
        actually work together, why isolated execution underperforms, and how
        founders, CMOs, and growth leaders should think about building a
        sustainable digital engine, without hype, jargon, or vendor bias.
      </p>
      {/* <p className="section-phara">This blog isn’t a theory! </p>
      <p className="section-phara">
        It’s a practical, conversational, business-first guide you can literally
        use the next time you sit across from an agency founder or marketing
        manager.
      </p> */}
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
      q: "What are digital marketing services meant to achieve?",
      a: "Digital marketing services are designed to create visibility, capture intent, and build long-term demand through coordinated channels rather than isolated tactics.",
    },
    {
      q: "Do all digital marketing services need to start at the same time?",
      a: "No. Mature systems often evolve in phases, but they are designed with integration in mind from the start.",
    },
    {
      q: "Why do some digital marketing efforts show activity but not results?",
      a: "Because effort without alignment increases output, not outcomes. Systems create momentum; tactics create noise.",
    },
    {
      q: "How do businesses know if their digital marketing is working as a system?",
      a: "When insights from one channel improve performance in others, and growth compounds rather than resets, the system is functioning.",
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
