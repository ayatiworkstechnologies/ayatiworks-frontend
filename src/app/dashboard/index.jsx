// pages/admin/index.jsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { API_BASE, getAuth, clearAuth } from "../lib/auth";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [me, setMe] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    if (!auth) {
      router.replace("/admin");
      return;
    }

    async function fetchMe() {
      try {
        const res = await fetch(`${API_BASE}/api/auth/me/`, {
          headers: {
            Authorization: `Bearer ${auth.access}`,
          },
        });

        const data = await res.json();
        if (!res.ok || !data.ok) throw new Error("Session expired");

        if (data.user.role !== "ADMIN") {
          throw new Error("Not authorized");
        }

        setMe(data.user);
      } catch (err) {
        clearAuth();
        router.replace("/admin");
      } finally {
        setLoading(false);
      }
    }

    fetchMe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-3 text-slate-400">
          <div className="h-8 w-8 border-2 border-indigo-500/40 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs tracking-wide uppercase text-slate-500">
            Loading admin dashboard...
          </span>
        </div>
      </div>
    );
  }

  if (!me) return null;

  function handleLogout() {
    clearAuth();
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      {/* Left Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-5 py-6">
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-10 rounded-2xl bg-slate-900 border border-indigo-500/50 flex items-center justify-center shadow-md shadow-indigo-900/40">
            {/* Replace with <Image src="/logo.svg" ... /> for your logo */}
            <span className="text-indigo-400 font-semibold text-xl">A</span>
          </div>
          <div>
            <p className="text-sm font-semibold leading-tight">
              Admin Control Center
            </p>
            <p className="text-[10px] text-slate-500">
              Role-based secure access
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1.5 text-[12px]">
          <div className="px-3 py-2 rounded-xl bg-slate-900/90 border border-indigo-500/40 flex items-center justify-between gap-2">
            <span className="font-medium text-indigo-300">Overview</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </div>
          <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-900/70 hover:text-indigo-300 transition flex items-center justify-between">
            <span>Users & Roles</span>
            <span className="text-[9px] text-slate-500">Manage</span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-900/70 hover:text-indigo-300 transition flex items-center justify-between">
            <span>Activity Logs</span>
            <span className="text-[9px] text-slate-500">Monitor</span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-900/70 hover:text-indigo-300 transition flex items-center justify-between">
            <span>API & Integrations</span>
            <span className="text-[9px] text-slate-500">Configs</span>
          </button>
          <button className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-900/70 hover:text-indigo-300 transition flex items-center justify-between">
            <span>System Settings</span>
            <span className="text-[9px] text-slate-500">Admin</span>
          </button>
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-col gap-2 text-[10px] text-slate-500">
          <p className="flex items-center justify-between">
            <span>Signed in as</span>
            <span className="text-indigo-300 font-medium">
              {me.username}
            </span>
          </p>
          <p className="flex items-center justify-between">
            <span>Role</span>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-[9px] text-indigo-300 border border-indigo-500/40">
              {me.role}
            </span>
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b border-slate-800/80 flex items-center justify-between gap-4 bg-slate-950/95 backdrop-blur-xl">
          <div>
            <p className="text-[11px] text-slate-500 uppercase tracking-[0.16em]">
              Admin Overview
            </p>
            <h1 className="text-lg sm:text-xl font-semibold text-slate-50">
              Welcome back,{" "}
              <span className="text-indigo-400">{me.username}</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end text-[9px] text-slate-500">
              <span className="uppercase tracking-wide">Role</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-900 text-[9px] text-indigo-300 border border-indigo-500/40">
                {me.role}
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 rounded-full bg-rose-500/90 hover:bg-rose-500 text-[10px] font-semibold text-slate-50 shadow-md shadow-rose-900/50 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 px-4 sm:px-6 lg:px-8 py-5 space-y-6 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 border border-slate-800/90 px-4 py-3 shadow-lg shadow-black/40">
              <p className="text-[10px] text-slate-500">Total Users</p>
              <p className="mt-1 text-2xl font-semibold text-slate-50">
                128
              </p>
              <p className="mt-1 text-[10px] text-emerald-400">
                +6 new this week
              </p>
              <div className="absolute -right-3 -bottom-3 h-10 w-10 rounded-full bg-indigo-500/10 border border-indigo-500/30" />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 border border-slate-800/90 px-4 py-3 shadow-lg shadow-black/40">
              <p className="text-[10px] text-slate-500">Admin Accounts</p>
              <p className="mt-1 text-2xl font-semibold text-slate-50">
                4
              </p>
              <p className="mt-1 text-[10px] text-slate-400">
                Restrict critical access to trusted admins.
              </p>
              <div className="absolute -right-4 -bottom-4 h-12 w-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/40" />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 border border-slate-800/90 px-4 py-3 shadow-lg shadow-black/40">
              <p className="text-[10px] text-slate-500">Last Login</p>
              <p className="mt-1 text-sm text-slate-100">
                {me.username} just now
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Track sign-ins via activity logs.
              </p>
              <div className="absolute -right-2 bottom-1 h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/40" />
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-indigo-500/40 px-4 py-3 shadow-lg shadow-black/40">
              <p className="text-[10px] text-slate-400">API Health</p>
              <p className="mt-1 text-sm font-semibold text-emerald-400">
                All systems operational
              </p>
              <p className="mt-1 text-[10px] text-slate-500">
                Auth, roles & dashboards running smoothly.
              </p>
            </div>
          </div>

          {/* Two-column Layout: Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
            {/* Recent Activity */}
            <div className="xl:col-span-2 rounded-2xl bg-slate-950/90 border border-slate-800/90 px-4 py-4 shadow-lg shadow-black/40">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-semibold text-slate-50">
                  Recent Admin Activity
                </h2>
                <span className="text-[9px] text-slate-500">
                  Sample data — connect to logs API
                </span>
              </div>
              <div className="space-y-2.5 text-[10px] text-slate-400">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>
                      {me.username} updated user roles.
                    </span>
                  </div>
                  <span className="text-slate-600">Now</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span>New staff account created.</span>
                  </div>
                  <span className="text-slate-600">2h ago</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                    <span>Security settings reviewed.</span>
                  </div>
                  <span className="text-slate-600">Yesterday</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl bg-slate-950/90 border border-slate-800/90 px-4 py-4 shadow-lg shadow-black/40 flex flex-col gap-3">
              <h2 className="text-sm font-semibold text-slate-50">
                Quick Actions
              </h2>
              <p className="text-[10px] text-slate-500">
                Hook these buttons to your Django endpoints:
              </p>

              <button className="w-full px-3 py-2 rounded-xl bg-indigo-500/90 hover:bg-indigo-500 text-[10px] font-semibold text-slate-50 transition">
                + Create New User
              </button>
              <button className="w-full px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 text-[10px] text-slate-200 transition">
                Manage Roles & Permissions
              </button>
              <button className="w-full px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 text-[10px] text-slate-200 transition">
                View Security / Login Logs
              </button>
              <button className="w-full px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800/90 border border-slate-700/80 text-[10px] text-slate-200 transition">
                Configure API & Integrations
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
