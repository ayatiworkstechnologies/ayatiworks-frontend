
import Image from "next/image";

// Reusable video component
function HeroVideo({
  src,
  poster,
  className = "",
  preload = "metadata",
  priority = false,
}) {
  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      className={className}
      disablePictureInPicture
      controlsList="nodownload noplaybackrate"
      {...(priority ? { fetchPriority: "high" } : {})}
    >
      <track kind="captions" />
    </video>
  );
}

export default function HeroSectionServer() {
  return (
    <section className="bg-white py-6 md:pt-20">
      <div
        className="
          mx-auto grid max-w-[1440px]
          auto-rows-auto grid-cols-2
          gap-3 px-4
          md:grid-cols-2 md:px-6
          xl:h-[600px]
          xl:grid-cols-12
          xl:grid-rows-[180px_172px_168px]
        "
      >
        {/* 1. MAIN VIDEO BANNER */}
        <div
          className="
            col-span-2 aspect-video
            overflow-hidden rounded-2xl
            md:rounded-3xl
            xl:col-span-8 xl:col-start-1
            xl:row-start-1 xl:aspect-auto xl:h-full
          "
        >
          {/* Mobile banner image */}
          <Image
            src="/banner/banner-02.webp"
            alt="Ayati Works campaign showcase"
            width={1200}
            height={675}
            className="h-full w-full object-cover md:hidden"
            priority
            fetchPriority="high"
            sizes="100vw"
          />

          {/* Desktop banner video */}
          <HeroVideo
            src="/banner/banner-01.mov"
            className="
              hidden h-full w-full
              object-cover object-center
              md:block
            "
            preload="metadata"
            priority={true}
          />
        </div>

        {/* 2. ASHIK LIGHTS */}
        <div
          className="
            hidden overflow-hidden rounded-2xl
            border border-gray-300
            md:col-span-1 md:block
            md:aspect-[16/9] md:rounded-3xl
            xl:col-span-4 xl:col-start-9
            xl:row-start-1 xl:aspect-auto xl:h-full
          "
        >
          <Image
            src="/banner/Ashik_lights.png"
            alt="Ashik Lights"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* 3. PSM */}
        <div
          className="
            col-span-1 aspect-[16/9]
            overflow-hidden rounded-2xl
            md:rounded-3xl
            xl:col-span-4 xl:col-start-1
            xl:row-start-2 xl:aspect-auto xl:h-full
          "
        >
          <Image
            src="/banner/psm.png"
            alt="PSM Silver Festival"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* 4. MIDDLE VIDEO */}
        

{/* MIDDLE VIDEO - ZOOMED WITHOUT BLACK SPACE */}
<div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-4 xl:col-start-5 xl:row-start-2 xl:aspect-auto xl:h-full">
  <video
    src="/banner/Banner_Video.mp4"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    className="
      absolute
      left-1/2
      top-1/2
      h-full
      w-full
      max-w-none
      -translate-x-1/2
      -translate-y-1/2
      scale-[4]
      object-cover
      object-center
    "
  />
</div>


        {/* 5. ROYAL DUTCH */}
        <div
          className="
            col-span-1 aspect-[16/9]
            overflow-hidden rounded-2xl
            bg-white md:rounded-3xl
            xl:col-span-4 xl:col-start-9
            xl:row-start-2 xl:aspect-auto xl:h-full
          "
        >
          <Image
            src="/banner/RD.png"
            alt="Royal Dutch Medical Center Banner"
            width={800}
            height={600}
            className="
              h-full w-full
              object-contain object-center
            "
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* 6. REGO */}
        <div
          className="
            col-span-1 aspect-[16/9]
            overflow-hidden rounded-2xl
            border border-gray-300
            md:rounded-3xl
            xl:col-span-4 xl:col-start-1
            xl:row-start-3 xl:aspect-auto xl:h-full
          "
        >
          <Image
            src="/banner/Rego.png"
            alt="Rego Cinemas Banner"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        {/* 7. BOTTOM VIDEO BANNER */}
        <div
          className="
            col-span-2 aspect-[16/9]
            overflow-hidden rounded-2xl
            bg-[#075096]
            md:rounded-3xl
            xl:col-span-8 xl:col-start-5
            xl:row-start-3 xl:aspect-auto xl:h-full
          "
        >
          <HeroVideo
            src="/banner/banner-07.mov"
            className="
              h-full w-full
              object-cover object-center
            "
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
