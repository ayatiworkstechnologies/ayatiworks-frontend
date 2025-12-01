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

  return <AuthorView author={author} posts={posts} />;
}
