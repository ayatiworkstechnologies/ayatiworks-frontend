"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getAuth } from "../../lib/auth";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000";

export default function RolesPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);
  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
      description: "",
    },
  });

  /* ------------ Auth Guard ------------ */
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

  /* ------------ Fetch Roles ------------ */
  useEffect(() => {
    if (!auth) return;

    async function fetchRoles() {
      try {
        setLoading(true);
        setError("");
        const token = auth?.tokens?.access;

        const res = await fetch(`${API_BASE}/api/roles/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("Failed to load roles");

        const data = await res.json();
        setRoles(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load roles.");
      } finally {
        setLoading(false);
      }
    }

    fetchRoles();
  }, [auth]);

  if (!auth) return null;

  /* ------------ Helpers ------------ */

  const getRolePillClass = (slug = "") => {
    const s = slug.toLowerCase();
    if (s === "admin") return "bg-blue-50 text-blue-700";
    if (s === "manager") return "bg-emerald-50 text-emerald-700";
    if (s === "staff") return "bg-slate-50 text-slate-700";
    if (s === "viewer") return "bg-purple-50 text-purple-700";
    return "bg-slate-100 text-slate-600";
  };

  const getRoleDesc = (role) => {
    if (role.description) return role.description;
    const s = (role.slug || "").toLowerCase();
    if (s === "admin")
      return "Full access to users, roles, settings and system data.";
    if (s === "manager") return "Manage teams, reports and approvals.";
    if (s === "staff") return "Work on assigned tasks and records.";
    if (s === "viewer") return "Read-only dashboard visibility.";
    return "Custom role with configured permissions.";
  };

  const openCreateModal = () => {
    setEditingRole(null);
    reset({
      name: "",
      slug: "",
      description: "",
    });
    setModalOpen(true);
  };

  const openEditModal = (role) => {
    setEditingRole(role);
    reset({
      name: role.name || "",
      slug: role.slug || "",
      description: role.description || "",
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingRole(null);
    reset({
      name: "",
      slug: "",
      description: "",
    });
  };

  /* ------------ Create / Update ------------ */

  const onSubmit = async (data) => {
    if (!auth) return;
    setSaving(true);
    setError("");

    const token = auth?.tokens?.access;

    try {
      const payload = {
        name: data.name.trim(),
        slug: data.slug.trim(),
        description: data.description.trim(),
      };

      const url = editingRole
        ? `${API_BASE}/api/roles/${editingRole.id}/`
        : `${API_BASE}/api/roles/`;

      const method = editingRole ? "PATCH" : "POST";

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
        console.error("Role save failed:", errBody);
        throw new Error("Failed to save role");
      }

      const saved = await res.json();

      if (editingRole) {
        setRoles((prev) => prev.map((r) => (r.id === saved.id ? saved : r)));
      } else {
        setRoles((prev) => [saved, ...prev]);
      }

      closeModal();
    } catch (err) {
      console.error(err);
      setError(
        editingRole ? "Failed to update role. Check inputs." : "Failed to create role."
      );
    } finally {
      setSaving(false);
    }
  };

  /* ------------ Delete ------------ */

  const handleDelete = async (role) => {
    if (!auth) return;

    // prevent accidental nuking of main admin role
    if ((role.slug || "").toLowerCase() === "admin") {
      alert("Default admin role cannot be deleted.");
      return;
    }

    if (!confirm(`Delete role "${role.name || role.slug}"?`)) return;

    const token = auth?.tokens?.access;
    setDeletingId(role.id);
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/roles/${role.id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok && res.status !== 204) {
        const errBody = await res.json().catch(() => ({}));
        console.error("Role delete failed:", errBody);
        throw new Error("Failed to delete role");
      }

      setRoles((prev) => prev.filter((r) => r.id !== role.id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete role.");
    } finally {
      setDeletingId(null);
    }
  };

  /* ------------ UI ------------ */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <AdminNavbar
          title="Roles & Permissions"
          subtitle="Define what each role can see and do in the system."
          user={auth.user}
        />

        {/* Top Actions */}
        <div className="flex justify-end mb-4">
          <button
            onClick={openCreateModal}
            className="px-3 py-2 text-xs bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            + Create Role
          </button>
        </div>

        {/* Loading / Error */}
        {loading && (
          <p className="text-xs text-slate-500 animate-pulse">
            Loading roles...
          </p>
        )}

        {error && (
          <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-md p-2 mb-3">
            {error}
          </div>
        )}

        {/* Roles Grid */}
        {!loading && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`inline-flex px-2 py-1 text-[10px] rounded-full mb-2 ${getRolePillClass(
                      role.slug
                    )}`}
                  >
                    {(role.slug || role.name || "").toUpperCase()}
                  </div>
                  <h2 className="text-sm font-semibold text-slate-900">
                    {role.name || role.slug}
                  </h2>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {getRoleDesc(role)}
                  </p>
                </div>

                <div className="mt-3 flex gap-2 text-[10px]">
                  <button
                    onClick={() => openEditModal(role)}
                    className="px-2 py-1 rounded-md bg-slate-50 text-slate-700 hover:bg-slate-100"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(role)}
                    disabled={deletingId === role.id}
                    className="px-2 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-60"
                  >
                    {deletingId === role.id ? "Deleting..." : "Delete"}
                  </button>
                  {/* Optional: link to users filtered by role */}
                  {/* <button className="px-2 py-1 rounded-md bg-slate-50 text-slate-700 hover:bg-slate-100">
                    View Users
                  </button> */}
                </div>
              </div>
            ))}

            {roles.length === 0 && !error && (
              <div className="col-span-full text-xs text-slate-400">
                No roles found. Use “+ Create Role” to add one.
              </div>
            )}
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
            <div className="bg-white w-full rounded-2xl shadow-xl border border-slate-200 p-5 relative">
              <h2 className="text-sm font-semibold text-slate-900 mb-1">
                {editingRole ? "Edit Role" : "Create Role"}
              </h2>
              <p className="text-[10px] text-slate-500 mb-4">
                {editingRole
                  ? "Update role details and description."
                  : "Define a new role and its purpose."}
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {/* Name */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Role Name*
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("name", {
                      required: "Role name is required",
                      minLength: {
                        value: 2,
                        message: "Name too short",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Slug* (unique, no spaces)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...register("slug", {
                      required: "Slug is required",
                      pattern: {
                        value: /^[a-z0-9_-]+$/,
                        message:
                          "Use lowercase letters, numbers, hyphen or underscore only",
                      },
                    })}
                  />
                  {errors.slug && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.slug.message}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-[10px] text-slate-600 mb-1">
                    Description
                  </label>
                  <textarea
                    rows={3}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                    placeholder="Short summary of what this role can access."
                    {...register("description")}
                  />
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
                      ? editingRole
                        ? "Updating..."
                        : "Creating..."
                      : editingRole
                      ? "Update Role"
                      : "Create Role"}
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
