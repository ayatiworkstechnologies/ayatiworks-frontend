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
    defaultValues: { name: "", email: "", phone: "", role: "", coverLetter: "", additionalInfo: "" },
  });

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = async (data) => {
    // Show loading modal
    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we send your application.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      let resumeBase64 = "";
      if (data.resume && data.resume.length > 0) {
        resumeBase64 = await getBase64(data.resume[0]);
      }

      const payload = {
        data: {
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          role: data.role || "",
          coverletter: data.coverLetter || "",
          additionalinfo: data.additionalInfo || "",
          resume: resumeBase64 || "No resume attached"
        }
      };

      const response = await fetch("/api/submit-career", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Thanks! We'll get back to you soon.",
          confirmButtonColor: "#3085d6",
        });
        reset();
      } else {
        const errorData = await response.json().catch(() => null);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorData?.message || "Submission failed. Please try again.",
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

          {/* Phone */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              aria-invalid={!!errors.phone}
              className="peer block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("phone", {
                required: "Please enter your phone number",
                pattern: {
                  value: /^[0-9+\-\s()]+$/,
                  message: "Enter a valid phone number",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}

          {/* Role Dropdown */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Applied Role
          </label>
          <div className="relative">
            <select
              aria-invalid={!!errors.role}
              className="peer block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 font-secondary outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("role", { required: "Please select a role" })}
            >
              <option value="">Select a Role</option>
              <option value="Digital Marketing Managers">Digital Marketing Managers</option>
              <option value="Social Media & Performance Marketing Specialists">Social Media & Performance Marketing Specialists</option>
              <option value="UI/UX Designers">UI/UX Designers</option>
              <option value="Programmatic & Media Buying Experts">Programmatic & Media Buying Experts</option>
              <option value="Brand Storytellers & PR Specialists">Brand Storytellers & PR Specialists</option>
              <option value="SEO Content Writers & Strategists">SEO Content Writers & Strategists</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Video Editor">Video Editor</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {errors.role && (
            <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
          )}

          {/* Cover Letter */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Cover Letter
          </label>
          <textarea
            placeholder="Tell us why you're a great fit..."
            rows={5}
            aria-invalid={!!errors.coverLetter}
            className="block w-full resize-y rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("coverLetter", {
              required: "Please provide a cover letter",
              minLength: { value: 10, message: "At least 10 characters" },
            })}
          />
          {errors.coverLetter && (
            <p className="mt-1 text-xs text-red-500">
              {errors.coverLetter.message}
            </p>
          )}

          {/* Resume */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Resume (PDF, DOCX)
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("resume", { required: "Please upload your resume" })}
            className="block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-sky-700"
          />
          {errors.resume && (
            <p className="mt-1 text-xs text-red-500">{errors.resume.message}</p>
          )}

          {/* Additional Info (Else) */}
          <label className="mb-2 mt-5 block text-lg font-primary font-medium text-black">
            Additional Information
          </label>
          <textarea
            placeholder="Portfolio links or any other info..."
            rows={3}
            aria-invalid={!!errors.additionalInfo}
            className="block w-full resize-y rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("additionalInfo")}
          />

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
