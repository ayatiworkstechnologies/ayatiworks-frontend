"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { FiClock } from "react-icons/fi";
import { POSTS } from "../../lib/blogs-data";
import { CATEGORIES_SRC } from "../../lib/blog-categories-data";

/* ------------------ Helpers ------------------ */
const toSlug = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const toPathSegments = (slugStr = "") =>
  String(slugStr).split("/").map((s) => toSlug(s));

const fromSlug = (slug = "", list = []) => {
  const found = list.find((c) => toSlug(c.label) === slug);
  return found ? found.label : "All";
};

/* ------------------ Categories ------------------ */
const CATEGORIES = CATEGORIES_SRC.map((c) => ({
  ...c,
  slug: toSlug(c.label),
}));

/* ------------------ Sort options ------------------ */
const SORT_OPTIONS = [
  { value: "new", label: "Newest" }, // date DESC
  { value: "old", label: "Oldest" }, // date ASC
  { value: "title-asc", label: "Title A–Z" },
  { value: "title-desc", label: "Title Z–A" },
  { value: "read-asc", label: "Read time ↑" },
  { value: "read-desc", label: "Read time ↓" },
];

/* =========================================================
   PAGE (Client)
========================================================= */
export default function BlogListSection({ initialParams = {} }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname() || "/blogs";

  // Robust param reads with fallbacks
  const initialPage =
    initialParams && initialParams.page != null
      ? String(initialParams.page)
      : undefined;
  const initialCat =
    initialParams && initialParams.cat != null
      ? String(initialParams.cat)
      : undefined;
  const initialSort =
    initialParams && initialParams.sort != null
      ? String(initialParams.sort)
      : undefined;

  const pageParamStr = searchParams.get("page") || initialPage || "1";
  const catParamStr = (searchParams.get("cat") || initialCat || "all").toLowerCase();
  const sortParamStr = (searchParams.get("sort") || initialSort || "new").toLowerCase();

  const pageParam = Number.isFinite(Number(pageParamStr))
    ? Number(pageParamStr)
    : 1;

  const activeCatLabel =
    catParamStr === "all" ? "All" : fromSlug(catParamStr, CATEGORIES);

  // Filter first
  const filtered = useMemo(() => {
    if (activeCatLabel === "All") return POSTS;
    return POSTS.filter(
      (p) => p.category && toSlug(p.category) === toSlug(activeCatLabel)
    );
  }, [activeCatLabel]);

  // Then sort based on `sort`
  const sorted = useMemo(() => {
    const arr = [...filtered];
    switch (sortParamStr) {
      case "old":
        arr.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "title-asc":
        arr.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        arr.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "read-asc":
        arr.sort((a, b) => (a.readMins || 0) - (b.readMins || 0));
        break;
      case "read-desc":
        arr.sort((a, b) => (b.readMins || 0) - (a.readMins || 0));
        break;
      case "new":
      default:
        arr.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }
    return arr;
  }, [filtered, sortParamStr]);

  // Pagination
  const perPage = 4;
  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(pageParam, 1), totalPages);
  const start = (current - 1) * perPage;
  const visible = sorted.slice(start, start + perPage);

  const pushParams = (paramsObj) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(paramsObj).forEach(([k, v]) => {
      if (v === null || v === undefined) return;
      params.set(k, String(v));
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const goTo = (p) => pushParams({ page: p });

  const setCat = (label) => {
    const slug = label === "All" ? "all" : toSlug(label);
    const params = new URLSearchParams(searchParams.toString());
    params.set("cat", slug);
    params.set("page", "1");
    params.set("sort", sortParamStr || "new"); // keep current sort
    router.push(`${pathname}?${params.toString()}`);
  };

  const setSort = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.set("page", "1"); // reset to first page when sort changes
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto section-container px-4 sm:px-6 py-6 sm:py-8">
        {/* MOBILE: Categories on top */}
        <div className="lg:hidden sticky top-14 z-20 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
          <MobileCategoriesTabs
            categories={CATEGORIES}
            activeSlug={catParamStr}
            onSelect={setCat}
          />
        </div>

        <div className="mt-4 lg:mt-0 grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* GRID */}
          <div>
            <div className="mb-6 flex items-center justify-between gap-4">
              <h1 className="section-title text-left">Latest Articles</h1>
              <SortSelect sort={sortParamStr} onChange={setSort} />
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              {visible.map((post) => (
                <Card key={post.id ?? `${post.slug}-${post.title}`} post={post} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination current={current} totalPages={totalPages} onChange={goTo} />
              </div>
            )}
          </div>

          {/* DESKTOP: Sidebar categories */}
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <FullCategoriesPanel
              categories={CATEGORIES}
              activeSlug={catParamStr}
              onSelect={setCat}
            />
          </aside>
        </div>

        {/* MOBILE: Sticky "Next ›" floating button */}
        {totalPages > current && <StickyNextButton onClick={() => goTo(current + 1)} />}
      </section>
    </main>
  );
}

/* =========================================================
   Components
========================================================= */

function SortSelect({ sort = "new", onChange }) {
  return (
    <label className="inline-flex items-center gap-2 text-base">
      <span className="text-priamry ">Sort</span>
      <select
        value={sort}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm text-primary font-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      >
        {SORT_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Card({ post }) {
  // Build clean href from slug segments
  const segments = Array.isArray(post.slug)
    ? post.slug.map(toSlug)
    : toPathSegments(post.slug);
  const href = `/blogs/${segments.join("/")}`;

  const mins = Number(post.readMins);
  const readText = Number.isFinite(mins) ? `${mins} min read` : null;

  const categorySlug = post.category ? toSlug(post.category) : null;
  const categoryHref = categorySlug ? `/blogs?cat=${categorySlug}&page=1` : null;

  return (
    <article
      className={[
        "group rounded-xl border border-slate-200 bg-white",
        "shadow-[0_10px_24px_rgba(0,0,0,0.06)] transition-all",
        "hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(0,0,0,0.10)]",
      ].join(" ")}
    >
      <Link href={href} className="block" aria-label={`Read: ${post.title}`}>
        <div className="relative h-68 w-full overflow-hidden rounded-t-xl">
          <img
            src={post.cover}
            alt={post.coverAlt || post.title}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />

          {post.category ? (
            <div className="absolute left-3 top-3">
              <Link
                href={categoryHref}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center rounded-full bg-primary/95 text-white font-secondary px-3 py-1 text-xs font-medium shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label={`Filter by ${post.category}`}
              >
                {post.category}
              </Link>
            </div>
          ) : null}

          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        <div className="px-5 py-4">
          <h3 className="font-primary text-2xl text-left hover:underline section-title line-clamp-2">
            {post.title}
          </h3>

          {post.deck ? <p className="mt-2 section-phara">{post.deck}</p> : null}

          <div className="mt-4 flex flex-wrap items-center gap-x-2 section-phara font-primary text-slate-700">
            <FiClock className="mr-1 shrink-0" aria-hidden />
            <span>{post.date}</span>

            {readText && (
              <>
                <span className="mx-1 text-slate-400" aria-hidden>
                  |
                </span>
                <span className="whitespace-nowrap">{readText}</span>
              </>
            )}
          </div>

          <div className="mt-4">
            <span className="btn-primary hover:bg-primary">READ MORE</span>
          </div>
        </div>
      </Link>
    </article>
  );
}

/* ---------- Desktop sidebar panel ---------- */
function FullCategoriesPanel({
  categories = CATEGORIES,
  activeSlug = "all",
  onSelect,
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 text-2xl text-primary font-primary">
        Categories
      </div>

      <ul className="divide-y divide-slate-200">
        {categories.map((c) => {
          const slug = c.slug || toSlug(c.label);
          const isActive = activeSlug === (slug === "all" ? "all" : slug);
          return (
            <li key={slug}>
              <button
                type="button"
                onClick={() => onSelect(c.label)}
                className={[
                  "block w-full text-left px-5 py-3 transition-colors",
                  isActive
                    ? "text-primary font-primary text-xl"
                    : "text-primary font-secondary text-lg hover:bg-blue-50",
                ].join(" ")}
                aria-current={isActive ? "true" : undefined}
              >
                {c.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ---------- Mobile categories tabs (top) ---------- */
function MobileCategoriesTabs({
  categories = CATEGORIES,
  activeSlug = "all",
  onSelect,
}) {
  return (
    <div className="px-4 py-3">
      <div
        className="-mx-4 px-4 overflow-x-auto no-scrollbar flex gap-2 snap-x snap-mandatory"
        role="tablist"
        aria-label="Categories"
      >
        {categories.map((c) => {
          const slug = c.slug || toSlug(c.label);
          const active = (slug === "all" ? "all" : slug) === activeSlug;
          return (
            <button
              key={slug}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(c.label)}
              className={[
                "snap-start shrink-0 rounded-full border px-3.5 py-2 text-[12px] transition-colors",
                active
                  ? "border-primary bg-primary text-white"
                  : "border-slate-200 bg-white text-primary hover:bg-slate-50",
              ].join(" ")}
            >
              {c.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Pagination ---------- */
function Pagination({ current, totalPages, onChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <nav
      className="flex items-center gap-2 text-[12px]"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onChange(current - 1)}
        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-primary font-secondary shadow-sm disabled:opacity-40"
      >
        ‹ Back
      </button>

      {pages.map((p) => (
        <button
          type="button"
          key={`page-${p}`}
          onClick={() => onChange(p)}
          className={[
            "rounded-md border px-3 py-1.5 font-secondary shadow-sm transition-colors",
            p === current
              ? "border-primary bg-primary text-white"
              : "border-slate-200 bg-white text-primary hover:bg-slate-50",
          ].join(" ")}
          aria-current={p === current ? "page" : undefined}
        >
          {p}
        </button>
      ))}

      <button
        type="button"
        disabled={current === totalPages}
        onClick={() => onChange(current + 1)}
        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-primary font-secondary shadow-sm disabled:opacity-40"
      >
        Next ›
      </button>
    </nav>
  );
}

/* ---------- Mobile sticky "Next ›" ---------- */
function StickyNextButton({ onClick }) {
  return (
    <div className="lg:hidden fixed bottom-4 right-4 z-30">
      <button
        type="button"
        onClick={onClick}
        className="rounded-full bg-primary text-white px-5 py-3 text-[13px] shadow-lg shadow-primary/30 active:scale-95"
        aria-label="Go to next page"
      >
        Next ›
      </button>
    </div>
  );
}
