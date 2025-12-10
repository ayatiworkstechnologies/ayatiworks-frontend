// app/about-us/page.jsx

export const metadata = {
  title:
    "Web Ecommerce Services in Chennai, Ecommerce development experts - Ayatiworks",
  description:
    "Launch your online store with expert ecommerce services in Chennai! Seamless development for maximum sales. Get started today!",
  alternates: { canonical: "https://ayatiworks.com/web-ecommerce" },
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import WebAndECommerceSection from "../components/Web & E-Commerce/WebAndECommerceSection";
import WhyChennai from "../components/Web & E-Commerce/WhyChennai";
import BenefitsSlider from "../components/Web & E-Commerce/BenefitsSlider";
import MarketingServices from "../components/Web & E-Commerce/MarketingServices";
import ServicesSectionGrid from "../components/Web & E-Commerce/ServicesSectionGrid";
import WhyChooseSection from "../components/Web & E-Commerce/WhyChooseSection";
import CaseStudies from "../components/Web & E-Commerce/CaseStudies";
import GrowthFramework from "../components/Web & E-Commerce/GrowthFramework";
import WhyPartner from "../components/Web & E-Commerce/WhyPartner";
import FAQSection from "../components/Web & E-Commerce/FAQSection";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do businesses need professional websites today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website builds trust, increases visibility, and serves as the first touchpoint for customers searching for your brand, services, or products.",
      },
    },
    {
      "@type": "Question",
      name: "How does e-commerce help small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It expands reach beyond geography, reduces overhead costs, and makes products available 24/7, driving consistent revenue without needing a physical store.",
      },
    },
    {
      "@type": "Question",
      name: "What’s the difference between a website and an e-commerce platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A website informs and builds credibility, while an e-commerce platform enables transactions, sales, and personalized customer journeys.",
      },
    },
    {
      "@type": "Question",
      name: "How important is mobile responsiveness?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Over 70% of users browse on mobile. A mobile-friendly design ensures better engagement, higher conversions, and improved search rankings.",
      },
    },
    {
      "@type": "Question",
      name: "Can websites integrate with CRM and ERP systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, websites and e-commerce platforms integrate with CRMs, ERPs, and payment gateways, enabling smooth workflows and data-driven decisions.",
      },
    },
    {
      "@type": "Question",
      name: "What makes e-commerce secure for buyers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SSL encryption, secure payment gateways, and multi-factor authentication ensure safe transactions, boosting customer confidence and repeat purchases.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a business see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary, but with optimized websites and marketing, businesses often see measurable traffic, leads, and sales within 3-6 months.",
      },
    },
  ],
};

export default function WebandEcommercePages() {
  return (
    <main className="section section-home">
      {/* FAQ JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero / Intro */}
      <HeroSection />
      <WebAndECommerceSection />
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
