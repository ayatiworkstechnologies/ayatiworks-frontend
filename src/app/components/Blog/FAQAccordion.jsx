"use client";

import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function FAQAccordion({ items }) {
  const faqs = items ?? defaultFaqs;
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

/* Default FAQ set – same as your blog */
const defaultFaqs = [
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
What digital marketing agencies`,
  },
];
