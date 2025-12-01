// app/about-us/page.jsx

export const metadata = {
  title:
    "Digital PR experts in Chennai, Reputation & Media Outreach - Ayatiworks",
  description:
    "Elevate your brand with expert digital PR in Chennai! Boost reputation and media outreach for maximum impact. Get started now!",
  alternates: { canonical: "https://ayatiworks.com/digital-pr", }
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


export default function DigitalPRPages() {
  return (
    <main className="section section-home">
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
