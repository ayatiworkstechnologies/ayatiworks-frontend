// app/blogs/page.jsx
import React, { Suspense } from "react";
import HeroSection from "../components/Home/HeroSection";
import Connection from "../components/Home/Connection";
import BlogSectionPage from "../components/Blog/BlogSectionPage";
import CaseStudyAndWrite from "../components/Blog/CaseStudyAndWrite";
import BlogListSection from "../components/Blog/BlogList"; // client
import ResponsiveBanner from "../components/ResponsiveBanner";

export const metadata = {
  title: "Ayatiworks - Blog",
  description:
    "Unlock digital marketing insights with our expert blog! Tips and trends to boost your brand’s growth. Dive in now!",
    alternates: { canonical: "https://ayatiworks.com/blogs", }
};

// ⛔️ Don't use `dynamic = "force-dynamic"` with static export
// ⛔️ Don't accept `{ searchParams }` here for static export

export default function BlogsPage() {
  return (
    <main className="section section-home">
    <ResponsiveBanner
            desktopSrc="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/Blog.jpg"
            alt="Ayatiworks Contact Us"
            priority
            className="mb-4 sm:mb-6"
            eyebrow="Blogs"
            title="Insights that spark action."
            subtitle="Dive into smart strategies, creative trends and real-world wins.
Stay ahead with blogs built for curious marketers and brand leaders."
            ctaText="Contact Us"
            ctaHref="/contact"
            height={420}
          />
      {/* <HeroSection /> */}
      {/* <BlogSectionPage /> */}

      {/* Wrap the client component using useSearchParams in Suspense */}
      <Suspense fallback={<div className="p-8 text-sm text-slate-500">Loading articles…</div>}>
        <BlogListSection />
      </Suspense>

      <CaseStudyAndWrite />
      <Connection />
    </main>
  );
}
