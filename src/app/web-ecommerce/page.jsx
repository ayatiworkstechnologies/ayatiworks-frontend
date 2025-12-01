// app/about-us/page.jsx

export const metadata = {
  title:
    "Web Ecommerce Services in Chennai, Ecommerce development experts - Ayatiworks",
  description:
    "Launch your online store with expert ecommerce services in Chennai! Seamless development for maximum sales. Get started today!",
    alternates: { canonical: "https://ayatiworks.com/web-ecommerce", }
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



export default function WebandEcommercePages() {
  return (
    <main className="section section-home">
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
