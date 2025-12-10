// app/about-us/page.jsx

export const metadata = {
  title:
    "Digital PR experts in Chennai, Reputation & Media Outreach - Ayatiworks",
  description:
    "Elevate your brand with expert digital PR in Chennai! Boost reputation and media outreach for maximum impact. Get started now!",
  alternates: { canonical: "https://ayatiworks.com/digital-pr" },
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import DigitalPRSection from "../components/Digital PR/DigitalPRSection";
import WhyChennai from "../components/Digital PR/WhyChennai";
import BenefitsSlider from "../components/Digital PR/BenefitsSlider";
import MarketingServices from "../components/Digital PR/MarketingServices";
import ServicesSectionGrid from "../components/Digital PR/ServicesSectionGrid";
import WhyChooseSection from "../components/Digital PR/WhyChooseSection";
import CaseStudies from "../components/Digital PR/CaseStudies";
import GrowthFramework from "../components/Digital PR/GrowthFramework";
import WhyPartner from "../components/Digital PR/WhyPartner";
import FAQSection from "../components/Digital PR/FAQSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Digital PR and how is it different from traditional PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital PR focuses on building online authority through media placements, backlinks, influencer collaborations, and reputation management, whereas traditional PR relies on offline press coverage.",
      },
    },
    {
      "@type": "Question",
      name: "Why should brands invest in Digital PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because Digital PR improves brand visibility, credibility, and SEO rankings simultaneously, helping you build both reputation and organic traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle crisis communication and reputation repair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Digital PR strategies include online crisis management, negative press mitigation, and proactive reputation-building.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure Digital PR success?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We measure success by media reach, domain authority of placements, referral traffic, share of voice, and brand sentiment.",
      },
    },
    {
      "@type": "Question",
      name: "Can Digital PR help with SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. High-quality backlinks from media sites directly improve search rankings while boosting brand authority.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries benefit the most from Digital PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Industries like BFSI, healthcare, tech startups, e-commerce, and consumer brands see the strongest results due to their competitive landscapes.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can we expect results with Digital PR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While some placements are immediate, building consistent authority and recognition usually takes 3-6 months of strategic efforts.",
      },
    },
  ],
};
export default function DigitalPRPages() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero / Intro */}
      <HeroSection />
      <DigitalPRSection />
      <WhyChennai />
      <BenefitsSlider />
      <MarketingServices />
      <ServicesSectionGrid />
      <WhyChooseSection />
      <CaseStudies />
      <GrowthFramework />
      <WhyPartner />
      <FAQSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
