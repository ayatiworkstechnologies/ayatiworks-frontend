// pages/login.jsx
"use client";
import { useState } from "react";
import { API_BASE, saveAuth } from "../lib/auth";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState(""); // email or username
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: identifier, // can be username or email
          password,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.detail || "Invalid username/email or password");
      }

      saveAuth(data);

      const role = data.user.role;
      if (role === "ADMIN") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center px-4">
      <div className="w-full max-w-7xl grid md:grid-cols-[1.4fr,1fr] gap-10 items-center">
        {/* Left: Branding / Info */}
        <div className="hidden md:flex flex-col gap-6 text-slate-800">
          <div className="flex items-center gap-3">
            {/* Replace /logo.svg with your actual logo in /public */}
            <div className="h-11 w-11 rounded-2xl bg-white border border-blue-500/40 flex items-center justify-center shadow-sm">
              <span className="text-blue-600 font-semibold text-xl">A</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-slate-900">
                Your Brand Admin Portal
              </h1>
              <p className="text-xs text-slate-500">
                Secure role-based access for your internal team.
              </p>
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-semibold leading-snug text-slate-900">
            Sign in to
            <span className="ml-2 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              manage users, data & access
            </span>
          </h2>

          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
              Centralized login for Admin, Manager, Staff, and Users.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
              Backed by Django + MySQL + JWT for secure authentication.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              Clean, responsive UI built with Next.js & Tailwind CSS.
            </li>
          </ul>

          <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
            <div className="h-1 w-6 rounded-full bg-blue-500" />
            <span>Only authorized users can access the admin dashboard.</span>
          </div>
        </div>

        {/* Right: Login Card */}
        <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-7 sm:p-8 w-full mx-auto">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-4 md:hidden">
            <div className="h-9 w-9 rounded-2xl bg-white border border-blue-500/40 flex items-center justify-center shadow-sm">
              <span className="text-blue-600 font-semibold text-lg">A</span>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-900">
                Your Brand Admin Portal
              </p>
              <p className="text-[10px] text-slate-500">
                Role-based secure login
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
            Welcome back
          </h2>
          <p className="mt-1 text-[11px] text-slate-500">
            Sign in with your registered credentials to continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-slate-700">
                Email / Username
              </label>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="you@example.com or username"
                required
                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-xl bg-slate-50 border border-slate-300 px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-2 focus:ring-blue-500/70 focus:border-blue-500"
              />
            </div>

            {error && (
              <div className="text-[11px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Checking credentials..." : "Sign in"}
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-[10px] text-slate-500">
            <span>Need access? Contact your administrator.</span>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-500 font-medium transition"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}