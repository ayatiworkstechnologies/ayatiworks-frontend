"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import { getAuth } from "../../../lib/auth";
import AdminSidebar from "../../../components/AdminSidebar";
import AdminNavbar from "../../../components/AdminNavbar";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "https://100.30.46.253";

function slugify(str = "") {
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/* ------------ Wrapper with Suspense (fixes CSR bailout) ------------ */

export default function BlogCreatePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex">
          <AdminSidebar />
          <main className="flex-1 p-6">
            <AdminNavbar
              title="Create Blog (AEO Style)"
              subtitle="Loading editor..."
              user={null}
            />
            <p className="text-[10px] text-slate-500">
              Initializing blog editor...
            </p>
          </main>
        </div>
      }
    >
      <BlogCreatePageInner />
    </Suspense>
  );
}

/* ---------------------- Actual page implementation ---------------------- */

function BlogCreatePageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");
  const isEdit = !!blogId;

  const [auth, setAuth] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loadingCats, setLoadingCats] = useState(true);
  const [loadingBlog, setLoadingBlog] = useState(isEdit);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      hero_title: "",
      hero_kicker_top: "",
      hero_kicker_bottom: "",
      category_slug: "",
      author_name: "",
      author_title: "",
      published_date: "",
      last_updated: "",
      read_time: "8",
      seo_label: "",
      main_heading: "",
      featured_image_url: "",
      featured_image_file: null,
      intro: "",
      whats_inside: [],
      sections: [],
      faqs: [],
      cta_text: "",
      cta_button_label: "",
      cta_button_link: "",
      extra_categories_text: "",
    },
  });

  const heroTitle = watch("hero_title");

  const {
    fields: wiFields,
    append: wiAppend,
    remove: wiRemove,
  } = useFieldArray({ control, name: "whats_inside" });

  const {
    fields: sectionFields,
    append: sectionAppend,
    remove: sectionRemove,
  } = useFieldArray({ control, name: "sections" });

  const {
    fields: faqFields,
    append: faqAppend,
    remove: faqRemove,
  } = useFieldArray({ control, name: "faqs" });

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

  /* ---------- Fetch Categories ---------- */
  useEffect(() => {
    if (!auth) return;

    async function fetchCats() {
      try {
        setLoadingCats(true);
        const token = auth.tokens?.access;
        const res = await fetch(`${API_BASE}/api/blog/categories/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to load categories");
        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
        setCategories([]);
      } finally {
        setLoadingCats(false);
      }
    }

    fetchCats();
  }, [auth]);

  /* ---------- If editing: load blog ---------- */
  useEffect(() => {
    if (!auth || !isEdit) return;

    async function fetchBlog() {
      try {
        setLoadingBlog(true);
        setError("");
        const token = auth.tokens?.access;
        const res = await fetch(`${API_BASE}/api/blogs/${blogId}/`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error("Failed to load blog");
        const blog = await res.json();

        const categorySlug =
          typeof blog.category === "string"
            ? blog.category
            : blog.category?.slug || "";

        reset({
          hero_title: blog.hero_title || blog.title || "",
          main_heading: blog.main_heading || blog.title || "",
          hero_kicker_top: blog.hero_kicker_top || "",
          hero_kicker_bottom: blog.hero_kicker_bottom || "",
          category_slug: categorySlug,
          author_name: blog.author_name || "",
          author_title: blog.author_title || "",
          published_date: blog.published_date || "",
          last_updated: blog.last_updated || "",
          read_time: blog.read_time ? String(blog.read_time) : "8",
          seo_label: blog.slug || "",
          featured_image_url:
            blog.featured_image_url || blog.featured_image || "",
          featured_image_file: null,
          intro: blog.intro || blog.excerpt || "",
          whats_inside: blog.whats_inside || [],
          sections: blog.sections || [],
          faqs: blog.faqs || [],
          cta_text: blog.cta_text || "",
          cta_button_label: blog.cta_button_label || "",
          cta_button_link: blog.cta_button_link || "",
          extra_categories_text: Array.isArray(blog.extra_categories)
            ? blog.extra_categories.join(", ")
            : "",
        });
      } catch (err) {
        console.error(err);
        setError("Unable to load blog for editing.");
      } finally {
        setLoadingBlog(false);
      }
    }

    fetchBlog();
  }, [auth, isEdit, blogId, reset]);

  /* ---------- Auto slug (create only) ---------- */
  useEffect(() => {
    if (!heroTitle || isEdit) return;
    setValue("seo_label", slugify(heroTitle));
  }, [heroTitle, setValue, isEdit]);

  if (!auth) return null;
  const token = auth.tokens?.access;

  /* ---------- Build content (markdown-like) ---------- */

  function buildContent(values) {
    const lines = [];

    if (values.hero_kicker_top || values.hero_kicker_bottom) {
      lines.push(
        `> ${values.hero_kicker_top || ""} ${
          values.hero_kicker_bottom || ""
        }`.trim()
      );
      lines.push("");
    }

    if (values.main_heading || values.hero_title) {
      lines.push(`# ${values.main_heading || values.hero_title}`);
      lines.push("");
    }

    const metaBits = [];
    if (values.author_name) metaBits.push(values.author_name);
    if (values.author_title) metaBits.push(values.author_title);
    if (values.published_date)
      metaBits.push(`Published: ${values.published_date}`);
    if (values.last_updated)
      metaBits.push(`Last Updated: ${values.last_updated}`);
    if (values.read_time)
      metaBits.push(`${values.read_time} min read`);

    if (metaBits.length) {
      lines.push(metaBits.join(" • "));
      lines.push("");
    }

    if (values.whats_inside?.length) {
      lines.push("## What’s Inside");
      values.whats_inside.forEach((item) => {
        if (item.label?.trim()) {
          lines.push(`- ${item.label.trim()}`);
        }
      });
      lines.push("");
    }

    if (values.intro?.trim()) {
      lines.push(values.intro.trim());
      lines.push("");
    }

    if (values.sections?.length) {
      values.sections.forEach((sec) => {
        const hasHeading = sec.heading && sec.heading.trim();
        const hasBody = sec.body && sec.body.trim();
        const hasImage = sec.image_url && sec.image_url.trim();
        if (!hasHeading && !hasBody && !hasImage) return;

        if (hasHeading) {
          lines.push(`## ${sec.heading.trim()}`);
          lines.push("");
        }
        if (hasImage) {
          lines.push(
            `![${sec.heading || "section image"}](${sec.image_url.trim()})`
          );
          lines.push("");
        }
        if (hasBody) {
          lines.push(sec.body.trim());
          lines.push("");
        }
      });
    }

    if (values.cta_text?.trim()) {
      lines.push("---");
      lines.push(values.cta_text.trim());
      if (values.cta_button_label && values.cta_button_link) {
        lines.push(
          `[${values.cta_button_label}](${values.cta_button_link})`
        );
      }
      lines.push("");
    }

    const validFaqs =
      values.faqs?.filter((f) => f.question && f.answer) || [];
    if (validFaqs.length) {
      lines.push("## Frequently Asked Questions (FAQs)");
      lines.push("");
      validFaqs.forEach((f) => {
        lines.push(`**Q: ${f.question.trim()}**`);
        lines.push("");
        lines.push(f.answer.trim());
        lines.push("");
      });
    }

    const extraCats = (values.extra_categories_text || "")
      .split(",")
      .map((v) => v.trim())
      .filter(Boolean);
    if (extraCats.length) {
      lines.push("**Categories:** " + extraCats.join(", "));
      lines.push("");
    }

    return lines.join("\n");
  }

  /* ---------- Submit (Create / Update) ---------- */

  const onSubmit = async (values) => {
    try {
      setSaving(true);
      setError("");

      const title =
        (values.hero_title || values.main_heading || "").trim();
      if (!title) {
        throw new Error("Title is required");
      }

      const slug =
        (values.seo_label || "").trim() || slugify(title);

      const content = buildContent(values);

      const extra_categories = (values.extra_categories_text || "")
        .split(",")
        .map((v) => v.trim())
        .filter(Boolean);

      const hasFile =
        values.featured_image_file &&
        values.featured_image_file.length &&
        values.featured_image_file[0];

      const url = isEdit
        ? `${API_BASE}/api/blogs/${blogId}/`
        : `${API_BASE}/api/blogs/`;
      const method = isEdit ? "PATCH" : "POST";

      let res;

      if (hasFile) {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("slug", slug);
        formData.append("status", "published");
        formData.append("category", values.category_slug);

        formData.append("hero_title", values.hero_title || "");
        formData.append("hero_kicker_top", values.hero_kicker_top || "");
        formData.append("hero_kicker_bottom", values.hero_kicker_bottom || "");
        formData.append("main_heading", values.main_heading || "");

        formData.append("author_name", values.author_name || "");
        formData.append("author_title", values.author_title || "");
        if (values.published_date)
          formData.append("published_date", values.published_date);
        if (values.last_updated)
          formData.append("last_updated", values.last_updated);
        formData.append("read_time", values.read_time || "0");

        formData.append("intro", values.intro || "");
        formData.append("excerpt", (values.intro || "").slice(0, 260));
        formData.append("content", content);

        formData.append(
          "whats_inside",
          JSON.stringify(values.whats_inside || [])
        );
        formData.append(
          "sections",
          JSON.stringify(values.sections || [])
        );
        formData.append("faqs", JSON.stringify(values.faqs || []));
        formData.append(
          "extra_categories",
          JSON.stringify(extra_categories)
        );

        formData.append("cta_text", values.cta_text || "");
        formData.append(
          "cta_button_label",
          values.cta_button_label || ""
        );
        formData.append(
          "cta_button_link",
          values.cta_button_link || ""
        );

        if (values.featured_image_url) {
          formData.append(
            "featured_image_url",
            values.featured_image_url
          );
        }

        formData.append(
          "featured_image",
          values.featured_image_file[0]
        );

        res = await fetch(url, {
          method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      } else {
        const payload = {
          title,
          slug,
          status: "published",
          category: values.category_slug,

          hero_title: values.hero_title || "",
          hero_kicker_top: values.hero_kicker_top || "",
          hero_kicker_bottom: values.hero_kicker_bottom || "",
          main_heading: values.main_heading || "",

          author_name: values.author_name || "",
          author_title: values.author_title || "",
          published_date: values.published_date || null,
          last_updated: values.last_updated || null,
          read_time: Number(values.read_time || 0),

          intro: values.intro || "",
          excerpt: (values.intro || "").slice(0, 260),
          content,

          whats_inside: values.whats_inside || [],
          sections: values.sections || [],
          faqs: values.faqs || [],
          extra_categories,

          cta_text: values.cta_text || "",
          cta_button_label: values.cta_button_label || "",
          cta_button_link: values.cta_button_link || "",

          featured_image_url:
            values.featured_image_url?.trim() || "",
        };

        res = await fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        });
      }

      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error("Blog save error", body);
        throw new Error(body.detail || "Failed to save blog");
      }

      router.push("/admin-dashboard/blog");
    } catch (err) {
      setError(err.message || "Unable to save blog.");
    } finally {
      setSaving(false);
    }
  };

  /* ---------- UI ---------- */

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <AdminSidebar />

      <main className="flex-1 p-6">
        <AdminNavbar
          title={
            isEdit
              ? "Edit Blog (AEO Style)"
              : "Create Blog (AEO Style)"
          }
          subtitle={
            isEdit
              ? "Update your structured, answer-optimized blog."
              : "Compose rich, structured blogs optimized for answers."
          }
          user={auth?.user}
        />

        {error && (
          <div className="mb-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </div>
        )}

        {isEdit && loadingBlog ? (
          <p className="text-[10px] text-slate-500">
            Loading blog content...
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 text-xs space-y-4"
          >
            {/* Hero / Meta */}
            <div className="grid lg:grid-cols-[2fr,1.5fr] gap-4">
              {/* Left column */}
              <div>
                <label className="block text-slate-600 mb-1">
                  Hero Title*
                </label>
                <input
                  {...register("hero_title", {
                    required: "Title is required",
                  })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Tech startup implementing AEO framework for smarter audience engagement"
                />
                {errors.hero_title && (
                  <p className="text-[9px] text-red-500 mt-0.5">
                    {errors.hero_title.message}
                  </p>
                )}

                <label className="block text-slate-600 mt-3 mb-1">
                  Main Heading / H1
                </label>
                <input
                  {...register("main_heading")}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="Implementing AEO in Your Content Strategy: A Step-by-Step Framework for Tech Startups"
                />
              </div>

              {/* Right column */}
              <div className="grid sm:grid-cols-2 gap-3 items-start">
                <div>
                  <label className="block text-slate-600 mb-1">
                    Top Kicker
                  </label>
                  <input
                    {...register("hero_kicker_top")}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                    placeholder="SEO"
                  />

                  <label className="block text-slate-600 mt-2 mb-1">
                    Sub Kicker
                  </label>
                  <input
                    {...register("hero_kicker_bottom")}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                    placeholder="Search isn’t about pages anymore. It’s about answers."
                  />

                  <label className="block text-slate-600 mt-2 mb-1">
                    Category*
                  </label>
                  <select
                    {...register("category_slug", {
                      required: "Category is required",
                    })}
                    disabled={loadingCats}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] bg-white"
                  >
                    <option value="">
                      {loadingCats
                        ? "Loading..."
                        : "Select category"}
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.slug}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  {errors.category_slug && (
                    <p className="text-[9px] text-red-500 mt-0.5">
                      {errors.category_slug.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-slate-600 mb-1">
                    Author Name
                  </label>
                  <input
                    {...register("author_name")}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                    placeholder="Daniel Joseph"
                  />

                  <label className="block text-slate-600 mt-2 mb-1">
                    Author Title
                  </label>
                  <input
                    {...register("author_title")}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                    placeholder="Senior SEO Strategist"
                  />

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Published
                      </label>
                      <input
                        type="date"
                        {...register("published_date")}
                        className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 mb-1">
                        Last Updated
                      </label>
                      <input
                        type="date"
                        {...register("last_updated")}
                        className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      />
                    </div>
                  </div>

                  <label className="block text-slate-600 mt-2 mb-1">
                    Read Time (mins)
                  </label>
                  <input
                    type="number"
                    min="1"
                    {...register("read_time")}
                    className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                  />
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-600 mb-1">
                  Featured Image URL
                </label>
                <input
                  {...register("featured_image_url")}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">
                  Or Upload Featured Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("featured_image_file")}
                  className="w-full text-[9px] file:mr-2 file:px-2 file:py-1.5 file:border-0 file:rounded-md file:bg-blue-50 file:text-blue-600 border border-slate-200 rounded-lg px-1.5 py-1.5 bg-white"
                />
                <p className="text-[8px] text-slate-400 mt-0.5">
                  If both URL and file are provided, uploaded file is used.
                </p>
              </div>
            </div>

            {/* Intro */}
            <div>
              <label className="block text-slate-600 mb-1">
                Intro
              </label>
              <textarea
                {...register("intro")}
                rows={4}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs resize-y focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Hook the reader. Explain why AEO matters now..."
              />
            </div>

            {/* What's Inside */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[11px] font-semibold text-slate-900">
                  What’s Inside
                </h3>
                <button
                  type="button"
                  onClick={() => wiAppend({ label: "" })}
                  className="px-2 py-1 rounded-lg bg-slate-900 text-white text-[9px]"
                >
                  + Add Item
                </button>
              </div>
              <div className="space-y-1">
                {wiFields.map((field, idx) => (
                  <div
                    key={field.id}
                    className="flex items-center gap-2"
                  >
                    <input
                      {...register(`whats_inside.${idx}.label`)}
                      className="flex-1 rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      placeholder={`Section ${idx + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => wiRemove(idx)}
                      className="text-[9px] text-red-500"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sections */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[11px] font-semibold text-slate-900">
                  Content Sections
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    sectionAppend({
                      heading: "",
                      body: "",
                      image_url: "",
                    })
                  }
                  className="px-2 py-1 rounded-lg bg-blue-50 text-blue-600 text-[9px]"
                >
                  + Add Section
                </button>
              </div>
              <div className="space-y-3">
                {sectionFields.map((field, idx) => (
                  <div
                    key={field.id}
                    className="border border-slate-100 rounded-lg p-2 space-y-1.5 bg-slate-50/40"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <label className="text-[9px] text-slate-600">
                        Heading
                      </label>
                      <button
                        type="button"
                        onClick={() => sectionRemove(idx)}
                        className="text-[8px] text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      {...register(`sections.${idx}.heading`)}
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      placeholder="Step 1: Start by redefining your keyword universe"
                    />

                    <label className="text-[9px] text-slate-600">
                      Section Image URL (optional)
                    </label>
                    <input
                      {...register(`sections.${idx}.image_url`)}
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      placeholder="https://example.com/section-image.jpg"
                    />

                    <label className="text-[9px] text-slate-600">
                      Body
                    </label>
                    <textarea
                      {...register(`sections.${idx}.body`)}
                      rows={4}
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] resize-y"
                      placeholder="Write this part of the article..."
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[11px] font-semibold text-slate-900">
                  FAQs
                </h3>
                <button
                  type="button"
                  onClick={() =>
                    faqAppend({ question: "", answer: "" })
                  }
                  className="px-2 py-1 rounded-lg bg-blue-50 text-blue-600 text-[9px]"
                >
                  + Add FAQ
                </button>
              </div>
              <div className="space-y-2">
                {faqFields.map((field, idx) => (
                  <div
                    key={field.id}
                    className="border border-slate-100 rounded-lg p-2 bg-slate-50/60 space-y-1"
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-[9px] text-slate-600">
                        Q{idx + 1}
                      </span>
                      <button
                        type="button"
                        onClick={() => faqRemove(idx)}
                        className="text-[8px] text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                    <input
                      {...register(`faqs.${idx}.question`)}
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                      placeholder="What is the difference between AEO and traditional SEO?"
                    />
                    <textarea
                      {...register(`faqs.${idx}.answer`)}
                      rows={3}
                      className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px] resize-y"
                      placeholder="Your clear, concise answer..."
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="grid sm:grid-cols-[2fr,1fr,1fr] gap-3">
              <div>
                <label className="block text-slate-600 mb-1">
                  CTA Text
                </label>
                <textarea
                  {...register("cta_text")}
                  rows={2}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs resize-y"
                  placeholder="Ready to build your startup’s AI-ready SEO foundation? Book a free consultation..."
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">
                  CTA Button Label
                </label>
                <input
                  {...register("cta_button_label")}
                  className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                  placeholder="Book a Free Consultation"
                />
              </div>
              <div>
                <label className="block text-slate-600 mb-1">
                  CTA Button Link
                </label>
                <input
                  {...register("cta_button_link")}
                  className="w-full rounded-lg border border-slate-200 px-2 py-1.5 text-[10px]"
                  placeholder="https://your-site.com/contact"
                />
              </div>
            </div>

            {/* Categories / Tags */}
            <div>
              <label className="block text-slate-600 mb-1">
                Bottom Categories / Tags (comma separated)
              </label>
              <input
                {...register("extra_categories_text")}
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs"
                placeholder="SEO Services, Digital Marketing, Content as a Service"
              />
              <p className="text-[8px] text-slate-400 mt-0.5">
                These appear as a categories line at the end of the blog.
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={() => router.push("/admin-dashboard/blog")}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-[10px] text-slate-600 hover:bg-slate-50"
                disabled={saving}
              >
                ← Back to Blog List
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white text-[10px] font-semibold hover:bg-blue-500 disabled:opacity-60"
              >
                {saving
                  ? isEdit
                    ? "Saving..."
                    : "Publishing..."
                  : isEdit
                  ? "Save Changes"
                  : "Publish Blog"}
              </button>
            </div>
          </form>
        )}
      </main>
    </div>
  );
}
