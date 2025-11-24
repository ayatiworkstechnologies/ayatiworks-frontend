"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getAuth } from "../../lib/auth";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

export default function UsersPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  // react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      role: "",
      is_active: true,
      password: "",
    },
  });

  const isActiveWatch = watch("is_active");

  /* ---------------- Auth Guard ---------------- */
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

  /* ---------------- Fetch Users + Roles ---------------- */
  useEffect(() => {
    if (!auth) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const token = auth?.tokens?.access;

        const [userRes, roleRes] = await Promise.all([
          fetch(`${API_BASE}/api/users/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE}/api/roles/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!userRes.ok || !roleRes.ok) {
          throw new Error("Failed to load data");
        }

        const [userData, roleData] = await Promise.all([
          userRes.json(),
          roleRes.json(),
        ]);

        setUsers(userData);
        setRoles(roleData);
      } catch (err) {
        console.error(err);
        setError("Unable to load users or roles.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [auth]);

  if (!auth) return null;

  /* ---------------- Role helpers ---------------- */

  // Turn user.role into a full role object, no matter if backend sent id, slug, or nested object
  const resolveUserRole = (user) => {
    const r = user.role;

    if (!r) return null;

    // Already nested object: { id, slug, name, ... }
    if (typeof r === "object") return r;

    // If it's a string (likely slug)
    if (typeof r === "string") {
      return roles.find((role) => role.slug === r) || null;
    }

    // If it's a number (likely id)
    if (typeof r === "number") {
      return roles.find((role) => role.id === r) || null;
    }

    return null;
  };

  const getUserRoleLabel = (user) => {
    const roleObj = resolveUserRole(user);
    if (roleObj?.name) return roleObj.name;
    if (roleObj?.slug) return roleObj.slug.toUpperCase();
    // fallback: show raw if simple string
    if (typeof user.role === "string") return user.role.toUpperCase();
    return "—";
  };

  const getEditRoleSlug = (user) => {
    const r = user.role;
    if (!r) return "";
    if (typeof r === "object") return r.slug || "";
    if (typeof r === "string") return r; // slug
    if (typeof r === "number") {
      const found = roles.find((role) => role.id === r);
      return found?.slug || "";
    }
    return "";
  };

  /* ---------------- Handlers ---------------- */

  const openCreateModal = () => {
    setEditingUser(null);
    reset({
      username: "",
      email: "",
      role: roles[0]?.slug || "",
      is_active: true,
      password: "",
    });
    setModalOpen(true);
  };

  const openEditModal = (user) => {
    const roleSlug = getEditRoleSlug(user);

    setEditingUser(user);
    reset({
      username: user.username || "",
      email: user.email || "",
      role: roleSlug,
      is_active: !!user.is_active,
      password: "",
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingUser(null);
    reset({
      username: "",
      email: "",
      role: "",
      is_active: true,
      password: "",
    });
  };

  // Create / Update submit
  const onSubmit = async (data) => {
    if (!auth) return;
    const token = auth?.tokens?.access;
    setSaving(true);
    setError("");

    try {
      const payload = {
        username: data.username.trim(),
        email: data.email.trim(),
        is_active: data.is_active,
        // backend currently assumed to accept slug as "role"
        role: data.role,
      };

      if (data.password && data.password.trim().length > 0) {
        payload.password = data.password.trim();
      }

      const url = editingUser
        ? `${API_BASE}/api/users/${editingUser.id}/`
        : `${API_BASE}/api/users/`;
      const method = editingUser ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errBody = await res.json().catch(() => ({}));
        console.error("Save error", errBody);
        throw new Error("Failed to save user");
      }

      const savedUser = await res.json();

      if (editingUser) {
        setUsers((prev) => prev.map((u) => (u.id === savedUser.id ? savedUser : u)));
      } else {
        setUsers((prev) => [savedUser, ...prev]);
      }

      closeModal();
    } catch (err) {
      console.error(err);
      setError(editingUser ? "Failed to update user." : "Failed to create user.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (user) => {
    if (!auth) return;
    if (!confirm(`Delete user "${user.username}"?`)) return;

    const token = auth?.tokens?.access;
    setDeletingId(user.id);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/users/${user.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete user");
      }

      setUsers((prev) => prev.filter((u) => u.id !== user.id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete user.");
    } finally {
      setDeletingId(null);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <AdminNavbar
          title="Users"
          subtitle="View and manage all users with assigned roles."
          user={auth.user}
        />

        {/* Top Actions */}
        <div className="flex justify-end mb-4">
          <button
            onClick={openCreateModal}
            className="px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            + Add New User
          </button>
        </div>

        {/* Global States */}
        {loading && (
          <p className="text-xs text-slate-500 animate-pulse">
            Loading users...
          </p>
        )}

        {error && (
          <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-md p-2 mb-3">
            {error}
          </div>
        )}

        {/* Content */}
        {!loading && (
          <>
            {/* Summary */}
            <div className="grid gap-4 sm:grid-cols-3 mb-6">
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs">
                <p className="text-slate-500">Total Users</p>
                <p className="text-2xl font-semibold text-slate-900">
                  {users.length}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs">
                <p className="text-slate-500">Active</p>
                <p className="text-2xl font-semibold text-emerald-600">
                  {users.filter((u) => u.is_active).length}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-4 text-xs">
                <p className="text-slate-500">Available Roles</p>
                <p className="text-2xl font-semibold text-blue-600">
                  {roles.length}
                </p>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
              <table className="w-full text-xs">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="text-left px-4 py-2 font-medium text-slate-700">
                      Username
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-slate-700">
                      Email
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-slate-700">
                      Role
                    </th>
                    <th className="text-left px-4 py-2 font-medium text-slate-700">
                      Status
                    </th>
                    <th className="text-right px-4 py-2 font-medium text-slate-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr
                      key={u.id}
                      className="border-b border-slate-100 hover:bg-slate-50"
                    >
                      <td className="px-4 py-2 text-slate-800">
                        {u.username}
                      </td>
                      <td className="px-4 py-2 text-slate-500">{u.email}</td>
                      <td className="px-4 py-2">
                        <span className="inline-flex px-2 py-1 text-[10px] rounded-full bg-blue-50 text-blue-700">
                          {getUserRoleLabel(u)}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`inline-flex px-2 py-1 text-[10px] rounded-full ${
                            u.is_active
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {u.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditModal(u)}
                            className="px-2 py-1 text-[10px] rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(u)}
                            disabled={deletingId === u.id}
                            className="px-2 py-1 text-[10px] rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-60"
                          >
                            {deletingId === u.id ? "Deleting..." : "Delete"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-4 py-4 text-center text-slate-400"
                      >
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 max-w-7xl mx-auto z-40 flex items-center justify-center">
            <div className="bg-white w-full rounded-2xl shadow-xl border border-slate-200 p-5 relative ">
              <h2 className="text-sm font-semibold text-slate-900 mb-1">
                {editingUser ? "Edit User" : "Add New User"}
              </h2>
              <p className="text-[10px] text-slate-500 mb-4">
                {editingUser
                  ? "Update user details and role assignments."
                  : "Create a new user and assign a role."}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* Username */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Username*
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("username", { required: "Username is required" })}
                  />
                  {errors.username && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.username.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Role */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Role*
                  </label>
                  <select
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("role", { required: "Role is required" })}
                  >
                    <option value="">Select a role</option>
                    {roles.map((r) => (
                      <option key={r.id} value={r.slug}>
                        {r.name} ({r.slug})
                      </option>
                    ))}
                  </select>
                  {errors.role && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.role.message}
                    </p>
                  )}
                </div>

                {/* Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      id="is_active"
                      type="checkbox"
                      className="w-3 h-3 rounded border-slate-300"
                      {...register("is_active")}
                    />
                    <label
                      htmlFor="is_active"
                      className="text-[10px] text-slate-700"
                    >
                      Active
                    </label>
                  </div>
                  <span className="text-[9px] text-slate-400">
                    {isActiveWatch ? "User can login" : "User disabled"}
                  </span>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    {editingUser ? "Password (optional)" : "Password*"}
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("password", {
                      required: editingUser
                        ? false
                        : "Password is required for new user",
                      minLength: {
                        value: 6,
                        message: "Min 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-3 py-1.5 text-[10px] rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50"
                    disabled={saving}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-3 py-1.5 text-[10px] rounded-lg bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60"
                  >
                    {saving
                      ? editingUser
                        ? "Updating..."
                        : "Creating..."
                      : editingUser
                      ? "Update User"
                      : "Create User"}
                  </button>
                </div>
              </form>

              {/* Close X */}
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 text-xs"
                disabled={saving}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
