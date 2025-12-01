// app/about-us/page.jsx

export const metadata = {
  title: "Ayatiworks Case Studies, Brand Growth & Marketing Excellence",
  description:
    "Explore real success stories! See how our Chennai-based experts drive brand growth with innovative marketing. Check them out!",
    alternates: { canonical: "https://ayatiworks.com/case-study", }
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import CaseStudies from "../components/Case Study/CaseStudiesList";
import ResponsiveBanner from "../components/ResponsiveBanner";

export default function CaseStudyPages() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      {/* <HeroSection /> */}
      <ResponsiveBanner
        desktopSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/Casestudy.jpg"
        alt="Ayatiworks Contact Us"
        priority
        className="mb-4 sm:mb-6"
        eyebrow="Case Study"
        title="Proof in performance."
        subtitle="See how we’ve transformed brands across industries with measurable impact
From strategy to growth, we show the full journey and the outcome"
        ctaHref="/contact"
        height={420}
      />
      <CaseStudies />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
