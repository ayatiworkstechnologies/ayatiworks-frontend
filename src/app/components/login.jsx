"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { API_BASE, saveAuth } from "../lib/auth"; // keep your existing imports

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        body: JSON.stringify({ username: identifier, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Invalid login");

      saveAuth(data);
      const role = data?.user?.role?.slug?.toLowerCase();
      router.push(role === "admin" ? "/admin-dashboard" : "/employee-dashboard");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-secondary/10 px-4 font-[Inter,sans-serif]">

      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative w-full max-w-6xl rounded-3xl overflow-hidden shadow-2xl bg-white/80 backdrop-blur-2xl border border-slate-200"
      >

        <div className="grid md:grid-cols-5">
          
          {/* LEFT PANEL */}
          <div className="md:col-span-2 p-8 md:p-10 bg-white/70 backdrop-blur-xl border-r border-slate-100">

            {/* Badge */}
            <div className="flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit font-medium">
              <span className="h-1.5 w-1.5 bg-primary rounded-full" /> Admin Access
            </div>

            <h2 className="text-3xl font-semibold mt-4 text-slate-900">
              Welcome Back AyatiWorks !
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Sign in to continue</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4 ">
              {/* Username */}
              <div>
                <label className="text-[11px] text-slate-500 mb-1 block">Username / Email</label>
                <input
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm placeholder:text-slate-400 outline-none
                  focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-[11px] text-slate-500 mb-1 block">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm placeholder:text-slate-400 outline-none
                    focus:ring-2 focus:ring-primary/40 focus:border-primary pr-10"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-3 text-[10px] text-slate-500 hover:text-primary"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {/* Error */}
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 px-3 py-2 rounded-lg">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 py-2.5 text-sm font-semibold text-white shadow-lg transition disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Register */}
            <p className="mt-5 text-center text-[11px] text-slate-500">
              Don’t have an account?
              <button
                onClick={() => router.push("/register")}
                className="text-primary font-medium ml-1 hover:text-secondary"
              >
                Register
              </button>
            </p>
          </div>

          {/* RIGHT IMAGE PANEL */}
          <div className="relative md:col-span-3 bg-slate-900/80">
            <img
              src="/assets/login-hero.jpg" // replace with your image
              alt="Login Preview"
              className="h-64 md:h-full w-full object-cover"
            />

          </div>

        </div>
      </motion.div>
    </div>
  );
}
