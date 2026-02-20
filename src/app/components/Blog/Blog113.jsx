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

const buildHref = (slugOrPath = "") => {
  if (!slugOrPath) return "/blogs";
  const s = String(slugOrPath).trim();
  if (s.startsWith("/blogs")) return s.startsWith("/") ? s : `/${s}`;
  if (s.startsWith("/")) return s;
  // remove accidental leading/trailing slashes and ensure single prefix
  return `/blogs/${s.replace(/^\/+|\/+$/g, "")}`;
};
export default function AEOArticlePage113() {
  const post = POSTS.find((p) => p.id === 113) || POSTS[0];

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
              How Digital Marketing Services Work Across the Funnel: Awareness,
              Demand, and Revenue Alignment
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
            id="understanding-the-modern-digital-marketing-funnel"
            title="Understanding the Modern Digital Marketing Funnel"
          >
            <p className="section-phara">
              The digital marketing funnel didn’t break, it evolved. What
              stopped working was the assumption that buyers move neatly from
              awareness to purchase in a straight line.
            </p>
            <p className="section-phara">
              Today’s buyers don’t “enter” funnels. They orbit problems,
              solutions, brands, reviews, content, and opinions before making a
              decision.
            </p>
            <p className="section-phara">
              The funnel still exists, but it behaves more like a system than a
              sequence.{" "}
              {/* <Link
                href="/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                digital marketing agency
              </Link>{" "} */}
            </p>
            <p className="section-phara">
              At a structural level, the modern digital marketing funnel can be
              understood across three operational stages:{" "}
              <strong>Awareness, Demand, and Revenue. </strong>These aren’t
              campaign phases. They are business outcomes.
            </p>
            <p className="section-phara">
              Each stage answers a different buyer question, and each requires a
              different kind of marketing behavior.
            </p>
            <p className="section-phara">
              Awareness is about visibility with relevance.
            </p>
            <p className="section-phara">
              {" "}
              It answers:{" "}
              <span className="italic">
                Do I know you exist, and do I associate you with the right
                problem or solution?{" "}
              </span>{" "}
            </p>
            <p className="section-phara">
              {" "}
              This is where SEO, content, social media, and paid reach typically
              operate, but visibility alone is not the win. If awareness does
              not establish credibility or context, it creates noise, not
              momentum.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Demand is where most funnels silently fail. Demand is not about
              collecting leads; it’s about shaping intent.{" "}
            </p>
            <p className="section-phara">
              It answers:{" "}
              <span className="italic">
                Do I understand my problem well enough to consider solutions-and
                are you one of them?{" "}
              </span>{" "}
            </p>
            <p className="section-phara">
              {" "}
              This stage is driven by education, comparison, and clarity. Buyers
              don’t want persuasion here; they want help making sense of their
              decision.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Revenue is where intent turns into action.{" "}
            </p>
            <p className="section-phara">
              It answers:{" "}
              <span className="italic">Why should I choose you now? </span>
            </p>
            <p className="section-phara">
              {" "}
              This stage is influenced as much by trust, experience, and proof
              as by pricing or offers. Conversion doesn’t happen because of one
              CTA, it happens because every previous touchpoint did its
              job.{" "}
            </p>
            <p className="section-phara">
              {" "}
              The mistake most businesses make is treating these stages as
              independent efforts. Awareness teams chase reach.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Demand teams chase leads. Sales teams chase closures. Each team
              optimizes for its own metrics, but no one optimizes for the
              journey.{" "}
            </p>
            <p className="section-phara">
              {" "}
              That’s how you end up with high traffic and low conversions, or
              qualified leads that never close.{" "}
            </p>
            <p className="section-phara">
              {" "}
              The modern funnel only works when these stages are intentionally
              connected. Awareness must feed demand with the right context.
              Demand must prepare buyers for revenue conversations.{" "}
            </p>
            <p className="section-phara">
              Revenue insights must loop back to refine awareness and demand
              strategies. This alignment is not optional anymore, it’s the
              difference between marketing that looks active and marketing that
              actually compounds.{" "}
            </p>
            <p className="section-phara">
              {" "}
              At <strong>Ayatiworks,</strong> the funnel is treated as a single
              growth system, not three separate objectives.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Every channel, asset, and KPI is designed to move buyers forward,
              not just pull them in. That’s what makes the funnel scalable,
              measurable, and resilient in real markets.{" "}
            </p>
            {/* <p className="section-phara">  </p> */}
          </Section>

          {/* STEP 1 */}
          <Section
            id="awareness-marketing-building-visibility-that-actually-matters"
            title="Awareness Marketing – Building Visibility That Actually Matters (≈500 words)"
          >
            <p className="section-phara ">
              Awareness marketing is often misunderstood as the “top of the
              funnel” phase where brands try to be seen by as many people as
              possible. That definition is outdated. In crowded digital
              ecosystems, being visible is easy. Being remembered for the right
              reason is hard.
            </p>
            <p className="section-phara">
              Modern awareness marketing is not about reach-it’s about
              relevance. It’s the process of placing your brand in the buyer’s
              mind at the exact moment they begin thinking about a problem you
              can solve. That means awareness must be intentional, contextual,
              and anchored in buyer reality, not brand ambition.
            </p>
            <p className="section-phara">
              The first shift businesses need to make is understanding that
              awareness is not platform-led; it’s intent-led. SEO is not just
              about ranking for keywords-it’s about being present where
              curiosity begins. Content is not about volume-it’s about framing
              problems clearly. Social media is not about posting-it’s about
              shaping perception. Paid media is not about exposure-it’s about
              controlled amplification of the right message.
            </p>
            <p className="section-phara">
              Where awareness marketing fails is when it’s executed without
              positioning. Publishing content without a point of view. Running
              ads without clarity on who they are for. Ranking for keywords that
              attract attention but not alignment. These efforts generate
              impressions, but they don’t generate trust.
            </p>
            <p className="section-phara">
              Effective awareness marketing does three things consistently.
              First, it clarifies the problem. Buyers should feel understood,
              not sold to. Second, it establishes credibility. This comes from
              depth, consistency, and usefulness, not hype. Third, it creates a
              natural bridge to the next stage of the funnel by inviting
              exploration, not pushing conversion.{" "}
            </p>
            <p className="section-phara">
              Another common pitfall is measuring awareness with vanity metrics
              alone. Impressions, reach, and follower counts look impressive,
              but they don’t tell you whether awareness is working. Strong
              awareness shows up as branded search growth, repeat visits,
              content engagement depth, and familiarity during sales
              conversations. These signals indicate that awareness is building
              memory, not just momentary attention.{" "}
            </p>
            <p className="section-phara">
              Awareness marketing also sets the tone for everything that
              follows. If your top-of-funnel messaging is generic, your
              demand-stage content will struggle to differentiate. If your
              awareness content overpromises, revenue-stage trust breaks down.
              Alignment starts here.{" "}
            </p>
            <p className="section-phara">
              {" "}
              When awareness is done right, it doesn’t feel like marketing. It
              feels like clarity arriving early. Buyers don’t remember every
              blog they read or post they scroll past, but they remember the
              brand that helped them think better about their problem. That’s
              the real job of awareness.
            </p>
            <p className="section-phara">
              This is why awareness should never be treated as a cost center.
              It’s the foundation on which demand and revenue are built. Weak
              awareness creates friction downstream. Strong awareness quietly
              accelerates everything.{" "}
            </p>
            {/* <p className="section-phara"> </p> */}
          </Section>

          {/* STEP 2 */}
          <Section
            id="demand-marketing-turning-attention-into-buyer-readiness"
            title="Demand Marketing – Turning Attention into Buyer Readiness"
          >
            <p className="section-phara">
              Awareness gets you noticed. Demand determines whether you’re taken
              seriously.
            </p>
            <p className="section-phara">
              {" "}
              Demand marketing is the most misunderstood, and most mishandled,
              stage of the digital funnel.
            </p>
            <p className="section-phara">
              {" "}
              Many businesses jump straight from visibility to lead capture,
              assuming interest automatically follows exposure. It doesn’t.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Demand is not about pushing forms or offers; it’s about preparing
              the buyer mentally and emotionally to make a decision.
            </p>
            <p className="section-phara">
              {" "}
              At this stage, buyers are no longer asking{" "}
              <span className="italic">“What is this problem?”,</span> They’re
              asking{" "}
              <span className="italic">
                “What’s the right way to solve it, and who can help me do
                that?”{" "}
              </span>
            </p>
            <p className="section-phara">
              This is where clarity beats creativity, and usefulness beats
              persuasion.{" "}
            </p>
            <p className="section-phara">
              Demand marketing works by reducing uncertainty. Buyers want to
              understand trade-offs, approaches, frameworks, timelines, and
              outcomes.{" "}
            </p>
            <p className="section-phara">
              They compare vendors, evaluate capabilities, and look for signals
              of real-world competence. This is why mid-funnel content, such as
              solution explainers, service breakdowns, case-led insights, and
              process-driven pages, plays a critical role.
            </p>
            <p className="section-phara">
              This is also where service intent begins to surface. For example,
              a business that has already consumed educational content around
              growth, funnels, or performance alignment may naturally move
              toward evaluating {" "}
              <Link
                href="/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Digital Marketing Services in Chennai,
              </Link>{" "}
              not because they were pushed, but because their readiness has
              matured.{" "}
            </p>
            <p className="section-phara">
              {" "}
              When demand content is structured correctly, service pages stop
              feeling like sales pitches and start functioning as
              decision-support assets.
            </p>
            <p className="section-phara">
              {" "}
              Effective demand marketing connects dots. It bridges high-level
              thinking from awareness content with practical execution
              pathways.{" "}
            </p>
            <p className="section-phara">
              It answers questions like: <br />
              <div className="ml-10 mb-6">
                {/* Title */}
                <h3 className="section-title text-2xl text-secondary text-left my-5">
                  When a business searches for a digital marketing agency in
                  Chennai, the intent is rarely generic. Beneath the search
                  query is a set of unstated expectations:
                </h3>

                {/* List */}
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "What does this look like in practice? ",
                      desc: "",
                    },
                    {
                      title: "What’s involved? ",
                      desc: "",
                    },
                    {
                      title: "	What outcomes should I expect? ",
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
            </p>
            <p className="section-phara">
              {" "}
              When these questions are left unanswered, buyers hesitate. When
              they’re addressed clearly, buyers progress.{" "}
            </p>
            <p className="section-phara">
              Another common mistake is measuring demand purely by lead volume.
              Demand is better measured by engagement depth, return visits,
              assisted conversions, and time spent with decision-stage content.
              These signals indicate intent formation, not just curiosity.{" "}
            </p>
            <p className="section-phara">
              We design transition layers deliberately for demand marketing.
              Content, SEO, and service pages are aligned to guide buyers from
              understanding the problem to evaluating solutions, without
              friction, pressure, or confusion. That alignment is what turns
              attention into readiness, and readiness into meaningful
              conversations.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="revenue-marketing-vs-performance-marketing"
            title="Revenue Marketing – Where CRO and Sales Alignment Decide Growth"
          >
            <p className="section-phara">
              Revenue marketing is where strategies stop sounding good on paper
              and start facing reality. This is the stage where interest must
              convert into action, and where most funnels quietly leak.{" "}
            </p>
            <p className="section-phara">
              Not because traffic was low or demand was weak, but because
              conversion and sales were never designed to work together.{" "}
            </p>
            <p className="section-phara">
              Conversion Rate Optimization (CRO) is often misunderstood as
              button colors, headline tweaks, or A/B tests in isolation. In a
              revenue-aligned funnel, CRO is much deeper than surface-level
              optimization.{" "}
            </p>
            <p className="section-phara">
              It’s about reducing friction at the exact moment a buyer is
              deciding whether to trust you.{" "}
            </p>
            <p className="section-phara">
              At this stage, buyers are no longer asking what or how. They’re
              asking why you and why now. Every element they interact with,
              service pages, pricing cues, forms, CTAs, proof points, either
              reinforces confidence or introduces doubt. CRO works when it
              removes doubt systematically.{" "}
            </p>
            <p className="section-phara">
              But CRO alone doesn’t close revenue gaps. The real inflection
              point happens when CRO is aligned with sales behavior.{" "}
            </p>
            <p className="section-phara">
              This is where most organizations break alignment. Marketing
              optimizes pages for conversions.{" "}
            </p>
            <p className="section-phara">
              Sales teams optimize conversations for closure. If these two
              worlds don’t reflect each other, buyers feel the disconnect
              immediately. A polished landing page followed by a misaligned
              sales call erodes trust.{" "}
            </p>
            <p className="section-phara">
              A strong sales pitch backed by weak on-site proof creates
              hesitation before the call even happens.{" "}
            </p>
            <div className="ml-10 mb-6">
              {/* Title */}
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Revenue marketing bridges this gap by designing marketing assets
                with sales realities in mind. That means:
              </h3>

              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title:
                      "	Service pages that mirror actual sales conversations",
                    desc: "",
                  },
                  {
                    title:
                      "	Messaging that answers objections before they’re raised",
                    desc: "",
                  },
                  {
                    title:
                      "	Proof that supports claims sales teams already make",
                    desc: "",
                  },
                  {
                    title: "	CTAs that signal readiness, not pressure",
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
              When CRO and sales alignment work together, conversions improve
              not because of tricks, but because buyers feel continuity. What
              they read, see, and hear feels consistent.{" "}
            </p>
            <p className="section-phara">
              Another critical shift at this stage is how success is measured.
              Revenue marketing does not obsess over last-click attribution. It
              looks at assisted conversions, funnel velocity, deal quality, and
              close rates influenced by marketing touchpoints.{" "}
            </p>
            <p className="section-phara">
              These signals reveal whether marketing is genuinely helping sales,
              or just handing over names.{" "}
            </p>
            <p className="section-phara">
              Strong revenue marketing also creates feedback loops. Sales
              conversations surface objections, questions, and deal blockers.
              These insights should flow directly back into CRO decisions,
              content refinement, and page optimization. When this loop exists,
              conversion improvements compound over time instead of
              plateauing.{" "}
            </p>
            <p className="section-phara">
              We treat revenue marketing as a shared responsibility. CRO is not
              separated from sales enablement, and sales is not isolated from
              marketing strategy.{" "}
            </p>
            <p className="section-phara">
              The funnel doesn’t end at conversion, it closes when marketing and
              sales speak the same language, serve the same buyer, and optimize
              for the same outcome: predictable, sustainable revenue
              growth.{" "}
            </p>
            <p className="section-phara">
              {" "}
              This is the stage where funnels stop being theoretical, and start
              paying for themselves.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section
            id="why-channel-first-marketing-breaks-at-scale"
            title="Why Channel-First Marketing Breaks at Scale"
          >
            <p className="section-phara">
              Channel-first marketing looks efficient, until it isn’t. On paper,
              assigning ownership to SEO, paid media, social, or email feels
              logical. Each channel has clear deliverables, tools, and
              metrics.{" "}
            </p>
            <p className="section-phara">
              The problem emerges when growth expectations increase and these
              channels are asked to scale impact, not just activity.{" "}
            </p>
            <p className="section-phara">
              At scale, channels don’t fail because they underperform. They fail
              because they optimize in isolation.{" "}
            </p>
            <p className="section-phara">
              {" "}
              SEO teams chase rankings and traffic. Paid teams chase ROAS.
              Social teams chase engagement. Email teams chase open rates.
              Individually, these numbers can look healthy.{" "}
            </p>
            <p className="section-phara">
              Collectively, they often fail to move revenue in a predictable
              way. The organization ends up with performance dashboards full of
              green indicators, and leadership still asking why growth feels
              inconsistent.{" "}
            </p>
            <p className="section-phara">
              The structural issue is misaligned incentives. Channel-first
              models reward local optimization, not systemic outcomes.{" "}
            </p>
            <p className="section-phara">
              Each channel improves its own efficiency, but no one owns the
              buyer’s end-to-end journey. This creates invisible friction:
              traffic arrives without context, leads are generated without
              readiness, and sales inherits conversations that marketing didn’t
              fully prepare.{" "}
            </p>
            <p className="section-phara">
              As scale increases, the cost of this fragmentation multiplies.
              More tools are added. More specialists are hired. More campaigns
              are launched. Instead of compounding results, complexity compounds
              confusion.{" "}
            </p>
            <p className="section-phara">
              Attribution becomes noisy. Budget allocation becomes political.
              Strategy turns reactive.{" "}
            </p>
            <p className="section-phara">
              Another failure point is adaptability. Buyer behavior doesn’t
              respect channel boundaries.{" "}
            </p>
            <p className="section-phara">
              {" "}
              A buyer might discover you via search, validate you on social,
              consume content via email, and convert after a sales call.{" "}
            </p>
            <p className="section-phara">
              Channel-first marketing struggles to adapt to this reality because
              it treats touchpoints as endpoints rather than transitions.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Most importantly, channel-first thinking delays learning. Insights
              from sales conversations don’t reach SEO teams. CRO learnings
              don’t inform content strategy.{" "}
            </p>
            <p className="section-phara">
              {" "}
              Paid search intent doesn’t reshape messaging upstream. Without
              integration, organizations repeat the same mistakes at higher
              spend levels.
            </p>
            <p className="section-phara">
              At small scale, these inefficiencies are survivable. At growth
              scale, they are expensive.{" "}
            </p>
            <p className="section-phara">
              Sustainable growth requires a shift away from channel ownership
              toward journey ownership. Channels still matter, but only as
              delivery mechanisms inside a larger system.{" "}
            </p>
            <p className="section-phara">
              When marketing is structured around the funnel instead of
              platforms, optimization moves from “What performs best here?” to
              “What moves the buyer forward?”{" "}
            </p>
            <p className="section-phara">
              That shift is what separates busy marketing from effective
              marketing, and why channel-first strategies eventually hit a
              ceiling.{" "}
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="the-ayatiworks-integrated-growth-framework"
            title="The Ayatiworks Integrated Growth Framework "
          >
            <p className="section-phara">
              The Ayatiworks Integrated Growth Framework was built to solve a
              single, recurring problem: marketing activity that doesn’t
              translate into business momentum.
            </p>
            <p className="section-phara">
              Instead of stacking services or prioritizing platforms, the
              framework starts with outcomes and works backward.
            </p>
            <p className="section-phara">
              At its core, the framework aligns all digital marketing efforts
              across three business-critical stages:{" "}
            </p>
            <p className="section-phara">
              <strong>Awareness, Demand, and Revenue</strong>. These stages are
              not departments or campaigns. They are decision phases buyers move
              through, whether marketing teams acknowledge them or not.
            </p>
            <p className="section-phara">
              The first principle of the framework is{" "}
              <strong>funnel-first planning</strong>. Every initiative is mapped
              to a specific stage of buyer readiness. Awareness assets are
              designed to establish relevance and credibility.{" "}
            </p>
            <p className="section-phara">
              Demand assets are built to reduce uncertainty and shape intent.
              Revenue assets are optimized to support decision-making and sales
              conversations. Nothing exists “just to be present.”
            </p>
            <p className="section-phara">
              The second principle is <strong>intent-led architecture</strong>.
              Content, SEO, paid media, and CRO are structured around buyer
              intent, not keyword volume or platform trends.
            </p>
            <p className="section-phara">
              This ensures that traffic quality improves alongside traffic
              quantity, and that engagement signals reflect real consideration,
              not passive consumption.
            </p>
            <p className="section-phara">
              The third principle is
              <strong> revenue-aligned measurement.</strong> Success is not
              defined by isolated KPIs. It’s evaluated through funnel movement:
              progression rates, assisted conversions, deal quality, and
              velocity.{" "}
            </p>
            <p className="section-phara">
              This shifts conversations from “Which channel performed?” to
              “Where are buyers getting stuck?”
            </p>
            <p className="section-phara">
              What makes the framework scalable is integration. Channels don’t
              compete for credit; they reinforce each other.
            </p>
            <p className="section-phara">
              Sales insights feed marketing optimization. CRO informs content
              refinement. Demand data reshapes awareness strategy. The system
              learns continuously because feedback loops are designed in, not
              bolted on.
            </p>
            <p className="section-phara">
              Our framework allows businesses to move beyond tactical execution
              and into operational clarity.{" "}
            </p>
            <p className="section-phara">
              Marketing stops being a cost center justified by reports and
              starts functioning as a growth engine justified by outcomes.
            </p>
            <p className="section-phara">
              The result is not louder marketing; it’s clearer marketing. Not
              more activity, but more alignment.{" "}
            </p>
            <p className="section-phara">
              And at scale, alignment is what turns digital marketing from a
              series of efforts into a repeatable, revenue-producing system.
            </p>
          </Section>
          <Section
            id="how-businesses-can-align-digital-marketing-to-the-funnel"
            title="How Businesses Can Align Digital Marketing to the Funnel "
          >
            <p className="section-phara">
              Funnel alignment doesn’t start with tools, platforms, or
              campaigns. It starts with perspective. Most businesses attempt to
              fix performance issues by adding channels or increasing spend,
              when the real requirement is structural clarity, understanding
              where marketing is helping buyers move forward and where it is
              quietly stalling them.
            </p>

            <p className="section-phara">
              The first step is a <strong>funnel audit</strong>, not a channel
              audit.{" "}
            </p>
            <p className="section-phara">
              Instead of asking how SEO or ads are performing, the better
              question is: Which stage of the buyer journey is over-supported,
              and which stage is neglected?{" "}
            </p>
            <p className="section-phara">
              Many businesses discover they are heavy on awareness, thin on
              demand, and reactive at the revenue stage.{" "}
            </p>
            <p className="section-phara">
              {" "}
              The second step is <strong>intent mapping</strong>. Every major
              page, asset, and campaign should map to a buyer mindset,
              exploring, evaluating, or deciding.{" "}
            </p>
            <p className="section-phara">
              {" "}
              When content tries to serve all three at once, it usually serves
              none of them well. Clear intent makes messaging sharper and
              decisions easier for the buyer.
            </p>
            <p className="section-phara">
              The third step is{" "}
              <strong>redefining KPIs around movement, not volume</strong>.
              Traffic, leads, and impressions are inputs. Alignment metrics
              focus on progression: engagement depth, repeat visits, assisted
              conversions, and sales-qualified conversations.{" "}
            </p>
            <p className="section-phara">
              These indicators reveal whether marketing is preparing buyers, or
              just attracting them.{" "}
            </p>
            <p className="section-phara">
              {" "}
              The fourth step is <strong> sales integration</strong>. Funnel
              alignment collapses when marketing and sales operate on
              assumptions instead of shared insight.{" "}
            </p>
            <p className="section-phara">
              Objections raised in sales calls should shape CRO decisions.
              Questions asked by prospects should influence demand-stage
              content.{" "}
            </p>
            <p className="section-phara">
              When this loop is active, marketing improves in relevance, not
              just efficiency.{" "}
            </p>
            <p className="section-phara">
              Finally, alignment requires operational patience. Funnel-based
              systems compound over time.{" "}
            </p>
            <p className="section-phara">
              Early gains may look subtle, but they are durable. Instead of
              spikes followed by drop-offs, aligned marketing creates
              consistency, predictable pipeline quality, clearer attribution,
              and fewer surprises at scale.{" "}
            </p>
            <p className="section-phara">
              We treat alignment as an operating discipline, not a one-time
              exercise. Businesses that adopt this mindset stop chasing tactics
              and start building momentum, where every effort has a place, and
              every result has a reason.{" "}
            </p>
          </Section>
          <Section
            id="from-marketing-activity-to-revenue-architecture"
            title="From Marketing Activity to Revenue Architecture"
          >
            <p className="section-phara">
              Digital marketing no longer fails because of a lack of options. It
              fails because of a lack of alignment.
            </p>
            <p className="section-phara">
              {" "}
              In a landscape filled with platforms, tools, and tactics, the real
              competitive advantage is coherence. Businesses that grow
              predictably are not doing more marketing, they are doing connected
              marketing.{" "}
            </p>
            <div className="ml-10 mb-6">
              {/* List */}
              <ul className="mt-6 space-y-4">
                {[
                  {
                    title: "	Awareness feeds demand. ",
                    desc: "",
                  },
                  {
                    title: "	Demand prepares revenue. ",
                    desc: "",
                  },
                  {
                    title: "	Revenue insights refine everything upstream.",
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
              When marketing is treated as a series of isolated activities,
              results remain fragile. Performance depends on constant spending,
              constant execution, and constant explanation.{" "}
            </p>
            <p className="section-phara">
              When marketing is designed as a revenue-aligned system, results
              compound. Effort creates leverage. Data creates direction.{" "}
            </p>
            <p className="section-phara">
              The shift is subtle but decisive: from campaigns to journeys, from
              channels to systems, from metrics to meaning.{" "}
            </p>
            <p className="section-phara">
              This is where digital marketing stops being a cost justified by
              reports and starts becoming an engine justified by outcomes.{" "}
            </p>
            <p className="section-phara">
              Funnel alignment doesn’t eliminate creativity or experimentation.
              It gives them structure.{" "}
            </p>
            <p className="section-phara">
              It ensures that ideas don’t just attract attention, but earn
              trust, and that trust converts into long-term growth.{" "}
            </p>
            <p className="section-phara">
              In a market where attention is abundant but commitment is rare,
              the brands that win are those that respect how buyers think,
              decide, and move forward.{" "}
            </p>
            <p className="section-phara">
              That respect shows up as clarity, consistency, and confidence
              across every touchpoint.{" "}
            </p>
            <p className="section-phara">
              Ultimately, sustainable growth isn’t built by louder marketing.
              It’s built by smarter alignment, where awareness, demand, and
              revenue move together, and marketing finally speaks the language
              of the business.{" "}
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
    id: "understanding-the-modern-digital-marketing-funnel",
    level: 1,
    label: "Understanding the Modern Digital Marketing Funnel",
  },
  {
    id: "awareness-marketing-building-visibility-that-actually-matters",
    level: 1,
    label: "Awareness Marketing – Building Visibility That Actually Matters",
  },
  {
    id: "demand-marketing-turning-attention-into-buyer-readiness",
    level: 1,
    label: "Demand Marketing – Turning Attention into Buyer Readiness",
  },
  {
    id: "revenue-marketing-vs-performance-marketing",
    level: 1,
    label: "Revenue Marketing – Where CRO and Sales Alignment Decide Growth",
  },
  {
    id: "why-channel-first-marketing-breaks-at-scale",
    level: 1,
    label: "Why Channel-First Marketing Breaks at Scale",
  },
  {
    id: "the-ayatiworks-integrated-growth-framework",
    level: 1,
    label: "The Ayatiworks Integrated Growth Framework",
  },
  {
    id: "how-businesses-can-align-digital-marketing-to-the-funnel",
    level: 1,
    label: "How Businesses Can Align Digital Marketing to the Funnel",
  },
  {
    id: "from-marketing-activity-to-revenue-architecture",
    level: 1,
    label: "From Marketing Activity to Revenue Architecture",
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
        <em>Why “More Marketing” Fails Without Funnel Alignment</em>
      </p>
      <p className="section-phara">
        Digital marketing has never been more accessible, measurable, or heavily
        invested in, and yet, for many businesses, growth feels slower, noisier,
        and harder to attribute than ever.
      </p>
      <p className="section-phara">
        Websites attract traffic but fail to convert. Campaigns generate leads
        that sales teams can’t close. Dashboards look active, but revenue
        outcomes remain stubbornly flat. This isn’t a performance problem.{" "}
      </p>
      <p className="section-phara">
        It’s an alignment problem, and it’s visible across markets, including
        competitive ecosystems like {" "}
        <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          digital marketing Chennai
        </Link>{" "}
        , where activity is high but outcomes often lag.
      </p>
      <p className="section-phara">
        The modern growth challenge is not a lack of marketing effort, it’s the
        absence of a unified system.
      </p>
      <p className="section-phara">
        Most organizations still operate digital marketing as a collection of
        disconnected activities:{" "}
      </p>
      <p className="section-phara ">
        SEO lives in one silo, paid media in another, content somewhere in
        between, and revenue ownership is pushed downstream.
      </p>
      <p className="section-phara">
        This is especially common in service-driven markets, where businesses
        invest in digital marketing services expecting immediate returns,
        without aligning those efforts to how buyers actually move from
        awareness to decision.
      </p>
      <p className="section-phara">
        The result is predictable: channels perform in isolation, KPIs compete
        with each other, and no one can clearly explain how marketing
        contributes to actual business growth.{" "}
      </p>
      <p className="section-phara">
        {" "}
        One of the most common mistakes businesses make is treating traffic,
        leads, and revenue as interchangeable metrics. They are not. Traffic
        measures visibility. Leads measure interest.{" "}
      </p>
      <p className="section-phara">
        {" "}
        Revenue measures trust, intent, and decision readiness. When these
        signals are not deliberately connected through a structured funnel,
        marketing becomes busy but ineffective, high on activity, low on
        impact.{" "}
      </p>
      <p className="section-phara">
        {" "}
        This is why simply increasing spend or switching vendors rarely fixes
        the problem, whether you’re scaling locally or competing in a dense
        market like digital marketing Chennai.{" "}
      </p>
      <p className="section-phara">
        {" "}
        The traditional “more marketing” approach fails because it adds volume
        without fixing structure. Growth today requires a shift in mindset, from
        executing services to engineering systems.{" "}
      </p>
      <p className="section-phara">
        {" "}
        Digital marketing must be designed as a revenue-aligned operating model,
        not a checklist of tactics.{" "}
      </p>
      <p className="section-phara">
        {" "}
        At <strong>Ayatiworks,</strong> digital marketing is approached as an
        integrated growth framework, one that intentionally aligns awareness,
        demand, and revenue into a single, measurable journey.{" "}
      </p>
      <p className="section-phara">
        {" "}
        Every channel, asset, and KPI is mapped to a specific stage of the
        funnel, ensuring that visibility leads to intent, intent leads to
        conversion, and conversion leads to sustainable growth.{" "}
      </p>
      <p className="section-phara">
        {" "}
        This guide breaks down how digital marketing services actually work
        across the funnel, and more importantly, how businesses can align them
        to move from fragmented execution to predictable revenue outcomes.{" "}
      </p>
      {/* <p className="section-phara">      </p> */}
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
      q: "What is full-funnel digital marketing?",
      a: `Full-funnel digital marketing is an approach that aligns marketing efforts across awareness, demand, and revenue stages. 
Instead of focusing on individual channels, it designs the entire buyer journey, from first interaction to conversion, so each stage prepares the next.
`,
    },
    {
      q: "Why is funnel alignment important in digital marketing?",
      a: `Funnel alignment ensures that traffic, content, and campaigns are connected to business outcomes. Without alignment, marketing activity may look successful on dashboards but fail to generate qualified leads, conversions, or revenue.`,
    },
    {
      q: "How is demand marketing different from lead generation?",
      a: "Lead generation focuses on capturing contact details. Demand marketing focuses on shaping buyer intent and readiness. Strong demand marketing educates, clarifies, and prepares buyers so leads are higher quality and more likely to convert.",
    },
    {
      q: "What role does CRO play in revenue-focused marketing?",
      a: "CRO reduces friction at decision points. Beyond design tweaks, it aligns messaging, proof, and user experience with buyer expectations and sales conversations, making conversions feel natural rather than forced.",
    },
    {
      q: "How do I know if my digital marketing is aligned to revenue?",
      a: `Aligned digital marketing shows up as consistent lead quality, shorter sales cycles, higher assisted conversions, and clearer attribution. 
If sales conversations feel warmer and objections decrease, alignment is working, even before revenue spikes.
`,
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

