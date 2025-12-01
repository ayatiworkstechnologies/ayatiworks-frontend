// app/components/ChallengeObjectiveSection.jsx
"use client";

export default function ChallengeObjectiveSection({
  /* ---------------- CHALLENGE ---------------- */
  challengeTitle = "The Challenge",
  challengeEyebrow = "Nippo approached Ayatiworks with a unique hurdle — while the brand was widely known for batteries, very few consumers realized Nippo also made torches, bulbs, and mosquito repellents.",
  challengeCopy = "The objective was clear: Shift perception and create buzz around the Nippo Torch as a fun, family-friendly product.",
  challengeCopy1 = "The ask? An interactive, memorable campaign that could light up conversations and brand recall across households.",
  challengeImg = "/assets/casestudy/volvo-img-2.png",
  challengeImgAlt = "Nippo challenge section background",

  /* ---------------- OBJECTIVE ---------------- */
  objectiveTitle = "The Objective",
  objectiveSubTitle = "The campaign set out to:",
  bullets = [
    "Reposition Nippo: Expand awareness beyond batteries to its full product range.",
    "Highlight the Torch: Spotlight the Nippo Torch as a family-friendly innovation.",
    "Ignite Engagement: Encourage playful, creative participation through interactive content.",
    "Drive Buzz & Shares: Turn torch usage into social-worthy, shareable experiences.",
  ],
  carImg = "/assets/casestudy/volvo-img-1.png",
  carImgAlt = "Nippo product showcase",

  /* ---------------- IDEA ---------------- */
  ideasTitle = "",
  ideasSubTitle = "",
  ideasCopy = ``,
  tagline = "",
  ideasImg = "",
  ideasImgAlt = "",

  className = "",
}) {
  return (
    <>
      <section
        className={`relative mx-auto w-full section-continer px-4 py-12 md:py-16 ${className}`}
        aria-label="Challenge, Objective and Ideas"
      >
        <div className="section-continer relative z-[1]">
          {/* Top gradient glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 z-0 h-40 w-[90%] -translate-x-1/2 blur-[30px]"
            style={{
              background:
                "radial-gradient(60% 100% at 50% 0%, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 60%)",
            }}
          />

          {/* ---------- CHALLENGE ---------- */}
          <div className="text-center max-w-6xl mx-auto">
            <h2 className="section-title">{challengeTitle}</h2>
            <p className="mt-3 section-phara">{challengeEyebrow}</p>
            <p className="mt-3 section-phara">{challengeCopy}</p>
            <p className="mt-3 section-phara">{challengeCopy1}</p>
          </div>

          {/* ---------- OBJECTIVE ---------- */}
          <div className="mx-auto mt-12 md:mt-16 grid max-w-6xl grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-6">
            {/* Text Block */}
            <div className="flex flex-col order-2 md:order-1 text-left">
              <h3 className="section-title text-3xl">{objectiveTitle}</h3>
              <h4 className="section-title text-secondary text-2xl mt-4">
                {objectiveSubTitle}
              </h4>

              <ol className="mt-4 space-y-3 section-phara leading-relaxed">
                {bullets.map((b, i) => (
                  <li
                    key={`${i}-${b?.slice?.(0, 12) || "pt"}`}
                    className="flex items-start gap-3"
                  >
                    <span className="font-medium text-zinc-500">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <img
                src={carImg}
                alt={carImgAlt}
                className="w-64 md:w-[20rem] lg:w-[24rem] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* ---------- IDEA SECTION ---------- */}
          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 md:grid-cols-2 items-center gap-10 px-4 md:px-6">
            {/* Left Image */}
            <div className="flex justify-center md:justify-start">
              <div className="overflow-hidden ">
                <img
                  src={ideasImg}
                  alt={ideasImgAlt}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Text */}
            <div className="text-left">
              <h3 className="section-title text-3xl">{ideasTitle}</h3>
              <h4 className="section-title text-secondary text-2xl mt-3">
                {ideasSubTitle}
              </h4>
              <p className="mt-4 section-phara leading-relaxed whitespace-pre-line">
                {ideasCopy}
              </p>
              <p className="mt-6 italic text-primary font-semibold section-phara">
                {tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FULL-WIDTH IMAGE ---------- */}
      <div className="relative mt-10 w-full overflow-hidden">
        <img
          src={challengeImg}
          alt={challengeImgAlt}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>
    </>
  );
}
