"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import { FiPlus, FiMinus } from "react-icons/fi";
import Link from "next/link";
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

const AGENCIES = [
  {
    rank: 1,
    name: "Ayatiworks LLP",
    website: "https://www.ayatiworks.com",
    established: "2017",
    hq: "Chennai, Tamil Nadu",
    presence:
      "India, USA (Client Delivery Capability), UAE, Australia, New Zealand, Singapore",
    services:
      "SEO, AEO, GEO, AI-SEO, Performance Marketing, Creative Production, Digital Branding, Content as a Service (CaaS), Multilingual Digital Marketing",
    industries:
      "SaaS, Healthcare, EdTech, E-commerce, Real Estate, Automotive, Professional Services, Retail, Food & Beverage, Pharma",
    tools:
      "SEMrush, Ahrefs, Surfer, HubSpot, Meta Suite, Google Ads, GA4, Jasper, Local SEO tools",
    standout:
      "Fully integrated creative + digital agency built on a strong CaaS model, with multilingual execution across Indian languages and deep SEO/AEO/GEO/AI-SEO capability. Proven mandates for Volvo, Xiaomi, Nippo, Jeep and international brands across US and Middle East make Ayatiworks ideal for performance-led, full-funnel growth.",
    highlight: true,
  },
  {
    rank: 2,
    name: "Rage Communication (ADK Rage)",
    website: "https://www.adkrage.com",
    established: "1995",
    hq: "Chennai, Tamil Nadu",
    presence: "India, Singapore, Australia, 30+ countries",
    services:
      "Digital Transformation, Web Engineering, UX, Marketing Technology, Creative Strategy, Digital Campaign Execution",
    industries: "BFSI, Retail, Enterprise, Manufacturing, Technology",
    tools:
      "Enterprise CMS, CRM platforms, Analytics Suites, Custom-built MarTech",
    standout:
      "Legacy creative-tech agency with nearly three decades of delivery experience, known for mature digital engineering and enterprise-grade digital transformation. Ideal for large organisations needing complex ecosystems, global workflows and long-term digital roadmaps.",
  },
  {
    rank: 3,
    name: "Social Beat",
    website: "https://www.socialbeat.in",
    established: "2012",
    hq: "Chennai, Tamil Nadu",
    presence: "India, Dubai",
    services:
      "Performance Marketing, Influencer Marketing, Social Media Strategy, Video Production, SEO, Creative Campaigns",
    industries: "D2C, FMCG, BFSI, Real Estate, Retail",
    tools:
      "Automation Platforms, Influencer Dashboards, Media Planning Tools, Analytics Suites",
    standout:
      "One of India’s fastest-scaling digital agencies with performance-focused execution, creator ecosystems and strong media planning. Great fit for high-growth brands looking for aggressive scale and ROI-linked campaigns.",
  },
  {
    rank: 4,
    name: "Webchutney (Dentsu Creative)",
    website: "https://dentsucreative.com/india",
    established: "1999",
    hq: "Bengaluru (with Chennai operations)",
    presence: "20+ Countries",
    services:
      "Creative Strategy, Brand Storytelling, Digital Experiences, Production, Integrated Campaigns",
    industries: "Consumer Brands, Entertainment, Lifestyle, Technology",
    tools: "Creative Tech, Production Tools, Analytics Platforms",
    standout:
      "Award-winning digital storytelling powerhouse with bold, culture-led creative work. Ideal for brands prioritising digital-first brand building, viral ideas and high-impact integrated campaigns.",
  },
  {
    rank: 5,
    name: "WATConsult",
    website: "https://watconsult.com",
    established: "2007",
    hq: "Mumbai (Pan-India presence)",
    presence: "India, APAC",
    services:
      "Digital Transformation, Media Planning, Creative Strategy, Analytics, Social Listening, E-commerce Solutions",
    industries: "BFSI, Automotive, Enterprise, Retail, Telecom",
    tools: "MarTech suites, Commerce Analytics, Social Listening Tools",
    standout:
      "Known for integrated media + creative + analytics for enterprise clients. Strong at combining consumer behaviour, data intelligence and omnichannel media for large-scale campaigns.",
  },
  {
    rank: 6,
    name: "Mind Your Language (MYL)",
    website: "https://mylworld.com",
    established: "2014",
    hq: "Chennai",
    presence: "India",
    services:
      "Brand Strategy, Creative Communication, Content Production, Social Media, Digital Campaigns",
    industries: "Lifestyle, Retail, Hospitality, Branding-led Businesses",
    tools: "Creative Suites, Social Tools, Content Systems",
    standout:
      "Storytelling-heavy, design-led agency with strong focus on narrative clarity and brand voice. Perfect for lifestyle and hospitality brands needing premium creative identity and communication.",
  },
  {
    rank: 7,
    name: "Advertout Ventures",
    website: "https://advertoutdigital.com/",
    established: "2018",
    hq: "Chennai, Mumbai",
    presence: "India, Austin (Texas)",
    services:
      "SEO, PPC, Social Media Marketing, Web Development, Performance Campaigns",
    industries: "SMEs, Startups, Local Businesses",
    tools: "Google Ads, Meta Ads, SEO Tools, Analytics Platforms",
    standout:
      "Cost-efficient, outcome-driven execution tailored for startups and SMEs. Great for brands needing quick GTM, weekly momentum and clear performance deliverables within tight budgets.",
  },
  {
    rank: 8,
    name: "EchoVME Digital",
    website: "https://echovme.in",
    established: "2010",
    hq: "Chennai",
    presence: "India, Sri Lanka",
    services:
      "Social Media Marketing, Influencer Campaigns, SEO, Digital Training, Branding",
    industries: "Retail, Education, FMCG, Real Estate",
    tools: "Social Listening Platforms, Analytics Tools, Ad Platforms",
    standout:
      "One of Chennai’s early digital pioneers with strong roots in social media and influencer-led campaigns. Ideal for brands focusing on recall, community building and social-first storytelling.",
  },
  {
    rank: 9,
    name: "Dextra Technologies",
    website: "https://www.dextratechnologies.com",
    established: "2012",
    hq: "Chennai",
    presence: "India, USA, UAE",
    services:
      "Web Development, SEO, Digital Marketing, Mobility Solutions, Tech-Integrated Campaigns",
    industries: "IT, SaaS, Tech-enabled Businesses",
    tools: "Web Frameworks, SEO Tools, Performance Platforms",
    standout:
      "Blends development and digital marketing for companies needing strong tech integration, product sites, portals and digital workflows alongside marketing.",
  },
  {
    rank: 10,
    name: "Rankraze",
    website: "https://www.rankraze.com",
    established: "2017",
    hq: "Chennai",
    presence: "India",
    services: "SEO, SMO, PPC, SMM, Web Development",
    industries: "Local Businesses, SMEs, Retail",
    tools: "SEMrush, Google Ads, Analytics Tools, Meta Ads",
    standout:
      "Focused on quick execution, competitive pricing and straightforward services for small and medium businesses. Ideal for practical local campaigns and rapid visibility.",
  },
];

