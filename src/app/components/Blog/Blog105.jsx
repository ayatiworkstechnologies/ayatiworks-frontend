"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { IoCheckmarkDone } from "react-icons/io5";
import Link from "next/link";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function AEOArticlePage105() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO BANNER */}
      <section className="mx-auto max-w-8xl px-4 sm:px-6 pt-6">
        <SplitHeroBanner
          href="#"
          imageSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-105.jpg"
          imageAlt="Benefits of hiring a Chennai-based digital marketing agency for business growth"
          category="Digital Marketing Services"
          title={[
            "Why Chennai Brands Grow Faster with Local Digital Partners.",
          ]}
          author={{
            name: "Daniel Joseph",
            slug: "daniel-joseph",
            role: "Senior SEO Strategist",
            avatar:
              "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/author/daniel.png",
          }}
          updatedAt="Nov 21, 2025"
          readMins={8}
        />
      </section>

      {/* MAIN TITLE */}
      <header className="border-b border-slate-200 section-container bg-white">
        <div className="mx-auto px-4 sm:px-6 py-10">
          <h1 className="mx-auto text-center section-title">
            <span className="text-primary">
              5 Key Benefits of Hiring a Chennai-Based Digital Marketing Agency
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
            id="why-chennai-powerhouse"
            title="Why Local Expertise Matters for Chennai Brands"
          >
            <p className="section-phara">
              Chennai’s digital landscape is unique. Consumer behaviour shifts
              by neighbourhood.
            </p>
            <p className="section-phara">
              Spending capacity changes between zones. A copy that works in Anna
              Nagar may not work in OMR.
            </p>
            <p className="section-phara">
              A campaign that converts in Velachery may underperform in T.
              Nagar.
            </p>
            <p className="section-phara">
              This is why Chennai businesses increasingly lean towards agencies
              that aren’t just service providers, but local market experts.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A Chennai-based digital marketing agency understands:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "City-specific search behaviour",
                  "Local cultural nuances and language preferences",
                  "Seasonal buying patterns (from Margazhi to Pongal)",
                  "Regional intent drivers across different demographics",
                  "Competitive dynamics unique to Chennai categories",
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
              This understanding directly translates to higher campaign
              efficiency, fewer iterations, and more authentic engagement.
            </p>
          </Section>

          {/* BENEFIT 1 */}
          <Section
            id="benefit-1"
            title="Benefit 1: Faster Communication & On-Ground Collaboration"
          >
            <p className="section-phara">
              One of the biggest advantages in hiring a digital marketing agency
              in Chennai is speed.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                1. No time-zone delays, no task backlogs
              </h3>
              <p className="section-phara">
                When your team and the agency are in the same city,
                communication becomes instant. Approvals, revisions, pivots—
                everything happens faster.
              </p>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                2. Face-to-face strategy sessions
              </h3>
              <p className="section-phara">
                Unlike national agencies, a Chennai agency can walk into your
                office, understand your business physically, meet leadership
                teams, and collaborate more naturally.
              </p>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                3. Real-time campaign adaptation
              </h3>
              <p className="section-phara">
                Major moments in Chennai—weather changes, festival
                announcements, local events—can demand immediate content or ad
                changes.
              </p>
              <p className="section-phara">
                A local team can respond in minutes, not days.
              </p>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                4. Smoother coordination with your internal teams
              </h3>
              <p className="section-phara">
                Brand, sales, design, customer support—all align better when the
                agency can meet them anytime.
              </p>
              <p className="section-phara">
                For founders and marketing managers, this means more agility,
                more accuracy, and campaigns that keep momentum.
              </p>
            </div>
          </Section>

          {/* BENEFIT 2 */}
          <Section
            id="benefit-2"
            title="Benefit 2: Better Control & Transparency Over Your Marketing"
          >
            <p className="section-phara">
              Control is one of the most overlooked but powerful benefits of
              choosing a local agency.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                1. Clear visibility into deliverables
              </h3>
              <p className="section-phara">
                You can review work more frequently, understand what’s happening
                behind the scenes, and hold teams accountable without waiting
                for “monthly updates.”
              </p>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                2. Less dependency on documentation-heavy processes
              </h3>
              <p className="section-phara">
                Since your agency is nearby, smaller discussions happen faster,
                alignment happens seamlessly, and there’s greater operational
                flexibility.
              </p>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                3. Better oversight on brand communication
              </h3>

              <p className="section-phara">
                <span className="font-primary text-2xl text-primary">
                  Founders and CMOs can ensure that:
                </span>
              </p>

              <ul className="ml-10 mt-3 space-y-2">
                {[
                  "Messaging stays consistent",
                  "Campaigns stay on-brand",
                  "Creative tone matches the Chennai audience’s expectations",
                ].map((name) => (
                   <ul key={name} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                        aria-hidden="true"
                      >
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-black/80 section-phara text-lg">
                        <span className="font-medium text-black">{name}</span>
                      </span>
                    </ul>
                ))}
              </ul>

              <h3 className="section-title text-2xl text-secondary text-left my-5">
                4. Local accountability = higher ownership
              </h3>
              <p className="section-phara">
                A Chennai-based agency can’t disappear behind corporate
                structure. They’re accountable, reachable, and invested in your
                success.
              </p>
              <p className="section-phara">
                This level of <strong>control + transparency</strong> is rarely
                possible with large-scale or cross-city agencies.
              </p>
            </div>
          </Section>

          {/* BENEFIT 3 */}
          <Section
            id="benefit-3"
            title="Benefit 3: In-Depth Understanding of Chennai’s Consumer Behaviour"
          >
            <p className="section-phara">
              Digital success is no longer just about keywords and ad budget.
              It’s about understanding people, their behaviour, and what
              influences their decisions.
            </p>

            <div className="ml-10 mb-4">
              <p className="section-phara">
                <span className="font-primary text-2xl text-primary">
                  A local Chennai agency has real on-ground insights into:
                </span>
              </p>
              <ul className="ml-10 mt-3 space-y-2">
                {[
                  "Regional language usage in search queries",
                  "Local festival-driven purchase intent",
                  "Chennai’s unique buyer psychology across demographics",
                  "Neighbourhood-level consumer patterns",
                  "Chennai-specific cultural hooks that boost engagement",
                  "Micro-trends on platforms like Instagram and YouTube",
                  "Offline influences that affect online behaviour",
                ].map((name) => (
                  <ul key={name} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                        aria-hidden="true"
                      >
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-black/80 section-phara text-lg">
                        <span className="font-medium text-black">{name}</span>
                      </span>
                    </ul>
                ))}
              </ul>
            </div>

            <h4 className="section-title text-2xl text-secondary text-left my-5">
              Hyperlocal SEO Advantage
            </h4>
            <p className="section-phara">
              Search queries in Chennai are highly region-specific.
            </p>

            <div className="ml-10 mb-4">
              <p className="section-phara">
                <span className="font-primary text-2xl text-primary">
                  Examples:
                </span>
              </p>
              <ul className="ml-10 mt-3 space-y-2">
                {[
                  "best urgent care adyar",
                  "wedding photographers tambaram",
                  "digital marketing agency chennai",
                  "interior designers ECR",
                ].map((name) => (
                   <ul key={name} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                        aria-hidden="true"
                      >
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-black/80 section-phara text-lg">
                        <span className="font-medium text-black">{name}</span>
                      </span>
                    </ul>
                ))}
              </ul>
            </div>

            <p className="section-phara">
              A Chennai agency knows how to craft hyperlocal SEO clusters with
              relevance-rich content, location modifiers, and local authority
              signals.
            </p>

            <h4 className="section-title text-2xl text-secondary text-left my-5">
              Chennai-Specific Ad Messaging That Converts
            </h4>
            <p className="section-phara">
              A campaign written for a generic Indian audience often
              underperforms in Chennai.
            </p>
            <p className="section-phara">
              A local team knows what emotionally resonates here—from tone of
              voice to bilingual captions to festival-led storytelling.
            </p>

            <div className="ml-10 mb-4">
              <p className="section-phara">
                <span className="font-primary text-2xl text-primary">
                  This creates a direct uplift in:
                </span>
              </p>
              <ul className="ml-10 mt-3 space-y-2">
                {["CTR", "Engagement", "Conversion rate", "Brand trust"].map(
                  (name) => (
                    <ul key={name} className="flex items-start gap-3">
                      <span
                        className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/10 ring-1 ring-blue-600/20"
                        aria-hidden="true"
                      >
                        <IoCheckmarkDone className="h-5 w-5 text-primary" />
                      </span>
                      <span className="text-black/80 section-phara text-lg">
                        <span className="font-medium text-black">{name}</span>
                      </span>
                    </ul>
                  )
                )}
              </ul>
            </div>
          </Section>

          {/* BENEFIT 4 */}
          <Section
            id="benefit-4"
            title="Benefit 4: Cost-Efficiency Compared to National Agencies"
          >
            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                Hiring large national agencies based out of Bengaluru, Mumbai,
                or Gurgaon comes with higher retainers due to:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Premium city overheads",
                  "Expensive talent-acquisition costs",
                  "Additional management layers",
                  "Inflated pricing structures",
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
                Our
                <Link
                  href="https://ayatiworks.com/digital-marketing-services/"
                  className="text-secondary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                >
                  {" "}
                  digital marketing services{" "}
                </Link>
                offer the same quality—sometimes better—at more cost-effective
                pricing because of:
              </h3>

              <ul className="mt-4 space-y-2">
                {[
                  "Lower operational overheads",
                  "No added geographic premium",
                  "Leaner yet high-skilled teams",
                  "Faster turnaround, reducing hidden costs",
                  "Access to local specialists at optimal pricing",
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
              For growing businesses, this means higher ROI at lower investment.
            </p>
          </Section>

          {/* BENEFIT 5 */}
          <Section
            id="benefit-5"
            title="Benefit 5: Access to a Full-Stack Team of Specialists—Without Hiring Internally"
          >
            <p className="section-phara">
              Building an in-house team is expensive, time-consuming, and
              operationally heavy.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                A Chennai digital marketing agency gives you immediate access to:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "SEO specialists",
                  "Performance marketers",
                  "Paid ads strategists",
                  "Social media managers",
                  "Content writers & strategists",
                  "Designers",
                  "Videographers",
                  "Developers",
                  "Analytics experts",
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

            <p className="section-phara">All under one umbrella.</p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-secondary text-left my-5">
                This means you skip the cost and complexity of:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Hiring",
                  "Onboarding",
                  "Payroll",
                  "Training",
                  "Retention",
                  "Infrastructure",
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
              Instead, you get a “plug-and-play” team that integrates seamlessly
              with your brand.
            </p>
          </Section>

          {/* CORE SERVICES */}
          <Section
            id="core-services"
            title="How Ayatiworks Helps Chennai Businesses Achieve National-Scale ROI"
          >
            <p className="section-phara">
              Ayatiworks isn’t just a digital agency—we are deeply integrated
              into the Chennai business ecosystem. We combine local insights
              with national-level expertise to help brands grow, scale, and stay
              ahead of the competitive curve.
            </p>

            <div className="ml-10 mb-4">
              <h3 className="section-title text-2xl text-left my-5">
                Our strategies are built for fast-scaling brands who want:
              </h3>
              <ul className="mt-4 space-y-2">
                {[
                  "Measurable performance",
                  "Deeper market penetration",
                  "Hyperlocal + national reach",
                  "Content-led growth",
                  "ROI-driven campaigns",
                  "Long-term brand authority",
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

          {/* CLOSING SECTION */}
          <Section
            id="choose-chennai-agency"
            title="Choose a Chennai Agency That Understands Your Business Inside Out"
          >
            <p className="section-phara">
              Hiring a Chennai-based digital marketing agency isn’t just a
              convenience decision—it’s a growth decision.
            </p>
            <p className="section-phara">
              The local expertise, faster delivery, cultural understanding,
              higher control, and cost efficiency all combine to create a
              significant strategic edge for your business.
            </p>
            <p className="section-phara">
              If you’re ready to work with a Chennai agency that blends local
              relevance with global execution standards, Ayatiworks is here to
              help you scale.
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

export function WhatsInside({ items }) {
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
  imageSrc = "/banner/aoe-blogs-web.webp",
  imageAlt = "AI Search Optimization Strategies for Businesses in 2025 – Visual Guide to AEO Implementation",
  category = "SEO",
  title = ["What Is lms.txt? The", "New AI Web Standard", "for 2025"],
  author = {
    name: "Daniel Joseph",
    slug: "daniel-joseph",
    role: "Content Writer",
    avatar: "/assets/teams/daniel.png",
  },
  updatedAt = "Oct 22, 2025",
  readMins = 11,
}) {
  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${title.join(" ")}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${title.join(" ")}`}
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
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* BOTTOM META */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100/90">
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
                  <div>
                    <div className="font-primary text-xl hover:underline">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              <Bar />

              <div className="text-center font-secondary text-slate-300/85">
                <span className="font-primary text-base text-white">
                  {updatedAt}
                </span>
                <br />
                Last Updated
              </div>

              <Bar />

              <div className="text-center font-primary font-medium text-white">
                {readMins} Min
                <br />
                <span className="font-secondary text-slate-300/85">Read</span>
              </div>
            </div>
          </div>
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

/* TOC items – UPDATED to match actual sections */
export const tocItems = [
  { id: "intro", level: 1, label: "I. Introduction" },
  {
    id: "why-chennai-powerhouse",
    level: 1,
    label: "II. Why Local Expertise Matters for Chennai Brands",
  },
  {
    id: "benefit-1",
    level: 1,
    label: "III. Benefit 1: Faster Communication & On-Ground Collaboration",
  },
  {
    id: "benefit-2",
    level: 1,
    label: "IV. Benefit 2: Better Control & Transparency",
  },
  {
    id: "benefit-3",
    level: 1,
    label: "V. Benefit 3: Understanding Chennai’s Consumer Behaviour",
  },
  {
    id: "benefit-4",
    level: 1,
    label: "VI. Benefit 4: Cost-Efficiency vs National Agencies",
  },
  {
    id: "benefit-5",
    level: 1,
    label:
      "VII. Benefit 5: Full-Stack Team of Specialists Without Hiring Internally",
  },
  {
    id: "core-services",
    level: 1,
    label:
      "VIII. How Ayatiworks Helps Chennai Businesses Achieve National-Scale ROI",
  },
  {
    id: "choose-chennai-agency",
    level: 1,
    label:
      "IX. Choose a Chennai Agency That Understands Your Business Inside Out",
  },
  {
    id: "faq",
    level: 1,
    label: "X. Frequently Asked Questions (FAQs)",
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
    cover: "https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/blog-104.jpg",
    coverAlt:
      "Chennai digital marketing agency delivering pan-India ROI ",
    deck:
      "Discover how Chennai’s top digital agencies drive national-scale growth. See how brands like Volvo, Nippo & Jeep scaled with Ayatiworks’ expertise...",
    category: "Digital Marketing Services",
  },
  {
    id: 106,
    title: "How to Evaluate a Digital Marketing Agency in Chennai",
    slug: "digital-marketing-services/how-to-evaluate-a-digital-marketing-agency-in-chennai",
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
      <p className="section-phara">
        When your business is ready to scale, choosing the right marketing
        partner becomes one of the most defining decisions. And while national
        or pan-India agencies often look more attractive, brands realize that
        the strongest ROI comes from going local, especially in a city as
        dynamic as Chennai.
      </p>
      <p className="section-phara">
        In our previous article,
        <Link
          href="/blogs/digital-marketing-services/chennai-digital-marketing-services/"
          className="text-secondary hover:underline"
          target="_blank"
          rel="noopener noreferrer"
          prefetch={false}
        >
          {" "}
          Chennai Digital Marketing Services,
        </Link>{" "}
        we explored how Chennai agencies deliver national-scale performance.
      </p>
      <p className="section-phara">
        This week, we take that conversation deeper, into the{" "}
        <strong>
          five most impactful benefits of hiring a Chennai-based digital
          marketing agency,
        </strong>{" "}
        and why the “local advantage” is becoming a competitive differentiator
        for businesses across categories.
      </p>
      <p className="section-phara">
        Whether you’re a startup founder, enterprise leader, or marketing
        manager evaluating partners, here’s what choosing local actually means
        for your growth.
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
      q: "What are the biggest advantages of hiring a Chennai-based digital marketing agency?",
      a: "Local agencies offer faster communication, better cultural alignment, hyperlocal consumer insights, and more control over deliverables, all of which improve ROI and reduce execution delays.",
    },
    {
      q: "How does a Chennai agency understand the local audience better?",
      a: "A local team observes Chennai’s micro-trends daily, language preferences, festival-driven spikes, neighbourhood-specific buyer behaviour, and city-specific search patterns, helping craft campaigns that connect instantly.",
    },
    {
      q: "Is partnering with a Chennai digital agency more cost-effective than choosing a metro-based agency?",
      a: "Yes. Chennai agencies deliver national-quality work at more efficient pricing because their operating costs are lower and their team structures are leaner, giving brands more ROI per rupee spent.",
    },
    {
      q: "How do Chennai agencies maintain transparency and control during ongoing campaigns?",
      a: "With close proximity, weekly reviews, accessible teams, and face-to-face meetings, brands get complete visibility on deliverables, performance metrics, changes, and strategic direction, without communication gaps.",
    },
    {
      q: "Why do fast-growing brands prefer Ayatiworks as their Chennai digital marketing partner?",
      a: "Ayatiworks blends local market intelligence with national-scale execution, offering SEO, paid ads, social media, content, and analytics under one roof. Brands choose us for our agility, performance-driven approach, and strategic depth.",
    },
    {
      q: "How does Ayatiworks ensure measurable ROI for Chennai businesses?",
      a: "We build data-backed, intent-driven campaigns supported by strong analytics, clear reporting systems, and a full-stack execution team. Every campaign is structured to improve conversions, reduce waste, and deliver predictable growth.",
    },
    {
      q: "What makes Ayatiworks different from other digital marketing agencies in Chennai?",
      a: "Ayatiworks stands out for its combination of local expertise, hands-on collaboration, transparent communication, and scalable digital strategies, helping Chennai businesses compete and grow at a national level.",
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
        <p className="font-secondary text-lg text-black/80">{a}</p>
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
