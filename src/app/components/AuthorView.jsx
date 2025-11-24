"use client";

import React from "react";
import { FaLinkedinIn, FaRss } from "react-icons/fa";
import Link from "next/link";

/* format ET like “Sep 26, 2025 at 5:09 pm ET” */
function formatET(iso) {
  try {
    const d = new Date(iso);
    const date = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(d);
    const time = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(d);
    return `${date} at ${time.toLowerCase()} ET`;
  } catch {
    return iso ?? "";
  }
}

const isExternal = (url = "") => /^https?:\/\//i.test(url);

export default function AuthorView({ author, posts }) {
  return (
    <main className="min-h-screen bg-white py-20 text-slate-900">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[320px_minmax(0,1fr)]">
          {/* LEFT — Author card */}
          <aside className="rounded border border-slate-200 bg-white p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-60 w-40 rounded-lg border border-slate-200 object-cover"
                loading="lazy"
                decoding="async"
              />
              <h2 className="section-title mt-4 leading-tight">
                {author.name}
              </h2>

              <div className="my-6 h-px w-full bg-slate-200" />

              <div className="w-full">
                <div className="text-left text-lg font-semibold">Connect</div>
                <div className="mt-3 flex items-center gap-3">
                  {author.socials?.linkedin && (
                    <a
                      aria-label="LinkedIn"
                      href={author.socials.linkedin}
                      className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 transition hover:bg-slate-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedinIn size={16} className="text-primary" />
                    </a>
                  )}
                  {author.socials?.rss && (
                    <a
                      aria-label="RSS"
                      href={author.socials.rss}
                      className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 transition hover:bg-slate-50"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaRss size={18} className="text-primary" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT — About + Topics + Latest articles */}
          <section>
            <h1 className="text-3xl font-bold md:text-4xl">
              About: <span className="font-primary">{author.name}</span>
            </h1>

            {author.bio && (
              <p className="section-phara mt-4 leading-7">{author.bio}</p>
            )}

            {!!author.topics?.length && (
              <>
                <div className="section-title mt-6 text-left text-2xl">
                  Related topics:
                </div>
                <div className="mt-3 flex flex-wrap gap-3">
                  {author.topics.map((t) => (
                    <Link
                      key={t}
                      href={`/blogs/${encodeURIComponent(t.toLowerCase())}`}
                      className="inline-flex items-center rounded bg-primary px-4 py-2 text-lg font-primary text-white shadow-sm transition hover:bg-primary/90"
                      prefetch={false}
                    >
                      {t}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="my-6 h-px w-full bg-slate-200" />

            <h2 className="text-2xl font-bold md:text-3xl">
              <span className="section-title text-3xl">{author.name}’s</span>{" "}
              latest articles
            </h2>

            <div className="mt-4 space-y-6">
              {Array.isArray(posts) && posts.length > 0 ? (
                posts.map((p) => {
                  const external = isExternal(p?.href);
                  const label = p?.title ? `Read: ${p.title}` : "Read article";

                  const CardInner = (
                    <>
                      {/* Cover */}
                      <div className="w-full overflow-hidden rounded h-full min-h-[120px]">
                        <div className="relative h-full w-full">
                          <img
                            src={p?.cover || "/placeholder.jpg"}
                            alt={p?.title || "Article cover"}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>

                      {/* Text */}
                      <div>
                        {p?.tag && (
                          <div className="section-phara text-base">
                            <span className="rounded-full border border-primary px-2">
                              {p.tag}
                            </span>
                          </div>
                        )}

                        <div className="section-title mt-1 text-left text-xl underline-offset-2 group-hover:underline">
                          {p?.title || "Untitled"}
                        </div>

                        <div className="mt-1 font-primary text-lg text-primary/80">
                          {author?.name ?? "Author"}{" "}
                          {p?.publishedAt ? `| ${formatET(p.publishedAt)}` : ""}
                        </div>

                        {p?.excerpt && (
                          <p className="section-phara mt-1 line-clamp-2 font-secondary">
                            {p.excerpt}
                          </p>
                        )}
                      </div>
                    </>
                  );

                  return external ? (
                    <a
                      key={p?.id ?? p?.href ?? label}
                      href={p?.href || "#"}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-[140px_minmax(0,1fr)] items-start gap-4 rounded border border-slate-200 bg-white p-3 transition hover:shadow-sm"
                    >
                      {CardInner}
                    </a>
                  ) : (
                    <Link
                      key={p?.id ?? p?.href ?? label}
                      href={p?.href || "#"}
                      prefetch={false}
                      aria-label={label}
                      className="group grid grid-cols-[140px_minmax(0,1fr)] items-start gap-4 rounded border border-slate-200 bg-white p-3 transition hover:shadow-sm"
                    >
                      {CardInner}
                    </Link>
                  );
                })
              ) : (
                <div className="rounded border border-dashed border-slate-200 p-6 text-sm text-slate-600">
                  No articles yet.
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
