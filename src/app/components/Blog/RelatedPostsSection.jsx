"use client";

import Link from "next/link";

export function RelatedPostsSection({ posts = [], heading = "Related Posts" }) {
  if (!posts?.length) return null;

  return (
    <div className="mt-2">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left">{heading}</h2>
        <Link
          href="/blogs"
          className="btn-outline"
          aria-label="View all blog posts"
        >
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((p) => (
          <RelatedPostCard key={p.slug} post={p} />
        ))}
      </div>
    </div>
  );
}

function RelatedPostCard({ post }) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <Link href={post.slug} className="absolute inset-0 z-[1]">
        <span className="sr-only">{`Read: ${post.title}`}</span>
      </Link>

      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={post.cover}
          alt={post.coverAlt || post.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
          {post.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-primary text-lg leading-snug text-slate-900">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{post.deck}</p>

        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{post.date}</span>
          <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
          <span>{post.readMins} min read</span>
        </div>
      </div>
    </article>
  );
}
