// app/components/CaseStudyShowcase.jsx
"use client";

import Link from "next/link";

export default function CaseStudyShowcase({
  
   hero = {
  desktopImage: "/assets/jeep-banner.png",
  mobileImage: "/assets/jeep-banner-mob.png",
  imageAlt: "Advertising Agency Banner",
},
  section = {
    title: "How Ayatiworks Accelerated Volvo’s Growth Journey",
    subtitle: "Volvo XC90 parked on sunlit architectural curve, viewed from above",
  },

  // Narrative / meta defaults
  client = "Volvo Cars India",
  agency = "Ayatiworks – Next is Now",
  markets = "Chennai, Pondicherry, Tamil Nadu",
  duration = "Started driving in September 2023",
  outcome = "Achieving more milestones and the journey continues",
  downloadLabel = "Download Volvo Case Study",
  downloadHref = "",

  className = "",
}) {
  return (
    <>
    <section className={`w-full ${className}`} aria-label="Case study showcase">
  {/* HERO */}
  <div className="relative mx-auto overflow-hidden">
    <div className="relative w-full h-[320px] sm:h-[450px] md:h-[600px] mt-10">
      {/* Desktop Banner */}
      <img
        src={hero.desktopImage || hero.imageSrc}
        alt={hero.imageAlt || "Hero image"}
        className="hidden md:block h-full w-full object-cover"
        loading="lazy"
      />
      {/* Mobile Banner */}
      <img
        src={hero.mobileImage || hero.imageSrc}
        alt={hero.imageAlt || "Mobile banner"}
        className="block md:hidden h-full w-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/30 dark:to-black/30" />
    </div>
  </div>
</section>

    <section className={`w-full section-container ${className}`} aria-label="Case study showcase">
      

      {/* SECTION HEADER */}
      <div className="mx-auto px-4 pb-4 pt-10 text-center md:pt-12">
        <h2 className="section-title">{section.title}</h2>
        {section.subtitle && (
          <p className="mt-4 section-phara text-center">{section.subtitle}</p>
        )}
      </div>

      {/* META STRIP (Client / Agency / Markets / Duration) */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetaItem label="Client" value={client} />
          <MetaItem label="Agency" value={agency} />
          <MetaItem label="Target Markets" value={markets} />
          <MetaItem label="Duration" value={duration} />
        </div>
      </div>

      {/* NARRATIVE CARD */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md transition hover:bg-white/20 hover:shadow-md dark:border-white/10 dark:bg-white/5 p-6 shadow-sm ">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Left: Outcome Text */}
            <div className="flex-1">
              <h3 className="section-title text-left">Outcome</h3>
              <p className="section-phara mt-2">{outcome}</p>
            </div>

            {/* Right: CTA Button */}
            <Link
              href={downloadHref}
              className="inline-flex items-center font-primary text-xl justify-center rounded-full border border-primary bg-primary px-6 py-2.5 font-medium text-white transition hover:opacity-90 "
            >
              {downloadLabel}
            </Link>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}

/* --- small meta item component --- */
function MetaItem({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-sm backdrop-blur-md transition hover:bg-white/20 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <div className="section-title text-2xl text-left">
        {label}
      </div>
      <div className="mt-1 section-phara">
        {value}
      </div>
    </div>
  );
}
