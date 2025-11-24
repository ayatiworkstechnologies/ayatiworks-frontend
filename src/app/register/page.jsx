"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { API_BASE, saveAuth } from "../lib/auth";

export default function RegisterPage() {
  const router = useRouter();
  const [roles, setRoles] = useState([]);
  const [rolesLoading, setRolesLoading] = useState(true);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      full_name: "",
      username: "",
      email: "",
      role: "",
      password: "",
      confirm_password: "",
    },
  });

  const password = watch("password");

  /* -------- Fetch Roles -------- */
  useEffect(() => {
    async function fetchRoles() {
      try {
        setRolesLoading(true);
        const res = await fetch(`${API_BASE}/api/roles/`);
        if (!res.ok) throw new Error("Failed to load roles");
        const data = await res.json();
        setRoles(data);
      } catch (err) {
        console.error(err);
        setRoles([]);
      } finally {
        setRolesLoading(false);
      }
    }
    fetchRoles();
  }, []);

  /* -------- Submit Handler -------- */
  const onSubmit = async (formData) => {
    setServerError("");

    if (formData.password !== formData.confirm_password) {
      setServerError("Passwords do not match.");
      return;
    }

    try {
      const payload = {
        full_name: formData.full_name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role, // assuming backend accepts role slug here
      };

      const res = await fetch(`${API_BASE}/api/auth/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Register error:", data);
        // try to show first error if DRF-style
        if (data.detail) throw new Error(data.detail);
        if (typeof data === "object") {
          const firstKey = Object.keys(data)[0];
          if (firstKey && Array.isArray(data[firstKey])) {
            throw new Error(data[firstKey][0]);
          }
        }
        throw new Error("Registration failed. Check details and try again.");
      }

      // If API returns tokens + user (like login), store & route
      if (data.user && data.tokens) {
        saveAuth(data);
        const roleSlug = data.user?.role?.slug?.toLowerCase() || "";
        if (roleSlug === "admin") router.push("/admin-dashboard");
        else router.push("/employee-dashboard");
      } else {
        // fallback: redirect to login
        router.push("/admin");
      }

      reset();
    } catch (err) {
      setServerError(err.message || "Unable to register.");
    }
  };

  /* -------- UI -------- */

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-4 font-[Inter,sans-serif]">
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full "
      >
        {/* soft glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 blur-3xl rounded-3xl" />

        {/* card */}
        <div className="relative bg-white/90 backdrop-blur-md border border-slate-200 rounded-3xl shadow-xl p-7 sm:p-8 text-slate-800">
          {/* header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-base font-semibold shadow-md">
                A
              </div>
              <h1 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                Create your account
              </h1>
              <p className="text-[11px] text-slate-500">
                Register with the correct role to access the suite.
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/admin")}
              className="text-[10px] text-blue-500 hover:text-cyan-500"
            >
              ⟵ Back to Login
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            {/* Full Name */}
            <div>
              <label className="block text-[10px] text-slate-500 mb-1">
                Full Name
              </label>
              <input
                {...register("full_name", {
                  required: "Full name is required",
                  minLength: { value: 2, message: "Name too short" },
                })}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition"
                placeholder="John Doe"
              />
              {errors.full_name && (
                <p className="text-[9px] text-red-500 mt-0.5">
                  {errors.full_name.message}
                </p>
              )}
            </div>

            {/* Username */}
            <div>
              <label className="block text-[10px] text-slate-500 mb-1">
                Username
              </label>
              <input
                {...register("username", {
                  required: "Username is required",
                  minLength: { value: 3, message: "Min 3 characters" },
                })}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition"
                placeholder="yourusername"
              />
              {errors.username && (
                <p className="text-[9px] text-red-500 mt-0.5">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-[10px] text-slate-500 mb-1">
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-[9px] text-red-500 mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <label className="block text-[10px] text-slate-500 mb-1">
                Select Role
              </label>
              <select
                {...register("role", {
                  required: "Role is required",
                })}
                disabled={rolesLoading || roles.length === 0}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition disabled:bg-slate-100 disabled:text-slate-400"
              >
                <option value="">
                  {rolesLoading
                    ? "Loading roles..."
                    : roles.length === 0
                    ? "No roles available"
                    : "Select a role"}
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.slug}>
                    {role.name} ({role.slug})
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="text-[9px] text-red-500 mt-0.5">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] text-slate-500 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Min 6 characters",
                    },
                  })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-[9px] text-red-500 mt-0.5">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-[10px] text-slate-500 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  {...register("confirm_password", {
                    required: "Confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-400/60 focus:border-blue-400 transition"
                  placeholder="••••••••"
                />
                {errors.confirm_password && (
                  <p className="text-[9px] text-red-500 mt-0.5">
                    {errors.confirm_password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Server Error */}
            {serverError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-1 text-[10px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-1.5"
              >
                {serverError}
              </motion.div>
            )}

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-200/70 transition disabled:opacity-60"
            >
              {isSubmitting ? "Creating account..." : "Create Account"}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-4 text-center text-[10px] text-slate-500">
            Already have an account?{" "}
            <button
              onClick={() => router.push("/admin")}
              className="text-blue-500 hover:text-cyan-500 font-medium"
            >
              Login
            </button>
          </div>

          {/* animated soft border */}
          <motion.div
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-3xl border border-blue-300/40 pointer-events-none"
          />
        </div>
      </motion.div>
    </div>
  );
}
