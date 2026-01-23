"use client";

import Link from "next/link";

export default function RelatedPostsFromData({ posts = [] }) {
  if (!posts.length) return null;

  return (
    <section className="mt-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title text-left">Related Posts</h2>
        <Link href="/blogs" className="btn-outline">
          View all
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Link href={post.slug} className="absolute inset-0 z-[1]" />

            <div className="relative h-44 overflow-hidden">
              <img
                src={post.cover}
                alt={post.coverAlt || post.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />

              <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                {post.category}
              </span>
            </div>

            <div className="p-4">
              <h3 className="line-clamp-2 font-primary text-lg text-slate-900">
                {post.title}
              </h3>

              <p className="mt-2 line-clamp-2 text-sm text-slate-600">
                {post.deck}
              </p>

              <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                <span>{post.date}</span>
                <span className="h-3 w-px bg-slate-300" />
                <span>{post.readMins} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
