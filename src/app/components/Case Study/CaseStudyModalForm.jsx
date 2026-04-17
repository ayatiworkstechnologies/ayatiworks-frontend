"use client";

import { useState, useRef, useEffect } from "react";
import {
  Download,
  X,
  Home,
  BookOpen,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Swal from "sweetalert2";
import { createPortal } from "react-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { RECAPTCHA_SITE_KEY } from "../../lib/recaptcha-client";

export default function CaseStudyModalForm({
  buttonText = "Enquire About Case Study",
  className = "btn-primary inline-flex items-center gap-2 no-print",
  caseStudyTitle = "",
  autoOpen = false,
  autoOpenDelay = 3000,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && autoOpen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, autoOpenDelay);
      return () => clearTimeout(timer);
    }
  }, [mounted, autoOpen, autoOpenDelay]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // Handle body scroll locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      reset();
    }, 300);
  };

  const onSubmit = async (data) => {
    if (!captchaToken) {
      Swal.fire({
        icon: "warning",
        title: "reCAPTCHA Required",
        text: "Please complete the reCAPTCHA verification.",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    try {
      setLoading(true);

      const payload = {
        data: {
          name: data.name || "",
          email: data.email || "",
          phone: data.mobile || "",
          city: data.city || "",
          casestudy_name: caseStudyTitle || "General Inquiry",
          captchaToken,
        },
      };

      const response = await fetch("/api/submit-case-study", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSuccess(true);
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `API Error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: error?.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={handleOpen}
        className={className}
        aria-label={buttonText}
      >
        {buttonText}
      </button>

      {/* Modal Overlay */}
      {mounted &&
        isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity no-print"
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-[500px] overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
              role="dialog"
              aria-modal="true"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-900"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Content Switch */}
              {!isSuccess ? (
                <div className="p-6 sm:p-8">
                  <div className="mb-6 text-center">
                    <h3 className="font-primary text-2xl font-medium text-gray-900">
                      Request Case Study Details
                    </h3>
                    <p className="mt-2 font-secondary text-sm text-gray-600">
                      Interested in {caseStudyTitle || "this case study"}? Fill
                      out the form below and our team will get back to you with
                      the full report.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name *"
                        {...register("name", { required: "Name is required" })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm font-secondary transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Your Email *"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Enter a valid email",
                          },
                        })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm font-secondary transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Your Phone Number *"
                        {...register("mobile", {
                          required: "Phone is required",
                          pattern: {
                            value: /^[0-9]{10,15}$/,
                            message: "Enter a valid phone number",
                          },
                        })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm font-secondary transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.mobile.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Your City *"
                        {...register("city", { required: "City is required" })}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm font-secondary transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      {errors.city && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-center">
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={setCaptchaToken}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-primary text-[1.1rem] text-white transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>REQUEST DETAILS</>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 border-t border-gray-100 pt-5">
                    <Link
                      href="/"
                      onClick={handleClose}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-primary text-[15px] text-gray-700 transition hover:bg-gray-50 hover:border-gray-300 shadow-sm"
                    >
                      <Home size={16} />
                      Home
                    </Link>
                    <Link
                      href="/case-study"
                      onClick={handleClose}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 font-primary text-[15px] text-gray-700 transition hover:bg-gray-50 hover:border-gray-300 shadow-sm"
                    >
                      <BookOpen size={16} />
                      Other Case Studies
                    </Link>
                  </div>
                </div>
              ) : (
                // Success State
                <div className="p-8 text-center pt-12 pb-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-primary text-3xl font-medium text-gray-900">
                    Request Sent!
                  </h3>
                  <p className="mt-3 font-secondary text-gray-600 px-4">
                    Thank you for your interest. Our team will contact you
                    shortly with the details for{" "}
                    <strong>{caseStudyTitle}</strong>.
                  </p>

                  <div className="mt-8 flex flex-col gap-3">
                    <Link
                      href="/"
                      onClick={handleClose}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary bg-primary px-5 py-3.5 font-primary text-lg text-white transition hover:bg-primary/90"
                    >
                      <Home size={18} />
                      Go to Homepage
                    </Link>
                    <Link
                      href="/case-study"
                      onClick={handleClose}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-5 py-3.5 font-primary text-lg text-gray-700 transition hover:bg-gray-50 hover:border-gray-300"
                    >
                      <BookOpen size={18} />
                      Read More Case Studies
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
