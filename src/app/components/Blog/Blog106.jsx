"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaRegHandPointRight } from "react-icons/fa6";

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
export default function AEOArticlePage106() {
  const post = POSTS.find((p) => p.id === 106) || POSTS[0];

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
              How to Evaluate a Digital Marketing Agency in Chennai
              (Step-By-Step Guide)
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
            id="why-businesses-struggle"
            title="Why Businesses Struggle to Choose the Right Agency"
          >
            <p className="section-phara">
              Decision-makers aren’t confused about what they want.
            </p>
            <p className="section-phara">
              They’re confused about how to identify who can deliver it.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                The frustration looks like this:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "“Every agency sounds impressive during the pitch.”",
                  "	“I don’t know how to judge whether they can actually perform.”",
                  "	“We spent money, but we didn’t know what success should look like.”",
                  "	“They showed reach. I wanted revenue.”",
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
              This is exactly why a HOW-TO approach makes things simpler.
            </p>
            <p className="section-phara">Let’s break it down step by step.</p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="step-1"
            title="STEP 1: Start With Clarity on What You Expect"
          >
            <p className="section-phara">
              Before evaluating an agency, understand what success means for
              your business.
            </p>
            <p className="section-phara">This sets the bar, not their pitch.</p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: What Businesses Expect (But Often Don’t Say Out Loud)
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "ROI visibility — not activity-based updates",
                  "Predictable timelines — not vague “it takes time” slogans",
                  "Accountability — not algorithm excuses",
                  "Strategic thinking — not task execution",
                  "Roadmaps with milestones — not random deliverables",
                  "Funnel-based growth — not scattered campaigns",
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
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Mini True Story
            </h3>
            <p className="section-phara">
              Imagine stepping into a meeting and opening with,
            </p>
            <p className="section-phara">
              “We expect a 3x return, and we’re keen to see your roadmap for
              achieving it.”
            </p>
            <p className="section-phara">
              This simple line filters weak vendors instantly and shifts the
              conversation toward strategy, not surface-level pitches.
            </p>
          </Section>

          {/* STEP 2 */}
          <Section
            id="step-2"
            title="STEP 2: Evaluate the Agency’s Strategic Thinking"
          >
            <p className="section-phara">
              Most agencies jump straight into selling services.
            </p>
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A real growth partner starts with understanding:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Your margins",
                  "Your competition",
                  "	Your buyer psyche & persona",
                  "Your Customer Acquisition Cost ability",
                  "Your sales cycle",
                  "Your long-term brand play",
                  "Your risk appetite",
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
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Evaluate Thinking, Not Services
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Do they ask intelligent questions?",
                  " Are they curious about your business model?",
                  "Do they challenge your assumptions politely?",
                  " Do they connect marketing to revenue?",
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
              This is where many agencies fail, and where great ones stand out.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="step-3"
            title="STEP 3: Assess Their Methodology & Process"
          >
            <p className="section-phara">
              This is where you separate structured agencies from guess-driven
              ones.
            </p>
            <p className="section-phara text-secondary">Ask them:</p>
            <p className="section-phara">
              “How do you build strategies from scratch?”
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Evaluate Thinking, Not Services
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Buyer persona development",
                  " Competitor mapping",
                  " Category opportunity analysis",
                  "  Keyword & content ecosystem strategy",
                  "Paid performance approach",
                  " Experimentation framework",
                  " CRO (Conversion Rate Optimization)",
                  "Reporting & iteration structure",
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
            <p className="section-phara italic text-secondary">
              A good agency talks about services. <br />A great agency talks
              about systems.
            </p>

            <p className="section-phara">
              Understanding an agency’s methodology matters because it reveals
              whether they approach local digital marketing services or
              <Link
                href="https://ayatiworks.com/digital-marketing-services/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                {" "}
                Digital Marketing Services in Chennai{" "}
              </Link>
              Digital Marketing Services in Chennai as random activities or as a
              structured, strategic system.
            </p>
            <p className="section-phara">
              When you evaluate their process, how they research, plan, execute,
              optimize, and measure, you get a clearer sense of whether they can
              create long-term, compounding impact for your brand.
            </p>
            <p className="section-phara">
              I’d strongly recommend that you conduct thorough research on the
              <Link
                href="https://www.ayatiworks.com/blogs/digital-marketing-services/benefits-of-hiring-a-chennai-based-digital-marketing-agency/"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                {" "}
                benefits of hiring a Chennai-based digital marketing agency{" "}
              </Link>
              because even freelancers and one-man businesses can deceive you by
              stating they have a team and they are in complete control over it
              which is not true, and you face the repercussions of it sooner or
              later.
            </p>
          </Section>

          {/* STEP 4 */}
          <Section id="step-4" title="STEP 4: Check the Team Behind the Scenes">
            <p className="section-phara">
              The pitch is done by senior leadership.
            </p>
            <p className="section-phara">Execution is often done by juniors.</p>
            <p className="section-phara">This gap kills performance.</p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Evaluate the Actual Team
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Who is the strategist?",
                  " Who is the performance marketer?",
                  "  Who is handling content?",
                  "Who leads creatives?",
                  "What is their experience?",
                  "Have they worked in your industry before?",
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
              When you hire an agency, you’re hiring a thinking pool, not a
              company logo.
            </p>
          </Section>

          {/* STEP 5 */}
          <Section
            id="step-5"
            title="STEP 5: Review Their Funnel Understanding"
          >
            <p className="section-phara">
              A strong agency doesn’t talk about posts or ads first. <br />
              They talk about your funnel.
            </p>

            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-img-106-1.png"
              alt="Google Ranking businesses for Keyword on SERP "
            />

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Funnel Competence
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Can they analyze your buyer journey?",
                  "Can they identify drop-off points?",
                  " Can they align content, creative & ads to each stage?",
                  "Can they estimate CAC and LTV based on funnel behaviour?",
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
              If they can read your funnel like a financial sheet, they’re a
              strategic partner.
            </p>
          </Section>

          {/* STEP 6 */}
          <Section id="step-6" title="STEP 6: Ask for a Clear Roadmap & KPIs">
            <p className="section-phara">
              This is the ultimate evaluation moment.
            </p>
            <p className="section-phara italic text-secondary">
              Ask: “What will the first 90 days look like?”
            </p>

            <div className="ml-10 mb-4">
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
            </p>
          </Section>

          {/* STEP 7 */}
          <Section
            id="step-7"
            title="STEP 7: Study Their Balance of Paid vs Organic Strategy"
          >
            <p className="section-phara">
              This is where naive brands get misled.
            </p>
            <p className="section-phara">Some agencies oversell paid.</p>
            <p className="section-phara">Some oversell organic.</p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A mature agency balances both depending on:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Your budget",
                  "	Your industry",
                  "	Your competition",
                  "	Your growth horizon",
                  "	Your customer psychology",
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

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Evaluate Their Paid–Organic Maturity
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Do they justify why you need paid?",
                  "Do they justify where organic truly matters?",
                  "Are they honest about timelines?",
                  "Do they have a mix model, not a single-channel bias?",
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
            <p className="section-phara">Paid is your engine.</p>
            <p className="section-phara">Organic is your equity.</p>
            <p className="section-phara">
              Your agency must know how to orchestrate both.
            </p>
          </Section>

          {/* STEP 8 */}
          <Section
            id="step-8"
            title="STEP 8: Validate Their Reporting & Transparency"
          >
            <p className="section-phara">
              This is where trust is built or broken.
            </p>
            <p className="section-phara italic text-secondary">
              Ask for sample reports.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Their Reporting Should Include
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Weekly progress notes",
                  "Monthly performance dashboards",
                  "Attribution insights",
                  "CAC vs LTV analysis",
                  "Funnel drop-off insights",
                  "Clear narrative on what worked & what didn’t",
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
              If the report looks pretty but says nothing, run.
            </p>
          </Section>

          {/* STEP 9 */}
          <Section
            id="step-9"
            title="STEP 9: Check Their Scalability as You Grow"
          >
            <p className="section-phara">Today, you might spend ₹75k.</p>
            <p className="section-phara">
              Tomorrow, you might spend ₹10 lakhs.
            </p>
            <p className="section-phara italic text-secondary">
              Can they grow with you?
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Checklist: Scalability Signals
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Cross-functional team availability",
                  "Creative scalability",
                  "Performance scaling experience",
                  "Multi-channel depth",
                  "International campaign experience",
                  "Process maturity",
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
              The agency must be built for your future, not your present.
            </p>
          </Section>

          {/* PAID vs ORGANIC */}
          <Section
            id="paid-vs-organic"
            title="Paid vs Organic ROI: What Actually Works Best?"
          >
            <p className="section-phara">Here’s the truth:</p>
            <p className="section-phara font-semibold">
              Neither paid nor organic is “better.”
            </p>
            <p className="section-phara">
              ROI comes from integration, not isolation.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-left my-5">
                Organic gives you:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "	Compounding effects",
                  "	Brand trust",
                  "	Sustainable inbound pipeline",
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

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-left my-5">
                Paid gives you:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "		Instant velocity",
                  "		Predictable lead flow",
                  "		Faster experimentation",
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
              The right mix is your competitive advantage if the agency you
              choose understands the science behind it.
            </p>
          </Section>

          {/* CONCLUSION */}
          <Section
            id="the-clarity"
            title="The Clarity That Helps You Choose Right"
          >
            <p className="section-phara">
              Evaluating a digital marketing agency in Chennai becomes much
              simpler when you use a structured, step-by-step approach. The
              right partner won’t just show you pretty slides, they’ll show you
              how their thinking aligns with your growth goals.
            </p>
            <p className="section-phara">
              When you evaluate their strategy, team, funnel understanding,
              roadmap, reporting, and ability to scale with you, you get
              clarity. And with clarity comes confidence.
            </p>
            <p className="section-phara">
              That’s what makes this guide powerful, not just for choosing an
              agency, but for choosing the right relationship that actually
              drives business outcomes.
            </p>
            <p className="section-phara">
              Ayatiworks has always admired clients who come prepared with
              clarity and high expectations. Those challenges push the work
              higher and make the partnership stronger.
            </p>

            <div className="flex justify-center py-5">
              <Link
                href="/contact-us"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Book a Consultation with Ayatiworks Expert Today!
              </Link>
            </div>
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
    label: "Before You Hire an Agency, Read This",
  },
  {
    id: "why-businesses-struggle",
    level: 1,
    label: "Why Businesses Struggle to Choose the Right Agency",
  },
  {
    id: "step-1",
    level: 1,
    label: "Step 1: Start With Clarity on What You Expect",
  },
  {
    id: "step-2",
    level: 1,
    label: "Step 2: Evaluate the Agency’s Strategic Thinking",
  },
  {
    id: "step-3",
    level: 1,
    label: "Step 3: Assess Their Methodology & Process",
  },
  {
    id: "step-4",
    level: 1,
    label: "Step 4: Check the Team Behind the Scenes",
  },
  {
    id: "step-5",
    level: 1,
    label: "Step 5: Review Their Funnel Understanding",
  },
  {
    id: "step-6",
    level: 1,
    label: "Step 6: Ask for a Clear Roadmap & KPI Structure",
  },
  {
    id: "step-7",
    level: 1,
    label: "Step 7: Study Their Balance of Paid vs Organic Strategy",
  },
  {
    id: "step-8",
    level: 1,
    label: "Step 8: Validate Their Reporting & Transparency",
  },
  {
    id: "step-9",
    level: 1,
    label: "Step 9: Check Their Scalability as You Grow",
  },
  {
    id: "paid-vs-organic",
    level: 1,
    label: "Paid vs Organic ROI: What Actually Works Best?",
  },
  {
    id: "the-clarity",
    level: 1,
    label: "Conclusion",
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
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>Before You Hire an Agency, Read This</em>
      </p>
      <p className="section-phara">
        Many businesses want to hire a high-performance agency, but they don’t
        know how to evaluate one.
      </p>
      <p className="section-phara">
        They aren’t sure what works for them, which is not a reason for them to
        choose which agency should work for them and how?
      </p>
      <p className="section-phara">
        They know what they want growth, visibility, predictable revenue, better
        marketing outcomes, but hey’re unsure how to judge capability.
      </p>
      <p className="section-phara">
        If you’re exploring options and want a structured approach, this guide
        will show you exactly how to assess a{" "}
        <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Digital Marketing Agency Chennai
        </Link>
        , for serious results.
      </p>
      <p className="section-phara">This blog isn’t a theory! </p>
      <p className="section-phara">
        It’s a practical, conversational, business-first guide you can literally
        use the next time you sit across from an agency founder or marketing
        manager.
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
      q: "How do I know if a digital marketing agency truly understands my industry?",
      a: "When an agency understands your industry, it shows in the way they speak your market’s language. They should demonstrate awareness of your end users, their pain points, and the problems your product or service solves. A capable digital marketing agency knows how to attract your ideal customers by positioning your brand as the solution they’re seeking. They should also understand your competitors, how they acquire clients, and how to implement stronger, well-tested strategies to outperform them.",
    },
    {
      q: "Should pricing be a deciding factor when hiring a digital marketing agency?",
      a: `Pricing in a service industry cannot be defined as the way it is for a product-based business. When choosing a digital marketing agency, pricing depends entirely on the combination of services you include under the larger digital marketing umbrella.
For example, you may approach an agency for overall digital marketing, but they will break it down into specific components such as paid services (PPC, performance marketing, influencer marketing, social media ads) and organic services like SEO and content-driven visibility.
The price ultimately depends on the services you choose, the depth of execution required, and how frequently you want those services delivered.`,
    },
    {
      q: "How long should I wait to see results from a digital marketing service?",
      a: `Digital marketing services can be broadly classified into two categories: paid and organic. SEO is a long-term, ongoing process that takes time, although the timeline depends on your brand’s existing presence on SERPs. SEO works with KPIs from day one and becomes a high-compounding, high-ROI channel when executed consistently.
      Inorganic paid ads can show results immediately, but the outcome depends on how well the team manages targeting, optimization, creative testing, and campaign strategy. Immediate results do not guarantee sustainable growth unless handled by an experienced team.`,
    },
    {
      q: "Are case studies enough to evaluate an agency?",
      a: "No. Case studies are curated and should be viewed as reference points, not guarantees of future performance. Every business has unique needs, and evaluating an agency requires understanding their KPIs, their proposed roadmap, the team handling your campaigns, their experience, the projections they present, and their overall professionalism. Case studies can guide you, but they cannot replace a thorough evaluation.",
    },
    {
      q: "Is organic better than paid?",
      a: "Organic and paid serve different purposes, and neither is inherently better than the other. Your business needs the right balance, not a bias. Organic and inorganic strategies should work in tandem, paid accelerates reach and acquisition, while organic compounds visibility and builds long-term authority. Together, they create stronger and more sustainable outcomes.",
    },
    {
      q: "How often should the agency report to me?",
      a: "Weekly progress updates and monthly performance reviews are ideal for most businesses. If you opt for a dedicated service or performance-heavy campaigns, daily reports or dashboards may also be applicable. The more active and dynamic your campaigns, the more frequent the reporting should be.",
    },
    {
      q: "Can a digital marketing agency guarantee results?",
      a: `A digital marketing agency cannot guarantee exact numbers because algorithms, consumer behavior, and competition constantly change. But they must guarantee structured KPIs, clear targets, predictable processes, and measurable progress. Every marketing effort, whether ATL or BTL, must deliver outcomes, and the agency should be accountable for driving consistent, transparent performance against your goals.
What digital marketing agencies 
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
