export const metadata = {
  title: "Teams - Ayatiworks",
  description:
    "Meet the creative minds behind your brand’s success! Our Chennai-based experts craft strategies to elevate your digital presence. Explore now!",

  alternates: {
    canonical: "https://ayatiworks.com/team",
  },
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";

import TeamIntro from "../components/Teams/TeamIntro";
import TeamMember from "../components/Teams/TeamMember";
import Connection from "../components/Teams/Connection";
import ResponsiveBanner from "../components/ResponsiveBanner";

export default function TeamPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      {/* <HeroSection /> */}
      <ResponsiveBanner
              desktopSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/Teams.jpg"
              alt="Ayatiworks Contact Us"
              priority
              className="mb-4 sm:mb-6"
              eyebrow="Teams"
              title="Meet the minds behind the magic."
              subtitle="Our team brings creativity, strategy and tech fluency into one dynamic force.
Get to know the experts guiding your brand to standout success."
              ctaHref="/contact"
              height={420}
            />
      <TeamIntro />
      <TeamMember />

      <Connection />
    </main>
  );
}
