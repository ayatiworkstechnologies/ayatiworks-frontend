"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Trophy,
  CaseSensitive,
  BookText,
  LineChart,
} from "lucide-react";

/* ROUTES */
const BLOGS_PATH = "/insights/blogs";
const CASES_PATH = "/case-study";
const AWARDS_PATH = "/awards";

/* STUB IMAGES (replace with your assets / CMS) */
const HERO_IMG = "/images/insights/hero-team.jpg";
const BLOG_IMAGES = [
  "/images/insights/blog-1.jpg",
  "/images/insights/blog-2.jpg",
  "/images/insights/blog-3.jpg",
];
const CASE_IMAGES = {
  volvo: "/images/cases/volvo.jpg",
  healthcare: "/images/cases/healthcare.jpg",
  realestate: "/images/cases/realestate.jpg",
};
const AWARD_IMAGES = [
  "/images/awards/maddys.png",
  "/images/awards/agency-growth.png",
  "/images/awards/client-choice.png",
];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

const Eyebrow = ({ children }) => (
  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
    <Sparkles className="h-3.5 w-3.5" />
    <span className="tracking-wide">{children}</span>
  </div>
);

/* ------------ HERO ------------ */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(124,58,237,0.12),transparent_60%)]" />
      <div className="mx-auto grid grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <motion.div {...fadeUp}>
          <Eyebrow>Insights, Ideas, Impact & Inspiration</Eyebrow>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Explore Ayatiworks <span className="text-primary">Insights</span> - strategy meets creativity
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            From marketing trends to real-world case studies, see how data,
            storytelling, and innovation grow brands.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={BLOGS_PATH}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:shadow-md"
            >
              Read our latest blogs <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={CASES_PATH}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              Explore case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Quick nav chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="#blogs"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-black/[0.03]"
            >
              <BookText className="mr-1 inline h-3.5 w-3.5" />
              Blogs
            </Link>
            <Link
              href="#case-studies"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-black/[0.03]"
            >
              <CaseSensitive className="mr-1 inline h-3.5 w-3.5" />
              Case Studies
            </Link>
            <Link
              href="#awards"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-black/[0.03]"
            >
              <Trophy className="mr-1 inline h-3.5 w-3.5" />
              Awards
            </Link>
          </div>
        </motion.div>

        <motion.div {...scaleIn} className="relative mx-auto w-full max-w-xl md:max-w-none">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <img
              src={HERO_IMG}
              alt="Ayatiworks team collaborating"
              className="h-80 w-full object-cover md:h-[420px]"
              loading="eager"
              decoding="async"
            />
            {/* overlay chips */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex gap-2">
              <div className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-800 backdrop-blur">
                Performance Marketing
              </div>
              <div className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-800 backdrop-blur">
                Brand Strategy
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------ SECTION WRAPPER ------------ */
function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-14 sm:py-20">
      <div className="mx-auto px-4">
        <motion.div {...fadeUp}>
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
              {description}
            </p>
          ) : null}
        </motion.div>
        <div className="mt-8">{children}</div>
      </div>

      {/* soft décor */}
      <div className="pointer-events-none absolute -top-12 left-0 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 right-0 -z-10 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
    </section>
  );
}

/* ------------ IMAGE CARD (uses <img>) ------------ */
function ImageCard({ href, img, alt, icon, title, description, cta }) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {/* absolute full-cover image */}
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
      </div>
      <div className="p-5">
        <div className="mb-1 flex items-center gap-2 text-slate-700">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white">
            {icon}
          </span>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        </div>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        {cta && (
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary">
            {cta}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        )}
      </div>
    </Link>
  );
}

