// app/about-us/page.jsx

export const metadata = {
  title:
    "Content as a Service in Chennai, Scalable Content Solutions for Businesses - Ayatiworks",
  description:
    "Transform your brand with scalable content solutions in Chennai! Engaging content to drive growth and ROI. Discover more now!",
    alternates: { canonical: "https://ayatiworks.com/content-as-a-service", }
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

export default function ContentServicePages() {
  return (
    <main className="section section-home">
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
