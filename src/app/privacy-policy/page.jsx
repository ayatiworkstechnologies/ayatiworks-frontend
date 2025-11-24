// app/components/PrivacyPolicy.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Database,
  FileCheck,
  Clock,
  Mail,
  ChevronDown,
  ArrowUp,
  Building2,
  FilePenLine,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const LAST_UPDATED_ISO = "2025-09-16";
const LAST_UPDATED_LABEL = "September 16, 2025";

const SECTIONS = [
  {
    id: "intro",
    title: "1) Overview",
    icon: <Shield className="h-5 w-5" />,
    body: (
      <>
        <p>
          At{" "}
          <strong className="font-medium font-primary text-2xl text-primary">
            Ayatiworks Technologies LLP
          </strong>
          , we are committed to protecting the privacy and security of our
          clients’ and users’ personal information. This Privacy Policy explains
          how we collect, use, disclose, and safeguard personal information in
          compliance with Indian laws.
        </p>
      </>
    ),
  },
  {
    id: "collection",
    title: "2) Collection of Personal Information",
    icon: <Database className="h-5 w-5" />,
    body: (
      <>
        <p>
          We collect personal information directly from clients or users through
          online forms, email, phone, or in-person communication. This may
          include:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Name</li>
          <li>Contact details (email, phone number, address)</li>
          <li>Demographic data</li>
          <li>Job title and company information</li>
          <li>Any other details necessary to provide our services</li>
        </ul>
      </>
    ),
  },
  {
    id: "use",
    title: "3) Use of Personal Information",
    icon: <FileCheck className="h-5 w-5" />,
    body: (
      <>
        <p>We use personal information to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Deliver digital marketing and related services.</li>
          <li>Communicate regarding accounts, orders, or inquiries.</li>
          <li>Enhance and personalize website experiences.</li>
          <li>Conduct research and analysis to improve offerings.</li>
          <li>Comply with legal obligations and protect our rights.</li>
        </ul>
        <div className="mt-3 rounded-lg border border-black/5 bg-secondary/5 p-4 text-sm">
          <p className="font-semibold mb-1">No Payment Data Collected</p>
          <p>
            We do <strong>not</strong> collect any bank details, credit/debit
            card data, or other payment information via our landing pages or
            website. An Ayatiworks account manager will coordinate payments
            during business discussions.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "disclosure",
    title: "4) Disclosure of Personal Information",
    icon: <Building2 className="h-5 w-5" />,
    body: (
      <>
        <p>
          We may share personal information with trusted third-party service
          providers or partners who assist us in delivering services. Such
          entities operate under Indian law and implement appropriate
          safeguards. We may also disclose information when required by law or
          where necessary to protect our rights, users’ safety, or the public
          interest.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "5) Security Measures",
    icon: <Lock className="h-5 w-5" />,
    body: (
      <>
        <p>
          We employ industry-standard physical, technical, and administrative
          controls to protect personal information from loss, unauthorized
          access, disclosure, or modification. Our security protocols are
          reviewed and updated regularly.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "6) Data Retention",
    icon: <Clock className="h-5 w-5" />,
    body: (
      <>
        <p>
          We retain personal information only for as long as necessary to
          fulfill its intended purpose or as required by applicable law. When no
          longer needed, data is securely deleted or anonymized.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "7) Access & Correction",
    icon: <FilePenLine className="h-5 w-5" />,
    body: (
      <>
        <p>
          Clients and users may request access to, correction of, or updates to
          their personal information by contacting us at{" "}
          <a
            href="mailto:info@ayatiworks.com"
            className="text-primary underline font-medium font-primary text-xl underline-offset-4 hover:text-secondary"
          >
            info@ayatiworks.com
          </a>
          . We will respond within a reasonable timeframe in line with Indian
          laws.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "8) Changes to this Policy",
    icon: <Shield className="h-5 w-5" />,
    body: (
      <>
        <p>
          We may modify this Privacy Policy at any time. Updates will be posted
          on this page and communicated via our website or other appropriate
          channels. Continued use of our services signifies acceptance of the
          updated policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "9) Contact Information",
    icon: <Mail className="h-5 w-5" />,
    body: (
      <>
        <address className="not-italic">
          <div>Ayatiworks Technologies LLP</div>
          <a
            href="mailto:info@ayatiworks.com"
            className="text-primary font-medium font-primary text-xl underline underline-offset-4 hover:text-secondary"
          >
            info@ayatiworks.com
          </a>
        </address>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  const [openMap, setOpenMap] = useState(
    () => Object.fromEntries(SECTIONS.map((s) => [s.id, true]))
  );
  const [active, setActive] = useState(SECTIONS[0].id);
  const ids = useMemo(() => SECTIONS.map((s) => s.id), []);

  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (v[0]?.target?.id) setActive(v[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.1, 0.25, 0.5, 1] }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const toggle = (id) => setOpenMap((m) => ({ ...m, [id]: !m[id] }));

  return (
    <section className="relative w-full section">
      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/20 via-white to-white section-container">
        <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-secondary/15 blur-3xl" />
        <div className="pointer-events-none absolute top-24 -left-24 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-16 pb-10">
          <motion.h1
            className="text-3xl md:text-5xl font-medium font-primary text-gray-900"
            {...fadeUp(0)}
          >
            Privacy Policy
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[200px] mt-3 origin-left rounded-full"
            />
          </motion.h1>

          <motion.p
            className="mt-5 text-black/90 font-secondary text-lg"
            {...fadeUp(0.05)}
          >
            How Ayatiworks collects, uses, protects, and retains your personal
            information in accordance with applicable Indian laws.
          </motion.p>
        </div>
      </div>

      {/* DATA LIFECYCLE STRIP */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <motion.div
          {...fadeUp(0.05)}
          className="mt-4 mb-2 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {[
            { icon: <Database className="h-6 w-6" />, label: "Collect" },
            { icon: <FileCheck className="h-6 w-6" />, label: "Use" },
            { icon: <Lock className="h-6 w-6" />, label: "Protect" },
            { icon: <Clock className="h-6 w-6" />, label: "Retain" },
          ].map((it, i) => (
            <div
              key={i}
              className="rounded-xl bg-white ring-1 ring-black/5 shadow-sm px-3 py-2 text-sm flex items-center gap-2"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-secondary/30 text-primary">
                {it.icon}
              </span>
              <span className="font-medium font-primary text-xl">{it.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* BODY with sticky TOC */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 grid grid-cols-12 gap-10 py-10">
        {/* TOC: 3 cols on lg+; full width on small */}
        <aside className="order-2 lg:order-1 col-span-12 lg:col-span-3 lg:sticky lg:top-24 h-max">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-4">
            <h3 className="text-xl font-medium text-black font-primary mb-3">
              On this page
            </h3>
            <nav className="space-y-1">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={[
                    "flex w-full items-center gap-2 text-left rounded-md px-3 py-2 text-sm transition",
                    active === s.id
                      ? "bg-secondary/30 text-primary"
                      : "hover:bg-black/15 text-gray-700",
                  ].join(" ")}
                >
                  <span className="font-secondary text-black text-base">
                    {s.title}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Spacer: 1 col gap on lg to visually separate (optional) */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Content: 8 cols on lg+; full width on small */}
        <article className="order-1 lg:order-2 col-span-12 lg:col-span-8 space-y-6">
          {SECTIONS.map((s, idx) => {
            const panelId = `${s.id}-panel`;
            return (
              <motion.section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                {...fadeUp(idx * 0.04)}
              >
                <header className="group flex items-center justify-between gap-3 px-5 md:px-6 py-4 border-b border-black/5">
                  <h2 className="flex items-center gap-2 font-primary text-lg md:text-2xl font-medium text-gray-900">
                    <span className="text-primary">{s.icon}</span>
                    {s.title}
                  </h2>

                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    aria-expanded={openMap[s.id]}
                    aria-controls={panelId}
                    className={[
                      "p-2 rounded-full text-gray-500 transition bg-black/5",
                      openMap[s.id] ? "rotate-180" : "",
                    ].join(" ")}
                    title={openMap[s.id] ? "Collapse" : "Expand"}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </header>

                <div
                  id={panelId}
                  className={[
                    "px-5 md:px-6 py-5 text-gray-700 leading-relaxed",
                    openMap[s.id] ? "block" : "hidden",
                  ].join(" ")}
                >
                  <div className="prose font-secondary text-lg max-w-none prose-p:my-3 prose-ul:my-3 prose-li:my-1">
                    {s.body}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </article>
      </div>

      <BackToTop />
    </section>
  );
}

/* Back-to-top floating button */
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-primary text-white shadow-lg hover:bg-secondary transition"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
