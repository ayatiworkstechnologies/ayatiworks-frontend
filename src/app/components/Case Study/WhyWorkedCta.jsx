"use client";
import Link from "next/link";
import Image from "next/image";
import CaseStudyModalForm from "./CaseStudyModalForm";

export default function WhyWorkedCta({
  // Top section
  title = "Why It Worked",
  points = [
    "Humanized content for a premium automobile audience",
    "Seamless integration of Meta and Google platforms",
    "Data-backed decision making with a creative soul",
    "A partnership built on performance and personality",
  ],

  // NEW: Social performance (cards)
  socialTitle = "Social Performance",
  socialSubtitle = "A snapshot of posts that moved the needle",
  socialPosts = [],

  // CTA (full-width image)
  ctaHeadline = "Ready to Shift Gears?",
  ctaCopy = "",
  ctaButtonText = "Get in Touch",
  ctaHref = "#",
  ctaImage = "/assets/casestudy/cta-banner.jpg",
  className = "",
  ctaHeadlineColor = "",
  ctaCopyColor = "",
  caseStudyTitle = ""
}) {
  const hasSocial = Array.isArray(socialPosts) && socialPosts.length > 0;

  return (
    <>
      {/* WHY IT WORKED */}
      <section
        className={`mx-auto w-full px-4 section-container py-12 md:py-16 ${className}`}
        aria-label="Why It Worked and Social Performance"
      >
        <div className="mx-auto text-center">
          <h2 className="section-title">{title}</h2>

          <ul className="mx-auto mt-8 space-y-5 text-center leading-7 section-phara">
            {points.map((p, i) => (
              <li
                key={i}
                className="border-b border-gray-200/70 pb-5 last:border-0"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIAL PERFORMANCE — added */}
        {hasSocial && (
          <div className="mx-auto mt-12 max-w-6xl">
            <div className="text-center">
              <h3 className="section-title text-3xl">{socialTitle}</h3>
              {socialSubtitle && (
                <p className="mt-2 text-center section-phara">
                  {socialSubtitle}
                </p>
              )}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {socialPosts.map((p, i) => {
                const isVideo = !!p.image?.match(/\.(mp4|mov|webm|ogg)$/i);
                return (
                  <Link
                    key={i}
                    href={p.href || "#"}
                    className="group block overflow-hidden rounded-2xl border border-white shadow-sm transition hover:shadow-md"
                    target={p.href?.startsWith("http") ? "_blank" : undefined}
                    rel={
                      p.href?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={`View on ${p.platform}: ${p.title || p.platform}`}
                  >
                    {/* Media (image or video) */}
                    <div className="relative w-full overflow-hidden bg-white ">
                      {isVideo ? (
                        <video
                          src={p.image}
                          autoPlay
                          muted
                          playsInline
                          preload="auto"
                          loop
                          onLoadedMetadata={(e) => {
                            const v = e.currentTarget;
                            v.play().catch(() => { });
                          }}
                          onCanPlay={(e) => {
                            const v = e.currentTarget;
                            if (v.paused) v.play().catch(() => { });
                          }}
                          onTouchStart={(e) => {
                            const v = e.currentTarget;
                            if (v.paused) v.play().catch(() => { });
                          }}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        >
                          <track kind="captions" />
                        </video>
                      ) : (
                        <Image
                          src={p.image}
                          alt={p.title || p.platform}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          width={400}
                          height={600}
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-1 p-4">
                      <div className="flex items-center justify-between">
                        <span className="section-phara">{p.platform}</span>
                      </div>
                      {p.title && (
                        <h4 className="mt-1 section-title text-left text-2xl">
                          {p.title}
                        </h4>
                      )}
                      {p.metrics && (
                        <p className="section-phara">{p.metrics}</p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* CTA — FULL-WIDTH IMAGE */}
      <section className={`mx-auto w-full ${className}`}>
        <div className="relative left-1/2 -translate-x-1/2">
          <div className="relative isolate w-full overflow-hidden">
            <Image
              src={ctaImage}
              alt="Background for call to action"
              className="h-[500px] w-full object-cover md:h-[600px]"
              width={1920}
              height={600}
              loading="lazy"
            />

            {/* LEFT-aligned text and CTA */}
            <div className="absolute inset-0 z-[1] flex flex-col items-start ml-20 justify-start px-6 pt-8 text-left md:pt-14 md:pl-16">
              <h3 className={`section-title max-w-[520px] text-left  ${ctaHeadlineColor}`}>
                {ctaHeadline}
              </h3>

              <p
                className={`mt-3 max-w-[420px] section-phara ${ctaCopyColor}`}
              >
                {ctaCopy}
              </p>

              <CaseStudyModalForm 
                buttonText={ctaButtonText} 
                caseStudyTitle={caseStudyTitle}
                className="mt-4 btn-primary no-print"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
