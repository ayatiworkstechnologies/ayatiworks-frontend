// app/about-us/page.jsx

export const metadata = {
  title:
    "Content as a Service in Chennai, Scalable Content Solutions for Businesses - Ayatiworks",
  description:
    "Transform your brand with scalable content solutions in Chennai! Engaging content to drive growth and ROI. Discover more now!",
  alternates: { canonical: "https://ayatiworks.com/content-as-a-service" },
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import DigitalMarketingSection from "../components/Content as a Service/DigitalMarketingSection";
import WhyChennai from "../components/Content as a Service/WhyChennai";
import BenefitsSlider from "../components/Content as a Service/BenefitsSlider";
import MarketingServices from "../components/Content as a Service/MarketingServices";
import ServicesSectionGrid from "../components/Content as a Service/ServicesSectionGrid";
import WhyChooseSection from "../components/Content as a Service/WhyChooseSection";
import CaseStudies from "../components/Content as a Service/CaseStudies";
import CaaSBenefits from "../components/Content as a Service/CaaSBenefits";
import CaaSFramework from "../components/Content as a Service/GrowthFramework";
import WhyPartner from "../components/Content as a Service/WhyPartner";
import FAQSection from "../components/Content as a Service/FAQSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly is Content-as-a-Strategy (CAAS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAAS is a holistic approach where content isn\u2019t just created for visibility but strategically aligned with your brand voice, audience needs, and long-term business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How is CAAS different from traditional content marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional content marketing focuses on volume and promotion. CAAS, on the other hand, focuses on storytelling, organic SEO, and thought leadership to build sustained authority.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries benefit most from CAAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Any industry that relies on digital presence, like SaaS, healthcare, edtech, fintech, e-commerce, and professional services, can benefit from CAAS.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results with CAAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAAS is a long-term investment. While SEO traction may take 3-6 months, the compounded value of brand trust, authority, and inbound leads grows steadily over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can CAAS work alongside paid marketing campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. CAAS creates organic authority, while paid campaigns drive instant visibility. When combined, they reduce ad dependency and maximize ROI.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure the success of CAAS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track organic traffic growth, keyword rankings, engagement metrics, lead conversions, and thought leadership recognition across platforms.",
      },
    },
    {
      "@type": "Question",
      name: "Is CAAS suitable for startups or only established businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, Startups use CAAS to build visibility faster with focused narratives, while established businesses leverage it to maintain dominance and scale thought leadership.",
      },
    },
  ],
};
export default function ContentServicePages() {
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
      <CaaSBenefits />
      <CaaSFramework />
      <WhyPartner />
      <FAQSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
