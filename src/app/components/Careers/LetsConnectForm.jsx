// LetsConnectForm.jsx
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export default function LetsConnectForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data) => {
  // Show loading modal
  Swal.fire({
    title: "Submitting...",
    text: "Please wait while we send your message.",
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    // ✅ Send as JSON
    const res = await Careersform({
      ...data,
      
    });

    if (res?.success) {
      Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: res?.message || "Thanks! We’ll get back to you soon.",
        confirmButtonColor: "#3085d6",
      });
      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: res?.message || "Submission failed. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something went wrong. Please try later.",
      confirmButtonColor: "#d33",
    });
    console.error(err);
  }
};


  return (
    <section className="w-full " id="apply">
      <div className="mx-auto max-w-[700px] px-4 py-10 text-center">
        {/* Heading */}
        <h2 className="section-title text-secondary">Let’s Connect</h2>
        <p className="mt-5 text-lg text-black/80 font-secondary">
          Your Goal and Our Expertise!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 text-left">
          {/* Name */}
          <label className="mb-2 block text-lg font-primary font-medium text-black">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Enter Your Name"
              aria-invalid={!!errors.name}
              className="peer block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("name", { required: "Please enter your name" })}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}

          {/* Email */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            aria-invalid={!!errors.email}
            className="block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}

          {/* Message */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Message
          </label>
          <textarea
            placeholder="Describe yourself here..."
            rows={5}
            aria-invalid={!!errors.message}
            className="block w-full resize-y rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("message", {
              required: "Please enter a short message",
              minLength: { value: 10, message: "At least 10 characters" },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500">
              {errors.message.message}
            </p>
          )}

          {/* Submit */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center font-primary rounded-full bg-secondary px-8 py-3 text-xl font-medium uppercase tracking-wider text-white shadow-lg shadow-sky-300/40 transition hover:bg-primary disabled:opacity-60"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
