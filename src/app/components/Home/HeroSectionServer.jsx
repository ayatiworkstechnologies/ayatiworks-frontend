import Image from "next/image";

function HeroVideo({ src, poster, className, preload = "metadata", priority = false }) {
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
      width={1280}
      height={720}
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
      <div className="mx-auto grid max-w-[1440px] auto-rows-auto grid-cols-2 gap-3 px-4 md:grid-cols-2 md:px-6 xl:h-[600px] xl:grid-cols-12 xl:grid-rows-[180px_172px_168px]">
        <div className="col-span-2 aspect-video overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-8 xl:col-start-1 xl:row-start-1 xl:aspect-auto xl:h-full">
          <Image
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-02.webp"
            alt="Ayati Works campaign showcase"
            width={1200}
            height={675}
            className="h-full w-full object-cover md:hidden"
            priority
            fetchPriority="high"
            sizes="100vw"
          />
          <HeroVideo
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-01.mov"
            className="hidden h-full w-full object-cover md:block"
            preload="metadata"
            priority={true}
          />
        </div>

        <div className="hidden overflow-hidden rounded-2xl border border-gray-300 md:col-span-1 md:block md:aspect-[16/9] md:rounded-3xl xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:aspect-auto xl:h-full">
          <Image
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-02.webp"
            alt="Steel Rods - Manufacturing Excellence"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-4 xl:col-start-1 xl:row-start-2 xl:aspect-auto xl:h-full">
          <Image
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-03.webp"
            alt="Safety First - Kid with Helmet"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-300 md:rounded-3xl xl:col-span-4 xl:col-start-5 xl:row-start-2 xl:aspect-auto xl:h-full">
          <HeroVideo
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-04.mov"
            className="h-full w-full object-cover"
            preload="none"
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-4 xl:col-start-9 xl:row-start-2 xl:aspect-auto xl:h-full">
          <Image
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-05.webp"
            alt="Premium Pens - Quality Craftsmanship"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-300 md:rounded-3xl xl:col-span-4 xl:col-start-1 xl:row-start-3 xl:aspect-auto xl:h-full">
          <Image
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-06.webp"
            alt="Modern Gadget - Technology Innovation"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            loading="lazy"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-8 xl:col-start-5 xl:row-start-3 xl:aspect-auto xl:h-full">
          <HeroVideo
            src="https://ik.imagekit.io/bf5g7wxrp/ayatiworks-storage/banner/banner-07.mov"
            className="h-full w-full object-cover"
            preload="none"
          />
        </div>
      </div>
    </section>
  );
}
