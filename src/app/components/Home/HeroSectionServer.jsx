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
          <HeroVideo
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-01.mov"
            className="h-full w-full object-cover"
            preload="metadata"
            priority={true}
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl border border-gray-300 md:rounded-3xl xl:col-span-4 xl:col-start-9 xl:row-start-1 xl:aspect-auto xl:h-full">
          <Image
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-02.webp"
            alt="Steel Rods - Manufacturing Excellence"
            width={800}
            height={600}
            className="h-full w-full object-cover"
            priority
            fetchPriority="high"
            sizes="(max-width: 1280px) 50vw, 33vw"
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-4 xl:col-start-1 xl:row-start-2 xl:aspect-auto xl:h-full">
          <Image
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-03.webp"
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
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-04.mov"
            className="h-full w-full object-cover"
            preload="metadata"
          />
        </div>

        <div className="col-span-1 aspect-[16/9] overflow-hidden rounded-2xl md:rounded-3xl xl:col-span-4 xl:col-start-9 xl:row-start-2 xl:aspect-auto xl:h-full">
          <Image
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-05.webp"
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
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-06.webp"
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
            src="https://ayatiworks-storage.s3.us-east-1.amazonaws.com/banner/banner-07.mov"
            className="h-full w-full object-cover"
            preload="metadata"
          />
        </div>
      </div>
    </section>
  );
}
