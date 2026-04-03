"use client";
import Link from "next/link";
import CaseStudyModalForm from "./CaseStudyModalForm";
import Image from "next/image";

export default function NewWhyWorkedCta({

  // CTA (full-width image)
  ctaHeadline = "Ready to Shift Gears?",
  ctaCopy = "",
  ctaButtonText = "Get in Touch",
  ctaSecondaryButtonText = "",
  ctaSecondaryHref = "",
  ctaImage = "/assets/casestudy/cta-banner.jpg",
  ctaImageMobile = "",
  className = "",
  ctaHeadlineColor = "",
  ctaCopyColor = "",
  caseStudyTitle = ""
}) {
  return (
    <>
      {/* CTA — FULL-WIDTH IMAGE */}
      <section className={`mx-auto w-full ${className}`}>
        <div className="relative left-1/2 -translate-x-1/2">
          <div className="relative isolate w-full overflow-hidden">
            <Image width={800} height={800}
              src={ctaImage}
              alt="Background for call to action"
              className={`w-full object-cover ${ctaImageMobile ? "hidden md:block h-[500px] md:h-[600px]" : "h-[500px] md:h-[600px]"}`}
              loading="lazy"
            />
            {ctaImageMobile && (
              <Image width={800} height={800}
                src={ctaImageMobile}
                alt="Background for call to action"
                className="block md:hidden h-[500px] w-full object-cover"
                loading="lazy"
              />
            )}

            {/* LEFT-aligned text and CTA */}
            <div className="absolute inset-0 z-[1] flex flex-col items-start md:ml-10 justify-start px-6 pt-12 text-left md:pt-14 md:pl-16">
              <h3 className={`section-title max-w-[520px] text-left font-primary ${ctaHeadlineColor}`}>
                {ctaHeadline}
              </h3>

              <p
                className={`mt-4 max-w-[520px] section-phara font-secondary ${ctaCopyColor}`}
              >
                {ctaCopy}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
                <CaseStudyModalForm
                  buttonText={ctaButtonText}
                  caseStudyTitle={caseStudyTitle}
                  className="btn-primary no-print shadow-lg"
                />
                
                {ctaSecondaryButtonText && ctaSecondaryHref && (
                  <Link
                    href={ctaSecondaryHref}
                    className="btn-primary no-print shadow-lg flex items-center justify-center"
                  >
                    {ctaSecondaryButtonText}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
