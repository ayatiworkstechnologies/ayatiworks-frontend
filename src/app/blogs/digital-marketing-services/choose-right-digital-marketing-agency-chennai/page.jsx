// app/blogs/digital-marketing-services/chennai-digital-marketing-services/page.jsx
import React from "react";

import Connection from "../../../components/Teams/Connection";
import AEOArticlePage112 from "@/src/app/components/Blog/Blog112";

export const metadata = {
  title:
    "How to Choose the Right Digital Marketing Agency in Chennai | Revenue-First Buyer’s Guide | Ayatiworks",
  description:
    "Looking for a digital marketing agency in Chennai? This in-depth buyer’s guide explains how to evaluate agencies, digital marketing services, ROI, and growth frameworks before you decide.",
  alternates: {
    canonical:
      "https://www.ayatiworks.com/blogs/digital-marketing-services/choose-right-digital-marketing-agency-chennai",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which agency offers the best SEO services in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ayatiworks LLP delivers strong AEO + SEO integration with high-impact content frameworks for scalable traffic growth."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a digital marketing agency charge in Chennai?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing ranges from ₹30,000/month for startups to over ₹5 lakh/month for enterprise omnichannel mandates."
      }
    },
    {
      "@type": "Question",
      "name": "Can agencies guarantee results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No credible agency guarantees specific traffic or revenue numbers, but they do commit to KPIs, milestones, and ROI pathways."
      }
    },
    {
      "@type": "Question",
      "name": "What KPIs should businesses track?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Organic growth, CAC, ROAS, lead quality index, retention uplift, and content distribution efficiency."
      }
    },
    {
      "@type": "Question",
      "name": "How long does digital marketing take to show results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO takes 3-6 months; performance campaigns show data patterns within days but optimize over 30-90 days."
      }
    },
    {
      "@type": "Question",
      "name": "Do Chennai agencies work with global brands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Multiple agencies, including Ayatiworks, Social Beat, Rage, and others handle multinational clients across markets."
      }
    }
  ]
}
;

export default function BlogPage112() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      /> */}

      <AEOArticlePage112 />
      <Connection />
    </main>
  );
}
