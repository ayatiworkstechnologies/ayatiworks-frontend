"use client";

export default function AdminNavbar({ title, subtitle, user }) {
  const username = user?.username || "Admin";
  const role = user?.role?.name || user?.role?.slug || "Administrator";

  const initial =
    (username && username.trim()[0])?.toUpperCase?.() || "A";

  return (
    <header className="mb-5">
      <div className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm">
        {/* Left: Title + subtitle */}
        <div className="flex flex-col gap-1">
          <div className="inline-flex items-center gap-2">
            <span className="h-6 w-6 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center text-[11px] font-semibold">
              ⚙
            </span>
            <h1 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
              {title}
            </h1>
          </div>
          {subtitle && (
            <p className="text-[10px] sm:text-xs text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        {/* Right: User summary */}
        <div className="flex items-center gap-3">
          {/* Role pill */}
          <div className="hidden sm:flex flex-col items-end text-[9px] leading-tight">
            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[8px] uppercase tracking-wide">
              {role}
            </span>
            <span className="mt-0.5 font-medium text-slate-800">
              {username}
            </span>
          </div>

          {/* Avatar */}
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white flex items-center justify-center text-xs sm:text-[11px] font-semibold shadow-md">
            {initial}
            <span className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
