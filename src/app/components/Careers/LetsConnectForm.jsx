
"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// Random Word CAPTCHA
const captchaWords = [
  "X7kP9mQ",
  "R8vT2nL",
  "Q4zW9pK",
  "M7xB3rN",
  "K9pL6vX",
  "Z3nH8qR",
  "T6yF2mP",
  "B9wK4xJ",
  "L5rD8vN",
  "P2zM7kW",
  "N8xV4pR",
  "W6qJ9tB",
  "H3mZ7kF",
  "D9rK2xP",
  "Y4vL8nQ",
];

// Generate CAPTCHA
const generateCaptcha = (previous = "") => {
  const available = captchaWords.filter(
    (word) => word !== previous
  );

  return available[
    Math.floor(Math.random() * available.length)
  ];
};

export default function LetsConnectForm() {
  // Existing Google reCAPTCHA v3
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Word CAPTCHA
  const [captcha, setCaptcha] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      coverLetter: "",
      additionalInfo: "",
    },
  });

  // Word CAPTCHA validation
  const isCaptchaValid =
    captcha !== "" &&
    captchaAnswer.trim() === captcha;

  // Refresh Word CAPTCHA
  const refreshCaptcha = () => {
    setCaptcha((previous) => generateCaptcha(previous));
    setCaptchaAnswer("");
  };

  // Handle Form Submission
  const onSubmit = async (data) => {
    // Validate Word CAPTCHA
    if (!isCaptchaValid) {
      await Swal.fire({
        icon: "warning",
        title: "Invalid CAPTCHA",
        text: "Please enter the correct CAPTCHA text.",
        confirmButtonColor: "#0284c7",
      });
      return;
    }

    // Check Google reCAPTCHA availability
    if (!executeRecaptcha) {
      await Swal.fire({
        icon: "warning",
        title: "Security Verification Unavailable",
        text: "Please refresh the page and try again.",
        confirmButtonColor: "#0284c7",
      });
      return;
    }

    Swal.fire({
      title: "Submitting...",
      text: "Please wait while we send your application.",
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      // Generate Google reCAPTCHA v3 Token
      const captchaToken = await executeRecaptcha(
        "career_form"
      );

      if (!captchaToken) {
        throw new Error(
          "Google reCAPTCHA verification token missing"
        );
      }

      // Prepare Form Data
      const formData = new FormData();

      formData.append("name", data.name || "");
      formData.append("email", data.email || "");
      formData.append("phone", data.phone || "");
      formData.append("role", data.role || "");

      formData.append(
        "coverletter",
        data.coverLetter || ""
      );

      formData.append(
        "additionalinfo",
        data.additionalInfo || ""
      );

      // Resume Upload
      if (data.resume && data.resume.length > 0) {
        formData.append("resume", data.resume[0]);
      }

      // Restore original Google CAPTCHA Token
      formData.append("captchaToken", captchaToken);

      // Existing Career API
      const response = await fetch("/api/submit-career", {
        method: "POST",
        body: formData,
      });

      // Read API Response
      const responseData = await response
        .json()
        .catch(() => null);

      if (!response.ok) {
        throw new Error(
          responseData?.message ||
          responseData?.error ||
          `Submission failed (HTTP ${response.status})`
        );
      }

      // Success
      Swal.close();

      await Swal.fire({
        icon: "success",
        title: "Submitted!",
        text: "Thanks! We'll get back to you soon.",
        confirmButtonColor: "#3085d6",
      });

      // Reset form only after successful response
      reset();
      refreshCaptcha();
    } catch (error) {
      console.error(
        "Career application submission error:",
        error
      );

      Swal.close();

      await Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error?.message ||
          "Something went wrong. Please try again.",
        confirmButtonColor: "#d33",
      });

      // Keep form fields populated on failure
      refreshCaptcha();
    }
  };

  return (
    <section className="w-full" id="apply">
      <div className="mx-auto max-w-[700px] px-4 py-10 text-center">

        {/* Heading */}
        <h2 className="section-title text-secondary">
          Let's Connect
        </h2>

        <p className="mt-5 text-lg text-black/80 font-secondary">
          Your Goal and Our Expertise!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 text-left"
        >

          {/* Name */}
          <label
            htmlFor="career-name"
            className="mb-2 block text-lg font-primary font-medium text-black"
          >
            Name
          </label>

          <div className="relative">
            <input
              id="career-name"
              type="text"
              placeholder="Enter Your Name"
              aria-invalid={!!errors.name}
              className="peer block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("name", {
                required: "Please enter your name",
              })}
            />
          </div>

          {errors.name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.name.message}
            </p>
          )}

          {/* Email */}
          <label
            htmlFor="career-email"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Email Address
          </label>

          <input
            id="career-email"
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
            <p className="mt-1 text-xs text-red-500">
              {errors.email.message}
            </p>
          )}

          {/* Phone */}
          <label
            htmlFor="career-phone"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Phone Number
          </label>

          <div className="relative">
            <input
              id="career-phone"
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
            <p className="mt-1 text-xs text-red-500">
              {errors.phone.message}
            </p>
          )}

          {/* Applied Role */}
          <label
            htmlFor="career-role"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Applied Role
          </label>

          <div className="relative">
            <select
              id="career-role"
              aria-invalid={!!errors.role}
              className="peer block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 font-secondary outline-none ring-0 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              {...register("role", {
                required: "Please select a role",
              })}
            >
              <option value="">Select a Role</option>

              <option value="Digital Marketing Managers">
                Digital Marketing Managers
              </option>

              <option value="Social Media & Performance Marketing Specialists">
                Social Media & Performance Marketing Specialists
              </option>

              <option value="UI/UX Designers">
                UI/UX Designers
              </option>

              <option value="Programmatic & Media Buying Experts">
                Programmatic & Media Buying Experts
              </option>

              <option value="Brand Storytellers & PR Specialists">
                Brand Storytellers & PR Specialists
              </option>

              <option value="SEO Content Writers & Strategists">
                SEO Content Writers & Strategists
              </option>

              <option value="Web Developer">
                Web Developer
              </option>

              <option value="Video Editor">
                Video Editor
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {errors.role && (
            <p className="mt-1 text-xs text-red-500">
              {errors.role.message}
            </p>
          )}

          {/* Cover Letter */}
          <label
            htmlFor="career-cover-letter"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Cover Letter
          </label>

          <textarea
            id="career-cover-letter"
            placeholder="Tell us why you're a great fit..."
            rows={5}
            aria-invalid={!!errors.coverLetter}
            className="block w-full resize-y rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("coverLetter", {
              required: "Please provide a cover letter",
              minLength: {
                value: 10,
                message: "At least 10 characters",
              },
            })}
          />

          {errors.coverLetter && (
            <p className="mt-1 text-xs text-red-500">
              {errors.coverLetter.message}
            </p>
          )}

          {/* Resume Upload */}
          <label
            htmlFor="career-resume"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Resume (PDF, DOCX)
          </label>

          <input
            id="career-resume"
            type="file"
            accept=".pdf,.doc,.docx"
            {...register("resume", {
              required: "Please upload your resume",
            })}
            className="block w-full rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-sky-700"
          />

          {errors.resume && (
            <p className="mt-1 text-xs text-red-500">
              {errors.resume.message}
            </p>
          )}

          {/* Additional Information */}
          <label
            htmlFor="career-additional-info"
            className="mb-2 mt-5 block text-lg font-primary font-medium text-black"
          >
            Additional Information
          </label>

          <textarea
            id="career-additional-info"
            placeholder="Portfolio links or any other info..."
            rows={3}
            aria-invalid={!!errors.additionalInfo}
            className="block w-full resize-y rounded-lg border border-primary/90 bg-white px-4 py-3 text-sm text-slate-900 placeholder-primary/80 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            {...register("additionalInfo")}
          />

          {/* Word CAPTCHA - Compact Single Row */}
          <div className="mt-6">
            <label
              htmlFor="word-captcha-answer"
              className="mb-3 block text-lg font-primary font-medium text-black"
            >
              Security Verification
              <span className="text-red-500"> *</span>
            </label>

            <div className="flex w-full items-center gap-2">

              {/* CAPTCHA Display */}
              <div className="relative flex h-[46px] w-[130px] shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/90 bg-sky-50 px-2 sm:w-[145px]">

                <span
                  className="relative z-10 select-none whitespace-nowrap font-mono text-[15px] font-bold tracking-[1px] text-blue-800 sm:text-[17px]"
                  style={{
                    transform: "rotate(-3deg)",
                    textShadow: "1px 1px 1px #94a3b8",
                  }}
                >
                  {captcha || "Loading..."}
                </span>

                {/* CAPTCHA Noise Line */}
                <div className="pointer-events-none absolute left-2 right-2 top-1/2 h-px -rotate-6 bg-slate-400/30" />
              </div>

              {/* CAPTCHA Input */}
              <input
                id="word-captcha-answer"
                type="text"
                value={captchaAnswer}
                onChange={(e) => {
                  setCaptchaAnswer(e.target.value);
                }}
                placeholder="Enter CAPTCHA"
                autoComplete="off"
                spellCheck={false}
                maxLength={7}
                aria-label="Enter CAPTCHA text"
                className="h-[46px] min-w-0 flex-1 rounded-lg border border-primary/90 bg-white px-3 text-sm text-slate-900 font-secondary outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />

              {/* Refresh CAPTCHA */}
              <button
                type="button"
                onClick={refreshCaptcha}
                aria-label="Refresh CAPTCHA"
                title="Generate new CAPTCHA"
                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-lg border border-primary/90 bg-white text-xl font-semibold text-primary transition hover:bg-sky-50"
              >
                ↻
              </button>
            </div>

            {/* CAPTCHA Validation */}
            {captchaAnswer.trim() !== "" ? (
              <p
                role="status"
                className={`mt-2 text-sm ${
                  isCaptchaValid
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {isCaptchaValid
                  ? "✓ CAPTCHA verified successfully."
                  : "CAPTCHA does not match. Please try again."}
              </p>
            ) : (
              <p className="mt-2 text-xs text-gray-500">
                Enter the characters shown above. Case-sensitive.
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-7">
            <button
              type="submit"
              disabled={isSubmitting || !isCaptchaValid}
              className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 font-primary text-xl font-medium uppercase tracking-wider text-white shadow-lg shadow-sky-300/40 transition hover:bg-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