/* ------------ CASE CARD WITH IMAGE OVERLAY (uses <img>) ------------ */
function CaseImageCard({ href, img, alt, client, blurb, metrics = [] }) {
  return (
    <Link href={href} className="group relative overflow-hidden rounded-3xl" aria-label={`${client} case study`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <div className="flex items-center gap-2 text-white/90">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur">
              <LineChart className="h-4.5 w-4.5" />
            </span>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-white/80">Case Study</p>
              <h3 className="text-lg font-semibold">{client}</h3>
            </div>
          </div>
          <p className="mt-2 text-sm text-white/85">{blurb}</p>
          {metrics.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/15 bg-white/10 p-2 text-center text-white/90 backdrop-blur">
                  <div className="text-[10px] uppercase tracking-wide">{m.label}</div>
                  <div className="text-base font-semibold">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}

/* =================== PAGE =================== */
export default function Page() {
  return (
    <main className="relative">
      <Hero />

      {/* BLOGS */}
      <Section
        id="blogs"
        eyebrow="Blogs"
        title="Fresh Thinking for the Digital Age"
        description="Actionable ideas on SEO, social media, performance, and brand strategy—so you can stay ahead."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_IMAGES.map((img, i) => (
            <ImageCard
              key={img}
              href={BLOGS_PATH}
              img={img}
              alt={`Blog ${i + 1}`}
              icon={<BookText className="h-4.5 w-4.5" />}
              title={`Trend Brief #${i + 1}`}
              description="A quick read on what's shifting in digital right now—signal over noise."
              cta="Read blog"
            />
          ))}
        </div>

        <div className="mt-7">
          <Link
            href={BLOGS_PATH}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
          >
            Read our latest blogs on digital marketing trends
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section
        id="case-studies"
        eyebrow="Case Studies"
        title="Strategies That Delivered Impact"
        description="See how our campaigns translate into measurable results—objectives, strategies, and outcomes that grow brands."
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CaseImageCard
            href={CASES_PATH}
            img={CASE_IMAGES.volvo}
            alt="Volvo campaign"
            client="Volvo"
            blurb="Precision targeting across southern metros to scale qualified leads."
            metrics={[{ label: "Leads", value: "+138%" }, { label: "CPL", value: "-32%" }]}
          />
          <CaseImageCard
            href={CASES_PATH}
            img={CASE_IMAGES.healthcare}
            alt="Healthcare client"
            client="Healthcare Client"
            blurb="Omnichannel funnel for elective care with privacy-safe analytics."
            metrics={[{ label: "Bookings", value: "+74%" }, { label: "ROAS", value: "3.2x" }]}
          />
          <CaseImageCard
            href={CASES_PATH}
            img={CASE_IMAGES.realestate}
            alt="Real estate launch"
            client="Real Estate"
            blurb="Full-funnel launch: video + search + WhatsApp automation for site visits."
            metrics={[{ label: "Site Visits", value: "+92%" }, { label: "Cost/Visit", value: "-27%" }]}
          />
        </div>

        <div className="mt-7">
          <Link
            href={CASES_PATH}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Browse all case studies <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* AWARDS */}
      <Section
        id="awards"
        eyebrow="Awards"
        title="Recognizing Our Journey of Excellence"
        description="Our awards reflect the trust of our clients and the passion of our team. See how we set benchmarks for creativity and performance."
      >
        {/* Badge strip */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mx-auto grid grid-cols-3 items-center gap-6 sm:gap-10">
            {AWARD_IMAGES.map((src) => (
              <div key={src} className="relative mx-auto h-10 w-36 sm:h-12 sm:w-44">
                <img
                  src={src}
                  alt="Award badge"
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Award blurbs */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { title: "MADDYS South 2025", copy: "Regional recognition for creative effectiveness." },
            { title: "Agency Growth Awards", copy: "Scaling teams, impact, and outcomes." },
            { title: "Client Choice Honors", copy: "Trust earned across partnerships." },
          ].map((a) => (
            <div
              key={a.title}
              className="flex h-full flex-col items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur"
            >
              <Trophy className="h-8 w-8" />
              <p className="text-sm font-semibold text-slate-900">{a.title}</p>
              <p className="text-xs text-slate-600">{a.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-7">
          <Link
            href={AWARDS_PATH}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-black/5"
          >
            See all awards <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </main>
  );
}
