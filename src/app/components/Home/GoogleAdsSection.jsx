"use client";
import React, { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function GoogleAdsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = useCallback(async (data) => {
    if (!executeRecaptcha) {
      Swal.fire({
        icon: "warning",
        title: "reCAPTCHA not ready",
        text: "Please wait a moment and try again.",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    try {
      setLoading(true);
      const captchaToken = await executeRecaptcha("proposal_form");
      const response = await fetch("/api/submit-proposal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            email: data.email,
            proposal: "Certified by Google",
            captchaToken,
          },
        }),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Proposal Requested!",
          text: "We have received your request. Our experts will get back to you soon.",
          confirmButtonColor: "#00A3E0",
        });
        reset();
      } else {
        throw new Error(result.message || "Failed to submit request");
      }
    } catch (error) {
      console.error("Proposal Submission Error:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again later.",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  }, [executeRecaptcha]);

  const fadeUp = (delay = 0) => ({
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 24 },
    whileInView: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.7, ease: "easeOut", delay },
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <>
      <section className="section bg-white py-12 sm:py-16">
        <div className="mx-auto section-container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column (Text & Form) */}
            <div className="md:col-span-5 lg:col-span-5 space-y-4 sm:space-y-6">
              <motion.h2
                className="section-title text-left"
                {...fadeUp(0)}
              >
                Certified by Google.<br />
                Trusted for Performance<br />
                Marketing.
              </motion.h2>

              <motion.p
                className="text-base sm:text-[17px] text-gray-500 font-secondary leading-[1.6]"
                {...fadeUp(0.1)}
              >
                Ayatiworks is officially Google Ads Certified, ensuring every campaign is built on data, strategy, and industry-standard practices.
              </motion.p>

              <motion.p
                className="text-base sm:text-[17px] text-[#8e8e8e] font-secondary"
                {...fadeUp(0.2)}
              >
                Let our experts run your Google Campaigns!
              </motion.p>

              <motion.div {...fadeUp(0.3)}>
                <form
                  className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-6 sm:mt-8 items-center"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex-1 w-full max-w-[280px]">
                    <input
                      type="email"
                      placeholder="Enter Your Email id"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      className={`w-full px-5 py-3 sm:py-[14px] border rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 font-secondary text-[15px] bg-white transition-colors ${errors.email
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : "border-gray-200 focus:ring-[#00A3E0] focus:border-[#00A3E0]"
                        }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 ml-1 font-secondary">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-[#00A3E0] hover:bg-[#0092c8] transition-all duration-300 text-white font-bold tracking-wide py-3 sm:py-[14px] px-8 sm:px-10 rounded-full font-secondary text-[16px] whitespace-nowrap shadow-sm hover:shadow-md ${loading ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                  >
                    {loading ? "Submitting..." : "Get a Proposal"}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Right Column (Image) */}
            <motion.div
              className="md:col-span-7 lg:col-span-7 flex justify-center md:justify-end"
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
              whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* The certification image wrapper */}
              <div
                className="w-full block relative cursor-zoom-in group rounded-xl overflow-hidden border border-gray-100 shadow-sm"
                onClick={() => setIsModalOpen(true)}
                title="Click to view full image"
              >
                {/* Hover Overlay with Icon */}
                <div className="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                  <div className="bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transform scale-95 group-hover:scale-100 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
                <Image
                  src="/assets/Google_Ads_Certification.jpg"
                  alt="Google Ads Search Certification"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  unoptimized
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {
        isModalOpen && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-10 cursor-zoom-out"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2 z-[1000]"
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(false); }}
              aria-label="Close Modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div
              className="relative w-full max-w-[1200px] max-h-[90vh] flex items-center justify-center cursor-default bg-white rounded-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/assets/Google_Ads_Certification.jpg"
                alt="Google Ads Search Certification Fullscreen"
                width={2000}
                height={1500}
                className="w-full h-auto max-h-[90vh] object-contain shadow-2xl"
                unoptimized
                priority
              />
            </div>
          </div>
        )
      }
    </>
  );
}
