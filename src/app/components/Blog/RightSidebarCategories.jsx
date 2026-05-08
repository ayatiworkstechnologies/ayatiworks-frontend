"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORIES_SRC } from "../../lib/blog-categories-data";

export default function RightSidebarCategories() {
  const pathname = usePathname();

  const isActive = (href) => {
    return pathname === href || (pathname && pathname.startsWith(href + "/"));
  };

  // We exclude the "All" category from the right sidebar since that typically returns to the main list
  // If you want "All" to be included, just map CATEGORIES_SRC directly.
  const displayCategories = CATEGORIES_SRC.filter((c) => c.label !== "All");

  return (
    <div className="rounded-md border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 text-xl section-title">
        Categories
      </div>
      <div className="p-3">
        <ul className="space-y-1 text-lg">
          {displayCategories.map((c) => {
            const active = isActive(c.href);
            return (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className={[
                    "block rounded px-3 py-2 transition-colors",
                    active
                      ? "text-primary text-xl font-primary"
                      : "text-black font-secondary text-lg hover:bg-blue-50",
                  ].join(" ")}
                >
                  {c.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
