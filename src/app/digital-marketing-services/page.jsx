// app/about-us/page.jsx

export const metadata = {
  title:
    "Digital Marketing Services in Chennai | SEO, PPC & Social Media Experts | Ayatiworks",
  description:
    "Get end-to-end digital marketing services in Chennai, including SEO, PPC, social media and content strategy. Ayatiworks helps B2B, B2C and D2C brands achieve measurable growth with expert digital campaigns.",
  alternates: {
    canonical: "https://ayatiworks.com/digital-marketing-services",
  },
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import DigitalMarketingSection from "../components/Digital Marketing/DigitalMarketingSection";
import WhyChennai from "../components/Digital Marketing/WhyChennai";
import BenefitsSlider from "../components/Digital Marketing/BenefitsSlider";
import MarketingServices from "../components/Digital Marketing/MarketingServices";
import WhyChooseSection from "../components/Digital Marketing/WhyChooseSection";
import CaseStudies from "../components/Digital Marketing/CaseStudies";
import GrowthFramework from "../components/Digital Marketing/GrowthFramework";
import WhyPartner from "../components/Digital Marketing/WhyPartner";
import FAQSection from "../components/Digital Marketing/FAQSection";
import ServicesSectionGrid from "../components/Digital Marketing/ServicesSectionGrid";
import LocalAgencySection from "../components/Digital Marketing/LocalAgencySection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of businesses do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We partner with B2B, B2C, and D2C brands across sectors like real estate, healthcare, automobile, retail, SaaS, beauty, and more, including long- term collaborations like our ongoing work with Volvo.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid ad campaigns can generate traffic instantly, while SEO and organic growth typically show strong, sustainable results within 3-6 months based on ongoing optimizations.",
      },
    },
    {
      "@type": "Question",
      name: "What reporting do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver monthly dashboards that highlight KPIs like traffic, leads, conversions, and ROI, with transparent insight summaries and recommendations for scaling further.",
      },
    },
    {
      "@type": "Question",
      name: "How do you tailor strategies to my industry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every strategy begins with in-depth research into your business context and competitors, and then we create customized campaigns based on your goals, whether you’re in tech, real estate, D2C, or healthcare.",
      },
    },
    {
      "@type": "Question",
      name: "Who will manage my account and how often will we communicate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You’ll have a dedicated account manager backed by an expert team. We schedule regular updates (weekly or bi-weekly) and adjust communication frequency based on your preference.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer full-stack digital solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! From strategy and content to technology , SEO, social media, performance ads, influencer marketing, web development, and maintenance, all are handled under one roof for seamless execution.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing after launching a campaign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We believe in long-term partnership, not just project completion. Our framework includes continuous optimization, iterations, and support to keep results moving upward.",
      },
    },
  ],
};
export default function DigitalMarketingPage() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero / Intro */}
      <HeroSection />
      <DigitalMarketingSection />
      <WhyChennai />
      <BenefitsSlider />
      <MarketingServices />
      <ServicesSectionGrid />
      <WhyChooseSection />
      <CaseStudies />
      <GrowthFramework />
      <WhyPartner />
      <LocalAgencySection />
      <FAQSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
