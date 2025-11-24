"use client";

export default function ExecutionSection({
  sectionTitle = "The Execution",
  sectionIntro = `Turning the concept into conversation through high-impact social storytelling and real family participation.`,
  reelsTitle = "Social Media Reels",
  reelsDescription = `Teaser, reveal, and UGC reels released on Instagram — each designed to fuel participation and community excitement.`,
  reels = [
    {
      label: "🎬 Teaser Reel",
      desc: "The spark that started it all.",
      url: "https://www.instagram.com/reel/C8YdvnbppTg/",
    },
    {
      label: "✨ Reveal Reel",
      desc: "The challenge goes live.",
      url: "https://www.instagram.com/reel/C8eCpqWvbs7/",
    },
    {
      label: "💡 UGC Reel",
      desc: "Real families, real fun.",
      url: "https://www.instagram.com/reel/C8rfW_pConf/",
    },
  ],
  participationTitle = "UGC Participation",
  participationCopy = `Families across India submitted unique shadow-art entries — each one reflecting creativity, nostalgia, and genuine engagement with the Nippo brand.`,
  participationHighlight = `The torch wasn’t just a light; it became a storytelling tool for every household.`,
  className = "",
}) {
  return (
    <section
      className={`relative mx-auto w-full section-continer px-4 py-12 md:py-16 bg-slate-50 ${className}`}
      aria-label={sectionTitle}
    >
      <div className="section-continer relative z-[1] max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="section-title text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
          <p className="mt-3 section-phara text-center text-slate-700  mx-auto">
            {sectionIntro}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Reels */}
          <div className="space-y-5">
            <h3 className="text-3xl font-primary text-primary">
              {reelsTitle}
            </h3>
            <p className="section-phara">{reelsDescription}</p>

            <ul className="mt-4 space-y-3">
              {reels.map((r, i) => (
                <li key={`reel-${i}`}>
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="font-medium text-xl font-primary text-slate-800">
                      {r.label}
                    </span>
                    {r.desc && (
                      <p className="text-sm font-secondary text-slate-600">{r.desc}</p>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Participation */}
          <div className="bg-white rounded-2xl p-8 shadow-[0_10px_24px_rgba(0,0,0,0.06)] border border-slate-100">
            <h3 className="text-3xl font-medium font-primary text-primary">
              {participationTitle}
            </h3>
            <p className="mt-4 section-phara leading-relaxed">
              {participationCopy}
            </p>
            <p className="mt-4 section-phara italic text-secondary">
              {participationHighlight}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
