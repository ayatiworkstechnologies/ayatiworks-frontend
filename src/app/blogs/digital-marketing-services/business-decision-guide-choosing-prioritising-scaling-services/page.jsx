// app/blogs/digital-marketing-services/chennai-digital-marketing-services/page.jsx
import React from "react";

import Connection from "../../../components/Teams/Connection";
import AEOArticlePage109 from "@/src/app/components/Blog/Blog109";

export const metadata = {
  title:
    "Digital Marketing Services: How Businesses Choose, Prioritise & Scale for Growth | Ayatiworks",
  description:
    "Confused about digital marketing services? This in-depth guide helps businesses choose, prioritise, and scale SEO, paid media, content, and automation for sustainable growth and measurable ROI.",
  alternates: {
    canonical:
      "https://ayatiworks.com/blogs/digital-marketing-services/business-decision-guide-choosing-prioritising-scaling-services",
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

export default function BlogPage109() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      /> */}

      <AEOArticlePage109 />
      <Connection />
    </main>
  );
}
