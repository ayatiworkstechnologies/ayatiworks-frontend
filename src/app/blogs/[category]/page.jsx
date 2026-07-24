import React, { Suspense } from "react";
import Connection from "@/src/app/components/Home/Connection";
import CaseStudyAndWrite from "@/src/app/components/Blog/CaseStudyAndWrite";
import BlogListSection from "@/src/app/components/Blog/BlogList";
import ResponsiveBanner from "@/src/app/components/ResponsiveBanner";
import { CATEGORIES_SRC } from "@/src/app/lib/blog-categories-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return CATEGORIES_SRC.filter((c) => c.label !== "All").map((c) => {
    const parts = c.href.split("/");
    return { category: parts[parts.length - 1] };
  });
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const categoryStr = resolvedParams.category;

  const cat = CATEGORIES_SRC.find((c) => {
    const parts = c.href.split("/");
    return parts[parts.length - 1] === categoryStr;
  });

  if (!cat) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${cat.label} Blogs | Ayatiworks`,
    description: `Read the latest insights and articles about ${cat.label} at Ayatiworks.`,
    alternates: {
      canonical: `https://www.ayatiworks.com${cat.href}`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const categoryStr = resolvedParams.category;

  const cat = CATEGORIES_SRC.find((c) => {
    const parts = c.href.split("/");
    return parts[parts.length - 1] === categoryStr;
  });

  if (!cat) {
    notFound();
  }

  return (
    <main className="section section-home">
      <ResponsiveBanner
        desktopSrc="/banner/Blog.jpg"
        alt={`${cat.label} Blogs`}
        priority
        className="mb-4 sm:mb-6"
        eyebrow="Category"
        title={`${cat.label} Insights`}
        subtitle={`Dive into smart strategies and trends for ${cat.label} marketers and brand leaders.`}
        ctaText="Contact Us"
        ctaHref="/contact"
        height={420}
      />

      <Suspense
        fallback={
          <div className="p-8 text-sm text-slate-500">Loading articles…</div>
        }
      >
        <BlogListSection initialParams={{ cat: categoryStr }} />
      </Suspense>

      <CaseStudyAndWrite />
      <Connection />
    </main>
  );
}
