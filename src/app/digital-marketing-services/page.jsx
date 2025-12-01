// app/about-us/page.jsx

export const metadata = {
  title: "Digital Marketing Services in Chennai | SEO, PPC & Social Media Experts | Ayatiworks",
  description:
    "Get end-to-end digital marketing services in Chennai, including SEO, PPC, social media and content strategy. Ayatiworks helps B2B, B2C and D2C brands achieve measurable growth with expert digital campaigns.",
    alternates: { canonical: "https://ayatiworks.com/digital-marketing-services", }
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


export default function DigitalMarketingPage() {
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
      <GrowthFramework />
      <WhyPartner />
      <LocalAgencySection />
      <FAQSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
