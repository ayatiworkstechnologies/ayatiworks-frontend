"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronRightIcon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/solid";

/**
 * MobileMenu (Modern UI) — no counts on dropdown headers
 */
export default function MobileMenu({
  nav = [],
  open: drawerOpen,
  setOpen,
  pathname = "",
  onSelect,
}) {
  const [openMap, setOpenMap] = useState({});

  const toggle = (key) => setOpenMap((m) => ({ ...m, [key]: !m[key] }));
  const isActive = (path) => !!path && (pathname === path || pathname.startsWith(path + "/"));

  const closeDrawer = useCallback(() => setOpen?.(false), [setOpen]);

  const closeAndGo = (path) => {
    if (!path) return;
    onSelect?.(path);
    closeDrawer();
  };

  useEffect(() => {
    if (!drawerOpen) setOpenMap({});
  }, [drawerOpen]);

  useEffect(() => {
    // route changed externally → close drawer & reset accordions
    closeDrawer();
    setOpenMap({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <div
      className="h-full w-full overflow-auto bg-gradient-to-b from-white to-slate-50"
      onClick={(e) => e.stopPropagation()}
      role="dialog"
      aria-modal="true"
    >
      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-black/5">
        <div className="mx-auto max-w-screen-sm px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              e.stopPropagation();
              closeAndGo("/");
            }}
            className="inline-flex items-center gap-2"
          >
            <img src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/ayatiworks_logo.svg" alt="Logo" className="h-8 w-auto" />
            <span className="sr-only">Home</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={(e) => {
              e.stopPropagation();
              closeDrawer();
            }}
            className="p-2 rounded-xl hover:bg-black/5 active:scale-95 transition"
          >
            <XMarkIcon className="h-6 w-6 text-slate-900" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-screen-sm px-3 py-4 space-y-4">
        {nav.map((entry, i) => {
          /* ---------- LOGO (skip; top bar already has it) ---------- */
          if (entry.kind === "logo") return null;

          /* ---------- SIMPLE LINK ---------- */
          if (entry.kind === "link") {
            const active = isActive(entry.path);
            return (
              <button
                key={`link-${i}`}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  closeAndGo(entry.path);
                }}
                className={[
                  "group relative block w-full text-left rounded-2xl",
                  "px-4 py-4",
                  "bg-white/70 backdrop-blur border border-black/5 shadow-sm",
                  "hover:shadow-md hover:-translate-y-[1px] transition",
                ].join(" ")}
                aria-current={active ? "page" : undefined}
              >
                <div className="flex items-center justify-between">
                  <span className={["text-[15px] font-semibold", active ? "text-white" : "text-slate-900"].join(" ")}>
                    {entry.label}
                  </span>
                  <ChevronRightIcon
                    className={["h-5 w-5", active ? "text-white" : "text-slate-400 group-hover:text-slate-600"].join(" ")}
                  />
                </div>

                {/* Active pill background */}
                <span
                  className={[
                    "pointer-events-none absolute inset-0 rounded-2xl",
                    active ? "bg-primary shadow-[0_10px_30px_-10px_rgba(59,130,246,.6)]" : "bg-transparent",
                  ].join(" ")}
                  aria-hidden="true"
                  style={{ zIndex: -1 }}
                />
              </button>
            );
          }

          /* ---------- DROPDOWN (NO COUNT, CHEVRON ONLY) ---------- */
          if (entry.kind === "dropdown") {
            const k = `dd-${entry.title || i}`;
            const opened = !!openMap[k];

            return (
              <div
                key={`dd-${i}`}
                className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(k);
                  }}
                  className="w-full flex items-center justify-between px-4 py-4"
                  aria-expanded={opened}
                  aria-controls={`${k}-panel`}
                >
                  <span className="text-[15px] font-semibold text-slate-900">
                    {entry.title}
                  </span>
                  {opened ? (
                    <ChevronUpIcon className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronRightIcon className="h-5 w-5 text-slate-600" />
                  )}
                </button>

                <div
                  id={`${k}-panel`}
                  className={["grid transition-[grid-template-rows] duration-300 ease-out", opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden border-t border-black/5">
                    <div className="p-2 space-y-2">
                      {entry.items?.map((it) => {
                        const active = isActive(it.path);
                        return (
                          <button
                            key={it.path}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              closeAndGo(it.path);
                            }}
                            className={["w-full text-left px-3 py-3 rounded-xl", active ? "bg-primary text-white shadow" : "hover:bg-slate-100 text-slate-800"].join(" ")}
                          >
                            {it.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          /* ---------- MEGA (GROUPS) ---------- */
          if (entry.kind === "mega") {
            const k = `mega-${entry.title || i}`;
            const opened = !!openMap[k];

            return (
              <div
                key={`mega-${i}`}
                className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggle(k);
                  }}
                  className="w-full flex items-center justify-between px-4 py-4"
                  aria-expanded={opened}
                  aria-controls={`${k}-panel`}
                >
                  <span className="text-[15px] font-semibold text-slate-900">
                    {entry.title}
                  </span>
                  {opened ? (
                    <ChevronUpIcon className="h-5 w-5 text-slate-600" />
                  ) : (
                    <ChevronRightIcon className="h-5 w-5 text-slate-600" />
                  )}
                </button>

                <div
                  id={`${k}-panel`}
                  className={["grid transition-[grid-template-rows] duration-300 ease-out", opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"].join(" ")}
                >
                  <div className="min-h-0 overflow-hidden border-t border-black/5">
                    <div className="p-3 space-y-3">
                      {entry.groups?.map((g, gi) => {
                        const gk = `${k}-${g.heading || gi}`;
                        const gOpen = !!openMap[gk];

                        return (
                          <div key={g.heading || gi} className="rounded-xl border border-black/5 bg-white/80 shadow-sm overflow-hidden">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggle(gk);
                              }}
                              className="w-full flex items-center justify-between px-3 py-3"
                              aria-expanded={gOpen}
                              aria-controls={`${gk}-panel`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full bg-primary/70" />
                                <span className="text-[14px] font-semibold text-slate-900">{g.heading}</span>
                              </div>
                              {gOpen ? (
                                <ChevronUpIcon className="h-4 w-4 text-slate-600" />
                              ) : (
                                <ChevronRightIcon className="h-4 w-4 text-slate-600" />
                              )}
                            </button>

                            <div
                              id={`${gk}-panel`}
                              className={["grid transition-[grid-template-rows] duration-300 ease-out", gOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"].join(" ")}
                            >
                              <div className="min-h-0 overflow-hidden border-t border-black/5">
                                <div className="p-2 space-y-2">
                                  {g.basePath && (
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        closeAndGo(g.basePath);
                                      }}
                                      className="w-full text-left px-3 py-2 rounded-lg text-[13px] bg-slate-100 hover:bg-primary hover:text-white"
                                    >
                                      View all {g.heading}
                                    </button>
                                  )}
                                  {g.items?.map((it) => {
                                    const active = isActive(it.path);
                                    return (
                                      <button
                                        key={it.path}
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          closeAndGo(it.path);
                                        }}
                                        className={["w-full text-left px-3 py-3 rounded-lg", active ? "bg-primary text-white shadow" : "hover:bg-slate-100 text-slate-800"].join(" ")}
                                      >
                                        {it.label}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}

        {/* Bottom padding so last card isn’t hidden by iOS toolbars */}
        <div className="h-8" />
      </div>
    </div>
  );
}
