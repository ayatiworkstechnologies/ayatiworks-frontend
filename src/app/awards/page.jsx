// app/about-us/page.jsx

export const metadata = {
  title:
    "Award-Winning Digital Marketing Agency Chennai, Ayatiworks",
  description:
    "Trust an award-winning digital marketing team in Chennai to elevate your brand! Proven strategies for success. Connect now!",
    alternates: { canonical: "https://ayatiworks.com/awards", }
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import AwardsSectionPage from "../components/Awards/AwardSectionPage";
import AwardsMarqueeSection from "../components/Awards/AwardsMarqueeSection";
import AwardsContensSection from "../components/Awards/AwardContensSection";
import AwardsListSection from "../components/Awards/AwardsList";




export default function AwardsPages() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <HeroSection />
     <AwardsSectionPage />
      <AwardsMarqueeSection />
      <AwardsContensSection />
      <AwardsListSection />
      {/* Contact / CTA */}
      <Connection />
    </main>
  );
}
