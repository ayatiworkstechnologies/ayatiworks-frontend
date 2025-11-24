
export const metadata = {
  title: "Is Your Website Ready for the AI Search Takeover? 5 Must-Know AEO Strategies for 2025",
  description:
    "Discover if your website is prepared for AI-driven search in 2025. Learn 5 essential AEO strategies to boost organic traffic and stay ahead with expert tips from a top digital marketing agency.",
    alternates: { canonical: "https://ayatiworks.com/blogs/seo/5-must-know-AEO-Strategies-For-2025", }
};
import React from "react";

import Connection from "../../../components/Teams/Connection";
import HeroSection from "../../../components/Home/HeroSection";
import AEOBlog101 from "../../../components/Blog/Blog101";

export default function MustBlogPage() {
  return (
    <main className="section section-home">
      {/* Hero / Intro */}
      <AEOBlog101 />
      <Connection />
    </main>
  );
}
