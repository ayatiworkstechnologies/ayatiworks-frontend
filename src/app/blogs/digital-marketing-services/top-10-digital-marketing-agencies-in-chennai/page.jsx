// app/blogs/digital-marketing-services/chennai-digital-marketing-services/page.jsx
import React from "react";

import Connection from "../../../components/Teams/Connection";
import AEOArticlePage107 from "@/src/app/components/Blog/Blog107";

export const metadata = {
  title:
    "Top 10 Digital Marketing Agencies in Chennai | Ayatiworks",
  description:
    "Discover the top 10 digital marketing agencies in Chennai with strengths, services, pricing insights, and expert guidance to help brands choose the right digital partner.",
  alternates: {
    canonical:
      "https://ayatiworks.com/blogs/digital-marketing-services/top-10-digital-marketing-agencies-in-chennai",
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

export default function MustBlogPage() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <AEOArticlePage107 />
      <Connection />
    </main>
  );
}
