// app/components/TermsAndConditions.jsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  // Link as LinkIcon,
  ChevronDown,
  // Printer,
  ArrowUp,
} from "lucide-react";

/** ===== Helpers ===== */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const sectionsData = [
  {
    id: "acceptance-of-terms",
    title: "1. Acceptance of Terms",
    body: (
      <>
        <p>
          By accessing, using, or engaging with Ayatiworks’ Site or Services,
          you acknowledge that you have read, understood, and agree to be
          legally bound by these Terms and Conditions, including our Privacy
          Policy and Acceptable Use Policy (collectively, the “Agreement”). This
          Agreement constitutes a binding contract between you and Ayatiworks
          Technologies LLP. If you do not accept these terms, you must
          immediately cease all use of the Site and Services.
        </p>
      </>
    ),
  },
  {
    id: "the-services",
    title: "2. The Services",
    body: (
      <>
        <p>
          Ayatiworks delivers tailored digital marketing solutions through a
          structured process.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="font-medium font-primary text-xl">Consultation:</strong> We begin with an in-depth analysis of
            your business objectives, target audience, and existing marketing
            efforts.
          </li>
          <li>
            <strong className="font-medium font-primary text-xl">Strategy Development:</strong> Customized campaigns are
            designed and executed across channels such as SEO, PPC, social
            media, content marketing, email automation, and marketing technology
            integrations.
          </li>
          <li>
            <strong className="font-medium font-primary text-xl">Implementation &amp; Optimization:</strong> Campaigns are
            continuously monitored, analyzed, and refined to maximize
            performance. Regular reports detailing metrics and actionable
            insights are shared with the Client.
          </li>
          <li>
            <strong className="font-medium font-primary text-xl">Service Fees:</strong> Fees for Services (the “Service
            Fee”) are mutually agreed upon in writing prior to engagement.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "payment-policies",
    title: "3. Payment Policies",
    body: (
      <>
        <h4 id="engagement-terms" className="font-medium font-primary text-2xl mt-2">
          3.1 Engagement Terms
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            The Client agrees to pay the Service Fee as outlined in the signed
            proposal or contract.
          </li>
          <li>
            Invoices are issued in advance of the due date and payable in INR
            (or mutually agreed currencies) with applicable taxes (e.g., GST).
          </li>
          <li>
            Failure to pay invoices within the stipulated timeframe may result
            in immediate suspension or termination of Services.
          </li>
        </ul>

        <h4 id="cancellation" className="font-medium font-primary text-2xl mt-4">
          3.2 Cancellation
        </h4>
        <p>
          Either party may terminate Services by providing 10 business days’
          written notice. Outstanding payments remain due upon termination.
        </p>

        <h4 id="client-credentials" className="font-medium font-primary text-2xl mt-4">
          3.3 Client Credentials
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Access to Client accounts (e.g., social media, websites) will only
            be provided upon full payment of dues.
          </li>
          <li>
            The Client retains ownership of all credentials and is solely
            responsible for safeguarding them.
          </li>
        </ul>

        <h4 id="third-party-tools" className="font-medium font-primary text-2xl mt-4">
          3.4 Third-Party Tools
        </h4>
        <p>
          Ayatiworks may utilize third-party platforms to deliver Services. Such
          tools remain the property of Ayatiworks or their respective licensors,
          and no separate agreements between Clients and third parties are
          implied.
        </p>
      </>
    ),
  },
  {
    id: "liability-indemnification",
    title: "4. Liability & Indemnification",
    body: (
      <>
        <p>
          The Client agrees to indemnify and hold Ayatiworks harmless against
          claims, losses, or liabilities arising from:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Third-party disputes (e.g., advertising claims, product liability).
          </li>
          <li>
            Intellectual property infringement related to Client-provided
            content.
          </li>
          <li>
            Client negligence (e.g., delayed approvals, incomplete information).
          </li>
        </ul>
        <p className="mt-2">
          Ayatiworks disclaims liability for service interruptions caused by
          third-party platforms or Client actions.
        </p>
      </>
    ),
  },
  {
    id: "general-provisions",
    title: "5. General Provisions",
    body: (
      <>
        <h4 id="amendments" className="font-medium font-primary text-2xl mt-2">
          5.1 Amendments
        </h4>
        <p>
          Ayatiworks reserves the right to modify these Terms at any time.
          Continued use of Services constitutes acceptance of revised terms.
        </p>

        <h4 id="governing-law" className="font-medium font-primary text-2xl mt-4">
          5.2 Governing Law
        </h4>
        <p>
          This Agreement is governed by the laws of India. Disputes shall be
          resolved through arbitration in Chennai High Court, in accordance with
          the Arbitration and Conciliation Act, 1996.
        </p>

        <h4 id="severability" className="font-medium font-primary text-2xl mt-4">
          5.3 Severability
        </h4>
        <p>
          If any provision of this Agreement is deemed invalid, the remaining
          terms remain enforceable.
        </p>
      </>
    ),
  },
  {
    id: "contact-information",
    title: "Contact Information",
    body: (
      <>
        <address className="not-italic">
          <div>Ayatiworks Technologies LLP</div>
          <a
            href="mailto:info@ayatiworks.com"
            className="text-primary hover:text-secondary font-primary text-xl underline underline-offset-4"
          >
            info@ayatiworks.com
          </a>
        </address>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  const [openMap, setOpenMap] = useState(() =>
    Object.fromEntries(sectionsData.map((s) => [s.id, true]))
  );
  const [active, setActive] = useState(sectionsData[0].id);
  const ids = useMemo(() => sectionsData.map((s) => s.id), []);

  // Highlight active section in TOC
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5, 1] }
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
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-white to-white section-container">
        <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
        <div className="pointer-events-none absolute top-24 -left-20 h-48 w-48 rounded-full bg-primary/10 blur-2xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 pt-16 pb-10">
          <motion.h1
            className="text-3xl md:text-5xl font-medium font-primary text-black"
            {...fadeUp(0)}
          >
            Terms & Conditions
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="bg-secondary h-1 w-40 sm:w-56 md:w-72 lg:w-[250px] mt-3 origin-left rounded-full"
            />
          </motion.h1>
          <motion.p
            className="mt-5 text-black/90 font-secondary text-lg"
            {...fadeUp(0.05)}
          >
            Welcome to Ayatiworks Technologies LLP. Please read these terms
            carefully before using our Site or Services.
          </motion.p>
        </div>
      </div>

      {/* Content + TOC in 12-col layout */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 grid grid-cols-12 gap-10 py-10">
        {/* TOC: 3 cols on lg+; full width on small */}
        <aside className="order-2 lg:order-1 col-span-12 lg:col-span-3 lg:sticky lg:top-24 h-max">
          <div className="rounded-2xl border border-black/5 bg-white shadow-sm p-4">
            <h3 className="text-xl font-primary font-medium text-gray-900 mb-3">
              On this page
            </h3>
            <nav className="space-y-1">
              {sectionsData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={[
                    "block w-full text-left rounded-md font-secondary px-3 py-2 text-base transition",
                    active === s.id
                      ? "bg-secondary/30 text-black"
                      : "hover:bg-black/15 text-black/80",
                  ].join(" ")}
                >
                  {s.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Spacer: 1 col (optional, for visual separation) */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Main content: 8 cols on lg+; full width on small */}
        <article className="order-1 lg:order-2 col-span-12 lg:col-span-8 space-y-6">
          {sectionsData.map((s, idx) => {
            const panelId = `${s.id}-panel`;
            return (
              <motion.section
                key={s.id}
                id={s.id}
                className="scroll-mt-24 rounded-2xl bg-white ring-1 ring-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                {...fadeUp(idx * 0.04)}
              >
                <header className="group flex items-center gap-3 justify-between px-5 md:px-6 py-4 border-b border-black/5">
                  <h2 className="font-primary text-xl md:text-3xl font-medium text-gray-900">
                    {s.title}
                  </h2>

                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    aria-expanded={openMap[s.id]}
                    aria-controls={panelId}
                    title={openMap[s.id] ? "Collapse" : "Expand"}
                    className={[
                      "p-2 rounded-full text-gray-500 transition bg-black/5",
                      openMap[s.id] ? "rotate-180" : "",
                    ].join(" ")}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </header>

                {/* Body */}
                <div
                  id={panelId}
                  className={[
                    "px-5 md:px-6 py-5 text-black/80 leading-relaxed",
                    openMap[s.id] ? "block" : "hidden",
                  ].join(" ")}
                >
                  <div className="prose max-w-none font-secondary text-lg prose-p:my-3 prose-ul:my-3 prose-li:my-1 prose-headings:mt-4">
                    {s.body}
                  </div>
                </div>
              </motion.section>
            );
          })}
        </article>
      </div>

      {/* Back to top FAB */}
      <BackToTop />
    </section>
  );
}

/** ===== Back to top FAB ===== */
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
