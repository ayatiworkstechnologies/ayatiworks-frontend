// app/about-us/page.jsx
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import YearSlider from "../components/About/YearSlider";
import Connection from "../components/Home/Connection";
import AboutSection from "../components/About/AboutSection";
import HowWeDoIt from "../components/About/HowWeDo";
import WhatWeDoIt from "../components/About/WhatWeDo";

export const metadata = {
  title: "About Ayatiworks - Experts in Digital Marketing & Branding Chennai",
  description:
    "Discover top digital marketing & branding experts in Chennai. Unleash your brand’s potential with innovative strategies tailored for success!",
  alternates: { canonical: "https://ayatiworks.com/about-us" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://ayatiworks.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://ayatiworks.com/about-us",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Our Team",
      item: "https://ayatiworks.com/team/",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Careers",
      item: "https://ayatiworks.com/careers/",
    },
  ],
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://ayatiworks.com/#organization",
    name: "Ayati Works",
    legalName: "Ayatiworks Technologies LLP",
    url: "https://ayatiworks.com/",
    logo: "https://ayatiworks.com/assets/img/logo.png",
    foundingDate: "2017-01-01",
    founders: [
      {
        "@type": "Person",
        name: "Upendran",
      },
    ],
    description:
      "Ayati Works is a Chennai-based digital marketing agency founded in 2017, offering SEO, PPC, content marketing, branding, and multilingual advertising services. The agency works with clients across India and internationally, providing strategic campaigns, content solutions, and data-driven marketing to help brands scale nationally and globally. With a focus on creativity, performance, and cultural relevance, Ayati Works combines local expertise with full-funnel digital execution to deliver measurable results.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "18/24, TTK Road, 1st Cross St, Alwarpet",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600018",
      addressCountry: "IN",
    },
    telephone: ["044-35031874", "044-35031878"],
    email: ["upendran@ayatiworks.com", "info@ayatiworks.com"],
    sameAs: [
      "https://www.facebook.com/ayatiworks",
      "https://www.instagram.com/ayatiworks",
      "https://www.linkedin.com/company/ayatiworks",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "25",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ayatiworks.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://ayatiworks.com/about-us/",
      },
    ],
  },
};

export default function AboutUsPage() {
  return (
    <main className="section section-home">
      {/* Breadcrumb JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* AboutPage / Organization JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />

      {/* Hero / Intro */}
      <HeroSection />

      {/* About Company Overview */}
      <AboutSection />

      {/* Timeline / Journey */}
      <YearSlider />

      {/* What We Do */}
      <WhatWeDoIt />

      {/* How We Do It */}
      <HowWeDoIt />

      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
