"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth } from "../lib/auth";
import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://100.30.46.253/";

export default function AdminDashboard() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeUsers: 0,
    totalRoles: 0,
    alerts: 0,
  });

  // Auth + role guard
  useEffect(() => {
    const stored = getAuth();
    if (!stored) {
      router.push("/admin");
      return;
    }
    if (stored.user?.role?.slug !== "admin") {
      router.push("/employee-dashboard");
      return;
    }
    setAuth(stored);
  }, []);

  // Fetch stats from API
  useEffect(() => {
    if (!auth) return;

    async function fetchStats() {
      try {
        setLoadingStats(true);
        const token = auth?.tokens?.access;

        const [usersRes, rolesRes] = await Promise.all([
          fetch(`${API_BASE}/api/users/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE}/api/roles/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!usersRes.ok || !rolesRes.ok) {
          throw new Error("Failed to load dashboard stats");
        }

        const [users, roles] = await Promise.all([
          usersRes.json(),
          rolesRes.json(),
        ]);

        const totalUsers = users.length;
        const activeUsers = users.filter((u) => u.is_active).length;
        const totalRoles = roles.length;

        // simple example: alerts = users that are inactive or no role
        const alerts =
          users.filter((u) => !u.is_active || !u.role).length || 0;

        setStats({
          totalUsers,
          activeUsers,
          totalRoles,
          alerts,
        });
      } catch (err) {
        console.error(err);
        // keep stats as 0s, don't break UI
      } finally {
        setLoadingStats(false);
      }
    }

    fetchStats();
  }, [auth]);

  if (!auth) return null;

  const user = auth.user;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Shared Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8">
        {/* Shared Top Navbar with profile */}
        <AdminNavbar
          title="Admin Dashboard"
          subtitle="Overview of users, roles and system status."
          user={user}
        />

        {/* KPI Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Total Users</p>
            <p className="mt-1 text-3xl font-semibold text-slate-900">
              {stats.totalUsers}
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              All registered accounts in the system.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Active Users</p>
            <p className="mt-1 text-3xl font-semibold text-emerald-600">
              {stats.activeUsers}
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Users currently enabled for login.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">Roles Configured</p>
            <p className="mt-1 text-3xl font-semibold text-blue-600">
              {stats.totalRoles}
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Manage roles in Roles & Permissions.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <p className="text-xs text-slate-500">System Alerts</p>
            <p className="mt-1 text-3xl font-semibold text-orange-500">
              {stats.alerts}
            </p>
            <p className="mt-1 text-[10px] text-slate-500">
              Inactive users or users without roles.
            </p>
          </div>
        </div>

        {/* Profile Section */}
        <section className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">
            Profile Information
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-slate-700">
            <div>
              <p>
                <span className="font-medium">Username:</span>{" "}
                {user.username || "—"}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {user.email || "—"}
              </p>
            </div>
            <div>
              <p>
                <span className="font-medium">Role:</span>{" "}
                {user.role?.name || user.role?.slug || "Admin"}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span className="text-green-600 font-medium">Active</span>
              </p>
            </div>
          </div>
        </section>

        {/* Loading indicator (subtle, non-blocking) */}
        {loadingStats && (
          <p className="mt-3 text-[10px] text-slate-400">
            Syncing latest stats...
          </p>
        )}
      </main>
    </div>
  );
}
