// app/components/ResultsShowcase.jsx
"use client";

const isNonEmptyArr = (x) => Array.isArray(x) && x.length > 0;
const hasText = (x) => typeof x === "string" && x.trim().length > 0;

export default function ResultsShowcase({
  title = "The Results: More Than Just Mileage",

  // Top image (single; hide block if falsy)
  topImage = "",
  metaHeading = "Meta Campaigns (Apr 2024 – Feb 2025)",
  metaPhara= "",
  metaPoints = [],

  // Second section
  searchHeading = "Search & Google Ads (Apr 2024 – Feb 2025)",
  searchPoints = [],
  rightImage = "",

  // Closing
  closingTitle = "",
  closingCopy = "",
  logo = "",

  className = "",
}) {
  const showTopRow = hasText(topImage) || isNonEmptyArr(metaPoints);
  const showSecondRow = hasText(rightImage) || isNonEmptyArr(searchPoints);
  const showClosing =
    hasText(closingTitle) || hasText(closingCopy) || hasText(logo);

  return (
    <section
  className={`mx-auto w-full section-container px-4 py-12 md:py-16 ${className}`}
>
  {hasText(title) && <h2 className="section-title">{title}</h2>}

  {/* Row 1: image + Meta list */}
  {showTopRow && (
    <div className="grid grid-cols-1 items-center gap-10 md:mt-5 md:grid-cols-2">
      {/* Left: image */}
      {hasText(topImage) && (
        <div className="overflow-hidden rounded-xl">
          <img
            src={topImage}
            alt="Meta campaign visual"
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Right: list */}
      {isNonEmptyArr(metaPoints) && (
        <div className="flex flex-col">
          {hasText(metaHeading) && (
            <h3 className="section-title text-3xl text-left">
              {metaHeading}
            </h3>
          )}
          <ol className="mt-4 space-y-3 leading-relaxed section-phara">
            {metaPoints.map((p, i) => (
              <li
                key={`${i}-${p?.slice?.(0, 12) || "pt"}`}
                className="flex items-start gap-3"
              >
                <span className="text-primary-500 font-medium">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
          {hasText(metaPhara) && (
            <p className="section-phara text-lg text-left mt-4">
              {metaPhara}
            </p>
          )}
        </div>
      )}
    </div>
  )}

  {/* Row 2: Search list + image */}
  {showSecondRow && (
    <div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      {/* Left: list */}
      {isNonEmptyArr(searchPoints) && (
        <div className="flex flex-col order-2 md:order-1">
          {hasText(searchHeading) && (
            <h3 className="section-title text-3xl text-left">
              {searchHeading}
            </h3>
          )}
          <ol className="mt-4 space-y-3 leading-relaxed section-phara">
            {searchPoints.map((p, i) => (
              <li
                key={`${i}-${p?.slice?.(0, 12) || "pt"}`}
                className="flex items-start gap-3"
              >
                <span className="text-primary-500 font-medium">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* Right: image */}
      {hasText(rightImage) && (
        <div className="overflow-hidden rounded-2xl border border-zinc-100 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/40 order-1 md:order-2">
          <img
            src={rightImage}
            alt="Search ad visual"
            className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}
    </div>
  )}

  {/* Closing block */}
  {showClosing && (
    <div className="mt-14 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      {/* Left: title + copy */}
      {(hasText(closingTitle) || hasText(closingCopy)) && (
        <div className="order-2 md:order-1 text-left">
          {hasText(closingTitle) && (
            <h3 className="section-title text-3xl text-left">
              {closingTitle}
            </h3>
          )}
          {hasText(closingCopy) && (
            <p className="mt-3 whitespace-pre-line section-phara">
              {closingCopy}
            </p>
          )}
        </div>
      )}

      {/* Right: logo image */}
      {hasText(logo) && (
        <div className="order-1 md:order-2 flex items-center justify-center md:justify-end">
          <img
            src={logo}
            alt="Brand logo"
            className="w-auto h-auto max-h-28 object-contain transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
    </div>
  )}
</section>

  );
}
