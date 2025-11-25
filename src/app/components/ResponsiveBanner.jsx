"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ResponsiveBanner({
  desktopSrc = "/banners/blog-hero-desktop.webp",
  alt = "Blog – Latest articles and insights",
  href,
  priority = true,
  className = "",
  height = 420,

  // Text props
  eyebrow,
  title,
  subtitle,
  ctaText,
  ctaHref,
}) {
  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { href, "aria-label": alt } : {};
  const loading = priority ? "eager" : "lazy";
  const boxStyle = { height: `${height}px` };

  const container = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const imgHover = { scale: 1.03 };

  return (
    <Wrapper
      {...wrapperProps}
      className={[
        "block overflow-hidden rounded-3xl border border-slate-200 shadow-sm bg-white",
        className,
      ].join(" ")}
    >
      <div className="grid md:grid-cols-2">
        {/* Left Image (same for mobile & desktop) */}
        <motion.div
          whileHover={imgHover}
          className="relative overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
          style={boxStyle}
        >
          <img
            src={desktopSrc}
            alt={alt}
            loading={loading}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center bg-gradient-to-br from-white to-slate-50 p-8 md:p-10"
        >
          <div>
            {eyebrow && (
              <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-white">
                {eyebrow}
              </span>
            )}
            {title && <h2 className="mt-3 section-title text-left">{title}
                <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
                                className="bg-secondary h-1 w-[250px] mt-3 origin-left rounded-full"
                                aria-hidden="true"
                              />
                </h2>}
            {subtitle && <p className="mt-3 section-phara">{subtitle}</p>}
            {/* CTA (optional) */}
            {/* {ctaText && (
              <div className="mt-6">
                <Link
                  href={ctaHref || "#"}
                  className="inline-flex items-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
                >
                  {ctaText}
                </Link>
              </div>
            )} */}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  );
}
