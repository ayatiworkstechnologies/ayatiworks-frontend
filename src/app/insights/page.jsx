
export const metadata = {
  title: "Insights - Ayatiworks",
  description:
    "Meet the creative minds behind your brand’s success! Our Chennai-based experts craft strategies to elevate your digital presence. Explore now!",
};
import React from "react";
import HeroSection from "../components/Home/HeroSection";

import Connection from "../components/Teams/Connection";
import InsightsLanding from "../components/Insights/InsightsPages";

export default function InsightsPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <HeroSection />
      <InsightsLanding />
      <Connection />
    </main>
  );
}