export default function AEOArticlePage107() {
  const post = POSTS.find((p) => p.id === 107) || POSTS[0];
  
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
              Top 10 Digital Marketing Agencies in Chennai: Your Blueprint for
              Smarter Brand Growth
            </span>
          </h1>
        </div>
      </header>

      {/* BODY: 3-column */}
      <section className="mx-auto grid grid-cols-1 gap-4 px-4 sm:px-6 py-8 lg:grid-cols-[260px_minmax(0,1fr)_250px]">
        {/* LEFT: TOC */}
        <WhatsInside items={tocItems} />

        {/* CENTER: ARTICLE */}
        <article className="prose prose-slate max-w-none md:prose-lg">
          <Intro />

          <Section
            id="chennai-digital-hub"
            title="Why Chennai Has Become a High-Velocity Digital Hub"
          >
            <p className="section-phara">
              Chennai isn’t just another city with agencies; it's a crucible
              where ambition, infrastructure, and market urgency collide. The
              city’s growth as a digital hub comes from more than noise: it’s
              fueled by a real, rising tide of internet users, mobile adoption
              and brand-side demand that’s ready to move fast.
            </p>
            <p className="section-phara">
              <strong>Consider the facts:</strong> India now has over 750
              million internet users, with national internet penetration
              crossing 50%.
            </p>

            <p className="section-phara">
              Smartphone usage and{" "}
              <Link
                href="https://backlinko.com/smartphone-usage-statistics"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                mobile internet penetration have skyrocketed
              </Link>
              ; most of Chennai’s urban population is online, often on mobile,
              consuming content, shopping, and discovering brands.
            </p>

            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Time spent by users on their Android Smart Phones everyday,
              country wise
            </h3>

            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-img-107-1.jpg"
              alt="How much time people spend on their android smartphones everyday by country. "
            />
            <p className="section-phara">
              That sets up a powerful opportunity for marketers. For local
              brands, startups, and retailers, digital isn’t optional anymore.
              It’s the main stage to perform.
            </p>
            <p className="section-phara">
              Now imagine the supply side: an ecosystem of agencies ranging from
              creative storytellers, performance-driven specialists, social and
              influencer experts, to tech-forward digital road smiths. Chennai
              houses a robust software and IT backbone, a deep pool of technical
              talent and digital savviness.
            </p>
            <p className="section-phara">
              Brands here need agility. They need quick-turnaround campaigns,
              hyperlocal targeting, performance execution, and measurable ROI.
              That’s far more valuable than long-drawn prestige or legacy
              claims.{" "}
            </p>
            <p className="section-phara">
              The urgency to convert, whether footfall in a gated community, or
              diners at a new biriyani outlet, demands nimble, result-driven
              action.
            </p>
            <p className="section-phara">
              {" "}
              This mix of{" "}
              <strong>
                {" "}
                massive digital adoption, appetite for fast results,{" "}
              </strong>{" "}
              and <strong>agency-level maturity plus diversity </strong> is what
              pushes Chennai into high gear.
            </p>
            <p className="section-phara">
              {" "}
              When you browse any list of the Top 10 digital marketing agencies
              in Chennai, the real value isn't in their name or age, it's their
              ability to deliver. Because in a city like this, performance
              outpaces pedigree every time.
            </p>
          </Section>

          {/* STEP 1 */}
          <Section
            id="evaluate-agency-chennai"
            title="How Brands Can Evaluate a Digital Marketing Agency in Chennai"
          >
            <p className="section-phara">
              Choosing a digital agency isn’t about collecting proposals; it’s
              about understanding and{" "}
              <Link
                href="https://www.ayatiworks.com/blogs/digital-marketing-services/how-to-evaluate-a-digital-marketing-agency-in-chennai"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                evaluating the digital agency
              </Link>{" "}
              deliverables.
            </p>
            <p className="section-phara">
              Chennai’s business landscape moves fast, and brands need partners
              who can keep pace, adapt mid-campaign, and translate strategy into
              measurable outcomes.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Capability Maturity
            </h3>
            <p className="section-phara">
              Look beyond the service menu. Evaluate whether the agency can
              integrate performance, creative, content, analytics, and media
              buying into one seamless engine. Execution strength is more
              valuable than long credentials.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Category Familiarity
            </h3>
            <p className="section-phara">
              {" "}
              An agency that already understands your industry’s buyer behaviour
              will hit the ground faster. Real estate, F&B, retail, healthcare,
              SaaS — each domain demands different velocity and different
              campaign logic.
            </p>

            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Tool Stack & Digital Infrastructure
            </h3>
            <p className="section-phara">
              Top-tier agencies in Chennai typically deploy automation
              platforms, AI-assisted content systems, analytics dashboards, CRM
              routing, bid optimisation tools, and creative suites. A strong
              tech foundation is now non-negotiable.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Transparency in Pricing & Delivery
            </h3>
            <p className="section-phara">
              Brands should expect clarity on what is covered under retainers,
              what scales with ad spend, and how performance metrics will be
              measured. Predictability creates trust.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              ROI-First Thinking
            </h3>
            <p className="section-phara">
              Case studies, conversion metrics, footfall data, content uplift,
              lead quality, agencies that show their math will usually show
              their results.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Creative + Performance Balance
            </h3>
            <p className="section-phara">
              Chennai’s best agencies blend storytelling with hard performance.
              A campaign should feel good and perform well. Data without
              imagination is half-power; imagination without data is a gamble.
            </p>
          </Section>

          {/* STEP 2 */}
          <Section
            id="chennai-advantage"
            title="Chennai’s Strongest Advantage and what brands should look for"
          >
            <p className="section-phara">
              One of Chennai’s strongest advantages is its multicultural
              audience. Brands today want campaigns that speak directly to local
              communities in their own language. That’s where{" "}
              <Link
                href="https://www.ayatiworks.com/content-as-a-service/multilingual-marketing"
                className="text-secondary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                multilingual execution
              </Link>{" "}
              becomes a competitive edge.
            </p>
            <p className="section-phara">
              {" "}
              Agencies with advanced content capabilities can roll out Tamil,
              Telugu, Hindi and other vernacular campaigns at scale, not only
              for social ads but for video scripts, landing pages, WhatsApp
              flows, influencer posts, and hyperlocal targeting.
            </p>
            <p className="section-phara">
              Local languages aren’t a <strong>“nice to have”</strong> anymore,
              they are performance accelerators, especially for retail, food,
              real estate, healthcare, and regional brands expanding across
              South India and beyond.
            </p>
          </Section>

          {/* STEP 3 */}
          <Section
            id="curated-top-agencies"
            title="How We Curated the Top 10 Digital Marketing Agencies in Chennai"
          >
            <p className="section-phara">
              Now let’s take a deep dive into how this list was curated, because
              the way an agency is evaluated matters just as much as the agency
              itself. Brands don’t need another random compilation; they need a
              lens that helps them make a smarter, faster, and more confident
              decision.
            </p>
            <p className="section-phara">
              To build this list of the{" "}
              <strong> Top 10 digital marketing agencies in Chennai, </strong>{" "}
              we looked at how each agency performs where it counts most:
            </p>

            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Market Presence & Credibility
            </h3>
            <p className="section-phara">
              Not just longevity, but the ability to stay relevant in a
              fast-evolving digital ecosystem. Agencies with sustained
              performance, strong repeat business, and visible client trust
              naturally rise to the top.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Breadth & Depth of Services
            </h3>
            <p className="section-phara">
              Modern brands expect integrated solutions. Agencies with
              well-rounded capabilities, performance marketing, content engines,
              creative storytelling, automation, analytics, and multilingual
              execution, were evaluated for their holistic strength.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Industry Experience
            </h3>
            <p className="section-phara">
              Some agencies shine in real estate. Some dominate F&B. Some thrive
              in SaaS or retail. Understanding where each agency performs best
              helps brands map the right partner to the right objective.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Execution Velocity
            </h3>
            <p className="section-phara">
              In Chennai’s dynamic environment, speed matters. Agencies that can
              strategize, execute, optimize, and scale quickly were given
              priority.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Tool Adoption & Tech Literacy
            </h3>
            <p className="section-phara">
              From analytics dashboards to AI-assisted workflows and automation
              platforms, agencies with strong digital infrastructure demonstrate
              greater ability to deliver predictable results.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              Innovation Footprint
            </h3>
            <p className="section-phara">
              We looked for signs of forward-thinking work, creative
              differentiation, data-driven campaigns, content innovation, AEO
              maturity, and the ability to adapt to platform shifts.
            </p>
            <p className="section-phara">
              The goal wasn’t to rank agencies by popularity, but to decode
              their strengths, so brands can pinpoint the partner that truly
              aligns with their mission, whether it’s footfall, conversions,
              lead velocity, brand storytelling, or hyperlocal dominance.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              {" "}
              On A Professional Note
            </h3>
            <p className="section-phara">
              This list is curated through generic research and market
              observation to help brands differentiate what each agency may
              excel at. It is designed to offer direction, not a verdict.
            </p>
            <p className="section-phara">
              We strongly encourage businesses to conduct thorough evaluations,
              assess portfolios, and speak directly with agencies before making
              a final decision, because the best partner is always the one
              aligned with your specific goals and challenges.
            </p>
          </Section>

          {/* TOP CHENNAI AGENCIES GRID */}
          <Section
            id="top-chennai-agencies"
            className="section-container mx-auto px-4 sm:px-6 py-10 sm:py-14"
          >
            {/* Header */}
            <header className=" mx-auto text-center mb-10 sm:mb-12">
              {/* <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-2">
                Chennai · Digital Marketing Agencies
              </p> */}
              <h2 className="section-title text-left text-3xl sm:text-4xl">
                Top Digital Marketing Agencies in Chennai for{" "}
                <span className="text-primary">Growth-Stage Brands</span>
              </h2>
              <p className="section-phara mt-4 text-slate-700">
                From full-funnel performance partners to creative storytelling
                specialists, these Chennai-based (and Chennai-powered) agencies
                cover everything from SEO and AEO to social media, branding and
                enterprise-grade digital transformation.
              </p>
            </header>

            {/* Grid / Stack */}
            <div className="space-y-5 sm:space-y-6">
              {AGENCIES.map((agency) => (
                <AgencyCard key={agency.rank} agency={agency} />
              ))}
            </div>
          </Section>

          {/* PRICING */}
          <Section
            id="pricing-intelligence-chennai"
            title="Pricing Intelligence: What to Expect in Chennai"
          >
            <div className="ml-0 md:ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Pricing varies widely based on scope, but here’s the market
                pulse:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Startup Retainers: ₹30,000-₹90,000/month",
                  "Growth-Stage Brand Mandates: ₹85,000-₹2,50,000/month",
                  "Enterprise Integrated Campaigns: ₹5-₹25 lakh/month",
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
              Cost structures typically align with deliverables across SEO,
              media spend management, creatives, and automation.
            </p>
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Disclaimer:
            </h3>
            <p className="section-phara">
              These pricing ranges are indicative market averages and not fixed
              quotations from any specific agency. They are intended to give
              brands a directional understanding of typical digital marketing
              investment levels in Chennai.
            </p>
            <div className="flex justify-center py-5">
              <Link
                href="/contact-us"
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                Request a quotation from Ayatiworks
              </Link>
            </div>
          </Section>

          {/* COMPARISON GRID */}
          <Section
            id="comparison-grid"
            title="Side-by-Side Comparison Grid"
          >
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              A quick summary for fast decisioning:
            </h3>

            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-img-107-2.jpg"
              alt="Top Chennai agencies comparison grid"
            />
          </Section>

          {/* WHICH AGENCY */}
          <Section
            id="which-agency-choose"
            title="Which Agency Should You Work With?"
          >
            <h3 className="section-title text-2xl text-secondary text-left my-5">
              Selection is context-dependent:
            </h3>

            <img
              src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/assets/blogImg/blog-img-107-3.jpg"
              alt="Decision framework for choosing a digital agency in Chennai"
            />
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

/* TOC items – aligned to this article */
export const tocItems = [
  {
    id: "intro",
    level: 1,
    label: "Before You Hire an Agency, Read This",
  },
  {
    id: "chennai-digital-hub",
    level: 1,
    label: "Why Chennai Has Become a High-Velocity Digital Hub",
  },
  {
    id: "evaluate-agency-chennai",
    level: 1,
    label: "How Brands Can Evaluate a Digital Marketing Agency in Chennai",
  },
  {
    id: "chennai-advantage",
    level: 1,
    label: "Chennai’s Strongest Advantage & What to Look For",
  },
  {
    id: "curated-top-agencies",
    level: 1,
    label: "How We Curated the Top 10 Agencies",
  },
  {
    id: "top-chennai-agencies",
    level: 1,
    label: "Top Digital Marketing Agencies in Chennai",
  },
  {
    id: "pricing-intelligence-chennai",
    level: 1,
    label: "Pricing Intelligence: What to Expect",
  },
  {
    id: "comparison-grid",
    level: 1,
    label: "Side-by-Side Comparison Grid",
  },
  {
    id: "which-agency-choose",
    level: 1,
    label: "Which Agency Should You Work With?",
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
    slug: "/blogs/digital-marketing-services/how-to-evaluate-a-digital-marketing-agency-in-chennai",
    date: "November 28, 2025",
    readMins: 10,
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-106.jpg",
    coverAlt:
      "Business evaluating a digital marketing agency in Chennai using a structured checklist.",
    deck:
      "Learn how to evaluate a digital marketing agency in Chennai with a structured, step-by-step method. Understand what to ask, how to judge capability,...",
      category: "Digital Marketing Services",
  },
  
];

/* Content sections */
function Intro() {
  return (
    <section id="intro" className="scroll-mt-24">
      <p className="section-title mb-4 text-left text-3xl">
        <em>When Brands Stop Chasing Crowns and Start Hiring Warriors</em>
      </p>
      <p className="section-phara">
        The search for the best digital marketing agency is rarely about the
        best.
      </p>
      <p className="section-phara">
        It’s about who can walk into the arena and deliver outcomes without
        hiding behind credentials or clever taglines.
      </p>
      <p className="section-phara">
        Brands don’t crave emperors with long titles; they want warriors who
        fight the right battles on the right platforms at the right time. That’s
        the real psychology behind every business browsing the{" "}
        <Link
          href="/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          Top 10 Digital Marketing Agencies in Chennai.
        </Link>
      </p>
      <p className="section-phara">
        They’re not admiring logos on an agency website. They’re quietly asking,{" "}
        <strong>
          “Who here actually understands the mission I’m trying to win?”{" "}
        </strong>{" "}
        (A Client’s expectation)
      </p>
      <h4 className="section-title text-2xl text-secondary text-left my-5">
        A real time example:{" "}
      </h4>
      <h4 className="section-title text-2xl text-primary text-left my-5">
        Consider these 2 businesses and their dilemmas:
      </h4>
      <p className="section-phara">
        A real estate developer in Chennai needs weekend footfall to their model
        gated community site. Not next quarter, this weekend.{" "}
      </p>
      <p className="section-phara">
        They want campaigns that trigger action between Friday evening and
        Sunday afternoon, not a 180-day SEO roadmap.
      </p>
      <p className="section-phara">
        A new biriyani restaurant is set to open with a “Buy One Biriyani, Get
        One Free” offer valid only for the first week. They need local buzz,
        offer-driven ads, and audience heat maps that translate into footfalls,
        not a meticulously documented keyword strategy.
      </p>
      <p className="section-phara">
        Both brands are browsing the same list of agencies, but they’re not
        looking for the same skill set.{" "}
      </p>
      <p className="section-phara">
        And here’s the truth the industry usually sugarcoats:
      </p>
      <p className="section-phara">
        Not every agency is built to serve every brand.
      </p>
      <p className="section-phara">
        Some thrive on speed. Some excel in deep strategy. Some move mountains
        with creativity. Some specialize in performance under pressure. The
        mismatch begins when brands assume all agencies are interchangeable.
      </p>
      <p className="section-phara">
        But you must keep an eye on the digital agencies that offer end-to-end
        digital marketing services and evaluate how they operate and whether
        they have the resources, experience and expertise to support the mission
        you are trying to win
      </p>
      <p className="section-phara">
        That’s why this comparison guide was built, to decode where each agency
        in Chennai truly shines and how businesses can deploy them to their
        highest potential.{" "}
      </p>
      <p className="section-phara">
        Not every agency needs to be a universal solution. They just need to be
        the right solution for the problem in front of them.
      </p>
    </section>
  );
}

function Section({ id, title, children, className = "" }) {
  return (
    <section
      id={id}
      className={["scroll-mt-24", className].join(" ").trim()}
    >
      {title && (
        <h2 className="mt-8 text-left text-2xl section-title">{title}</h2>
      )}
      <div className="mt-3">{children}</div>
    </section>
  );
}

function FAQAccordion() {
  const faqs = [
    {
      q: "Which is the best digital marketing agency in Chennai?",
      a: "Ayatiworks LLP stands out with strategy-led content, SEO systems, and ROI-focused execution trusted by global brands.",
    },
    {
      q: "Which agency offers the best SEO services in Chennai?",
      a: "Ayatiworks LLP delivers strong AEO + SEO integration with high-impact content frameworks for scalable traffic growth.",
    },
    {
      q: "How much does a digital marketing agency charge in Chennai?",
      a: "Pricing ranges from ₹30,000/month for startups to over ₹5 lakh/month for enterprise omnichannel mandates.",
    },
    {
      q: "Can agencies guarantee results?",
      a: "No credible agency guarantees specific traffic or revenue numbers, but they do commit to KPIs, milestones, and ROI pathways.",
    },
    {
      q: "What KPIs should businesses track?",
      a: "Organic growth, CAC, ROAS, lead quality index, retention uplift, and content distribution efficiency.",
    },
    {
      q: "How long does digital marketing take to show results?",
      a: "SEO takes 3-6 months; performance campaigns show data patterns within days but optimize over 30-90 days.",
    },
    {
      q: "Do Chennai agencies work with global brands?",
      a: "Yes. Multiple agencies, including Ayatiworks, Social Beat, Rage, and others handle multinational clients across markets.",
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
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">
          {post.deck}
        </p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}

function AgencyCard({ agency }) {
  const {
    rank,
    name,
    website,
    established,
    hq,
    presence,
    services,
    industries,
    tools,
    standout,
    highlight,
  } = agency;

  const isTop = rank === 1 || highlight;

  return (
    <article
      className={[
        "relative overflow-hidden rounded-2xl border bg-white",
        "transition-all duration-200",
        isTop
          ? "border-primary/40 shadow-[0_18px_40px_rgba(10,73,145,0.15)]"
          : "border-slate-200 shadow-[0_10px_24px_rgba(15,23,42,0.06)] hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]",
      ].join(" ")}
    >
      {/* Rank pill */}
      {/* <div
        className={[
          "absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
          isTop
            ? "bg-primary text-white"
            : "bg-slate-900/80 text-slate-100",
        ].join(" ")}
      >
        <span className="text-[11px]">#{rank}</span>
        <span className="hidden sm:inline">Agency</span>
      </div> */}

      {/* Subtle gradient for top card */}
      {isTop && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" />
      )}

      <div className="relative grid grid-cols-1 gap-5 p-5 sm:p-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        {/* LEFT: Core info */}
        <div className="space-y-4">
          {/* Title + link */}
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="section-title text-left text-xl sm:text-2xl">
              {name}
            </h3>
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-800 hover:bg-primary hover:text-white hover:border-primary transition-colors"
            >
              Visit Website
            </Link>
          </div>

          {/* Meta row */}
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-600">
            <MetaPill label="Established" value={established} />
            <MetaPill label="Headquarters" value={hq} />
            <MetaPill label="Presence" value={presence} />
          </div>

          {/* Why they stand out */}
          <div className="mt-1 rounded-xl bg-slate-50/80 p-3 sm:p-4">
            <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-primary mb-1.5">
              Why they stand out
            </p>
            <p className="section-phara text-sm sm:text-[15px] text-slate-800">
              {standout}
            </p>
          </div>
        </div>

        {/* RIGHT: Services / tags */}
        <div className="space-y-3 sm:space-y-4">
          {/* Services */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-1.5">
              Core Services
            </p>
            <TagGroup text={services} />
          </div>

          {/* Industries */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-1.5">
              Industry Focus
            </p>
            <TagGroup text={industries} variant="soft" />
          </div>

          {/* Tools */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-500 mb-1.5">
              Tools & Tech
            </p>
            <TagGroup text={tools} variant="outline" />
          </div>
        </div>
      </div>
    </article>
  );
}

function MetaPill({ label, value, icon }) {
  if (!value) return null;
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
      {icon && <span className="text-[11px]">{icon}</span>}
      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </span>
      <span className="h-3 w-px bg-slate-300 mx-0.5" aria-hidden="true" />
      <span className="text-[11px] sm:text-[12px] text-slate-800">
        {value}
      </span>
    </div>
  );
}

function TagGroup({ text, variant = "solid" }) {
  if (!text) return null;
  const items = text
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const base =
    "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] mb-1 mr-1";
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-700"
      : variant === "soft"
      ? "bg-slate-100 text-slate-800"
      : "bg-primary/10 text-primary-700";

  return (
    <div className="flex flex-wrap">
      {items.map((item) => (
        <span key={item} className={`${base} ${styles}`}>
          {item}
        </span>
      ))}
    </div>
  );
}
