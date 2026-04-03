// app/components/ResultsShowcase.jsx
"use client";
import Image from "next/image";

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
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-12 md:gap-20 md:mt-10">
      {/* Left: image */}
      {hasText(topImage) && (
        <div className="overflow-hidden rounded-2xl h-full min-h-[300px] md:min-h-full">
          <Image width={800} height={800}
            src={topImage}
            alt="Meta campaign visual"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
          />
        </div>
      )}

      {/* Right: list */}
      {isNonEmptyArr(metaPoints) && (
        <div className="flex flex-col">
          {hasText(metaHeading) && (
            <h3 className="section-title text-3xl md:text-4xl text-left">
              {metaHeading}
            </h3>
          )}
          <ol className="mt-6 space-y-4 leading-relaxed section-phara text-lg md:text-xl">
            {metaPoints.map((p, i) => (
              <li
                key={`${i}-${p?.slice?.(0, 12) || "pt"}`}
                className="flex items-start gap-4"
              >
                <span className="text-primary font-bold text-xl">
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
            <h3 className="section-title text-3xl md:text-4xl text-left">
              {searchHeading}
            </h3>
          )}
          <ol className="mt-6 space-y-4 leading-relaxed section-phara text-lg md:text-xl">
            {searchPoints.map((p, i) => (
              <li
                key={`${i}-${p?.slice?.(0, 12) || "pt"}`}
                className="flex items-start gap-4"
              >
                <span className="text-primary font-bold text-xl">
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
        <div className="overflow-hidden rounded-2xl h-full min-h-[300px] md:min-h-full order-1 md:order-2">
          <Image width={800} height={800}
            src={rightImage}
            alt="Search ad visual"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.03]"
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
          <Image width={800} height={800}
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
