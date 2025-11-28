"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAuth, logout } from "../../lib/auth";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://3.236.78.66";

// Update this if your backend uses a different route for current user
const PROFILE_ENDPOINT = `${API_BASE}/api/auth/me/`;

export default function SettingsPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Editable profile state
  const [form, setForm] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    role_name: "",
    // password change (optional)
    current_password: "",
    new_password: "",
    confirm_password: "",
  });

  /* ---------- Auth Guard + Load Base Auth ---------- */
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
  }, [router]);

  /* ---------- Fetch current user profile from backend ---------- */
  useEffect(() => {
    if (!auth) return;

    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError("");
        setSuccess("");

        const token = auth.tokens?.access;
        const res = await fetch(PROFILE_ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to load profile.");
        }

        const data = await res.json();

        setForm((prev) => ({
          ...prev,
          username: data.username || "",
          email: data.email || "",
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          role_name:
            data.role?.name ||
            data.role?.slug ||
            auth.user?.role?.name ||
            auth.user?.role?.slug ||
            "Administrator",
          current_password: "",
          new_password: "",
          confirm_password: "",
        }));
      } catch (err) {
        console.error(err);
        setError(err.message || "Unable to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [auth]);

  if (!auth) return null;
  const token = auth.tokens?.access;

  /* ---------- Handlers ---------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // basic password validation if user is changing password
    if (form.new_password || form.confirm_password || form.current_password) {
      if (!form.current_password) {
        setError("Please enter your current password.");
        return;
      }
      if (form.new_password !== form.confirm_password) {
        setError("New password and confirmation do not match.");
        return;
      }
      if (form.new_password.length < 8) {
        setError("New password must be at least 8 characters.");
        return;
      }
    }

    try {
      setSaving(true);

      const payload = {
        username: form.username.trim(),
        email: form.email.trim(),
        first_name: form.first_name.trim(),
        last_name: form.last_name.trim(),
      };

      // attach password fields only if provided
      if (form.new_password && form.current_password) {
        payload.current_password = form.current_password;
        payload.new_password = form.new_password;
      }

      const res = await fetch(PROFILE_ENDPOINT, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Profile update error", data);
        throw new Error(
          data.detail ||
            data.error ||
            "Failed to update profile."
        );
      }

      // Update local auth so navbar etc. reflect latest user info
      try {
        const stored = getAuth();
        if (stored) {
          const updatedAuth = {
            ...stored,
            user: {
              ...stored.user,
              ...data,
            },
          };
          if (typeof window !== "undefined") {
            window.localStorage.setItem(
              "auth",
              JSON.stringify(updatedAuth)
            );
          }
          setAuth(updatedAuth);
        }
      } catch (storageErr) {
        console.warn("Unable to sync updated auth to storage", storageErr);
      }

      setForm((prev) => ({
        ...prev,
        current_password: "",
        new_password: "",
        confirm_password: "",
      }));

      setSuccess("Profile updated successfully.");
    } catch (err) {
      setError(err.message || "Unable to save changes.");
    } finally {
      setSaving(false);
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-6 space-y-5">
        <AdminNavbar
          title="Settings"
          subtitle="Manage your admin profile and system configuration."
          user={auth.user}
        />

        {/* Alerts */}
        {(error || success) && (
          <div className="flex flex-col gap-2">
            {error && (
              <div className="text-[10px] text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </div>
            )}
            {success && (
              <div className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                {success}
              </div>
            )}
          </div>
        )}

        {loading ? (
          <p className="text-[10px] text-slate-500">
            Loading your settings...
          </p>
        ) : (
          <>
            {/* Profile Settings */}
            <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    Your Profile
                  </h2>
                  <p className="text-[10px] text-slate-500">
                    Update your personal details and login information.
                  </p>
                </div>
                <span className="px-2 py-1 rounded-full bg-slate-50 text-[9px] text-slate-500 border border-slate-200">
                  {form.role_name || "Administrator"}
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-4 text-xs"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-500 mb-1">
                      Username
                    </label>
                    <input
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-slate-500 mb-1">
                      First Name
                    </label>
                    <input
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-500 mb-1">
                      Last Name
                    </label>
                    <input
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Password Change */}
                <div className="mt-4 border-t border-slate-100 pt-4 space-y-3">
                  <h3 className="text-[10px] font-semibold text-slate-800">
                    Change Password (optional)
                  </h3>
                  <p className="text-[9px] text-slate-500">
                    Leave blank if you don&apos;t want to change your password.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    <div>
                      <label className="block text-slate-500 mb-1">
                        Current Password
                      </label>
                      <input
                        type="password"
                        name="current_password"
                        value={form.current_password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="new_password"
                        value={form.new_password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 mb-1">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirm_password"
                        value={form.confirm_password}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      router.push("/admin");
                    }}
                    className="px-3 py-1.5 text-[10px] rounded-lg border border-red-100 text-red-600 hover:bg-red-50"
                    disabled={saving}
                  >
                    Logout
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-4 py-2 text-[10px] rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </section>

            {/* Static system sections (if you still want them) */}
            <section className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900 mb-3">
                API & Integrations (UI only)
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div>
                  <label className="block text-slate-500 mb-1">
                    API Base URL
                  </label>
                  <input
                    defaultValue={API_BASE}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-slate-500 mb-1">
                    CORS Allowed Origins
                  </label>
                  <textarea
                    rows={2}
                    defaultValue="Configured in backend (Django settings)"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    readOnly
                  />
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
