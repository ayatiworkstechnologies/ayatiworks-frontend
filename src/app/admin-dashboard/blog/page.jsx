"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { getAuth } from "../../lib/auth";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://100.30.46.253/";

export default function BlogAdminPage() {
  const router = useRouter();
  const [auth, setAuth] = useState(null);

  const [categories, setCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  // category modal state
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [catSaving, setCatSaving] = useState(false);
  const [deletingCategoryId, setDeletingCategoryId] = useState(null);

  // blog delete state
  const [deletingBlogId, setDeletingBlogId] = useState(null);

  // Category form (used in modal for create + edit)
  const {
    register: catRegister,
    handleSubmit: handleCatSubmit,
    reset: resetCat,
    formState: { errors: catErrors },
  } = useForm({
    defaultValues: {
      name: "",
      slug: "",
    },
  });

  /* ---------- Auth Guard ---------- */
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

  /* ---------- Fetch Data ---------- */
  useEffect(() => {
    if (!auth) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const token = auth.tokens?.access;

        const [catRes, blogRes] = await Promise.all([
          fetch(`${API_BASE}/api/blog/categories/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch(`${API_BASE}/api/blogs/`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!catRes.ok || !blogRes.ok) {
          throw new Error("Failed to load blog data");
        }

        const [catData, blogData] = await Promise.all([
          catRes.json(),
          blogRes.json(),
        ]);

        setCategories(Array.isArray(catData) ? catData : []);
        setBlogs(Array.isArray(blogData) ? blogData : []);
      } catch (err) {
        console.error(err);
        setError("Unable to load blogs or categories.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [auth]);

  if (!auth) return null;
  const token = auth.tokens?.access;

  /* ---------- Helpers ---------- */

  const getCategoryLabel = (value) => {
    if (!value) return "—";
    const c =
      categories.find(
        (cat) => cat.slug === value || String(cat.id) === String(value)
      ) || null;
    return c ? c.name : value;
  };

  const matchFilter = (blog) => {
    if (!filterCategory) return true;
    return (
      blog.category === filterCategory ||
      String(blog.category_id) === String(filterCategory)
    );
  };

  const filteredBlogs = blogs.filter(matchFilter);

  /* ---------- Category Modal Controls ---------- */

  const openCreateCategoryModal = () => {
    setEditingCategory(null);
    resetCat({ name: "", slug: "" });
    setCategoryModalOpen(true);
  };

  const openEditCategoryModal = (cat) => {
    setEditingCategory(cat);
    resetCat({
      name: cat.name || "",
      slug: cat.slug || "",
    });
    setCategoryModalOpen(true);
  };

  const closeCategoryModal = () => {
    setCategoryModalOpen(false);
    setEditingCategory(null);
    resetCat();
  };

  /* ---------- Category: Create / Update ---------- */

  const onSubmitCategory = async (data) => {
    setError("");
    setCatSaving(true);

    try {
      const payload = {
        name: data.name.trim(),
        slug: data.slug.trim(),
      };

      const url = editingCategory
        ? `${API_BASE}/api/blog/categories/${editingCategory.id}/`
        : `${API_BASE}/api/blog/categories/`;
      const method = editingCategory ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Category save error", body);
        throw new Error(body.detail || "Failed to save category");
      }

      if (editingCategory) {
        setCategories((prev) =>
          prev.map((c) => (c.id === body.id ? body : c))
        );
      } else {
        setCategories((prev) => [body, ...prev]);
      }

      closeCategoryModal();
    } catch (err) {
      setError(err.message || "Unable to save category.");
    } finally {
      setCatSaving(false);
    }
  };

  /* ---------- Category: Delete ---------- */

  const handleDeleteCategory = async (cat) => {
    if (!confirm(`Delete category "${cat.name}"?`)) return;

    setError("");
    setDeletingCategoryId(cat.id);

    try {
      const res = await fetch(
        `${API_BASE}/api/blog/categories/${cat.id}/`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete category");
      }

      setCategories((prev) => prev.filter((c) => c.id !== cat.id));

      if (filterCategory === cat.slug || filterCategory === String(cat.id)) {
        setFilterCategory("");
      }
    } catch (err) {
      console.error(err);
      setError("Unable to delete category.");
    } finally {
      setDeletingCategoryId(null);
    }
  };

  /* ---------- Blog: Delete ---------- */

  const handleDeleteBlog = async (blog) => {
    if (!confirm(`Delete blog "${blog.title}"?`)) return;

    setError("");
    setDeletingBlogId(blog.id);

    try {
      const res = await fetch(`${API_BASE}/api/blogs/${blog.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok && res.status !== 204) {
        throw new Error("Failed to delete blog");
      }

      setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
    } catch (err) {
      console.error(err);
      setError("Unable to delete blog.");
    } finally {
      setDeletingBlogId(null);
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <AdminNavbar
          title="Blog Manager"
          subtitle="Manage blog posts and categories from a single place."
          user={auth.user}
        />

        {error && (
          <div className="mb-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {/* Top: Blogs list (left) + Categories (right) */}
        <div className="grid gap-5 lg:grid-cols-[2fr,1fr] mb-6">
          {/* Blog List Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm font-semibold text-slate-900">
                  Blog Posts
                </h2>
                <p className="text-[9px] text-slate-500">
                  {filterCategory
                    ? `Filtered by: ${getCategoryLabel(filterCategory)}`
                    : "Showing all posts"}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => router.push("/admin-dashboard/blog/create")}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-[10px] hover:bg-blue-500"
                >
                  + Add Blog
                </button>
              </div>
            </div>

            {loading ? (
              <p className="text-[10px] text-slate-400">Loading blogs...</p>
            ) : filteredBlogs.length === 0 ? (
              <p className="text-[10px] text-slate-400">
                No blog posts found. Use &quot;+ Add Blog&quot; to create one.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-3 py-2 font-medium text-slate-700">
                        Title
                      </th>
                      <th className="text-left px-3 py-2 font-medium text-slate-700">
                        Category
                      </th>
                      <th className="text-left px-3 py-2 font-medium text-slate-700">
                        Status
                      </th>
                      <th className="text-right px-3 py-2 font-medium text-slate-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBlogs.map((blog) => (
                      <tr
                        key={blog.id}
                        className="border-b border-slate-100 hover:bg-slate-50"
                      >
                        <td className="px-3 py-2 text-slate-800">
                          {blog.title}
                        </td>
                        <td className="px-3 py-2 text-slate-600">
                          {getCategoryLabel(blog.category)}
                        </td>
                        <td className="px-3 py-2">
                          <span
                            className={`px-2 py-1 rounded-full text-[9px] ${
                              blog.status === "published"
                                ? "bg-emerald-50 text-emerald-600"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {blog.status || "draft"}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() =>
                                router.push(
                                  `/admin-dashboard/blog/create?id=${blog.id}`
                                )
                              }
                              className="px-2 py-1 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteBlog(blog)}
                              disabled={deletingBlogId === blog.id}
                              className="px-2 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-60"
                            >
                              {deletingBlogId === blog.id
                                ? "Deleting..."
                                : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Categories Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-slate-900">
                  Categories
                </h3>
                <p className="text-[9px] text-slate-500">
                  Click to filter blogs.
                </p>
              </div>
              <button
                onClick={openCreateCategoryModal}
                className="px-2 py-1.5 rounded-lg bg-slate-900 text-white text-[9px] hover:bg-slate-800"
              >
                + Add
              </button>
            </div>

            <button
              onClick={() => setFilterCategory("")}
              className={`px-2 py-1 rounded-full text-[9px] border w-max ${
                !filterCategory
                  ? "bg-blue-50 text-blue-600 border-blue-200"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
              }`}
            >
              All Posts
            </button>

            {loading ? (
              <p className="text-[10px] text-slate-400">
                Loading categories...
              </p>
            ) : categories.length === 0 ? (
              <p className="text-[10px] text-slate-400">
                No categories yet. Click &quot;+ Add&quot; to create.
              </p>
            ) : (
              <ul className="space-y-1.5 text-[10px]">
                {categories.map((cat) => {
                  const active = filterCategory === cat.slug;
                  return (
                    <li
                      key={cat.id}
                      className={`flex items-center justify-between px-2 py-1 rounded-md border ${
                        active
                          ? "bg-blue-50 border-blue-200 text-blue-600"
                          : "bg-slate-50 border-slate-100 text-slate-700"
                      }`}
                    >
                      <button
                        onClick={() =>
                          setFilterCategory(active ? "" : cat.slug)
                        }
                        className="flex-1 text-left"
                      >
                        <p className="font-medium text-[10px]">
                          {cat.name}
                        </p>
                        <p className="text-[8px] text-slate-500">
                          {cat.slug}
                        </p>
                      </button>
                      <div className="flex items-center gap-1 ml-2">
                        <button
                          onClick={() => openEditCategoryModal(cat)}
                          className="px-1.5 py-0.5 rounded border border-slate-300 text-[8px] text-slate-600 hover:bg-slate-100"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(cat)}
                          disabled={deletingCategoryId === cat.id}
                          className="px-1.5 py-0.5 rounded bg-red-50 text-[8px] text-red-600 hover:bg-red-100 disabled:opacity-60"
                        >
                          {deletingCategoryId === cat.id ? "..." : "Del"}
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>

        {/* FAQ / Helper Section */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-[10px] text-slate-600">
          <h3 className="text-xs font-semibold text-slate-900 mb-2">
            Blog Manager FAQ
          </h3>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>
              <span className="font-semibold">Add a blog:</span> Redirects to
              the create page.
            </li>
            <li>
              <span className="font-semibold">Edit / Delete blog:</span> Use the
              row actions.
            </li>
            <li>
              <span className="font-semibold">Filter by category:</span> Click a
              category; use &quot;All Posts&quot; to reset.
            </li>
            <li>
              <span className="font-semibold">Manage categories:</span> Use
              &quot;+ Add&quot; or Edit/Del in the list.
            </li>
          </ul>
        </div>
      </main>

      {/* Category Modal */}
      {categoryModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
          <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl border border-slate-200 p-4 relative">
            <h2 className="text-sm font-semibold text-slate-900 mb-1">
              {editingCategory ? "Edit Category" : "Add Category"}
            </h2>
            <p className="text-[9px] text-slate-500 mb-3">
              {editingCategory
                ? "Update the category name or slug."
                : "Create a category to group your posts."}
            </p>

            <form
              onSubmit={handleCatSubmit(onSubmitCategory)}
              className="space-y-2 text-xs"
            >
              <div>
                <label className="block mb-1 text-slate-600">Name*</label>
                <input
                  {...catRegister("name", {
                    required: "Name is required",
                  })}
                  className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-[10px] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="e.g. SEO"
                />
                {catErrors.name && (
                  <p className="text-[9px] text-red-500 mt-0.5">
                    {catErrors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-slate-600">Slug*</label>
                <input
                  {...catRegister("slug", {
                    required: "Slug is required",
                    pattern: {
                      value: /^[a-z0-9-]+$/,
                      message:
                        "Use lowercase letters, numbers & hyphens only",
                    },
                  })}
                  className="w-full rounded-lg border border-slate-200 px-2.5 py-2 text-[10px] focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="seo-services"
                />
                {catErrors.slug && (
                  <p className="text-[9px] text-red-500 mt-0.5">
                    {catErrors.slug.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={closeCategoryModal}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-600 hover:bg-slate-50"
                  disabled={catSaving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={catSaving}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 text-white text-[10px] hover:bg-slate-800 disabled:opacity-60"
                >
                  {catSaving
                    ? editingCategory
                      ? "Saving..."
                      : "Creating..."
                    : editingCategory
                    ? "Save Changes"
                    : "Create Category"}
                </button>
              </div>
            </form>

            <button
              onClick={closeCategoryModal}
              className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 text-xs"
              disabled={catSaving}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
