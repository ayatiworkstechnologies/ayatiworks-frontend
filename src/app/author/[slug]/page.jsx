// app/author/[slug]/page.jsx
import React from "react";
import { notFound } from "next/navigation";
import AuthorView from "../../components/AuthorView";
import {
  getAuthor,
  getAuthorPosts,
  getAllAuthorSlugs,
} from "../../lib/author-data";

// Helper to safely resolve slug from possibly-async params
async function resolveSlug(paramsPromise) {
  const p = await paramsPromise;
  const slug = Array.isArray(p?.slug) ? p.slug[0] : p?.slug;
  return slug ?? null;
}

// Pre-render all author pages (SSG)
export async function generateStaticParams() {
  const slugs = await Promise.resolve(getAllAuthorSlugs());
  return (slugs || []).map((slug) => ({ slug }));
}

// Optional metadata
export async function generateMetadata(props = {}) {
  const slug = await resolveSlug(props.params);
  if (!slug) return { title: "Author not found" };

  const author = await Promise.resolve(getAuthor(slug));
  if (!author) return { title: "Author not found" };

  const description =
    author.bio?.slice(0, 155) ?? `Articles and insights by ${author.name}`;

  return {
    title: `${author.name} – Author`,
    description,
    openGraph: {
      title: `${author.name} – Author`,
      description,
      images: author.avatar ? [{ url: author.avatar }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${author.name} – Author`,
      description,
      images: author.avatar ? [author.avatar] : [],
    },
  };
}

export default async function Page(props = {}) {
  const slug = await resolveSlug(props.params);
  if (!slug) return notFound();

  const author = await Promise.resolve(getAuthor(slug));
  if (!author) return notFound();

  let posts = await Promise.resolve(getAuthorPosts(slug));

  // ✅ Sort posts in descending order (latest first)
  posts = (posts || []).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const siteUrl = "https://www.ayatiworks.com";
  const authorUrl = `${siteUrl}/author/${slug}`;

  // 🔹 JSON-LD schema (dynamic per author, falls back to your Daniel copy)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": authorUrl,
        name: author.name,
        url: authorUrl,
        ...(author.avatar && {
          image: {
            "@type": "ImageObject",
            url: author.avatar, // already full URL in your data
            inLanguage: "en-US",
          },
        }),
        jobTitle:
          author.jobTitle ||
          "Senior SEO Content Writer & Strategist",
        worksFor: {
          "@type": "Organization",
          name: "Ayatiworks",
          url: siteUrl,
        },
        description:
          author.bio ||
          "Daniel Joseph is a Senior SEO Content Writer & Strategist at Ayatiworks, bringing over 20 years of expertise in content creation and digital marketing strategy. He specializes in developing and executing SEO-driven content for healthcare clients in the United States, helping them achieve a strong organic presence on Google SERP. Having worked with prominent brands across the UAE, UK, USA, and India, Daniel collaborates closely with SEO, Marketing, and Sales teams to craft content that drives business growth and enhances online visibility. His core strengths include SEO, content marketing, content strategy development and AISEO Content. He is passionate about mentoring and has authored a couple of books.",
        knowsAbout: [
          "SEO",
          "Generative Engine Optimization (GEO)",
          "AEO",
          "AI SEO",
          "Content",
          "Reddit",
          "Google",
        ],
        mainEntityOfPage: authorUrl,
      },
      {
        "@type": "CreativeWork",
        name: "Search Marketing Exposure",
        description:
          "Explores changes and challenges in the search marketing industry, including AEO, GEO, and AISEO.",
        url: siteUrl,
        author: {
          "@id": authorUrl,
        },
      },
    ],
  };

  return (
    <>
      <AuthorView author={author} posts={posts} />

      {/* JSON-LD schema.org for the author */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
