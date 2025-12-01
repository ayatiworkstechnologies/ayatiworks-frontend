"use client";

import Link from "next/link";

export function SplitHeroBanner({
  href = "#",
  imageSrc = "/banner/aoe-blogs-web.webp",
  imageAlt = "AI Search Optimization Strategies for Businesses in 2025 – Visual Guide to AEO Implementation",
  category = "SEO",
  title = ["What Is lms.txt? The", "New AI Web Standard", "for 2025"],
  author = {
    name: "Daniel Joseph",
    slug: "daniel-joseph",
    role: "Content Writer",
    avatar: "/assets/teams/daniel.png",
  },
  updatedAt = "Oct 22, 2025",
  readMins = 11,
}) {
  return (
    <div
      className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm"
      aria-label={`Read: ${title.join(" ")}`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Image */}
        <div className="relative">
          <Link
            href={href}
            aria-label={`Read: ${title.join(" ")}`}
            className="block"
          >
            <div className="relative h-64 overflow-hidden sm:h-80 md:h-[420px]">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 lg:block group-hover:opacity-100">
                <div className="absolute inset-0 backdrop-blur-[1.5px]" />
              </div>
            </div>
          </Link>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-black/15 to-transparent lg:block" />
        </div>

        {/* Right: Content panel */}
        <div
          className="relative isolate flex flex-col px-5 py-6 text-white sm:px-8 sm:py-10"
          style={{
            backgroundImage: "linear-gradient(135deg,#0A4991 0%,#0A4991 100%)",
          }}
        >
          <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

          {/* TOP CONTENT */}
          <div className="flex-1">
            <div className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {category}
            </div>

            <h2 className="mt-4 section-title text-left leading-[1.08] text-white">
              {title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          {/* BOTTOM META */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100/90">
              <Link
                href={`/author/${author.slug}`}
                aria-label={`View ${author.name}'s author page`}
                className="relative z-[1] block rounded-md transition hover:opacity-95"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="h-20 w-20 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <div className="font-primary text-xl hover:underline">
                      {author.name}
                    </div>
                    {author.role && (
                      <div className="text-sm font-secondary text-slate-300/85">
                        {author.role}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              <Bar />

              <div className="text-center font-secondary text-slate-300/85">
                <span className="font-primary text-base text-white">
                  {updatedAt}
                </span>
                <br />
                Last Updated
              </div>

              <Bar />

              <div className="text-center font-primary font-medium text-white">
                {readMins} Min
                <br />
                <span className="font-secondary text-slate-300/85">Read</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bar() {
  return (
    <span
      className="mx-1 hidden h-6 w-px bg-white/30 sm:inline-block"
      aria-hidden="true"
    />
  );
}
