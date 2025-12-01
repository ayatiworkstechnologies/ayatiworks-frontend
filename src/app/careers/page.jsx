// app/about-us/page.jsx

export const metadata = {
  title: "Careers - Ayatiworks",
  description:
    "Join a dynamic team shaping the future of digital marketing in Chennai! Exciting career opportunities await. Kickstart your journey today!",
  alternates: { canonical: "https://ayatiworks.com/careers", }
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import CareerSectionPage from "../components/Careers/CareerSectionPage";
import JoinUsTimeline from "../components/Careers/JoinUsTimeline";
import LifeAtAyatiworks from "../components/Careers/LifeAtAyatiworks";
import PartnersInClimb from "../components/Home/PartnersInClimb";
import RolesMarquee from "../components/Careers/RolesMarquee";
import CareersLastSection from "../components/Careers/CareersLastSection";
import LetsConnectForm from "../components/Careers/LetsConnectForm";
import ResponsiveBanner from "../components/ResponsiveBanner";

const steps = [
  { title: "Impact Every Day", subtitle: "" },
  { title: "Learn Without Limits", subtitle: "" },
  { title: "Culture That Cares", subtitle: "" },
  { title: "Future-Ready Growth", subtitle: "" },
];

export default function CareersPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      {/* <HeroSection /> */}
      <ResponsiveBanner
        desktopSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/careers.jpg"
        alt="Ayatiworks careers"
        priority
        className="mb-4 sm:mb-6"
        eyebrow="Careers"
        title="Careers at Ayatiworks"
        subtitle=" Shape the Future With Us"
        ctaText="Careers"
        ctaHref="/careers"
        height={420}
      />
      <CareerSectionPage />
      <JoinUsTimeline steps={steps} />
      {/* <LetsConnectForm /> */}
      <LifeAtAyatiworks />
      <PartnersInClimb />

      <RolesMarquee />
      <CareersLastSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
