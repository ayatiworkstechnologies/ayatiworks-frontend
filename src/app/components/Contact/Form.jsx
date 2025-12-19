"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Swal from "sweetalert2"; // ✅ Import SweetAlert2
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sfma7ct";
const TEMPLATE_ID = "template_d3xto9l";
const PUBLIC_KEY = "m0GjzxjAhhGCBSLk-";
export default function Form() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm();

  // const [loading, setLoading] = useState(false);

  // const onSubmit = async (data) => {
  //   try {
  //     setLoading(true);
  //     const response = await Contactform(data); 

  //     if (response?.status === "success") {
  //       Swal.fire({
  //         icon: "success",
  //         title: "Success!",
  //         text: response?.message || "Form submitted successfully 🎉",
  //         confirmButtonColor: "#16a34a", 
  //       });
  //       reset(); 
  //     } else {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Failed",
  //         text: response?.message || "Something went wrong. Please try again.",
  //         confirmButtonColor: "#dc2626",
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Server Error",
  //       text: error?.message || "⚠️ Please try again later.",
  //       confirmButtonColor: "#f59e0b", 
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // Simple honeypot check (optional): add a hidden input named "website"
    if (data.website) return;

    const services = Array.isArray(data.services) ? data.services.join(", ") : "";
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      mobile: data.mobile,
      services,
      budget: data.budget,
      message: data.message,
      page_url: typeof window !== "undefined" ? window.location.href : "",
      submitted_at: new Date().toLocaleString(),
      // to_email: "leads@ayatiworks.com", // optional if you configured your template to use it
    };

    try {
      setLoading(true);
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      });

      if (res?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Form submitted successfully ",
          confirmButtonColor: "#16a34a",
        });
        reset();
      } else {
        throw new Error(`EmailJS error: ${res?.text || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: error?.message || "Something went wrong. Please try again.",
        confirmButtonColor: "#dc2626",
      });
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "Social Media Marketing",
    "Performance Advertising",
    "SEO and Content Marketing",
    "Multilingual Marketing",
    "Video Creation and Marketing",
    "Influencer Marketing",
    "Website & Landing Pages",
    "Branding & Identity",
    "Programmatic Advertising",
  ];

  return (
    <section className="bg-white section-container px-6" id="form">
      <div className=" max-w-[700px] mx-auto">
        {/* Title */}
        <h2 className="text-center section-title mb-2">Let’s Connect</h2>
        <p className="text-center text-gray-800 font-secondary text-base mb-2">
          Your Goal and Our Expertise!
        </p>
        
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-6 shadow-lg border border-gray-100"
        >
          <p className="text-center text-gray-800 font-secondary text-base mb-2">
          Fill out the form below and we’ll respond within one business day.
        </p>
          {/* Name */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required..." })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Mobile No */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Mobile No
            </label>
            <input
              type="tel"
              placeholder="Enter Your Mobile No"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit mobile number...",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Services */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Services Interested In
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((service, idx) => (
                <label
                  key={idx}
                  className="flex items-center gap-2 p-2 border rounded-lg hover:border-primary cursor-pointer transition"
                >
                  <input
                    type="checkbox"
                    value={service}
                    {...register("services")}
                    className="accent-primary font-secondary"
                  />
                  <span className="text-black/80 font-secondary text-base">
                    {service}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Monthly Budget */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Monthly Budget
            </label>
            <select
              {...register("budget", {
                required: "Monthly budget is required...",
              })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            >
              <option value="">Select Your Monthly Budget</option>
              <option value="Below $1000">Below $1000</option>
              <option value="$1000 - $5000">$1000 - $5000</option>
              <option value="$5000+">$5000+</option>
            </select>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email...",
                },
              })}
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block font-primary text-xl font-medium text-black mb-1">
              Message
            </label>
            <textarea
              placeholder="Describe yourself here..."
              {...register("message", { required: "Message is required..." })}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-secondary
              focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-primary hover:bg-primary/90 font-primary text-2xl text-white font-medium px-10 py-3 rounded-full 
              shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
